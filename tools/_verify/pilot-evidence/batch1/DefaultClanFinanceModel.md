# Evidence: DefaultClanFinanceModel

## 1. Source file & class declaration

- **Path:** `TaleWorlds.CampaignSystem/GameComponents/DefaultClanFinanceModel.cs`
- **Class declaration:** line 18 — `public class DefaultClanFinanceModel : ClanFinanceModel`
- **Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
- **Base class:** `ClanFinanceModel` (abstract, in `TaleWorlds.CampaignSystem.ComponentInterfaces`)

## 2. Per-member inventory

| # | Member | Signature | File:Line | Description |
|---|--------|-----------|-----------|-------------|
| 1 | `PartyGoldLowerThreshold` | `public override int PartyGoldLowerThreshold { get; }` | DefaultClanFinanceModel.cs:22 | Returns the gold threshold below which party wages are reduced (hardcoded to 5000). |
| 2 | `CalculateClanGoldChange` | `public override ExplainedNumber CalculateClanGoldChange(Clan clan, bool includeDescriptions = false, bool applyWithdrawals = false, bool includeDetails = false)` | DefaultClanFinanceModel.cs:31 | Calculates total daily gold change (income + expenses) for a clan. |
| 3 | `CalculateClanIncome` | `public override ExplainedNumber CalculateClanIncome(Clan clan, bool includeDescriptions = false, bool applyWithdrawals = false, bool includeDetails = false)` | DefaultClanFinanceModel.cs:40 | Calculates total daily income for a clan (settlements, parties, workshops, tribute, etc.). |
| 4 | `CalculateClanExpensesInternal` | `public void CalculateClanExpensesInternal(Clan clan, ref ExplainedNumber goldChange, bool applyWithdrawals = false, bool includeDetails = false)` | DefaultClanFinanceModel.cs:90 | Core expense calculation: party wages, garrison wages, mercenary/tribute/call-to-war expenses, auto-recruitment, kingdom budget, debt payments, workshop expenses. |
| 5 | `CalculateClanExpenses` | `public override ExplainedNumber CalculateClanExpenses(Clan clan, bool includeDescriptions = false, bool applyWithdrawals = false, bool includeDetails = false)` | DefaultClanFinanceModel.cs:134 | Calculates total daily expenses for a clan. |
| 6 | `CalculateTownIncomeFromTariffs` | `public override ExplainedNumber CalculateTownIncomeFromTariffs(Clan clan, Town town, bool applyWithdrawals = false)` | DefaultClanFinanceModel.cs:337 | Calculates tariff income from a town, including perk bonuses (ContentTrades, Steady, SaltTheEarth, GivingHands) and building effects. |
| 7 | `CalculateTownIncomeFromProjects` | `public override int CalculateTownIncomeFromProjects(Town town)` | DefaultClanFinanceModel.cs:364 | Calculates project-based income from town buildings (DenarByBoundVillageHeartPerDay effect + governor perk). |
| 8 | `CalculateVillageIncome` | `public override int CalculateVillageIncome(Clan clan, Village village, bool applyWithdrawals = false)` | DefaultClanFinanceModel.cs:376 | Calculates daily income from a village, considering looting/raiding state, land tax policy, governor perks (ForestKin, Logistician). |
| 9 | `CalculateOwnerIncomeFromCaravan` | `public override int CalculateOwnerIncomeFromCaravan(MobileParty caravan)` | DefaultClanFinanceModel.cs:741 | Calculates the clan leader's income from a caravan's trade gold above the initial threshold. |
| 10 | `CalculateOwnerIncomeFromWorkshop` | `public override int CalculateOwnerIncomeFromWorkshop(Workshop workshop)` | DefaultClanFinanceModel.cs:747 | Calculates the clan leader's income from a workshop's profit. |
| 11 | `RevenueSmoothenFraction` | `public override float RevenueSmoothenFraction()` | DefaultClanFinanceModel.cs:826 | Returns the revenue smoothing divisor (hardcoded to 5.0). |
| 12 | `CalculateNotableDailyGoldChange` | `public override int CalculateNotableDailyGoldChange(Hero hero, bool applyWithdrawals)` | DefaultClanFinanceModel.cs:845 | Calculates daily gold income for a notable hero from their assets (caravans, workshops, alleys). |
| 13 | `AssetIncomeType` (enum) | `public enum AssetIncomeType` | DefaultClanFinanceModel.cs:977 | Enum: Workshop, Caravan, Taxes, TributesEarned — used with `OnPlayerEarnedGoldFromAsset` event. |

## 3. Call example candidates (≥3)

| # | Call Site | File:Line | Code |
|---|-----------|-----------|------|
| 1 | `ClanVariablesCampaignBehavior` | TaleWorlds.CampaignSystem/CampaignBehaviors/ClanVariablesCampaignBehavior.cs:402 | `int num = MathF.Round(Campaign.Current.Models.ClanFinanceModel.CalculateClanGoldChange(clan, false, true, false).ResultNumber);` |
| 2 | `ClanVariablesCampaignBehavior` | TaleWorlds.CampaignSystem/CampaignBehaviors/ClanVariablesCampaignBehavior.cs:472 | `GiveGoldAction.ApplyBetweenCharacters(null, hero, Campaign.Current.Models.ClanFinanceModel.CalculateNotableDailyGoldChange(hero, true), true);` |
| 3 | `AchievementsCampaignBehavior` | StoryMode/GameComponents/CampaignBehaviors/AchievementsCampaignBehavior.cs:613 | `int num = (int)Campaign.Current.Models.ClanFinanceModel.CalculateClanIncome(Clan.PlayerClan, false, false, false).ResultNumber;` |
| 4 | `CompanionRolesCampaignBehavior` | TaleWorlds.CampaignSystem/CampaignBehaviors/CompanionRolesCampaignBehavior.cs:726 | `int partyGoldLowerThreshold = Campaign.Current.Models.ClanFinanceModel.PartyGoldLowerThreshold;` |
| 5 | `VillageGoodProductionCampaignBehavior` | TaleWorlds.CampaignSystem/CampaignBehaviors/VillageGoodProductionCampaignBehavior.cs:141 | `village.TradeTaxAccumulated = (int)(num * (0.6f + 0.3f * MBRandom.RandomFloat) * Campaign.Current.Models.ClanFinanceModel.RevenueSmoothenFraction());` |
| 6 | `CampaignUIHelper` | TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignUIHelper.cs:661 | `Func<ExplainedNumber> func = () => clanFinanceModel.CalculateClanGoldChange(Clan.PlayerClan, true, false, false);` |
| 7 | `ClanManagementVM` | TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanManagementVM.cs:276 | `this.TotalIncome = (int)Campaign.Current.Models.ClanFinanceModel.CalculateClanIncome(this._clan, false, false, false).ResultNumber;` |
| 8 | `ClanPartyItemVM` | TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanPartyItemVM.cs:122 | `this.Income = Campaign.Current.Models.ClanFinanceModel.CalculateOwnerIncomeFromCaravan(party.MobileParty);` |
| 9 | `ClanSettlementItemVM` | TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanSettlementItemVM.cs:215 | `int num3 = (int)clanFinanceModel.CalculateTownIncomeFromTariffs(Clan.PlayerClan, town, false).ResultNumber;` |
| 10 | `DefaultClanPoliticsModel` | TaleWorlds.CampaignSystem/GameComponents/DefaultClanPoliticsModel.cs:37 | `int num = MathF.Ceiling(clan.Influence * (1f / Campaign.Current.Models.ClanFinanceModel.RevenueSmoothenFraction()));` |

## 4. Current page status

- **Page path:** `content/v1.3.0/zh/api/campaign/DefaultClanFinanceModel.md`
- **Byte count:** 5832 bytes
- **classifyPage result:** `stub` — reasons: `boilerplate-mental-model`, `weak-mental`, `weak-deps`
- **Six-section completeness:**

| Section | Present? | Notes |
|---------|----------|-------|
| 概述 (Overview) | ✅ | Boilerplate: "是一个规则模型，通常定义…" |
| 心智模型 (Mental Model) | ✅ | Boilerplate: "当作一个 Model 型扩展点来理解…" |
| 主要属性 (Properties) | ✅ | 1 property listed (PartyGoldLowerThreshold) |
| 主要方法 (Methods) | ✅ | 12 methods listed, formulaic purposes |
| 使用示例 (Examples) | ✅ | Generic `ReplaceModel` snippet |
| 参见 (See Also) | ✅ | Link to parent dir |

**Verdict:** All 6 sections exist but all are template-generated. 13 public members covered (complete inventory). Missing: real mental model explaining the clan finance system (income sources, expense types, kingdom budget, debt), real call-site examples, dependency links to `ClanFinanceModel` base, `ExplainedNumber` pattern, `AssetIncomeType` event usage, `RevenueSmoothenFraction` explanation.
