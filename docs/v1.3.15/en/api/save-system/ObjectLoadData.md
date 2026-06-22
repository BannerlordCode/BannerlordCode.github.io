<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ObjectLoadData`
- [← Area / Back to save-system](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ObjectLoadData

**Namespace:** TaleWorlds.SaveSystem.Load
**Module:** TaleWorlds.SaveSystem
**Type:** class
**Area:** Save System

## Overview

> This is an auto-generated stub. `ObjectLoadData` is a class in the `TaleWorlds.SaveSystem.Load` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Id` | `public int Id { get; }` |
| `Target` | `public object Target { get; }` |
| `Context` | `public LoadContext Context { get; }` |
| `TypeDefinition` | `public TypeDefinition TypeDefinition { get; }` |


## Key Methods

### GetDataBySaveId

```csharp
public object GetDataBySaveId(int localSaveId)
```

### GetMemberValueBySaveId

```csharp
public object GetMemberValueBySaveId(int localSaveId)
```

### GetFieldValueBySaveId

```csharp
public object GetFieldValueBySaveId(int localSaveId)
```

### GetPropertyValueBySaveId

```csharp
public object GetPropertyValueBySaveId(int localSaveId)
```

### HasMember

```csharp
public bool HasMember(int localSaveId)
```

### InitializeReaders

```csharp
public void InitializeReaders(SaveEntryFolder saveEntryFolder)
```

### CreateStruct

```csharp
public void CreateStruct()
```

### FillCreatedObject

```csharp
public void FillCreatedObject()
```

### Read

```csharp
public void Read()
```

### FillObject

```csharp
public void FillObject()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-save)