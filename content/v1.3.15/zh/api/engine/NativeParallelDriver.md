---
title: "NativeParallelDriver"
description: "NativeParallelDriver 的自动生成类参考。"
---
# NativeParallelDriver

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class NativeParallelDriver : IParallelDriver`
**Base:** `IParallelDriver`
**File:** `TaleWorlds.Engine/NativeParallelDriver.cs`

## 概述

`NativeParallelDriver` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### For
`public void For(int fromInclusive, int toExclusive, TWParallel.ParallelForAuxPredicate loopBody, int grainSize)`

**用途 / Purpose:** 处理与 「for」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 NativeParallelDriver 实例
NativeParallelDriver nativeParallelDriver = ...;
nativeParallelDriver.For(0, 0, loopBody, 0);
```

### ForWithoutRenderThread
`public void ForWithoutRenderThread(int fromInclusive, int toExclusive, TWParallel.ParallelForAuxPredicate loopBody, int grainSize)`

**用途 / Purpose:** 处理与 「for without render thread」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 NativeParallelDriver 实例
NativeParallelDriver nativeParallelDriver = ...;
nativeParallelDriver.ForWithoutRenderThread(0, 0, loopBody, 0);
```

### For
`public void For(int fromInclusive, int toExclusive, float deltaTime, TWParallel.ParallelForWithDtAuxPredicate loopBody, int grainSize)`

**用途 / Purpose:** 处理与 「for」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 NativeParallelDriver 实例
NativeParallelDriver nativeParallelDriver = ...;
nativeParallelDriver.For(0, 0, 0, loopBody, 0);
```

### GetMainThreadId
`public ulong GetMainThreadId()`

**用途 / Purpose:** 读取并返回当前对象中 「main thread id」 的结果。

```csharp
// 先通过子系统 API 拿到 NativeParallelDriver 实例
NativeParallelDriver nativeParallelDriver = ...;
var result = nativeParallelDriver.GetMainThreadId();
```

### GetCurrentThreadId
`public ulong GetCurrentThreadId()`

**用途 / Purpose:** 读取并返回当前对象中 「current thread id」 的结果。

```csharp
// 先通过子系统 API 拿到 NativeParallelDriver 实例
NativeParallelDriver nativeParallelDriver = ...;
var result = nativeParallelDriver.GetCurrentThreadId();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
NativeParallelDriver nativeParallelDriver = ...;
nativeParallelDriver.For(0, 0, loopBody, 0);
```

## 参见

- [本区域目录](../)