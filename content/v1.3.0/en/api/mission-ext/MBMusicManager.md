---
title: "MBMusicManager"
description: "Auto-generated class reference for MBMusicManager."
---
# MBMusicManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MBMusicManager`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MBMusicManager.cs`

## Overview

`MBMusicManager` is the managed front end for the game's adaptive soundtrack, and it has a genuinely unusual lifecycle. The constructor is **private** (`MBMusicManager.cs:27`); you never build one. `Create()` queues work on the thread pool (`MBMusicManager.cs:61`) whose callback assigns `Current = new MBMusicManager()` and sets a completion flag (`MBMusicManager.cs:53`). So `Current` is populated **asynchronously**, and `IsCreationCompleted()` (`MBMusicManager.cs:45`) is the only way to ask whether it exists yet.

The constructor itself does the expensive part: unless `NativeConfig.DisableSound`, it scans every module's Mbproj XML for the project id `soln_soundtrack`, collects the owning module names (`MBMusicManager.cs:34`), and hands them to `PsaiCore.Instance.LoadSoundtrackFromProjectFile` (`MBMusicManager.cs:40`).

`Initialize()` (`MBMusicManager.cs:65`) is the second phase, and it is idempotent via an `_initialized` flag (`MBMusicManager.cs:67`). It creates the two mode objects — `BattleMusicMode` (`MBMusicManager.cs:69`) and `CampaignMusicMode` (`MBMusicManager.cs:70`) — sets `CurrentMode = MusicMode.Paused`, and arms a `_menuModeActivationTimer` of `0.5f` (`MBMusicManager.cs:72`) which delays the menu theme so it does not collide with the loading screen.

## Mental Model

`Create()` is fire-and-forget on a thread pool thread, and `Current` is null until it finishes. This is the single most important fact about the type: `Current` has a private setter and is only assigned inside `ProcessCreation`, which runs on the pool (`MBMusicManager.cs:53`). Any mod code that touches `MBMusicManager.Current` during module initialisation without checking `IsCreationCompleted()` first dereferences null — and because the assignment happens on a background thread, the failure is intermittent under load rather than deterministic.

`Initialize()` also assumes `Current` is non-null. It dereferences `Current._battleMode` immediately (`MBMusicManager.cs:69`), so calling it before creation completes throws rather than being a no-op. The two-phase contract is `Create` → wait for `IsCreationCompleted()` → `Initialize`, and nothing in this file enforces the ordering for you.

Mode activation is gated by `_systemPaused`, and the gate is inconsistent between the activate and deactivate halves. `ActivateBattleMode` (`MBMusicManager.cs:150`) and `ActivateCampaignMode` (`MBMusicManager.cs:166`) do nothing while paused — they only set `CurrentMode`. Their counterparts `DeactivateBattleMode` (`MBMusicManager.cs:159`) and `DeactivateCampaignMode` (`MBMusicManager.cs:175`) have **no** such guard: they call `PsaiCore.Instance.StopMusic(true, 3f)` and set `CurrentMode = MusicMode.Paused` unconditionally. So pausing does not make mode changes inert — it makes activations inert while deactivations still reach the engine.

The active handler is a priority chain, not a stack. `CheckActiveHandler` (`MBMusicManager.cs:121`) prefers the battle handler, then the silenced handler, then the campaign handler. It is called on *finalize* — `OnCampaignMusicHandlerFinalize` nulls the campaign handler and re-runs the chain (`MBMusicManager.cs:88`) — so the music that survives a battle ending is whatever the chain picks, not necessarily the campaign handler.

`Update(float dt)` (`MBMusicManager.cs:258`) is guarded against being called more than once per engine frame (`MBMusicManager.cs:260`): it compares `Utilities.EngineFrameNo` against `_latestFrameUpdatedNo` and returns early on a match (`MBMusicManager.cs:262`). The timer decrement and the mode bookkeeping therefore happen once per frame regardless of how many callers you have.

Themes are triggers, not loops. `StartTheme(theme, startIntensity, queueEndSegment)` calls `PsaiCore.Instance.TriggerMusicTheme` (`MBMusicManager.cs:231`) and, when `queueEndSegment` is true, also issues a `StopMusic(false, 3f)` to queue the end segment (`MBMusicManager.cs:234`). `StartThemeWithConstantIntensity` first calls `HoldCurrentIntensity(true)` then delegates with intensity `0f` (`MBMusicManager.cs:239`) — so the two differ in whether the engine is allowed to shape the intensity, not just in arguments.

The theme getters are duplicates by accident of decompilation, not by design: `GetBattleTheme` and `GetSiegeTheme` each appear twice in the member tables with the same signatures. Treat the pair as one method each.

## How to use

**Getting one.** There is nothing to construct. The engine calls `Create()` and `Initialize()`; you read `Current` — but only after `IsCreationCompleted()` returns true.

**Typical use** — driving a theme from a mission, guarding creation first:

```csharp
using TaleWorlds.MountAndBlade;

public static class MyMissionMusic
{
    public static void PlayBattleTheme(MusicTheme theme)
    {
        // Current is assigned on a thread-pool thread (MBMusicManager.cs:53).
        if (!MBMusicManager.IsCreationCompleted() || MBMusicManager.Current == null)
        {
            return;
        }

        MBMusicManager.Current.ActivateBattleMode();

        // intensity 0 lets the engine shape it; queueEndSegment queues the tail.
        MBMusicManager.Current.StartTheme(theme, 0f, queueEndSegment: true);
    }

    public static void FadeOut()
    {
        if (MBMusicManager.IsCreationCompleted() && MBMusicManager.Current != null)
        {
            // Deactivate has no _systemPaused guard, unlike Activate.
            MBMusicManager.Current.DeactivateBattleMode();
            MBMusicManager.Current.CurrentModeIs(MusicMode.Paused);
        }
    }

    public static void Tick(float dt)
    {
        if (MBMusicManager.IsCreationCompleted() && MBMusicManager.Current != null)
        {
            // Once per engine frame regardless of call count.
            MBMusicManager.Current.Update(dt);
        }
    }
}
```

`MBMusicManager.IsCreationCompleted()` (`MBMusicManager.cs:45`), `MusicMode` and `PsaiCore.Instance` are the real members; the theme must come from your module's `MusicParameters` data, which `Initialize` loads via `MusicParameters.LoadFromXml()` (`MBMusicManager.cs:54`).

**Most common mistake:** touching `Current` right after `Create()` without checking completion.

```csharp
MBMusicManager.Create();
MBMusicManager.Current.StartTheme(theme, 1f);   // NullReferenceException, intermittently
```

`Create()` only queues the work (`MBMusicManager.cs:61`); `Current` is assigned inside that queued callback (`MBMusicManager.cs:53`). Because it runs on a thread-pool thread, whether it has finished when your line runs depends on scheduling — so this crash reproduces for some users and not others, which is far worse than a consistent one. Poll `IsCreationCompleted()` first, exactly as the example does, and do the same before `Initialize()` since that dereferences `Current` too.

## Key Properties

| Name | Signature |
|------|-----------|
| `Current` | `public static MBMusicManager Current { get; }` |
| `CurrentMode` | `public MusicMode CurrentMode { get; }` |

## Key Methods

### IsCreationCompleted
`public static bool IsCreationCompleted()`

**Purpose:** Determines whether the this instance is in the creation completed state or condition.

```csharp
// Static call; no instance required
MBMusicManager.IsCreationCompleted();
```

### Create
`public static void Create()`

**Purpose:** Creates a new instance or related entity for the this instance.

```csharp
// Static call; no instance required
MBMusicManager.Create();
```

### Initialize
`public static void Initialize()`

**Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Static call; no instance required
MBMusicManager.Initialize();
```

### OnCampaignMusicHandlerInit
`public void OnCampaignMusicHandlerInit(IMusicHandler campaignMusicHandler)`

**Purpose:** Invoked when the campaign music handler init event is raised.

```csharp
// Obtain an instance of MBMusicManager from the subsystem API first
MBMusicManager mBMusicManager = ...;
mBMusicManager.OnCampaignMusicHandlerInit(campaignMusicHandler);
```

### OnCampaignMusicHandlerFinalize
`public void OnCampaignMusicHandlerFinalize()`

**Purpose:** Invoked when the campaign music handler finalize event is raised.

```csharp
// Obtain an instance of MBMusicManager from the subsystem API first
MBMusicManager mBMusicManager = ...;
mBMusicManager.OnCampaignMusicHandlerFinalize();
```

### OnBattleMusicHandlerInit
`public void OnBattleMusicHandlerInit(IMusicHandler battleMusicHandler)`

**Purpose:** Invoked when the battle music handler init event is raised.

```csharp
// Obtain an instance of MBMusicManager from the subsystem API first
MBMusicManager mBMusicManager = ...;
mBMusicManager.OnBattleMusicHandlerInit(battleMusicHandler);
```

### OnBattleMusicHandlerFinalize
`public void OnBattleMusicHandlerFinalize()`

**Purpose:** Invoked when the battle music handler finalize event is raised.

```csharp
// Obtain an instance of MBMusicManager from the subsystem API first
MBMusicManager mBMusicManager = ...;
mBMusicManager.OnBattleMusicHandlerFinalize();
```

### OnSilencedMusicHandlerInit
`public void OnSilencedMusicHandlerInit(IMusicHandler silencedMusicHandler)`

**Purpose:** Invoked when the silenced music handler init event is raised.

```csharp
// Obtain an instance of MBMusicManager from the subsystem API first
MBMusicManager mBMusicManager = ...;
mBMusicManager.OnSilencedMusicHandlerInit(silencedMusicHandler);
```

### OnSilencedMusicHandlerFinalize
`public void OnSilencedMusicHandlerFinalize()`

**Purpose:** Invoked when the silenced music handler finalize event is raised.

```csharp
// Obtain an instance of MBMusicManager from the subsystem API first
MBMusicManager mBMusicManager = ...;
mBMusicManager.OnSilencedMusicHandlerFinalize();
```

### ActivateBattleMode
`public void ActivateBattleMode()`

**Purpose:** Activates the resource, state, or feature associated with battle mode.

```csharp
// Obtain an instance of MBMusicManager from the subsystem API first
MBMusicManager mBMusicManager = ...;
mBMusicManager.ActivateBattleMode();
```

### DeactivateBattleMode
`public void DeactivateBattleMode()`

**Purpose:** Deactivates the resource, state, or feature associated with battle mode.

```csharp
// Obtain an instance of MBMusicManager from the subsystem API first
MBMusicManager mBMusicManager = ...;
mBMusicManager.DeactivateBattleMode();
```

### ActivateCampaignMode
`public void ActivateCampaignMode()`

**Purpose:** Activates the resource, state, or feature associated with campaign mode.

```csharp
// Obtain an instance of MBMusicManager from the subsystem API first
MBMusicManager mBMusicManager = ...;
mBMusicManager.ActivateCampaignMode();
```

### DeactivateCampaignMode
`public void DeactivateCampaignMode()`

**Purpose:** Deactivates the resource, state, or feature associated with campaign mode.

```csharp
// Obtain an instance of MBMusicManager from the subsystem API first
MBMusicManager mBMusicManager = ...;
mBMusicManager.DeactivateCampaignMode();
```

### DeactivateCurrentMode
`public void DeactivateCurrentMode()`

**Purpose:** Deactivates the resource, state, or feature associated with current mode.

```csharp
// Obtain an instance of MBMusicManager from the subsystem API first
MBMusicManager mBMusicManager = ...;
mBMusicManager.DeactivateCurrentMode();
```

### UnpauseMusicManagerSystem
`public void UnpauseMusicManagerSystem()`

**Purpose:** Executes the UnpauseMusicManagerSystem logic.

```csharp
// Obtain an instance of MBMusicManager from the subsystem API first
MBMusicManager mBMusicManager = ...;
mBMusicManager.UnpauseMusicManagerSystem();
```

### PauseMusicManagerSystem
`public void PauseMusicManagerSystem()`

**Purpose:** Executes the PauseMusicManagerSystem logic.

```csharp
// Obtain an instance of MBMusicManager from the subsystem API first
MBMusicManager mBMusicManager = ...;
mBMusicManager.PauseMusicManagerSystem();
```

### StartTheme
`public void StartTheme(MusicTheme theme, float startIntensity, bool queueEndSegment = false)`

**Purpose:** Starts the theme flow or state machine.

```csharp
// Obtain an instance of MBMusicManager from the subsystem API first
MBMusicManager mBMusicManager = ...;
mBMusicManager.StartTheme(theme, 0, false);
```

### StartThemeWithConstantIntensity
`public void StartThemeWithConstantIntensity(MusicTheme theme, bool queueEndSegment = false)`

**Purpose:** Starts the theme with constant intensity flow or state machine.

```csharp
// Obtain an instance of MBMusicManager from the subsystem API first
MBMusicManager mBMusicManager = ...;
mBMusicManager.StartThemeWithConstantIntensity(theme, false);
```

### ForceStopThemeWithFadeOut
`public void ForceStopThemeWithFadeOut()`

**Purpose:** Executes the ForceStopThemeWithFadeOut logic.

```csharp
// Obtain an instance of MBMusicManager from the subsystem API first
MBMusicManager mBMusicManager = ...;
mBMusicManager.ForceStopThemeWithFadeOut();
```

### ChangeCurrentThemeIntensity
`public void ChangeCurrentThemeIntensity(float deltaIntensity)`

**Purpose:** Executes the ChangeCurrentThemeIntensity logic.

```csharp
// Obtain an instance of MBMusicManager from the subsystem API first
MBMusicManager mBMusicManager = ...;
mBMusicManager.ChangeCurrentThemeIntensity(0);
```

### Update
`public void Update(float dt)`

**Purpose:** Recalculates and stores the latest representation of the this instance.

```csharp
// Obtain an instance of MBMusicManager from the subsystem API first
MBMusicManager mBMusicManager = ...;
mBMusicManager.Update(0);
```

### GetSiegeTheme
`public MusicTheme GetSiegeTheme(BasicCultureObject culture)`

**Purpose:** Reads and returns the siege theme value held by the this instance.

```csharp
// Obtain an instance of MBMusicManager from the subsystem API first
MBMusicManager mBMusicManager = ...;
var result = mBMusicManager.GetSiegeTheme(culture);
```

### GetBattleTheme
`public MusicTheme GetBattleTheme(BasicCultureObject culture, int battleSize, out bool isPaganBattle)`

**Purpose:** Reads and returns the battle theme value held by the this instance.

```csharp
// Obtain an instance of MBMusicManager from the subsystem API first
MBMusicManager mBMusicManager = ...;
var result = mBMusicManager.GetBattleTheme(culture, 0, isPaganBattle);
```

### GetBattleEndTheme
`public MusicTheme GetBattleEndTheme(BasicCultureObject culture, bool isVictory)`

**Purpose:** Reads and returns the battle end theme value held by the this instance.

```csharp
// Obtain an instance of MBMusicManager from the subsystem API first
MBMusicManager mBMusicManager = ...;
var result = mBMusicManager.GetBattleEndTheme(culture, false);
```

### GetBattleTurnsOneSideTheme
`public MusicTheme GetBattleTurnsOneSideTheme(BasicCultureObject culture, bool isPositive, bool isPaganBattle)`

**Purpose:** Reads and returns the battle turns one side theme value held by the this instance.

```csharp
// Obtain an instance of MBMusicManager from the subsystem API first
MBMusicManager mBMusicManager = ...;
var result = mBMusicManager.GetBattleTurnsOneSideTheme(culture, false, false);
```

### GetCampaignMusicTheme
`public MusicTheme GetCampaignMusicTheme(BasicCultureObject culture, bool isDark, bool isWarMode, bool isAtSea)`

**Purpose:** Reads and returns the campaign music theme value held by the this instance.

```csharp
// Obtain an instance of MBMusicManager from the subsystem API first
MBMusicManager mBMusicManager = ...;
var result = mBMusicManager.GetCampaignMusicTheme(culture, false, false, false);
```

### GetCampaignTheme
`public MusicTheme GetCampaignTheme(BasicCultureObject culture, bool isDark)`

**Purpose:** Reads and returns the campaign theme value held by the this instance.

```csharp
// Obtain an instance of MBMusicManager from the subsystem API first
MBMusicManager mBMusicManager = ...;
var result = mBMusicManager.GetCampaignTheme(culture, false);
```

### GetCampaignDramaticThemeWithCulture
`public MusicTheme GetCampaignDramaticThemeWithCulture(BasicCultureObject culture)`

**Purpose:** Reads and returns the campaign dramatic theme with culture value held by the this instance.

```csharp
// Obtain an instance of MBMusicManager from the subsystem API first
MBMusicManager mBMusicManager = ...;
var result = mBMusicManager.GetCampaignDramaticThemeWithCulture(culture);
```

### GetSeaCampignMusic
`public MusicTheme GetSeaCampignMusic(BasicCultureObject culture)`

**Purpose:** Reads and returns the sea campign music value held by the this instance.

```csharp
// Obtain an instance of MBMusicManager from the subsystem API first
MBMusicManager mBMusicManager = ...;
var result = mBMusicManager.GetSeaCampignMusic(culture);
```

### GetBattleTheme
`public MusicTheme GetBattleTheme(BasicCultureObject culture, int battleSize, out bool isPaganBattle)`

**Purpose:** Reads and returns the battle theme value held by the this instance.

```csharp
// Obtain an instance of MBMusicManager from the subsystem API first
MBMusicManager mBMusicManager = ...;
var result = mBMusicManager.GetBattleTheme(culture, 0, isPaganBattle);
```

### GetSiegeTheme
`public MusicTheme GetSiegeTheme(BasicCultureObject culture)`

**Purpose:** Reads and returns the siege theme value held by the this instance.

```csharp
// Obtain an instance of MBMusicManager from the subsystem API first
MBMusicManager mBMusicManager = ...;
var result = mBMusicManager.GetSiegeTheme(culture);
```

### GetBattleEndTheme
`public MusicTheme GetBattleEndTheme(BasicCultureObject culture, bool isVictorious)`

**Purpose:** Reads and returns the battle end theme value held by the this instance.

```csharp
// Obtain an instance of MBMusicManager from the subsystem API first
MBMusicManager mBMusicManager = ...;
var result = mBMusicManager.GetBattleEndTheme(culture, false);
```

## Usage Example

```csharp
var manager = MBMusicManager.Current;
```

## See Also

- [Area Index](../)
- [IMusicHandler — the handler type the mode objects hold](../IMusicHandler)
- [MusicMode — the state `CurrentMode` reports](../MusicMode)
- [MusicTheme — the theme ids passed to `StartTheme`](../MusicTheme)
- [中文页面](../../../../zh/api/mission-ext/MBMusicManager)