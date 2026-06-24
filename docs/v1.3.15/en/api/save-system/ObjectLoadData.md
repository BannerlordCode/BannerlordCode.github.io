<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ObjectLoadData`
- [← Area / Back to save-system](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ObjectLoadData

**Namespace:** TaleWorlds.SaveSystem.Load
**Module:** TaleWorlds.SaveSystem
**Type:** `public class ObjectLoadData`
**Area:** save-system

## Overview

`ObjectLoadData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `ObjectLoadData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Id` | `public int Id { get; }` |
| `Target` | `public object Target { get; }` |
| `Context` | `public LoadContext Context { get; }` |
| `TypeDefinition` | `public TypeDefinition TypeDefinition { get; }` |

## Key Methods

### GetDataBySaveId
`public object GetDataBySaveId(int localSaveId)`

**Purpose:** Gets the current value of `data by save id`.

### GetMemberValueBySaveId
`public object GetMemberValueBySaveId(int localSaveId)`

**Purpose:** Gets the current value of `member value by save id`.

### GetFieldValueBySaveId
`public object GetFieldValueBySaveId(int localSaveId)`

**Purpose:** Gets the current value of `field value by save id`.

### GetPropertyValueBySaveId
`public object GetPropertyValueBySaveId(int localSaveId)`

**Purpose:** Gets the current value of `property value by save id`.

### HasMember
`public bool HasMember(int localSaveId)`

**Purpose:** Checks whether the current object has/contains `member`.

### InitializeReaders
`public void InitializeReaders(SaveEntryFolder saveEntryFolder)`

**Purpose:** Initializes the state, resources, or bindings for `readers`.

### CreateStruct
`public void CreateStruct()`

**Purpose:** Creates a new `struct` instance or object.

### FillCreatedObject
`public void FillCreatedObject()`

**Purpose:** Handles logic related to `fill created object`.

### Read
`public void Read()`

**Purpose:** Handles logic related to `read`.

### FillObject
`public void FillObject()`

**Purpose:** Handles logic related to `fill object`.

## Usage Example

```csharp
var value = new ObjectLoadData();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-save)
