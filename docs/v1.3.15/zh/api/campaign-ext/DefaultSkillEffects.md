<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultSkillEffects`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultSkillEffects

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSkillEffects`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/DefaultSkillEffects.cs`

## 概述

`DefaultSkillEffects` 位于 `TaleWorlds.CampaignSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `OneHandedSpeed` | `public static SkillEffect OneHandedSpeed { get; }` |
| `OneHandedDamage` | `public static SkillEffect OneHandedDamage { get; }` |
| `TwoHandedSpeed` | `public static SkillEffect TwoHandedSpeed { get; }` |
| `TwoHandedDamage` | `public static SkillEffect TwoHandedDamage { get; }` |
| `PolearmSpeed` | `public static SkillEffect PolearmSpeed { get; }` |
| `PolearmDamage` | `public static SkillEffect PolearmDamage { get; }` |
| `BowDamage` | `public static SkillEffect BowDamage { get; }` |
| `BowAccuracy` | `public static SkillEffect BowAccuracy { get; }` |
| `ThrowingSpeed` | `public static SkillEffect ThrowingSpeed { get; }` |
| `ThrowingDamage` | `public static SkillEffect ThrowingDamage { get; }` |
| `ThrowingAccuracy` | `public static SkillEffect ThrowingAccuracy { get; }` |
| `CrossbowReloadSpeed` | `public static SkillEffect CrossbowReloadSpeed { get; }` |
| `CrossbowAccuracy` | `public static SkillEffect CrossbowAccuracy { get; }` |
| `HorseSpeed` | `public static SkillEffect HorseSpeed { get; }` |
| `HorseManeuver` | `public static SkillEffect HorseManeuver { get; }` |
| `MountedWeaponDamagePenalty` | `public static SkillEffect MountedWeaponDamagePenalty { get; }` |
| `MountedWeaponSpeedPenalty` | `public static SkillEffect MountedWeaponSpeedPenalty { get; }` |
| `DismountResistance` | `public static SkillEffect DismountResistance { get; }` |
| `AthleticsSpeedFactor` | `public static SkillEffect AthleticsSpeedFactor { get; }` |
| `AthleticsWeightFactor` | `public static SkillEffect AthleticsWeightFactor { get; }` |
| `KnockBackResistance` | `public static SkillEffect KnockBackResistance { get; }` |
| `KnockDownResistance` | `public static SkillEffect KnockDownResistance { get; }` |
| `SmithingLevel` | `public static SkillEffect SmithingLevel { get; }` |
| `TacticsAdvantage` | `public static SkillEffect TacticsAdvantage { get; }` |
| `TacticsTroopSacrificeReduction` | `public static SkillEffect TacticsTroopSacrificeReduction { get; }` |
| `TrackingRadius` | `public static SkillEffect TrackingRadius { get; }` |
| `TrackingSpottingDistance` | `public static SkillEffect TrackingSpottingDistance { get; }` |
| `TrackingTrackInformation` | `public static SkillEffect TrackingTrackInformation { get; }` |
| `RogueryLootBonus` | `public static SkillEffect RogueryLootBonus { get; }` |
| `CharmRelationBonus` | `public static SkillEffect CharmRelationBonus { get; }` |
| `TradePenaltyReduction` | `public static SkillEffect TradePenaltyReduction { get; }` |
| `SurgeonSurvivalBonus` | `public static SkillEffect SurgeonSurvivalBonus { get; }` |
| `SiegeEngineProductionBonus` | `public static SkillEffect SiegeEngineProductionBonus { get; }` |
| `TownProjectBuildingBonus` | `public static SkillEffect TownProjectBuildingBonus { get; }` |
| `HealingRateBonusForHeroes` | `public static SkillEffect HealingRateBonusForHeroes { get; }` |
| `HealingRateBonusForRegulars` | `public static SkillEffect HealingRateBonusForRegulars { get; }` |
| `GovernorHealingRateBonus` | `public static SkillEffect GovernorHealingRateBonus { get; }` |
| `LeadershipMoraleBonus` | `public static SkillEffect LeadershipMoraleBonus { get; }` |
| `LeadershipGarrisonSizeBonus` | `public static SkillEffect LeadershipGarrisonSizeBonus { get; }` |
| `StewardPartySizeBonus` | `public static SkillEffect StewardPartySizeBonus { get; }` |
| `SneakDamage` | `public static SkillEffect SneakDamage { get; }` |
| `CrouchedSpeed` | `public static SkillEffect CrouchedSpeed { get; }` |
| `NoiseSuppression` | `public static SkillEffect NoiseSuppression { get; }` |

## 使用示例

```csharp
var value = new DefaultSkillEffects();
```

## 参见

- [完整类目录](../catalog)