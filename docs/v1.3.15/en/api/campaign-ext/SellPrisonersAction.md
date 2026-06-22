<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SellPrisonersAction`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SellPrisonersAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/SellPrisonersAction.cs`

SellPrisonersAction is a set of static methods that trigger "SellPrisoners" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### ApplyForAllPrisoners

```csharp
public static void ApplyForAllPrisoners(PartyBase sellerParty, PartyBase buyerParty)
```

**Purpose:** for all prisoners.

### ApplyForSelectedPrisoners

```csharp
public static void ApplyForSelectedPrisoners(PartyBase sellerParty, PartyBase buyerParty, TroopRoster prisoners)
```

**Purpose:** for selected prisoners.

### ApplyByPartyScreen

```csharp
public static void ApplyByPartyScreen(TroopRoster prisoners)
```

**Purpose:** party screen.

## Usage Example

```csharp
// Trigger this action from a mod
SellPrisonersAction.ApplyForAllPrisoners(sellerParty, buyerParty);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Campaign System catalog](../catalog-campaign)