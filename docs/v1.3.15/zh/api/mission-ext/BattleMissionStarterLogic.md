<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BattleMissionStarterLogic`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BattleMissionStarterLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleMissionStarterLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/BattleMissionStarterLogic.cs`

## 概述

`BattleMissionStarterLogic` 是一个 MissionLogic（MissionBehavior 的子类），在任务中运行每-tick/事件逻辑。通过 `mission.AddMissionBehavior(new BattleMissionStarterLogic())` 添加；继承它可定制。

## 主要方法

### AfterStart
```csharp
public override void AfterStart()
```

## 使用示例

```csharp
// BattleMissionStarterLogic (Logic) 的典型用法
Mission.Current.AddMissionBehavior(new BattleMissionStarterLogic());
```

## 参见

- [完整类目录](../catalog)