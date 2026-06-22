<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultPersuasionModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultPersuasionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPersuasionModel : PersuasionModel`
**Base:** `PersuasionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPersuasionModel.cs`

## 概述

`DefaultPersuasionModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultPersuasionModel>(new MyDefaultPersuasionModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetSkillXpFromPersuasion
```csharp
public override int GetSkillXpFromPersuasion(PersuasionDifficulty difficulty, int argumentDifficultyBonusCoefficient)
```

### GetChances
```csharp
public override void GetChances(PersuasionOptionArgs optionArgs, out float successChance, out float critSuccessChance, out float critFailChance, out float failChance, float difficultyMultiplier)
```

### GetEffectChances
```csharp
public override void GetEffectChances(PersuasionOptionArgs option, out float moveToNextStageChance, out float blockRandomOptionChance, float difficultyMultiplier)
```

### GetArgumentStrengthBasedOnTargetTraits
```csharp
public override PersuasionArgumentStrength GetArgumentStrengthBasedOnTargetTraits(CharacterObject character, Tuple<TraitObject, int> traitCorrelations)
```

### CalculateInitialPersuasionProgress
```csharp
public override float CalculateInitialPersuasionProgress(CharacterObject character, float goalValue, float successValue)
```

### CalculatePersuasionGoalValue
```csharp
public override float CalculatePersuasionGoalValue(CharacterObject oneToOneConversationCharacter, float successValue)
```

### GetDifficulty
```csharp
public override float GetDifficulty(PersuasionDifficulty difficulty)
```

## 使用示例

```csharp
// DefaultPersuasionModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultPersuasionModel>(new MyDefaultPersuasionModel());
```

## 参见

- [完整类目录](../catalog)