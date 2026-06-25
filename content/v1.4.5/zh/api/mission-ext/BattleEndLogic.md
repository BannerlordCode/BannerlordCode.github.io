---
title: "BattleEndLogic"
description: "BattleEndLogic 的自动生成类参考。"
---
# BattleEndLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleEndLogic : MissionLogic, IBattleEndLogic`
**Base:** `MissionLogic`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/BattleEndLogic.cs`

## 概述

`BattleEndLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `BattleEndLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `PlayerVictory` | `public bool PlayerVictory { get; }` |
| `EnemyVictory` | `public bool EnemyVictory { get; }` |

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** **用途 / Purpose:** 在 behavior initialize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BattleEndLogic 实例
BattleEndLogic battleEndLogic = ...;
battleEndLogic.OnBehaviorInitialize();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 在 mission tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BattleEndLogic 实例
BattleEndLogic battleEndLogic = ...;
battleEndLogic.OnMissionTick(0);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**用途 / Purpose:** **用途 / Purpose:** 在 agent removed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BattleEndLogic 实例
BattleEndLogic battleEndLogic = ...;
battleEndLogic.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

### MissionEnded
`public override bool MissionEnded(ref MissionResult missionResult)`

**用途 / Purpose:** **用途 / Purpose:** 调用 MissionEnded 对应的操作。

```csharp
// 先通过子系统 API 拿到 BattleEndLogic 实例
BattleEndLogic battleEndLogic = ...;
var result = battleEndLogic.MissionEnded(missionResult);
```

### ChangeCanCheckForEndCondition
`public void ChangeCanCheckForEndCondition(bool canCheckForEndCondition)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ChangeCanCheckForEndCondition 对应的操作。

```csharp
// 先通过子系统 API 拿到 BattleEndLogic 实例
BattleEndLogic battleEndLogic = ...;
battleEndLogic.ChangeCanCheckForEndCondition(false);
```

### TryExit
`public ExitResult TryExit()`

**用途 / Purpose:** **用途 / Purpose:** 尝试获取 exit 的值，通常通过 out 参数返回是否成功。

```csharp
// 先通过子系统 API 拿到 BattleEndLogic 实例
BattleEndLogic battleEndLogic = ...;
var result = battleEndLogic.TryExit();
```

### EnableEnemyDefenderPullBack
`public void EnableEnemyDefenderPullBack(int neededTroopNumber)`

**用途 / Purpose:** **用途 / Purpose:** 调用 EnableEnemyDefenderPullBack 对应的操作。

```csharp
// 先通过子系统 API 拿到 BattleEndLogic 实例
BattleEndLogic battleEndLogic = ...;
battleEndLogic.EnableEnemyDefenderPullBack(0);
```

### SetNotificationDisabled
`public void SetNotificationDisabled(bool value)`

**用途 / Purpose:** **用途 / Purpose:** 为 notification disabled 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 BattleEndLogic 实例
BattleEndLogic battleEndLogic = ...;
battleEndLogic.SetNotificationDisabled(false);
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<BattleEndLogic>();
```

## 参见

- [本区域目录](../)