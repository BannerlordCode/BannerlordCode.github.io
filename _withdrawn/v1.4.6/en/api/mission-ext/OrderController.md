---
title: "OrderController"
description: "OrderController: a public class in TaleWorlds.MountAndBlade; 58 exposed members (49 methods, 4 properties, 2 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/OrderController.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# OrderController

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class OrderController`
**File:** `TaleWorlds.MountAndBlade/OrderController.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

OrderController lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/OrderController.cs. It is a public class; the inheritance chain is OrderController. It exposes 58 public/protected members: 49 methods, 4 properties, 2 fields, 2 events, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: OrderController lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain OrderController. The surface is method-led (methods 49/58, properties 4/58), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/OrderController.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SiegeWeaponController` | `public SiegeWeaponController SiegeWeaponController` | property |
| `MBReadOnlyList` | `public MBReadOnlyList<Formation>SelectedFormations` | property |
| `FormationUpdateEnabledAfterSetOrder` | `public bool FormationUpdateEnabledAfterSetOrder` | property |
| `OnOrderIssued;` | `public event OnOrderIssuedDelegate OnOrderIssued;` | event |
| `OnSelectedFormationsChanged;` | `public event Action OnSelectedFormationsChanged;` | event |
| `Formation>simulationFormations` | `public Dictionary<Formation, Formation>simulationFormations` | property |
| `OrderController` | `public OrderController(Mission mission, Team team, Agent owner)` | constructor |
| `OnSelectedFormationsCollectionChanged` | `protected void OnSelectedFormationsCollectionChanged()` | method |
| `SelectFormation` | `protected virtual void SelectFormation(Formation formation, Agent selectorAgent)` | method |
| `SelectFormation` | `public void SelectFormation(Formation formation)` | method |
| `DeselectFormation` | `public void DeselectFormation(Formation formation)` | method |
| `IsFormationListening` | `public bool IsFormationListening(Formation formation)` | method |
| `IsFormationSelectable` | `public bool IsFormationSelectable(Formation formation)` | method |
| `BackupAndDisableGesturesEnabled` | `public bool BackupAndDisableGesturesEnabled()` | method |
| `RestoreGesturesEnabled` | `public void RestoreGesturesEnabled(bool oldValue)` | method |
| `IsFormationSelectable` | `protected bool IsFormationSelectable(Formation formation, Agent selectorAgent)` | method |
| `AreGesturesEnabled` | `protected bool AreGesturesEnabled()` | method |
| `SelectAllFormations` | `protected virtual void SelectAllFormations(Agent selectorAgent, bool uiFeedback)` | method |
| `SelectAllFormations` | `public void SelectAllFormations(bool uiFeedback = false)` | method |
| `ClearSelectedFormations` | `public void ClearSelectedFormations()` | method |
| `SetOrder` | `public unsafe virtual void SetOrder(OrderType orderType)` | method |
| `PlayFormationSelectedGesture` | `protected static void PlayFormationSelectedGesture(Formation formation, Agent agent)` | method |
| `BeforeSetOrder` | `protected void BeforeSetOrder(OrderType orderType)` | method |
| `SetOrderWithAgent` | `public virtual void SetOrderWithAgent(OrderType orderType, Agent agent)` | method |
| `SetOrderWithPosition` | `public virtual void SetOrderWithPosition(OrderType orderType, WorldPosition orderPosition)` | method |
| `SetOrderWithFormation` | `public virtual void SetOrderWithFormation(OrderType orderType, Formation orderFormation)` | method |
| `SetOrderWithFormationAndPercentage` | `public void SetOrderWithFormationAndPercentage(OrderType orderType, Formation orderFormation, float percentage)` | method |
| `TransferUnitWithPriorityFunction` | `public void TransferUnitWithPriorityFunction(Formation orderFormation, int number, bool hasShield, bool hasSpear, bool hasThrown, bool isHeavy, bool isRanged, bool isMounted, bool excludeBannerman, List<Agent>excludedAgents)` | method |
| `RearrangeFormationsAccordingToFilters` | `public void RearrangeFormationsAccordingToFilters(Team team, [TupleElementNames(new string[]` | method |
| `SetOrderWithFormationAndNumber` | `public void SetOrderWithFormationAndNumber(OrderType orderType, Formation orderFormation, int number)` | method |
| `SetOrderWithTwoPositions` | `public virtual void SetOrderWithTwoPositions(OrderType orderType, WorldPosition position1, WorldPosition position2)` | method |
| `SetOrderWithOrderableObject` | `public virtual void SetOrderWithOrderableObject(IOrderable target)` | method |
| `GetActiveMovementOrderOf` | `public unsafe static OrderType GetActiveMovementOrderOf(Formation formation)` | method |
| `GetActiveFacingOrderOf` | `public static OrderType GetActiveFacingOrderOf(Formation formation)` | method |
| `GetActiveRidingOrderOf` | `public static OrderType GetActiveRidingOrderOf(Formation formation)` | method |
| `GetActiveArrangementOrderOf` | `public static OrderType GetActiveArrangementOrderOf(Formation formation)` | method |
| `GetActiveFormOrderOf` | `public static OrderType GetActiveFormOrderOf(Formation formation)` | method |
| `GetActiveFiringOrderOf` | `public static OrderType GetActiveFiringOrderOf(Formation formation)` | method |
| `GetActiveAIControlOrderOf` | `public static OrderType GetActiveAIControlOrderOf(Formation formation)` | method |
| `SimulateNewOrderWithPositionAndDirection` | `public void SimulateNewOrderWithPositionAndDirection(WorldPosition formationLineBegin, WorldPosition formationLineEnd, out List<WorldPosition>simulationAgentFrames, bool isFormationLayoutVertical)` | method |
| `SimulateNewFacingOrder` | `public void SimulateNewFacingOrder(Vec2 direction, out List<WorldPosition>simulationAgentFrames)` | method |
| `SimulateNewCustomWidthOrder` | `public void SimulateNewCustomWidthOrder(float width, out List<WorldPosition>simulationAgentFrames)` | method |
| `SimulateNewOrderWithPositionAndDirection` | `public static void SimulateNewOrderWithPositionAndDirection(IEnumerable<Formation>formations, Dictionary<Formation, Formation>simulationFormations, WorldPosition formationLineBegin, WorldPosition formationLineEnd, out List<WorldPosition>simulationAgentFrames, bool isFormationLayoutVertical = true)` | method |
| `SimulateNewOrderWithPositionAndDirection` | `public static void SimulateNewOrderWithPositionAndDirection(IEnumerable<Formation>formations, Dictionary<Formation, Formation>simulationFormations, WorldPosition formationLineBegin, WorldPosition formationLineEnd, out List<ValueTuple<Formation, int, float, WorldPosition, Vec2>>formationChanges, out bool isLineShort, bool isFormationLayoutVertical = true)` | method |
| `SimulateDestinationFrames` | `public void SimulateDestinationFrames(out List<WorldPosition>simulationAgentFrames, float minDistance = 3f)` | method |
| `IEnumerable` | `public static IEnumerable<Formation>SortFormationsForHorizontalLayout(IEnumerable<Formation>formations)` | method |
| `GetOrderLookAtDirection` | `public static Vec2 GetOrderLookAtDirection(IEnumerable<Formation>formations, Vec2 target)` | method |
| `GetOrderFormCustomWidth` | `public static float GetOrderFormCustomWidth(IEnumerable<Formation>formations, Vec3 orderPosition)` | method |
| `TransferUnits` | `public void TransferUnits(Formation source, Formation target, int count)` | method |
| `IEnumerable` | `public IEnumerable<Formation>SplitFormation(Formation formation, int count = 2)` | method |
| `FireOnOrderIssued` | `protected void FireOnOrderIssued(OrderType orderType, MBReadOnlyList<Formation>appliedFormations, OrderController orderController, params object[]delegateParams)` | method |
| `TickDebug` | `public void TickDebug()` | method |
| `AddOrderOverride` | `public void AddOrderOverride(Func<Formation, MovementOrder, MovementOrder>orderOverride)` | method |
| `GetOverridenOrderType` | `public OrderType GetOverridenOrderType(Formation formation)` | method |
| `SetFormationUpdateEnabledAfterSetOrder` | `public void SetFormationUpdateEnabledAfterSetOrder(bool value)` | method |
| `TryCancelStopOrder` | `public static void TryCancelStopOrder(Formation formation)` | method |
| `FormationGapInLine` | `public const float FormationGapInLine` | field |
| `_formationUpdateEnabledAfterSetOrder` | `protected bool _formationUpdateEnabledAfterSetOrder` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
