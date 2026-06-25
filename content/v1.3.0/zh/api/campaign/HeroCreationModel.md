---
title: "HeroCreationModel"
description: "HeroCreationModel 的自动生成类参考。"
---
# HeroCreationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class HeroCreationModel : MBGameModel<HeroCreationModel>`
**Base:** `MBGameModel<HeroCreationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/HeroCreationModel.cs`

## 概述

`HeroCreationModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `HeroCreationModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetBirthAndDeathDay
`public abstract ValueTuple<CampaignTime, CampaignTime> GetBirthAndDeathDay(CharacterObject character, bool createAlive, int age)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 birth and death day 的结果。

```csharp
// 先通过子系统 API 拿到 HeroCreationModel 实例
HeroCreationModel heroCreationModel = ...;
var result = heroCreationModel.GetBirthAndDeathDay(character, false, 0);
```

### GetBornSettlement
`public abstract Settlement GetBornSettlement(Hero character)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 born settlement 的结果。

```csharp
// 先通过子系统 API 拿到 HeroCreationModel 实例
HeroCreationModel heroCreationModel = ...;
var result = heroCreationModel.GetBornSettlement(character);
```

### GetStaticBodyProperties
`public abstract StaticBodyProperties GetStaticBodyProperties(Hero character, bool isOffspring, float variationAmount = 0.35f)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 static body properties 的结果。

```csharp
// 先通过子系统 API 拿到 HeroCreationModel 实例
HeroCreationModel heroCreationModel = ...;
var result = heroCreationModel.GetStaticBodyProperties(character, false, 0);
```

### GetPreferredUpgradeFormation
`public abstract FormationClass GetPreferredUpgradeFormation(Hero character)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 preferred upgrade formation 的结果。

```csharp
// 先通过子系统 API 拿到 HeroCreationModel 实例
HeroCreationModel heroCreationModel = ...;
var result = heroCreationModel.GetPreferredUpgradeFormation(character);
```

### GetClan
`public abstract Clan GetClan(Hero character)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 clan 的结果。

```csharp
// 先通过子系统 API 拿到 HeroCreationModel 实例
HeroCreationModel heroCreationModel = ...;
var result = heroCreationModel.GetClan(character);
```

### GetCulture
`public abstract CultureObject GetCulture(Hero hero, Settlement bornSettlement, Clan clan)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 culture 的结果。

```csharp
// 先通过子系统 API 拿到 HeroCreationModel 实例
HeroCreationModel heroCreationModel = ...;
var result = heroCreationModel.GetCulture(hero, bornSettlement, clan);
```

### GetRandomTemplateByOccupation
`public abstract CharacterObject GetRandomTemplateByOccupation(Occupation occupation, Settlement settlement = null)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 random template by occupation 的结果。

```csharp
// 先通过子系统 API 拿到 HeroCreationModel 实例
HeroCreationModel heroCreationModel = ...;
var result = heroCreationModel.GetRandomTemplateByOccupation(occupation, null);
```

### GetTraitsForHero
`public abstract List<ValueTuple<TraitObject, int>> GetTraitsForHero(Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 traits for hero 的结果。

```csharp
// 先通过子系统 API 拿到 HeroCreationModel 实例
HeroCreationModel heroCreationModel = ...;
var result = heroCreationModel.GetTraitsForHero(hero);
```

### GetCivilianEquipment
`public abstract Equipment GetCivilianEquipment(Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 civilian equipment 的结果。

```csharp
// 先通过子系统 API 拿到 HeroCreationModel 实例
HeroCreationModel heroCreationModel = ...;
var result = heroCreationModel.GetCivilianEquipment(hero);
```

### GetBattleEquipment
`public abstract Equipment GetBattleEquipment(Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 battle equipment 的结果。

```csharp
// 先通过子系统 API 拿到 HeroCreationModel 实例
HeroCreationModel heroCreationModel = ...;
var result = heroCreationModel.GetBattleEquipment(hero);
```

### GetCharacterTemplateForOffspring
`public abstract CharacterObject GetCharacterTemplateForOffspring(Hero mother, Hero father, bool isOffspringFemale)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 character template for offspring 的结果。

```csharp
// 先通过子系统 API 拿到 HeroCreationModel 实例
HeroCreationModel heroCreationModel = ...;
var result = heroCreationModel.GetCharacterTemplateForOffspring(mother, father, false);
```

### GenerateFirstAndFullName
`public abstract ValueTuple<TextObject, TextObject> GenerateFirstAndFullName(Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 生成first and full name的实例、数据或表示。

```csharp
// 先通过子系统 API 拿到 HeroCreationModel 实例
HeroCreationModel heroCreationModel = ...;
var result = heroCreationModel.GenerateFirstAndFullName(hero);
```

### GetDefaultSkillsForHero
`public abstract List<ValueTuple<SkillObject, int>> GetDefaultSkillsForHero(Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 default skills for hero 的结果。

```csharp
// 先通过子系统 API 拿到 HeroCreationModel 实例
HeroCreationModel heroCreationModel = ...;
var result = heroCreationModel.GetDefaultSkillsForHero(hero);
```

### GetInheritedSkillsForHero
`public abstract List<ValueTuple<SkillObject, int>> GetInheritedSkillsForHero(Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 inherited skills for hero 的结果。

```csharp
// 先通过子系统 API 拿到 HeroCreationModel 实例
HeroCreationModel heroCreationModel = ...;
var result = heroCreationModel.GetInheritedSkillsForHero(hero);
```

### IsHeroCombatant
`public abstract bool IsHeroCombatant(Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 hero combatant 状态或条件。

```csharp
// 先通过子系统 API 拿到 HeroCreationModel 实例
HeroCreationModel heroCreationModel = ...;
var result = heroCreationModel.IsHeroCombatant(hero);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
HeroCreationModel instance = ...;
```

## 参见

- [本区域目录](../)