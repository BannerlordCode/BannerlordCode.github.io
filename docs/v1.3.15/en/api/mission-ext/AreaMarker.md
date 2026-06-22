<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AreaMarker`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AreaMarker

**Namespace:** TaleWorlds.MountAndBlade.Objects
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `AreaMarker` is a class in the `TaleWorlds.MountAndBlade.Objects` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Tag` | `public virtual string Tag { get; }` |


## Key Methods

### IsPositionInRange

```csharp
public bool IsPositionInRange(Vec3 position)
```

### GetUsableMachinesInRange

```csharp
public virtual List<UsableMachine> GetUsableMachinesInRange(string excludeTag = null)
```

### GetUsableMachinesWithTagInRange

```csharp
public virtual List<UsableMachine> GetUsableMachinesWithTagInRange(string tag)
```

### GetGameEntitiesWithTagInRange

```csharp
public virtual List<GameEntity> GetGameEntitiesWithTagInRange(string tag)
```

### GetName

```csharp
public virtual TextObject GetName()
```

### GetPosition

```csharp
public virtual Vec3 GetPosition()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)