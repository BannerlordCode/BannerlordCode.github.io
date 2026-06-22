<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionDifficultyModel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionDifficultyModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionDifficultyModel : MBGameModel<MissionDifficultyModel>`
**Base:** `MBGameModel<MissionDifficultyModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/MissionDifficultyModel.cs`

## 概述

`MissionDifficultyModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<MissionDifficultyModel>(new MyMissionDifficultyModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetDamageMultiplierOfCombatDifficulty
```csharp
public abstract float GetDamageMultiplierOfCombatDifficulty(Agent victimAgent, Agent attackerAgent = null)
```

## 使用示例

```csharp
// MissionDifficultyModel (Model) 的典型用法
Game.Current.ReplaceModel<MissionDifficultyModel>(new MyMissionDifficultyModel());
```

## 参见

- [完整类目录](../catalog)