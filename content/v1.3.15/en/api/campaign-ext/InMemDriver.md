---
title: "InMemDriver"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InMemDriver`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Saves `save` data.

### LoadMetaData
`public MetaData LoadMetaData(string saveName)`

**Purpose:** Loads `meta data` data.

### Load
`public LoadData Load(string saveName)`

**Purpose:** Loads `load` data.

### GetSaveGameFileInfos
`public SaveGameFileInfo GetSaveGameFileInfos()`

**Purpose:** Gets the current value of `save game file infos`.

### GetSaveGameFileNames
`public string GetSaveGameFileNames()`

**Purpose:** Gets the current value of `save game file names`.

### Delete
`public bool Delete(string saveName)`

**Purpose:** Handles logic related to `delete`.

### IsSaveGameFileExists
`public bool IsSaveGameFileExists(string saveName)`

**Purpose:** Handles logic related to `is save game file exists`.

### IsWorkingAsync
`public bool IsWorkingAsync()`

**Purpose:** Handles logic related to `is working async`.

## Usage Example

```csharp
var value = new InMemDriver();
value.Save("example", 0, metaData, gameData);
```

## See Also

- [Complete Class Catalog](../catalog)