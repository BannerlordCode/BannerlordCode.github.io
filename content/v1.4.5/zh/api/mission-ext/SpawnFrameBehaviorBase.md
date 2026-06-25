---
title: "SpawnFrameBehaviorBase"
description: "SpawnFrameBehaviorBase 的自动生成类参考。"
---
# SpawnFrameBehaviorBase

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class SpawnFrameBehaviorBase`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/SpawnFrameBehaviorBase.cs`

## 概述

`SpawnFrameBehaviorBase` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CreateDecreasingCache
`public static WeightCache CreateDecreasingCache()`

**用途 / Purpose:** 构建一个新的 decreasing cache 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
SpawnFrameBehaviorBase.CreateDecreasingCache();
```

### CheckAndInsertNewValueIfLower
`public bool CheckAndInsertNewValueIfLower(float value, out float valueDifference)`

**用途 / Purpose:** 检查and insert new value if lower在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 SpawnFrameBehaviorBase 实例
SpawnFrameBehaviorBase spawnFrameBehaviorBase = ...;
var result = spawnFrameBehaviorBase.CheckAndInsertNewValueIfLower(0, valueDifference);
```

### Initialize
`public virtual void Initialize()`

**用途 / Purpose:** 加载当前对象所需的初始资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 SpawnFrameBehaviorBase 实例
SpawnFrameBehaviorBase spawnFrameBehaviorBase = ...;
spawnFrameBehaviorBase.Initialize();
```

### GetSpawnFrame
`public abstract MatrixFrame GetSpawnFrame(Team team, bool hasMount, bool isInitialSpawn)`

**用途 / Purpose:** 读取并返回当前对象中 spawn frame 的结果。

```csharp
// 先通过子系统 API 拿到 SpawnFrameBehaviorBase 实例
SpawnFrameBehaviorBase spawnFrameBehaviorBase = ...;
var result = spawnFrameBehaviorBase.GetSpawnFrame(team, false, false);
```

### OnAgentRemoved
`public void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** 在 agent removed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SpawnFrameBehaviorBase 实例
SpawnFrameBehaviorBase spawnFrameBehaviorBase = ...;
spawnFrameBehaviorBase.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
SpawnFrameBehaviorBase instance = ...;
```

## 参见

- [本区域目录](../)