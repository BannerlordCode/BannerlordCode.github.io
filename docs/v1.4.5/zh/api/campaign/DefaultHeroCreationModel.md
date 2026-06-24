<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultHeroCreationModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultHeroCreationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultHeroCreationModel : HeroCreationModel`
**Base:** `HeroCreationModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultHeroCreationModel.cs`

## 概述

`DefaultHeroCreationModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultHeroCreationModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetBornSettlement
`public override Settlement GetBornSettlement(Hero hero)`

**用途 / Purpose:** 获取 `born settlement` 的当前值。

### GetStaticBodyProperties
`public override StaticBodyProperties GetStaticBodyProperties(Hero hero, bool isOffspring, float variationAmount = 0.35f)`

**用途 / Purpose:** 获取 `static body properties` 的当前值。

### GetPreferredUpgradeFormation
`public override FormationClass GetPreferredUpgradeFormation(Hero hero)`

**用途 / Purpose:** 获取 `preferred upgrade formation` 的当前值。

### GetClan
`public override Clan GetClan(Hero hero)`

**用途 / Purpose:** 获取 `clan` 的当前值。

### GetCulture
`public override CultureObject GetCulture(Hero hero, Settlement bornSettlement, Clan clan)`

**用途 / Purpose:** 获取 `culture` 的当前值。

### GetRandomTemplateByOccupation
`public override CharacterObject GetRandomTemplateByOccupation(Occupation occupation, Settlement settlement = null)`

**用途 / Purpose:** 获取 `random template by occupation` 的当前值。

### GetCivilianEquipment
`public override Equipment GetCivilianEquipment(Hero hero)`

**用途 / Purpose:** 获取 `civilian equipment` 的当前值。

### GetBattleEquipment
`public override Equipment GetBattleEquipment(Hero hero)`

**用途 / Purpose:** 获取 `battle equipment` 的当前值。

### GetCharacterTemplateForOffspring
`public override CharacterObject GetCharacterTemplateForOffspring(Hero mother, Hero father, bool isOffspringFemale)`

**用途 / Purpose:** 获取 `character template for offspring` 的当前值。

### IsHeroCombatant
`public override bool IsHeroCombatant(Hero hero)`

**用途 / Purpose:** 处理 `is hero combatant` 相关逻辑。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultHeroCreationModel>(new MyDefaultHeroCreationModel());
```

## 参见

- [完整类目录](../catalog)