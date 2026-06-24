<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GauntletOrderUIHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletOrderUIHandler

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class GauntletOrderUIHandler : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/GauntletOrderUIHandler.cs`

## Overview

`GauntletOrderUIHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `GauntletOrderUIHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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

**Purpose:** Handles logic related to `select formation at index`.

### DeselectFormationAtIndex
`public virtual void DeselectFormationAtIndex(int index)`

**Purpose:** Handles logic related to `deselect formation at index`.

### OnMissionScreenActivate
`public override void OnMissionScreenActivate()`

**Purpose:** Called when the `mission screen activate` event is raised.

### OnMissionScreenDeactivate
`public override void OnMissionScreenDeactivate()`

**Purpose:** Called when the `mission screen deactivate` event is raised.

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** Called when the `mission screen tick` event is raised.

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**Purpose:** Called when the `agent build` event is raised.

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** Called when the `agent removed` event is raised.

### OnEscape
`public override bool OnEscape()`

**Purpose:** Called when the `escape` event is raised.

### IsReady
`public override bool IsReady()`

**Purpose:** Handles logic related to `is ready`.

### OnActivateToggleOrder
`public void OnActivateToggleOrder()`

**Purpose:** Called when the `activate toggle order` event is raised.

### OnDeactivateToggleOrder
`public void OnDeactivateToggleOrder()`

**Purpose:** Called when the `deactivate toggle order` event is raised.

## Usage Example

```csharp
var implementation = new CustomGauntletOrderUIHandler();
```

## See Also

- [Complete Class Catalog](../catalog)