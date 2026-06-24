<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ContainerHeaderLoadData`
- [← Area / Back to save-system](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ContainerHeaderLoadData

**Namespace:** TaleWorlds.SaveSystem.Load
**Module:** TaleWorlds.SaveSystem
**Type:** `public class ContainerHeaderLoadData`
**Area:** save-system

## Overview

`ContainerHeaderLoadData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `ContainerHeaderLoadData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Id` | `public int Id { get; }` |
| `Target` | `public object Target { get; }` |
| `Context` | `public LoadContext Context { get; }` |
| `TypeDefinition` | `public ContainerDefinition TypeDefinition { get; }` |
| `SaveId` | `public SaveId SaveId { get; }` |
| `ElementCount` | `public int ElementCount { get; }` |
| `ContainerType` | `public ContainerType ContainerType { get; }` |

## Key Methods

### GetObjectTypeDefinition
`public bool GetObjectTypeDefinition()`

**Purpose:** Gets the current value of `object type definition`.

### CreateObject
`public void CreateObject()`

**Purpose:** Creates a new `object` instance or object.

### InitialieReaders
`public void InitialieReaders(SaveEntryFolder saveEntryFolder)`

**Purpose:** Initializes the state, resources, or bindings for `ialie readers`.

## Usage Example

```csharp
var value = new ContainerHeaderLoadData();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-save)
