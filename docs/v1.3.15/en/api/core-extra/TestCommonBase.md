<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TestCommonBase`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TestCommonBase

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** class
**Area:** Core

## Overview

> This is an auto-generated stub. `TestCommonBase` is a class in the `TaleWorlds.Library` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `BaseInstance` | `public static TestCommonBase BaseInstance { get; }` |


## Key Methods

### Tick

```csharp
public abstract void Tick()
```

### StartTimeoutTimer

```csharp
public void StartTimeoutTimer()
```

### ToggleTimeoutTimer

```csharp
public void ToggleTimeoutTimer()
```

### CheckTimeoutTimer

```csharp
public bool CheckTimeoutTimer()
```

### GetGameStatus

```csharp
public virtual string GetGameStatus()
```

### WaitFor

```csharp
public void WaitFor(double seconds)
```

### WaitUntil

```csharp
public virtual Task WaitUntil(Func<bool> func)
```

### WaitForAsync

```csharp
public Task WaitForAsync(double seconds, Random random)
```

### WaitForAsync

```csharp
public Task WaitForAsync(double seconds)
```

### GetAttachmentsFolderPath

```csharp
public static string GetAttachmentsFolderPath()
```

### OnFinalize

```csharp
public virtual void OnFinalize()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)