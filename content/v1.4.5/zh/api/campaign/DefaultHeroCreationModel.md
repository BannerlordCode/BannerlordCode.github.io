---
title: "DefaultHeroCreationModel"
description: "DefaultHeroCreationModel 的自动生成类参考。"
---
# DefaultHeroCreationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultHeroCreationModel : HeroCreationModel`
**Base:** `HeroCreationModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultHeroCreationModel.cs`

## 概述

`DefaultHeroCreationModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultHeroCreationModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetBornSettlement
`public override Settlement GetBornSettlement(Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 「born settlement」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultHeroCreationModel 实例
DefaultHeroCreationModel defaultHeroCreationModel = ...;
var result = defaultHeroCreationModel.GetBornSettlement(hero);
```

### GetStaticBodyProperties
`public override StaticBodyProperties GetStaticBodyProperties(Hero hero, bool isOffspring, float variationAmount = 0.35f)`

**用途 / Purpose:** 读取并返回当前对象中 「static body properties」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultHeroCreationModel 实例
DefaultHeroCreationModel defaultHeroCreationModel = ...;
var result = defaultHeroCreationModel.GetStaticBodyProperties(hero, false, 0);
```

### GetPreferredUpgradeFormation
`public override FormationClass GetPreferredUpgradeFormation(Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 「preferred upgrade formation」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultHeroCreationModel 实例
DefaultHeroCreationModel defaultHeroCreationModel = ...;
var result = defaultHeroCreationModel.GetPreferredUpgradeFormation(hero);
```

### GetClan
`public override Clan GetClan(Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 「clan」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultHeroCreationModel 实例
DefaultHeroCreationModel defaultHeroCreationModel = ...;
var result = defaultHeroCreationModel.GetClan(hero);
```

### GetCulture
`public override CultureObject GetCulture(Hero hero, Settlement bornSettlement, Clan clan)`

**用途 / Purpose:** 读取并返回当前对象中 「culture」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultHeroCreationModel 实例
DefaultHeroCreationModel defaultHeroCreationModel = ...;
var result = defaultHeroCreationModel.GetCulture(hero, bornSettlement, clan);
```

### GetRandomTemplateByOccupation
`public override CharacterObject GetRandomTemplateByOccupation(Occupation occupation, Settlement settlement = null)`

**用途 / Purpose:** 读取并返回当前对象中 「random template by occupation」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultHeroCreationModel 实例
DefaultHeroCreationModel defaultHeroCreationModel = ...;
var result = defaultHeroCreationModel.GetRandomTemplateByOccupation(occupation, null);
```

### GetCivilianEquipment
`public override Equipment GetCivilianEquipment(Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 「civilian equipment」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultHeroCreationModel 实例
DefaultHeroCreationModel defaultHeroCreationModel = ...;
var result = defaultHeroCreationModel.GetCivilianEquipment(hero);
```

### GetBattleEquipment
`public override Equipment GetBattleEquipment(Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 「battle equipment」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultHeroCreationModel 实例
DefaultHeroCreationModel defaultHeroCreationModel = ...;
var result = defaultHeroCreationModel.GetBattleEquipment(hero);
```

### GetCharacterTemplateForOffspring
`public override CharacterObject GetCharacterTemplateForOffspring(Hero mother, Hero father, bool isOffspringFemale)`

**用途 / Purpose:** 读取并返回当前对象中 「character template for offspring」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultHeroCreationModel 实例
DefaultHeroCreationModel defaultHeroCreationModel = ...;
var result = defaultHeroCreationModel.GetCharacterTemplateForOffspring(mother, father, false);
```

### IsHeroCombatant
`public override bool IsHeroCombatant(Hero hero)`

**用途 / Purpose:** 判断当前对象是否处于 「hero combatant」 状态或条件。

```csharp
// 先通过子系统 API 拿到 DefaultHeroCreationModel 实例
DefaultHeroCreationModel defaultHeroCreationModel = ...;
var result = defaultHeroCreationModel.IsHeroCombatant(hero);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultHeroCreationModel>(new MyDefaultHeroCreationModel());
```

## 参见

- [本区域目录](../)