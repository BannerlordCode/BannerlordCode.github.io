---
title: "SaveStatistics"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SaveStatistics`
- [← Area / Back to save-system](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SaveStatistics

**Namespace:** TaleWorlds.SaveSystem.Save
**Module:** TaleWorlds.SaveSystem
**Type:** `public struct SaveStatistics`
**Area:** save-system

## Overview

`SaveStatistics` lives in `TaleWorlds.SaveSystem.Save`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem.Save` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `RootObject` | `public object RootObject { get; }` |
| `SaveData` | `public GameData SaveData { get; }` |
| `DefinitionContext` | `public DefinitionContext DefinitionContext { get; }` |
| `EnableSaveStatistics` | `public static bool EnableSaveStatistics { get; }` |

## Key Methods

### GetStatistics
`public static LegacySaveContext.SaveStatistics GetStatistics()`

**Purpose:** Gets the current value of `statistics`.

### AddStrings
`public void AddStrings(List<string> texts)`

**Purpose:** Adds `strings` to the current collection or state.

### AddOrGetStringId
`public int AddOrGetStringId(string text)`

**Purpose:** Adds `or get string id` to the current collection or state.

### GetObjectId
`public int GetObjectId(object target)`

**Purpose:** Gets the current value of `object id`.

### GetContainerId
`public int GetContainerId(object target)`

**Purpose:** Gets the current value of `container id`.

### GetStringId
`public int GetStringId(string target)`

**Purpose:** Gets the current value of `string id`.

### Save
`public bool Save(object target, MetaData metaData, out string errorMessage)`

**Purpose:** Saves `save` data.

### GetObjectCounts
`public ValueTuple<int, int, int, long> GetObjectCounts(string key)`

**Purpose:** Gets the current value of `object counts`.

### GetContainerCounts
`public ValueTuple<int, int, int, int, long> GetContainerCounts(string key)`

**Purpose:** Gets the current value of `container counts`.

### GetContainerSize
`public long GetContainerSize(string key)`

**Purpose:** Gets the current value of `container size`.

### GetTypeKeys
`public List<string> GetTypeKeys()`

**Purpose:** Gets the current value of `type keys`.

### GetContainerKeys
`public List<string> GetContainerKeys()`

**Purpose:** Gets the current value of `container keys`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
SaveStatistics.GetStatistics();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-save)
