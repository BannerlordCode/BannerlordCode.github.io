<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultMissionDifficultyModel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultMissionDifficultyModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultMissionDifficultyModel : MissionDifficultyModel`
**Base:** `MissionDifficultyModel`
**File:** `TaleWorlds.MountAndBlade/DefaultMissionDifficultyModel.cs`

## 概述

`DefaultMissionDifficultyModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultMissionDifficultyModel>(new MyDefaultMissionDifficultyModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetDamageMultiplierOfCombatDifficulty
```csharp
public override float GetDamageMultiplierOfCombatDifficulty(Agent victimAgent, Agent attackerAgent = null)
```

## 使用示例

```csharp
// DefaultMissionDifficultyModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultMissionDifficultyModel>(new MyDefaultMissionDifficultyModel());
```

## 参见

- [完整类目录](../catalog)