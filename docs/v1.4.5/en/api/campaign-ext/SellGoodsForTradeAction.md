<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SellGoodsForTradeAction`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SellGoodsForTradeAction

## Mental Model

Treat `SellGoodsForTradeAction` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/SellGoodsForTradeAction.cs`

SellGoodsForTradeAction is a set of static methods that trigger "SellGoodsForTrade" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### ApplyByVillagerTrade

```csharp
public static void ApplyByVillagerTrade(Settlement settlement, MobileParty villagerParty)
```

**Purpose:** villager trade.

## Usage Example

```csharp
// Trigger this action from a mod
SellGoodsForTradeAction.ApplyByVillagerTrade(settlement, villagerParty);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Campaign System catalog](../catalog-campaign)