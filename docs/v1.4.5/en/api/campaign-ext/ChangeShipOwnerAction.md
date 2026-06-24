<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ChangeShipOwnerAction`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ChangeShipOwnerAction

## Mental Model

Treat `ChangeShipOwnerAction` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/ChangeShipOwnerAction.cs`

ChangeShipOwnerAction is a set of static methods that trigger "ChangeShipOwner" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### ApplyByTransferring

```csharp
public static void ApplyByTransferring(PartyBase newOwner, Ship ship)
```

**Purpose:** transferring.

### ApplyByTrade

```csharp
public static void ApplyByTrade(PartyBase newOwner, Ship ship)
```

**Purpose:** trade.

### ApplyByLooting

```csharp
public static void ApplyByLooting(PartyBase newOwner, Ship ship)
```

**Purpose:** looting.

### ApplyByProduction

```csharp
public static void ApplyByProduction(PartyBase newOwner, Ship ship)
```

**Purpose:** production.

### ApplyByMobilePartyCreation

```csharp
public static void ApplyByMobilePartyCreation(PartyBase newOwner, Ship ship)
```

**Purpose:** mobile party creation.

## Usage Example

```csharp
// Trigger this action from a mod
ChangeShipOwnerAction.ApplyByTransferring(newOwner, ship);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Campaign System catalog](../catalog-campaign)