<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ObjectHeaderLoadData`
- [← Area / Back to save-system](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ObjectHeaderLoadData

**Namespace:** TaleWorlds.SaveSystem.Load
**Module:** TaleWorlds.SaveSystem
**Type:** class
**Area:** Save System

## Overview

> This is an auto-generated stub. `ObjectHeaderLoadData` is a class in the `TaleWorlds.SaveSystem.Load` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Id` | `public int Id { get; }` |
| `LoadedObject` | `public object LoadedObject { get; }` |
| `Target` | `public object Target { get; }` |
| `PropertyCount` | `public short PropertyCount { get; }` |
| `ChildStructCount` | `public short ChildStructCount { get; }` |
| `TypeDefinition` | `public TypeDefinition TypeDefinition { get; }` |
| `Context` | `public LoadContext Context { get; }` |
| `SaveId` | `public SaveId SaveId { get; }` |


## Key Methods

### InitialieReaders

```csharp
public void InitialieReaders(SaveEntryFolder saveEntryFolder)
```

### CreateObject

```csharp
public void CreateObject()
```

### AdvancedResolveObject

```csharp
public void AdvancedResolveObject(MetaData metaData, ObjectLoadData objectLoadData)
```

### ResolveObject

```csharp
public void ResolveObject()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-save)