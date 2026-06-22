<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultDifficultyModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultDifficultyModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultDifficultyModel : DifficultyModel`
**Base:** `DifficultyModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultDifficultyModel.cs`

## 概述

`DefaultDifficultyModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultDifficultyModel>(new MyDefaultDifficultyModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetPlayerTroopsReceivedDamageMultiplier
```csharp
public override float GetPlayerTroopsReceivedDamageMultiplier()
```

### GetPlayerRecruitSlotBonus
```csharp
public override int GetPlayerRecruitSlotBonus()
```

### GetPlayerMapMovementSpeedBonusMultiplier
```csharp
public override float GetPlayerMapMovementSpeedBonusMultiplier()
```

### GetStealthDifficultyMultiplier
```csharp
public override float GetStealthDifficultyMultiplier()
```

### GetDisguiseDifficultyMultiplier
```csharp
public override float GetDisguiseDifficultyMultiplier()
```

### GetCombatAIDifficultyMultiplier
```csharp
public override float GetCombatAIDifficultyMultiplier()
```

### GetPersuasionBonusChance
```csharp
public override float GetPersuasionBonusChance()
```

### GetClanMemberDeathChanceMultiplier
```csharp
public override float GetClanMemberDeathChanceMultiplier()
```

## 使用示例

```csharp
// DefaultDifficultyModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultDifficultyModel>(new MyDefaultDifficultyModel());
```

## 参见

- [完整类目录](../catalog)