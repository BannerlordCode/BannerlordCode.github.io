<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Timer`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Timer

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** class
**Area:** Core

## Overview

> This is an auto-generated stub. `Timer` is a class in the `TaleWorlds.Core` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `StartTime` | `public float StartTime { get; set; }` |
| `Duration` | `public float Duration { get; set; }` |
| `PreviousDeltaTime` | `public float PreviousDeltaTime { get; }` |


## Key Methods

### Check

```csharp
public virtual bool Check(float gameTime)
```

### ElapsedTime

```csharp
public float ElapsedTime()
```

### Reset

```csharp
public void Reset(float gameTime)
```

### Reset

```csharp
public void Reset(float gameTime, float newDuration)
```

### AdjustStartTime

```csharp
public void AdjustStartTime(float deltaTime)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)