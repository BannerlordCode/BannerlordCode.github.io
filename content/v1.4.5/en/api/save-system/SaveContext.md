---
title: "SaveContext"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SaveContext`
- [← Area / Back to save-system](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SaveContext

**Namespace:** TaleWorlds.SaveSystem.Save
**Module:** TaleWorlds.SaveSystem
**Type:** `public class SaveContext : ISaveContext`
**Base:** `ISaveContext`
**File:** `Bannerlord.Source/bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem.Save/SaveContext.cs`

## Overview

`SaveContext` lives in `TaleWorlds.SaveSystem.Save` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem.Save` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `RootObject` | `public object RootObject { get; }` |
| `SaveData` | `public GameData SaveData { get; }` |
| `DefinitionContext` | `public DefinitionContext DefinitionContext { get; }` |

## Key Methods

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### SaveStatistics
`public struct SaveStatistics(Dictionary<string, (int, int, int, long)> typeStatistics, Dictionary<string, (int, int, int, int, long)> containerStatistics)`

**Purpose:** Saves `statistics` data.

### GetContainerSize
`public long GetContainerSize(string key)`

**Purpose:** Gets the current value of `container size`.

### GetTypeKeys
`public List<string> GetTypeKeys()`

**Purpose:** Gets the current value of `type keys`.

### GetContainerKeys
`public List<string> GetContainerKeys()`

**Purpose:** Gets the current value of `container keys`.

### GetStatistics
`public static SaveStatistics GetStatistics()`

**Purpose:** Gets the current value of `statistics`.

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

### GetStringSizeInBytes
`public static int GetStringSizeInBytes(string text)`

**Purpose:** Gets the current value of `string size in bytes`.

### Save
`public bool Save(object target, MetaData metaData, out string errorMessage)`

**Purpose:** Saves `save` data.

## Usage Example

```csharp
var value = new SaveContext();
value.ToString();
```

## See Also

- [Complete Class Catalog](../catalog)