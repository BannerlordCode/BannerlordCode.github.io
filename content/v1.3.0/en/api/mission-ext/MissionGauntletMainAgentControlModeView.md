---
title: "MissionGauntletMainAgentControlModeView"
description: "Auto-generated class reference for MissionGauntletMainAgentControlModeView."
---
# MissionGauntletMainAgentControlModeView

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletMainAgentControlModeView : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/Mission/MissionGauntletMainAgentControlModeView.cs`

## Overview

`MissionGauntletMainAgentControlModeView` is the Gauntlet implementation of the main agent's radial control-mode menu — the walk / crouch selector. It exists only because of `[OverrideView(typeof(MissionMainAgentControlModeView))]` (`MissionGauntletMainAgentControlModeView.cs:17`); a search for its own name in the tree finds nothing else, so it is created through the view-creator override table, not by name. Its lifetime is the mission screen's.

Its layer is created unusually early — in `EarlyStart`, not `OnMissionScreenInitialize` (`MissionGauntletMainAgentControlModeView.cs:74`) — with id `3`, a `MissionMainAgentWalkModeControllerVM` data source, a `CombatHotKeyCategory` hot-key registration and an `InputUsageMask.Invalid` restriction (`MissionGauntletMainAgentControlModeView.cs:77` through `MissionGauntletMainAgentControlModeView.cs:82`). The walk-mode list is not populated until `AfterStart`, where `InitializeWalkModes` runs (`MissionGauntletMainAgentControlModeView.cs:91`). So there is a window in which the layer exists and is bound but has no entries — read that ordering as a contract if you extend it.

## Mental Model

The interaction is hold-to-open, and the **threshold is what makes it feel right**. `_minOpenHoldTime` is a property returning the literal `0.22f` (`MissionGauntletMainAgentControlModeView.cs:36`). While `ControlModeToggle` is held, `_toggleHoldTime` accumulates; once it passes `0.22f` and `HoldHandled` is still false, the menu opens and `HoldHandled` latches (`MissionGauntletMainAgentControlModeView.cs:188` through `MissionGauntletMainAgentControlModeView.cs:191`). On release, the *same* comparison decides the meaning: below the threshold it is a tap and calls `HandleQuickRelease` (`MissionGauntletMainAgentControlModeView.cs:198` through `MissionGauntletMainAgentControlModeView.cs:200`), at or above it closes normally (`MissionGauntletMainAgentControlModeView.cs:204`). A quick tap therefore toggles the last-used walk mode directly, without the menu ever appearing — which is why `_dataSource.LastUsedItem` exists and is pre-seeded to the crouch item in `InitializeWalkModes`.

`_slowDownAmountWhileRadialIsOpen` is a second literal, `0.25f` (`MissionGauntletMainAgentControlModeView.cs:26`), and it drives world slow-motion while the menu is held. `HandleOpeningHold` registers a `Mission.TimeSpeedRequest` with that amount and the **hard-coded id `813`** (`MissionGauntletMainAgentControlModeView.cs:237`), and `HandleClosingHold` removes it by the same literal (`MissionGauntletMainAgentControlModeView.cs:253`). Both are gated on `!GameNetwork.IsMultiplayer` and on a `_isSlowDownApplied` flag (`MissionGauntletMainAgentControlModeView.cs:235`, `MissionGauntletMainAgentControlModeView.cs:251`). The flag is what stops a double-registration when open is called twice; but it is only cleared on the closing path, so an unbalanced pair leaves the world permanently quarter-speed.

The open path also registers the view as a radial-menu object (`MissionGauntletMainAgentControlModeView.cs:234`) and the close and quick-release paths both unregister (`MissionGauntletMainAgentControlModeView.cs:250`, `MissionGauntletMainAgentControlModeView.cs:275`). `HandleQuickRelease` notably does **not** remove the time-speed request — it never added one, because a tap below the threshold never reached `HandleOpeningHold`. That asymmetry is correct as written and is exactly what a naive "unregister on every exit" rewrite would break.

`IsMainAgentAvailable` is the gate for the whole tick, and it has a **two-second cooldown**: `_playerDismountTimer >= 2f` (`MissionGauntletMainAgentControlModeView.cs:282`), where the timer is reset to zero whenever the main agent is null or mounted and otherwise accumulates `dt` up to `2f` (`MissionGauntletMainAgentControlModeView.cs:112` through `MissionGauntletMainAgentControlModeView.cs:116`). So for two seconds after dismounting, in water, or while using a game object, the walk-mode menu is inert — by design, so you cannot toggle crouch mid-dismount.

`TickControls`' opening branch is a six-way exclusion (`MissionGauntletMainAgentControlModeView.cs:186`): not in photo mode, no dialog, not the radial menu, and the mission must be in neither `Deployment` nor `CutScene`. That is why the control-mode menu simply does nothing during deployment — a fact worth knowing before you add a mission mode of your own.

Inside the menu, each `WalkModeItemVM` is polled every tick and its toggle key is tested as *either* a `HotKey` *or* a `GameKey` (`MissionGauntletMainAgentControlModeView.cs:216`), guarded by `!walkModeItemVM.IsDisabled` (`MissionGauntletMainAgentControlModeView.cs:216`). A successful toggle closes the menu and returns immediately (`MissionGauntletMainAgentControlModeView.cs:219`), so only the first matching item in the list fires per tick.

## How to use

**Getting it.** You never construct it. To change what the menu offers, extend the walk-mode list in a subclass — `InitializeWalkModes` calls `AddWalkMode` with a name, a `TextObject`, a state predicate, a setter, a disabled predicate, a hot key and a display flag (`MissionGauntletMainAgentControlModeView.cs:133`, `MissionGauntletMainAgentControlModeView.cs:156`).

```csharp
[OverrideView(typeof(MissionMainAgentControlModeView))]
public class MyControlModeView : MissionGauntletMainAgentControlModeView
{
    // Mirror InitializeWalkModes; base.AfterStart already calls it, so instead
    // override your own list from AfterStart if you want to replace the entries.
    public override void AfterStart()
    {
        base.AfterStart();
    }
}
```

Read the walk/crouch state yourself rather than through the menu, since the menu only projects it:

```csharp
Agent main = Agent.Main;
bool walk = main != null && main.WalkMode;
bool crouch = main != null && main.IsCrouchingAllowed() && main.CrouchMode;
```

To open or close the radial programmatically, register and unregister symmetrically — the time-speed request id is the literal `813` in the stock implementation and your instance shares it:

```csharp
MissionScreen.RegisterRadialMenuObject<MissionGauntletMainAgentControlModeView>(instance);
// ... and later:
MissionScreen.UnregisterRadialMenuObject(instance);
```

**The mistake that leaves the battle running at quarter speed with no visible cause.** Registering a `Mission.TimeSpeedRequest` yourself when the radial opens, or adding your own request on top of the stock one. The stock code removes only the request it added, by the hard-coded id `813` (`MissionGauntletMainAgentControlModeView.cs:253`) — a second request with a different id survives the close, and `Mission.AddTimeSpeedRequest` has no owner tracking that would clean it up. The symptom is that everything is slightly slow and slightly floaty for the rest of the battle, including multiplayer-safe singleplayer, with nothing in the log pointing at the menu at all.

## Key Methods

### EarlyStart
`public override void EarlyStart()`

**Purpose:** Executes the EarlyStart logic.

```csharp
// Obtain an instance of MissionGauntletMainAgentControlModeView from the subsystem API first
MissionGauntletMainAgentControlModeView missionGauntletMainAgentControlModeView = ...;
missionGauntletMainAgentControlModeView.EarlyStart();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of MissionGauntletMainAgentControlModeView from the subsystem API first
MissionGauntletMainAgentControlModeView missionGauntletMainAgentControlModeView = ...;
missionGauntletMainAgentControlModeView.AfterStart();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Invoked when the mission screen finalize event is raised.

```csharp
// Obtain an instance of MissionGauntletMainAgentControlModeView from the subsystem API first
MissionGauntletMainAgentControlModeView missionGauntletMainAgentControlModeView = ...;
missionGauntletMainAgentControlModeView.OnMissionScreenFinalize();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** Invoked when the mission screen tick event is raised.

```csharp
// Obtain an instance of MissionGauntletMainAgentControlModeView from the subsystem API first
MissionGauntletMainAgentControlModeView missionGauntletMainAgentControlModeView = ...;
missionGauntletMainAgentControlModeView.OnMissionScreenTick(0);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of MissionGauntletMainAgentControlModeView from the subsystem API first
MissionGauntletMainAgentControlModeView missionGauntletMainAgentControlModeView = ...;
missionGauntletMainAgentControlModeView.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### OnPhotoModeActivated
`public override void OnPhotoModeActivated()`

**Purpose:** Invoked when the photo mode activated event is raised.

```csharp
// Obtain an instance of MissionGauntletMainAgentControlModeView from the subsystem API first
MissionGauntletMainAgentControlModeView missionGauntletMainAgentControlModeView = ...;
missionGauntletMainAgentControlModeView.OnPhotoModeActivated();
```

### OnPhotoModeDeactivated
`public override void OnPhotoModeDeactivated()`

**Purpose:** Invoked when the photo mode deactivated event is raised.

```csharp
// Obtain an instance of MissionGauntletMainAgentControlModeView from the subsystem API first
MissionGauntletMainAgentControlModeView missionGauntletMainAgentControlModeView = ...;
missionGauntletMainAgentControlModeView.OnPhotoModeDeactivated();
```

## Usage Example

```csharp
The `MissionGauntletMainAgentControlModeView view = ...;` placeholder previously on this page was not a runnable line. The view is resolved through the override table, and the readable state is on the agent:

```csharp
var walkModeOn = Agent.Main != null && Agent.Main.WalkMode;
```
```

## See Also

- [MissionMainAgentControlModeView — the empty marker this class overrides](../MissionMainAgentControlModeView)
- [MissionMainAgentInteractionComponent — the other main-agent-facing input state holder](../MissionMainAgentInteractionComponent)
- [MissionGauntletOptionsUIHandler — another Gauntlet view that registers with the mission screen](../MissionGauntletOptionsUIHandler)
- [Area Index](../)