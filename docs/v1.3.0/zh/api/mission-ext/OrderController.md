<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `OrderController`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# OrderController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderController`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/OrderController.cs`

## 概述

`OrderController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `OrderController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `SiegeWeaponController` | `public SiegeWeaponController SiegeWeaponController { get; }` |
| `SelectedFormations` | `public MBReadOnlyList<Formation> SelectedFormations { get; }` |
| `FormationUpdateEnabledAfterSetOrder` | `public bool FormationUpdateEnabledAfterSetOrder { get; }` |
| `simulationFormations` | `public Dictionary<Formation, Formation> simulationFormations { get; }` |

## 主要方法

### SelectFormation
`public void SelectFormation(Formation formation)`

**用途 / Purpose:** 处理 `select formation` 相关逻辑。

### DeselectFormation
`public void DeselectFormation(Formation formation)`

**用途 / Purpose:** 处理 `deselect formation` 相关逻辑。

### IsFormationListening
`public bool IsFormationListening(Formation formation)`

**用途 / Purpose:** 处理 `is formation listening` 相关逻辑。

### IsFormationSelectable
`public bool IsFormationSelectable(Formation formation)`

**用途 / Purpose:** 处理 `is formation selectable` 相关逻辑。

### BackupAndDisableGesturesEnabled
`public bool BackupAndDisableGesturesEnabled()`

**用途 / Purpose:** 处理 `backup and disable gestures enabled` 相关逻辑。

### RestoreGesturesEnabled
`public void RestoreGesturesEnabled(bool oldValue)`

**用途 / Purpose:** 处理 `restore gestures enabled` 相关逻辑。

### SelectAllFormations
`public void SelectAllFormations(bool uiFeedback = false)`

**用途 / Purpose:** 处理 `select all formations` 相关逻辑。

### ClearSelectedFormations
`public void ClearSelectedFormations()`

**用途 / Purpose:** 处理 `clear selected formations` 相关逻辑。

### SetOrder
`public unsafe virtual void SetOrder(OrderType orderType)`

**用途 / Purpose:** 设置 `order` 的值或状态。

### SetOrderWithAgent
`public virtual void SetOrderWithAgent(OrderType orderType, Agent agent)`

**用途 / Purpose:** 设置 `order with agent` 的值或状态。

### SetOrderWithPosition
`public virtual void SetOrderWithPosition(OrderType orderType, WorldPosition orderPosition)`

**用途 / Purpose:** 设置 `order with position` 的值或状态。

### SetOrderWithFormation
`public virtual void SetOrderWithFormation(OrderType orderType, Formation orderFormation)`

**用途 / Purpose:** 设置 `order with formation` 的值或状态。

### SetOrderWithFormationAndPercentage
`public void SetOrderWithFormationAndPercentage(OrderType orderType, Formation orderFormation, float percentage)`

**用途 / Purpose:** 设置 `order with formation and percentage` 的值或状态。

### TransferUnitWithPriorityFunction
`public void TransferUnitWithPriorityFunction(Formation orderFormation, int number, bool hasShield, bool hasSpear, bool hasThrown, bool isHeavy, bool isRanged, bool isMounted, bool excludeBannerman, List<Agent> excludedAgents)`

**用途 / Purpose:** 处理 `transfer unit with priority function` 相关逻辑。

### RearrangeFormationsAccordingToFilters
`public void RearrangeFormationsAccordingToFilters(Team team, { "formation", "troopCount", "troopFilter", "excludedAgents" })`

**用途 / Purpose:** 处理 `rearrange formations according to filters` 相关逻辑。

### SetOrderWithFormationAndNumber
`public void SetOrderWithFormationAndNumber(OrderType orderType, Formation orderFormation, int number)`

**用途 / Purpose:** 设置 `order with formation and number` 的值或状态。

### SetOrderWithTwoPositions
`public virtual void SetOrderWithTwoPositions(OrderType orderType, WorldPosition position1, WorldPosition position2)`

**用途 / Purpose:** 设置 `order with two positions` 的值或状态。

### SetOrderWithOrderableObject
`public virtual void SetOrderWithOrderableObject(IOrderable target)`

**用途 / Purpose:** 设置 `order with orderable object` 的值或状态。

### GetActiveMovementOrderOf
`public unsafe static OrderType GetActiveMovementOrderOf(Formation formation)`

**用途 / Purpose:** 获取 `active movement order of` 的当前值。

### GetActiveFacingOrderOf
`public static OrderType GetActiveFacingOrderOf(Formation formation)`

**用途 / Purpose:** 获取 `active facing order of` 的当前值。

### GetActiveRidingOrderOf
`public static OrderType GetActiveRidingOrderOf(Formation formation)`

**用途 / Purpose:** 获取 `active riding order of` 的当前值。

### GetActiveArrangementOrderOf
`public static OrderType GetActiveArrangementOrderOf(Formation formation)`

**用途 / Purpose:** 获取 `active arrangement order of` 的当前值。

### GetActiveFormOrderOf
`public static OrderType GetActiveFormOrderOf(Formation formation)`

**用途 / Purpose:** 获取 `active form order of` 的当前值。

### GetActiveFiringOrderOf
`public static OrderType GetActiveFiringOrderOf(Formation formation)`

**用途 / Purpose:** 获取 `active firing order of` 的当前值。

### GetActiveAIControlOrderOf
`public static OrderType GetActiveAIControlOrderOf(Formation formation)`

**用途 / Purpose:** 获取 `active a i control order of` 的当前值。

### SimulateNewOrderWithPositionAndDirection
`public void SimulateNewOrderWithPositionAndDirection(WorldPosition formationLineBegin, WorldPosition formationLineEnd, out List<WorldPosition> simulationAgentFrames, bool isFormationLayoutVertical)`

**用途 / Purpose:** 处理 `simulate new order with position and direction` 相关逻辑。

### SimulateNewFacingOrder
`public void SimulateNewFacingOrder(Vec2 direction, out List<WorldPosition> simulationAgentFrames)`

**用途 / Purpose:** 处理 `simulate new facing order` 相关逻辑。

### SimulateNewCustomWidthOrder
`public void SimulateNewCustomWidthOrder(float width, out List<WorldPosition> simulationAgentFrames)`

**用途 / Purpose:** 处理 `simulate new custom width order` 相关逻辑。

### SimulateNewOrderWithPositionAndDirection
`public static void SimulateNewOrderWithPositionAndDirection(IEnumerable<Formation> formations, Dictionary<Formation, Formation> simulationFormations, WorldPosition formationLineBegin, WorldPosition formationLineEnd, out List<WorldPosition> simulationAgentFrames, bool isFormationLayoutVertical = true)`

**用途 / Purpose:** 处理 `simulate new order with position and direction` 相关逻辑。

### SimulateNewOrderWithPositionAndDirection
`public static void SimulateNewOrderWithPositionAndDirection(IEnumerable<Formation> formations, Dictionary<Formation, Formation> simulationFormations, WorldPosition formationLineBegin, WorldPosition formationLineEnd, out List<ValueTuple<Formation, int, float, WorldPosition, Vec2>> formationChanges, out bool isLineShort, bool isFormationLayoutVertical = true)`

**用途 / Purpose:** 处理 `simulate new order with position and direction` 相关逻辑。

### SimulateDestinationFrames
`public void SimulateDestinationFrames(out List<WorldPosition> simulationAgentFrames, float minDistance = 3f)`

**用途 / Purpose:** 处理 `simulate destination frames` 相关逻辑。

### SortFormationsForHorizontalLayout
`public static IEnumerable<Formation> SortFormationsForHorizontalLayout(IEnumerable<Formation> formations)`

**用途 / Purpose:** 处理 `sort formations for horizontal layout` 相关逻辑。

### GetOrderLookAtDirection
`public static Vec2 GetOrderLookAtDirection(IEnumerable<Formation> formations, Vec2 target)`

**用途 / Purpose:** 获取 `order look at direction` 的当前值。

### GetOrderFormCustomWidth
`public static float GetOrderFormCustomWidth(IEnumerable<Formation> formations, Vec3 orderPosition)`

**用途 / Purpose:** 获取 `order form custom width` 的当前值。

### TransferUnits
`public void TransferUnits(Formation source, Formation target, int count)`

**用途 / Purpose:** 处理 `transfer units` 相关逻辑。

### SplitFormation
`public IEnumerable<Formation> SplitFormation(Formation formation, int count = 2)`

**用途 / Purpose:** 处理 `split formation` 相关逻辑。

### TickDebug
`public void TickDebug()`

**用途 / Purpose:** 处理 `tick debug` 相关逻辑。

### AddOrderOverride
`public void AddOrderOverride(Func<Formation, MovementOrder, MovementOrder> orderOverride)`

**用途 / Purpose:** 向当前集合/状态中添加 `order override`。

### GetOverridenOrderType
`public OrderType GetOverridenOrderType(Formation formation)`

**用途 / Purpose:** 获取 `overriden order type` 的当前值。

### SetFormationUpdateEnabledAfterSetOrder
`public void SetFormationUpdateEnabledAfterSetOrder(bool value)`

**用途 / Purpose:** 设置 `formation update enabled after set order` 的值或状态。

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<OrderController>();
```

## 参见

- [完整类目录](../catalog)