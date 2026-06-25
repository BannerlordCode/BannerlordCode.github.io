---
title: "DefaultParallelDriver"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultParallelDriver`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultParallelDriver

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public sealed class DefaultParallelDriver : IParallelDriver`
**Base:** `IParallelDriver`
**File:** `TaleWorlds.Library/DefaultParallelDriver.cs`

## 概述

`DefaultParallelDriver` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### For
`public void For(int fromInclusive, int toExclusive, TWParallel.ParallelForAuxPredicate body, int grainSize)`

**用途 / Purpose:** 处理 `for` 相关逻辑。

### For
`public void For(int fromInclusive, int toExclusive, float deltaTime, TWParallel.ParallelForWithDtAuxPredicate body, int grainSize)`

**用途 / Purpose:** 处理 `for` 相关逻辑。

### GetMainThreadId
`public ulong GetMainThreadId()`

**用途 / Purpose:** 获取 `main thread id` 的当前值。

### GetCurrentThreadId
`public ulong GetCurrentThreadId()`

**用途 / Purpose:** 获取 `current thread id` 的当前值。

## 使用示例

```csharp
var value = new DefaultParallelDriver();
value.For(0, 0, body, 0);
```

## 参见

- [完整类目录](../catalog)