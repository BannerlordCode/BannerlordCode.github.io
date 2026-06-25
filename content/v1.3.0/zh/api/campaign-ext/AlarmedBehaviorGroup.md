---
title: "AlarmedBehaviorGroup"
description: "AlarmedBehaviorGroup 的自动生成类参考。"
---
# AlarmedBehaviorGroup

**Namespace:** SandBox.Missions.AgentBehaviors
**Module:** SandBox.Missions
**Type:** `public class AlarmedBehaviorGroup : AgentBehaviorGroup`
**Base:** `AgentBehaviorGroup`
**File:** `SandBox/Missions/AgentBehaviors/AlarmedBehaviorGroup.cs`

## 概述

`AlarmedBehaviorGroup` 位于 `SandBox.Missions.AgentBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.Missions.AgentBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `AlarmFactor` | `public float AlarmFactor { get; }` |

## 主要方法

### SetCanMoveWhenCautious
`public void SetCanMoveWhenCautious(bool value)`

**用途 / Purpose:** 为 「can move when cautious」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 AlarmedBehaviorGroup 实例
AlarmedBehaviorGroup alarmedBehaviorGroup = ...;
alarmedBehaviorGroup.SetCanMoveWhenCautious(false);
```

### AddIgnoredAgentsForAlarm
`public void AddIgnoredAgentsForAlarm(Agent agent)`

**用途 / Purpose:** 将 「ignored agents for alarm」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 AlarmedBehaviorGroup 实例
AlarmedBehaviorGroup alarmedBehaviorGroup = ...;
alarmedBehaviorGroup.AddIgnoredAgentsForAlarm(agent);
```

### GetVisualFactor
`public float GetVisualFactor(Vec3 usedGlobalLookDirection, Agent currentAgent, ref bool hasVisualOnCorpse, ref bool hasVisualOnEnemy)`

**用途 / Purpose:** 读取并返回当前对象中 「visual factor」 的结果。

```csharp
// 先通过子系统 API 拿到 AlarmedBehaviorGroup 实例
AlarmedBehaviorGroup alarmedBehaviorGroup = ...;
var result = alarmedBehaviorGroup.GetVisualFactor(usedGlobalLookDirection, currentAgent, hasVisualOnCorpse, hasVisualOnEnemy);
```

### ResetAlarmFactor
`public void ResetAlarmFactor()`

**用途 / Purpose:** 将 「alarm factor」 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 AlarmedBehaviorGroup 实例
AlarmedBehaviorGroup alarmedBehaviorGroup = ...;
alarmedBehaviorGroup.ResetAlarmFactor();
```

### AddAlarmFactor
`public void AddAlarmFactor(float addedAlarmFactor, in WorldPosition suspiciousPosition)`

**用途 / Purpose:** 将 「alarm factor」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 AlarmedBehaviorGroup 实例
AlarmedBehaviorGroup alarmedBehaviorGroup = ...;
alarmedBehaviorGroup.AddAlarmFactor(0, suspiciousPosition);
```

### Tick
`public override void Tick(float dt, bool isSimulation)`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 AlarmedBehaviorGroup 实例
AlarmedBehaviorGroup alarmedBehaviorGroup = ...;
alarmedBehaviorGroup.Tick(0, false);
```

### GetScore
`public override float GetScore(bool isSimulation)`

**用途 / Purpose:** 读取并返回当前对象中 「score」 的结果。

```csharp
// 先通过子系统 API 拿到 AlarmedBehaviorGroup 实例
AlarmedBehaviorGroup alarmedBehaviorGroup = ...;
var result = alarmedBehaviorGroup.GetScore(false);
```

### GetClosestAlarmSource
`public Agent GetClosestAlarmSource(out float distanceSquared)`

**用途 / Purpose:** 读取并返回当前对象中 「closest alarm source」 的结果。

```csharp
// 先通过子系统 API 拿到 AlarmedBehaviorGroup 实例
AlarmedBehaviorGroup alarmedBehaviorGroup = ...;
var result = alarmedBehaviorGroup.GetClosestAlarmSource(distanceSquared);
```

### AlarmAgent
`public static void AlarmAgent(Agent agent)`

**用途 / Purpose:** 处理与 「alarm agent」 相关的逻辑。

```csharp
// 静态调用，不需要实例
AlarmedBehaviorGroup.AlarmAgent(agent);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent agent)`

**用途 / Purpose:** 在 「agent removed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 AlarmedBehaviorGroup 实例
AlarmedBehaviorGroup alarmedBehaviorGroup = ...;
alarmedBehaviorGroup.OnAgentRemoved(agent);
```

### ForceThink
`public override void ForceThink(float inSeconds)`

**用途 / Purpose:** 处理与 「force think」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 AlarmedBehaviorGroup 实例
AlarmedBehaviorGroup alarmedBehaviorGroup = ...;
alarmedBehaviorGroup.ForceThink(0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
AlarmedBehaviorGroup alarmedBehaviorGroup = ...;
alarmedBehaviorGroup.SetCanMoveWhenCautious(false);
```

## 参见

- [本区域目录](../)