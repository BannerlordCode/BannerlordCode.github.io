<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DifficultyModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DifficultyModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class DifficultyModel : MBGameModel<DifficultyModel>`
**Base:** `MBGameModel<DifficultyModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/DifficultyModel.cs`

## 概述

`DifficultyModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DifficultyModel>(new MyDifficultyModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetPlayerTroopsReceivedDamageMultiplier
```csharp
public abstract float GetPlayerTroopsReceivedDamageMultiplier()
```

### GetPlayerRecruitSlotBonus
```csharp
public abstract int GetPlayerRecruitSlotBonus()
```

### GetPlayerMapMovementSpeedBonusMultiplier
```csharp
public abstract float GetPlayerMapMovementSpeedBonusMultiplier()
```

### GetCombatAIDifficultyMultiplier
```csharp
public abstract float GetCombatAIDifficultyMultiplier()
```

### GetPersuasionBonusChance
```csharp
public abstract float GetPersuasionBonusChance()
```

### GetClanMemberDeathChanceMultiplier
```csharp
public abstract float GetClanMemberDeathChanceMultiplier()
```

### GetStealthDifficultyMultiplier
```csharp
public abstract float GetStealthDifficultyMultiplier()
```

### GetDisguiseDifficultyMultiplier
```csharp
public abstract float GetDisguiseDifficultyMultiplier()
```

## 使用示例

```csharp
// DifficultyModel (Model) 的典型用法
Game.Current.ReplaceModel<DifficultyModel>(new MyDifficultyModel());
```

## 参见

- [完整类目录](../catalog)