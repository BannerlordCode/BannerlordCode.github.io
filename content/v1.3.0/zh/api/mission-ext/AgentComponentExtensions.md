---
title: "AgentComponentExtensions"
description: "AgentComponentExtensions 的自动生成类参考。"
---
# AgentComponentExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class AgentComponentExtensions`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/AgentComponentExtensions.cs`

## 概述

`AgentComponentExtensions` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetMorale
`public static float GetMorale(this Agent agent)`

**用途 / Purpose:** 读取并返回当前对象中 「morale」 的结果。

```csharp
// 静态调用，不需要实例
AgentComponentExtensions.GetMorale(agent);
```

### SetMorale
`public static void SetMorale(this Agent agent, float morale)`

**用途 / Purpose:** 为 「morale」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
AgentComponentExtensions.SetMorale(agent, 0);
```

### ChangeMorale
`public static void ChangeMorale(this Agent agent, float delta)`

**用途 / Purpose:** 处理与 「change morale」 相关的逻辑。

```csharp
// 静态调用，不需要实例
AgentComponentExtensions.ChangeMorale(agent, 0);
```

### IsRetreating
`public static bool IsRetreating(this Agent agent, bool isComponentAssured = true)`

**用途 / Purpose:** 判断当前对象是否处于 「retreating」 状态或条件。

```csharp
// 静态调用，不需要实例
AgentComponentExtensions.IsRetreating(agent, false);
```

### Retreat
`public static void Retreat(this Agent agent, bool useCachingSystem = false)`

**用途 / Purpose:** 处理与 「retreat」 相关的逻辑。

```csharp
// 静态调用，不需要实例
AgentComponentExtensions.Retreat(agent, false);
```

### StopRetreatingMoraleComponent
`public static void StopRetreatingMoraleComponent(this Agent agent)`

**用途 / Purpose:** 停止「retreating morale component」流程或状态机。

```csharp
// 静态调用，不需要实例
AgentComponentExtensions.StopRetreatingMoraleComponent(agent);
```

### SetBehaviorValueSet
`public static void SetBehaviorValueSet(this Agent agent, HumanAIComponent.BehaviorValueSet behaviorValueSet)`

**用途 / Purpose:** 为 「behavior value set」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
AgentComponentExtensions.SetBehaviorValueSet(agent, behaviorValueSet);
```

### RefreshBehaviorValues
`public static void RefreshBehaviorValues(this Agent agent, MovementOrder.MovementOrderEnum movementOrder, ArrangementOrder.ArrangementOrderEnum arrangementOrder)`

**用途 / Purpose:** 使 「behavior values」 的显示或缓存与底层状态保持一致。

```csharp
// 静态调用，不需要实例
AgentComponentExtensions.RefreshBehaviorValues(agent, movementOrder, arrangementOrder);
```

### SetAIBehaviorValues
`public static void SetAIBehaviorValues(this Agent agent, HumanAIComponent.AISimpleBehaviorKind behavior, float y1, float x2, float y2, float x3, float y3)`

**用途 / Purpose:** 为 「a i behavior values」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
AgentComponentExtensions.SetAIBehaviorValues(agent, behavior, 0, 0, 0, 0, 0);
```

### AIMoveToGameObjectEnable
`public static void AIMoveToGameObjectEnable(this Agent agent, UsableMissionObject usedObject, IDetachment detachment, Agent.AIScriptedFrameFlags scriptedFrameFlags = Agent.AIScriptedFrameFlags.NoAttack)`

**用途 / Purpose:** 处理与 「ai move to game object enable」 相关的逻辑。

```csharp
// 静态调用，不需要实例
AgentComponentExtensions.AIMoveToGameObjectEnable(agent, usedObject, detachment, agent.AIScriptedFrameFlags.NoAttack);
```

### AIMoveToGameObjectDisable
`public static void AIMoveToGameObjectDisable(this Agent agent)`

**用途 / Purpose:** 处理与 「ai move to game object disable」 相关的逻辑。

```csharp
// 静态调用，不需要实例
AgentComponentExtensions.AIMoveToGameObjectDisable(agent);
```

### AIMoveToGameObjectIsEnabled
`public static bool AIMoveToGameObjectIsEnabled(this Agent agent)`

**用途 / Purpose:** 处理与 「ai move to game object is enabled」 相关的逻辑。

```csharp
// 静态调用，不需要实例
AgentComponentExtensions.AIMoveToGameObjectIsEnabled(agent);
```

### AIDefendGameObjectEnable
`public static void AIDefendGameObjectEnable(this Agent agent, UsableMissionObject usedObject, IDetachment detachment)`

**用途 / Purpose:** 处理与 「ai defend game object enable」 相关的逻辑。

```csharp
// 静态调用，不需要实例
AgentComponentExtensions.AIDefendGameObjectEnable(agent, usedObject, detachment);
```

### AIDefendGameObjectDisable
`public static void AIDefendGameObjectDisable(this Agent agent)`

**用途 / Purpose:** 处理与 「ai defend game object disable」 相关的逻辑。

```csharp
// 静态调用，不需要实例
AgentComponentExtensions.AIDefendGameObjectDisable(agent);
```

### AIDefendGameObjectIsEnabled
`public static bool AIDefendGameObjectIsEnabled(this Agent agent)`

**用途 / Purpose:** 处理与 「ai defend game object is enabled」 相关的逻辑。

```csharp
// 静态调用，不需要实例
AgentComponentExtensions.AIDefendGameObjectIsEnabled(agent);
```

### AIInterestedInAnyGameObject
`public static bool AIInterestedInAnyGameObject(this Agent agent)`

**用途 / Purpose:** 处理与 「ai interested in any game object」 相关的逻辑。

```csharp
// 静态调用，不需要实例
AgentComponentExtensions.AIInterestedInAnyGameObject(agent);
```

### AIInterestedInGameObject
`public static bool AIInterestedInGameObject(this Agent agent, UsableMissionObject usableMissionObject)`

**用途 / Purpose:** 处理与 「ai interested in game object」 相关的逻辑。

```csharp
// 静态调用，不需要实例
AgentComponentExtensions.AIInterestedInGameObject(agent, usableMissionObject);
```

### AIUseGameObjectEnable
`public static void AIUseGameObjectEnable(this Agent agent)`

**用途 / Purpose:** 处理与 「ai use game object enable」 相关的逻辑。

```csharp
// 静态调用，不需要实例
AgentComponentExtensions.AIUseGameObjectEnable(agent);
```

### AIUseGameObjectDisable
`public static void AIUseGameObjectDisable(this Agent agent)`

**用途 / Purpose:** 处理与 「ai use game object disable」 相关的逻辑。

```csharp
// 静态调用，不需要实例
AgentComponentExtensions.AIUseGameObjectDisable(agent);
```

### AIUseGameObjectIsEnabled
`public static bool AIUseGameObjectIsEnabled(this Agent agent)`

**用途 / Purpose:** 处理与 「ai use game object is enabled」 相关的逻辑。

```csharp
// 静态调用，不需要实例
AgentComponentExtensions.AIUseGameObjectIsEnabled(agent);
```

### GetFollowedUnit
`public static Agent GetFollowedUnit(this Agent agent)`

**用途 / Purpose:** 读取并返回当前对象中 「followed unit」 的结果。

```csharp
// 静态调用，不需要实例
AgentComponentExtensions.GetFollowedUnit(agent);
```

### SetFollowedUnit
`public static void SetFollowedUnit(this Agent agent, Agent followedUnit)`

**用途 / Purpose:** 为 「followed unit」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
AgentComponentExtensions.SetFollowedUnit(agent, followedUnit);
```

## 使用示例

```csharp
AgentComponentExtensions.GetMorale(agent);
```

## 参见

- [本区域目录](../)