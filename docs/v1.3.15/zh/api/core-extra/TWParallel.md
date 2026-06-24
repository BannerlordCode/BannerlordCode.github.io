<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TWParallel`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TWParallel

**命名空间:** TaleWorlds.Library
**模块:** TaleWorlds.Library
**类型:** `public static class TWParallel`
**领域:** core-extra

## 概述

`TWParallel` 位于 `TaleWorlds.Library`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### InitializeAndSetImplementation
`public static void InitializeAndSetImplementation(IParallelDriver parallelDriver)`

**用途 / Purpose:** 初始化 `and set implementation` 的状态、资源或绑定。

### For
`public static void For(int fromInclusive, int toExclusive, TWParallel.ParallelForAuxPredicate body, int grainSize = 16)`

**用途 / Purpose:** 处理 `for` 相关逻辑。

### ForWithoutRenderThread
`public static void ForWithoutRenderThread(int fromInclusive, int toExclusive, TWParallel.ParallelForAuxPredicate body, int grainSize = 16)`

**用途 / Purpose:** 处理 `for without render thread` 相关逻辑。

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
// 先准备该类型需要的上下文，然后直接调用静态入口
TWParallel.InitializeAndSetImplementation(parallelDriver);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)
