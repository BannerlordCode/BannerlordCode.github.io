<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TWParallel`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 初始化 `and set implementation` 的状态、资源或绑定。

### For
`public static void For(int fromInclusive, int toExclusive, TWParallel.ParallelForAuxPredicate body, int grainSize = 16)`

**用途 / Purpose:** 处理 `for` 相关逻辑。

### For
`public static void For(int fromInclusive, int toExclusive, float deltaTime, TWParallel.ParallelForWithDtAuxPredicate body, int grainSize = 16)`

**用途 / Purpose:** 处理 `for` 相关逻辑。

### AssertIsMainThread
`public static void AssertIsMainThread()`

**用途 / Purpose:** 处理 `assert is main thread` 相关逻辑。

### IsMainThread
`public static bool IsMainThread()`

**用途 / Purpose:** 处理 `is main thread` 相关逻辑。

### ParallelForAuxPredicate
`public delegate void ParallelForAuxPredicate(int localStartIndex, int localEndIndex)`

**用途 / Purpose:** 处理 `parallel for aux predicate` 相关逻辑。

### ParallelForWithDtAuxPredicate
`public delegate void ParallelForWithDtAuxPredicate(int localStartIndex, int localEndIndex, float dt)`

**用途 / Purpose:** 处理 `parallel for with dt aux predicate` 相关逻辑。

## 使用示例

```csharp
TWParallel.InitializeAndSetImplementation(parallelDriver);
```

## 参见

- [完整类目录](../catalog)