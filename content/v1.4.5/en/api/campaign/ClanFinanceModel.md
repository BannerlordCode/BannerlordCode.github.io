---
title: "ClanFinanceModel"
description: "The v1.4.5 campaign rule model for clan income, expenses, settlement assets, and withdrawal boundaries."
---
# ClanFinanceModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class ClanFinanceModel : MBGameModel<ClanFinanceModel>`  
**Base:** `MBGameModel<ClanFinanceModel>`  
**Source:** `TaleWorlds.CampaignSystem.ComponentInterfaces/ClanFinanceModel.cs`  
**Version:** This page describes v1.4.5.

## One-line responsibility

It turns clan, party, garrison, village, town, caravan, workshop, and diplomatic flows into explained financial results, with an explicit boundary for applying withdrawals.

## Mental Model

`ClanFinanceModel` is an abstract rule port registered in [GameModels](../GameModels) during campaign startup. Sandbox supplies `DefaultClanFinanceModel` through `SandBoxManager`; running code obtains the active implementation from `Campaign.Current.Models.ClanFinanceModel`. The model does not own `Clan.Gold`, `Town.TradeTaxAccumulated`, or `Workshop.Capital`. It reads those live objects and returns an `ExplainedNumber`.

The critical boundary is `applyWithdrawals`. With `false`, a call is normally a preview or explanation. With `true`, the default implementation may consume accumulated taxes, reduce party trade gold, pay wages, repay debt, withdraw caravan/workshop income, change morale, or dispatch a player asset-income event. The daily finance Behavior owns the normal settlement of these effects. A mod must not call a withdrawal entry again merely to display a number.

## When to use, and when not to

Use it to explain why a current clan gains or loses gold, preview town tariff income, feed a custom finance panel with `ExplainedNumber`, or replace the rule port through the [GameModels](../GameModels) lifecycle.

Do not use it to write gold, taxes, workshop profit, party gold, or village trade tax directly. Do not treat `CalculateClanGoldChange` as a safe “settle now” button: [Campaign](../Campaign) timing and the finance Behavior decide when withdrawal is legal. World mutation belongs to the relevant [Action](../../campaign-ext/) or existing Behavior owner.

## Dependencies

The upstream registration chain is [Campaign](../Campaign), [Clan](../Clan), and `Campaign.Models`; Sandbox installs the default with `SandBoxManager.AddModel(new DefaultClanFinanceModel())`. Inputs include [Town](../Town), [Village](../Village), [Workshop](../Workshop), `MobileParty`, caravans, tributes, and the kingdom budget. Downstream consumers include the daily clan-finance Behavior, player asset-income notifications through [CampaignEvents](../CampaignEvents), and live world objects persisted by [SaveManager](../../save-system/SaveManager).

An `ExplainedNumber` may contain explanation entries, but those entries do not prove that a transaction has been committed. Reacquire the live clan and settlements after save/load instead of persisting a one-time calculation object.

## Key members and timing

### `PartyGoldLowerThreshold`

The default implementation returns `5000`. Party and garrison finance logic uses it as a lower-bound rule when deciding whether party trade gold needs support. It is not a party balance and it is not a top-up API.

```csharp
Campaign campaign = Campaign.Current;
if (campaign != null)
{
    int threshold = campaign.Models.ClanFinanceModel.PartyGoldLowerThreshold;
}
```

### Clan totals

```csharp
public ExplainedNumber CalculateClanGoldChange(
    Clan clan,
    bool includeDescriptions = false,
    bool applyWithdrawals = false,
    bool includeDetails = false)

public ExplainedNumber CalculateClanIncome(
    Clan clan,
    bool includeDescriptions = false,
    bool applyWithdrawals = false,
    bool includeDetails = false)

public ExplainedNumber CalculateClanExpenses(
    Clan clan,
    bool includeDescriptions = false,
    bool applyWithdrawals = false,
    bool includeDetails = false)
```

Each entry accepts a real `Clan`. The default implementation combines party and garrison wages, town taxes, village trade tax, workshops and caravans, tributes, mercenary flows, debt, and other conditional items. `includeDetails` controls how explanation entries are expanded; it does not turn a non-withdrawal call into a withdrawal.

## Settlement income

`CalculateTownIncomeFromTariffs(Clan, Town, bool)` reads `Town.TradeTaxAccumulated` plus perk, building, and project rules. The default implementation subtracts the accumulated tax only when `applyWithdrawals: true`, and may dispatch the player asset-income event. `CalculateTownIncomeFromProjects(Town)` calculates project/building income. `CalculateVillageIncome(Clan, Village, bool)` distinguishes normal villages from looted or raided villages and can consume accumulated trade tax in withdrawal mode.

## Assets and smoothing

`CalculateOwnerIncomeFromCaravan(MobileParty)` and `CalculateOwnerIncomeFromWorkshop(Workshop)` return smoothed owner income; the higher-level finance calculation performs the actual consumption on its withdrawal path. The default `RevenueSmoothenFraction()` is `5f`, so a workshop's instantaneous `ProfitMade` is not simply the amount paid to the owner. `CalculateNotableDailyGoldChange(Hero, bool)` also includes hero asset income in daily change.

## Real current-Campaign example: preview the player clan

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.Core;

public static ExplainedNumber PreviewPlayerClanFinance()
{
    Campaign campaign = Campaign.Current;
    Clan clan = Clan.PlayerClan;
    if (campaign == null || clan == null || clan.IsEliminated)
        return default;

    ClanFinanceModel model = campaign.Models.ClanFinanceModel;
    return model.CalculateClanGoldChange(
        clan,
        includeDescriptions: true,
        applyWithdrawals: false,
        includeDetails: true);
}
```

The clan comes from the registered current Campaign; no fake clan is constructed and no `Gold` field is written. A town preview should similarly resolve a live `Settlement.Town` and keep `applyWithdrawals: false`. Let the stock daily finance flow perform real withdrawal, or a mod can debit taxes and assets twice.

## Model replacement and save risks

Replace a model only during the Campaign starter `AddModel`/`ReplaceModel` lifecycle and preserve the contract expected by every caller. Returning an empty implementation, reading `Campaign.Current.Models` before Campaign initialization, or retaining an old implementation across load boundaries can feed incomplete results to town, village, and party finance.

The most dangerous mistake is placing `applyWithdrawals: true` in an hourly UI refresh, an event listener, or a repeated daily tick. The default path can already reduce tax accumulators, party gold, workshop capital, or debt; duplicate withdrawal causes missing gold, wrong morale, and save differences that cannot be replayed. The model owns rules, not the transaction APIs or save system.

## Version note

This page follows the v1.4.5 `ClanFinanceModel` declaration and `DefaultClanFinanceModel` behavior. Other versions may add income sources or change withdrawal side effects; recheck the target version's declaration, default implementation, and owning Behavior.

## Navigation

- **Parent:** [Campaign API](../) · [Models hub](../GameModels)
- **Siblings:** [SettlementLoyaltyModel](../SettlementLoyaltyModel) · [SettlementSecurityModel](../SettlementSecurityModel) · [VillageTradeModel](../VillageTradeModel)
- **Related entities:** [Clan](../Clan) · [Town](../Town) · [Village](../Village) · [Workshop](../Workshop) · [Settlement](../Settlement)
- **Related flows:** [Campaign](../Campaign) · [CampaignEvents](../CampaignEvents) · [SaveManager](../../save-system/SaveManager)
