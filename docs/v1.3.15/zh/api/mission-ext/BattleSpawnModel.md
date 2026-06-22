<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BattleSpawnModel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BattleSpawnModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class BattleSpawnModel : MBGameModel<BattleSpawnModel>`
**Base:** `MBGameModel<BattleSpawnModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/BattleSpawnModel.cs`

## 概述

`BattleSpawnModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<BattleSpawnModel>(new MyBattleSpawnModel())` 注册，以改变其计算逻辑。

## 主要方法

### OnMissionStart
```csharp
public virtual void OnMissionStart()
```

### OnMissionEnd
```csharp
public virtual void OnMissionEnd()
```

### GetInitialSpawnAssignments
```csharp
public abstract List<ValueTuple<IAgentOriginBase, int>> GetInitialSpawnAssignments(BattleSideEnum battleSide, List<IAgentOriginBase> troopOrigins)
```

### GetReinforcementAssignments
```csharp
public abstract List<ValueTuple<IAgentOriginBase, int>> GetReinforcementAssignments(BattleSideEnum battleSide, List<IAgentOriginBase> troopOrigins)
```

## 使用示例

```csharp
// BattleSpawnModel (Model) 的典型用法
Game.Current.ReplaceModel<BattleSpawnModel>(new MyBattleSpawnModel());
```

## 参见

- [完整类目录](../catalog)