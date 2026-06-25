---
title: "CharacterDevelopmentModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CharacterDevelopmentModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CharacterDevelopmentModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CharacterDevelopmentModel : MBGameModel<CharacterDevelopmentModel>`
**Base:** `MBGameModel<CharacterDevelopmentModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CharacterDevelopmentModel.cs`

## 概述

`CharacterDevelopmentModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `CharacterDevelopmentModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MaxAttribute` | `public abstract int MaxAttribute { get; }` |
| `MaxFocusPerSkill` | `public abstract int MaxFocusPerSkill { get; }` |
| `MaxSkillRequiredForEpicPerkBonus` | `public abstract int MaxSkillRequiredForEpicPerkBonus { get; }` |
| `MinSkillRequiredForEpicPerkBonus` | `public abstract int MinSkillRequiredForEpicPerkBonus { get; }` |
| `FocusPointsPerLevel` | `public abstract int FocusPointsPerLevel { get; }` |
| `FocusPointsAtStart` | `public abstract int FocusPointsAtStart { get; }` |
| `AttributePointsAtStart` | `public abstract int AttributePointsAtStart { get; }` |
| `LevelsPerAttributePoint` | `public abstract int LevelsPerAttributePoint { get; }` |

## 主要方法

### SkillsRequiredForLevel
`public abstract int SkillsRequiredForLevel(int level)`

**用途 / Purpose:** 处理 `skills required for level` 相关逻辑。

### GetMaxSkillPoint
`public abstract int GetMaxSkillPoint()`

**用途 / Purpose:** 获取 `max skill point` 的当前值。

### GetXpRequiredForSkillLevel
`public abstract int GetXpRequiredForSkillLevel(int skillLevel)`

**用途 / Purpose:** 获取 `xp required for skill level` 的当前值。

### GetSkillLevelChange
`public abstract int GetSkillLevelChange(Hero hero, SkillObject skill, float skillXp)`

**用途 / Purpose:** 获取 `skill level change` 的当前值。

### GetXpAmountForSkillLevelChange
`public abstract int GetXpAmountForSkillLevelChange(Hero hero, SkillObject skill, int skillLevelChange)`

**用途 / Purpose:** 获取 `xp amount for skill level change` 的当前值。

### GetTraitLevelForTraitXp
`public abstract void GetTraitLevelForTraitXp(Hero hero, TraitObject trait, int newValue, out int traitLevel, out int traitXp)`

**用途 / Purpose:** 获取 `trait level for trait xp` 的当前值。

### GetTraitXpRequiredForTraitLevel
`public abstract int GetTraitXpRequiredForTraitLevel(TraitObject trait, int traitLevel)`

**用途 / Purpose:** 获取 `trait xp required for trait level` 的当前值。

### CalculateLearningLimit
`public abstract ExplainedNumber CalculateLearningLimit(IReadOnlyPropertyOwner<CharacterAttribute> characterAttributes, int focusValue, SkillObject skill, bool includeDescriptions = false)`

**用途 / Purpose:** 处理 `calculate learning limit` 相关逻辑。

### CalculateLearningRate
`public abstract ExplainedNumber CalculateLearningRate(IReadOnlyPropertyOwner<CharacterAttribute> characterAttributes, int focusValue, int skillValue, SkillObject skill, bool includeDescriptions = false)`

**用途 / Purpose:** 处理 `calculate learning rate` 相关逻辑。

### GetNextSkillToAddFocus
`public abstract SkillObject GetNextSkillToAddFocus(Hero hero)`

**用途 / Purpose:** 获取 `next skill to add focus` 的当前值。

### GetNextAttributeToUpgrade
`public abstract CharacterAttribute GetNextAttributeToUpgrade(Hero hero)`

**用途 / Purpose:** 获取 `next attribute to upgrade` 的当前值。

### GetNextPerkToChoose
`public abstract PerkObject GetNextPerkToChoose(Hero hero, PerkObject perk)`

**用途 / Purpose:** 获取 `next perk to choose` 的当前值。

## 使用示例

```csharp
var implementation = new CustomCharacterDevelopmentModel();
```

## 参见

- [完整类目录](../catalog)