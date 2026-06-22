<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionObjectiveLogic`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionObjectiveLogic

**Namespace:** TaleWorlds.MountAndBlade.Missions.MissionLogics
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionObjectiveLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Missions/MissionLogics/MissionObjectiveLogic.cs`

## 概述

`MissionObjectiveLogic` 是一个 MissionLogic（MissionBehavior 的子类），在任务中运行每-tick/事件逻辑。通过 `mission.AddMissionBehavior(new MissionObjectiveLogic())` 添加；继承它可定制。

## 主要属性

| Name | Signature |
|------|-----------|
| `CurrentObjective` | `public MissionObjective CurrentObjective { get; }` |

## 主要方法

### StartObjective
```csharp
public void StartObjective(MissionObjective objective)
```

### CompleteCurrentObjective
```csharp
public void CompleteCurrentObjective()
```

### OnMissionTick
```csharp
public override void OnMissionTick(float dt)
```

## 使用示例

```csharp
// MissionObjectiveLogic (Logic) 的典型用法
Mission.Current.AddMissionBehavior(new MissionObjectiveLogic());
```

## 参见

- [完整类目录](../catalog)