<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `HeroCreationModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HeroCreationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class HeroCreationModel : MBGameModel<HeroCreationModel>`
**Base:** `MBGameModel<HeroCreationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/HeroCreationModel.cs`

## 概述

`HeroCreationModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<HeroCreationModel>(new MyHeroCreationModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetBirthAndDeathDay
```csharp
public abstract ValueTuple<CampaignTime, CampaignTime> GetBirthAndDeathDay(CharacterObject character, bool createAlive, int age)
```

### GetBornSettlement
```csharp
public abstract Settlement GetBornSettlement(Hero character)
```

### GetStaticBodyProperties
```csharp
public abstract StaticBodyProperties GetStaticBodyProperties(Hero character, bool isOffspring, float variationAmount = 0.35f)
```

### GetPreferredUpgradeFormation
```csharp
public abstract FormationClass GetPreferredUpgradeFormation(Hero character)
```

### GetClan
```csharp
public abstract Clan GetClan(Hero character)
```

### GetCulture
```csharp
public abstract CultureObject GetCulture(Hero hero, Settlement bornSettlement, Clan clan)
```

### GetRandomTemplateByOccupation
```csharp
public abstract CharacterObject GetRandomTemplateByOccupation(Occupation occupation, Settlement settlement = null)
```

### GetTraitsForHero
```csharp
public abstract List<ValueTuple<TraitObject, int>> GetTraitsForHero(Hero hero)
```

### GetCivilianEquipment
```csharp
public abstract Equipment GetCivilianEquipment(Hero hero)
```

### GetBattleEquipment
```csharp
public abstract Equipment GetBattleEquipment(Hero hero)
```

### GetCharacterTemplateForOffspring
```csharp
public abstract CharacterObject GetCharacterTemplateForOffspring(Hero mother, Hero father, bool isOffspringFemale)
```

### GenerateFirstAndFullName
```csharp
public abstract ValueTuple<TextObject, TextObject> GenerateFirstAndFullName(Hero hero)
```

### GetDefaultSkillsForHero
```csharp
public abstract List<ValueTuple<SkillObject, int>> GetDefaultSkillsForHero(Hero hero)
```

### GetInheritedSkillsForHero
```csharp
public abstract List<ValueTuple<SkillObject, int>> GetInheritedSkillsForHero(Hero hero)
```

### IsHeroCombatant
```csharp
public abstract bool IsHeroCombatant(Hero hero)
```

## 使用示例

```csharp
// HeroCreationModel (Model) 的典型用法
Game.Current.ReplaceModel<HeroCreationModel>(new MyHeroCreationModel());
```

## 参见

- [完整类目录](../catalog)