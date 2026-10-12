# Evidence: DefaultSettlementFoodModel

## 1. Source file & class declaration

- **Path:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementFoodModel.cs`
- **Class declaration:** line 15 — `public class DefaultSettlementFoodModel : SettlementFoodModel`
- **Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
- **Base class:** `SettlementFoodModel` (abstract, `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementFoodModel.cs:8` — `public abstract class SettlementFoodModel : MBGameModel<SettlementFoodModel>`)
- **Constructor:** none (implicit default)
- **Grep command:** `grep -nE '^\s*(public|private|protected|internal)\s' TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementFoodModel.cs`
- **Grep output:**
  ```
  15:	public class DefaultSettlementFoodModel : SettlementFoodModel
  19:		public override int FoodStocksUpperLimit
  29:		public override int NumberOfProsperityToEatOneFood
  39:		public override int NumberOfMenOnGarrisonToEatOneFood
  49:		public override int CastleFoodStockUpperLimitBonus
  58:		public override ExplainedNumber CalculateTownFoodStocksChange(Town town, bool includeMarketStocks = true, bool includeDescriptions = false)
  64:		private ExplainedNumber CalculateTownFoodChangeInternal(Town town, bool includeMarketStocks, bool includeDescriptions)
  124:		private static void GetSettlementFoodChangeDueToIssues(Town town, ref ExplainedNumber explainedNumber)
  130:		private static readonly TextObject ProsperityText = GameTexts.FindText("str_prosperity", null);
  133:		private static readonly TextObject GarrisonText = GameTexts.FindText("str_garrison", null);
  136:		private static readonly TextObject LandsAroundSettlementText = GameTexts.FindText("str_lands_around_settlement", null);
  139:		private static readonly TextObject NormalVillagesText = GameTexts.FindText("str_normal_villages", null);
  142:		private static readonly TextObject RaidedVillagesText = GameTexts.FindText("str_raided_villages", null);
  145:		private static readonly TextObject VillagesUnderSiegeText = GameTexts.FindText("str_villages_under_siege", null);
  148:		private static readonly TextObject FoodBoughtByCiviliansText = GameTexts.FindText("str_food_bought_by_civilians", null);
  151:		private const int FoodProductionPerVillage = 10;
  ```

## 2. Per-member inventory (all public members)

5 public members: 4 constant-valued `override` getters + 1 public method. (Private helper + constants listed below for context.)

| # | Member | Signature | File:Line | What it does |
|---|--------|-----------|-----------|--------------|
| 1 | `FoodStocksUpperLimit` | `public override int FoodStocksUpperLimit { get; }` | DefaultSettlementFoodModel.cs:19 | Returns `300` — the base cap on a town's stored food (see Town.cs:420, where it seeds an `ExplainedNumber`). |
| 2 | `NumberOfProsperityToEatOneFood` | `public override int NumberOfProsperityToEatOneFood { get; }` | DefaultSettlementFoodModel.cs:29 | Returns `40` — 40 prosperity consumes 1 food/day. Used to convert town prosperity into food demand (see SettlementHelper.cs:611). |
| 3 | `NumberOfMenOnGarrisonToEatOneFood` | `public override int NumberOfMenOnGarrisonToEatOneFood { get; }` | DefaultSettlementFoodModel.cs:39 | Returns `20` — 20 garrison soldiers consume 1 food/day. |
| 4 | `CastleFoodStockUpperLimitBonus` | `public override int CastleFoodStockUpperLimitBonus { get; }` | DefaultSettlementFoodModel.cs:49 | Returns `150` — extra food-stock cap granted to castles (added to `FoodStocksUpperLimit`, see Town.cs:423). |
| 5 | `CalculateTownFoodStocksChange` | `public override ExplainedNumber CalculateTownFoodStocksChange(Town town, bool includeMarketStocks = true, bool includeDescriptions = false)` | DefaultSettlementFoodModel.cs:58 | Public entry point; delegates to the private `CalculateTownFoodChangeInternal` and returns the daily net food change as an `ExplainedNumber` (so callers can show a tooltip breakdown). |

Private members (not public API, kept for the mental model):
- `CalculateTownFoodChangeInternal` (line 64): builds the net change = **production** (base 15 for towns / 10 for castles, + `(hearthLevel+1)*6` per normal bound village, + building `FoodProduction` effects, + `HuntingRights` policy +2, + market stock sold items with `BonusToFoodStores`) **minus consumption** (`prosperity / 40` + `garrisonMembers / 20` + building `FoodConsumption` effects), then applies siege penalties (`Gourmet`, `TriageTent`, `DirtyFighting` perks) and issue effects.
- `GetSettlementFoodChangeDueToIssues` (line 124): queries `Campaign.Current.Models.IssueModel.GetIssueEffectsOfSettlement(DefaultIssueEffects.SettlementFood, ...)`.
- Text objects (lines 130–148) and `FoodProductionPerVillage = 10` (line 151).

## 3. Call example candidates (≥3)

| # | Call site | File:Line | Evidence |
|---|-----------|-----------|----------|
| 1 | `Town.FoodChange` (public property) | TaleWorlds.CampaignSystem/Settlements/Town.cs:225 | `return Campaign.Current.Models.SettlementFoodModel.CalculateTownFoodStocksChange(this, true, false).ResultNumber;` |
| 2 | `Town.FoodChangeWithoutMarketStocks` | TaleWorlds.CampaignSystem/Settlements/Town.cs:235 | `return Campaign.Current.Models.SettlementFoodModel.CalculateTownFoodStocksChange(this, false, false).ResultNumber;` |
| 3 | `Town.FoodChangeExplanation` (tooltip breakdown) | TaleWorlds.CampaignSystem/Settlements/Town.cs:245 | `return Campaign.Current.Models.SettlementFoodModel.CalculateTownFoodStocksChange(this, true, true);` |
| 4 | `Town.FoodStocksUpperLimit` composition | TaleWorlds.CampaignSystem/Settlements/Town.cs:420,423 | `ExplainedNumber explainedNumber = new ExplainedNumber((float)Campaign.Current.Models.SettlementFoodModel.FoodStocksUpperLimit, false, null);` … `explainedNumber.Add((float)Campaign.Current.Models.SettlementFoodModel.CastleFoodStockUpperLimitBonus, null, null);` |
| 5 | Settlement food-starvation check | TaleWorlds.CampaignSystem/Helpers/SettlementHelper.cs:611 | `result = (settlement.Town.FoodChange < -(settlement.Town.Prosperity / (float)Campaign.Current.Models.SettlementFoodModel.NumberOfProsperityToEatOneFood));` |
| 6 | Garrison behavior caches model, then calls method | TaleWorlds.CampaignSystem/CampaignBehaviors/GarrisonTroopsCampaignBehavior.cs:321,326 | `SettlementFoodModel settlementFoodModel = Campaign.Current.Models.SettlementFoodModel;` … `float resultNumber = settlementFoodModel.CalculateTownFoodStocksChange(town, includeMarketStocks, false).ResultNumber;` |
| 7 | Town-management UI reads the value | TaleWorlds.CampaignSystem.ViewModelCollection/.../TownManagementVM.cs:113 | `MathF.Round(Campaign.Current.Models.SettlementFoodModel.CalculateTownFoodStocksChange(this._settlement.Town, true, false).ResultNumber)` |
| 8 | Model registration at game start | TaleWorlds.CampaignSystem/SandBoxManager.cs:293 | `gameStarter.AddModel<SettlementFoodModel>(new DefaultSettlementFoodModel());` |
| 9 | Model resolution | TaleWorlds.CampaignSystem/GameModels.cs:685 (property declared GameModels.cs:289) | `this.SettlementFoodModel = base.GetGameModel<SettlementFoodModel>();` / `public SettlementFoodModel SettlementFoodModel { get; private set; }` |

**Mod-relevant call pattern:** read via `Campaign.Current.Models.SettlementFoodModel`; replace with `Game.Current.ReplaceModel<SettlementFoodModel>(new MySettlementFoodModel())`, or subclass `SettlementFoodModel` and override `CalculateTownFoodStocksChange` and/or the four tuning constants. Because `Town.FoodChange` routes through this model, overriding it changes siege/starvation behavior everywhere at once.

## 4. Current page status

- **Page path:** `content/v1.3.0/zh/api/campaign/DefaultSettlementFoodModel.md`
- **Byte count:** 1904 bytes
- **classifyPage result:** `stub` — reasons: `boilerplate-mental-model`, `weak-mental`, `weak-deps`
- **Six-section completeness:**

| Section | Present? | Notes |
|---------|----------|-------|
| 概述 (Overview) | ✅ | Boilerplate: "是一个规则模型，通常定义…" |
| 心智模型 (Mental Model) | ✅ | Boilerplate: "当作一个 Model 型扩展点来理解…" |
| 主要属性 (Properties) | ✅ | 4 properties, names + signatures only |
| 主要方法 (Methods) | ✅ | `CalculateTownFoodStocksChange` only, formulaic purpose "计算town food stocks change的当前值或结果。" and a placeholder example (`= ...;`) |
| 使用示例 (Examples) | ✅ | Generic `Game.Current.ReplaceModel<DefaultSettlementFoodModel>(new MyDefaultSettlementFoodModel());` |
| 参见 (See Also) | ✅ | Single link `[本区域目录](../)` |

**Verdict:** 6/6 sections present but all template-generated. The public surface (4 properties + 1 method) is complete, but there is no description of the actual food formula (production vs. consumption, village hearth contribution, garrison/prosperity divisors, siege perks, issue effects), no mention of `ExplainedNumber`/`ResultNumber`, and no real call-site evidence (Town.cs:225/235/245/420/423, SettlementHelper.cs:611, GarrisonTroopsCampaignBehavior.cs:321/326).
