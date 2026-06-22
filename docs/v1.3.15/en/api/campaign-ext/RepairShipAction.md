<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RepairShipAction`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RepairShipAction

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

**Purpose:** .

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