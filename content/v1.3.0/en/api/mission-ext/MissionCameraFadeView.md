---
title: "MissionCameraFadeView"
description: "Auto-generated class reference for MissionCameraFadeView."
---
# MissionCameraFadeView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionCameraFadeView : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionCameraFadeView.cs`

## Overview

`MissionCameraFadeView` is the `[DefaultView]`-attributed mission view that owns the mission's screen fade, and it is the **state-machine** half of a two-type arrangement: it holds the state and the alpha, and `MissionGauntletCameraFadeView` renders it. It carries `[DefaultView]` at `MissionCameraFadeView.cs:7`, so it is instantiated automatically in **every** mission by the reflection scan in `ViewCreatorManager.CollectDefaults` and `CreateDefaultMissionBehaviors` — you never construct it, and code that wants to fade finds it by type.

The state is four values in a nested `public enum CameraFadeState` — `White`, `FadingOut`, `Black`, `FadingIn` (`MissionCameraFadeView.cs:168` through `MissionCameraFadeView.cs:178`) — exposed as `FadeState`, plus one float, `FadeAlpha` (`MissionCameraFadeView.cs:13`). Three read-only conveniences derive from that state: `IsCameraFading` is true for the two transitional states (`MissionCameraFadeView.cs:26`), `HasCameraFadeOut` only in `Black` (`MissionCameraFadeView.cs:36`) and `HasCameraFadeIn` only in `White` (`MissionCameraFadeView.cs:46`). Both state and alpha have `private set`, so callers can only move the machine through the three `Begin*` methods.

## Mental Model

`FadeAlpha` behaves the opposite of what the name suggests during a fade-in, and this trips people up. During `FadingOut` it ramps **up** toward 1 (`MathF.Min(1f - _stateDuration / _fadeOutTime, 1f)`, `MissionCameraFadeView.cs:77`) because `_stateDuration` counts down. During `FadingIn` it ramps **down** toward 0 (`MathF.Max(_stateDuration / _fadeInTime, 0f)`, `MissionCameraFadeView.cs:87`). So `1` always means "as dark as it goes" regardless of direction, and `0` always means "fully visible". The initial state is `White` with `FadeAlpha = 0f` (`MissionCameraFadeView.cs:55`, `MissionCameraFadeView.cs:56`).

Every `Begin*` method is guarded by the same three-part condition: `base.Mission != null && base.MissionScreen.IsMissionTickable && <expected current state>` (`MissionCameraFadeView.cs:111`, `MissionCameraFadeView.cs:126`, `MissionCameraFadeView.cs:141`). The state precondition differs in each and is the real API: `BeginFadeOutAndIn` and `BeginFadeOut` only fire from `White`; `BeginFadeIn` only from `Black` **and** only when `_autoFadeIn` is false. A call in the wrong state is silently dropped — no exception, no return value. So "fade out then in" is not two calls; it is one `BeginFadeOutAndIn`, or a `BeginFadeOut` plus a `BeginFadeIn` that the machine may have pre-empted.

`_autoFadeIn` is what makes `BeginFadeOutAndIn` automatic. When set, reaching `Black` starts a countdown (`MissionCameraFadeView.cs:98`) and when it elapses the state becomes `FadingIn` and `_autoFadeIn` is cleared (`MissionCameraFadeView.cs:102`, `MissionCameraFadeView.cs:103`). A manual `BeginFadeIn` inside that window is refused by the `!this._autoFadeIn` guard, so you cannot cancel a pending automatic fade-in — the best you can do is let it run.

All three duration arguments are clamped with `MathF.Max(x, 1E-05f)` before being stored as denominators (`MissionCameraFadeView.cs:114` through `MissionCameraFadeView.cs:116`, and `MissionCameraFadeView.cs:145`). That is a divide-by-zero guard, and it has a visible consequence: a fade requested with duration `0` is computed against `0.00001f` and completes in a single frame instead of dividing by zero. Note that `_stateDuration` is seeded from the **unclamped** argument (`MissionCameraFadeView.cs:117`, `MissionCameraFadeView.cs:132`, `MissionCameraFadeView.cs:146`), so the `0` case genuinely finishes on the first tick.

The tick only advances when `base.MissionScreen.IsMissionTickable` (`MissionCameraFadeView.cs:63`). During a mission-screen pause the fade freezes mid-transition and resumes when tickable again — which is why the same guard also sits on every `Begin*`.

## How to use

**Getting it.** Look it up from the live mission; it is already there because of `[DefaultView]`.

```csharp
MissionCameraFadeView fade = Mission.Current.GetMissionBehavior<MissionCameraFadeView>();
if (fade != null)
{
    // The cinematic pattern: darken, hold black for a beat, come back.
    fade.BeginFadeOutAndIn(0.5f, 0.5f, 0.5f);
}
```

The manual pattern, which is what the hideout cinematic views use — one call to go dark, a later call to come back:

```csharp
fade.BeginFadeOut(duration);   // requires state == White
// ... cut away; wait for the real signal, not a timer ...
fade.BeginFadeIn(duration);    // requires state == Black AND !_autoFadeIn
```

Poll the machine instead of assuming a duration elapsed:

```csharp
if (fade.HasCameraFadeOut)
{
    Debug.Print("black; safe to swap the camera", false);
}
else if (!fade.IsCameraFading && fade.FadeState == MissionCameraFadeView.CameraFadeState.White)
{
    Debug.Print("fully visible; safe to resume", false);
}
```

**The mistake that leaves cutscene logic waiting forever.** Calling `BeginFadeIn` right after `BeginFadeOutAndIn` to "speed it up". The fade-in is refused on two counts — the state is not yet `Black`, and once it is, `_autoFadeIn` is already true — and both failures are silent because the guards just fall through (`MissionCameraFadeView.cs:141`). The pending automatic fade still completes on its own `_fadeInTime`, so the screen looks like it ignored you; the actual damage is that any logic awaiting your fade-in never gets the signal and hangs.

## Key Properties

| Name | Signature |
|------|-----------|
| `FadeAlpha` | `public float FadeAlpha { get; }` |
| `FadeState` | `public MissionCameraFadeView.CameraFadeState FadeState { get; }` |
| `IsCameraFading` | `public bool IsCameraFading { get; }` |
| `HasCameraFadeOut` | `public bool HasCameraFadeOut { get; }` |
| `HasCameraFadeIn` | `public bool HasCameraFadeIn { get; }` |

## Key Methods

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**Purpose:** Invoked when the mission screen initialize event is raised.

```csharp
// Obtain an instance of MissionCameraFadeView from the subsystem API first
MissionCameraFadeView missionCameraFadeView = ...;
missionCameraFadeView.OnMissionScreenInitialize();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** Invoked when the mission screen tick event is raised.

```csharp
// Obtain an instance of MissionCameraFadeView from the subsystem API first
MissionCameraFadeView missionCameraFadeView = ...;
missionCameraFadeView.OnMissionScreenTick(0);
```

### BeginFadeOutAndIn
`public void BeginFadeOutAndIn(float fadeOutTime, float blackTime, float fadeInTime)`

**Purpose:** Executes the BeginFadeOutAndIn logic.

```csharp
// Obtain an instance of MissionCameraFadeView from the subsystem API first
MissionCameraFadeView missionCameraFadeView = ...;
missionCameraFadeView.BeginFadeOutAndIn(0, 0, 0);
```

### BeginFadeOut
`public void BeginFadeOut(float fadeOutTime)`

**Purpose:** Executes the BeginFadeOut logic.

```csharp
// Obtain an instance of MissionCameraFadeView from the subsystem API first
MissionCameraFadeView missionCameraFadeView = ...;
missionCameraFadeView.BeginFadeOut(0);
```

### BeginFadeIn
`public void BeginFadeIn(float fadeInTime)`

**Purpose:** Executes the BeginFadeIn logic.

```csharp
// Obtain an instance of MissionCameraFadeView from the subsystem API first
MissionCameraFadeView missionCameraFadeView = ...;
missionCameraFadeView.BeginFadeIn(0);
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MissionCameraFadeView view = ...;
```

## See Also

- [MissionGauntletCameraFadeView — the renderer that reads this type's FadeAlpha](../MissionGauntletCameraFadeView)
- [MissionMainAgentControlModeView — the other `[DefaultView]` auto-created marker view](../MissionMainAgentControlModeView)
- [MissionGamepadEffectsView — another auto-created default mission view](../MissionGamepadEffectsView)
- [Mission — behaviour lookup for the live mission](../../mission/Mission)
- [Area Index](../)