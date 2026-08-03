---
title: "SettlementTaxModel"
description: "The replaceable settlement contract for town taxes, village income tax, and trade commission adjustments."
---
# SettlementTaxModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class SettlementTaxModel : MBGameModel<SettlementTaxModel>`  
**Base:** `MBGameModel<SettlementTaxModel>`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementTaxModel.cs`

## One-line job

`SettlementTaxModel` calculates daily town tax, village market-income tax, town trade commission ratios, and the security-based commission adjustment. It does not add gold to a Clan or Town.

## Mental Model

The tax model has two consumers. `DefaultClanFinanceModel` reads `CalculateTownTax` for daily clan finance; the trading Action reads town/village ratios and applies the result to settlement gold and `TradeTaxAccumulated`. The Model answers “how much should be charged”; downstream Behaviors or Actions own the gold mutation.

It also connects to [`SettlementLoyaltyModel`](../SettlementLoyaltyModel) and [`SettlementSecurityModel`](../SettlementSecurityModel): town tax uses their thresholds and explained factors, while trade commission is adjusted from security. Replacing tax rules requires checking those adjacent contracts as one chain.

## Dependencies and consumers

| Type or flow | Relationship |
| --- | --- |
| [`GameModels`](../GameModels) / [`Campaign`](../../campaign/Campaign) | Provides the model registered during campaign startup. |
| [`Town`](../../campaign/Town) / [`Village`](../../campaign/Village) | Supply prosperity, security, loyalty, policies, buildings, and market income. |
| [`SettlementLoyaltyModel`](../SettlementLoyaltyModel) / [`SettlementSecurityModel`](../SettlementSecurityModel) | Supply tax-bonus and corruption thresholds and factors. |
| `DefaultClanFinanceModel` / `SellItemsAction` | Consume results and perform clan-finance or trade-commission writes. |

## Public contract

| Member | Actual responsibility and timing |
| --- | --- |
| `SettlementCommissionRateTown` / `SettlementCommissionRateVillage` | Base trade-commission ratios. |
| `SettlementCommissionDecreaseSecurityThreshold` | Security threshold below which trade commission is reduced. |
| `MaximumDecreaseBasedOnSecuritySecurity` | Maximum percentage reduction caused by security. |
| `GetTownTaxRatio(Town)` / `GetVillageTaxRatio(Village)` | Provide the effective ratio for trade or income Actions. |
| `GetTownCommissionChangeBasedOnSecurity(Town, float)` | Adjust an already calculated commission by town security. |
| `CalculateTownTax(Town, bool)` | Return an explained daily town-tax result. |
| `CalculateVillageTaxFromIncome(Village, int)` | Convert village market income into an integer tax amount. |

## Real access path

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;

Settlement townSettlement = Settlement.All.FirstOrDefault(settlement => settlement.IsTown);
Settlement villageSettlement = Settlement.All.FirstOrDefault(settlement => settlement.IsVillage);
SettlementTaxModel model = Campaign.Current.Models.SettlementTaxModel;

if (townSettlement?.Town != null)
{
    Town town = townSettlement.Town;
    float townRatio = model.GetTownTaxRatio(town);
    float dailyTax = model.CalculateTownTax(town, includeDescriptions: true).ResultNumber;
    float adjustedCommission = model
        .GetTownCommissionChangeBasedOnSecurity(town, 100f);
}

if (villageSettlement?.Village != null)
{
    int villageTax = model.CalculateVillageTaxFromIncome(
        villageSettlement.Village, marketIncome: 100);
}
```

Read the model after Campaign startup. Register replacements with `CampaignGameStarter.AddModel`; do not create a temporary instance while a trade transaction is executing.

## Risks and version boundary

- `CalculateTownTax` is a daily result, not a balance already deposited into clan finance; applying it twice creates gold.
- `GetTownCommissionChangeBasedOnSecurity` accepts an already calculated commission, not the trade total; mixing units causes double taxation or negative commission.
- Low-loyalty and low-security thresholds come from other Models. Changing only the tax ratio can make UI explanations disagree with actual tax.
- `SellItemsAction` writes settlement gold and accumulated trade tax; the Model must not call `ChangeGold`, `GiveGoldAction`, or mutate `TradeTaxAccumulated`.
- Policy-dependent ratios and constants are version-specific; use the target version's `DefaultSettlementTaxModel` as authority.

## Navigation

- [Parent: Campaign-Ext](..)
- [Sibling: Models family](../models/)
- [Default: DefaultSettlementTaxModel](../DefaultSettlementTaxModel)
- [Related: SettlementSecurityModel](../SettlementSecurityModel) · [SettlementLoyaltyModel](../SettlementLoyaltyModel)
- [Downstream: Town](../../campaign/Town) · [ClanFinanceModel](../ClanFinanceModel)

