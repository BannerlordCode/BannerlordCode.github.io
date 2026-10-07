# Evidence: DefaultTournamentModel

## 1. Source file & class declaration

- **Path:** `TaleWorlds.CampaignSystem/GameComponents/DefaultTournamentModel.cs`
- **Class declaration:** line 15 — `public class DefaultTournamentModel : TournamentModel`
- **Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
- **Base class:** `TournamentModel` (at `TaleWorlds.CampaignSystem/ComponentInterfaces/TournamentModel.cs`)
- **Constructor:** none (default)
- **Grep output:**
  ```
  15:	public class DefaultTournamentModel : TournamentModel
  19:		public override TournamentGame CreateTournament(Town town)
  24:		public override float GetTournamentStartChance(Town town)
  42:		public override int GetNumLeaderboardVictoriesAtGameStart()
  47:		public override float GetTournamentEndChance(TournamentGame tournament)
  55:		private bool SuitableForTournament(Hero hero)
  61:		public override float GetTournamentSimulationScore(CharacterObject character)
  70:		public override int GetRenownReward(Hero winner, Town town)
  82:		public override int GetInfluenceReward(Hero winner, Town town)
  87:		public override ValueTuple<SkillObject, int> GetSkillXpGainFromTournament(Town town)
  102:		public override Equipment GetParticipantArmor(CharacterObject participant)
  110:		public override MBList<ItemObject> GetRegularRewardItems(Town town, int regularRewardMinValue, int regularRewardMaxValue)
  137:		public override MBList<ItemObject> GetEliteRewardItems(Town town, int regularRewardMinValue, int regularRewardMaxValue)
  ```

## 2. Per-member inventory (all public members)

| # | Member | Signature | File:Line | Description |
|---|--------|-----------|-----------|-------------|
| 1 | `CreateTournament` | `public override TournamentGame CreateTournament(Town town)` | DefaultTournamentModel.cs:19 | Creates and returns a `FightTournamentGame` instance for the given town. |
| 2 | `GetTournamentStartChance` | `public override float GetTournamentStartChance(Town town)` | DefaultTournamentModel.cs:24 | Returns probability (0..1) of a tournament starting this week: 0 if siege active or week mismatch; otherwise 0.1 × (lord parties + suitable heroes − 2). |
| 3 | `GetNumLeaderboardVictoriesAtGameStart` | `public override int GetNumLeaderboardVictoriesAtGameStart()` | DefaultTournamentModel.cs:42 | Returns 500 — number of leaderboard victories assumed at game start for tournament ranking. |
| 4 | `GetTournamentEndChance` | `public override float GetTournamentEndChance(TournamentGame tournament)` | DefaultTournamentModel.cs:47 | Returns probability of tournament ending: max(0, (elapsedDays − 10) × 0.05) — tournaments last at least 10 days, then 5% chance per day. |
| 5 | `GetTournamentSimulationScore` | `public override float GetTournamentSimulationScore(CharacterObject character)` | DefaultTournamentModel.cs:61 | Returns combat effectiveness score: (hero ? 1 : 0.4) × (max(1H, 2H, Polearm) + Athletics + Riding) × 0.01. |
| 6 | `GetRenownReward` | `public override int GetRenownReward(Hero winner, Town town)` | DefaultTournamentModel.cs:70 | Returns renown reward: base 3, × Duelist perk bonus if present, + SelfPromoter perk bonus if present. |
| 7 | `GetInfluenceReward` | `public override int GetInfluenceReward(Hero winner, Town town)` | DefaultTournamentModel.cs:82 | Returns 0 — tournaments do not award influence in the base game. |
| 8 | `GetSkillXpGainFromTournament` | `public override ValueTuple<SkillObject, int> GetSkillXpGainFromTournament(Town town)` | DefaultTournamentModel.cs:87 | Returns random skill (20% each: 1H/2H/Polearm/Riding/Athletics) and 500 XP. |
| 9 | `GetParticipantArmor` | `public override Equipment GetParticipantArmor(CharacterObject participant)` | DefaultTournamentModel.cs:102 | Returns practice dummy armor (culture-specific) during non-tournament missions; otherwise the participant's random battle equipment. |
| 10 | `GetRegularRewardItems` | `public override MBList<ItemObject> GetRegularRewardItems(Town town, int regularRewardMinValue, int regularRewardMaxValue)` | DefaultTournamentModel.cs:110 | Returns items within value range: culture-matched crafted weapons/mountable/armor first, then banners (level 1-2), then non-culture items as fallback. |
| 11 | `GetEliteRewardItems` | `public override MBList<ItemObject> GetEliteRewardItems(Town town, int regularRewardMinValue, int regularRewardMaxValue)` | DefaultTournamentModel.cs:137 | Returns a hardcoded list of 31 elite items (t3 weapons, noble horses, rare armors/helmets). |

Private helper: `SuitableForTournament` (:55) — checks hero age ≥ HeroComesOfAge and max(1H, 2H) skill > 100.

## 3. Call example candidates (≥3)

| # | Call Site | File:Line | Evidence |
|---|-----------|-----------|----------|
| 1 | `Campaign.Current.Models.TournamentModel.GetTournamentStartChance(town)` | TaleWorlds.CampaignSystem/TournamentGames/TournamentCampaignBehavior.cs:149 | `if (MBRandom.RandomFloat < Campaign.Current.Models.TournamentModel.GetTournamentStartChance(town))` — weekly tournament start roll. |
| 2 | `Campaign.Current.Models.TournamentModel.CreateTournament(town)` | TaleWorlds.CampaignSystem/TournamentGames/TournamentCampaignBehavior.cs:151 | `tournamentManager.AddTournament(Campaign.Current.Models.TournamentModel.CreateTournament(town));` — tournament creation. |
| 3 | `Campaign.Current.Models.TournamentModel.GetTournamentEndChance(tournamentGame)` | TaleWorlds.CampaignSystem/TournamentGames/TournamentCampaignBehavior.cs:161 | `else if (... && MBRandom.RandomFloat < Campaign.Current.Models.TournamentModel.GetTournamentEndChance(tournamentGame))` — tournament end roll. |
| 4 | `Campaign.Current.Models.TournamentModel.GetRenownReward(winner.HeroObject, town)` | TaleWorlds.CampaignSystem/TournamentGames/TournamentCampaignBehavior.cs:173 | `winner.HeroObject.Clan.AddRenown((float)Campaign.Current.Models.TournamentModel.GetRenownReward(winner.HeroObject, town), true);` — renown award. |
| 5 | `Campaign.Current.Models.TournamentModel.GetTournamentSimulationScore(hero.CharacterObject)` | TaleWorlds.CampaignSystem/TournamentGames/TournamentCampaignBehavior.cs:181 | `return Campaign.Current.Models.TournamentModel.GetTournamentSimulationScore(hero.CharacterObject);` — simulation score for AI. |
| 6 | `Campaign.Current.Models.TournamentModel.GetSkillXpGainFromTournament(town)` | TaleWorlds.CampaignSystem/TournamentGames/TournamentManager.cs:186 | `ValueTuple<SkillObject, int> skillXpGainFromTournament = Campaign.Current.Models.TournamentModel.GetSkillXpGainFromTournament(town);` — skill XP award. |
| 7 | `Campaign.Current.Models.TournamentModel.GetRegularRewardItems(base.Town, 1600, 5000)` | TaleWorlds.CampaignSystem/TournamentGames/FightTournamentGame.cs:371 | `List<ItemObject> regularRewardItems = Campaign.Current.Models.TournamentModel.GetRegularRewardItems(base.Town, 1600, 5000);` — reward item pool. |
| 8 | `Campaign.Current.Models.TournamentModel.GetParticipantArmor(troop)` | SandBox/Missions/MissionLogics/Arena/ArenaPracticeFightMissionController.cs:347 | `Equipment participantArmor = Campaign.Current.Models.TournamentModel.GetParticipantArmor(troop);` — arena practice fight armor. |
| 9 | `gameStarter.AddModel<TournamentModel>(new DefaultTournamentModel())` | TaleWorlds.CampaignSystem/SandBoxManager.cs:319 | `gameStarter.AddModel<TournamentModel>(new DefaultTournamentModel());` — model registration at game start. |

**Mod-relevant call pattern:** Access via `Campaign.Current.Models.TournamentModel`. Mods replace with `Game.Current.ReplaceModel<DefaultTournamentModel>(new MyModel())` or subclass `TournamentModel` and override individual methods (GetTournamentStartChance, GetRenownReward, GetRegularRewardItems, GetEliteRewardItems, etc.).

## 4. Current page status

- **Page path:** `content/v1.3.0/zh/api/campaign/DefaultTournamentModel.md`
- **Byte count:** 5310 bytes
- **classifyPage result:** `stub` — reasons: `boilerplate-mental-model`, `weak-mental`, `weak-deps`
- **Six-section completeness:**

| Section | Present? | Notes |
|---------|----------|-------|
| 概述 (Overview) | ✅ | Boilerplate rule-model phrasing |
| 心智模型 (Mental Model) | ✅ | Boilerplate "Model 型扩展点" phrasing |
| 主要属性 (Properties) | ✅ | None (no properties in this class) |
| 主要方法 (Methods) | ✅ | 11 methods, formulaic purposes |
| 使用示例 (Examples) | ✅ | Generic `... = ...;` snippet |
| 参见 (See Also) | ✅ | Link to parent dir only |

**Verdict:** 6/6 sections present but all template-generated. All 11 public members listed. Missing: the tournament lifecycle (start chance formula, end chance formula, minimum 10-day duration), the simulation score formula, the reward item selection logic (culture matching, value range, banner items), the hardcoded elite item list, real call-site evidence (TournamentCampaignBehavior/FightTournamentGame/TournamentManager), and the model registration in SandBoxManager.
