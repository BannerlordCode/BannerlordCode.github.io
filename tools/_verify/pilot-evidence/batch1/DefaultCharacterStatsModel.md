# Evidence: DefaultCharacterStatsModel

## 1. Source file & class declaration

- **Path:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCharacterStatsModel.cs`
- **Class declaration:** line 11 — `public class DefaultCharacterStatsModel : CharacterStatsModel`
- **Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
- **Base class:** `CharacterStatsModel` (abstract, in `TaleWorlds.CampaignSystem.ComponentInterfaces`)

## 2. Per-member inventory

| # | Member | Signature | File:Line | Description |
|---|--------|-----------|-----------|-------------|
| 1 | `MaxCharacterTier` | `public override int MaxCharacterTier { get; }` | DefaultCharacterStatsModel.cs:15 | Returns the maximum character tier (hardcoded to 6). |
| 2 | `WoundedHitPointLimit` | `public override int WoundedHitPointLimit(Hero hero)` | DefaultCharacterStatsModel.cs:24 | Returns the HP limit below which a hero is considered wounded (hardcoded to 20). |
| 3 | `GetTier` | `public override int GetTier(CharacterObject character)` | DefaultCharacterStatsModel.cs:30 | Calculates tier from character level: `ceil((level-5)/5)` clamped to [0, MaxCharacterTier]; heroes always return 0. |
| 4 | `MaxHitpoints` | `public override ExplainedNumber MaxHitpoints(CharacterObject character, bool includeDescriptions = false)` | DefaultCharacterStatsModel.cs:40 | Calculates max HP starting from 100, adding perk bonuses (Trainer, UnwaveringDefense, ThickHides, WellBuilt, PreventiveMedicine, DoctorsOath, FortitudeTonic, MightyBlow). |

## 3. Call example candidates (≥3)

| # | Call Site | File:Line | Code |
|---|-----------|-----------|------|
| 1 | `RecruitmentCampaignBehavior` | TaleWorlds.CampaignSystem/CampaignBehaviors/RecruitmentCampaignBehavior.cs:300 | `int tier = Campaign.Current.Models.CharacterStatsModel.GetTier(character);` |
| 2 | `RecruitmentCampaignBehavior` | TaleWorlds.CampaignSystem/CampaignBehaviors/RecruitmentCampaignBehavior.cs:301 | `int maxCharacterTier = Campaign.Current.Models.CharacterStatsModel.MaxCharacterTier;` |
| 3 | `CharacterObject` | TaleWorlds.CampaignSystem/CharacterObject.cs:327 | `return MathF.Round(Campaign.Current.Models.CharacterStatsModel.MaxHitpoints(this, false).ResultNumber);` |
| 4 | `CharacterObject` | TaleWorlds.CampaignSystem/CharacterObject.cs:336 | `return Campaign.Current.Models.CharacterStatsModel.MaxHitpoints(this, true);` |
| 5 | `Hero` | TaleWorlds.CampaignSystem/Hero.cs:679 | `return Campaign.Current.Models.CharacterStatsModel.WoundedHitPointLimit(this);` |
| 6 | `ConversationHelper` | TaleWorlds.CampaignSystem/Conversation/ConversationHelper.cs:290 | `if (characterObject.Tier == Campaign.Current.Models.CharacterStatsModel.MaxCharacterTier)` |

## 4. Current page status

- **Page path:** `content/v1.3.0/zh/api/campaign/DefaultCharacterStatsModel.md`
- **Byte count:** 2208 bytes
- **classifyPage result:** `stub` — reasons: `boilerplate-mental-model`, `weak-mental`, `weak-deps`
- **Six-section completeness:**

| Section | Present? | Notes |
|---------|----------|-------|
| 概述 (Overview) | ✅ | Boilerplate: "是一个规则模型，通常定义…" |
| 心智模型 (Mental Model) | ✅ | Boilerplate: "当作一个 Model 型扩展点来理解…" |
| 主要属性 (Properties) | ✅ | 1 property listed (MaxCharacterTier) |
| 主要方法 (Methods) | ✅ | 3 methods listed, formulaic purposes |
| 使用示例 (Examples) | ✅ | Generic `ReplaceModel` snippet |
| 参见 (See Also) | ✅ | Link to parent dir |

**Verdict:** All 6 sections exist but all are template-generated. Only 4 of 4 public members covered (complete inventory). Missing: real mental model explaining the tier/HP system, real call-site examples, dependency links to `CharacterStatsModel` base, `ExplainedNumber` pattern, perk interaction explanation.
