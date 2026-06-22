<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultParallelDriver`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultParallelDriver

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** class
**Area:** Core

## Overview

> This is an auto-generated stub. `DefaultParallelDriver` is a class in the `TaleWorlds.Library` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

### For

```csharp
public void For(int fromInclusive, int toExclusive, TWParallel.ParallelForAuxPredicate body, int grainSize)
```

### ForWithoutRenderThread

```csharp
public void ForWithoutRenderThread(int fromInclusive, int toExclusive, TWParallel.ParallelForAuxPredicate body, int grainSize)
```

### For

```csharp
public void For(int fromInclusive, int toExclusive, float deltaTime, TWParallel.ParallelForWithDtAuxPredicate body, int grainSize)
```

### GetMainThreadId

```csharp
public ulong GetMainThreadId()
```

### GetCurrentThreadId

```csharp
public ulong GetCurrentThreadId()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)