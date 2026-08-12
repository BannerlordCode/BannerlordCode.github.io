---
title: "SettlementTaxModel"
description: "The replaceable settlement rule model that decides daily town tax, village market-income tax, and trade commission ratios; it only computes 'how much should be charged' and does not itself move gold."
---
# SettlementTaxModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class SettlementTaxModel : MBGameModel<SettlementTaxModel>`  
**Base:** `MBGameModel<SettlementTaxModel>`  
**Source:** `C:\WorkSpace\Bannerlord\bannerlord-1.4.5\Bannerlord.Source\bin\TaleWorlds.CampaignSystem\TaleWorlds.CampaignSystem.ComponentInterfaces\SettlementTaxModel.cs`  
**Default implementation:** `TaleWorlds.CampaignSystem.GameComponents.DefaultSettlementTaxModel`

## One-line responsibility

It answers "how much tax should this settlement charge its owner today, and what commission ratio should a transaction take", returning a value with an optional explanation; it does not add gold to a `Clan` or `Town`, nor does it write `TradeTaxAccumulated`. Everyone that reads it — clan finance, trade actions, village trade — gets a rule result of "how much should be charged", so a custom implementation affects all consumers, not just one UI number.

## Mental Model

This is a rule that runs at the settlement level before the daily economic settlement. Clan finance reads `CalculateTownTax(fief).ResultNumber` during the daily tick through `ClanFinanceModel` and books the result into the owner `Clan`'s treasury; when the player sells items in a town/village, `SellItemsAction` first asks the model for the town/village tax rate, then adjusts the commission by security, and finally writes the amount into `Town.TradeTaxAccumulated`; when a village caravan settles at home, `VillagerCampaignBehavior` converts market income into tax through `CalculateVillageTaxFromIncome(village, marketIncome)` and writes it into `Village.TradeTaxAccumulated`. The model is a pure rule layer of "how much should be charged"; the actual gold movement is done by downstream behaviors/actions.

Taxation is not based on prosperity alone: the default `DefaultSettlementTaxModel` also layers in kingdom policies (such as `CrownDuty`, `Magistrates`, `Bailiffs`, `Cantons`, `CouncilOfTheCommons`), governor perks, cultural traits (`KhuzaitDecreasedTaxFeat`), quest effects, and the security/loyalty adjustments from [`SettlementSecurityModel`](../SettlementSecurityModel) and [`SettlementLoyaltyModel`](../SettlementLoyaltyModel). When replacing the tax model, these thresholds and explanation items are still provided by other models; changing only the tax rate while ignoring them will make the explanation panel disagree with the actual tax.

### Lifecycle and registration

`Campaign.Current.Models` holds the current instance. The default `DefaultSettlementTaxModel` is registered by the game launcher during campaign initialization through `IGameStarter.AddModel`; a custom model must also complete registration before the campaign system runs any economic tick. On the title screen, early in module loading, or when no active campaign exists, `Campaign.Current` is `null`, so it must not be read unconditionally in static field initializers or menu constructors. The model is registered as `MBGameModel<SettlementTaxModel>`, so whatever is fetched via `Campaign.Current.Models.SettlementTaxModel` or `Campaign.Current.Models.GetModel<SettlementTaxModel>()` is the same registered instance.

## When to use / When not to use

**Use:** when you need to read out a town/village's "today's tax" or "the commission ratio for a transaction", or want to raise/lower tax rates and commissions overall while keeping all consumers consistent.

**Don't use:** don't write `ChangeGold`, `GiveGoldAction`, or modify `TradeTaxAccumulated`, `Settlement.Gold` inside a model callback — gold transfer must be done by behaviors/Roster API/actions, and putting it into a calculation callback turns a read-only query into a side effect that repeats every tick; also don't `new` up a temporary model instance during a transaction, or manually re-call `CalculateTownTax` outside the daily settlement and stack the results — that re-taxes and fabricates gold out of nowhere.

## Dependencies
### Upstream

| Type | Relation |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | Provides the active campaign and the `Models` registry; the model instance is obtained from `Campaign.Current.Models.SettlementTaxModel`. |
| [`Town`](../../campaign/Town) | Supplies all inputs of prosperity, security, loyalty, kingdom policies, buildings, governor, and culture; `CalculateTownTax`/`GetTownTaxRatio` read only it. |
| [`Village`](../../campaign/Village) | Supplies market income and the owning clan's policies; inputs to `CalculateVillageTaxFromIncome`/`GetVillageTaxRatio`. |
| [`SettlementLoyaltyModel`](../SettlementLoyaltyModel) | The default implementation applies loyalty-threshold-based bonuses or corruption cuts to tax. |
| [`SettlementSecurityModel`](../SettlementSecurityModel) | The default implementation applies security-threshold-based bonuses or corruption cuts to tax. |

### Downstream

| Type | Relation |
| --- | --- |
| [`ClanFinanceModel`](../ClanFinanceModel) | Clan daily finance accumulates town tax on `CalculateTownTax(fief).ResultNumber`. |
| [`SellItemsAction`](../SellItemsAction) | During trading, reads the town/village tax rate, adjusts the commission by security, then writes back to `Town.TradeTaxAccumulated`. |
| [`VillagerCampaignBehavior`](../VillagerCampaignBehavior) | When the village caravan settles, converts market income into tax through `CalculateVillageTaxFromIncome` and writes it back to `Village.TradeTaxAccumulated`. |
| [`DefaultSettlementTaxModel`](../DefaultSettlementTaxModel) | Default implementation; custom models should delegate to it and then append bounded factors. |

### Actions, events, and save boundaries

The model returns a "taxable amount"; the result of `CalculateTownTax` is not itself a save field and does not dispatch events; the actual gold movement happens in downstream actions/behaviors, and those writes are what enter the `Clan`/`Settlement` save. A custom model should stay deterministic under the same inputs to avoid tax results that disagree with a replayed campaign tick.

## Member contract

### Configuration constants

| Member | Purpose | Timing and side effects |
| --- | --- | --- |
| `SettlementCommissionRateTown` | Base ratio of the town trade commission, `0.7f` in the default implementation. | Read when displaying or calculating trade commission; read-only constant, does not change current tax. |
| `SettlementCommissionRateVillage` | Base ratio of the village trade commission, `1f` in the default implementation. | Same as above. |
| `SettlementCommissionDecreaseSecurityThreshold` | Security threshold below which the commission enters security adjustment, default `75`. | Comparison basis for `GetTownCommissionChangeBasedOnSecurity`; read-only. |
| `MaximumDecreaseBasedOnSecuritySecurity` | Maximum commission reduction (percentage) caused by security, default `10`. | Upper bound of the security adjustment; read-only. |

### Calculation methods

| Member | Purpose | Timing and side effects |
| --- | --- | --- |
| `GetTownTaxRatio(Town town)` | Returns the effective town tax rate = base commission ratio × (+5% when the kingdom has the `CrownDuty` policy). | Called when a trade action calculates the town commission; read-only. |
| `GetVillageTaxRatio(Village village)` | Returns the effective village tax rate; the default implementation applies −5% due to the `LandGrantsForVeteran` policy on the base ratio. | Called by trade/income actions; read-only. |
| `GetTownCommissionChangeBasedOnSecurity(Town town, float commission)` | When `Town.Security` is below the threshold, linearly reduces the already-calculated commission by the gap. | Called by trade actions after computing the base commission; read-only, does not write `TradeTaxAccumulated`. |
| `CalculateTownTax(Town town, bool includeDescriptions = false)` | Aggregates prosperity, policy, perks, culture, quests, security, loyalty, and buildings, returning an `ExplainedNumber`. | Called by the clan daily finance tick; read-only, the result must be written back to the `Clan` treasury downstream. |
| `CalculateVillageTaxFromIncome(Village village, int marketIncome)` | Converts integer village market income into an integer tax amount by the village tax rate. | Called when the village caravan settles; read-only. |

The observable factors of the default `CalculateTownTax` include: base tax ≈ prosperity × 0.35, then layer in the `CouncilOfTheCommons` policy −5%, `Magistrates`/`Bailiffs`/`TribunesOfThePeople` each −5% × base tax, `Cantons` −10% × base tax, the `KhuzaitDecreasedTaxFeat` cultural reduction, the governor `Logistician`/`PriceOfLoyalty`/`DesertBorn` and `Bow.QuickDraw` perks, and the bonuses or corruption from security/loyalty thresholds; finally `Clamp(0f, float.MaxValue)`.

## Real access path

Both snippets below only query the model already registered in the current campaign, in the same order as `ClanFinanceModel` and `SellItemsAction`:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

public ExplainedNumber ExplainTownTax(Town town)
{
    if (Campaign.Current == null || town == null)
    {
        return new ExplainedNumber(0f);
    }

    SettlementTaxModel model = Campaign.Current.Models.SettlementTaxModel;
    return model.CalculateTownTax(town, includeDescriptions: true);
}

public float CommissionForSale(Town town, float saleValue)
{
    SettlementTaxModel model = Campaign.Current.Models.GetModel<SettlementTaxModel>();
    float baseCommission = saleValue * model.GetTownTaxRatio(town);
    return model.GetTownCommissionChangeBasedOnSecurity(town, baseCommission);
}
```

The first snippet is equivalent to the daily-tax explanation that clan finance uses for display; the second replicates the order in `SellItemsAction` of "first calculate the commission by the town tax rate, then adjust by security". Ordinary UI should read the `Clan`'s already-settled treasury directly, not multiply the tax again itself.

## Safe pattern when replacing the model

If you only want to add a bounded modification, keep the original model as a delegate, and let all entry points still delegate in pairs:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;
using TaleWorlds.Localization;

public sealed class ModSettlementTaxModel : SettlementTaxModel
{
    private readonly SettlementTaxModel _vanilla;

    public ModSettlementTaxModel(SettlementTaxModel vanilla)
    {
        _vanilla = vanilla;
    }

    public override float SettlementCommissionRateTown => _vanilla.SettlementCommissionRateTown;
    public override float SettlementCommissionRateVillage => _vanilla.SettlementCommissionRateVillage;
    public override int SettlementCommissionDecreaseSecurityThreshold => _vanilla.SettlementCommissionDecreaseSecurityThreshold;
    public override int MaximumDecreaseBasedOnSecuritySecurity => _vanilla.MaximumDecreaseBasedOnSecuritySecurity;

    public override float GetTownTaxRatio(Town town) => _vanilla.GetTownTaxRatio(town);
    public override float GetVillageTaxRatio(Village village) => _vanilla.GetVillageTaxRatio(village);

    public override float GetTownCommissionChangeBasedOnSecurity(Town town, float commission)
        => _vanilla.GetTownCommissionChangeBasedOnSecurity(town, commission);

    public override ExplainedNumber CalculateTownTax(Town town, bool includeDescriptions = false)
    {
        ExplainedNumber result = _vanilla.CalculateTownTax(town, includeDescriptions);
        result.AddFactor(0.05f, new TextObject("Mod: trade boom"));
        return result;
    }

    public override int CalculateVillageTaxFromIncome(Village village, int marketIncome)
        => _vanilla.CalculateVillageTaxFromIncome(village, marketIncome);
}
```

At actual registration, save the vanilla delegate during the model-registration phase of `CampaignGameStarter`; do not look yourself up again via `Campaign.Current.Models.SettlementTaxModel` after the model has been replaced, or it will recurse. If the replacement needs to cover policies, perks, and culture rules, prefer delegating to the current version's default model, then add your own bounded factors.

## Risks and debugging order

1. **Campaign does not yet exist:** `Campaign.Current` is null on the title screen and during early module loading; defer fetching the model until the campaign-startup hook.
2. **Double taxation:** `CalculateTownTax` is the daily tax result, not a balance already written to the treasury; applying it repeatedly fabricates gold.
3. **Unit mix-up:** the input to `GetTownCommissionChangeBasedOnSecurity` is the already-calculated commission (not the transaction total); passing the total directly causes double taxation or a negative commission.
4. **Mutating the world inside a query:** gold transfer must go through `ChangeGold`/`GiveGoldAction` or the corresponding action, and must not be put into a calculation callback.
5. **Threshold desync:** security/loyalty bonuses and corruption come from other models; changing only the tax rate makes the explanation panel disagree with the actual tax.

## Version and navigation

The abstract contract is identical across v1.3.0, v1.3.15, and v1.4.5 (9 members, same signatures); the differences concentrate in the policy/perk/culture factors of the default `DefaultSettlementTaxModel` and the coefficients of `CalculateDailyTax`. A cross-version model replacement should delegate to the target version's default implementation and then append its own bounded factors, rather than copying the old version's formula into the new version.

- ↑ Parent: [Campaign-ext API](../)
- ↔ Siblings: [SettlementLoyaltyModel](../SettlementLoyaltyModel) · [SettlementSecurityModel](../SettlementSecurityModel) · [PartySpeedModel](../PartySpeedModel) · [PartyWageModel](../PartyWageModel) · [ClanFinanceModel](../ClanFinanceModel)
- Related: [Town](../../campaign/Town) · [Village](../../campaign/Village) · [Campaign](../../campaign/Campaign) · [DefaultSettlementTaxModel](../DefaultSettlementTaxModel) · [SellItemsAction](../SellItemsAction) · [VillagerCampaignBehavior](../VillagerCampaignBehavior)
