# Evidence: DefaultPartyTradeModel

## 1. Source file & class declaration

- **Path:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyTradeModel.cs`
- **Class declaration:** line 9 — `public class DefaultPartyTradeModel : PartyTradeModel`
- **Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
- **Base class:** `PartyTradeModel` (abstract, in `TaleWorlds.CampaignSystem.ComponentInterfaces`)

## 2. Per-member inventory

| # | Member | Signature | File:Line | Description |
|---|--------|-----------|-----------|-------------|
| 1 | `CaravanTransactionHighestValueItemCount` | `public override int CaravanTransactionHighestValueItemCount { get; }` | DefaultPartyTradeModel.cs:13 | Returns the threshold count of highest-value items in a caravan transaction (hardcoded to 3). |
| 2 | `GetTradePenaltyFactor` | `public override float GetTradePenaltyFactor(MobileParty party)` | DefaultPartyTradeModel.cs:22 | Calculates the trade penalty factor for a party by applying the TradePenaltyReduction skill bonus; returns 1/result. |

## 3. Call example candidates (≥3)

| # | Call site | File:Line | Code |
|---|-----------|-----------|------|
| 1 | `DefaultTradeItemPriceFactorModel` | TaleWorlds.CampaignSystem/GameComponents/DefaultTradeItemPriceFactorModel.cs:76 | `float num2 = (clientParty != null) ? Campaign.Current.Models.PartyTradeModel.GetTradePenaltyFactor(clientParty) : 1f;` |
| 2 | `GameModels` (property) | TaleWorlds.CampaignSystem/GameModels.cs:84 | `public PartyTradeModel PartyTradeModel { get; private set; }` |
| 3 | `GameModels` (registration) | TaleWorlds.CampaignSystem/GameModels.cs:643 | `this.PartyTradeModel = base.GetGameModel<PartyTradeModel>();` |
| 4 | `SandBoxManager` (model creation) | TaleWorlds.CampaignSystem/SandBoxManager.cs:238 | `gameStarter.AddModel<PartyTradeModel>(new DefaultPartyTradeModel());` |

## 4. Current page status

- **Page path:** `content/v1.3.0/zh/api/campaign/DefaultPartyTradeModel.md`
- **Byte count:** 1478 bytes
- **classifyPage result:** `stub` — reasons: `boilerplate-mental-model`, `weak-mental`, `weak-deps`
- **Six-section completeness:**

| Section | Present? | Notes |
|---------|----------|-------|
| 概述 (Overview) | ✅ | Boilerplate: "是一个规则模型，通常定义…" |
| 心智模型 (Mental Model) | ✅ | Boilerplate: "当作一个 Model 型扩展点来理解…" |
| 主要属性 (Properties) | ✅ | 1 property listed |
| 主要方法 (Methods) | ✅ | 1 method listed, formulaic purpose |
| 使用示例 (Examples) | ✅ | Generic `ReplaceModel` snippet |
| 参见 (See Also) | ✅ | Link to parent dir |

**Verdict:** All 6 sections exist but all are template-generated boilerplate. No real mental model, no real examples, no dependency links. Member inventory covers only 2 public members (both override). Missing: `PartyTradeModel` base class members, `ExplainedNumber` usage pattern, real call-site examples.
