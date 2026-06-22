<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PersuasionModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PersuasionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PersuasionModel : MBGameModel<PersuasionModel>`
**Base:** `MBGameModel<PersuasionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PersuasionModel.cs`

## 概述

`PersuasionModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<PersuasionModel>(new MyPersuasionModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetSkillXpFromPersuasion
```csharp
public abstract int GetSkillXpFromPersuasion(PersuasionDifficulty difficulty, int argumentDifficultyBonusCoefficient)
```

### GetChances
```csharp
public abstract void GetChances(PersuasionOptionArgs optionArgs, out float successChance, out float critSuccessChance, out float critFailChance, out float failChance, float difficultyMultiplier)
```

### GetEffectChances
```csharp
public abstract void GetEffectChances(PersuasionOptionArgs option, out float moveToNextStageChance, out float blockRandomOptionChance, float difficultyMultiplier)
```

### GetArgumentStrengthBasedOnTargetTraits
```csharp
public abstract PersuasionArgumentStrength GetArgumentStrengthBasedOnTargetTraits(CharacterObject character, Tuple<TraitObject, int> traitCorrelation)
```

### GetDifficulty
```csharp
public abstract float GetDifficulty(PersuasionDifficulty difficulty)
```

### CalculateInitialPersuasionProgress
```csharp
public abstract float CalculateInitialPersuasionProgress(CharacterObject character, float goalValue, float successValue)
```

### CalculatePersuasionGoalValue
```csharp
public abstract float CalculatePersuasionGoalValue(CharacterObject oneToOneConversationCharacter, float successValue)
```

## 使用示例

```csharp
// PersuasionModel (Model) 的典型用法
Game.Current.ReplaceModel<PersuasionModel>(new MyPersuasionModel());
```

## 参见

- [完整类目录](../catalog)