---
title: "VillageTradeModel"
description: "The v1.4.5 campaign rule model for choosing a village's trade-bound town and navigation distance limit."
---
# VillageTradeModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class VillageTradeModel : MBGameModel<VillageTradeModel>`  
**Base:** `MBGameModel<VillageTradeModel>`  
**Source:** `TaleWorlds.CampaignSystem.ComponentInterfaces/VillageTradeModel.cs`  
**Version:** This page describes v1.4.5.

## One-line responsibility

It supplies the navigation-aware distance limit for village trade binding and selects a suitable bound town from current Campaign state.

## Mental Model

`VillageTradeModel` is a rule port, not a public setter for `Village.TradeBound`. Sandbox registers `DefaultVillageTradeModel`; it uses the current Campaign's average town distance, villager-party speed, `MapDistanceModel`, and faction relations. The default first searches for a same-faction town within the limit, then for a non-hostile town from another faction. It returns `null` when no legal target exists.

The component that writes the result to `Village.TradeBound` is [VillageTradeBoundCampaignBehavior](../VillageTradeBoundCampaignBehavior), normally after new-game setup, load, ownership changes, and diplomatic changes. A mod may preview a candidate through the model, but should not treat the model as a direct village-ownership API.

## When to use, and when not to

Use it to explain why a real village is bound to a town, preview the distance limit for a `NavigationType`, or replace the trade-binding rules. Inputs should be registered [Village](../Village) and [Settlement](../Settlement) objects from the current Campaign.

Do not fabricate a Village or assign `TradeBound` to simulate binding. The bound town must also satisfy faction, navigation distance, and village/town lifecycle conditions; bypassing the Behavior makes trade, food, tax, and navigation systems observe different relationships.

## Dependencies

Upstream inputs are [Campaign](../Campaign), [GameModels](../GameModels), [Village](../Village), [Town](../Town), `MapDistanceModel`, and `MobileParty.NavigationType`. Sandbox registers the default with `SandBoxManager.AddModel(new DefaultVillageTradeModel())`. Downstream consumers include [VillageTradeBoundCampaignBehavior](../VillageTradeBoundCampaignBehavior), village production/trade, and town finance; the resulting relationship becomes part of saved village state.

## Key members

### `TradeBoundDistanceLimitAsDays`

```csharp
public float TradeBoundDistanceLimitAsDays(
    MobileParty.NavigationType navigationType)
```

The default converts the average distance between nearby towns into villager-party days and multiplies it by `3f`. It is an intermediate distance rule, not a map-distance result and not a town-selection or write API.

### `GetTradeBoundToAssignForVillage`

```csharp
public Settlement GetTradeBoundToAssignForVillage(Village village)
```

The default uses land navigation, searches for the nearest same-faction town, and then searches for a different-faction town that is not at war with the village faction and remains within the limit. Both searches use `MapDistanceModel`; no legal result returns `null`. Callers must handle that result.

## Real current-Campaign example: preview a bound-town candidate

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements;

public static Settlement PreviewTradeBoundTown()
{
    Campaign campaign = Campaign.Current;
    MobileParty party = MobileParty.MainParty;
    Village village = party?.CurrentSettlement?.Village;
    if (campaign == null || village == null || village.IsOwnerUnassigned)
        return null;

    VillageTradeModel model = campaign.Models.VillageTradeModel;
    return model.GetTradeBoundToAssignForVillage(village);
}
```

The example resolves a Village from the main party's real current Settlement and returns a candidate without assigning `TradeBound`. To observe the stock result, read `village.TradeBound`; to recalculate it, let [VillageTradeBoundCampaignBehavior](../VillageTradeBoundCampaignBehavior) run from its event/lifecycle boundary instead of writing from a UI refresh.

## Lifecycle, replacement, and save risks

The model depends on `Campaign.Current`, average speed, and the map-distance model, so calling it before model registration or during the middle of load can observe uninitialized dependencies. Passing a removed, ownerless, or otherwise invalid Village makes the default distance and faction filters meaningless.

Directly assigning `Village.TradeBound` bypasses recomputation after diplomacy and ownership changes and bypasses the `null` result contract. That can leave village trade, production, tax, and saved relationships inconsistent. A replacement must preserve `null` as “no legal bound town” and must be installed during the `AddModel`/`ReplaceModel` lifecycle.

## Version note

This page follows v1.4.5 `VillageTradeModel`, `DefaultVillageTradeModel`, and `VillageTradeBoundCampaignBehavior`. Navigation distance, speed, and faction filters may change between versions.

## Navigation

- **Parent:** [Campaign API](../) · [Models hub](../GameModels)
- **Siblings:** [ClanFinanceModel](../ClanFinanceModel) · [SettlementLoyaltyModel](../SettlementLoyaltyModel) · [SettlementSecurityModel](../SettlementSecurityModel)
- **Related entities:** [Village](../Village) · [Town](../Town) · [Settlement](../Settlement) · [MobileParty](../MobileParty)
- **Related flow:** [VillageTradeBoundCampaignBehavior](../VillageTradeBoundCampaignBehavior) · [Campaign](../Campaign) · [SaveManager](../../save-system/SaveManager)
