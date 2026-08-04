---
title: "SettlementLoyaltyModel"
description: "The v1.4.5 campaign model that calculates town loyalty change, tax thresholds, and rebellion inputs."
---
# SettlementLoyaltyModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class SettlementLoyaltyModel : MBGameModel<SettlementLoyaltyModel>`  
**Base:** `MBGameModel<SettlementLoyaltyModel>`  
**Source:** `TaleWorlds.CampaignSystem.ComponentInterfaces/SettlementLoyaltyModel.cs`  
**Version:** This page describes v1.4.5.

## One-line responsibility

It explains how much a `Town` should gain or lose in daily loyalty and supplies the rule inputs used by high/low-loyalty economy and rebellion systems.

## Mental Model

This is a read-only rule port registered through [GameModels](../GameModels), not the storage behind `Town.Loyalty` and not an Action that grants loyalty. The default `DefaultSettlementLoyaltyModel` combines loyalty drift, food, security, governor culture, owner culture, policies, projects, issues, and notable relations into an `ExplainedNumber`. `Town.LoyaltyChange` and `LoyaltyChangeExplanation` read that result from the current Campaign model.

Other systems also consume its thresholds: prosperity and tax models use high/low loyalty boundaries, `RebellionsCampaignBehavior` uses rebellion thresholds, and militia rules use loyalty-related bonuses. The model supplies rule inputs; it does not run the daily tick, set `Town.Loyalty`, or choose a settlement-owner transition.

## When to use, and when not to

Use it to explain a live town's loyalty change, display the economic thresholds, or replace the loyalty rules during Campaign initialization. For observation, resolve a live `Settlement.Town` and ask the current Campaign model.

Do not write the result of `CalculateLoyaltyChange` into `Town.Loyalty`. Do not set `InRebelliousState` merely because the result is negative, and do not call every ownership Action yourself; the stock Behavior owns daily drift, rebellion, and follow-up events. A world ownership change belongs to the matching [ChangeOwnerOfSettlementAction](../../campaign-ext/ChangeOwnerOfSettlementAction) route after its owner-flow checks.

## Dependencies

The upstream objects are [Campaign](../Campaign), [Town](../Town), and [Settlement](../Settlement); Sandbox installs `DefaultSettlementLoyaltyModel` during startup. The model shares rule inputs with [SettlementSecurityModel](../SettlementSecurityModel), [ClanFinanceModel](../ClanFinanceModel), and settlement tax, prosperity, and militia models. Downstream consumers include `Town.LoyaltyChange`, `RebellionsCampaignBehavior`, daily settlement Behaviors, [CampaignEvents](../CampaignEvents), and saved Town state.

## Key properties and methods

Important v1.4.5 defaults include `MaximumLoyaltyInSettlement = 100`, `LoyaltyDriftMedium = 50`, `SettlementLoyaltyChangeDueToSecurityThreshold = 50`, `ThresholdForTaxBoost = 75`, `ThresholdForTaxCorruption = 50`, `ThresholdForHigherTaxCorruption = 25`, `RebellionStartLoyaltyThreshold = 15`, `RebelliousStateStartLoyaltyThreshold = 25`, `LoyaltyBoostAfterRebellionStartValue = 5`, and governor/owner same- or different-culture effects. These are rule constants, not setters for a `Town`.

### `CalculateLoyaltyChange`

```csharp
public ExplainedNumber CalculateLoyaltyChange(
    Town town,
    bool includeDescriptions = false)
```

The default implementation evaluates drift, extra starvation penalty, security, food, governor/owner culture, policies, projects, issues, and notable relations from the current town. `includeDescriptions: true` makes the result useful for diagnostic UI; the call is still a calculation.

## Economic adjustments

`CalculateGoldGainDueToHighLoyalty(Town, ref ExplainedNumber)` and `CalculateGoldCutDueToLowLoyalty(Town, ref ExplainedNumber)` add loyalty-threshold effects to an existing `ExplainedNumber`. Tax and economy rules call them; they do not independently modify Town or Clan gold.

## Real current-Campaign example: explain the current town

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

public static ExplainedNumber ExplainCurrentTownLoyalty()
{
    Campaign campaign = Campaign.Current;
    MobileParty party = MobileParty.MainParty;
    Settlement settlement = party?.CurrentSettlement;
    Town town = settlement?.Town;
    if (campaign == null || town == null)
        return default;

    SettlementLoyaltyModel model = campaign.Models.SettlementLoyaltyModel;
    return model.CalculateLoyaltyChange(town, includeDescriptions: true);
}
```

The example resolves a real town from the main party's current settlement, constructs no fake objects, and does not assign `Loyalty`. Reacquire the town and model after a load instead of retaining a one-time explanation across Campaign state changes.

## Direct writes and save risks

Writing a loyalty number around a threshold bypasses the daily explanation, rebellion Behavior, tax/prosperity coupling, and related events. Toggling `Town.InRebelliousState` alone can leave loyalty thresholds and rebel-owner flow inconsistent. A replacement must be non-null, initialized at the model-registration boundary, and preserve `ExplainedNumber` semantics; reading it before Campaign models are registered can fail during initialization.

## Version note

This page follows the v1.4.5 `SettlementLoyaltyModel` and `DefaultSettlementLoyaltyModel`. Thresholds and culture/policy effects can change between versions; the listed defaults are not a cross-version compatibility contract.

## Navigation

- **Parent:** [Campaign API](../) · [Models hub](../GameModels)
- **Siblings:** [SettlementSecurityModel](../SettlementSecurityModel) · [ClanFinanceModel](../ClanFinanceModel) · [VillageTradeModel](../VillageTradeModel)
- **Related entities:** [Settlement](../Settlement) · [Town](../Town) · [Village](../Village) · [Clan](../Clan)
- **Related flow:** [ChangeOwnerOfSettlementAction](../../campaign-ext/ChangeOwnerOfSettlementAction) · [CampaignEvents](../CampaignEvents) · [SaveManager](../../save-system/SaveManager)
