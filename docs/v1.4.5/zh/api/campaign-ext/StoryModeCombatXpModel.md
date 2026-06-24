<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `StoryModeCombatXpModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# StoryModeCombatXpModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModeCombatXpModel : CombatXpModel`
**Base:** `CombatXpModel`
**File:** `Bannerlord.Source/Modules.StoryMode/StoryMode/StoryMode.GameComponents/StoryModeCombatXpModel.cs`

## 概述

`StoryModeCombatXpModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `StoryModeCombatXpModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetSkillForWeapon
`public override SkillObject GetSkillForWeapon(WeaponComponentData weapon, bool isSiegeEngineHit)`

**用途 / Purpose:** 获取 `skill for weapon` 的当前值。

### GetXpFromHit
`public override ExplainedNumber GetXpFromHit(CharacterObject attackerTroop, CharacterObject captain, CharacterObject attackedTroop, PartyBase attackerParty, int damage, bool isFatal, MissionTypeEnum missionType)`

**用途 / Purpose:** 获取 `xp from hit` 的当前值。

### GetXpMultiplierFromShotDifficulty
`public override float GetXpMultiplierFromShotDifficulty(float shotDifficulty)`

**用途 / Purpose:** 获取 `xp multiplier from shot difficulty` 的当前值。

## 使用示例

```csharp
Game.Current.ReplaceModel<StoryModeCombatXpModel>(new MyStoryModeCombatXpModel());
```

## 参见

- [完整类目录](../catalog)