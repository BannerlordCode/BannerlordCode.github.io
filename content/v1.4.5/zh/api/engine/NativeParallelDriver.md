---
title: "NativeParallelDriver"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `NativeParallelDriver`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# NativeParallelDriver

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class NativeParallelDriver : IParallelDriver`
**Base:** `IParallelDriver`
**File:** `Bannerlord.Source/bin/TaleWorlds.Engine/TaleWorlds.Engine/NativeParallelDriver.cs`

## 概述

`NativeParallelDriver` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### For
`public void For(int fromInclusive, int toExclusive, TWParallel.ParallelForAuxPredicate loopBody, int grainSize)`

**用途 / Purpose:** 处理 `for` 相关逻辑。

### ForWithoutRenderThread
`public void ForWithoutRenderThread(int fromInclusive, int toExclusive, TWParallel.ParallelForAuxPredicate loopBody, int grainSize)`

**用途 / Purpose:** 处理 `for without render thread` 相关逻辑。

### ForWithoutRenderThreadDt
`public void ForWithoutRenderThreadDt(int fromInclusive, int toExclusive, float deltaTime, TWParallel.ParallelForWithDtAuxPredicate loopBody, int grainSize)`

**用途 / Purpose:** 处理 `for without render thread dt` 相关逻辑。

### For
`public void For(int fromInclusive, int toExclusive, float deltaTime, TWParallel.ParallelForWithDtAuxPredicate loopBody, int grainSize)`

**用途 / Purpose:** 处理 `for` 相关逻辑。

### GetMainThreadId
`public ulong GetMainThreadId()`

**用途 / Purpose:** 获取 `main thread id` 的当前值。

### GetCurrentThreadId
`public ulong GetCurrentThreadId()`

**用途 / Purpose:** 获取 `current thread id` 的当前值。

## 使用示例

```csharp
var value = new NativeParallelDriver();
value.For(0, 0, loopBody, 0);
```

## 参见

- [完整类目录](../catalog)