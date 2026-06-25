---
title: "OrderController"
description: "Auto-generated class reference for OrderController."
---
# OrderController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderController`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/OrderController.cs`

## Overview

`OrderController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `OrderController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `SiegeWeaponController` | `public SiegeWeaponController SiegeWeaponController { get; }` |
| `simulationFormations` | `public Dictionary<Formation, Formation> simulationFormations { get; }` |

## Key Methods

### SelectFormation
`public void SelectFormation(Formation formation)`

**Purpose:** Executes the SelectFormation logic.

```csharp
// Obtain an instance of OrderController from the subsystem API first
OrderController orderController = ...;
orderController.SelectFormation(formation);
```

### DeselectFormation
`public void DeselectFormation(Formation formation)`

**Purpose:** Executes the DeselectFormation logic.

```csharp
// Obtain an instance of OrderController from the subsystem API first
OrderController orderController = ...;
orderController.DeselectFormation(formation);
```

### IsFormationListening
`public bool IsFormationListening(Formation formation)`

**Purpose:** Determines whether the this instance is in the formation listening state or condition.

```csharp
// Obtain an instance of OrderController from the subsystem API first
OrderController orderController = ...;
var result = orderController.IsFormationListening(formation);
```

### IsFormationSelectable
`public bool IsFormationSelectable(Formation formation)`

**Purpose:** Determines whether the this instance is in the formation selectable state or condition.

```csharp
// Obtain an instance of OrderController from the subsystem API first
OrderController orderController = ...;
var result = orderController.IsFormationSelectable(formation);
```

### BackupAndDisableGesturesEnabled
`public bool BackupAndDisableGesturesEnabled()`

**Purpose:** Executes the BackupAndDisableGesturesEnabled logic.

```csharp
// Obtain an instance of OrderController from the subsystem API first
OrderController orderController = ...;
var result = orderController.BackupAndDisableGesturesEnabled();
```

### RestoreGesturesEnabled
`public void RestoreGesturesEnabled(bool oldValue)`

**Purpose:** Executes the RestoreGesturesEnabled logic.

```csharp
// Obtain an instance of OrderController from the subsystem API first
OrderController orderController = ...;
orderController.RestoreGesturesEnabled(false);
```

### SelectAllFormations
`public void SelectAllFormations(bool uiFeedback = false)`

**Purpose:** Executes the SelectAllFormations logic.

```csharp
// Obtain an instance of OrderController from the subsystem API first
OrderController orderController = ...;
orderController.SelectAllFormations(false);
```

### ClearSelectedFormations
`public void ClearSelectedFormations()`

**Purpose:** Removes all selected formations from the this instance.

```csharp
// Obtain an instance of OrderController from the subsystem API first
OrderController orderController = ...;
orderController.ClearSelectedFormations();
```

### SetOrder
`public virtual void SetOrder(OrderType orderType)`

**Purpose:** Assigns a new value to order and updates the object's internal state.

```csharp
// Obtain an instance of OrderController from the subsystem API first
OrderController orderController = ...;
orderController.SetOrder(orderType);
```

### SetOrderWithAgent
`public virtual void SetOrderWithAgent(OrderType orderType, Agent agent)`

**Purpose:** Assigns a new value to order with agent and updates the object's internal state.

```csharp
// Obtain an instance of OrderController from the subsystem API first
OrderController orderController = ...;
orderController.SetOrderWithAgent(orderType, agent);
```

### SetOrderWithPosition
`public virtual void SetOrderWithPosition(OrderType orderType, WorldPosition orderPosition)`

**Purpose:** Assigns a new value to order with position and updates the object's internal state.

```csharp
// Obtain an instance of OrderController from the subsystem API first
OrderController orderController = ...;
orderController.SetOrderWithPosition(orderType, orderPosition);
```

### SetOrderWithFormation
`public virtual void SetOrderWithFormation(OrderType orderType, Formation orderFormation)`

**Purpose:** Assigns a new value to order with formation and updates the object's internal state.

```csharp
// Obtain an instance of OrderController from the subsystem API first
OrderController orderController = ...;
orderController.SetOrderWithFormation(orderType, orderFormation);
```

### SetOrderWithFormationAndPercentage
`public void SetOrderWithFormationAndPercentage(OrderType orderType, Formation orderFormation, float percentage)`

**Purpose:** Assigns a new value to order with formation and percentage and updates the object's internal state.

```csharp
// Obtain an instance of OrderController from the subsystem API first
OrderController orderController = ...;
orderController.SetOrderWithFormationAndPercentage(orderType, orderFormation, 0);
```

### TransferUnitWithPriorityFunction
`public void TransferUnitWithPriorityFunction(Formation orderFormation, int number, bool hasShield, bool hasSpear, bool hasThrown, bool isHeavy, bool isRanged, bool isMounted, bool excludeBannerman, List<Agent> excludedAgents)`

**Purpose:** Executes the TransferUnitWithPriorityFunction logic.

```csharp
// Obtain an instance of OrderController from the subsystem API first
OrderController orderController = ...;
orderController.TransferUnitWithPriorityFunction(orderFormation, 0, false, false, false, false, false, false, false, excludedAgents);
```

### RearrangeFormationsAccordingToFilters
`public void RearrangeFormationsAccordingToFilters(Team team, List<(Formation formation, int troopCount, TroopTraitsMask troopFilter, List<Agent> excludedAgents)> MassTransferData)`

**Purpose:** Executes the RearrangeFormationsAccordingToFilters logic.

```csharp
// Obtain an instance of OrderController from the subsystem API first
OrderController orderController = ...;
orderController.RearrangeFormationsAccordingToFilters(team, formation, 0, troopFilter, massTransferData);
```

### SetOrderWithFormationAndNumber
`public void SetOrderWithFormationAndNumber(OrderType orderType, Formation orderFormation, int number)`

**Purpose:** Assigns a new value to order with formation and number and updates the object's internal state.

```csharp
// Obtain an instance of OrderController from the subsystem API first
OrderController orderController = ...;
orderController.SetOrderWithFormationAndNumber(orderType, orderFormation, 0);
```

### SetOrderWithTwoPositions
`public virtual void SetOrderWithTwoPositions(OrderType orderType, WorldPosition position1, WorldPosition position2)`

**Purpose:** Assigns a new value to order with two positions and updates the object's internal state.

```csharp
// Obtain an instance of OrderController from the subsystem API first
OrderController orderController = ...;
orderController.SetOrderWithTwoPositions(orderType, position1, position2);
```

### SetOrderWithOrderableObject
`public virtual void SetOrderWithOrderableObject(IOrderable target)`

**Purpose:** Assigns a new value to order with orderable object and updates the object's internal state.

```csharp
// Obtain an instance of OrderController from the subsystem API first
OrderController orderController = ...;
orderController.SetOrderWithOrderableObject(target);
```

### GetActiveMovementOrderOf
`public static OrderType GetActiveMovementOrderOf(Formation formation)`

**Purpose:** Reads and returns the active movement order of value held by the this instance.

```csharp
// Static call; no instance required
OrderController.GetActiveMovementOrderOf(formation);
```

### GetActiveFacingOrderOf
`public static OrderType GetActiveFacingOrderOf(Formation formation)`

**Purpose:** Reads and returns the active facing order of value held by the this instance.

```csharp
// Static call; no instance required
OrderController.GetActiveFacingOrderOf(formation);
```

### GetActiveRidingOrderOf
`public static OrderType GetActiveRidingOrderOf(Formation formation)`

**Purpose:** Reads and returns the active riding order of value held by the this instance.

```csharp
// Static call; no instance required
OrderController.GetActiveRidingOrderOf(formation);
```

### GetActiveArrangementOrderOf
`public static OrderType GetActiveArrangementOrderOf(Formation formation)`

**Purpose:** Reads and returns the active arrangement order of value held by the this instance.

```csharp
// Static call; no instance required
OrderController.GetActiveArrangementOrderOf(formation);
```

### GetActiveFormOrderOf
`public static OrderType GetActiveFormOrderOf(Formation formation)`

**Purpose:** Reads and returns the active form order of value held by the this instance.

```csharp
// Static call; no instance required
OrderController.GetActiveFormOrderOf(formation);
```

### GetActiveFiringOrderOf
`public static OrderType GetActiveFiringOrderOf(Formation formation)`

**Purpose:** Reads and returns the active firing order of value held by the this instance.

```csharp
// Static call; no instance required
OrderController.GetActiveFiringOrderOf(formation);
```

### GetActiveAIControlOrderOf
`public static OrderType GetActiveAIControlOrderOf(Formation formation)`

**Purpose:** Reads and returns the active a i control order of value held by the this instance.

```csharp
// Static call; no instance required
OrderController.GetActiveAIControlOrderOf(formation);
```

### SimulateNewOrderWithPositionAndDirection
`public void SimulateNewOrderWithPositionAndDirection(WorldPosition formationLineBegin, WorldPosition formationLineEnd, out List<WorldPosition> simulationAgentFrames, bool isFormationLayoutVertical)`

**Purpose:** Executes the SimulateNewOrderWithPositionAndDirection logic.

```csharp
// Obtain an instance of OrderController from the subsystem API first
OrderController orderController = ...;
orderController.SimulateNewOrderWithPositionAndDirection(formationLineBegin, formationLineEnd, simulationAgentFrames, false);
```

### SimulateNewFacingOrder
`public void SimulateNewFacingOrder(Vec2 direction, out List<WorldPosition> simulationAgentFrames)`

**Purpose:** Executes the SimulateNewFacingOrder logic.

```csharp
// Obtain an instance of OrderController from the subsystem API first
OrderController orderController = ...;
orderController.SimulateNewFacingOrder(direction, simulationAgentFrames);
```

### SimulateNewCustomWidthOrder
`public void SimulateNewCustomWidthOrder(float width, out List<WorldPosition> simulationAgentFrames)`

**Purpose:** Executes the SimulateNewCustomWidthOrder logic.

```csharp
// Obtain an instance of OrderController from the subsystem API first
OrderController orderController = ...;
orderController.SimulateNewCustomWidthOrder(0, simulationAgentFrames);
```

### SimulateNewOrderWithPositionAndDirection
`public static void SimulateNewOrderWithPositionAndDirection(IEnumerable<Formation> formations, Dictionary<Formation, Formation> simulationFormations, WorldPosition formationLineBegin, WorldPosition formationLineEnd, out List<WorldPosition> simulationAgentFrames, bool isFormationLayoutVertical = true)`

**Purpose:** Executes the SimulateNewOrderWithPositionAndDirection logic.

```csharp
// Static call; no instance required
OrderController.SimulateNewOrderWithPositionAndDirection(formations, dictionary<Formation, simulationFormations, formationLineBegin, formationLineEnd, simulationAgentFrames, false);
```

### SimulateNewOrderWithPositionAndDirection
`public static void SimulateNewOrderWithPositionAndDirection(IEnumerable<Formation> formations, Dictionary<Formation, Formation> simulationFormations, WorldPosition formationLineBegin, WorldPosition formationLineEnd, out List<(Formation, int, float, WorldPosition, Vec2)> formationChanges, out bool isLineShort, bool isFormationLayoutVertical = true)`

**Purpose:** Executes the SimulateNewOrderWithPositionAndDirection logic.

```csharp
// Static call; no instance required
OrderController.SimulateNewOrderWithPositionAndDirection(formations, dictionary<Formation, simulationFormations, formationLineBegin, formationLineEnd, list<(Formation, 0, 0, worldPosition, formationChanges, isLineShort, false);
```

### SimulateDestinationFrames
`public void SimulateDestinationFrames(out List<WorldPosition> simulationAgentFrames, float minDistance = 3f)`

**Purpose:** Executes the SimulateDestinationFrames logic.

```csharp
// Obtain an instance of OrderController from the subsystem API first
OrderController orderController = ...;
orderController.SimulateDestinationFrames(simulationAgentFrames, 0);
```

### SortFormationsForHorizontalLayout
`public static IEnumerable<Formation> SortFormationsForHorizontalLayout(IEnumerable<Formation> formations)`

**Purpose:** Executes the SortFormationsForHorizontalLayout logic.

```csharp
// Static call; no instance required
OrderController.SortFormationsForHorizontalLayout(formations);
```

### GetOrderLookAtDirection
`public static Vec2 GetOrderLookAtDirection(IEnumerable<Formation> formations, Vec2 target)`

**Purpose:** Reads and returns the order look at direction value held by the this instance.

```csharp
// Static call; no instance required
OrderController.GetOrderLookAtDirection(formations, target);
```

### GetOrderFormCustomWidth
`public static float GetOrderFormCustomWidth(IEnumerable<Formation> formations, Vec3 orderPosition)`

**Purpose:** Reads and returns the order form custom width value held by the this instance.

```csharp
// Static call; no instance required
OrderController.GetOrderFormCustomWidth(formations, orderPosition);
```

### TransferUnits
`public void TransferUnits(Formation source, Formation target, int count)`

**Purpose:** Executes the TransferUnits logic.

```csharp
// Obtain an instance of OrderController from the subsystem API first
OrderController orderController = ...;
orderController.TransferUnits(source, target, 0);
```

### SplitFormation
`public IEnumerable<Formation> SplitFormation(Formation formation, int count = 2)`

**Purpose:** Splits formation into multiple parts or sub-items.

```csharp
// Obtain an instance of OrderController from the subsystem API first
OrderController orderController = ...;
var result = orderController.SplitFormation(formation, 0);
```

### TickDebug
`public void TickDebug()`

**Purpose:** Advances the debug state each frame or update cycle.

```csharp
// Obtain an instance of OrderController from the subsystem API first
OrderController orderController = ...;
orderController.TickDebug();
```

### AddOrderOverride
`public void AddOrderOverride(Func<Formation, MovementOrder, MovementOrder> orderOverride)`

**Purpose:** Adds order override to the current collection or state.

```csharp
// Obtain an instance of OrderController from the subsystem API first
OrderController orderController = ...;
orderController.AddOrderOverride(func<Formation, movementOrder, orderOverride);
```

### GetOverridenOrderType
`public OrderType GetOverridenOrderType(Formation formation)`

**Purpose:** Reads and returns the overriden order type value held by the this instance.

```csharp
// Obtain an instance of OrderController from the subsystem API first
OrderController orderController = ...;
var result = orderController.GetOverridenOrderType(formation);
```

### SetFormationUpdateEnabledAfterSetOrder
`public void SetFormationUpdateEnabledAfterSetOrder(bool value)`

**Purpose:** Assigns a new value to formation update enabled after set order and updates the object's internal state.

```csharp
// Obtain an instance of OrderController from the subsystem API first
OrderController orderController = ...;
orderController.SetFormationUpdateEnabledAfterSetOrder(false);
```

### TryCancelStopOrder
`public static void TryCancelStopOrder(Formation formation)`

**Purpose:** Attempts to retrieve cancel stop order, usually returning success through an out parameter.

```csharp
// Static call; no instance required
OrderController.TryCancelStopOrder(formation);
```

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<OrderController>();
```

## See Also

- [Area Index](../)