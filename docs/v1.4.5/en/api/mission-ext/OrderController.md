<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OrderController`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# OrderController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderController`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/OrderController.cs`

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

**Purpose:** Handles logic related to `select formation`.

### DeselectFormation
`public void DeselectFormation(Formation formation)`

**Purpose:** Handles logic related to `deselect formation`.

### IsFormationListening
`public bool IsFormationListening(Formation formation)`

**Purpose:** Handles logic related to `is formation listening`.

### IsFormationSelectable
`public bool IsFormationSelectable(Formation formation)`

**Purpose:** Handles logic related to `is formation selectable`.

### BackupAndDisableGesturesEnabled
`public bool BackupAndDisableGesturesEnabled()`

**Purpose:** Handles logic related to `backup and disable gestures enabled`.

### RestoreGesturesEnabled
`public void RestoreGesturesEnabled(bool oldValue)`

**Purpose:** Handles logic related to `restore gestures enabled`.

### SelectAllFormations
`public void SelectAllFormations(bool uiFeedback = false)`

**Purpose:** Handles logic related to `select all formations`.

### ClearSelectedFormations
`public void ClearSelectedFormations()`

**Purpose:** Handles logic related to `clear selected formations`.

### SetOrder
`public virtual void SetOrder(OrderType orderType)`

**Purpose:** Sets the value or state of `order`.

### SetOrderWithAgent
`public virtual void SetOrderWithAgent(OrderType orderType, Agent agent)`

**Purpose:** Sets the value or state of `order with agent`.

### SetOrderWithPosition
`public virtual void SetOrderWithPosition(OrderType orderType, WorldPosition orderPosition)`

**Purpose:** Sets the value or state of `order with position`.

### SetOrderWithFormation
`public virtual void SetOrderWithFormation(OrderType orderType, Formation orderFormation)`

**Purpose:** Sets the value or state of `order with formation`.

### SetOrderWithFormationAndPercentage
`public void SetOrderWithFormationAndPercentage(OrderType orderType, Formation orderFormation, float percentage)`

**Purpose:** Sets the value or state of `order with formation and percentage`.

### TransferUnitWithPriorityFunction
`public void TransferUnitWithPriorityFunction(Formation orderFormation, int number, bool hasShield, bool hasSpear, bool hasThrown, bool isHeavy, bool isRanged, bool isMounted, bool excludeBannerman, List<Agent> excludedAgents)`

**Purpose:** Handles logic related to `transfer unit with priority function`.

### RearrangeFormationsAccordingToFilters
`public void RearrangeFormationsAccordingToFilters(Team team, List<(Formation formation, int troopCount, TroopTraitsMask troopFilter, List<Agent> excludedAgents)> MassTransferData)`

**Purpose:** Handles logic related to `rearrange formations according to filters`.

### SetOrderWithFormationAndNumber
`public void SetOrderWithFormationAndNumber(OrderType orderType, Formation orderFormation, int number)`

**Purpose:** Sets the value or state of `order with formation and number`.

### SetOrderWithTwoPositions
`public virtual void SetOrderWithTwoPositions(OrderType orderType, WorldPosition position1, WorldPosition position2)`

**Purpose:** Sets the value or state of `order with two positions`.

### SetOrderWithOrderableObject
`public virtual void SetOrderWithOrderableObject(IOrderable target)`

**Purpose:** Sets the value or state of `order with orderable object`.

### GetActiveMovementOrderOf
`public static OrderType GetActiveMovementOrderOf(Formation formation)`

**Purpose:** Gets the current value of `active movement order of`.

### GetActiveFacingOrderOf
`public static OrderType GetActiveFacingOrderOf(Formation formation)`

**Purpose:** Gets the current value of `active facing order of`.

### GetActiveRidingOrderOf
`public static OrderType GetActiveRidingOrderOf(Formation formation)`

**Purpose:** Gets the current value of `active riding order of`.

### GetActiveArrangementOrderOf
`public static OrderType GetActiveArrangementOrderOf(Formation formation)`

**Purpose:** Gets the current value of `active arrangement order of`.

### GetActiveFormOrderOf
`public static OrderType GetActiveFormOrderOf(Formation formation)`

**Purpose:** Gets the current value of `active form order of`.

### GetActiveFiringOrderOf
`public static OrderType GetActiveFiringOrderOf(Formation formation)`

**Purpose:** Gets the current value of `active firing order of`.

### GetActiveAIControlOrderOf
`public static OrderType GetActiveAIControlOrderOf(Formation formation)`

**Purpose:** Gets the current value of `active a i control order of`.

### SimulateNewOrderWithPositionAndDirection
`public void SimulateNewOrderWithPositionAndDirection(WorldPosition formationLineBegin, WorldPosition formationLineEnd, out List<WorldPosition> simulationAgentFrames, bool isFormationLayoutVertical)`

**Purpose:** Handles logic related to `simulate new order with position and direction`.

### SimulateNewFacingOrder
`public void SimulateNewFacingOrder(Vec2 direction, out List<WorldPosition> simulationAgentFrames)`

**Purpose:** Handles logic related to `simulate new facing order`.

### SimulateNewCustomWidthOrder
`public void SimulateNewCustomWidthOrder(float width, out List<WorldPosition> simulationAgentFrames)`

**Purpose:** Handles logic related to `simulate new custom width order`.

### SimulateNewOrderWithPositionAndDirection
`public static void SimulateNewOrderWithPositionAndDirection(IEnumerable<Formation> formations, Dictionary<Formation, Formation> simulationFormations, WorldPosition formationLineBegin, WorldPosition formationLineEnd, out List<WorldPosition> simulationAgentFrames, bool isFormationLayoutVertical = true)`

**Purpose:** Handles logic related to `simulate new order with position and direction`.

### SimulateNewOrderWithPositionAndDirection
`public static void SimulateNewOrderWithPositionAndDirection(IEnumerable<Formation> formations, Dictionary<Formation, Formation> simulationFormations, WorldPosition formationLineBegin, WorldPosition formationLineEnd, out List<(Formation, int, float, WorldPosition, Vec2)> formationChanges, out bool isLineShort, bool isFormationLayoutVertical = true)`

**Purpose:** Handles logic related to `simulate new order with position and direction`.

### SimulateDestinationFrames
`public void SimulateDestinationFrames(out List<WorldPosition> simulationAgentFrames, float minDistance = 3f)`

**Purpose:** Handles logic related to `simulate destination frames`.

### SortFormationsForHorizontalLayout
`public static IEnumerable<Formation> SortFormationsForHorizontalLayout(IEnumerable<Formation> formations)`

**Purpose:** Handles logic related to `sort formations for horizontal layout`.

### GetOrderLookAtDirection
`public static Vec2 GetOrderLookAtDirection(IEnumerable<Formation> formations, Vec2 target)`

**Purpose:** Gets the current value of `order look at direction`.

### GetOrderFormCustomWidth
`public static float GetOrderFormCustomWidth(IEnumerable<Formation> formations, Vec3 orderPosition)`

**Purpose:** Gets the current value of `order form custom width`.

### TransferUnits
`public void TransferUnits(Formation source, Formation target, int count)`

**Purpose:** Handles logic related to `transfer units`.

### SplitFormation
`public IEnumerable<Formation> SplitFormation(Formation formation, int count = 2)`

**Purpose:** Handles logic related to `split formation`.

### TickDebug
`public void TickDebug()`

**Purpose:** Handles logic related to `tick debug`.

### AddOrderOverride
`public void AddOrderOverride(Func<Formation, MovementOrder, MovementOrder> orderOverride)`

**Purpose:** Adds `order override` to the current collection or state.

### GetOverridenOrderType
`public OrderType GetOverridenOrderType(Formation formation)`

**Purpose:** Gets the current value of `overriden order type`.

### SetFormationUpdateEnabledAfterSetOrder
`public void SetFormationUpdateEnabledAfterSetOrder(bool value)`

**Purpose:** Sets the value or state of `formation update enabled after set order`.

### TryCancelStopOrder
`public static void TryCancelStopOrder(Formation formation)`

**Purpose:** Attempts to get `cancel stop order`, usually returning the result in an out parameter.

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<OrderController>();
```

## See Also

- [Complete Class Catalog](../catalog)