<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `RecordMissionLogic`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RecordMissionLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class RecordMissionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/RecordMissionLogic.cs`

## 概述

`RecordMissionLogic` 是一个 MissionLogic（MissionBehavior 的子类），在任务中运行每-tick/事件逻辑。通过 `mission.AddMissionBehavior(new RecordMissionLogic())` 添加；继承它可定制。

## 主要方法

### OnBehaviorInitialize
```csharp
public override void OnBehaviorInitialize()
```

### OnMissionTick
```csharp
public override void OnMissionTick(float dt)
```

### OnEndMissionInternal
```csharp
public override void OnEndMissionInternal()
```

## 使用示例

```csharp
// RecordMissionLogic (Logic) 的典型用法
Mission.Current.AddMissionBehavior(new RecordMissionLogic());
```

## 参见

- [完整类目录](../catalog)