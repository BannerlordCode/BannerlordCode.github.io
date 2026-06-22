<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerBattleSpawnModel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerBattleSpawnModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerBattleSpawnModel : BattleSpawnModel`
**Base:** `BattleSpawnModel`
**File:** `TaleWorlds.MountAndBlade/MultiplayerBattleSpawnModel.cs`

## 概述

`MultiplayerBattleSpawnModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<MultiplayerBattleSpawnModel>(new MyMultiplayerBattleSpawnModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetInitialSpawnAssignments
```csharp
public override List<ValueTuple<IAgentOriginBase, int>> GetInitialSpawnAssignments(BattleSideEnum battleSide, List<IAgentOriginBase> troopOrigins)
```

### GetReinforcementAssignments
```csharp
public override List<ValueTuple<IAgentOriginBase, int>> GetReinforcementAssignments(BattleSideEnum battleSide, List<IAgentOriginBase> troopOrigins)
```

## 使用示例

```csharp
// MultiplayerBattleSpawnModel (Model) 的典型用法
Game.Current.ReplaceModel<MultiplayerBattleSpawnModel>(new MyMultiplayerBattleSpawnModel());
```

## 参见

- [完整类目录](../catalog)