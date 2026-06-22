<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CharacterDevelopmentModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CharacterDevelopmentModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CharacterDevelopmentModel : MBGameModel<CharacterDevelopmentModel>`
**Base:** `MBGameModel<CharacterDevelopmentModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CharacterDevelopmentModel.cs`

## 概述

`CharacterDevelopmentModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<CharacterDevelopmentModel>(new MyCharacterDevelopmentModel())` 注册，以改变其计算逻辑。

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
```csharp
public abstract int SkillsRequiredForLevel(int level)
```

### GetMaxSkillPoint
```csharp
public abstract int GetMaxSkillPoint()
```

### GetXpRequiredForSkillLevel
```csharp
public abstract int GetXpRequiredForSkillLevel(int skillLevel)
```

### GetSkillLevelChange
```csharp
public abstract int GetSkillLevelChange(Hero hero, SkillObject skill, float skillXp)
```

### GetXpAmountForSkillLevelChange
```csharp
public abstract int GetXpAmountForSkillLevelChange(Hero hero, SkillObject skill, int skillLevelChange)
```

### GetTraitLevelForTraitXp
```csharp
public abstract void GetTraitLevelForTraitXp(Hero hero, TraitObject trait, int newValue, out int traitLevel, out int traitXp)
```

### GetTraitXpRequiredForTraitLevel
```csharp
public abstract int GetTraitXpRequiredForTraitLevel(TraitObject trait, int traitLevel)
```

### CalculateLearningLimit
```csharp
public abstract ExplainedNumber CalculateLearningLimit(IReadOnlyPropertyOwner<CharacterAttribute> characterAttributes, int focusValue, SkillObject skill, bool includeDescriptions = false)
```

### CalculateLearningRate
```csharp
public abstract ExplainedNumber CalculateLearningRate(IReadOnlyPropertyOwner<CharacterAttribute> characterAttributes, int focusValue, int skillValue, SkillObject skill, bool includeDescriptions = false)
```

### GetNextSkillToAddFocus
```csharp
public abstract SkillObject GetNextSkillToAddFocus(Hero hero)
```

### GetNextAttributeToUpgrade
```csharp
public abstract CharacterAttribute GetNextAttributeToUpgrade(Hero hero)
```

### GetNextPerkToChoose
```csharp
public abstract PerkObject GetNextPerkToChoose(Hero hero, PerkObject perk)
```

## 使用示例

```csharp
// CharacterDevelopmentModel (Model) 的典型用法
Game.Current.ReplaceModel<CharacterDevelopmentModel>(new MyCharacterDevelopmentModel());
```

## 参见

- [完整类目录](../catalog)