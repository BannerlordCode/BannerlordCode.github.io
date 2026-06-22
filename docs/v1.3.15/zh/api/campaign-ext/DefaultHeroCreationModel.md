<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultHeroCreationModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultHeroCreationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultHeroCreationModel : HeroCreationModel`
**Base:** `HeroCreationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultHeroCreationModel.cs`

## 概述

`DefaultHeroCreationModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultHeroCreationModel>(new MyDefaultHeroCreationModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetBirthAndDeathDay
```csharp
public override ValueTuple<CampaignTime, CampaignTime> GetBirthAndDeathDay(CharacterObject character, bool createAlive, int age)
```

### GetBornSettlement
```csharp
public override Settlement GetBornSettlement(Hero hero)
```

### GetStaticBodyProperties
```csharp
public override StaticBodyProperties GetStaticBodyProperties(Hero hero, bool isOffspring, float variationAmount = 0.35f)
```

### GetPreferredUpgradeFormation
```csharp
public override FormationClass GetPreferredUpgradeFormation(Hero hero)
```

### GetClan
```csharp
public override Clan GetClan(Hero hero)
```

### GetCulture
```csharp
public override CultureObject GetCulture(Hero hero, Settlement bornSettlement, Clan clan)
```

### GetRandomTemplateByOccupation
```csharp
public override CharacterObject GetRandomTemplateByOccupation(Occupation occupation, Settlement settlement = null)
```

### GetTraitsForHero
```csharp
public override List<ValueTuple<TraitObject, int>> GetTraitsForHero(Hero hero)
```

### GetCivilianEquipment
```csharp
public override Equipment GetCivilianEquipment(Hero hero)
```

### GetBattleEquipment
```csharp
public override Equipment GetBattleEquipment(Hero hero)
```

### GetCharacterTemplateForOffspring
```csharp
public override CharacterObject GetCharacterTemplateForOffspring(Hero mother, Hero father, bool isOffspringFemale)
```

### GenerateFirstAndFullName
```csharp
public override ValueTuple<TextObject, TextObject> GenerateFirstAndFullName(Hero hero)
```

### GetDefaultSkillsForHero
```csharp
public override List<ValueTuple<SkillObject, int>> GetDefaultSkillsForHero(Hero hero)
```

### GetInheritedSkillsForHero
```csharp
public override List<ValueTuple<SkillObject, int>> GetInheritedSkillsForHero(Hero hero)
```

### IsHeroCombatant
```csharp
public override bool IsHeroCombatant(Hero hero)
```

## 使用示例

```csharp
// DefaultHeroCreationModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultHeroCreationModel>(new MyDefaultHeroCreationModel());
```

## 参见

- [完整类目录](../catalog)