---
title: "MBMusicManager"
description: "Auto-generated class reference for MBMusicManager."
---
# MBMusicManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MBMusicManager`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MBMusicManager.cs`

## Overview

`MBMusicManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `MBMusicManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Current` | `public static MBMusicManager Current { get; }` |
| `CurrentMode` | `public MusicMode CurrentMode { get; }` |

## Key Methods

### GetCampaignTheme
`public MusicTheme GetCampaignTheme(BasicCultureObject culture, bool isDark)`

**Purpose:** **Purpose:** Reads and returns the campaign theme value held by the this instance.

```csharp
// Obtain an instance of MBMusicManager from the subsystem API first
MBMusicManager mBMusicManager = ...;
var result = mBMusicManager.GetCampaignTheme(culture, false);
```

### GetCampaignDramaticThemeWithCulture
`public MusicTheme GetCampaignDramaticThemeWithCulture(BasicCultureObject culture)`

**Purpose:** **Purpose:** Reads and returns the campaign dramatic theme with culture value held by the this instance.

```csharp
// Obtain an instance of MBMusicManager from the subsystem API first
MBMusicManager mBMusicManager = ...;
var result = mBMusicManager.GetCampaignDramaticThemeWithCulture(culture);
```

### GetSeaCampignMusic
`public MusicTheme GetSeaCampignMusic(BasicCultureObject culture)`

**Purpose:** **Purpose:** Reads and returns the sea campign music value held by the this instance.

```csharp
// Obtain an instance of MBMusicManager from the subsystem API first
MBMusicManager mBMusicManager = ...;
var result = mBMusicManager.GetSeaCampignMusic(culture);
```

### GetBattleTheme
`public MusicTheme GetBattleTheme(BasicCultureObject culture, int battleSize, out bool isPaganBattle)`

**Purpose:** **Purpose:** Reads and returns the battle theme value held by the this instance.

```csharp
// Obtain an instance of MBMusicManager from the subsystem API first
MBMusicManager mBMusicManager = ...;
var result = mBMusicManager.GetBattleTheme(culture, 0, isPaganBattle);
```

### GetSiegeTheme
`public MusicTheme GetSiegeTheme(BasicCultureObject culture)`

**Purpose:** **Purpose:** Reads and returns the siege theme value held by the this instance.

```csharp
// Obtain an instance of MBMusicManager from the subsystem API first
MBMusicManager mBMusicManager = ...;
var result = mBMusicManager.GetSiegeTheme(culture);
```

### GetBattleEndTheme
`public MusicTheme GetBattleEndTheme(BasicCultureObject culture, bool isVictorious)`

**Purpose:** **Purpose:** Reads and returns the battle end theme value held by the this instance.

```csharp
// Obtain an instance of MBMusicManager from the subsystem API first
MBMusicManager mBMusicManager = ...;
var result = mBMusicManager.GetBattleEndTheme(culture, false);
```

### IsCreationCompleted
`public static bool IsCreationCompleted()`

**Purpose:** **Purpose:** Determines whether the this instance is in the creation completed state or condition.

```csharp
// Static call; no instance required
MBMusicManager.IsCreationCompleted();
```

### Create
`public static void Create()`

**Purpose:** **Purpose:** Creates a new instance or related entity for the this instance.

```csharp
// Static call; no instance required
MBMusicManager.Create();
```

### Initialize
`public static void Initialize()`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Static call; no instance required
MBMusicManager.Initialize();
```

### OnCampaignMusicHandlerInit
`public void OnCampaignMusicHandlerInit(IMusicHandler campaignMusicHandler)`

**Purpose:** **Purpose:** Invoked when the campaign music handler init event is raised.

```csharp
// Obtain an instance of MBMusicManager from the subsystem API first
MBMusicManager mBMusicManager = ...;
mBMusicManager.OnCampaignMusicHandlerInit(campaignMusicHandler);
```

### OnCampaignMusicHandlerFinalize
`public void OnCampaignMusicHandlerFinalize()`

**Purpose:** **Purpose:** Invoked when the campaign music handler finalize event is raised.

```csharp
// Obtain an instance of MBMusicManager from the subsystem API first
MBMusicManager mBMusicManager = ...;
mBMusicManager.OnCampaignMusicHandlerFinalize();
```

### OnBattleMusicHandlerInit
`public void OnBattleMusicHandlerInit(IMusicHandler battleMusicHandler)`

**Purpose:** **Purpose:** Invoked when the battle music handler init event is raised.

```csharp
// Obtain an instance of MBMusicManager from the subsystem API first
MBMusicManager mBMusicManager = ...;
mBMusicManager.OnBattleMusicHandlerInit(battleMusicHandler);
```

### OnBattleMusicHandlerFinalize
`public void OnBattleMusicHandlerFinalize()`

**Purpose:** **Purpose:** Invoked when the battle music handler finalize event is raised.

```csharp
// Obtain an instance of MBMusicManager from the subsystem API first
MBMusicManager mBMusicManager = ...;
mBMusicManager.OnBattleMusicHandlerFinalize();
```

### OnSilencedMusicHandlerInit
`public void OnSilencedMusicHandlerInit(IMusicHandler silencedMusicHandler)`

**Purpose:** **Purpose:** Invoked when the silenced music handler init event is raised.

```csharp
// Obtain an instance of MBMusicManager from the subsystem API first
MBMusicManager mBMusicManager = ...;
mBMusicManager.OnSilencedMusicHandlerInit(silencedMusicHandler);
```

### OnSilencedMusicHandlerFinalize
`public void OnSilencedMusicHandlerFinalize()`

**Purpose:** **Purpose:** Invoked when the silenced music handler finalize event is raised.

```csharp
// Obtain an instance of MBMusicManager from the subsystem API first
MBMusicManager mBMusicManager = ...;
mBMusicManager.OnSilencedMusicHandlerFinalize();
```

### ActivateBattleMode
`public void ActivateBattleMode()`

**Purpose:** **Purpose:** Activates the resource, state, or feature associated with battle mode.

```csharp
// Obtain an instance of MBMusicManager from the subsystem API first
MBMusicManager mBMusicManager = ...;
mBMusicManager.ActivateBattleMode();
```

### DeactivateBattleMode
`public void DeactivateBattleMode()`

**Purpose:** **Purpose:** Deactivates the resource, state, or feature associated with battle mode.

```csharp
// Obtain an instance of MBMusicManager from the subsystem API first
MBMusicManager mBMusicManager = ...;
mBMusicManager.DeactivateBattleMode();
```

### ActivateCampaignMode
`public void ActivateCampaignMode()`

**Purpose:** **Purpose:** Activates the resource, state, or feature associated with campaign mode.

```csharp
// Obtain an instance of MBMusicManager from the subsystem API first
MBMusicManager mBMusicManager = ...;
mBMusicManager.ActivateCampaignMode();
```

### DeactivateCampaignMode
`public void DeactivateCampaignMode()`

**Purpose:** **Purpose:** Deactivates the resource, state, or feature associated with campaign mode.

```csharp
// Obtain an instance of MBMusicManager from the subsystem API first
MBMusicManager mBMusicManager = ...;
mBMusicManager.DeactivateCampaignMode();
```

### DeactivateCurrentMode
`public void DeactivateCurrentMode()`

**Purpose:** **Purpose:** Deactivates the resource, state, or feature associated with current mode.

```csharp
// Obtain an instance of MBMusicManager from the subsystem API first
MBMusicManager mBMusicManager = ...;
mBMusicManager.DeactivateCurrentMode();
```

### UnpauseMusicManagerSystem
`public void UnpauseMusicManagerSystem()`

**Purpose:** **Purpose:** Executes the UnpauseMusicManagerSystem logic.

```csharp
// Obtain an instance of MBMusicManager from the subsystem API first
MBMusicManager mBMusicManager = ...;
mBMusicManager.UnpauseMusicManagerSystem();
```

### PauseMusicManagerSystem
`public void PauseMusicManagerSystem()`

**Purpose:** **Purpose:** Executes the PauseMusicManagerSystem logic.

```csharp
// Obtain an instance of MBMusicManager from the subsystem API first
MBMusicManager mBMusicManager = ...;
mBMusicManager.PauseMusicManagerSystem();
```

### StartTheme
`public void StartTheme(MusicTheme theme, float startIntensity, bool queueEndSegment = false)`

**Purpose:** **Purpose:** Starts the theme flow or state machine.

```csharp
// Obtain an instance of MBMusicManager from the subsystem API first
MBMusicManager mBMusicManager = ...;
mBMusicManager.StartTheme(theme, 0, false);
```

### StartThemeWithConstantIntensity
`public void StartThemeWithConstantIntensity(MusicTheme theme, bool queueEndSegment = false)`

**Purpose:** **Purpose:** Starts the theme with constant intensity flow or state machine.

```csharp
// Obtain an instance of MBMusicManager from the subsystem API first
MBMusicManager mBMusicManager = ...;
mBMusicManager.StartThemeWithConstantIntensity(theme, false);
```

### ForceStopThemeWithFadeOut
`public void ForceStopThemeWithFadeOut()`

**Purpose:** **Purpose:** Executes the ForceStopThemeWithFadeOut logic.

```csharp
// Obtain an instance of MBMusicManager from the subsystem API first
MBMusicManager mBMusicManager = ...;
mBMusicManager.ForceStopThemeWithFadeOut();
```

### ChangeCurrentThemeIntensity
`public void ChangeCurrentThemeIntensity(float deltaIntensity)`

**Purpose:** **Purpose:** Executes the ChangeCurrentThemeIntensity logic.

```csharp
// Obtain an instance of MBMusicManager from the subsystem API first
MBMusicManager mBMusicManager = ...;
mBMusicManager.ChangeCurrentThemeIntensity(0);
```

### Update
`public void Update(float dt)`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of the this instance.

```csharp
// Obtain an instance of MBMusicManager from the subsystem API first
MBMusicManager mBMusicManager = ...;
mBMusicManager.Update(0);
```

### GetSiegeTheme
`public MusicTheme GetSiegeTheme(BasicCultureObject culture)`

**Purpose:** **Purpose:** Reads and returns the siege theme value held by the this instance.

```csharp
// Obtain an instance of MBMusicManager from the subsystem API first
MBMusicManager mBMusicManager = ...;
var result = mBMusicManager.GetSiegeTheme(culture);
```

### GetBattleTheme
`public MusicTheme GetBattleTheme(BasicCultureObject culture, int battleSize, out bool isPaganBattle)`

**Purpose:** **Purpose:** Reads and returns the battle theme value held by the this instance.

```csharp
// Obtain an instance of MBMusicManager from the subsystem API first
MBMusicManager mBMusicManager = ...;
var result = mBMusicManager.GetBattleTheme(culture, 0, isPaganBattle);
```

### GetBattleEndTheme
`public MusicTheme GetBattleEndTheme(BasicCultureObject culture, bool isVictory)`

**Purpose:** **Purpose:** Reads and returns the battle end theme value held by the this instance.

```csharp
// Obtain an instance of MBMusicManager from the subsystem API first
MBMusicManager mBMusicManager = ...;
var result = mBMusicManager.GetBattleEndTheme(culture, false);
```

### GetBattleTurnsOneSideTheme
`public MusicTheme GetBattleTurnsOneSideTheme(BasicCultureObject culture, bool isPositive, bool isPaganBattle)`

**Purpose:** **Purpose:** Reads and returns the battle turns one side theme value held by the this instance.

```csharp
// Obtain an instance of MBMusicManager from the subsystem API first
MBMusicManager mBMusicManager = ...;
var result = mBMusicManager.GetBattleTurnsOneSideTheme(culture, false, false);
```

### GetCampaignMusicTheme
`public MusicTheme GetCampaignMusicTheme(BasicCultureObject culture, bool isDark, bool isWarMode, bool isAtSea)`

**Purpose:** **Purpose:** Reads and returns the campaign music theme value held by the this instance.

```csharp
// Obtain an instance of MBMusicManager from the subsystem API first
MBMusicManager mBMusicManager = ...;
var result = mBMusicManager.GetCampaignMusicTheme(culture, false, false, false);
```

## Usage Example

```csharp
var manager = MBMusicManager.Current;
```

## See Also

- [Area Index](../)