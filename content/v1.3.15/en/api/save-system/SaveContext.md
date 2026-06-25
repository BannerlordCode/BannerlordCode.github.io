---
title: "SaveContext"
description: "Auto-generated class reference for SaveContext."
---
# SaveContext

**Namespace:** TaleWorlds.SaveSystem.Save
**Module:** TaleWorlds.SaveSystem
**Type:** `public class SaveContext : ISaveContext`
**Base:** `ISaveContext`
**File:** `TaleWorlds.SaveSystem/Save/SaveContext.cs`

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
| `EnableSaveStatistics` | `public static bool EnableSaveStatistics { get; }` |

## Key Methods

### GetStatistics
`public static SaveContext.SaveStatistics GetStatistics()`

**Purpose:** Reads and returns the `statistics` value held by the current object.

```csharp
// Static call; no instance required
SaveContext.GetStatistics();
```

### AddOrGetStringId
`public int AddOrGetStringId(string text)`

**Purpose:** Adds `or get string id` to the current collection or state.

```csharp
// Obtain an instance of SaveContext from the subsystem API first
SaveContext saveContext = ...;
var result = saveContext.AddOrGetStringId("example");
```

### GetObjectId
`public int GetObjectId(object target)`

**Purpose:** Reads and returns the `object id` value held by the current object.

```csharp
// Obtain an instance of SaveContext from the subsystem API first
SaveContext saveContext = ...;
var result = saveContext.GetObjectId(target);
```

### GetContainerId
`public int GetContainerId(object target)`

**Purpose:** Reads and returns the `container id` value held by the current object.

```csharp
// Obtain an instance of SaveContext from the subsystem API first
SaveContext saveContext = ...;
var result = saveContext.GetContainerId(target);
```

### GetStringId
`public int GetStringId(string target)`

**Purpose:** Reads and returns the `string id` value held by the current object.

```csharp
// Obtain an instance of SaveContext from the subsystem API first
SaveContext saveContext = ...;
var result = saveContext.GetStringId("example");
```

### GetStringSizeInBytes
`public static int GetStringSizeInBytes(string text)`

**Purpose:** Reads and returns the `string size in bytes` value held by the current object.

```csharp
// Static call; no instance required
SaveContext.GetStringSizeInBytes("example");
```

### Save
`public bool Save(object target, MetaData metaData, out string errorMessage)`

**Purpose:** Writes the current object's data to persistent storage or a stream.

```csharp
// Obtain an instance of SaveContext from the subsystem API first
SaveContext saveContext = ...;
var result = saveContext.Save(target, metaData, errorMessage);
```

### GetObjectCounts
`public ValueTuple<int, int, int, long> GetObjectCounts(string key)`

**Purpose:** Reads and returns the `object counts` value held by the current object.

```csharp
// Obtain an instance of SaveContext from the subsystem API first
SaveContext saveContext = ...;
var result = saveContext.GetObjectCounts("example");
```

### GetContainerCounts
`public ValueTuple<int, int, int, int, long> GetContainerCounts(string key)`

**Purpose:** Reads and returns the `container counts` value held by the current object.

```csharp
// Obtain an instance of SaveContext from the subsystem API first
SaveContext saveContext = ...;
var result = saveContext.GetContainerCounts("example");
```

### GetContainerSize
`public long GetContainerSize(string key)`

**Purpose:** Reads and returns the `container size` value held by the current object.

```csharp
// Obtain an instance of SaveContext from the subsystem API first
SaveContext saveContext = ...;
var result = saveContext.GetContainerSize("example");
```

### GetTypeKeys
`public List<string> GetTypeKeys()`

**Purpose:** Reads and returns the `type keys` value held by the current object.

```csharp
// Obtain an instance of SaveContext from the subsystem API first
SaveContext saveContext = ...;
var result = saveContext.GetTypeKeys();
```

### GetContainerKeys
`public List<string> GetContainerKeys()`

**Purpose:** Reads and returns the `container keys` value held by the current object.

```csharp
// Obtain an instance of SaveContext from the subsystem API first
SaveContext saveContext = ...;
var result = saveContext.GetContainerKeys();
```

## Usage Example

```csharp
SaveContext.GetStatistics();
```

## See Also

- [Area Index](../)