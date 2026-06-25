---
title: "OrderController"
description: "OrderController 的自动生成类参考。"
---
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

**用途 / Purpose:** **用途 / Purpose:** 调用 SelectFormation 对应的操作。

```csharp
// 先通过子系统 API 拿到 OrderController 实例
OrderController orderController = ...;
orderController.SelectFormation(formation);
```

### DeselectFormation
`public void DeselectFormation(Formation formation)`

**用途 / Purpose:** **用途 / Purpose:** 调用 DeselectFormation 对应的操作。

```csharp
// 先通过子系统 API 拿到 OrderController 实例
OrderController orderController = ...;
orderController.DeselectFormation(formation);
```

### IsFormationListening
`public bool IsFormationListening(Formation formation)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 formation listening 状态或条件。

```csharp
// 先通过子系统 API 拿到 OrderController 实例
OrderController orderController = ...;
var result = orderController.IsFormationListening(formation);
```

### IsFormationSelectable
`public bool IsFormationSelectable(Formation formation)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 formation selectable 状态或条件。

```csharp
// 先通过子系统 API 拿到 OrderController 实例
OrderController orderController = ...;
var result = orderController.IsFormationSelectable(formation);
```

### BackupAndDisableGesturesEnabled
`public bool BackupAndDisableGesturesEnabled()`

**用途 / Purpose:** **用途 / Purpose:** 调用 BackupAndDisableGesturesEnabled 对应的操作。

```csharp
// 先通过子系统 API 拿到 OrderController 实例
OrderController orderController = ...;
var result = orderController.BackupAndDisableGesturesEnabled();
```

### RestoreGesturesEnabled
`public void RestoreGesturesEnabled(bool oldValue)`

**用途 / Purpose:** **用途 / Purpose:** 调用 RestoreGesturesEnabled 对应的操作。

```csharp
// 先通过子系统 API 拿到 OrderController 实例
OrderController orderController = ...;
orderController.RestoreGesturesEnabled(false);
```

### SelectAllFormations
`public void SelectAllFormations(bool uiFeedback = false)`

**用途 / Purpose:** **用途 / Purpose:** 调用 SelectAllFormations 对应的操作。

```csharp
// 先通过子系统 API 拿到 OrderController 实例
OrderController orderController = ...;
orderController.SelectAllFormations(false);
```

### ClearSelectedFormations
`public void ClearSelectedFormations()`

**用途 / Purpose:** **用途 / Purpose:** 清空当前对象中的selected formations。

```csharp
// 先通过子系统 API 拿到 OrderController 实例
OrderController orderController = ...;
orderController.ClearSelectedFormations();
```

### SetOrder
`public unsafe virtual void SetOrder(OrderType orderType)`

**用途 / Purpose:** **用途 / Purpose:** 为 order 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 OrderController 实例
OrderController orderController = ...;
orderController.SetOrder(orderType);
```

### SetOrderWithAgent
`public virtual void SetOrderWithAgent(OrderType orderType, Agent agent)`

**用途 / Purpose:** **用途 / Purpose:** 为 order with agent 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 OrderController 实例
OrderController orderController = ...;
orderController.SetOrderWithAgent(orderType, agent);
```

### SetOrderWithPosition
`public virtual void SetOrderWithPosition(OrderType orderType, WorldPosition orderPosition)`

**用途 / Purpose:** **用途 / Purpose:** 为 order with position 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 OrderController 实例
OrderController orderController = ...;
orderController.SetOrderWithPosition(orderType, orderPosition);
```

### SetOrderWithFormation
`public virtual void SetOrderWithFormation(OrderType orderType, Formation orderFormation)`

**用途 / Purpose:** **用途 / Purpose:** 为 order with formation 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 OrderController 实例
OrderController orderController = ...;
orderController.SetOrderWithFormation(orderType, orderFormation);
```

### SetOrderWithFormationAndPercentage
`public void SetOrderWithFormationAndPercentage(OrderType orderType, Formation orderFormation, float percentage)`

**用途 / Purpose:** **用途 / Purpose:** 为 order with formation and percentage 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 OrderController 实例
OrderController orderController = ...;
orderController.SetOrderWithFormationAndPercentage(orderType, orderFormation, 0);
```

### TransferUnitWithPriorityFunction
`public void TransferUnitWithPriorityFunction(Formation orderFormation, int number, bool hasShield, bool hasSpear, bool hasThrown, bool isHeavy, bool isRanged, bool isMounted, bool excludeBannerman, List<Agent> excludedAgents)`

**用途 / Purpose:** **用途 / Purpose:** 调用 TransferUnitWithPriorityFunction 对应的操作。

```csharp
// 先通过子系统 API 拿到 OrderController 实例
OrderController orderController = ...;
orderController.TransferUnitWithPriorityFunction(orderFormation, 0, false, false, false, false, false, false, false, excludedAgents);
```

### RearrangeFormationsAccordingToFilters
`public void RearrangeFormationsAccordingToFilters(Team team, { "formation", "troopCount", "troopFilter", "excludedAgents" })`

**用途 / Purpose:** **用途 / Purpose:** 调用 RearrangeFormationsAccordingToFilters 对应的操作。

```csharp
// 先通过子系统 API 拿到 OrderController 实例
OrderController orderController = ...;
orderController.RearrangeFormationsAccordingToFilters(team, "formation", "troopCount", "troopFilter", });
```

### SetOrderWithFormationAndNumber
`public void SetOrderWithFormationAndNumber(OrderType orderType, Formation orderFormation, int number)`

**用途 / Purpose:** **用途 / Purpose:** 为 order with formation and number 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 OrderController 实例
OrderController orderController = ...;
orderController.SetOrderWithFormationAndNumber(orderType, orderFormation, 0);
```

### SetOrderWithTwoPositions
`public virtual void SetOrderWithTwoPositions(OrderType orderType, WorldPosition position1, WorldPosition position2)`

**用途 / Purpose:** **用途 / Purpose:** 为 order with two positions 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 OrderController 实例
OrderController orderController = ...;
orderController.SetOrderWithTwoPositions(orderType, position1, position2);
```

### SetOrderWithOrderableObject
`public virtual void SetOrderWithOrderableObject(IOrderable target)`

**用途 / Purpose:** **用途 / Purpose:** 为 order with orderable object 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 OrderController 实例
OrderController orderController = ...;
orderController.SetOrderWithOrderableObject(target);
```

### GetActiveMovementOrderOf
`public unsafe static OrderType GetActiveMovementOrderOf(Formation formation)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 active movement order of 的结果。

```csharp
// 静态调用，不需要实例
OrderController.GetActiveMovementOrderOf(formation);
```

### GetActiveFacingOrderOf
`public static OrderType GetActiveFacingOrderOf(Formation formation)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 active facing order of 的结果。

```csharp
// 静态调用，不需要实例
OrderController.GetActiveFacingOrderOf(formation);
```

### GetActiveRidingOrderOf
`public static OrderType GetActiveRidingOrderOf(Formation formation)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 active riding order of 的结果。

```csharp
// 静态调用，不需要实例
OrderController.GetActiveRidingOrderOf(formation);
```

### GetActiveArrangementOrderOf
`public static OrderType GetActiveArrangementOrderOf(Formation formation)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 active arrangement order of 的结果。

```csharp
// 静态调用，不需要实例
OrderController.GetActiveArrangementOrderOf(formation);
```

### GetActiveFormOrderOf
`public static OrderType GetActiveFormOrderOf(Formation formation)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 active form order of 的结果。

```csharp
// 静态调用，不需要实例
OrderController.GetActiveFormOrderOf(formation);
```

### GetActiveFiringOrderOf
`public static OrderType GetActiveFiringOrderOf(Formation formation)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 active firing order of 的结果。

```csharp
// 静态调用，不需要实例
OrderController.GetActiveFiringOrderOf(formation);
```

### GetActiveAIControlOrderOf
`public static OrderType GetActiveAIControlOrderOf(Formation formation)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 active a i control order of 的结果。

```csharp
// 静态调用，不需要实例
OrderController.GetActiveAIControlOrderOf(formation);
```

### SimulateNewOrderWithPositionAndDirection
`public void SimulateNewOrderWithPositionAndDirection(WorldPosition formationLineBegin, WorldPosition formationLineEnd, out List<WorldPosition> simulationAgentFrames, bool isFormationLayoutVertical)`

**用途 / Purpose:** **用途 / Purpose:** 调用 SimulateNewOrderWithPositionAndDirection 对应的操作。

```csharp
// 先通过子系统 API 拿到 OrderController 实例
OrderController orderController = ...;
orderController.SimulateNewOrderWithPositionAndDirection(formationLineBegin, formationLineEnd, simulationAgentFrames, false);
```

### SimulateNewFacingOrder
`public void SimulateNewFacingOrder(Vec2 direction, out List<WorldPosition> simulationAgentFrames)`

**用途 / Purpose:** **用途 / Purpose:** 调用 SimulateNewFacingOrder 对应的操作。

```csharp
// 先通过子系统 API 拿到 OrderController 实例
OrderController orderController = ...;
orderController.SimulateNewFacingOrder(direction, simulationAgentFrames);
```

### SimulateNewCustomWidthOrder
`public void SimulateNewCustomWidthOrder(float width, out List<WorldPosition> simulationAgentFrames)`

**用途 / Purpose:** **用途 / Purpose:** 调用 SimulateNewCustomWidthOrder 对应的操作。

```csharp
// 先通过子系统 API 拿到 OrderController 实例
OrderController orderController = ...;
orderController.SimulateNewCustomWidthOrder(0, simulationAgentFrames);
```

### SimulateNewOrderWithPositionAndDirection
`public static void SimulateNewOrderWithPositionAndDirection(IEnumerable<Formation> formations, Dictionary<Formation, Formation> simulationFormations, WorldPosition formationLineBegin, WorldPosition formationLineEnd, out List<WorldPosition> simulationAgentFrames, bool isFormationLayoutVertical = true)`

**用途 / Purpose:** **用途 / Purpose:** 调用 SimulateNewOrderWithPositionAndDirection 对应的操作。

```csharp
// 静态调用，不需要实例
OrderController.SimulateNewOrderWithPositionAndDirection(formations, dictionary<Formation, simulationFormations, formationLineBegin, formationLineEnd, simulationAgentFrames, false);
```

### SimulateNewOrderWithPositionAndDirection
`public static void SimulateNewOrderWithPositionAndDirection(IEnumerable<Formation> formations, Dictionary<Formation, Formation> simulationFormations, WorldPosition formationLineBegin, WorldPosition formationLineEnd, out List<ValueTuple<Formation, int, float, WorldPosition, Vec2>> formationChanges, out bool isLineShort, bool isFormationLayoutVertical = true)`

**用途 / Purpose:** **用途 / Purpose:** 调用 SimulateNewOrderWithPositionAndDirection 对应的操作。

```csharp
// 静态调用，不需要实例
OrderController.SimulateNewOrderWithPositionAndDirection(formations, dictionary<Formation, simulationFormations, formationLineBegin, formationLineEnd, list<ValueTuple<Formation, 0, 0, worldPosition, formationChanges, isLineShort, false);
```

### SimulateDestinationFrames
`public void SimulateDestinationFrames(out List<WorldPosition> simulationAgentFrames, float minDistance = 3f)`

**用途 / Purpose:** **用途 / Purpose:** 调用 SimulateDestinationFrames 对应的操作。

```csharp
// 先通过子系统 API 拿到 OrderController 实例
OrderController orderController = ...;
orderController.SimulateDestinationFrames(simulationAgentFrames, 0);
```

### SortFormationsForHorizontalLayout
`public static IEnumerable<Formation> SortFormationsForHorizontalLayout(IEnumerable<Formation> formations)`

**用途 / Purpose:** **用途 / Purpose:** 调用 SortFormationsForHorizontalLayout 对应的操作。

```csharp
// 静态调用，不需要实例
OrderController.SortFormationsForHorizontalLayout(formations);
```

### GetOrderLookAtDirection
`public static Vec2 GetOrderLookAtDirection(IEnumerable<Formation> formations, Vec2 target)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 order look at direction 的结果。

```csharp
// 静态调用，不需要实例
OrderController.GetOrderLookAtDirection(formations, target);
```

### GetOrderFormCustomWidth
`public static float GetOrderFormCustomWidth(IEnumerable<Formation> formations, Vec3 orderPosition)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 order form custom width 的结果。

```csharp
// 静态调用，不需要实例
OrderController.GetOrderFormCustomWidth(formations, orderPosition);
```

### TransferUnits
`public void TransferUnits(Formation source, Formation target, int count)`

**用途 / Purpose:** **用途 / Purpose:** 调用 TransferUnits 对应的操作。

```csharp
// 先通过子系统 API 拿到 OrderController 实例
OrderController orderController = ...;
orderController.TransferUnits(source, target, 0);
```

### SplitFormation
`public IEnumerable<Formation> SplitFormation(Formation formation, int count = 2)`

**用途 / Purpose:** **用途 / Purpose:** 将formation拆分为多个部分或子项。

```csharp
// 先通过子系统 API 拿到 OrderController 实例
OrderController orderController = ...;
var result = orderController.SplitFormation(formation, 0);
```

### TickDebug
`public void TickDebug()`

**用途 / Purpose:** **用途 / Purpose:** 在每一帧或每个更新周期内推进debug的状态。

```csharp
// 先通过子系统 API 拿到 OrderController 实例
OrderController orderController = ...;
orderController.TickDebug();
```

### AddOrderOverride
`public void AddOrderOverride(Func<Formation, MovementOrder, MovementOrder> orderOverride)`

**用途 / Purpose:** **用途 / Purpose:** 将 order override 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 OrderController 实例
OrderController orderController = ...;
orderController.AddOrderOverride(func<Formation, movementOrder, orderOverride);
```

### GetOverridenOrderType
`public OrderType GetOverridenOrderType(Formation formation)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 overriden order type 的结果。

```csharp
// 先通过子系统 API 拿到 OrderController 实例
OrderController orderController = ...;
var result = orderController.GetOverridenOrderType(formation);
```

### SetFormationUpdateEnabledAfterSetOrder
`public void SetFormationUpdateEnabledAfterSetOrder(bool value)`

**用途 / Purpose:** **用途 / Purpose:** 为 formation update enabled after set order 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 OrderController 实例
OrderController orderController = ...;
orderController.SetFormationUpdateEnabledAfterSetOrder(false);
```

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<OrderController>();
```

## 参见

- [本区域目录](../)