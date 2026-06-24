<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultCharacterDevelopmentModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultCharacterDevelopmentModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCharacterDevelopmentModel : CharacterDevelopmentModel`
**Base:** `CharacterDevelopmentModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultCharacterDevelopmentModel.cs`

## 概述

`DefaultCharacterDevelopmentModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultCharacterDevelopmentModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### InitializeSkillsRequiredForLevel
`public void InitializeSkillsRequiredForLevel()`

**用途 / Purpose:** 初始化 `skills required for level` 的状态、资源或绑定。

### InitializeXpRequiredForSkillLevel
`public void InitializeXpRequiredForSkillLevel()`

**用途 / Purpose:** 初始化 `xp required for skill level` 的状态、资源或绑定。

### SkillsRequiredForLevel
`public override int SkillsRequiredForLevel(int level)`

**用途 / Purpose:** 处理 `skills required for level` 相关逻辑。

### GetMaxSkillPoint
`public override int GetMaxSkillPoint()`

**用途 / Purpose:** 获取 `max skill point` 的当前值。

### GetXpRequiredForSkillLevel
`public override int GetXpRequiredForSkillLevel(int skillLevel)`

**用途 / Purpose:** 获取 `xp required for skill level` 的当前值。

### GetSkillLevelChange
`public override int GetSkillLevelChange(Hero hero, SkillObject skill, float skillXp)`

**用途 / Purpose:** 获取 `skill level change` 的当前值。

### GetXpAmountForSkillLevelChange
`public override int GetXpAmountForSkillLevelChange(Hero hero, SkillObject skill, int skillLevelChange)`

**用途 / Purpose:** 获取 `xp amount for skill level change` 的当前值。

### GetTraitLevelForTraitXp
`public override void GetTraitLevelForTraitXp(Hero hero, TraitObject trait, int xpValue, out int traitLevel, out int clampedTraitXp)`

**用途 / Purpose:** 获取 `trait level for trait xp` 的当前值。

### GetTraitXpRequiredForTraitLevel
`public override int GetTraitXpRequiredForTraitLevel(TraitObject trait, int traitLevel)`

**用途 / Purpose:** 获取 `trait xp required for trait level` 的当前值。

### CalculateLearningLimit
`public override ExplainedNumber CalculateLearningLimit(IReadOnlyPropertyOwner<CharacterAttribute> characterAttributes, int focusValue, SkillObject skill, bool includeDescriptions = false)`

**用途 / Purpose:** 处理 `calculate learning limit` 相关逻辑。

### CalculateLearningRate
`public override ExplainedNumber CalculateLearningRate(IReadOnlyPropertyOwner<CharacterAttribute> characterAttributes, int focusValue, int skillValue, SkillObject skill, bool includeDescriptions = false)`

**用途 / Purpose:** 处理 `calculate learning rate` 相关逻辑。

### GetNextSkillToAddFocus
`public override SkillObject GetNextSkillToAddFocus(Hero hero)`

**用途 / Purpose:** 获取 `next skill to add focus` 的当前值。

### GetNextAttributeToUpgrade
`public override CharacterAttribute GetNextAttributeToUpgrade(Hero hero)`

**用途 / Purpose:** 获取 `next attribute to upgrade` 的当前值。

### GetNextPerkToChoose
`public override PerkObject GetNextPerkToChoose(Hero hero, PerkObject perk)`

**用途 / Purpose:** 获取 `next perk to choose` 的当前值。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultCharacterDevelopmentModel>(new MyDefaultCharacterDevelopmentModel());
```

## 参见

- [完整类目录](../catalog)