<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultCharacterDevelopmentModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultCharacterDevelopmentModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCharacterDevelopmentModel : CharacterDevelopmentModel`
**Base:** `CharacterDevelopmentModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCharacterDevelopmentModel.cs`

## 概述

`DefaultCharacterDevelopmentModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultCharacterDevelopmentModel>(new MyDefaultCharacterDevelopmentModel())` 注册，以改变其计算逻辑。

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

### InitializeSkillsRequiredForLevel
```csharp
public void InitializeSkillsRequiredForLevel()
```

### InitializeXpRequiredForSkillLevel
```csharp
public void InitializeXpRequiredForSkillLevel()
```

### SkillsRequiredForLevel
```csharp
public override int SkillsRequiredForLevel(int level)
```

### GetMaxSkillPoint
```csharp
public override int GetMaxSkillPoint()
```

### GetXpRequiredForSkillLevel
```csharp
public override int GetXpRequiredForSkillLevel(int skillLevel)
```

### GetSkillLevelChange
```csharp
public override int GetSkillLevelChange(Hero hero, SkillObject skill, float skillXp)
```

### GetXpAmountForSkillLevelChange
```csharp
public override int GetXpAmountForSkillLevelChange(Hero hero, SkillObject skill, int skillLevelChange)
```

### GetTraitLevelForTraitXp
```csharp
public override void GetTraitLevelForTraitXp(Hero hero, TraitObject trait, int xpValue, out int traitLevel, out int clampedTraitXp)
```

### GetTraitXpRequiredForTraitLevel
```csharp
public override int GetTraitXpRequiredForTraitLevel(TraitObject trait, int traitLevel)
```

### CalculateLearningLimit
```csharp
public override ExplainedNumber CalculateLearningLimit(IReadOnlyPropertyOwner<CharacterAttribute> characterAttributes, int focusValue, SkillObject skill, bool includeDescriptions = false)
```

### CalculateLearningRate
```csharp
public override ExplainedNumber CalculateLearningRate(IReadOnlyPropertyOwner<CharacterAttribute> characterAttributes, int focusValue, int skillValue, SkillObject skill, bool includeDescriptions = false)
```

### GetNextSkillToAddFocus
```csharp
public override SkillObject GetNextSkillToAddFocus(Hero hero)
```

### GetNextAttributeToUpgrade
```csharp
public override CharacterAttribute GetNextAttributeToUpgrade(Hero hero)
```

### GetNextPerkToChoose
```csharp
public override PerkObject GetNextPerkToChoose(Hero hero, PerkObject perk)
```

## 使用示例

```csharp
// DefaultCharacterDevelopmentModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultCharacterDevelopmentModel>(new MyDefaultCharacterDevelopmentModel());
```

## 参见

- [完整类目录](../catalog)