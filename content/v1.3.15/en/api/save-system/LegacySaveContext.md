---
title: "LegacySaveContext"
description: "Auto-generated class reference for LegacySaveContext."
---
# LegacySaveContext

**Namespace:** TaleWorlds.SaveSystem.Save
**Module:** TaleWorlds.SaveSystem
**Type:** `public class LegacySaveContext : ISaveContext`
**Base:** `ISaveContext`
**File:** `TaleWorlds.SaveSystem/Save/LegacySaveContext.cs`

## Overview

`LegacySaveContext` lives in `TaleWorlds.SaveSystem.Save` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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

**Purpose:** **Purpose:** Reads and returns the statistics value held by the this instance.

```csharp
// Static call; no instance required
LegacySaveContext.GetStatistics();
```

### AddStrings
`public void AddStrings(List<string> texts)`

**Purpose:** **Purpose:** Adds strings to the current collection or state.

```csharp
// Obtain an instance of LegacySaveContext from the subsystem API first
LegacySaveContext legacySaveContext = ...;
legacySaveContext.AddStrings(texts);
```

### AddOrGetStringId
`public int AddOrGetStringId(string text)`

**Purpose:** **Purpose:** Adds or get string id to the current collection or state.

```csharp
// Obtain an instance of LegacySaveContext from the subsystem API first
LegacySaveContext legacySaveContext = ...;
var result = legacySaveContext.AddOrGetStringId("example");
```

### GetObjectId
`public int GetObjectId(object target)`

**Purpose:** **Purpose:** Reads and returns the object id value held by the this instance.

```csharp
// Obtain an instance of LegacySaveContext from the subsystem API first
LegacySaveContext legacySaveContext = ...;
var result = legacySaveContext.GetObjectId(target);
```

### GetContainerId
`public int GetContainerId(object target)`

**Purpose:** **Purpose:** Reads and returns the container id value held by the this instance.

```csharp
// Obtain an instance of LegacySaveContext from the subsystem API first
LegacySaveContext legacySaveContext = ...;
var result = legacySaveContext.GetContainerId(target);
```

### GetStringId
`public int GetStringId(string target)`

**Purpose:** **Purpose:** Reads and returns the string id value held by the this instance.

```csharp
// Obtain an instance of LegacySaveContext from the subsystem API first
LegacySaveContext legacySaveContext = ...;
var result = legacySaveContext.GetStringId("example");
```

### Save
`public bool Save(object target, MetaData metaData, out string errorMessage)`

**Purpose:** **Purpose:** Writes the this instance's data to persistent storage or a stream.

```csharp
// Obtain an instance of LegacySaveContext from the subsystem API first
LegacySaveContext legacySaveContext = ...;
var result = legacySaveContext.Save(target, metaData, errorMessage);
```

### GetObjectCounts
`public ValueTuple<int, int, int, long> GetObjectCounts(string key)`

**Purpose:** **Purpose:** Reads and returns the object counts value held by the this instance.

```csharp
// Obtain an instance of LegacySaveContext from the subsystem API first
LegacySaveContext legacySaveContext = ...;
var result = legacySaveContext.GetObjectCounts("example");
```

### GetContainerCounts
`public ValueTuple<int, int, int, int, long> GetContainerCounts(string key)`

**Purpose:** **Purpose:** Reads and returns the container counts value held by the this instance.

```csharp
// Obtain an instance of LegacySaveContext from the subsystem API first
LegacySaveContext legacySaveContext = ...;
var result = legacySaveContext.GetContainerCounts("example");
```

### GetContainerSize
`public long GetContainerSize(string key)`

**Purpose:** **Purpose:** Reads and returns the container size value held by the this instance.

```csharp
// Obtain an instance of LegacySaveContext from the subsystem API first
LegacySaveContext legacySaveContext = ...;
var result = legacySaveContext.GetContainerSize("example");
```

### GetTypeKeys
`public List<string> GetTypeKeys()`

**Purpose:** **Purpose:** Reads and returns the type keys value held by the this instance.

```csharp
// Obtain an instance of LegacySaveContext from the subsystem API first
LegacySaveContext legacySaveContext = ...;
var result = legacySaveContext.GetTypeKeys();
```

### GetContainerKeys
`public List<string> GetContainerKeys()`

**Purpose:** **Purpose:** Reads and returns the container keys value held by the this instance.

```csharp
// Obtain an instance of LegacySaveContext from the subsystem API first
LegacySaveContext legacySaveContext = ...;
var result = legacySaveContext.GetContainerKeys();
```

## Usage Example

```csharp
LegacySaveContext.GetStatistics();
```

## See Also

- [Area Index](../)