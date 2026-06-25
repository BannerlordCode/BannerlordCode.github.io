---
title: "LoadResult"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LoadResult`
- [← Area / Back to save-system](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LoadResult

**Namespace:** TaleWorlds.SaveSystem.Load
**Module:** TaleWorlds.SaveSystem
**Type:** `public class LoadResult`
**Area:** save-system

## Overview

`LoadResult` lives in `TaleWorlds.SaveSystem.Load`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem.Load` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Root` | `public object Root { get; }` |
| `Successful` | `public bool Successful { get; }` |
| `Errors` | `public LoadError Errors { get; }` |
| `MetaData` | `public MetaData MetaData { get; }` |

## Key Methods

### InitializeObjects
`public void InitializeObjects()`

**Purpose:** Initializes the state, resources, or bindings for `objects`.

### AfterInitializeObjects
`public void AfterInitializeObjects()`

**Purpose:** Handles logic related to `after initialize objects`.

## Usage Example

```csharp
// First obtain a LoadResult instance from game state, then call one of its public methods
var value = new LoadResult();
value.InitializeObjects();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-save)
