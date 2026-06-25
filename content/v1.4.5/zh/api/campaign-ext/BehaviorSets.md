---
title: "BehaviorSets"
description: "BehaviorSets 的自动生成类参考。"
---
# BehaviorSets

**Namespace:** SandBox.Missions.AgentBehaviors
**Module:** SandBox.Missions
**Type:** `public class BehaviorSets`
**Base:** 无
**File:** `Modules.SandBox/SandBox/SandBox.Missions.AgentBehaviors/BehaviorSets.cs`

## 概述

`BehaviorSets` 位于 `SandBox.Missions.AgentBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.Missions.AgentBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### AddQuestCharacterBehaviors
`public static void AddQuestCharacterBehaviors(IAgent agent)`

**用途 / Purpose:** 将 「quest character behaviors」 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
BehaviorSets.AddQuestCharacterBehaviors(agent);
```

### AddWandererBehaviors
`public static void AddWandererBehaviors(IAgent agent)`

**用途 / Purpose:** 将 「wanderer behaviors」 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
BehaviorSets.AddWandererBehaviors(agent);
```

### AddOutdoorWandererBehaviors
`public static void AddOutdoorWandererBehaviors(IAgent agent)`

**用途 / Purpose:** 将 「outdoor wanderer behaviors」 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
BehaviorSets.AddOutdoorWandererBehaviors(agent);
```

### AddIndoorWandererBehaviors
`public static void AddIndoorWandererBehaviors(IAgent agent)`

**用途 / Purpose:** 将 「indoor wanderer behaviors」 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
BehaviorSets.AddIndoorWandererBehaviors(agent);
```

### AddFixedCharacterBehaviors
`public static void AddFixedCharacterBehaviors(IAgent agent)`

**用途 / Purpose:** 将 「fixed character behaviors」 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
BehaviorSets.AddFixedCharacterBehaviors(agent);
```

### AddPatrollingThugBehaviors
`public static void AddPatrollingThugBehaviors(IAgent agent)`

**用途 / Purpose:** 将 「patrolling thug behaviors」 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
BehaviorSets.AddPatrollingThugBehaviors(agent);
```

### AddStandGuardBehaviors
`public static void AddStandGuardBehaviors(IAgent agent)`

**用途 / Purpose:** 将 「stand guard behaviors」 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
BehaviorSets.AddStandGuardBehaviors(agent);
```

### AddFixedGuardBehaviors
`public static void AddFixedGuardBehaviors(IAgent agent)`

**用途 / Purpose:** 将 「fixed guard behaviors」 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
BehaviorSets.AddFixedGuardBehaviors(agent);
```

### StealthAgentBehaviors
`public static void StealthAgentBehaviors(IAgent agent)`

**用途 / Purpose:** 处理与 「stealth agent behaviors」 相关的逻辑。

```csharp
// 静态调用，不需要实例
BehaviorSets.StealthAgentBehaviors(agent);
```

### AddPatrollingGuardBehaviors
`public static void AddPatrollingGuardBehaviors(IAgent agent)`

**用途 / Purpose:** 将 「patrolling guard behaviors」 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
BehaviorSets.AddPatrollingGuardBehaviors(agent);
```

### AddCompanionBehaviors
`public static void AddCompanionBehaviors(IAgent agent)`

**用途 / Purpose:** 将 「companion behaviors」 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
BehaviorSets.AddCompanionBehaviors(agent);
```

### AddBodyguardBehaviors
`public static void AddBodyguardBehaviors(IAgent agent)`

**用途 / Purpose:** 将 「bodyguard behaviors」 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
BehaviorSets.AddBodyguardBehaviors(agent);
```

### AddFirstCompanionBehavior
`public static void AddFirstCompanionBehavior(IAgent agent)`

**用途 / Purpose:** 将 「first companion behavior」 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
BehaviorSets.AddFirstCompanionBehavior(agent);
```

## 使用示例

```csharp
BehaviorSets.AddQuestCharacterBehaviors(agent);
```

## 参见

- [本区域目录](../)