---
title: "RetreatPositionCacheSystem"
description: "RetreatPositionCacheSystem 的自动生成类参考。"
---
# RetreatPositionCacheSystem

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class RetreatPositionCacheSystem`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/Formation.cs`

## 概述

`RetreatPositionCacheSystem` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetRetreatPositionFromCache
`public WorldPosition GetRetreatPositionFromCache(Vec2 agentPosition)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 retreat position from cache 的结果。

```csharp
// 先通过子系统 API 拿到 RetreatPositionCacheSystem 实例
RetreatPositionCacheSystem retreatPositionCacheSystem = ...;
var result = retreatPositionCacheSystem.GetRetreatPositionFromCache(agentPosition);
```

### AddNewPositionToCache
`public void AddNewPositionToCache(Vec2 agentPostion, WorldPosition retreatingPosition)`

**用途 / Purpose:** **用途 / Purpose:** 将 new position to cache 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 RetreatPositionCacheSystem 实例
RetreatPositionCacheSystem retreatPositionCacheSystem = ...;
retreatPositionCacheSystem.AddNewPositionToCache(agentPostion, retreatingPosition);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
RetreatPositionCacheSystem retreatPositionCacheSystem = ...;
retreatPositionCacheSystem.GetRetreatPositionFromCache(agentPosition);
```

## 参见

- [本区域目录](../)