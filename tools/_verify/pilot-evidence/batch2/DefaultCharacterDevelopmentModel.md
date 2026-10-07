# Evidence: DefaultCharacterDevelopmentModel

## 1. Source file & class declaration

- **Path:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCharacterDevelopmentModel.cs`
- **Class declaration:** line 15 — `public class DefaultCharacterDevelopmentModel : CharacterDevelopmentModel`
- **Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
- **Base class:** `CharacterDevelopmentModel` (at `TaleWorlds.CampaignSystem/ComponentInterfaces/CharacterDevelopmentModel.cs`)
- **Constructor:** line 17 — `public DefaultCharacterDevelopmentModel()` — calls `InitializeSkillsRequiredForLevel()` and `InitializeXpRequiredForSkillLevel()` to precompute the two XP tables.
- **Grep output:**
  ```
  17:		public DefaultCharacterDevelopmentModel()
  40:		public override int MaxFocusPerSkill
  50:		public override int MaxAttribute
  59:		public override int SkillsRequiredForLevel(int level)
  69:		public override int GetMaxSkillPoint()
  87:		public override int GetXpRequiredForSkillLevel(int skillLevel)
  101:		public override int GetSkillLevelChange(Hero hero, SkillObject skill, float skillXp)
  121:		public override int GetXpAmountForSkillLevelChange(Hero hero, SkillObject skill, int skillLevelChange)
  128:		public override void GetTraitLevelForTraitXp(Hero hero, TraitObject trait, int xpValue, out int traitLevel, out int clampedTraitXp)
  154:		public override int GetTraitXpRequiredForTraitLevel(TraitObject trait, int traitLevel)
  177:		public override int AttributePointsAtStart
  187:		public override int LevelsPerAttributePoint
  197:		public override int FocusPointsPerLevel
  207:		public override int FocusPointsAtStart
  217:		public override int MaxSkillRequiredForEpicPerkBonus
  227:		public override int MinSkillRequiredForEpicPerkBonus
  236:		public override ExplainedNumber CalculateLearningLimit(...)
  252:		public override ExplainedNumber CalculateLearningRate(...)
  274:		public override SkillObject GetNextSkillToAddFocus(Hero hero)
  295:		public override CharacterAttribute GetNextAttributeToUpgrade(Hero hero)
  350:		public override PerkObject GetNextPerkToChoose(Hero hero, PerkObject perk)
  ```

## 2. Per-member inventory (all public members)

| # | Member | Signature | File:Line | Description |
|---|--------|-----------|-----------|-------------|
| 1 | (ctor) | `public DefaultCharacterDevelopmentModel()` | DefaultCharacterDevelopmentModel.cs:17 | Precomputes `_skillsRequiredForLevel[63]` (quadratic growth, 1000 base +1000/level increment) and `_xpRequiredForSkillLevel[1024]` (30 base, +10/level linear increment) tables. |
| 2 | `MaxFocusPerSkill` | `public override int MaxFocusPerSkill { get; }` | DefaultCharacterDevelopmentModel.cs:40 | Returns 5 — max focus points assignable to a single skill. |
| 3 | `MaxAttribute` | `public override int MaxAttribute { get; }` | DefaultCharacterDevelopmentModel.cs:50 | Returns 10 — max value of a single character attribute. |
| 4 | `SkillsRequiredForLevel` | `public override int SkillsRequiredForLevel(int level)` | DefaultCharacterDevelopmentModel.cs:59 | Returns total XP required to reach `level` (from precomputed table; level > 62 returns `GetMaxSkillPoint()` = int.MaxValue). |
| 5 | `GetMaxSkillPoint` | `public override int GetMaxSkillPoint()` | DefaultCharacterDevelopmentModel.cs:69 | Returns `int.MaxValue` — sentinel for "unreachable" skill point totals. |
| 6 | `GetXpRequiredForSkillLevel` | `public override int GetXpRequiredForSkillLevel(int skillLevel)` | DefaultCharacterDevelopmentModel.cs:87 | Returns cumulative XP needed to advance a skill from 0 to `skillLevel` (clamped to 1024; ≤0 returns 0). |
| 7 | `GetSkillLevelChange` | `public override int GetSkillLevelChange(Hero hero, SkillObject skill, float skillXp)` | DefaultCharacterDevelopmentModel.cs:101 | Given current XP, returns how many skill levels the XP surplus actually buys (walks the XP table until surplus is exhausted). |
| 8 | `GetXpAmountForSkillLevelChange` | `public override int GetXpAmountForSkillLevelChange(Hero hero, SkillObject skill, int skillLevelChange)` | DefaultCharacterDevelopmentModel.cs:121 | Returns the XP delta between current skill value and `skillValue + skillLevelChange` (cost of the next N levels). |
| 9 | `GetTraitLevelForTraitXp` | `public override void GetTraitLevelForTraitXp(Hero hero, TraitObject trait, int xpValue, out int traitLevel, out int clampedTraitXp)` | DefaultCharacterDevelopmentModel.cs:128 | Maps raw trait XP to a trait level (-2..2) with clamping; thresholds are ±1000/±4000 (or ±2500/±6000 for traits with wider min/max). |
| 10 | `GetTraitXpRequiredForTraitLevel` | `public override int GetTraitXpRequiredForTraitLevel(TraitObject trait, int traitLevel)` | DefaultCharacterDevelopmentModel.cs:154 | Returns the XP value corresponding to a trait level: -4000 / -1000 / 0 / 1000 / 4000. |
| 11 | `AttributePointsAtStart` | `public override int AttributePointsAtStart { get; }` | DefaultCharacterDevelopmentModel.cs:177 | Returns 15 — attribute points granted at character creation. |
| 12 | `LevelsPerAttributePoint` | `public override int LevelsPerAttributePoint { get; }` | DefaultCharacterDevelopmentModel.cs:187 | Returns 4 — character levels needed to earn one attribute point. |
| 13 | `FocusPointsPerLevel` | `public override int FocusPointsPerLevel { get; }` | DefaultCharacterDevelopmentModel.cs:197 | Returns 1 — focus points earned per character level. |
| 14 | `FocusPointsAtStart` | `public override int FocusPointsAtStart { get; }` | DefaultCharacterDevelopmentModel.cs:207 | Returns 5 — focus points granted at character creation. |
| 15 | `MaxSkillRequiredForEpicPerkBonus` | `public override int MaxSkillRequiredForEpicPerkBonus { get; }` | DefaultCharacterDevelopmentModel.cs:217 | Returns 250 — skill value above which epic perks stop giving bonus. |
| 16 | `MinSkillRequiredForEpicPerkBonus` | `public override int MinSkillRequiredForEpicPerkBonus { get; }` | DefaultCharacterDevelopmentModel.cs:227 | Returns 200 — skill value at/above which epic perks start giving bonus. |
| 17 | `CalculateLearningLimit` | `public override ExplainedNumber CalculateLearningLimit(IReadOnlyPropertyOwner<CharacterAttribute> characterAttributes, int focusValue, SkillObject skill, bool includeDescriptions = false)` | DefaultCharacterDevelopmentModel.cs:236 | Computes the skill-value ceiling: avg of the skill's linked attributes × 10 + focus × 30. Learning rate above this limit is penalized. |
| 18 | `CalculateLearningRate` | `public override ExplainedNumber CalculateLearningRate(IReadOnlyPropertyOwner<CharacterAttribute> characterAttributes, int focusValue, int skillValue, SkillObject skill, bool includeDescriptions = false)` | DefaultCharacterDevelopmentModel.cs:252 | Core XP-rate formula: base 1.25 × (1 + 0.4 × avgAttribute) × (1 + focus) with an over-limit penalty of -(1 + 0.1 × excess) when skillValue > learning limit. |
| 19 | `GetNextSkillToAddFocus` | `public override SkillObject GetNextSkillToAddFocus(Hero hero)` | DefaultCharacterDevelopmentModel.cs:274 | Picks the skill with the largest gap between current value and its learning limit — the most efficient focus target. |
| 20 | `GetNextAttributeToUpgrade` | `public override CharacterAttribute GetNextAttributeToUpgrade(Hero hero)` | DefaultCharacterDevelopmentModel.cs:295 | Picks the attribute whose upgrade most raises total learning rate (weights skills using it, penalizes already-high attributes via sqrt ratio). |
| 21 | `GetNextPerkToChoose` | `public override PerkObject GetNextPerkToChoose(Hero hero, PerkObject perk)` | DefaultCharacterDevelopmentModel.cs:350 | 50/50 random pick between a perk and its `AlternativePerk` (if one exists). |

Private helpers: `InitializeSkillsRequiredForLevel` (:21), `InitializeXpRequiredForSkillLevel` (:75). Private consts: `MaxCharacterLevels=62`, `MaxSkillLevels=1024`, `BaseLearningRate=1.25f`, trait thresholds, etc. (:352-389).

## 3. Call example candidates (≥3)

| # | Call Site | File:Line | Evidence |
|---|-----------|-----------|----------|
| 1 | `Campaign.Current.Models.CharacterDevelopmentModel.GetXpRequiredForSkillLevel(skillValue)` | TaleWorlds.CampaignSystem/CharacterDevelopment/HeroDeveloper.cs:111 | `return MathF.Round(this.GetSkillXp(skill)) - Campaign.Current.Models.CharacterDevelopmentModel.GetXpRequiredForSkillLevel(skillValue);` — XP progress bar in the character screen. |
| 2 | `Campaign.Current.Models.CharacterDevelopmentModel.GetSkillLevelChange(this.Hero, skill, num3)` | TaleWorlds.CampaignSystem/CharacterDevelopment/HeroDeveloper.cs:241 | `int skillLevelChange = Campaign.Current.Models.CharacterDevelopmentModel.GetSkillLevelChange(this.Hero, skill, num3);` — applies pending XP and computes level-ups. |
| 3 | `Campaign.Current.Models.CharacterDevelopmentModel.CalculateLearningRate(...).ResultNumber` | TaleWorlds.CampaignSystem/CharacterDevelopment/HeroDeveloper.cs:264 | `return Campaign.Current.Models.CharacterDevelopmentModel.CalculateLearningRate(this.Hero.CharacterAttributes, this.GetFocus(skill), this.Hero.GetSkillValue(skill), skill, false).ResultNumber;` — `HeroDeveloper.GetLearningRate` used by UI and XP awards. |
| 4 | `Campaign.Current.Models.CharacterDevelopmentModel.GetNextAttributeToUpgrade(this.Hero)` | TaleWorlds.CampaignSystem/CharacterDevelopment/HeroDeveloper.cs:343 | `CharacterAttribute nextAttributeToUpgrade = Campaign.Current.Models.CharacterDevelopmentModel.GetNextAttributeToUpgrade(this.Hero);` — auto-spend attribute points. |
| 5 | `Campaign.Current.Models.CharacterDevelopmentModel.GetNextSkillToAddFocus(this.Hero)` | TaleWorlds.CampaignSystem/CharacterDevelopment/HeroDeveloper.cs:463 | `SkillObject nextSkillToAddFocus = Campaign.Current.Models.CharacterDevelopmentModel.GetNextSkillToAddFocus(this.Hero);` — auto-spend focus points. |
| 6 | `Campaign.Current.Models.CharacterDevelopmentModel.GetNextPerkToChoose(this.Hero, perkObject)` | TaleWorlds.CampaignSystem/CharacterDevelopment/HeroDeveloper.cs:485 | `PerkObject nextPerkToChoose = Campaign.Current.Models.CharacterDevelopmentModel.GetNextPerkToChoose(this.Hero, perkObject);` — perk choice randomization. |
| 7 | `Campaign.Current.Models.CharacterDevelopmentModel.GetTraitXpRequiredForTraitLevel(traitObject, traitLevel)` | TaleWorlds.CampaignSystem/CharacterDevelopment/TraitLevelingHelper.cs:22 | `int traitXpRequiredForTraitLevel = Campaign.Current.Models.CharacterDevelopmentModel.GetTraitXpRequiredForTraitLevel(traitObject, traitLevel);` — trait XP award/penalty application. |
| 8 | `Campaign.Current.Models.CharacterDevelopmentModel.GetTraitLevelForTraitXp(Hero.MainHero, trait, xpAmount, out num, out value)` | TaleWorlds.CampaignSystem/CharacterDevelopment/TraitLevelingHelper.cs:166 | `Campaign.Current.Models.CharacterDevelopmentModel.GetTraitLevelForTraitXp(Hero.MainHero, trait, xpAmount, out num, out value);` — trait level resolution after XP change. |
| 9 | `Campaign.Current.Models.CharacterDevelopmentModel.CalculateLearningRate(characterAttributes, focusValue, skillValue, skill, true)` | TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignUIHelper.cs:1062 | `ExplainedNumber explainedNumber = Campaign.Current.Models.CharacterDevelopmentModel.CalculateLearningRate(characterAttributes, focusValue, skillValue, skill, true);` — learning-rate tooltip with explanation. |
| 10 | `Campaign.Current.Models.CharacterDevelopmentModel.GetXpRequiredForSkillLevel(this.Level + 1) - ...GetXpRequiredForSkillLevel(this.Level)` | TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/SkillVM.cs:70 | `this.XpRequiredForNextLevel = Campaign.Current.Models.CharacterDevelopmentModel.GetXpRequiredForSkillLevel(this.Level + 1) - Campaign.Current.Models.CharacterDevelopmentModel.GetXpRequiredForSkillLevel(this.Level);` — per-level XP cost in the skill VM. |

**Mod-relevant call pattern:** Access via `Campaign.Current.Models.CharacterDevelopmentModel`. Mods replace with `Game.Current.ReplaceModel<DefaultCharacterDevelopmentModel>(new MyModel())` or subclass `CharacterDevelopmentModel` and override individual tuning properties (MaxAttribute, FocusPointsPerLevel, CalculateLearningRate, …).

## 4. Current page status

- **Page path:** `content/v1.3.0/zh/api/campaign/DefaultCharacterDevelopmentModel.md`
- **Byte count:** 7306 bytes
- **classifyPage result:** `stub` — reasons: `boilerplate-mental-model`, `weak-mental`, `weak-deps`
- **Six-section completeness:**

| Section | Present? | Notes |
|---------|----------|-------|
| 概述 (Overview) | ✅ | Boilerplate rule-model phrasing |
| 心智模型 (Mental Model) | ✅ | Boilerplate "Model 型扩展点" phrasing |
| 主要属性 (Properties) | ✅ | 8 tuning properties listed |
| 主要方法 (Methods) | ✅ | 13 methods, formulaic purposes |
| 使用示例 (Examples) | ✅ | Generic `Game.Current.ReplaceModel<>` snippet |
| 参见 (See Also) | ✅ | Link to parent dir only |

**Verdict:** 6/6 sections present but all template-generated. All 21 public members listed (13 methods + 8 properties). Missing: the two precomputed XP tables and their growth formulas, the learning-limit/learning-rate interaction (over-limit penalty), trait level thresholds, real call-site evidence (HeroDeveloper/TraitLevelingHelper/CampaignUIHelper/SkillVM), and the auto-spend logic in HeroDeveloper.
