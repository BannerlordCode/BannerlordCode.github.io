<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ReplayMissionLogic`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ReplayMissionLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ReplayMissionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/ReplayMissionLogic.cs`

## 概述

`ReplayMissionLogic` 是一个 MissionLogic（MissionBehavior 的子类），在任务中运行每-tick/事件逻辑。通过 `mission.AddMissionBehavior(new ReplayMissionLogic())` 添加；继承它可定制。

## 主要方法

### OnBehaviorInitialize
```csharp
public override void OnBehaviorInitialize()
```

### OnRemoveBehavior
```csharp
public override void OnRemoveBehavior()
```

## 使用示例

```csharp
// ReplayMissionLogic (Logic) 的典型用法
Mission.Current.AddMissionBehavior(new ReplayMissionLogic());
```

## 参见

- [完整类目录](../catalog)