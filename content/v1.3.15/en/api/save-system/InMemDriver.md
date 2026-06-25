---
title: "InMemDriver"
description: "Auto-generated class reference for InMemDriver."
---
# InMemDriver

**Namespace:** TaleWorlds.SaveSystem
**Module:** TaleWorlds.SaveSystem
**Type:** `public class InMemDriver : ISaveDriver`
**Base:** `ISaveDriver`
**File:** `TaleWorlds.SaveSystem/InMemDriver.cs`

## Overview

`InMemDriver` lives in `TaleWorlds.SaveSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Save
`public Task<SaveResultWithMessage> Save(string saveName, int version, MetaData metaData, GameData gameData)`

**Purpose:** Writes the current object's data to persistent storage or a stream.

```csharp
// Obtain an instance of InMemDriver from the subsystem API first
InMemDriver inMemDriver = ...;
var result = inMemDriver.Save("example", 0, metaData, gameData);
```

### LoadMetaData
`public MetaData LoadMetaData(string saveName)`

**Purpose:** Reads `meta data` from persistent storage or a stream.

```csharp
// Obtain an instance of InMemDriver from the subsystem API first
InMemDriver inMemDriver = ...;
var result = inMemDriver.LoadMetaData("example");
```

### Load
`public LoadData Load(string saveName)`

**Purpose:** Reads the current object's data from persistent storage or a stream.

```csharp
// Obtain an instance of InMemDriver from the subsystem API first
InMemDriver inMemDriver = ...;
var result = inMemDriver.Load("example");
```

### GetSaveGameFileInfos
`public SaveGameFileInfo GetSaveGameFileInfos()`

**Purpose:** Reads and returns the `save game file infos` value held by the current object.

```csharp
// Obtain an instance of InMemDriver from the subsystem API first
InMemDriver inMemDriver = ...;
var result = inMemDriver.GetSaveGameFileInfos();
```

### GetSaveGameFileNames
`public string GetSaveGameFileNames()`

**Purpose:** Reads and returns the `save game file names` value held by the current object.

```csharp
// Obtain an instance of InMemDriver from the subsystem API first
InMemDriver inMemDriver = ...;
var result = inMemDriver.GetSaveGameFileNames();
```

### Delete
`public bool Delete(string saveName)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of InMemDriver from the subsystem API first
InMemDriver inMemDriver = ...;
var result = inMemDriver.Delete("example");
```

### IsSaveGameFileExists
`public bool IsSaveGameFileExists(string saveName)`

**Purpose:** Determines whether the current object is in the `save game file exists` state or condition.

```csharp
// Obtain an instance of InMemDriver from the subsystem API first
InMemDriver inMemDriver = ...;
var result = inMemDriver.IsSaveGameFileExists("example");
```

### IsWorkingAsync
`public bool IsWorkingAsync()`

**Purpose:** Determines whether the current object is in the `working async` state or condition.

```csharp
// Obtain an instance of InMemDriver from the subsystem API first
InMemDriver inMemDriver = ...;
var result = inMemDriver.IsWorkingAsync();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
InMemDriver inMemDriver = ...;
inMemDriver.Save("example", 0, metaData, gameData);
```

## See Also

- [Area Index](../)