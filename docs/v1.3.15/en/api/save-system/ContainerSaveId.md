<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ContainerSaveId`
- [← Area / Back to save-system](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ContainerSaveId

**Namespace:** TaleWorlds.SaveSystem.Definition
**Module:** TaleWorlds.SaveSystem
**Type:** class
**Area:** Save System

## Overview

> This is an auto-generated stub. `ContainerSaveId` is a class in the `TaleWorlds.SaveSystem.Definition` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `ContainerType` | `public ContainerType ContainerType { get; set; }` |
| `KeyId` | `public SaveId KeyId { get; set; }` |
| `ValueId` | `public SaveId ValueId { get; set; }` |


## Key Methods

### GetStringId

```csharp
public override string GetStringId()
```

### WriteTo

```csharp
public override void WriteTo(IWriter writer)
```

### ReadFrom

```csharp
public static ContainerSaveId ReadFrom(IReader reader)
```

### GetSizeInBytes

```csharp
public override int GetSizeInBytes()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-save)