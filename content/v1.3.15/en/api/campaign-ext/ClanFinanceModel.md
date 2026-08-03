---
title: "ClanFinanceModel"
description: "The replaceable clan-finance policy for income, expenses, and daily gold change, without transferring gold or owning the settlement."
---

# ClanFinanceModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class ClanFinanceModel : MBGameModel<ClanFinanceModel>`
**Base:** `MBGameModel<ClanFinanceModel>`
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/ClanFinanceModel.cs`
**Default implementation:** `TaleWorlds.CampaignSystem.GameComponents/DefaultClanFinanceModel.cs`

## One-line responsibility

`ClanFinanceModel` aggregates settlement, party, workshop, caravan, tribute, trade, and expense rules into explainable clan income and expense results. It does not transfer gold or own the daily settlement schedule.

## Mental model

This is the boundary between calculating clan finance and crediting the result. `SandBoxManager` registers the default implementation, and `Campaign.Current.Models.ClanFinanceModel` exposes the runtime policy. `CalculateClanIncome`, `CalculateClanExpenses`, and `CalculateClanGoldChange` walk current assets, parties, and diplomacy state and return `ExplainedNumber`; UI may preview them, while the daily behavior passes the net result to [GiveGoldAction](../GiveGoldAction).

`applyWithdrawals` is not merely a display flag. Some default income and expense paths update smoothing or withdrawal state when it is true. Preview calls should keep it false; the original daily settlement path uses true only when committing. The model still must not write `Hero.Gold` or raise transfer events itself.

## When to use and when not to

- Replace the model to change clan wages, asset revenue, tribute, trade, or project-income formulas; register it through `IGameStarter.AddModel` during campaign startup.
- Build a finance screen from `Campaign.Current.Models.ClanFinanceModel` and request explained income/expense results.
- Do not use `applyWithdrawals: true` in a UI preview, and do not treat `CalculateClanGoldChange` as money already paid.
- Do not call `GiveGoldAction`, mutate the clan, or create workshops from a model method. The daily [CampaignBehaviorBase](../CampaignBehaviorBase) flow and Actions own state changes.

## Dependencies

#### Upstream

- [Campaign](../../campaign/Campaign) and [GameModels](../GameModels) provide the registered finance policy.
- [Clan](../../campaign/Clan) provides leader, tier, kingdom, fiefs, and current gold.
- Towns, villages, `MobileParty`, workshops, and caravans provide the asset state used by the calculation.
- [PartyWageModel](../PartyWageModel), settlement models, and trade/diplomacy behaviors contribute adjacent policy results.

#### Downstream

- `ClanVariablesCampaignBehavior` calls `CalculateClanGoldChange` during the daily tick and then transfers the net result to the clan leader through [GiveGoldAction](../GiveGoldAction).
- Finance UI reads income/expense detail and `ExplainedNumber` explanations.
- [ChangeClanInfluenceAction](../ChangeClanInfluenceAction) and other Actions are separate world-change boundaries; finance must not replace them.

## Members and timing

| Member | Purpose and timing | Side-effect boundary |
|---|---|---|
| `PartyGoldLowerThreshold` | Minimum leader gold used when creating or restoring a clan party; the default is 5000. | Returns a threshold; it does not grant gold. |
| `CalculateClanGoldChange(Clan, bool, bool, bool)` | Combines income and expenses into a net change for daily settlement or overview screens. | `applyWithdrawals: true` may advance internal withdrawal/smoothing state. |
| `CalculateClanIncome(Clan, bool, bool, bool)` | Aggregates fiefs, parties, workshops, caravans, tributes, and trade income. | Does not credit the leader. |
| `CalculateClanExpenses(Clan, bool, bool, bool)` | Aggregates garrison/party wages, mercenaries, tributes, auto-recruitment, and related expenses. | Does not debit the balance itself. |
| `CalculateTownIncomeFromTariffs(Clan, Town, bool)` | Calculates a clan's tariff income from a town. | Returns a value; the finance schedule commits it. |
| `CalculateTownIncomeFromProjects(Town)` | Calculates the income contribution of town projects. | Does not advance construction. |
| `CalculateNotableDailyGoldChange(Hero, bool)` | Calculates the daily change for an active notable; a daily Hero tick consumes it. | Does not pay the Hero directly. |
| `CalculateVillageIncome(Clan, Village, bool)` | Calculates clan income from a village. | Does not change production or ownership. |
| `CalculateOwnerIncomeFromCaravan(MobileParty)` | Calculates the owner's caravan income. | Does not move the caravan or create a trade. |
| `CalculateOwnerIncomeFromWorkshop(Workshop)` | Calculates workshop-owner income. | Does not change production or inventory. |
| `RevenueSmoothenFraction()` | Supplies the revenue smoothing factor used by the default finance implementation. | Returns a policy parameter only. |

## Real preview example

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;

Clan clan = Clan.PlayerClan;
ClanFinanceModel finance = Campaign.Current.Models.ClanFinanceModel;
ExplainedNumber income = finance.CalculateClanIncome(
    clan,
    includeDescriptions: true,
    applyWithdrawals: false,
    includeDetails: true);
ExplainedNumber expenses = finance.CalculateClanExpenses(
    clan,
    includeDescriptions: true,
    applyWithdrawals: false,
    includeDetails: true);
float projectedChange = income.ResultNumber + expenses.ResultNumber;
```

This is a preview only. The original daily clan flow calls `CalculateClanGoldChange(..., applyWithdrawals: true)` when settlement is ready and then applies the result through `GiveGoldAction`; a preview button must not submit the transfer again.

## Risks and debugging boundaries

1. Using `applyWithdrawals: true` during menu refresh, tooltips, or AI evaluation can advance smoothing or withdrawal state, causing duplicate charges, duplicate income, or save-to-save divergence.
2. `CalculateClanGoldChange` is a delta, not a balance. Treating it as an absolute gold setter loses the clan's existing balance and the transfer semantics of `GiveGoldAction`.
3. Finance depends on the current kingdom, fiefs, parties, workshops, and trade behaviors. Early campaign loading can expose null models, missing behaviors, or incomplete asset collections.
4. Preserve the `ExplainedNumber` sign convention when replacing the model: income is positive and expenses are negative. Returning an unexplained total makes finance UI and daily logs impossible to diagnose.
5. The model is not a save container. Persist custom smoothing factors or assets in a behavior `SyncData`/Saveable contract instead of relying on model-instance lifetime.

## Navigation

- [Parent: campaign-ext](./)
- [Models family guide](../models)
- [Sibling: PartyWageModel](../PartyWageModel) · [DiplomacyModel](../DiplomacyModel)
- [Related: Clan](../../campaign/Clan) · [Campaign](../../campaign/Campaign) · [GiveGoldAction](../GiveGoldAction)
