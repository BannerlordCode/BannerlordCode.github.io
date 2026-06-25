---
title: "TWParallel"
description: "TWParallel 的自动生成类参考。"
---
# TWParallel

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class TWParallel`
**Base:** 无
**File:** `TaleWorlds.Library/TWParallel.cs`

## 概述

`TWParallel` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### InitializeAndSetImplementation
`public static void InitializeAndSetImplementation(IParallelDriver parallelDriver)`

**用途 / Purpose:** 为 and set implementation 初始化必要的资源、状态或绑定。

```csharp
// 静态调用，不需要实例
TWParallel.InitializeAndSetImplementation(parallelDriver);
```

### For
`public static void For(int fromInclusive, int toExclusive, TWParallel.ParallelForAuxPredicate body, int grainSize = 16)`

**用途 / Purpose:** 调用 For 对应的操作。

```csharp
// 静态调用，不需要实例
TWParallel.For(0, 0, body, 0);
```

### For
`public static void For(int fromInclusive, int toExclusive, float deltaTime, TWParallel.ParallelForWithDtAuxPredicate body, int grainSize = 16)`

**用途 / Purpose:** 调用 For 对应的操作。

```csharp
// 静态调用，不需要实例
TWParallel.For(0, 0, 0, body, 0);
```

### AssertIsMainThread
`public static void AssertIsMainThread()`

**用途 / Purpose:** 调用 AssertIsMainThread 对应的操作。

```csharp
// 静态调用，不需要实例
TWParallel.AssertIsMainThread();
```

### IsMainThread
`public static bool IsMainThread()`

**用途 / Purpose:** 判断当前对象是否处于 main thread 状态或条件。

```csharp
// 静态调用，不需要实例
TWParallel.IsMainThread();
```

### ParallelForAuxPredicate
`public delegate void ParallelForAuxPredicate(int localStartIndex, int localEndIndex)`

**用途 / Purpose:** 调用 ParallelForAuxPredicate 对应的操作。

```csharp
// 先通过子系统 API 拿到 TWParallel 实例
TWParallel tWParallel = ...;
tWParallel.ParallelForAuxPredicate(0, 0);
```

### ParallelForWithDtAuxPredicate
`public delegate void ParallelForWithDtAuxPredicate(int localStartIndex, int localEndIndex, float dt)`

**用途 / Purpose:** 调用 ParallelForWithDtAuxPredicate 对应的操作。

```csharp
// 先通过子系统 API 拿到 TWParallel 实例
TWParallel tWParallel = ...;
tWParallel.ParallelForWithDtAuxPredicate(0, 0, 0);
```

## 使用示例

```csharp
TWParallel.InitializeAndSetImplementation(parallelDriver);
```

## 参见

- [本区域目录](../)