<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RepairShipAction`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# RepairShipAction

## Mental Model

Treat `RepairShipAction` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/RepairShipAction.cs`

RepairShipAction is a set of static methods that trigger "RepairShip" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### Apply

```csharp
public static void Apply(Ship ship, Settlement repairPort)
```

**Purpose:** execute this entry point.

### ApplyForFree

```csharp
public static void ApplyForFree(Ship ship)
```

**Purpose:** for free.

### ApplyForBanditShip

```csharp
public static void ApplyForBanditShip(Ship ship)
```

**Purpose:** for bandit ship.

## Usage Example

```csharp
// Trigger this action from a mod
RepairShipAction.Apply(ship, repairPort);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Campaign System catalog](../catalog-campaign)