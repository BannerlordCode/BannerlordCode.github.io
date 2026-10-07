# Evidence: DefaultPartyMoraleModel

## 1. Source file & class declaration

- **Path:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyMoraleModel.cs`
- **Class declaration:** line 15 — `public class DefaultPartyMoraleModel : PartyMoraleModel`
- **Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
- **Base class:** `PartyMoraleModel` (interface-style base at `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyMoraleModel.cs`)
- **Grep output:**
  ```
  15:	public class DefaultPartyMoraleModel : PartyMoraleModel
  19:		public override float HighMoraleValue
  28:		public override int GetDailyStarvationMoralePenalty(PartyBase party)
  34:		public override int GetDailyNoWageMoralePenalty(MobileParty party)
  52:		public override float GetStandardBaseMorale(PartyBase party)
  58:		public override float GetVictoryMoraleChange(PartyBase party)
  64:		public override float GetDefeatMoraleChange(PartyBase party)
  222:		public override ExplainedNumber GetEffectivePartyMorale(MobileParty mobileParty, bool includeDescription = false)
  ```

## 2. Per-member inventory (all public members)

| # | Member | Signature | File:Line | Description |
|---|--------|-----------|-----------|-------------|
| 1 | `HighMoraleValue` | `public override float HighMoraleValue { get; }` | DefaultPartyMoraleModel.cs:19 | Returns the morale threshold (70f) at which a party is considered to have high morale; used by healing logic to gate fast healing. |
| 2 | `GetDailyStarvationMoralePenalty` | `public override int GetDailyStarvationMoralePenalty(PartyBase party)` | DefaultPartyMoraleModel.cs:28 | Returns the flat per-day morale penalty (-5) applied while the party is starving. |
| 3 | `GetDailyNoWageMoralePenalty` | `public override int GetDailyNoWageMoralePenalty(MobileParty party)` | DefaultPartyMoraleModel.cs:34 | Returns the per-day morale penalty rate (-3) applied per unit of unpaid wages. |
| 4 | `GetStandardBaseMorale` | `public override float GetStandardBaseMorale(PartyBase party)` | DefaultPartyMoraleModel.cs:52 | Returns the neutral baseline morale (50f) from which all bonuses/penalties are computed. |
| 5 | `GetVictoryMoraleChange` | `public override float GetVictoryMoraleChange(PartyBase party)` | DefaultPartyMoraleModel.cs:58 | Returns the flat morale delta (+20f) applied after the party wins a battle. |
| 6 | `GetDefeatMoraleChange` | `public override float GetDefeatMoraleChange(PartyBase party)` | DefaultPartyMoraleModel.cs:64 | Returns the flat morale delta (-20f) applied after the party loses a battle. |
| 7 | `GetEffectivePartyMorale` | `public override ExplainedNumber GetEffectivePartyMorale(MobileParty mobileParty, bool includeDescription = false)` | DefaultPartyMoraleModel.cs:222 | Core calculation: aggregates recent-events morale, leadership skill bonus, starvation/no-wage penalties, perk effects (PeasantLeader/SelfPromoter/Logistician), food-variety bonus, and party-size penalty into an `ExplainedNumber` (base 50f). |

Private helpers (not public, for context): `GetStarvationMoralePenalty` (:40, -30 one-time), `GetNoWageMoralePenalty` (:46, -20 one-time), `CalculateFoodVarietyMoraleBonus` (:70), `GetPartySizeMoraleEffect` (:113), `CheckPerkEffectOnPartyMorale` (:127), `GetMoraleEffectsFromPerks` (:145), `CalculateTroopTierRatio` (:177), `GetMoraleEffectsFromSkill` (:187). Private const `BaseMoraleValue = 50f` (:213) and 5 readonly TextObject fields (:215-219).

## 3. Call example candidates (≥3)

| # | Call site | File:Line | Evidence |
|---|-----------|-----------|----------|
| 1 | `Campaign.Current.Models.PartyMoraleModel.GetDailyStarvationMoralePenalty(mobileParty.Party)` | TaleWorlds.CampaignSystem/CampaignBehaviors/FoodConsumptionBehavior.cs:207 | `int dailyStarvationMoralePenalty = Campaign.Current.Models.PartyMoraleModel.GetDailyStarvationMoralePenalty(mobileParty.Party);` — daily starvation tick applies the penalty. |
| 2 | `Campaign.Current.Models.PartyMoraleModel.GetDailyNoWageMoralePenalty(mobileParty)` | TaleWorlds.CampaignSystem/GameComponents/DefaultClanFinanceModel.cs:858 | `float num2 = (float)Campaign.Current.Models.PartyMoraleModel.GetDailyNoWageMoralePenalty(mobileParty) * num;` — unpaid-wage morale drain computed during clan finance update. |
| 3 | `Campaign.Current.Models.PartyMoraleModel.GetDefeatMoraleChange(party)` | TaleWorlds.CampaignSystem/MapEvents/MapEvent.cs:2140 | `party.MobileParty.RecentEventsMorale += Campaign.Current.Models.PartyMoraleModel.GetDefeatMoraleChange(party);` — defeat applies the morale delta. |
| 4 | `Campaign.Current.Models.PartyMoraleModel.GetEffectivePartyMorale(this, false).ResultNumber` | TaleWorlds.CampaignSystem/Party/MobileParty.cs:1874 | `float resultNumber = Campaign.Current.Models.PartyMoraleModel.GetEffectivePartyMorale(this, false).ResultNumber;` — `MobileParty.Morale` property getter. |
| 5 | `Campaign.Current.Models.PartyMoraleModel.GetEffectivePartyMorale(this, true)` | TaleWorlds.CampaignSystem/Party/MobileParty.cs:1940 | `return Campaign.Current.Models.PartyMoraleModel.GetEffectivePartyMorale(this, true);` — morale tooltip with explanation. |
| 6 | `Campaign.Current.Models.PartyMoraleModel.HighMoraleValue` | TaleWorlds.CampaignSystem/GameComponents/DefaultPartyHealingModel.cs:166 | `if (mobileParty.Morale >= Campaign.Current.Models.PartyMoraleModel.HighMoraleValue)` — gates accelerated healing. |

**Mod-relevant call pattern:** Access via `Campaign.Current.Models.PartyMoraleModel` (the model registry). Mods replace the implementation with `Game.Current.ReplaceModel<DefaultPartyMoraleModel>(new MyMoraleModel())` or subclass `PartyMoraleModel` and override individual methods.

## 4. Current page status

- **Page path:** `content/v1.3.0/zh/api/campaign/DefaultPartyMoraleModel.md`
- **Byte count:** 3481 bytes
- **classifyPage result:** `stub` — reasons: `boilerplate-mental-model`, `weak-mental`, `weak-deps`
- **Six-section completeness:**

| Section | Present? | Notes |
|---------|----------|-------|
| 概述 (Overview) | ✅ | Boilerplate: "是一个规则模型，通常定义'系统该如何计算'" |
| 心智模型 (Mental Model) | ✅ | Boilerplate: "把 `DefaultPartyMoraleModel` 当作一个 Model 型扩展点来理解…" |
| 主要属性 (Properties) | ✅ | 1 property (HighMoraleValue) |
| 主要方法 (Methods) | ✅ | 7 methods, all with formulaic "读取并返回当前对象中 X 的结果" purposes |
| 使用示例 (Examples) | ✅ | Single generic `Game.Current.ReplaceModel<>` snippet |
| 参见 (See Also) | ✅ | Link to parent dir only |

**Verdict:** 6/6 sections present but all template-generated. All 7 public members listed. Missing: real call-site evidence (FoodConsumptionBehavior/MapEvent/MobileParty), the ExplainedNumber aggregation pipeline explanation, perk interactions (WarriorsDiet/Gourmet/PeasantLeader/SelfPromoter/Logistician), and the starvation vs. unpaid-wage distinction.
