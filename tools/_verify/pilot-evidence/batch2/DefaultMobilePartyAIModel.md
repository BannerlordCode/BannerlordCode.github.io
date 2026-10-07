# Evidence: DefaultMobilePartyAIModel

## 1. Source file & class declaration

- **Path:** `TaleWorlds.CampaignSystem/GameComponents/DefaultMobilePartyAIModel.cs`
- **Class declaration:** line 15 — `public class DefaultMobilePartyAIModel : MobilePartyAIModel`
- **Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
- **Base class:** `MobilePartyAIModel` (at `TaleWorlds.CampaignSystem/ComponentInterfaces/MobilePartyAIModel.cs`)
- **Constructor:** none (default)
- **Grep output:**
  ```
  15:	public class DefaultMobilePartyAIModel : MobilePartyAIModel
  20:		public override float AiCheckInterval
  28:		public override float FleeToNearbyPartyRadius
  36:		public override float FleeToNearbySettlementRadius
  44:		public override float HideoutPatrolDistanceAsDays
  52:		public override float FortificationPatrolDistanceAsDays
  60:		public override float VillagePatrolDistanceAsDays
  68:		public override bool ShouldConsiderAttacking(MobileParty party, MobileParty targetParty)
  86:		public override float SettlementDefendingNearbyPartyCheckRadius
  94:		public override float SettlementDefendingWaitingPositionRadius
  102:		public override float NeededFoodsInDaysThresholdForMilitaryAction
  110:		public override bool ShouldConsiderAvoiding(MobileParty party, MobileParty targetParty)
  128:		public override float GetPatrolRadius(MobileParty mobileParty, CampaignVec2 patrolPoint)
  148:		public override bool ShouldPartyCheckInitiativeBehavior(MobileParty mobileParty)
  158:		public override void GetBestInitiativeBehavior(MobileParty mobileParty, out AiBehavior bestInitiativeBehavior, out MobileParty bestInitiativeTargetParty, out float bestInitiativeBehaviorScore, out Vec2 averageEnemyVec)
  ```

## 2. Per-member inventory (all public members)

| # | Member | Signature | File:Line | Description |
|---|--------|-----------|-----------|-------------|
| 1 | `AiCheckInterval` | `public override float AiCheckInterval { get; }` | DefaultMobilePartyAIModel.cs:20 | Returns 0.25f — AI decision tick interval in campaign-hours; lower = more frequent AI updates. |
| 2 | `FleeToNearbyPartyRadius` | `public override float FleeToNearbyPartyRadius { get; }` | DefaultMobilePartyAIModel.cs:28 | Dynamic radius = EncounterModel.GetEncounterJoiningRadius × EstimatedMaximumLordPartySpeedExceptPlayer × AiCheckInterval × 1.5f; how far a fleeing party searches for friendly parties. |
| 3 | `FleeToNearbySettlementRadius` | `public override float FleeToNearbySettlementRadius { get; }` | DefaultMobilePartyAIModel.cs:36 | Returns FleeToNearbyPartyRadius × 2f; how far a fleeing party searches for settlements. |
| 4 | `HideoutPatrolDistanceAsDays` | `public override float HideoutPatrolDistanceAsDays { get; }` | DefaultMobilePartyAIModel.cs:44 | Returns 0.5f — patrol radius (in days of travel) around hideout targets. |
| 5 | `FortificationPatrolDistanceAsDays` | `public override float FortificationPatrolDistanceAsDays { get; }` | DefaultMobilePartyAIModel.cs:52 | Returns 0.3f — patrol radius (in days of travel) around fortification targets. |
| 6 | `VillagePatrolDistanceAsDays` | `public override float VillagePatrolDistanceAsDays { get; }` | DefaultMobilePartyAIModel.cs:60 | Returns 0.25f — patrol radius (in days of travel) around village targets. |
| 7 | `ShouldConsiderAttacking` | `public override bool ShouldConsiderAttacking(MobileParty party, MobileParty targetParty)` | DefaultMobilePartyAIModel.cs:68 | Gate for attack consideration: checks morale, main-party ignore flags, naval/land compatibility, and port capability. |
| 8 | `SettlementDefendingNearbyPartyCheckRadius` | `public override float SettlementDefendingNearbyPartyCheckRadius { get; }` | DefaultMobilePartyAIModel.cs:86 | Returns SettlementDefendingWaitingPositionRadius × 3f; search radius for nearby parties when defending a settlement. |
| 9 | `SettlementDefendingWaitingPositionRadius` | `public override float SettlementDefendingWaitingPositionRadius { get; }` | DefaultMobilePartyAIModel.cs:94 | Returns 3f — base radius for settlement defense positioning. |
| 10 | `NeededFoodsInDaysThresholdForMilitaryAction` | `public override float NeededFoodsInDaysThresholdForMilitaryAction { get; }` | DefaultMobilePartyAIModel.cs:102 | Returns 12f — minimum days of food required before a party undertakes military action. |
| 11 | `ShouldConsiderAvoiding` | `public override bool ShouldConsiderAvoiding(MobileParty party, MobileParty targetParty)` | DefaultMobilePartyAIModel.cs:110 | Gate for flee consideration: checks siege/blockade status, target aggressiveness, garrison status, and naval/land compatibility. |
| 12 | `GetPatrolRadius` | `public override float GetPatrolRadius(MobileParty mobileParty, CampaignVec2 patrolPoint)` | DefaultMobilePartyAIModel.cs:128 | Computes patrol radius based on target settlement type (hideout/fortification/village) × days × speed; halved for patrol parties. |
| 13 | `ShouldPartyCheckInitiativeBehavior` | `public override bool ShouldPartyCheckInitiativeBehavior(MobileParty mobileParty)` | DefaultMobilePartyAIModel.cs:148 | Gate for initiative checks: excludes garrisons/militia/bandits without leaders, main party under siege, and attached army parties. |
| 14 | `GetBestInitiativeBehavior` | `public override void GetBestInitiativeBehavior(MobileParty mobileParty, out AiBehavior bestInitiativeBehavior, out MobileParty bestInitiativeTargetParty, out float bestInitiativeBehaviorScore, out Vec2 averageEnemyVec)` | DefaultMobilePartyAIModel.cs:158 | Core AI decision: scans nearby parties, computes strength ratios and stance scores, then picks FleeToPoint or EngageParty as the best initiative behavior. |

Private helpers: `IsEnemy` (:505), `CalculateInitiativeScoresForEnemy` (:511), `GetInitiativeDistanceForAttack` (:575), `CalculateStanceScore` (:613).

## 3. Call example candidates (≥3)

| # | Call Site | File:Line | Evidence |
|---|-----------|-----------|----------|
| 1 | `Campaign.Current.Models.MobilePartyAIModel.AiCheckInterval` | TaleWorlds.CampaignSystem/Party/MobilePartyAi.cs:289 | `float num = Campaign.Current.Models.MobilePartyAIModel.AiCheckInterval * (0.6f + 0.1f * MBRandom.RandomFloat);` — AI tick timing with randomization. |
| 2 | `Campaign.Current.Models.MobilePartyAIModel.ShouldPartyCheckInitiativeBehavior(this._mobileParty)` | TaleWorlds.CampaignSystem/Party/MobilePartyAi.cs:465 | `if (Campaign.Current.GameStarted && Campaign.Current.Models.MobilePartyAIModel.ShouldPartyCheckInitiativeBehavior(this._mobileParty))` — gate before initiative scan. |
| 3 | `Campaign.Current.Models.MobilePartyAIModel.GetBestInitiativeBehavior(this._mobileParty, out aiBehavior, out mobileParty2, out num, out avarageEnemyVec)` | TaleWorlds.CampaignSystem/Party/MobilePartyAi.cs:470 | `Campaign.Current.Models.MobilePartyAIModel.GetBestInitiativeBehavior(this._mobileParty, out aiBehavior, out mobileParty2, out num, out avarageEnemyVec);` — core AI decision call. |
| 4 | `Campaign.Current.Models.MobilePartyAIModel.GetPatrolRadius(this._mobileParty, patrolTargetPoint)` | TaleWorlds.CampaignSystem/Party/MobilePartyAi.cs:1294 | `float patrolRadius = Campaign.Current.Models.MobilePartyAIModel.GetPatrolRadius(this._mobileParty, patrolTargetPoint);` — patrol behavior radius. |
| 5 | `Campaign.Current.Models.MobilePartyAIModel.FleeToNearbyPartyRadius` | TaleWorlds.CampaignSystem/Party/MobilePartyAi.cs:1427 | `float fleeToNearbyPartyRadius = Campaign.Current.Models.MobilePartyAIModel.FleeToNearbyPartyRadius;` — flee behavior search radius. |
| 6 | `Campaign.Current.Models.MobilePartyAIModel.NeededFoodsInDaysThresholdForMilitaryAction` | TaleWorlds.CampaignSystem/CampaignBehaviors/AiBehaviors/AiMilitaryBehavior.cs:156 | `float neededFoodsInDaysThresholdForMilitaryAction = Campaign.Current.Models.MobilePartyAIModel.NeededFoodsInDaysThresholdForMilitaryAction;` — food threshold gate for military action. |
| 7 | `Campaign.Current.Models.MobilePartyAIModel.SettlementDefendingNearbyPartyCheckRadius` | TaleWorlds.CampaignSystem/Party/MobilePartyAi.cs:1110 | `bool flag = ... && this._mobileParty.Position.Distance(v) < Campaign.Current.Models.MobilePartyAIModel.SettlementDefendingNearbyPartyCheckRadius;` — settlement defense proximity check. |
| 8 | `gameStarter.AddModel<MobilePartyAIModel>(new DefaultMobilePartyAIModel())` | TaleWorlds.CampaignSystem/SandBoxManager.cs:347 | `gameStarter.AddModel<MobilePartyAIModel>(new DefaultMobilePartyAIModel());` — model registration at game start. |

**Mod-relevant call pattern:** Access via `Campaign.Current.Models.MobilePartyAIModel`. Mods replace with `Game.Current.ReplaceModel<DefaultMobilePartyAIModel>(new MyModel())` or subclass `MobilePartyAIModel` and override individual tuning properties (AiCheckInterval, patrol distances, food threshold) or decision methods (ShouldConsiderAttacking, GetBestInitiativeBehavior).

## 4. Current page status

- **Page path:** `content/v1.3.0/zh/api/campaign/DefaultMobilePartyAIModel.md`
- **Byte count:** 4283 bytes
- **classifyPage result:** `stub` — reasons: `boilerplate-mental-model`, `weak-mental`, `weak-deps`
- **Six-section completeness:**

| Section | Present? | Notes |
|---------|----------|-------|
| 概述 (Overview) | ✅ | Boilerplate rule-model phrasing |
| 心智模型 (Mental Model) | ✅ | Boilerplate "Model 型扩展点" phrasing |
| 主要属性 (Properties) | ✅ | 9 tuning properties listed |
| 主要方法 (Methods) | ✅ | 5 methods, formulaic purposes |
| 使用示例 (Examples) | ✅ | Generic `... = ...;` snippet |
| 参见 (See Also) | ✅ | Link to parent dir only |

**Verdict:** 6/6 sections present but all template-generated. All 14 public members listed (9 properties + 5 methods). Missing: the dynamic radius formulas (FleeToNearbyPartyRadius depends on EncounterModel + party speed), the AI decision pipeline (GetBestInitiativeBehavior's strength-ratio and stance-score logic), the patrol radius calculation by settlement type, real call-site evidence (MobilePartyAi/AiMilitaryBehavior), and the model registration in SandBoxManager.
