<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SellItemsAction`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SellItemsAction

## Mental Model

Treat `SellItemsAction` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/SellItemsAction.cs`

SellItemsAction is a set of static methods that trigger "SellItems" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### Apply

```csharp
public static void Apply(PartyBase receiverParty, PartyBase payerParty, ItemRosterElement subject, int number, Settlement currentSettlement = null)
```

**Purpose:** execute this entry point.

## Usage Example

```csharp
// Trigger this action from a mod
SellItemsAction.Apply(receiverParty, payerParty, subject, 100, null);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Campaign System catalog](../catalog-campaign)