---
title: "DefaultCharacterDevelopmentModel"
description: "DefaultCharacterDevelopmentModel 的自动生成类参考。"
---
# DefaultCharacterDevelopmentModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCharacterDevelopmentModel : CharacterDevelopmentModel`
**Base:** `CharacterDevelopmentModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCharacterDevelopmentModel.cs`

## 概述

`DefaultCharacterDevelopmentModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultCharacterDevelopmentModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MaxFocusPerSkill` | `public override int MaxFocusPerSkill { get; }` |
| `MaxAttribute` | `public override int MaxAttribute { get; }` |
| `AttributePointsAtStart` | `public override int AttributePointsAtStart { get; }` |
| `LevelsPerAttributePoint` | `public override int LevelsPerAttributePoint { get; }` |
| `FocusPointsPerLevel` | `public override int FocusPointsPerLevel { get; }` |
| `FocusPointsAtStart` | `public override int FocusPointsAtStart { get; }` |
| `MaxSkillRequiredForEpicPerkBonus` | `public override int MaxSkillRequiredForEpicPerkBonus { get; }` |
| `MinSkillRequiredForEpicPerkBonus` | `public override int MinSkillRequiredForEpicPerkBonus { get; }` |

## 主要方法

### SkillsRequiredForLevel
`public override int SkillsRequiredForLevel(int level)`

**用途 / Purpose:** 处理与 「skills required for level」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 DefaultCharacterDevelopmentModel 实例
DefaultCharacterDevelopmentModel defaultCharacterDevelopmentModel = ...;
var result = defaultCharacterDevelopmentModel.SkillsRequiredForLevel(0);
```

### GetMaxSkillPoint
`public override int GetMaxSkillPoint()`

**用途 / Purpose:** 读取并返回当前对象中 「max skill point」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultCharacterDevelopmentModel 实例
DefaultCharacterDevelopmentModel defaultCharacterDevelopmentModel = ...;
var result = defaultCharacterDevelopmentModel.GetMaxSkillPoint();
```

### GetXpRequiredForSkillLevel
`public override int GetXpRequiredForSkillLevel(int skillLevel)`

**用途 / Purpose:** 读取并返回当前对象中 「xp required for skill level」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultCharacterDevelopmentModel 实例
DefaultCharacterDevelopmentModel defaultCharacterDevelopmentModel = ...;
var result = defaultCharacterDevelopmentModel.GetXpRequiredForSkillLevel(0);
```

### GetSkillLevelChange
`public override int GetSkillLevelChange(Hero hero, SkillObject skill, float skillXp)`

**用途 / Purpose:** 读取并返回当前对象中 「skill level change」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultCharacterDevelopmentModel 实例
DefaultCharacterDevelopmentModel defaultCharacterDevelopmentModel = ...;
var result = defaultCharacterDevelopmentModel.GetSkillLevelChange(hero, skill, 0);
```

### GetXpAmountForSkillLevelChange
`public override int GetXpAmountForSkillLevelChange(Hero hero, SkillObject skill, int skillLevelChange)`

**用途 / Purpose:** 读取并返回当前对象中 「xp amount for skill level change」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultCharacterDevelopmentModel 实例
DefaultCharacterDevelopmentModel defaultCharacterDevelopmentModel = ...;
var result = defaultCharacterDevelopmentModel.GetXpAmountForSkillLevelChange(hero, skill, 0);
```

### GetTraitLevelForTraitXp
`public override void GetTraitLevelForTraitXp(Hero hero, TraitObject trait, int xpValue, out int traitLevel, out int clampedTraitXp)`

**用途 / Purpose:** 读取并返回当前对象中 「trait level for trait xp」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultCharacterDevelopmentModel 实例
DefaultCharacterDevelopmentModel defaultCharacterDevelopmentModel = ...;
defaultCharacterDevelopmentModel.GetTraitLevelForTraitXp(hero, trait, 0, traitLevel, clampedTraitXp);
```

### GetTraitXpRequiredForTraitLevel
`public override int GetTraitXpRequiredForTraitLevel(TraitObject trait, int traitLevel)`

**用途 / Purpose:** 读取并返回当前对象中 「trait xp required for trait level」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultCharacterDevelopmentModel 实例
DefaultCharacterDevelopmentModel defaultCharacterDevelopmentModel = ...;
var result = defaultCharacterDevelopmentModel.GetTraitXpRequiredForTraitLevel(trait, 0);
```

### CalculateLearningLimit
`public override ExplainedNumber CalculateLearningLimit(IReadOnlyPropertyOwner<CharacterAttribute> characterAttributes, int focusValue, SkillObject skill, bool includeDescriptions = false)`

**用途 / Purpose:** 计算「learning limit」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultCharacterDevelopmentModel 实例
DefaultCharacterDevelopmentModel defaultCharacterDevelopmentModel = ...;
var result = defaultCharacterDevelopmentModel.CalculateLearningLimit(characterAttributes, 0, skill, false);
```

### CalculateLearningRate
`public override ExplainedNumber CalculateLearningRate(IReadOnlyPropertyOwner<CharacterAttribute> characterAttributes, int focusValue, int skillValue, SkillObject skill, bool includeDescriptions = false)`

**用途 / Purpose:** 计算「learning rate」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultCharacterDevelopmentModel 实例
DefaultCharacterDevelopmentModel defaultCharacterDevelopmentModel = ...;
var result = defaultCharacterDevelopmentModel.CalculateLearningRate(characterAttributes, 0, 0, skill, false);
```

### GetNextSkillToAddFocus
`public override SkillObject GetNextSkillToAddFocus(Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 「next skill to add focus」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultCharacterDevelopmentModel 实例
DefaultCharacterDevelopmentModel defaultCharacterDevelopmentModel = ...;
var result = defaultCharacterDevelopmentModel.GetNextSkillToAddFocus(hero);
```

### GetNextAttributeToUpgrade
`public override CharacterAttribute GetNextAttributeToUpgrade(Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 「next attribute to upgrade」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultCharacterDevelopmentModel 实例
DefaultCharacterDevelopmentModel defaultCharacterDevelopmentModel = ...;
var result = defaultCharacterDevelopmentModel.GetNextAttributeToUpgrade(hero);
```

### GetNextPerkToChoose
`public override PerkObject GetNextPerkToChoose(Hero hero, PerkObject perk)`

**用途 / Purpose:** 读取并返回当前对象中 「next perk to choose」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultCharacterDevelopmentModel 实例
DefaultCharacterDevelopmentModel defaultCharacterDevelopmentModel = ...;
var result = defaultCharacterDevelopmentModel.GetNextPerkToChoose(hero, perk);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultCharacterDevelopmentModel>(new MyDefaultCharacterDevelopmentModel());
```

## 参见

- [本区域目录](../)