<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BattleSpawnLogic`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BattleSpawnLogic

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleSpawnLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/BattleSpawnLogic.cs`

## 概述

`BattleSpawnLogic` 是一个 MissionLogic（MissionBehavior 的子类），在任务中运行每-tick/事件逻辑。通过 `mission.AddMissionBehavior(new BattleSpawnLogic())` 添加；继承它可定制。

## 主要方法

### OnPreMissionTick
```csharp
public override void OnPreMissionTick(float dt)
```

## 使用示例

```csharp
// BattleSpawnLogic (Logic) 的典型用法
Mission.Current.AddMissionBehavior(new BattleSpawnLogic());
```

## 参见

- [完整类目录](../catalog)