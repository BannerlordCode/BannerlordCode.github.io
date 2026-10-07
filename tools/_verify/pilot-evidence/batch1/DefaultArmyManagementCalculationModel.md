# Evidence: DefaultArmyManagementCalculationModel

## 1. Source file & class declaration

- **Path:** `TaleWorlds.CampaignSystem/GameComponents/DefaultArmyManagementCalculationModel.cs`
- **Class declaration:** line 21 — `public class DefaultArmyManagementCalculationModel : ArmyManagementCalculationModel`
- **Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
- **Base class:** `ArmyManagementCalculationModel` (abstract, in `TaleWorlds.CampaignSystem.ComponentInterfaces`)

## 2. Per-member inventory

| # | Member | Signature | File:Line | Description |
|---|--------|-----------|-----------|-------------|
| 1 | `AIMobilePartySizeRatioToCallToArmy` | `public override float AIMobilePartySizeRatioToCallToArmy { get; }` | DefaultArmyManagementCalculationModel.cs:25 | Returns the minimum party size ratio for AI parties to be called to army (0.6). |
| 2 | `PlayerMobilePartySizeRatioToCallToArmy` | `public override float PlayerMobilePartySizeRatioToCallToArmy { get; }` | DefaultArmyManagementCalculationModel.cs:35 | Returns the minimum party size ratio for player parties to be called to army (0.4). |
| 3 | `MinimumNeededFoodInDaysToCallToArmy` | `public override float MinimumNeededFoodInDaysToCallToArmy { get; }` | DefaultArmyManagementCalculationModel.cs:45 | Returns the minimum food-days required for a party to be called to army (15). |
| 4 | `MaximumDistanceToCallToArmy` | `public override float MaximumDistanceToCallToArmy { get; }` | DefaultArmyManagementCalculationModel.cs:55 | Returns the maximum distance for calling parties to army (8× average inter-town distance). |
| 5 | `InfluenceValuePerGold` | `public override int InfluenceValuePerGold { get; }` | DefaultArmyManagementCalculationModel.cs:65 | Returns the influence cost per gold unit (40). |
| 6 | `AverageCallToArmyCost` | `public override int AverageCallToArmyCost { get; }` | DefaultArmyManagementCalculationModel.cs:75 | Returns the base influence cost for calling a party to army (20). |
| 7 | `CohesionThresholdForDispersion` | `public override int CohesionThresholdForDispersion { get; }` | DefaultArmyManagementCalculationModel.cs:85 | Returns the cohesion threshold below which an army disperses (10). |
| 8 | `MaximumWaitTime` | `public override float MaximumWaitTime { get; }` | DefaultArmyManagementCalculationModel.cs:95 | Returns the maximum time an army waits for members (3 days). |
| 9 | `DailyBeingAtArmyInfluenceAward` | `public override float DailyBeingAtArmyInfluenceAward(MobileParty armyMemberParty)` | DefaultArmyManagementCalculationModel.cs:104 | Calculates daily influence award for a party in an army, based on estimated strength and cultural feats. |
| 10 | `CalculatePartyInfluenceCost` | `public override int CalculatePartyInfluenceCost(MobileParty armyLeaderParty, MobileParty party)` | DefaultArmyManagementCalculationModel.cs:115 | Calculates the influence cost to call a party to army, factoring in relations, party size, distance, policies, perks, and cultural feats. |
| 11 | `GetMobilePartiesToCallToArmy` | `public override List<MobileParty> GetMobilePartiesToCallToArmy(MobileParty leaderParty)` | DefaultArmyManagementCalculationModel.cs:185 | Returns a list of parties that can be called to army, sorted by strength/cost ratio, within influence budget. |
| 12 | `CalculateTotalInfluenceCost` | `public override int CalculateTotalInfluenceCost(Army army, float percentage)` | DefaultArmyManagementCalculationModel.cs:283 | Calculates total influence cost for an army at a given percentage; non-main armies cost 25%. |
| 13 | `GetPartySizeScore` | `public override float GetPartySizeScore(MobileParty party)` | DefaultArmyManagementCalculationModel.cs:316 | Returns the party size score (min of 1.0 and party size ratio). |
| 14 | `CalculateDailyCohesionChange` | `public override ExplainedNumber CalculateDailyCohesionChange(Army army, bool includeDescriptions = false)` | DefaultArmyManagementCalculationModel.cs:322 | Calculates daily cohesion change based on party count, starving parties, low-morale parties, and small parties; includes HordeLeader/CampBuilding perk bonuses. |
| 15 | `CalculateNewCohesion` | `public override int CalculateNewCohesion(Army army, PartyBase newParty, int calculatedCohesion, int sign)` | DefaultArmyManagementCalculationModel.cs:379 | Calculates new cohesion after adding/removing a party, clamped to [0, 100]. |
| 16 | `GetCohesionBoostInfluenceCost` | `public override int GetCohesionBoostInfluenceCost(Army army, int percentageToBoost = 100)` | DefaultArmyManagementCalculationModel.cs:400 | Returns the influence cost to boost cohesion by a given percentage. |
| 17 | `GetPartyRelation` | `public override int GetPartyRelation(Hero hero)` | DefaultArmyManagementCalculationModel.cs:406 | Returns the relation between the main hero and a given hero (-101 if null, 101 if self). |
| 18 | `CanPlayerCreateArmy` | `public override bool CanPlayerCreateArmy(out TextObject disabledReason)` | DefaultArmyManagementCalculationModel.cs:420 | Checks if the player can create an army (kingdom membership, not mercenary, not at sea, not prisoner, not in encounter/siege/map event). |
| 19 | `CheckPartyEligibility` | `public override bool CheckPartyEligibility(MobileParty party, out TextObject explanation)` | DefaultArmyManagementCalculationModel.cs:498 | Checks if a party is eligible to be called to army (not ruler, not already in army, not in combat, size threshold, not disbanding, distance, naval/raft checks). |

## 3. Call example candidates (≥3)

| # | Call Site | File:Line | Code |
|---|-----------|-----------|------|
| 1 | `Army` | TaleWorlds.CampaignSystem/Army.cs:97 | `return Campaign.Current.Models.ArmyManagementCalculationModel.CalculateDailyCohesionChange(this, false).ResultNumber;` |
| 2 | `Army` | TaleWorlds.CampaignSystem/Army.cs:117 | `return Campaign.Current.Models.ArmyManagementCalculationModel.CohesionThresholdForDispersion;` |
| 3 | `Army` | TaleWorlds.CampaignSystem/Army.cs:1071 | `int num = -Campaign.Current.Models.ArmyManagementCalculationModel.CalculatePartyInfluenceCost(this.LeaderParty, mobileParty);` |
| 4 | `AiArmyMemberBehavior` | TaleWorlds.CampaignSystem/CampaignBehaviors/AiBehaviors/AiArmyMemberBehavior.cs:121 | `float num5 = mobileParty.Army.LeaderParty.IsMainParty ? Campaign.Current.Models.ArmyManagementCalculationModel.PlayerMobilePartySizeRatioToCallToArmy : Campaign.Current.Models.ArmyManagementCalculationModel.AIMobilePartySizeRatioToCallToArmy;` |
| 5 | `AiMilitaryBehavior` | TaleWorlds.CampaignSystem/CampaignBehaviors/AiBehaviors/AiMilitaryBehavior.cs:494 | `List<MobileParty> mobilePartiesToCallToArmy = Campaign.Current.Models.ArmyManagementCalculationModel.GetMobilePartiesToCallToArmy(mobileParty);` |
| 6 | `LordConversationsCampaignBehavior` | TaleWorlds.CampaignSystem/CampaignBehaviors/LordConversationsCampaignBehavior.cs:3422 | `MBTextManager.SetTextVariable("INFLUENCE_COST", Campaign.Current.Models.ArmyManagementCalculationModel.CalculatePartyInfluenceCost(MobileParty.MainParty, Hero.OneToOneConversationHero.PartyBelongedTo));` |
| 7 | `DefaultClanPoliticsModel` | TaleWorlds.CampaignSystem/GameComponents/DefaultClanPoliticsModel.cs:46 | `num2 += Campaign.Current.Models.ArmyManagementCalculationModel.DailyBeingAtArmyInfluenceAward(mobileParty);` |
| 8 | `ArmyManagementVM` | TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ArmyManagement/ArmyManagementVM.cs:65 | `this.CohesionBoostCost = Campaign.Current.Models.ArmyManagementCalculationModel.GetCohesionBoostInfluenceCost(MobileParty.MainParty.Army, 10);` |

## 4. Current page status

- **Page path:** `content/v1.3.0/zh/api/campaign/DefaultArmyManagementCalculationModel.md`
- **Byte count:** 7030 bytes
- **classifyPage result:** `stub` — reasons: `boilerplate-mental-model`, `weak-mental`, `weak-deps`
- **Six-section completeness:**

| Section | Present? | Notes |
|---------|----------|-------|
| 概述 (Overview) | ✅ | Boilerplate: "是一个规则模型，通常定义…" |
| 心智模型 (Mental Model) | ✅ | Boilerplate: "当作一个 Model 型扩展点来理解…" |
| 主要属性 (Properties) | ✅ | 8 properties listed |
| 主要方法 (Methods) | ✅ | 11 methods listed, formulaic purposes |
| 使用示例 (Examples) | ✅ | Generic `ReplaceModel` snippet |
| 参见 (See Also) | ✅ | Link to parent dir |

**Verdict:** All 6 sections exist but all are template-generated. 19 public members covered (8 properties + 11 methods, complete inventory). Missing: real mental model explaining the army management system (influence costs, cohesion, call-to-army mechanics), real call-site examples, dependency links to `ArmyManagementCalculationModel` base, `ExplainedNumber` pattern, policy/perk interaction explanation, `CanPlayerCreateArmy`/`CheckPartyEligibility` usage flow.
