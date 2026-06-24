<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LoadResult`
- [← Area / Back to save-system](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# LoadResult

**Namespace:** TaleWorlds.SaveSystem.Load
**Module:** TaleWorlds.SaveSystem
**Type:** `public class LoadResult`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem.Load/LoadResult.cs`

## Overview

`LoadResult` lives in `TaleWorlds.SaveSystem.Load` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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
var value = new LoadResult();
value.InitializeObjects();
```

## See Also

- [Complete Class Catalog](../catalog)