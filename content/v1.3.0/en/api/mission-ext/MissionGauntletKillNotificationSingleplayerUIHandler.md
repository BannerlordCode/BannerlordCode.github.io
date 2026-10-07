---
title: "MissionGauntletKillNotificationSingleplayerUIHandler"
description: "Auto-generated class reference for MissionGauntletKillNotificationSingleplayerUIHandler."
---
# MissionGauntletKillNotificationSingleplayerUIHandler

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletKillNotificationSingleplayerUIHandler : MissionBattleUIBaseView`
**Base:** `MissionBattleUIBaseView`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletKillNotificationSingleplayerUIHandler.cs`

## Overview

`MissionGauntletKillNotificationSingleplayerUIHandler` is the Gauntlet kill feed for singleplayer: the on-screen list of kills and personal-damage numbers. It is not a mission behaviour in the lookup sense — the marker it replaces is — and it is never named anywhere in the tree. It is reached only through `[OverrideView(typeof(MissionSingleplayerKillNotificationUIHandler))]` (`MissionGauntletKillNotificationSingleplayerUIHandler.cs:13`), so a search for its own name finds nothing but its declaration. It derives from `MissionBattleUIBaseView`, which supplies the `ViewOrderPriority` / `OnCreateView` / `OnDestroyView` / `OnSuspendView` / `OnResumeView` template it fills in, and its lifetime is the mission screen's, not the mission's.

Its data source is an `SPKillFeedVM`, created in `OnCreateView` and destroyed with an explicit `OnFinalize()` call (`MissionGauntletKillNotificationSingleplayerUIHandler.cs:36`, `MissionGauntletKillNotificationSingleplayerUIHandler.cs:49`). The movie is `SingleplayerKillfeed` on a `GauntletLayer` at priority `17` (`MissionGauntletKillNotificationSingleplayerUIHandler.cs:20`, `MissionGauntletKillNotificationSingleplayerUIHandler.cs:38`).

## Mental Model

Two independent feeds, two independent enable flags, two different event sources — and the flags are **live**, not read once.

`_isGeneralFeedEnabled` is `BannerlordConfig.ReportCasualtiesType < 2` (`MissionGauntletKillNotificationSingleplayerUIHandler.cs:21`) and `_isPersonalFeedEnabled` is `BannerlordConfig.ReportPersonalDamage` (`MissionGauntletKillNotificationSingleplayerUIHandler.cs:22`). Both default to `true` in the field declarations (`MissionGauntletKillNotificationSingleplayerUIHandler.cs:141`, `MissionGauntletKillNotificationSingleplayerUIHandler.cs:144`) so a view created before initialisation still shows something. To keep them current the view **replaces** the static `ManagedOptions.OnManagedOptionChanged` delegate chain, adding its own handler in `OnMissionScreenInitialize` (`MissionGauntletKillNotificationSingleplayerUIHandler.cs:23`) and removing it in `OnMissionScreenFinalize` (`MissionGauntletKillNotificationSingleplayerUIHandler.cs:30`). The pair is balanced, which matters because that delegate is static: an unbalanced add leaks a handler holding a reference to a view whose data source has already been nulled.

The two feeds come from different sources. The **general** feed is driven by `OnAgentRemoved`, the mission-behaviour callback, and only for human victims (`MissionGauntletKillNotificationSingleplayerUIHandler.cs:99`). The **personal** feed has two inputs: kills where the affector is `Agent.Main` (`MissionGauntletKillNotificationSingleplayerUIHandler.cs:88`) and non-fatal damage dealt by the player, which arrives through a completely different route — a subscription to the static `CombatLogManager.OnGenerateCombatLog` made in `OnCreateView` (`MissionGauntletKillNotificationSingleplayerUIHandler.cs:40`) and removed in `OnDestroyView` (`MissionGauntletKillNotificationSingleplayerUIHandler.cs:46`). The combat-log path is where `TotalDamage > 0 && !IsFatalDamage` is enforced (`MissionGauntletKillNotificationSingleplayerUIHandler.cs:108`); without that exclusion every kill would be reported twice, once as a kill and once as a damage number.

`OnAgentRemoved` is guarded three ways before doing anything: `!base.IsViewCreated || affectorAgent == null || (agentState != Killed && agentState != Unconscious)` (`MissionGauntletKillNotificationSingleplayerUIHandler.cs:83`). The `IsViewCreated` guard is the load-bearing one — the callback can fire while the mission is tearing down, when `_dataSource` has already been nulled by `OnDestroyView`. Note the asymmetry inside the guards too: the personal kill path accepts mount victims (`MissionGauntletKillNotificationSingleplayerUIHandler.cs:88`) while the general feed does not, so killing an enemy warhorse reports personally but not globally.

Photo mode fades the layer's whole UI context rather than hiding it: `UIContext.ContextAlpha = 0f` on activate and `1f` on deactivate (`MissionGauntletKillNotificationSingleplayerUIHandler.cs:120`, `MissionGauntletKillNotificationSingleplayerUIHandler.cs:130`), both guarded by `IsViewCreated` because the layer may already be gone.

## How to use

**Getting it.** Do not construct it — the view creator resolves the override. To read it, work through the marker it replaces:

```csharp
using TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer;

MissionSingleplayerKillNotificationUIHandler feed =
    Mission.GetMissionBehavior<MissionSingleplayerKillNotificationUIHandler>();
Debug.Print("kill feed present: " + (feed != null), false);
```

To replace the feed, attribute your class against the same marker and keep the subscribe/unsubscribe pair symmetric:

```csharp
[OverrideView(typeof(MissionSingleplayerKillNotificationUIHandler))]
public class MyKillFeed : MissionBattleUIBaseView
{
    protected override void OnCreateView()
    {
        // Build the layer and data source here; OnDestroyView must undo both.
    }

    protected override void OnDestroyView() { }

    public override void OnMissionScreenInitialize()
    {
        base.OnMissionScreenInitialize();
        ManagedOptions.OnManagedOptionChanged += OnOptionChange;
    }

    public override void OnMissionScreenFinalize()
    {
        base.OnMissionScreenFinalize();
        ManagedOptions.OnManagedOptionChanged -= OnOptionChange;
    }

    private void OnOptionChange(ManagedOptions.ManagedOptionsType type) { }
}
```

**The mistake that leaves a dead view model being written to.** Adding to `ManagedOptions.OnManagedOptionChanged` from `OnCreateView` instead of `OnMissionScreenInitialize`, so nothing removes it. The delegate is static and holds a reference to the view, so the view outlives its own finalisation; when the player changes the casualties option in a later battle the stale handler runs against a `_dataSource` that `OnDestroyView` already nulled (`MissionGauntletKillNotificationSingleplayerUIHandler.cs:50`), and the crash surfaces in an unrelated mission minutes later.

## Key Methods

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**Purpose:** Invoked when the mission screen initialize event is raised.

```csharp
// Obtain an instance of MissionGauntletKillNotificationSingleplayerUIHandler from the subsystem API first
MissionGauntletKillNotificationSingleplayerUIHandler missionGauntletKillNotificationSingleplayerUIHandler = ...;
missionGauntletKillNotificationSingleplayerUIHandler.OnMissionScreenInitialize();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Invoked when the mission screen finalize event is raised.

```csharp
// Obtain an instance of MissionGauntletKillNotificationSingleplayerUIHandler from the subsystem API first
MissionGauntletKillNotificationSingleplayerUIHandler missionGauntletKillNotificationSingleplayerUIHandler = ...;
missionGauntletKillNotificationSingleplayerUIHandler.OnMissionScreenFinalize();
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of MissionGauntletKillNotificationSingleplayerUIHandler from the subsystem API first
MissionGauntletKillNotificationSingleplayerUIHandler missionGauntletKillNotificationSingleplayerUIHandler = ...;
missionGauntletKillNotificationSingleplayerUIHandler.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

### OnPhotoModeActivated
`public override void OnPhotoModeActivated()`

**Purpose:** Invoked when the photo mode activated event is raised.

```csharp
// Obtain an instance of MissionGauntletKillNotificationSingleplayerUIHandler from the subsystem API first
MissionGauntletKillNotificationSingleplayerUIHandler missionGauntletKillNotificationSingleplayerUIHandler = ...;
missionGauntletKillNotificationSingleplayerUIHandler.OnPhotoModeActivated();
```

### OnPhotoModeDeactivated
`public override void OnPhotoModeDeactivated()`

**Purpose:** Invoked when the photo mode deactivated event is raised.

```csharp
// Obtain an instance of MissionGauntletKillNotificationSingleplayerUIHandler from the subsystem API first
MissionGauntletKillNotificationSingleplayerUIHandler missionGauntletKillNotificationSingleplayerUIHandler = ...;
missionGauntletKillNotificationSingleplayerUIHandler.OnPhotoModeDeactivated();
```

## Usage Example

```csharp
The `GetMissionBehavior<MissionGauntletKillNotificationSingleplayerUIHandler>()` line previously on this page compiles but returns null: the Gauntlet class is not a mission behaviour that gets added to the list, it replaces a different, marker-typed view. Look up the marker instead:

```csharp
MissionSingleplayerKillNotificationUIHandler feed =
    Mission.GetMissionBehavior<MissionSingleplayerKillNotificationUIHandler>();
```
```

## See Also

- [MissionGauntletMainAgentControlModeView — another Gauntlet mission view in this area](../MissionGauntletMainAgentControlModeView)
- [MissionAgentContourControllerView — the other battle-UI controller view in this bucket](../MissionAgentContourControllerView)
- [MissionGauntletOptionsUIHandler — another Gauntlet view that watches ManagedOptions](../MissionGauntletOptionsUIHandler)
- [Area Index](../)