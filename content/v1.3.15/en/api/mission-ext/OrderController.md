---
title: "OrderController"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OrderController`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OrderController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** public class OrderController
**Base:** none
**File:** `TaleWorlds.MountAndBlade/OrderController.cs`

## Overview

`OrderController` manages formation selection and order issuance during a mission. It tracks `SelectedFormations` and gates whether formations are listening/selectable (`IsFormationListening`, `IsFormationSelectable`). Used by the command UI and by mods that issue orders programmatically. It can also back up and disable gesture-based ordering temporarily.

## Mental Model

Treat `OrderController` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

## Key Properties

| Name | Signature |
|------|-----------|
| `SelectedFormations` | `public MBReadOnlyList<Formation> SelectedFormations { get { return this._selectedFormations; }` |
| `FormationUpdateEnabledAfterSetOrder` | `public bool FormationUpdateEnabledAfterSetOrder { get { return this._formationUpdateEnabledAfterSetOrder; }` |

## Key Methods

### SelectFormation
```csharp
public void SelectFormation(Formation formation)
```

### DeselectFormation
```csharp
public void DeselectFormation(Formation formation)
```

### IsFormationListening
```csharp
public bool IsFormationListening(Formation formation)
```

### IsFormationSelectable
```csharp
public bool IsFormationSelectable(Formation formation)
```

### BackupAndDisableGesturesEnabled
```csharp
public bool BackupAndDisableGesturesEnabled()
```

### RestoreGesturesEnabled
```csharp
public void RestoreGesturesEnabled(bool oldValue)
```

### SelectAllFormations
```csharp
public void SelectAllFormations(bool uiFeedback = false)
```

### ClearSelectedFormations
```csharp
public void ClearSelectedFormations()
```

### SetOrder
```csharp
public unsafe virtual void SetOrder(OrderType orderType)
```

### SetOrderWithAgent
```csharp
public virtual void SetOrderWithAgent(OrderType orderType, Agent agent)
```

### SetOrderWithPosition
```csharp
public virtual void SetOrderWithPosition(OrderType orderType, WorldPosition orderPosition)
```

### SetOrderWithFormation
```csharp
public virtual void SetOrderWithFormation(OrderType orderType, Formation orderFormation)
```

### SetOrderWithFormationAndPercentage
```csharp
public void SetOrderWithFormationAndPercentage(OrderType orderType, Formation orderFormation, float percentage)
```

### TransferUnitWithPriorityFunction
```csharp
public void TransferUnitWithPriorityFunction(Formation orderFormation, int number, bool hasShield, bool hasSpear, bool hasThrown, bool isHeavy, bool isRanged, bool isMounted, bool excludeBannerman, List<Agent> excludedAgents)
```

### RearrangeFormationsAccordingToFilters
```csharp
public void RearrangeFormationsAccordingToFilters(Team team, { "formation", "troopCount", "troopFilter", "excludedAgents" })
```

### SetOrderWithFormationAndNumber
```csharp
public void SetOrderWithFormationAndNumber(OrderType orderType, Formation orderFormation, int number)
```

### SetOrderWithTwoPositions
```csharp
public virtual void SetOrderWithTwoPositions(OrderType orderType, WorldPosition position1, WorldPosition position2)
```

### SetOrderWithOrderableObject
```csharp
public virtual void SetOrderWithOrderableObject(IOrderable target)
```

### GetActiveMovementOrderOf
```csharp
public unsafe static OrderType GetActiveMovementOrderOf(Formation formation)
```

### GetActiveFacingOrderOf
```csharp
public static OrderType GetActiveFacingOrderOf(Formation formation)
```

### GetActiveRidingOrderOf
```csharp
public static OrderType GetActiveRidingOrderOf(Formation formation)
```

### GetActiveArrangementOrderOf
```csharp
public static OrderType GetActiveArrangementOrderOf(Formation formation)
```

### GetActiveFormOrderOf
```csharp
public static OrderType GetActiveFormOrderOf(Formation formation)
```

### GetActiveFiringOrderOf
```csharp
public static OrderType GetActiveFiringOrderOf(Formation formation)
```

### GetActiveAIControlOrderOf
```csharp
public static OrderType GetActiveAIControlOrderOf(Formation formation)
```

### SimulateNewOrderWithPositionAndDirection
```csharp
public void SimulateNewOrderWithPositionAndDirection(WorldPosition formationLineBegin, WorldPosition formationLineEnd, out List<WorldPosition> simulationAgentFrames, bool isFormationLayoutVertical)
```

### SimulateNewFacingOrder
```csharp
public void SimulateNewFacingOrder(Vec2 direction, out List<WorldPosition> simulationAgentFrames)
```

### SimulateNewCustomWidthOrder
```csharp
public void SimulateNewCustomWidthOrder(float width, out List<WorldPosition> simulationAgentFrames)
```

### SimulateNewOrderWithPositionAndDirection
```csharp
public static void SimulateNewOrderWithPositionAndDirection(IEnumerable<Formation> formations, Dictionary<Formation, Formation> simulationFormations, WorldPosition formationLineBegin, WorldPosition formationLineEnd, out List<WorldPosition> simulationAgentFrames, bool isFormationLayoutVertical = true)
```

### SimulateNewOrderWithPositionAndDirection
```csharp
public static void SimulateNewOrderWithPositionAndDirection(IEnumerable<Formation> formations, Dictionary<Formation, Formation> simulationFormations, WorldPosition formationLineBegin, WorldPosition formationLineEnd, out List<ValueTuple<Formation, int, float, WorldPosition, Vec2>> formationChanges, out bool isLineShort, bool isFormationLayoutVertical = true)
```

## Usage Example

```csharp
// Select all of the player's formations, then disable gesture ordering while issuing orders
OrderController oc = Mission.Current.PlayerOrderController;
oc.BackupAndDisableGesturesEnabled();
foreach (Formation f in Mission.Current.PlayerTeam.Formations)
    if (oc.IsFormationSelectable(f))
        oc.SelectFormation(f);
// ...issue orders via formation.SetMovementOrder(...)...
oc.RestoreGesturesEnabled();
```

## See Also

- [Complete Class Catalog](../catalog)