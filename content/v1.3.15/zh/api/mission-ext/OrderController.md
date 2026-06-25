---
title: "OrderController"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `OrderController`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OrderController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** public class OrderController
**Base:** ?**File:** 

`TaleWorlds.MountAndBlade/OrderController.cs

`

## 概述

`OrderController

` 管理任务中的队形选择与下令。它跟踪 

`SelectedFormations

`，并控制队形是否在监?可选（

`IsFormationListening

`、`IsFormationSelectable

`）。指?UI 与程序化下令?mod 都用它。可临时备份并禁用手势下令?
## 
## 心智模型

先把 `OrderController` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。
主要属?
\| Name \| Signature \|
\|------\|-----------\|
\| 

`SelectedFormations

` \| 

`public MBReadOnlyList&lt;Formation&gt; SelectedFormations { get { return this._selectedFormations; }

` \|
\| 

`FormationUpdateEnabledAfterSetOrder

` \| 

`public bool FormationUpdateEnabledAfterSetOrder { get { return this._formationUpdateEnabledAfterSetOrder; }

` \|

## 主要方法

### SelectFormation
`

`

`csharp
public void SelectFormation(Formation formation)
`

`

`

### DeselectFormation
`

`

`csharp
public void DeselectFormation(Formation formation)
`

`

`

### IsFormationListening
`

`

`csharp
public bool IsFormationListening(Formation formation)
`

`

`

### IsFormationSelectable
`

`

`csharp
public bool IsFormationSelectable(Formation formation)
`

`

`

### BackupAndDisableGesturesEnabled
`

`

`csharp
public bool BackupAndDisableGesturesEnabled()
`

`

`

### RestoreGesturesEnabled
`

`

`csharp
public void RestoreGesturesEnabled(bool oldValue)
`

`

`

### SelectAllFormations
`

`

`csharp
public void SelectAllFormations(bool uiFeedback = false)
`

`

`

### ClearSelectedFormations
`

`

`csharp
public void ClearSelectedFormations()
`

`

`

### SetOrder
`

`

`csharp
public unsafe virtual void SetOrder(OrderType orderType)
`

`

`

### SetOrderWithAgent
`

`

`csharp
public virtual void SetOrderWithAgent(OrderType orderType, Agent agent)
`

`

`

### SetOrderWithPosition
`

`

`csharp
public virtual void SetOrderWithPosition(OrderType orderType, WorldPosition orderPosition)
`

`

`

### SetOrderWithFormation
`

`

`csharp
public virtual void SetOrderWithFormation(OrderType orderType, Formation orderFormation)
`

`

`

### SetOrderWithFormationAndPercentage
`

`

`csharp
public void SetOrderWithFormationAndPercentage(OrderType orderType, Formation orderFormation, float percentage)
`

`

`

### TransferUnitWithPriorityFunction
`

`

`csharp
public void TransferUnitWithPriorityFunction(Formation orderFormation, int number, bool hasShield, bool hasSpear, bool hasThrown, bool isHeavy, bool isRanged, bool isMounted, bool excludeBannerman, List&lt;Agent&gt; excludedAgents)
`

`

`

### RearrangeFormationsAccordingToFilters
`

`

`csharp
public void RearrangeFormationsAccordingToFilters(Team team, { "formation", "troopCount", "troopFilter", "excludedAgents" })
`

`

`

### SetOrderWithFormationAndNumber
`

`

`csharp
public void SetOrderWithFormationAndNumber(OrderType orderType, Formation orderFormation, int number)
`

`

`

### SetOrderWithTwoPositions
`

`

`csharp
public virtual void SetOrderWithTwoPositions(OrderType orderType, WorldPosition position1, WorldPosition position2)
`

`

`

### SetOrderWithOrderableObject
`

`

`csharp
public virtual void SetOrderWithOrderableObject(IOrderable target)
`

`

`

### GetActiveMovementOrderOf
`

`

`csharp
public unsafe static OrderType GetActiveMovementOrderOf(Formation formation)
`

`

`

### GetActiveFacingOrderOf
`

`

`csharp
public static OrderType GetActiveFacingOrderOf(Formation formation)
`

`

`

### GetActiveRidingOrderOf
`

`

`csharp
public static OrderType GetActiveRidingOrderOf(Formation formation)
`

`

`

### GetActiveArrangementOrderOf
`

`

`csharp
public static OrderType GetActiveArrangementOrderOf(Formation formation)
`

`

`

### GetActiveFormOrderOf
`

`

`csharp
public static OrderType GetActiveFormOrderOf(Formation formation)
`

`

`

### GetActiveFiringOrderOf
`

`

`csharp
public static OrderType GetActiveFiringOrderOf(Formation formation)
`

`

`

### GetActiveAIControlOrderOf
`

`

`csharp
public static OrderType GetActiveAIControlOrderOf(Formation formation)
`

`

`

### SimulateNewOrderWithPositionAndDirection
`

`

`csharp
public void SimulateNewOrderWithPositionAndDirection(WorldPosition formationLineBegin, WorldPosition formationLineEnd, out List&lt;WorldPosition&gt; simulationAgentFrames, bool isFormationLayoutVertical)
`

`

`

### SimulateNewFacingOrder
`

`

`csharp
public void SimulateNewFacingOrder(Vec2 direction, out List&lt;WorldPosition&gt; simulationAgentFrames)
`

`

`

### SimulateNewCustomWidthOrder
`

`

`csharp
public void SimulateNewCustomWidthOrder(float width, out List&lt;WorldPosition&gt; simulationAgentFrames)
`

`

`

### SimulateNewOrderWithPositionAndDirection
`

`

`csharp
public static void SimulateNewOrderWithPositionAndDirection(IEnumerable&lt;Formation&gt; formations, Dictionary&lt;Formation, Formation&gt; simulationFormations, WorldPosition formationLineBegin, WorldPosition formationLineEnd, out List&lt;WorldPosition&gt; simulationAgentFrames, bool isFormationLayoutVertical = true)
`

`

`

### SimulateNewOrderWithPositionAndDirection
`

`

`csharp
public static void SimulateNewOrderWithPositionAndDirection(IEnumerable&lt;Formation&gt; formations, Dictionary&lt;Formation, Formation&gt; simulationFormations, WorldPosition formationLineBegin, WorldPosition formationLineEnd, out List&lt;ValueTuple&lt;Formation, int, float, WorldPosition, Vec2&gt;&gt; formationChanges, out bool isLineShort, bool isFormationLayoutVertical = true)
`

`

`

## 使用示例

`

`

`csharp
// 选中玩家所有队形，下令期间禁用手势
OrderController oc = Mission.Current.PlayerOrderController;
oc.BackupAndDisableGesturesEnabled();
foreach (Formation f in Mission.Current.PlayerTeam.Formations)
    if (oc.IsFormationSelectable(f))
        oc.SelectFormation(f);
// ...通过 formation.SetMovementOrder(...) 下令...
oc.RestoreGesturesEnabled();
`

`

`

## 参见

- [完整类目录](../catalog)