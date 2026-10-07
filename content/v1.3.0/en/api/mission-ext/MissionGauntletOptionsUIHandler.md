---
title: "MissionGauntletOptionsUIHandler"
description: "Auto-generated class reference for MissionGauntletOptionsUIHandler."
---
# MissionGauntletOptionsUIHandler

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletOptionsUIHandler : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/Mission/MissionGauntletOptionsUIHandler.cs`

## Overview

`MissionGauntletOptionsUIHandler` is the in-mission options panel — the settings screen you open with Escape during a battle. It is not a mission behaviour you construct; it is reached as `Mission.GetMissionBehavior<MissionGauntletOptionsUIHandler>()` from `MissionGauntletCategoryLoadManager` (`MissionGauntletCategoryLoadManager.cs:44`, `MissionGauntletCategoryLoadManager.cs:197`), and its type identity exists only because of `[OverrideView(typeof(MissionOptionsUIHandler))]` (`MissionGauntletOptionsUIHandler.cs:21`). Its constructor does exactly one thing: set `ViewOrderPriority = 49` (`MissionGauntletOptionsUIHandler.cs:32`), so the panel composites above almost everything else on the mission screen.

The heavy lifting is in two symmetric event subscriptions. On screen-initialise it hooks `MissionOptionsComponent.OnOptionsAdded` to its own `OnShowOptions` and builds a `KeybindingPopup` (`MissionGauntletOptionsUIHandler.cs:39`, `MissionGauntletOptionsUIHandler.cs:40`); on screen-finalise it unhooks the same event (`MissionGauntletOptionsUIHandler.cs:46`), calls `OptionsVM.OnFinalize()` and nulls every field (`MissionGauntletOptionsUIHandler.cs:51` through `MissionGauntletOptionsUIHandler.cs:61`). It exposes one public state bit, `IsEnabled` (`MissionGauntletOptionsUIHandler.cs:27`), which is set `true` in `OnShowOptions` and `false` in `OnCloseOptions`.

## Mental Model

The panel is **recreated on every open**, not hidden. `OnEscapeMenuToggled(true)` constructs a brand-new `OptionsVM` (`MissionGauntletOptionsUIHandler.cs:176`) and wires four hot keys into it — Confirm, Exit, previous tab, next tab — from the `GenericPanelGameKeyCategory` (`MissionGauntletOptionsUIHandler.cs:177` through `MissionGauntletOptionsUIHandler.cs:180`). So any per-open state you attach to the view model is discarded when it closes, and any state you want to survive has to live somewhere else.

The pause is asymmetric, and that is deliberate. On open, `MBCommon.PauseGameEngine()` is called **only when not in multiplayer** (`MissionGauntletOptionsUIHandler.cs:164`, `MissionGauntletOptionsUIHandler.cs:166`); on close, `MBCommon.UnPauseGameEngine()` runs unconditionally (`MissionGauntletOptionsUIHandler.cs:171`). So in a multiplayer session the panel never paused the engine and the unpause is a no-op, while in singleplayer the pair balances. Unbalancing it — pausing in multiplayer — freezes the match for everyone.

The `OptionsVM` mode is also split: `GameNetwork.IsMultiplayer ? 2 : 1` (`MissionGauntletOptionsUIHandler.cs:175`), so the multiplayer build gets a restricted option set. Reading that as a boolean and comparing to `1` is the easy mistake.

`OnCloseOptions` carries a real side effect: it compares the cloth-simulation config now against the value captured when the panel opened, and if they differ it raises an `InquiryData` telling the player the option will not take effect until the mission reloads (`MissionGauntletOptionsUIHandler.cs:146` through `MissionGauntletOptionsUIHandler.cs:149`). `_initialClothSimValue` is a bool that stores `config == 0f` (`MissionGauntletOptionsUIHandler.cs:137`, `MissionGauntletOptionsUIHandler.cs:146`) — so it records whether the config is *exactly zero*, and any non-zero value, including a negative one, reads as `false`.

`OnMissionScreenTick` drives the panel from four hot keys on the layer (`MissionGauntletOptionsUIHandler.cs:70`, `MissionGauntletOptionsUIHandler.cs:86`, `MissionGauntletOptionsUIHandler.cs:102`, `MissionGauntletOptionsUIHandler.cs:107`) and is guarded on `!this._keybindingPopup.IsActive` (`MissionGauntletOptionsUIHandler.cs:68`) so the panel does not steal the key press that the keybinding popup is waiting for. `OnEscape` returns `true` — consuming the key — whenever `_dataSource` exists (`MissionGauntletOptionsUIHandler.cs:124` through `MissionGauntletOptionsUIHandler.cs:127`), otherwise it defers to the base.

`IsOpeningEscapeMenuOnFocusChangeAllowed` returns `this._gauntletLayer == null` (`MissionGauntletOptionsUIHandler.cs:156`) — inverted from what the name suggests. While the panel's layer exists the escape menu must *not* open on focus change, because opening it would pop a second panel over the first.

`SetHotKey` refuses duplicates by scanning the whole key group, and shows a quick-information toast rather than failing (`MissionGauntletOptionsUIHandler.cs:302` through `MissionGauntletOptionsUIHandler.cs:305`). It also drops the popup without applying when the chosen key already equals the current one (`MissionGauntletOptionsUIHandler.cs:297`) and on Escape (`MissionGauntletOptionsUIHandler.cs:292`).

## How to use

**Getting it.** Look it up from the mission; do not `new` it, and do not expect to find the marker `MissionOptionsUIHandler` unless an override is registered.

```csharp
using TaleWorlds.MountAndBlade.GauntletUI.Mission;

MissionGauntletOptionsUIHandler options =
    Mission.GetMissionBehavior<MissionGauntletOptionsUIHandler>();
if (options != null)
{
    Debug.Print("options panel enabled: " + options.IsEnabled, false);
}
```

To open the panel yourself, add the option source the view listens for and let its own handler do the rest:

```csharp
using TaleWorlds.MountAndBlade;

public class OpenOptionsOnDemand : MissionBehavior
{
    public override void OnMissionScreenTick(float dt)
    {
        base.OnMissionScreenTick(dt);
        MissionOptionsComponent component = Mission.GetMissionBehavior<MissionOptionsComponent>();
        if (component != null && Mission.Current.IsMissionTickable)
        {
            // Raise it the way the escape menu does; the options view subscribes in
            // OnMissionScreenInitialize (MissionGauntletOptionsUIHandler.cs:39).
            component.OnOptionsAdded?.Invoke();
        }
    }
}
```

To add a setting, extend `OptionsVM`'s option groups rather than this view — the view only hosts the movie and routes key presses.

**The mistake that leaves the game frozen after closing the options panel.** Calling `MBCommon.PauseGameEngine()` yourself before opening it. The view's own close path calls `UnPauseGameEngine()` unconditionally (`MissionGauntletOptionsUIHandler.cs:171`), but its open path only *skips* the pause in multiplayer (`MissionGauntletOptionsUIHandler.cs:164`) — it never un-pauses on open. So a manual pause in a multiplayer session is never balanced, and the engine stays paused for the whole match after the panel closes: units stop, the clock stops, and nothing in the log mentions the pause at all.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; }` |

## Key Methods

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**Purpose:** Invoked when the mission screen initialize event is raised.

```csharp
// Obtain an instance of MissionGauntletOptionsUIHandler from the subsystem API first
MissionGauntletOptionsUIHandler missionGauntletOptionsUIHandler = ...;
missionGauntletOptionsUIHandler.OnMissionScreenInitialize();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Invoked when the mission screen finalize event is raised.

```csharp
// Obtain an instance of MissionGauntletOptionsUIHandler from the subsystem API first
MissionGauntletOptionsUIHandler missionGauntletOptionsUIHandler = ...;
missionGauntletOptionsUIHandler.OnMissionScreenFinalize();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** Invoked when the mission screen tick event is raised.

```csharp
// Obtain an instance of MissionGauntletOptionsUIHandler from the subsystem API first
MissionGauntletOptionsUIHandler missionGauntletOptionsUIHandler = ...;
missionGauntletOptionsUIHandler.OnMissionScreenTick(0);
```

### OnEscape
`public override bool OnEscape()`

**Purpose:** Invoked when the escape event is raised.

```csharp
// Obtain an instance of MissionGauntletOptionsUIHandler from the subsystem API first
MissionGauntletOptionsUIHandler missionGauntletOptionsUIHandler = ...;
var result = missionGauntletOptionsUIHandler.OnEscape();
```

### IsOpeningEscapeMenuOnFocusChangeAllowed
`public override bool IsOpeningEscapeMenuOnFocusChangeAllowed()`

**Purpose:** Determines whether the this instance is in the opening escape menu on focus change allowed state or condition.

```csharp
// Obtain an instance of MissionGauntletOptionsUIHandler from the subsystem API first
MissionGauntletOptionsUIHandler missionGauntletOptionsUIHandler = ...;
var result = missionGauntletOptionsUIHandler.IsOpeningEscapeMenuOnFocusChangeAllowed();
```

## Usage Example

```csharp
The `GetMissionBehavior<MissionGauntletOptionsUIHandler>()` line previously on this page is the correct lookup for this type — unlike most views in this namespace, this one *is* registered as a mission behaviour, because the category load manager adds it. Read it as:

```csharp
var options = Mission.Current.GetMissionBehavior<MissionGauntletOptionsUIHandler>();
```
```

## See Also

- [MissionGauntletKillNotificationSingleplayerUIHandler — another Gauntlet view that watches ManagedOptions](../MissionGauntletKillNotificationSingleplayerUIHandler)
- [MissionGauntletMainAgentControlModeView — the other radial-menu view in this namespace](../MissionGauntletMainAgentControlModeView)
- [GauntletDefaultLoadingWindowManager — the global layer that owns loading, contrast with this mission-screen layer](../GauntletDefaultLoadingWindowManager)
- [Area Index](../)