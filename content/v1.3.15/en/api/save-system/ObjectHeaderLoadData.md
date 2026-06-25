---
title: "ObjectHeaderLoadData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ObjectHeaderLoadData`
- [← Area / Back to save-system](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ObjectHeaderLoadData

**Namespace:** TaleWorlds.SaveSystem.Load
**Module:** TaleWorlds.SaveSystem
**Type:** `public class ObjectHeaderLoadData`
**Area:** save-system

## Overview

`ObjectHeaderLoadData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `ObjectHeaderLoadData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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
`public void InitialieReaders(SaveEntryFolder saveEntryFolder)`

**Purpose:** Initializes the state, resources, or bindings for `ialie readers`.

### CreateObject
`public void CreateObject()`

**Purpose:** Creates a new `object` instance or object.

### AdvancedResolveObject
`public void AdvancedResolveObject(MetaData metaData, ObjectLoadData objectLoadData)`

**Purpose:** Handles logic related to `advanced resolve object`.

### ResolveObject
`public void ResolveObject()`

**Purpose:** Handles logic related to `resolve object`.

## Usage Example

```csharp
var value = new ObjectHeaderLoadData();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-save)
