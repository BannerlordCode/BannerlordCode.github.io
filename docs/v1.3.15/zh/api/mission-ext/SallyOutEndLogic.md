<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SallyOutEndLogic`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SallyOutEndLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SallyOutEndLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/SallyOutEndLogic.cs`

## 概述

`SallyOutEndLogic` 是一个 MissionLogic（MissionBehavior 的子类），在任务中运行每-tick/事件逻辑。通过 `mission.AddMissionBehavior(new SallyOutEndLogic())` 添加；继承它可定制。

## 主要方法

### OnMissionTick
```csharp
public override void OnMissionTick(float dt)
```

### MissionEnded
```csharp
public override bool MissionEnded(ref MissionResult missionResult)
```

## 使用示例

```csharp
// SallyOutEndLogic (Logic) 的典型用法
Mission.Current.AddMissionBehavior(new SallyOutEndLogic());
```

## 参见

- [完整类目录](../catalog)