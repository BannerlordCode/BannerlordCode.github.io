---
title: "OrderController"
description: "Auto-generated class reference for OrderController."
---
# OrderController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderController `
**Base:** System.Object
**Source:** TaleWorlds.MountAndBlade/OrderController.cs

## Overview

Auto-generated stub for `OrderController`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### OnSelectedFormationsCollectionChanged
`protected void OnSelectedFormationsCollectionChanged()`

### SelectFormation
`protected virtual void SelectFormation(Formation formation,Agent selectorAgent)`

### DeselectFormation
`public void DeselectFormation(Formation formation)`

### IsFormationListening
`public bool IsFormationListening(Formation formation)`

### IsFormationSelectable
`public bool IsFormationSelectable(Formation formation)`

### BackupAndDisableGesturesEnabled
`public bool BackupAndDisableGesturesEnabled()`

### RestoreGesturesEnabled
`public void RestoreGesturesEnabled(bool oldValue)`

### AreGesturesEnabled
`protected bool AreGesturesEnabled()`

### SelectAllFormations
`protected virtual void SelectAllFormations(Agent selectorAgent,bool uiFeedback)`

### ClearSelectedFormations
`public void ClearSelectedFormations()`

### SetOrder
`public unsafe virtual void SetOrder(OrderType orderType)`

### PlayFormationSelectedGesture
`protected static void PlayFormationSelectedGesture(Formation formation,Agent agent)`

### BeforeSetOrder
`protected void BeforeSetOrder(OrderType orderType)`

### SetOrderWithAgent
`public virtual void SetOrderWithAgent(OrderType orderType,Agent agent)`

### SetOrderWithPosition
`public virtual void SetOrderWithPosition(OrderType orderType,WorldPosition orderPosition)`

### SetOrderWithFormation
`public virtual void SetOrderWithFormation(OrderType orderType,Formation orderFormation)`

### SetOrderWithFormationAndPercentage
`public void SetOrderWithFormationAndPercentage(OrderType orderType,Formation orderFormation,float percentage)`

### TransferUnitWithPriorityFunction
`public void TransferUnitWithPriorityFunction(Formation orderFormation,int number,bool hasShield,bool hasSpear,bool hasThrown,bool isHeavy,bool isRanged,bool isMounted,bool excludeBannerman,List<Agent> excludedAgents)`

### RearrangeFormationsAccordingToFilters
`public void RearrangeFormationsAccordingToFilters(Team team,[TupleElementNames(new string[] { "formation","troopCount","troopFilter","excludedAgents" })] List<ValueTuple<Formation,int,TroopTraitsMask,List<Agent>>> MassTransferData)`

### SetOrderWithFormationAndNumber
`public void SetOrderWithFormationAndNumber(OrderType orderType,Formation orderFormation,int number)`

### SetOrderWithTwoPositions
`public virtual void SetOrderWithTwoPositions(OrderType orderType,WorldPosition position1,WorldPosition position2)`

### SetOrderWithOrderableObject
`public virtual void SetOrderWithOrderableObject(IOrderable target)`

### GetActiveMovementOrderOf
`public unsafe static OrderType GetActiveMovementOrderOf(Formation formation)`

### GetActiveFacingOrderOf
`public static OrderType GetActiveFacingOrderOf(Formation formation)`

### GetActiveRidingOrderOf
`public static OrderType GetActiveRidingOrderOf(Formation formation)`

### GetActiveArrangementOrderOf
`public static OrderType GetActiveArrangementOrderOf(Formation formation)`

### GetActiveFormOrderOf
`public static OrderType GetActiveFormOrderOf(Formation formation)`

### GetActiveFiringOrderOf
`public static OrderType GetActiveFiringOrderOf(Formation formation)`

### GetActiveAIControlOrderOf
`public static OrderType GetActiveAIControlOrderOf(Formation formation)`

### SimulateNewOrderWithPositionAndDirection
`public void SimulateNewOrderWithPositionAndDirection(WorldPosition formationLineBegin,WorldPosition formationLineEnd,out List<WorldPosition> simulationAgentFrames,bool isFormationLayoutVertical)`

### SimulateNewFacingOrder
`public void SimulateNewFacingOrder(Vec2 direction,out List<WorldPosition> simulationAgentFrames)`

### SimulateNewCustomWidthOrder
`public void SimulateNewCustomWidthOrder(float width,out List<WorldPosition> simulationAgentFrames)`

### SimulateDestinationFrames
`public void SimulateDestinationFrames(out List<WorldPosition> simulationAgentFrames,float minDistance = 3f)`

### SortFormationsForHorizontalLayout
`public static IEnumerable<Formation> SortFormationsForHorizontalLayout(IEnumerable<Formation> formations)`

### GetOrderLookAtDirection
`public static Vec2 GetOrderLookAtDirection(IEnumerable<Formation> formations,Vec2 target)`

### GetOrderFormCustomWidth
`public static float GetOrderFormCustomWidth(IEnumerable<Formation> formations,Vec3 orderPosition)`

### TransferUnits
`public void TransferUnits(Formation source,Formation target,int count)`

### SplitFormation
`public IEnumerable<Formation> SplitFormation(Formation formation,int count = 2)`

### FireOnOrderIssued
`protected void FireOnOrderIssued(OrderType orderType,MBReadOnlyList<Formation> appliedFormations,OrderController orderController,params object[] delegateParams)`

### TickDebug
`public void TickDebug()`

### AddOrderOverride
`public void AddOrderOverride(Func<Formation,MovementOrder,MovementOrder> orderOverride)`

### GetOverridenOrderType
`public OrderType GetOverridenOrderType(Formation formation)`

### SetFormationUpdateEnabledAfterSetOrder
`public void SetFormationUpdateEnabledAfterSetOrder(bool value)`

### TryCancelStopOrder
`public static void TryCancelStopOrder(Formation formation)`

## See Also

- [Section index](../)
