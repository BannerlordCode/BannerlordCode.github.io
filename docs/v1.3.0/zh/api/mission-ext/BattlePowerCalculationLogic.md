<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BattlePowerCalculationLogic`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BattlePowerCalculationLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattlePowerCalculationLogic : MissionLogic, IBattlePowerCalculationLogic, IMissionBehavior`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/BattlePowerCalculationLogic.cs`

## 概述

`BattlePowerCalculationLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `BattlePowerCalculationLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsTeamPowersCalculated` | `public bool IsTeamPowersCalculated { get; }` |

## 主要方法

### GetTotalTeamPower
`public float GetTotalTeamPower(Team team)`

**用途 / Purpose:** 获取 `total team power` 的当前值。

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new BattlePowerCalculationLogic());
```

## 参见

- [完整类目录](../catalog)