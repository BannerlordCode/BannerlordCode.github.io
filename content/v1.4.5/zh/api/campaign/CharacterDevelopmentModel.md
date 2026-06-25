---
title: "CharacterDevelopmentModel"
description: "CharacterDevelopmentModel 的自动生成类参考。"
---
# CharacterDevelopmentModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CharacterDevelopmentModel : MBGameModel<CharacterDevelopmentModel>`
**Base:** `MBGameModel<CharacterDevelopmentModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/CharacterDevelopmentModel.cs`

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

**用途 / Purpose:** **用途 / Purpose:** 调用 SkillsRequiredForLevel 对应的操作。

```csharp
// 先通过子系统 API 拿到 CharacterDevelopmentModel 实例
CharacterDevelopmentModel characterDevelopmentModel = ...;
var result = characterDevelopmentModel.SkillsRequiredForLevel(0);
```

### GetMaxSkillPoint
`public abstract int GetMaxSkillPoint()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 max skill point 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterDevelopmentModel 实例
CharacterDevelopmentModel characterDevelopmentModel = ...;
var result = characterDevelopmentModel.GetMaxSkillPoint();
```

### GetXpRequiredForSkillLevel
`public abstract int GetXpRequiredForSkillLevel(int skillLevel)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 xp required for skill level 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterDevelopmentModel 实例
CharacterDevelopmentModel characterDevelopmentModel = ...;
var result = characterDevelopmentModel.GetXpRequiredForSkillLevel(0);
```

### GetSkillLevelChange
`public abstract int GetSkillLevelChange(Hero hero, SkillObject skill, float skillXp)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 skill level change 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterDevelopmentModel 实例
CharacterDevelopmentModel characterDevelopmentModel = ...;
var result = characterDevelopmentModel.GetSkillLevelChange(hero, skill, 0);
```

### GetXpAmountForSkillLevelChange
`public abstract int GetXpAmountForSkillLevelChange(Hero hero, SkillObject skill, int skillLevelChange)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 xp amount for skill level change 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterDevelopmentModel 实例
CharacterDevelopmentModel characterDevelopmentModel = ...;
var result = characterDevelopmentModel.GetXpAmountForSkillLevelChange(hero, skill, 0);
```

### GetTraitLevelForTraitXp
`public abstract void GetTraitLevelForTraitXp(Hero hero, TraitObject trait, int newValue, out int traitLevel, out int traitXp)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 trait level for trait xp 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterDevelopmentModel 实例
CharacterDevelopmentModel characterDevelopmentModel = ...;
characterDevelopmentModel.GetTraitLevelForTraitXp(hero, trait, 0, traitLevel, traitXp);
```

### GetTraitXpRequiredForTraitLevel
`public abstract int GetTraitXpRequiredForTraitLevel(TraitObject trait, int traitLevel)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 trait xp required for trait level 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterDevelopmentModel 实例
CharacterDevelopmentModel characterDevelopmentModel = ...;
var result = characterDevelopmentModel.GetTraitXpRequiredForTraitLevel(trait, 0);
```

### CalculateLearningLimit
`public abstract ExplainedNumber CalculateLearningLimit(IReadOnlyPropertyOwner<CharacterAttribute> characterAttributes, int focusValue, SkillObject skill, bool includeDescriptions = false)`

**用途 / Purpose:** **用途 / Purpose:** 计算learning limit的当前值或结果。

```csharp
// 先通过子系统 API 拿到 CharacterDevelopmentModel 实例
CharacterDevelopmentModel characterDevelopmentModel = ...;
var result = characterDevelopmentModel.CalculateLearningLimit(characterAttributes, 0, skill, false);
```

### CalculateLearningRate
`public abstract ExplainedNumber CalculateLearningRate(IReadOnlyPropertyOwner<CharacterAttribute> characterAttributes, int focusValue, int skillValue, SkillObject skill, bool includeDescriptions = false)`

**用途 / Purpose:** **用途 / Purpose:** 计算learning rate的当前值或结果。

```csharp
// 先通过子系统 API 拿到 CharacterDevelopmentModel 实例
CharacterDevelopmentModel characterDevelopmentModel = ...;
var result = characterDevelopmentModel.CalculateLearningRate(characterAttributes, 0, 0, skill, false);
```

### GetNextSkillToAddFocus
`public abstract SkillObject GetNextSkillToAddFocus(Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 next skill to add focus 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterDevelopmentModel 实例
CharacterDevelopmentModel characterDevelopmentModel = ...;
var result = characterDevelopmentModel.GetNextSkillToAddFocus(hero);
```

### GetNextAttributeToUpgrade
`public abstract CharacterAttribute GetNextAttributeToUpgrade(Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 next attribute to upgrade 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterDevelopmentModel 实例
CharacterDevelopmentModel characterDevelopmentModel = ...;
var result = characterDevelopmentModel.GetNextAttributeToUpgrade(hero);
```

### GetNextPerkToChoose
`public abstract PerkObject GetNextPerkToChoose(Hero hero, PerkObject perk)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 next perk to choose 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterDevelopmentModel 实例
CharacterDevelopmentModel characterDevelopmentModel = ...;
var result = characterDevelopmentModel.GetNextPerkToChoose(hero, perk);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
CharacterDevelopmentModel instance = ...;
```

## 参见

- [本区域目录](../)