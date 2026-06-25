---
title: "PathFinder"
description: "PathFinder 的自动生成类参考。"
---
# PathFinder

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public abstract class PathFinder`
**Base:** 无
**File:** `TaleWorlds.Library/PathFinder.cs`

## 概述

`PathFinder` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Destroy
`public virtual void Destroy()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 PathFinder 实例
PathFinder pathFinder = ...;
pathFinder.Destroy();
```

### Initialize
`public abstract void Initialize(Vec3 bbSize)`

**用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 PathFinder 实例
PathFinder pathFinder = ...;
pathFinder.Initialize(bbSize);
```

### FindPath
`public abstract bool FindPath(Vec3 wSource, Vec3 wDestination, List<Vec3> path, float craftWidth = 5f)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的「path」。

```csharp
// 先通过子系统 API 拿到 PathFinder 实例
PathFinder pathFinder = ...;
var result = pathFinder.FindPath(wSource, wDestination, path, 0);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
PathFinder instance = ...;
```

## 参见

- [本区域目录](../)