---
title: "SellGoodsForTradeAction"
description: "Auto-generated campaign action reference for SellGoodsForTradeAction."
---
# SellGoodsForTradeAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/SellGoodsForTradeAction.cs`

SellGoodsForTradeAction is a set of static methods that trigger "SellGoodsForTrade" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### ApplyByVillagerTrade

```csharp
public static void ApplyByVillagerTrade(Settlement settlement, MobileParty villagerParty)
```

**Purpose:** Applies the effect of by villager trade to the this instance.

## Usage Example

```csharp
// Trigger this action from a mod
SellGoodsForTradeAction.ApplyByVillagerTrade(settlement, villagerParty);
```

## See Also

- [Area Index](../)
- [Campaign System](../../campaign/)