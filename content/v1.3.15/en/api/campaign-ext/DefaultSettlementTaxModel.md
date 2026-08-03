---
title: "DefaultSettlementTaxModel"
description: "Bannerlord's default settlement tax ratios, prosperity tax, policy cuts, and security/loyalty corruption rules."
---
# DefaultSettlementTaxModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DefaultSettlementTaxModel : SettlementTaxModel`  
**Base:** [`SettlementTaxModel`](../SettlementTaxModel)  
**Source:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementTaxModel.cs` (1.4.5 authority)

## One-line job

`DefaultSettlementTaxModel` combines prosperity, policies, governor perks, issues, buildings, loyalty, and security into default tax results, while also providing trade-commission and village-income ratios.

## Mental Model

Default daily town tax starts at `prosperity * 0.35`, then applies policy cuts, perks, culture, issues, buildings, and security/loyalty factors before clamping to zero or above. `DefaultClanFinanceModel` consumes the explained result for finance items; trading uses the ratio and commission methods through `SellItemsAction`. The Model only returns numbers; downstream code owns gold and accumulated-tax writes.

The ratio path is separate: town commission starts at `0.7`, village commission at `1.0`; Crown Duty raises the town ratio by `5%`, while Land Grants for Veterans reduces the village ratio by `5%`. Town security below `75` can reduce a trade commission by up to `10%`.

## Dependencies and consumers

| Type or flow | Relationship |
| --- | --- |
| [`SettlementTaxModel`](../SettlementTaxModel) / [`GameModels`](../GameModels) | Contract and registered access point. |
| [`Town`](../../campaign/Town) / [`Village`](../../campaign/Village) | Supply prosperity, faction policies, security, loyalty, market income, and building effects. |
| [`SettlementSecurityModel`](../SettlementSecurityModel) / [`SettlementLoyaltyModel`](../SettlementLoyaltyModel) | Supply high-value bonus and low-value corruption factors. |
| `DefaultClanFinanceModel` / `SellItemsAction` | Apply finance, commission, and accumulated-trade-tax results. |

## Default formulas

| Member or phase | 1.4.5 behavior |
| --- | --- |
| `GetTownTaxRatio` | Base `0.7`; multiply by `1.05` when Crown Duty is active. |
| `GetVillageTaxRatio` | Base `1.0`; reduce by `5%` when Land Grants for Veterans is active. |
| `GetTownCommissionChangeBasedOnSecurity` | Below security `75`, maps the deficit to a maximum `10%` commission reduction. |
| Daily raw tax | `prosperity * 0.35`, followed by Council of the Commons, Magistrates, Bailiffs, Tribunes of the People, Cantons, and other policy factors. |
| Loyalty/security factors | Call the registered Loyalty/Security Model tax helpers; very low loyalty adds a `Very Low Loyalty` factor. |
| Finalization | Merge issue, building, perk, and policy effects, then apply `Clamp(0, float.MaxValue)`. |

## Real access and replacement

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

Town town = Settlement.All
    .Where(settlement => settlement.IsTown)
    .Select(settlement => settlement.Town)
    .FirstOrDefault(candidate => candidate != null);

if (town != null)
{
    SettlementTaxModel model = Campaign.Current.Models.SettlementTaxModel;
    ExplainedNumber tax = model.CalculateTownTax(town, includeDescriptions: true);
    float commission = model.GetTownCommissionChangeBasedOnSecurity(town, 100f);
}
```

Register a custom implementation with `gameStarter.AddModel(new MySettlementTaxModel())` during startup. If vanilla behavior is needed, compose or call a retained default implementation; never add money to a Clan or Settlement from `CalculateTownTax`.

## Risks and version boundary

- Tax, commission, and trade total are different units. Treating `CalculateTownTax` as a commission causes a second deduction in the trade path.
- The default tax flow calls Loyalty/Security Model helpers. After replacing either adjacent Model, verify that thresholds and `ExplainedNumber` factors still describe the result.
- The trade path calculates commission first, then `SellItemsAction` changes settlement gold and accumulates trade tax; writing from the Model duplicates the mutation.
- `CalculateVillageTaxFromIncome` returns zero for zero income and converts income using the current village ratio; not every tax result has an explanation object.
- Constants and policy lists are 1.4.5 source facts; do not silently present another version's rules as compatible.

## Navigation

- [Parent: Campaign-Ext](..)
- [Sibling: Models family](../models/)
- [Contract: SettlementTaxModel](../SettlementTaxModel)
- [Related: SettlementSecurityModel](../SettlementSecurityModel) · [SettlementLoyaltyModel](../SettlementLoyaltyModel)
- [Downstream: ClanFinanceModel](../ClanFinanceModel) · [Town](../../campaign/Town)
