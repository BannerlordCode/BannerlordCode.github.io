<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TWParallel`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TWParallel

**命名空间:** TaleWorlds.Library
**模块:** TaleWorlds.Library
**类型:** 类 class class
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`TWParallel` 是 `TaleWorlds.Library` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要方法

### InitializeAndSetImplementation

```csharp
public static void InitializeAndSetImplementation(IParallelDriver parallelDriver)
```

### For

```csharp
public static void For(int fromInclusive, int toExclusive, TWParallel.ParallelForAuxPredicate body, int grainSize = 16)
```

### ForWithoutRenderThread

```csharp
public static void ForWithoutRenderThread(int fromInclusive, int toExclusive, TWParallel.ParallelForAuxPredicate body, int grainSize = 16)
```

### For

```csharp
public static void For(int fromInclusive, int toExclusive, float deltaTime, TWParallel.ParallelForWithDtAuxPredicate body, int grainSize = 16)
```

### AssertIsMainThread

```csharp
public static void AssertIsMainThread()
```

### IsMainThread

```csharp
public static bool IsMainThread()
```

### ParallelForAuxPredicate

```csharp
public delegate void ParallelForAuxPredicate(int localStartIndex, int localEndIndex)
```

### ParallelForWithDtAuxPredicate

```csharp
public delegate void ParallelForWithDtAuxPredicate(int localStartIndex, int localEndIndex, float dt)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)