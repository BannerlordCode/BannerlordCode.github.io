# Evidence: DefaultPartyFoodBuyingModel

## 1. Source file & class declaration

- **Path:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyFoodBuyingModel.cs`
- **Class declaration:** line 10 — `public class DefaultPartyFoodBuyingModel : PartyFoodBuyingModel`
- **Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
- **Base class:** `PartyFoodBuyingModel` (abstract, `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyFoodBuyingModel.cs:9` — `public abstract class PartyFoodBuyingModel : MBGameModel<PartyFoodBuyingModel>`)
- **Constructor:** none (implicit default)
- **Grep command:** `grep -nE '^\s*(public|private|protected|internal)\s' TaleWorlds.CampaignSystem/GameComponents/DefaultPartyFoodBuyingModel.cs`
- **Grep output:**
  ```
  10:	public class DefaultPartyFoodBuyingModel : PartyFoodBuyingModel
  14:		public override float MinimumDaysFoodToLastWhileBuyingFoodFromTown
  24:		public override float MinimumDaysFoodToLastWhileBuyingFoodFromVillage
  34:		public override float LowCostFoodPriceAverage
  43:		public override void FindItemToBuy(MobileParty mobileParty, Settlement settlement, out ItemRosterElement itemElement, out float itemElementsPrice)
  ```
  No private members, no fields — the class is 3 tuning getters + 1 method.

## 2. Per-member inventory (all public members)

4 public members total: 3 `override` getters + 1 `override` method.

| # | Member | Signature | File:Line | What it does |
|---|--------|-----------|-----------|--------------|
| 1 | `MinimumDaysFoodToLastWhileBuyingFoodFromTown` | `public override float MinimumDaysFoodToLastWhileBuyingFoodFromTown { get; }` | DefaultPartyFoodBuyingModel.cs:14 | Returns `30f` — when buying in a town, a party tries to stock up enough food for at least 30 days. Used by `PartiesBuyFoodCampaignBehavior` to compute how many items to buy. |
| 2 | `MinimumDaysFoodToLastWhileBuyingFoodFromVillage` | `public override float MinimumDaysFoodToLastWhileBuyingFoodFromVillage { get; }` | DefaultPartyFoodBuyingModel.cs:24 | Returns `8f` — the same target for villages (smaller stock, cheaper top-up). |
| 3 | `LowCostFoodPriceAverage` | `public override float LowCostFoodPriceAverage { get; }` | DefaultPartyFoodBuyingModel.cs:34 | Returns `30f` — the reference "low cost" food price used by AI (`AiVisitSettlementBehavior`) to decide how much food is worth buying (`(gold - 100) / LowCostFoodPriceAverage`). |
| 4 | `FindItemToBuy` | `public override void FindItemToBuy(MobileParty mobileParty, Settlement settlement, out ItemRosterElement itemElement, out float itemElementsPrice)` | DefaultPartyFoodBuyingModel.cs:43 | Scans the settlement's `ItemRoster` and picks a weighted-random food item for the party to buy. Only considers items with `Amount > 0` that are `IsFood` **or** live-stock horses (`HasHorseComponent && HorseComponent.IsLiveStock`). Rejects items priced ≥ 120 (except livestock) or unaffordable with `mobileParty.PartyTradeGold`. Weight = `priceScore² × valueScore²` where `priceScore = (120 - price) * 0.0083` (or `(120 - price/meatCount) * 0.0083` for livestock) and `valueScore = (100 - itemValue) * 0.01` (or `(100 - itemValue/meatCount) * 0.01`). Writes `ItemRosterElement.Invalid` / `0f` when nothing qualifies. |

## 3. Call example candidates (≥3)

| # | Call site | File:Line | Evidence |
|---|-----------|-----------|----------|
| 1 | Behavior caches model + reads the town/village threshold | TaleWorlds.CampaignSystem/CampaignBehaviors/PartiesBuyFoodCampaignBehavior.cs:33–34 | `PartyFoodBuyingModel partyFoodBuyingModel = Campaign.Current.Models.PartyFoodBuyingModel;` … `float minimumDaysToLast = settlement.IsVillage ? partyFoodBuyingModel.MinimumDaysFoodToLastWhileBuyingFoodFromVillage : partyFoodBuyingModel.MinimumDaysFoodToLastWhileBuyingFoodFromTown;` |
| 2 | Item selection with `out` params | TaleWorlds.CampaignSystem/CampaignBehaviors/PartiesBuyFoodCampaignBehavior.cs:69 | `Campaign.Current.Models.PartyFoodBuyingModel.FindItemToBuy(mobileParty, settlement, out subject, out num);` |
| 3 | Village threshold inside AI visit logic | TaleWorlds.CampaignSystem/CampaignBehaviors/AiBehaviors/AiVisitSettlementBehavior.cs:215 | `(num21 < 1f && item5.IsVillage) ? Campaign.Current.Models.PartyFoodBuyingModel.MinimumDaysFoodToLastWhileBuyingFoodFromVillage : Campaign.Current.Models.PartyFoodBuyingModel.MinimumDaysFoodToLastWhileBuyingFoodFromTown` |
| 4 | Low-cost price average for AI budget | TaleWorlds.CampaignSystem/CampaignBehaviors/AiBehaviors/AiVisitSettlementBehavior.cs:219 | `int val = (int)((float)(num5 - 100) / Campaign.Current.Models.PartyFoodBuyingModel.LowCostFoodPriceAverage);` |
| 5 | Model registration at game start | TaleWorlds.CampaignSystem/SandBoxManager.cs:253 | `gameStarter.AddModel<PartyFoodBuyingModel>(new DefaultPartyFoodBuyingModel());` |
| 6 | Model resolution | TaleWorlds.CampaignSystem/GameModels.cs:653 (property declared GameModels.cs:104) | `this.PartyFoodBuyingModel = base.GetGameModel<PartyFoodBuyingModel>();` / `public PartyFoodBuyingModel PartyFoodBuyingModel { get; private set; }` |

**Mod-relevant call pattern:** read via `Campaign.Current.Models.PartyFoodBuyingModel`; replace with `Game.Current.ReplaceModel<PartyFoodBuyingModel>(new MyPartyFoodBuyingModel())`, or subclass `PartyFoodBuyingModel` and override `FindItemToBuy` to change which food the AI buys (e.g. prefer cheap grain) and/or the three tuning floats to change how much stock the AI keeps. `FindItemToBuy` is called per purchase attempt, so it runs often — keep it allocation-light.

## 4. Current page status

- **Page path:** `content/v1.3.0/zh/api/campaign/DefaultPartyFoodBuyingModel.md`
- **Byte count:** 1892 bytes
- **classifyPage result:** `stub` — reasons: `boilerplate-mental-model`, `weak-mental`, `weak-deps`
- **Six-section completeness:**

| Section | Present? | Notes |
|---------|----------|-------|
| 概述 (Overview) | ✅ | Boilerplate: "是一个规则模型，通常定义…" |
| 心智模型 (Mental Model) | ✅ | Boilerplate: "当作一个 Model 型扩展点来理解…" |
| 主要属性 (Properties) | ✅ | 3 properties, names + signatures only (no values) |
| 主要方法 (Methods) | ✅ | `FindItemToBuy` only, formulaic purpose "在当前集合/范围内查找满足条件的item to buy。" and a broken placeholder example that passes `out` params by value (`defaultPartyFoodBuyingModel.FindItemToBuy(mobileParty, settlement, itemElement, itemElementsPrice);` — not compilable) |
| 使用示例 (Examples) | ✅ | Generic `Game.Current.ReplaceModel<DefaultPartyFoodBuyingModel>(new MyDefaultPartyFoodBuyingModel());` |
| 参见 (See Also) | ✅ | Single link `[本区域目录](../)` |

**Verdict:** 6/6 sections present but all template-generated, and the method example is actually non-compilable (missing `out`). The public surface (3 getters + 1 method) is complete, but no numeric tuning values (30 / 8 / 30), no description of the item-scoring formula (price/value score, livestock meat-count handling, 120-price gate, `PartyTradeGold` affordability), and no real call-site evidence (PartiesBuyFoodCampaignBehavior.cs:33–34/69, AiVisitSettlementBehavior.cs:215/219).
