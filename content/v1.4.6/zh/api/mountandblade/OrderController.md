---
title: "OrderController"
description: "OrderController：TaleWorlds.MountAndBlade 的 public 类；公开成员 58 个（方法 49、属性 4、字段 2）。源文件 TaleWorlds.MountAndBlade/OrderController.cs。"
---
# OrderController

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class OrderController`
**File:** `TaleWorlds.MountAndBlade/OrderController.cs`

## 概述

OrderController 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/OrderController.cs。它是一个 public 类，继承链为 OrderController。public/protected 成员共 58 个：49 方法、4 属性、2 字段、2 事件、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：OrderController 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 OrderController。成员构成以方法为主（方法 49/58，属性 4/58），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/OrderController.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SiegeWeaponController` | `public SiegeWeaponController SiegeWeaponController` | 属性 |
| `MBReadOnlyList` | `public MBReadOnlyList<Formation>SelectedFormations` | 属性 |
| `FormationUpdateEnabledAfterSetOrder` | `public bool FormationUpdateEnabledAfterSetOrder` | 属性 |
| `OnOrderIssued;` | `public event OnOrderIssuedDelegate OnOrderIssued;` | 事件 |
| `OnSelectedFormationsChanged;` | `public event Action OnSelectedFormationsChanged;` | 事件 |
| `Formation>simulationFormations` | `public Dictionary<Formation, Formation>simulationFormations` | 属性 |
| `OrderController` | `public OrderController(Mission mission, Team team, Agent owner)` | 构造函数 |
| `OnSelectedFormationsCollectionChanged` | `protected void OnSelectedFormationsCollectionChanged()` | 方法 |
| `SelectFormation` | `protected virtual void SelectFormation(Formation formation, Agent selectorAgent)` | 方法 |
| `SelectFormation` | `public void SelectFormation(Formation formation)` | 方法 |
| `DeselectFormation` | `public void DeselectFormation(Formation formation)` | 方法 |
| `IsFormationListening` | `public bool IsFormationListening(Formation formation)` | 方法 |
| `IsFormationSelectable` | `public bool IsFormationSelectable(Formation formation)` | 方法 |
| `BackupAndDisableGesturesEnabled` | `public bool BackupAndDisableGesturesEnabled()` | 方法 |
| `RestoreGesturesEnabled` | `public void RestoreGesturesEnabled(bool oldValue)` | 方法 |
| `IsFormationSelectable` | `protected bool IsFormationSelectable(Formation formation, Agent selectorAgent)` | 方法 |
| `AreGesturesEnabled` | `protected bool AreGesturesEnabled()` | 方法 |
| `SelectAllFormations` | `protected virtual void SelectAllFormations(Agent selectorAgent, bool uiFeedback)` | 方法 |
| `SelectAllFormations` | `public void SelectAllFormations(bool uiFeedback = false)` | 方法 |
| `ClearSelectedFormations` | `public void ClearSelectedFormations()` | 方法 |
| `SetOrder` | `public unsafe virtual void SetOrder(OrderType orderType)` | 方法 |
| `PlayFormationSelectedGesture` | `protected static void PlayFormationSelectedGesture(Formation formation, Agent agent)` | 方法 |
| `BeforeSetOrder` | `protected void BeforeSetOrder(OrderType orderType)` | 方法 |
| `SetOrderWithAgent` | `public virtual void SetOrderWithAgent(OrderType orderType, Agent agent)` | 方法 |
| `SetOrderWithPosition` | `public virtual void SetOrderWithPosition(OrderType orderType, WorldPosition orderPosition)` | 方法 |
| `SetOrderWithFormation` | `public virtual void SetOrderWithFormation(OrderType orderType, Formation orderFormation)` | 方法 |
| `SetOrderWithFormationAndPercentage` | `public void SetOrderWithFormationAndPercentage(OrderType orderType, Formation orderFormation, float percentage)` | 方法 |
| `TransferUnitWithPriorityFunction` | `public void TransferUnitWithPriorityFunction(Formation orderFormation, int number, bool hasShield, bool hasSpear, bool hasThrown, bool isHeavy, bool isRanged, bool isMounted, bool excludeBannerman, List<Agent>excludedAgents)` | 方法 |
| `RearrangeFormationsAccordingToFilters` | `public void RearrangeFormationsAccordingToFilters(Team team, [TupleElementNames(new string[]` | 方法 |
| `SetOrderWithFormationAndNumber` | `public void SetOrderWithFormationAndNumber(OrderType orderType, Formation orderFormation, int number)` | 方法 |
| `SetOrderWithTwoPositions` | `public virtual void SetOrderWithTwoPositions(OrderType orderType, WorldPosition position1, WorldPosition position2)` | 方法 |
| `SetOrderWithOrderableObject` | `public virtual void SetOrderWithOrderableObject(IOrderable target)` | 方法 |
| `GetActiveMovementOrderOf` | `public unsafe static OrderType GetActiveMovementOrderOf(Formation formation)` | 方法 |
| `GetActiveFacingOrderOf` | `public static OrderType GetActiveFacingOrderOf(Formation formation)` | 方法 |
| `GetActiveRidingOrderOf` | `public static OrderType GetActiveRidingOrderOf(Formation formation)` | 方法 |
| `GetActiveArrangementOrderOf` | `public static OrderType GetActiveArrangementOrderOf(Formation formation)` | 方法 |
| `GetActiveFormOrderOf` | `public static OrderType GetActiveFormOrderOf(Formation formation)` | 方法 |
| `GetActiveFiringOrderOf` | `public static OrderType GetActiveFiringOrderOf(Formation formation)` | 方法 |
| `GetActiveAIControlOrderOf` | `public static OrderType GetActiveAIControlOrderOf(Formation formation)` | 方法 |
| `SimulateNewOrderWithPositionAndDirection` | `public void SimulateNewOrderWithPositionAndDirection(WorldPosition formationLineBegin, WorldPosition formationLineEnd, out List<WorldPosition>simulationAgentFrames, bool isFormationLayoutVertical)` | 方法 |
| `SimulateNewFacingOrder` | `public void SimulateNewFacingOrder(Vec2 direction, out List<WorldPosition>simulationAgentFrames)` | 方法 |
| `SimulateNewCustomWidthOrder` | `public void SimulateNewCustomWidthOrder(float width, out List<WorldPosition>simulationAgentFrames)` | 方法 |
| `SimulateNewOrderWithPositionAndDirection` | `public static void SimulateNewOrderWithPositionAndDirection(IEnumerable<Formation>formations, Dictionary<Formation, Formation>simulationFormations, WorldPosition formationLineBegin, WorldPosition formationLineEnd, out List<WorldPosition>simulationAgentFrames, bool isFormationLayoutVertical = true)` | 方法 |
| `SimulateNewOrderWithPositionAndDirection` | `public static void SimulateNewOrderWithPositionAndDirection(IEnumerable<Formation>formations, Dictionary<Formation, Formation>simulationFormations, WorldPosition formationLineBegin, WorldPosition formationLineEnd, out List<ValueTuple<Formation, int, float, WorldPosition, Vec2>>formationChanges, out bool isLineShort, bool isFormationLayoutVertical = true)` | 方法 |
| `SimulateDestinationFrames` | `public void SimulateDestinationFrames(out List<WorldPosition>simulationAgentFrames, float minDistance = 3f)` | 方法 |
| `IEnumerable` | `public static IEnumerable<Formation>SortFormationsForHorizontalLayout(IEnumerable<Formation>formations)` | 方法 |
| `GetOrderLookAtDirection` | `public static Vec2 GetOrderLookAtDirection(IEnumerable<Formation>formations, Vec2 target)` | 方法 |
| `GetOrderFormCustomWidth` | `public static float GetOrderFormCustomWidth(IEnumerable<Formation>formations, Vec3 orderPosition)` | 方法 |
| `TransferUnits` | `public void TransferUnits(Formation source, Formation target, int count)` | 方法 |
| `IEnumerable` | `public IEnumerable<Formation>SplitFormation(Formation formation, int count = 2)` | 方法 |
| `FireOnOrderIssued` | `protected void FireOnOrderIssued(OrderType orderType, MBReadOnlyList<Formation>appliedFormations, OrderController orderController, params object[]delegateParams)` | 方法 |
| `TickDebug` | `public void TickDebug()` | 方法 |
| `AddOrderOverride` | `public void AddOrderOverride(Func<Formation, MovementOrder, MovementOrder>orderOverride)` | 方法 |
| `GetOverridenOrderType` | `public OrderType GetOverridenOrderType(Formation formation)` | 方法 |
| `SetFormationUpdateEnabledAfterSetOrder` | `public void SetFormationUpdateEnabledAfterSetOrder(bool value)` | 方法 |
| `TryCancelStopOrder` | `public static void TryCancelStopOrder(Formation formation)` | 方法 |
| `FormationGapInLine` | `public const float FormationGapInLine` | 字段 |
| `_formationUpdateEnabledAfterSetOrder` | `protected bool _formationUpdateEnabledAfterSetOrder` | 字段 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
