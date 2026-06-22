<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TWParallel`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TWParallel

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** class
**Area:** Core

## Overview

> This is an auto-generated stub. `TWParallel` is a class in the `TaleWorlds.Library` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)