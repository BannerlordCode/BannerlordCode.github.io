---
title: "AlarmedBehaviorGroup"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AlarmedBehaviorGroup`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 设置 `can move when cautious` 的值或状态。

### AddIgnoredAgentsForAlarm
`public void AddIgnoredAgentsForAlarm(Agent agent)`

**用途 / Purpose:** 向当前集合/状态中添加 `ignored agents for alarm`。

### GetVisualFactor
`public float GetVisualFactor(Vec3 usedGlobalLookDirection, Agent currentAgent, ref bool hasVisualOnCorpse, ref bool hasVisualOnEnemy)`

**用途 / Purpose:** 获取 `visual factor` 的当前值。

### ResetAlarmFactor
`public void ResetAlarmFactor()`

**用途 / Purpose:** 将 `alarm factor` 重置为初始状态。

### AddAlarmFactor
`public void AddAlarmFactor(float addedAlarmFactor, in WorldPosition suspiciousPosition)`

**用途 / Purpose:** 向当前集合/状态中添加 `alarm factor`。

### Tick
`public override void Tick(float dt, bool isSimulation)`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### GetScore
`public override float GetScore(bool isSimulation)`

**用途 / Purpose:** 获取 `score` 的当前值。

### GetClosestAlarmSource
`public Agent GetClosestAlarmSource(out float distanceSquared)`

**用途 / Purpose:** 获取 `closest alarm source` 的当前值。

### AlarmAgent
`public static void AlarmAgent(Agent agent)`

**用途 / Purpose:** 处理 `alarm agent` 相关逻辑。

### OnAgentRemoved
`public override void OnAgentRemoved(Agent agent)`

**用途 / Purpose:** 当 `agent removed` 事件触发时调用此方法。

### ForceThink
`public override void ForceThink(float inSeconds)`

**用途 / Purpose:** 处理 `force think` 相关逻辑。

## 使用示例

```csharp
var value = new AlarmedBehaviorGroup();
value.SetCanMoveWhenCautious(false);
```

## 参见

- [完整类目录](../catalog)