---
title: "SettlementSecurityModel"
description: "The v1.4.5 campaign model for town security drift, tax thresholds, and nearby-event effects."
---
# SettlementSecurityModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class SettlementSecurityModel : MBGameModel<SettlementSecurityModel>`  
**Base:** `MBGameModel<SettlementSecurityModel>`  
**Source:** `TaleWorlds.CampaignSystem.ComponentInterfaces/SettlementSecurityModel.cs`  
**Version:** This page describes v1.4.5.

## One-line responsibility

It explains a town's daily security change and supplies the security rules used by sieges, raided villages, hideouts, garrisons, taxes, and notable relations.

## Mental Model

`SettlementSecurityModel` is a rule port registered in [GameModels](../GameModels). The default `DefaultSettlementSecurityModel` reads a live `Town` and nearby state to produce an `ExplainedNumber`; it does not own `Town.Security` and does not write the result back. `Town.SecurityChange` and `SecurityChangeExplanation` are the direct observation paths.

Do not treat it as a “set security” service. `GetLootedNearbyPartySecurityEffect` and `GetNearbyBanditPartyDefeatedSecurityEffect` translate event scale into an effect value; raid, hideout, siege, and daily Behaviors decide when those effects enter world state.

## When to use, and when not to

Use it to explain a current town's security drift, display tax/relation thresholds, or replace security rules during Campaign model registration. A diagnostic UI should request `includeDescriptions: true` for an explained result.

Do not assign `CalculateSecurityChange` to `Town.Security`, and do not use a nearby-event effect to bypass the raid, hideout, siege, or owner flow. Security mutation belongs to the corresponding Campaign Behavior, event, or Action; model replacement belongs in the `AddModel`/`ReplaceModel` lifecycle.

## Dependencies

Sandbox registers the model with `SandBoxManager.AddModel(new DefaultSettlementSecurityModel())`. The default reads [Campaign](../Campaign), [Town](../Town), garrison parties, patrols, prosperity, policies, issues, and nearby settlement state. The v1.4.5 default keeps a governor-effects hook, but `CalculateGovernorEffectsOnSecurity` is empty, so it contributes no governor security term. It cooperates with [SettlementLoyaltyModel](../SettlementLoyaltyModel), [ClanFinanceModel](../ClanFinanceModel), and [Settlement](../Settlement) tax/loyalty rules. Downstream consumers include `Town.SecurityChange`, `TownSecurityCampaignBehavior`, [CampaignEvents](../CampaignEvents), and saved town state; `RebellionsCampaignBehavior` consumes loyalty and rebellion thresholds through `SettlementLoyaltyModel` rather than reading this model directly.

## Key properties and methods

Important v1.4.5 defaults include `MaximumSecurityInSettlement = 100`, `SecurityDriftMedium = 50`, a map-event effect radius of `50f`, a hideout-cleared radius of `100f`, a hideout-cleared gain of `6`, a tax-boost threshold of `75`, a corruption threshold of `50`, and positive/negative daily notable relation and power effects.

### `CalculateSecurityChange`

```csharp
public ExplainedNumber CalculateSecurityChange(
    Town town,
    bool includeDescriptions = false)
```

The default implementation combines patrols, projects, prosperity, siege, raided villages, nearby hideouts, drift, policies, garrison, perks, and issues. Although it calls the governor-effects hook, that hook is empty in v1.4.5 and adds no governor security contribution. It reads the current state and returns an explanation; it does not run the daily tick.

## Event effects and economic adjustments

`GetLootedNearbyPartySecurityEffect(Town, float)` and `GetNearbyBanditPartyDefeatedSecurityEffect(Town, float)` calculate local effects from party strength; the caller still owns event timing. `CalculateGoldGainDueToHighSecurity` and `CalculateGoldCutDueToLowSecurity` add threshold effects to an existing `ExplainedNumber`; they do not pay a clan directly.

## Real current-Campaign example: inspect current town security

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

public static ExplainedNumber ExplainCurrentTownSecurity()
{
    Campaign campaign = Campaign.Current;
    MobileParty party = MobileParty.MainParty;
    Town town = party?.CurrentSettlement?.Town;
    if (campaign == null || town == null)
        return default;

    SettlementSecurityModel model = campaign.Models.SettlementSecurityModel;
    return model.CalculateSecurityChange(town, includeDescriptions: true);
}
```

The example resolves a real town from the main party's current settlement, constructs no objects, and does not assign `Security`. If the party leaves, the town changes owner, or Campaign load is in progress, reacquire the town rather than reusing stale diagnostic input.

## Direct writes and save risks

Writing `Town.Security` bypasses the patrol, garrison, siege, raid, and hideout source chain, so the next daily tick or load can produce an unexplained jump. Publishing one security event manually cannot recreate all of the state the model reads. An empty replacement, a replacement at the wrong lifecycle stage, or a call to `Campaign.Current.Models` before model initialization can feed null or inconsistent results to tax, loyalty, and Behavior code.

## Version note

This page follows v1.4.5 `SettlementSecurityModel` and `DefaultSettlementSecurityModel`. Radii, thresholds, and event effects are implementation details; re-read the target version's default model when building a cross-version mod.

## Navigation

- **Parent:** [Campaign API](../) · [Models hub](../GameModels)
- **Siblings:** [SettlementLoyaltyModel](../SettlementLoyaltyModel) · [ClanFinanceModel](../ClanFinanceModel) · [VillageTradeModel](../VillageTradeModel)
- **Related entities:** [Settlement](../Settlement) · [Town](../Town) · [Village](../Village) · [MobileParty](../MobileParty)
- **Related flows:** [CampaignEvents](../CampaignEvents) · [SaveManager](../../save-system/SaveManager)
