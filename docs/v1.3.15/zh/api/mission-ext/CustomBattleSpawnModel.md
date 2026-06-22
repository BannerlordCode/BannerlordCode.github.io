<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CustomBattleSpawnModel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CustomBattleSpawnModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleSpawnModel : BattleSpawnModel`
**Base:** `BattleSpawnModel`
**File:** `TaleWorlds.MountAndBlade/CustomBattleSpawnModel.cs`

## 概述

`CustomBattleSpawnModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<CustomBattleSpawnModel>(new MyCustomBattleSpawnModel())` 注册，以改变其计算逻辑。

## 主要方法

### OnMissionStart
```csharp
public override void OnMissionStart()
```

### OnMissionEnd
```csharp
public override void OnMissionEnd()
```

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
// CustomBattleSpawnModel (Model) 的典型用法
Game.Current.ReplaceModel<CustomBattleSpawnModel>(new MyCustomBattleSpawnModel());
```

## 参见

- [完整类目录](../catalog)