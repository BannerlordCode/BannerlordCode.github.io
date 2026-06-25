---
title: "SaveStatistics"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SaveStatistics`
- [← Area / Back to save-system](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SaveStatistics

**Namespace:** TaleWorlds.SaveSystem.Save
**Module:** TaleWorlds.SaveSystem
**Type:** `public struct SaveStatistics`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem.Save/LegacySaveContext.cs`

## Overview

`SaveStatistics` lives in `TaleWorlds.SaveSystem.Save` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem.Save` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

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

## Usage Example

```csharp
var value = new SaveStatistics();
value.SaveStatistics(dictionary<string, (int, 0, 0, 0, dictionary<string, (int, 0, 0, 0, 0);
```

## See Also

- [Complete Class Catalog](../catalog)