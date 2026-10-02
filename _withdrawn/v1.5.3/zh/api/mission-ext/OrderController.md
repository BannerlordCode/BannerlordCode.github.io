---
title: "OrderController"
description: "OrderController 的自动生成类参考。"
---
# OrderController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderController `
**Base:** System.Object
**Source:** TaleWorlds.MountAndBlade/OrderController.cs

## 概述

`OrderController` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/OrderController.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### OnSelectedFormationsCollectionChanged
`protected void OnSelectedFormationsCollectionChanged() `

### SelectFormation
`protected virtual void SelectFormation(Formation formation,Agent selectorAgent) `
`public void SelectFormation(Formation formation) `

### DeselectFormation
`public void DeselectFormation(Formation formation) `

### IsFormationListening
`public bool IsFormationListening(Formation formation) `

### IsFormationSelectable
`public bool IsFormationSelectable(Formation formation) `
`protected bool IsFormationSelectable(Formation formation,Agent selectorAgent) `

### BackupAndDisableGesturesEnabled
`public bool BackupAndDisableGesturesEnabled() `

### RestoreGesturesEnabled
`public void RestoreGesturesEnabled(bool oldValue) `

### AreGesturesEnabled
`protected bool AreGesturesEnabled() `

### SelectAllFormations
`protected virtual void SelectAllFormations(Agent selectorAgent,bool uiFeedback) `
`public void SelectAllFormations(bool uiFeedback = false) `

### ClearSelectedFormations
`public void ClearSelectedFormations() `

### SetOrder
`public unsafe virtual void SetOrder(OrderType orderType) `

### PlayFormationSelectedGesture
`protected static void PlayFormationSelectedGesture(Formation formation,Agent agent) `

### BeforeSetOrder
`protected void BeforeSetOrder(OrderType orderType) `

### SetOrderWithAgent
`public virtual void SetOrderWithAgent(OrderType orderType,Agent agent) `

### SetOrderWithPosition
`public virtual void SetOrderWithPosition(OrderType orderType,WorldPosition orderPosition) `

### SetOrderWithFormation
`public virtual void SetOrderWithFormation(OrderType orderType,Formation orderFormation) `

### SetOrderWithFormationAndPercentage
`public void SetOrderWithFormationAndPercentage(OrderType orderType,Formation orderFormation,float percentage) `

### TransferUnitWithPriorityFunction
`public void TransferUnitWithPriorityFunction(Formation orderFormation,int number,bool hasShield,bool hasSpear,bool hasThrown,bool isHeavy,bool isRanged,bool isMounted,bool excludeBannerman,List<Agent> excludedAgents) `

### RearrangeFormationsAccordingToFilters
`public void RearrangeFormationsAccordingToFilters(Team team,[TupleElementNames(new string[] { "formation","troopCount","troopFilter","excludedAgents" })] List<ValueTuple<Formation,int,TroopTraitsMask,List<Agent>>> MassTransferData) `

### SetOrderWithFormationAndNumber
`public void SetOrderWithFormationAndNumber(OrderType orderType,Formation orderFormation,int number) `

### SetOrderWithTwoPositions
`public virtual void SetOrderWithTwoPositions(OrderType orderType,WorldPosition position1,WorldPosition position2) `

### SetOrderWithOrderableObject
`public virtual void SetOrderWithOrderableObject(IOrderable target) `

### GetActiveMovementOrderOf
`public unsafe static OrderType GetActiveMovementOrderOf(Formation formation) `

### GetActiveFacingOrderOf
`public static OrderType GetActiveFacingOrderOf(Formation formation) `

### GetActiveRidingOrderOf
`public static OrderType GetActiveRidingOrderOf(Formation formation) `

### GetActiveArrangementOrderOf
`public static OrderType GetActiveArrangementOrderOf(Formation formation) `

### GetActiveFormOrderOf
`public static OrderType GetActiveFormOrderOf(Formation formation) `

### GetActiveFiringOrderOf
`public static OrderType GetActiveFiringOrderOf(Formation formation) `

### GetActiveAIControlOrderOf
`public static OrderType GetActiveAIControlOrderOf(Formation formation) `

### SimulateNewOrderWithPositionAndDirection
`public void SimulateNewOrderWithPositionAndDirection(WorldPosition formationLineBegin,WorldPosition formationLineEnd,out List<WorldPosition> simulationAgentFrames,bool isFormationLayoutVertical) `
`public static void SimulateNewOrderWithPositionAndDirection(IEnumerable<Formation> formations,Dictionary<Formation,Formation> simulationFormations,WorldPosition formationLineBegin,WorldPosition formationLineEnd,out List<WorldPosition> simulationAgentFrames,bool isFormationLayoutVertical = true) `
`public static void SimulateNewOrderWithPositionAndDirection(IEnumerable<Formation> formations,Dictionary<Formation,Formation> simulationFormations,WorldPosition formationLineBegin,WorldPosition formationLineEnd,out List<ValueTuple<Formation,int,float,WorldPosition,Vec2>> formationChanges,out bool isLineShort,bool isFormationLayoutVertical = true) `

### SimulateNewFacingOrder
`public void SimulateNewFacingOrder(Vec2 direction,out List<WorldPosition> simulationAgentFrames) `

### SimulateNewCustomWidthOrder
`public void SimulateNewCustomWidthOrder(float width,out List<WorldPosition> simulationAgentFrames) `

### SimulateDestinationFrames
`public void SimulateDestinationFrames(out List<WorldPosition> simulationAgentFrames,float minDistance = 3f) `

### SortFormationsForHorizontalLayout
`public static IEnumerable<Formation> SortFormationsForHorizontalLayout(IEnumerable<Formation> formations) `

### GetOrderLookAtDirection
`public static Vec2 GetOrderLookAtDirection(IEnumerable<Formation> formations,Vec2 target) `

### GetOrderFormCustomWidth
`public static float GetOrderFormCustomWidth(IEnumerable<Formation> formations,Vec3 orderPosition) `

### TransferUnits
`public void TransferUnits(Formation source,Formation target,int count) `

### SplitFormation
`public IEnumerable<Formation> SplitFormation(Formation formation,int count = 2) `

### FireOnOrderIssued
`protected void FireOnOrderIssued(OrderType orderType,MBReadOnlyList<Formation> appliedFormations,OrderController orderController,params object[] delegateParams) `

### TickDebug
`public void TickDebug() `

### AddOrderOverride
`public void AddOrderOverride(Func<Formation,MovementOrder,MovementOrder> orderOverride) `

### GetOverridenOrderType
`public OrderType GetOverridenOrderType(Formation formation) `

### SetFormationUpdateEnabledAfterSetOrder
`public void SetFormationUpdateEnabledAfterSetOrder(bool value) `

### TryCancelStopOrder
`public static void TryCancelStopOrder(Formation formation) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
