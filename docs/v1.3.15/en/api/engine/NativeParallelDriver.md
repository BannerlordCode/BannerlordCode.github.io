<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NativeParallelDriver`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NativeParallelDriver

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** class
**Area:** Engine

## Overview

> This is an auto-generated stub. `NativeParallelDriver` is a class in the `TaleWorlds.Engine` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

### For

```csharp
public void For(int fromInclusive, int toExclusive, TWParallel.ParallelForAuxPredicate loopBody, int grainSize)
```

### ForWithoutRenderThread

```csharp
public void ForWithoutRenderThread(int fromInclusive, int toExclusive, TWParallel.ParallelForAuxPredicate loopBody, int grainSize)
```

### For

```csharp
public void For(int fromInclusive, int toExclusive, float deltaTime, TWParallel.ParallelForWithDtAuxPredicate loopBody, int grainSize)
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
- [Area catalog](../catalog-engine)