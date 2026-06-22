<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BattlePowerCalculationLogic`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BattlePowerCalculationLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattlePowerCalculationLogic : MissionLogic, IBattlePowerCalculationLogic, IMissionBehavior`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/BattlePowerCalculationLogic.cs`

## 概述

`BattlePowerCalculationLogic` 是一个 MissionLogic（MissionBehavior 的子类），在任务中运行每-tick/事件逻辑。通过 `mission.AddMissionBehavior(new BattlePowerCalculationLogic())` 添加；继承它可定制。

## 主要方法

### GetTotalTeamPower
```csharp
public float GetTotalTeamPower(Team team)
```

## 使用示例

```csharp
// BattlePowerCalculationLogic (Logic) 的典型用法
Mission.Current.AddMissionBehavior(new BattlePowerCalculationLogic());
```

## 参见

- [完整类目录](../catalog)