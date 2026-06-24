<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `HeroCreationModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 获取 `birth and death day` 的当前值。

### GetBornSettlement
`public abstract Settlement GetBornSettlement(Hero character)`

**用途 / Purpose:** 获取 `born settlement` 的当前值。

### GetStaticBodyProperties
`public abstract StaticBodyProperties GetStaticBodyProperties(Hero character, bool isOffspring, float variationAmount = 0.35f)`

**用途 / Purpose:** 获取 `static body properties` 的当前值。

### GetPreferredUpgradeFormation
`public abstract FormationClass GetPreferredUpgradeFormation(Hero character)`

**用途 / Purpose:** 获取 `preferred upgrade formation` 的当前值。

### GetClan
`public abstract Clan GetClan(Hero character)`

**用途 / Purpose:** 获取 `clan` 的当前值。

### GetCulture
`public abstract CultureObject GetCulture(Hero hero, Settlement bornSettlement, Clan clan)`

**用途 / Purpose:** 获取 `culture` 的当前值。

### GetRandomTemplateByOccupation
`public abstract CharacterObject GetRandomTemplateByOccupation(Occupation occupation, Settlement settlement = null)`

**用途 / Purpose:** 获取 `random template by occupation` 的当前值。

### GetTraitsForHero
`public abstract List<ValueTuple<TraitObject, int>> GetTraitsForHero(Hero hero)`

**用途 / Purpose:** 获取 `traits for hero` 的当前值。

### GetCivilianEquipment
`public abstract Equipment GetCivilianEquipment(Hero hero)`

**用途 / Purpose:** 获取 `civilian equipment` 的当前值。

### GetBattleEquipment
`public abstract Equipment GetBattleEquipment(Hero hero)`

**用途 / Purpose:** 获取 `battle equipment` 的当前值。

### GetCharacterTemplateForOffspring
`public abstract CharacterObject GetCharacterTemplateForOffspring(Hero mother, Hero father, bool isOffspringFemale)`

**用途 / Purpose:** 获取 `character template for offspring` 的当前值。

### GenerateFirstAndFullName
`public abstract ValueTuple<TextObject, TextObject> GenerateFirstAndFullName(Hero hero)`

**用途 / Purpose:** 处理 `generate first and full name` 相关逻辑。

### GetDefaultSkillsForHero
`public abstract List<ValueTuple<SkillObject, int>> GetDefaultSkillsForHero(Hero hero)`

**用途 / Purpose:** 获取 `default skills for hero` 的当前值。

### GetInheritedSkillsForHero
`public abstract List<ValueTuple<SkillObject, int>> GetInheritedSkillsForHero(Hero hero)`

**用途 / Purpose:** 获取 `inherited skills for hero` 的当前值。

### IsHeroCombatant
`public abstract bool IsHeroCombatant(Hero hero)`

**用途 / Purpose:** 处理 `is hero combatant` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomHeroCreationModel();
```

## 参见

- [完整类目录](../catalog)