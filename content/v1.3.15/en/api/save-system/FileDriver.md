---
title: "FileDriver"
description: "Auto-generated class reference for FileDriver."
---
# FileDriver

**Namespace:** TaleWorlds.SaveSystem
**Module:** TaleWorlds.SaveSystem
**Type:** `public class FileDriver : ISaveDriver`
**Base:** `ISaveDriver`
**File:** `TaleWorlds.SaveSystem/FileDriver.cs`

## Overview

`FileDriver` lives in `TaleWorlds.SaveSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SavePath` | `public static PlatformDirectoryPath SavePath { get; }` |

## Key Methods

### GetSaveFilePath
`public static PlatformFilePath GetSaveFilePath(string fileName)`

**Purpose:** Reads and returns the `save file path` value held by the current object.

```csharp
// Static call; no instance required
FileDriver.GetSaveFilePath("example");
```

### Save
`public Task<SaveResultWithMessage> Save(string saveName, int version, MetaData metaData, GameData gameData)`

**Purpose:** Writes the current object's data to persistent storage or a stream.

```csharp
// Obtain an instance of FileDriver from the subsystem API first
FileDriver fileDriver = ...;
var result = fileDriver.Save("example", 0, metaData, gameData);
```

### LoadMetaData
`public MetaData LoadMetaData(string saveName)`

**Purpose:** Reads `meta data` from persistent storage or a stream.

```csharp
// Obtain an instance of FileDriver from the subsystem API first
FileDriver fileDriver = ...;
var result = fileDriver.LoadMetaData("example");
```

### Load
`public LoadData Load(string saveName)`

**Purpose:** Reads the current object's data from persistent storage or a stream.

```csharp
// Obtain an instance of FileDriver from the subsystem API first
FileDriver fileDriver = ...;
var result = fileDriver.Load("example");
```

### GetSaveGameFileInfos
`public SaveGameFileInfo GetSaveGameFileInfos()`

**Purpose:** Reads and returns the `save game file infos` value held by the current object.

```csharp
// Obtain an instance of FileDriver from the subsystem API first
FileDriver fileDriver = ...;
var result = fileDriver.GetSaveGameFileInfos();
```

### GetSaveGameFileNames
`public string GetSaveGameFileNames()`

**Purpose:** Reads and returns the `save game file names` value held by the current object.

```csharp
// Obtain an instance of FileDriver from the subsystem API first
FileDriver fileDriver = ...;
var result = fileDriver.GetSaveGameFileNames();
```

### Delete
`public bool Delete(string saveName)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of FileDriver from the subsystem API first
FileDriver fileDriver = ...;
var result = fileDriver.Delete("example");
```

### IsSaveGameFileExists
`public bool IsSaveGameFileExists(string saveName)`

**Purpose:** Determines whether the current object is in the `save game file exists` state or condition.

```csharp
// Obtain an instance of FileDriver from the subsystem API first
FileDriver fileDriver = ...;
var result = fileDriver.IsSaveGameFileExists("example");
```

### IsWorkingAsync
`public bool IsWorkingAsync()`

**Purpose:** Determines whether the current object is in the `working async` state or condition.

```csharp
// Obtain an instance of FileDriver from the subsystem API first
FileDriver fileDriver = ...;
var result = fileDriver.IsWorkingAsync();
```

## Usage Example

```csharp
FileDriver.GetSaveFilePath("example");
```

## See Also

- [Area Index](../)