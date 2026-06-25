---
title: "DefaultParallelDriver"
description: "DefaultParallelDriver 的自动生成类参考。"
---
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

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 DefaultParallelDriver 实例
DefaultParallelDriver defaultParallelDriver = ...;
defaultParallelDriver.For(0, 0, body, 0);
```

### For
`public void For(int fromInclusive, int toExclusive, float deltaTime, TWParallel.ParallelForWithDtAuxPredicate body, int grainSize)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 DefaultParallelDriver 实例
DefaultParallelDriver defaultParallelDriver = ...;
defaultParallelDriver.For(0, 0, 0, body, 0);
```

### GetMainThreadId
`public ulong GetMainThreadId()`

**用途 / Purpose:** 读取并返回当前对象中 「main thread id」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultParallelDriver 实例
DefaultParallelDriver defaultParallelDriver = ...;
var result = defaultParallelDriver.GetMainThreadId();
```

### GetCurrentThreadId
`public ulong GetCurrentThreadId()`

**用途 / Purpose:** 读取并返回当前对象中 「current thread id」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultParallelDriver 实例
DefaultParallelDriver defaultParallelDriver = ...;
var result = defaultParallelDriver.GetCurrentThreadId();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
DefaultParallelDriver defaultParallelDriver = ...;
defaultParallelDriver.For(0, 0, body, 0);
```

## 参见

- [本区域目录](../)