---
title: "GauntletOrderUIHandler"
description: "Auto-generated class reference for GauntletOrderUIHandler."
---
# GauntletOrderUIHandler

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class GauntletOrderUIHandler : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/GauntletOrderUIHandler.cs`

## Overview

`GauntletOrderUIHandler` is an **abstract** `MissionView` (`GauntletOrderUIHandler.cs:21`) that owns the battlefield order interface — the toggle-order radial, the formation selection and the troop-transfer panel. It is not instantiated directly; the one shipped subclass is `MissionGauntletSingleplayerOrderUIHandler`, which also implements `ISiegeDeploymentView` (`MissionGauntletSingleplayerOrderUIHandler.cs:21`), and it is created by `ViewCreator.CreateMissionOrderUIHandler` (`ViewCreator.cs:99`).

Its constructor does one thing — set `ViewOrderPriority = 14` (`GauntletOrderUIHandler.cs:95`) — and it declares three abstract properties that every subclass must answer: `IsDeployment`, `IsSiegeDeployment` and `IsValidForTick` (`GauntletOrderUIHandler.cs:25`, `GauntletOrderUIHandler.cs:29`, `GauntletOrderUIHandler.cs:33`). Three of those, plus `OnTransferFinished` and `SetLayerEnabled`, are the entire abstract surface; everything else is virtual or concrete.

The public read side is four properties, and **every one of them null-checks its data source** and returns a neutral value rather than throwing: `CursorState` returns the enum's zero value (`GauntletOrderUIHandler.cs:42`, `GauntletOrderUIHandler.cs:44`, `GauntletOrderUIHandler.cs:46`), `IsOrderMenuActive` and `IsAnyOrderSetActive` require both `dataSource != null` and the source's own flag (`GauntletOrderUIHandler.cs:67`, `GauntletOrderUIHandler.cs:78`), and `IsViewCreated` tests both the layer and the data source (`GauntletOrderUIHandler.cs:88`).

## Mental Model

`IsValidForTick` is the gate the tick itself checks, and the other two abstract properties are branches inside that tick. The tick body requires all three conditions — `IsValidForTick`, a non-null `_dataSource` and an active `_gauntletLayer` (`GauntletOrderUIHandler.cs:199`) — before doing anything. Inside, the first branch is `IsToggleOrderShown` and the second is `IsTransferActive || IsDeployment` (`GauntletOrderUIHandler.cs:251`, `GauntletOrderUIHandler.cs:263`). So a subclass that answers `IsDeployment` wrongly does not crash; it silently routes the tick into the wrong half.

`_minHoldTimeForActivation` is a `protected virtual` property that returns the literal `0f` in the base (`GauntletOrderUIHandler.cs:56`) — a **zero-second hold threshold**, so the stock behaviour opens the toggle order on the first frame the key goes down. A subclass that needs a real hold overrides it, and the accumulator is `_holdTime`, compared with `>=` against that property (`GauntletOrderUIHandler.cs:350`, `GauntletOrderUIHandler.cs:351`) and latched by `_holdHandled`. The key is the raw game-key index `87` (`GauntletOrderUIHandler.cs:348`), not a named key, and the whole hold block is skipped when `IsDeployment` is true (`GauntletOrderUIHandler.cs:346`).

Input restrictions are installed **only in the transfer branch**, and only once the transfer becomes active: `SetInputRestrictions(true, InputUsageMask.All)` at `GauntletOrderUIHandler.cs:253`. The matching release is not in the same method — it happens in the `else if` that detects the transfer *ending* (`GauntletOrderUIHandler.cs:432` through `GauntletOrderUIHandler.cs:440`), which is why focus and `ContextAlpha` are managed in a second, parallel branch rather than symmetrically in the first.

That ending branch has a real conditional: on transfer end the layer's `UIContext.ContextAlpha` is set to `0f` when `BannerlordConfig.HideBattleUI` and `1f` otherwise (`GauntletOrderUIHandler.cs:437`), but the starting branch always sets it to `1f` (`GauntletOrderUIHandler.cs:443`). So a player with battle UI hidden gets a panel that fades out on completion but was fully opaque while active.

Cancel and confirm are hot-key driven inside the transfer branch, not the shared input path: `Exit` plays a UI sound and calls `ExecuteCancelTransfer` (`GauntletOrderUIHandler.cs:450` through `GauntletOrderUIHandler.cs:453`), and `Confirm` additionally checks `IsTransferValid` before `ExecuteConfirmTransfer` (`GauntletOrderUIHandler.cs:455` through `GauntletOrderUIHandler.cs:460`). Right-mouse-button escape is a separate check gated on `!IsDeployment` (`GauntletOrderUIHandler.cs:427`).

`SelectFormationAtIndex` and `DeselectFormationAtIndex` are `public virtual` and both bail on a null data source (`GauntletOrderUIHandler.cs:115`, `GauntletOrderUIHandler.cs:126`). `GetVisualOrderExecutionParameters` builds a `VisualOrderExecutionParameters` from `Agent.Main` and a formation or world position, preferring a cached focused-formation list when it is non-empty (`GauntletOrderUIHandler.cs:149`, `GauntletOrderUIHandler.cs:154`, `GauntletOrderUIHandler.cs:159`).

## How to use

**Getting it.** Subclass it — the type is abstract. Supply the three flags and the two abstract hooks, then register the subclass through the view-creator override table:

```csharp
using TaleWorlds.MountAndBlade.GauntletUI;
using TaleWorlds.MountAndBlade.View.MissionViews;

public class MyOrderUI : GauntletOrderUIHandler
{
    public override bool IsDeployment => false;
    public override bool IsSiegeDeployment => false;
    public override bool IsValidForTick => true;

    // The base returns 0f, so the toggle order opens on the very first frame
    // the key goes down. Override for a deliberate hold.
    protected override float _minHoldTimeForActivation => 0.15f;

    protected override void OnTransferFinished() { }
    protected override void SetLayerEnabled(bool isEnabled) { }
}

[OverrideView(typeof(MissionOrderUIHandler))]
public class MyOrderUIRegistration : MissionView { /* or register MyOrderUI directly */ }
```

Read the order state without touching the view's internals:

```csharp
GauntletOrderUIHandler orders = Mission.Current.GetMissionBehavior<GauntletOrderUIHandler>();
if (orders != null)
{
    Debug.Print("menu open=" + orders.IsOrderMenuActive
                + " any set=" + orders.IsAnyOrderSetActive
                + " view ready=" + orders.IsViewCreated
                + " cursor=" + orders.CursorState, false);
}
```

**The mistake that leaves the player unable to move troops after a transfer.** Overriding `SetLayerEnabled` to hide the layer on completion without restoring `InputRestrictions`. The `true, InputUsageMask.All` restriction is installed inside the tick's transfer branch (`GauntletOrderUIHandler.cs:253`) and released only by the separate "transfer ended" branch (`GauntletOrderUIHandler.cs:437` through `GauntletOrderUIHandler.cs:439`). Any path that ends a transfer without passing through that branch — including one that short-circuits on a subclass's own flag — leaves the mask in place, and the game keeps routing every input to the order panel: the agent will not move, will not attack, and the pause menu will not respond.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsDeployment` | `public abstract bool IsDeployment { get; }` |
| `IsSiegeDeployment` | `public abstract bool IsSiegeDeployment { get; }` |
| `IsValidForTick` | `public abstract bool IsValidForTick { get; }` |
| `CursorState` | `public MissionOrderVM.CursorStates CursorState { get; }` |
| `IsOrderMenuActive` | `public bool IsOrderMenuActive { get; }` |
| `IsAnyOrderSetActive` | `public bool IsAnyOrderSetActive { get; }` |
| `IsViewCreated` | `public bool IsViewCreated { get; }` |

## Key Methods

### SelectFormationAtIndex
`public virtual void SelectFormationAtIndex(int index)`

**Purpose:** Executes the SelectFormationAtIndex logic.

```csharp
// Obtain an instance of GauntletOrderUIHandler from the subsystem API first
GauntletOrderUIHandler gauntletOrderUIHandler = ...;
gauntletOrderUIHandler.SelectFormationAtIndex(0);
```

### DeselectFormationAtIndex
`public virtual void DeselectFormationAtIndex(int index)`

**Purpose:** Executes the DeselectFormationAtIndex logic.

```csharp
// Obtain an instance of GauntletOrderUIHandler from the subsystem API first
GauntletOrderUIHandler gauntletOrderUIHandler = ...;
gauntletOrderUIHandler.DeselectFormationAtIndex(0);
```

### OnMissionScreenActivate
`public override void OnMissionScreenActivate()`

**Purpose:** Invoked when the mission screen activate event is raised.

```csharp
// Obtain an instance of GauntletOrderUIHandler from the subsystem API first
GauntletOrderUIHandler gauntletOrderUIHandler = ...;
gauntletOrderUIHandler.OnMissionScreenActivate();
```

### OnMissionScreenDeactivate
`public override void OnMissionScreenDeactivate()`

**Purpose:** Invoked when the mission screen deactivate event is raised.

```csharp
// Obtain an instance of GauntletOrderUIHandler from the subsystem API first
GauntletOrderUIHandler gauntletOrderUIHandler = ...;
gauntletOrderUIHandler.OnMissionScreenDeactivate();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** Invoked when the mission screen tick event is raised.

```csharp
// Obtain an instance of GauntletOrderUIHandler from the subsystem API first
GauntletOrderUIHandler gauntletOrderUIHandler = ...;
gauntletOrderUIHandler.OnMissionScreenTick(0);
```

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**Purpose:** Invoked when the agent build event is raised.

```csharp
// Obtain an instance of GauntletOrderUIHandler from the subsystem API first
GauntletOrderUIHandler gauntletOrderUIHandler = ...;
gauntletOrderUIHandler.OnAgentBuild(agent, banner);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of GauntletOrderUIHandler from the subsystem API first
GauntletOrderUIHandler gauntletOrderUIHandler = ...;
gauntletOrderUIHandler.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

### OnEscape
`public override bool OnEscape()`

**Purpose:** Invoked when the escape event is raised.

```csharp
// Obtain an instance of GauntletOrderUIHandler from the subsystem API first
GauntletOrderUIHandler gauntletOrderUIHandler = ...;
var result = gauntletOrderUIHandler.OnEscape();
```

### IsReady
`public override bool IsReady()`

**Purpose:** Determines whether the this instance is in the ready state or condition.

```csharp
// Obtain an instance of GauntletOrderUIHandler from the subsystem API first
GauntletOrderUIHandler gauntletOrderUIHandler = ...;
var result = gauntletOrderUIHandler.IsReady();
```

### OnActivateToggleOrder
`public void OnActivateToggleOrder()`

**Purpose:** Invoked when the activate toggle order event is raised.

```csharp
// Obtain an instance of GauntletOrderUIHandler from the subsystem API first
GauntletOrderUIHandler gauntletOrderUIHandler = ...;
gauntletOrderUIHandler.OnActivateToggleOrder();
```

### OnDeactivateToggleOrder
`public void OnDeactivateToggleOrder()`

**Purpose:** Invoked when the deactivate toggle order event is raised.

```csharp
// Obtain an instance of GauntletOrderUIHandler from the subsystem API first
GauntletOrderUIHandler gauntletOrderUIHandler = ...;
gauntletOrderUIHandler.OnDeactivateToggleOrder();
```

## Usage Example

```csharp
The `GauntletOrderUIHandler instance = ...;` placeholder previously on this page could not work: the type is `abstract` (`GauntletOrderUIHandler.cs:21`) and is never resolved from a registry. Derive from it and register the subclass, or read the shipped instance:

```csharp
var orders = Mission.Current.GetMissionBehavior<MissionOrderUIHandler>();
```
```

## See Also

- [MissionOrderOfBattleUIHandler — the sibling order slot, created by its own factory](../MissionOrderOfBattleUIHandler)
- [MultiplayerBattleInitializationModel — decides whether order of battle is available at all](../MultiplayerBattleInitializationModel)
- [DeploymentView — the unreferenced deployment view this order handler effectively replaced](../DeploymentView)
- [Area Index](../)