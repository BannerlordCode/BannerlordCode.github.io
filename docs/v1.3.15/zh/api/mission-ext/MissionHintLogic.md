<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionHintLogic`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionHintLogic

**Namespace:** TaleWorlds.MountAndBlade.Missions.MissionLogics
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionHintLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Missions/MissionLogics/MissionHintLogic.cs`

## 概述

`MissionHintLogic` 是一个 MissionLogic（MissionBehavior 的子类），在任务中运行每-tick/事件逻辑。通过 `mission.AddMissionBehavior(new MissionHintLogic())` 添加；继承它可定制。

## 主要属性

| Name | Signature |
|------|-----------|
| `ActiveHint` | `public MissionHint ActiveHint { get; }` |

## 主要方法

### SetActiveHint
```csharp
public void SetActiveHint(MissionHint hint)
```

### Clear
```csharp
public void Clear()
```

### MissionHintChangedDelegate
```csharp
public delegate void MissionHintChangedDelegate(MissionHint previousHint, MissionHint newHint)
```

## 使用示例

```csharp
// MissionHintLogic (Logic) 的典型用法
Mission.Current.AddMissionBehavior(new MissionHintLogic());
```

## 参见

- [完整类目录](../catalog)