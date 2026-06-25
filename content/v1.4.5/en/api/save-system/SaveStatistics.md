---
title: "SaveStatistics"
description: "Auto-generated class reference for SaveStatistics."
---
# SaveStatistics

**Namespace:** TaleWorlds.SaveSystem.Save
**Module:** TaleWorlds.SaveSystem
**Type:** `public struct SaveStatistics`
**Base:** none
**File:** `bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem.Save/LegacySaveContext.cs`

## Overview

`SaveStatistics` lives in `TaleWorlds.SaveSystem.Save` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem.Save` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SaveStatistics
`public struct SaveStatistics(Dictionary<string, (int, int, int, long)> typeStatistics, Dictionary<string, (int, int, int, int, long)> containerStatistics)`

**Purpose:** **Purpose:** Writes statistics to persistent storage or a stream.

```csharp
// Obtain an instance of SaveStatistics from the subsystem API first
SaveStatistics saveStatistics = ...;
var result = saveStatistics.SaveStatistics(dictionary<string, (int, 0, 0, 0, dictionary<string, (int, 0, 0, 0, 0);
```

### GetContainerSize
`public long GetContainerSize(string key)`

**Purpose:** **Purpose:** Reads and returns the container size value held by the this instance.

```csharp
// Obtain an instance of SaveStatistics from the subsystem API first
SaveStatistics saveStatistics = ...;
var result = saveStatistics.GetContainerSize("example");
```

### GetTypeKeys
`public List<string> GetTypeKeys()`

**Purpose:** **Purpose:** Reads and returns the type keys value held by the this instance.

```csharp
// Obtain an instance of SaveStatistics from the subsystem API first
SaveStatistics saveStatistics = ...;
var result = saveStatistics.GetTypeKeys();
```

### GetContainerKeys
`public List<string> GetContainerKeys()`

**Purpose:** **Purpose:** Reads and returns the container keys value held by the this instance.

```csharp
// Obtain an instance of SaveStatistics from the subsystem API first
SaveStatistics saveStatistics = ...;
var result = saveStatistics.GetContainerKeys();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SaveStatistics saveStatistics = ...;
saveStatistics.SaveStatistics(dictionary<string, (int, 0, 0, 0, dictionary<string, (int, 0, 0, 0, 0);
```

## See Also

- [Area Index](../)