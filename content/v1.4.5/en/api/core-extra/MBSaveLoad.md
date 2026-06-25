---
title: "MBSaveLoad"
description: "Auto-generated class reference for MBSaveLoad."
---
# MBSaveLoad

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class MBSaveLoad`
**Base:** none
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/MBSaveLoad.cs`

## Overview

`MBSaveLoad` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `LastLoadedGameVersion` | `public static ApplicationVersion LastLoadedGameVersion { get; }` |
| `CurrentVersion` | `public static ApplicationVersion CurrentVersion { get; }` |
| `NumberOfCurrentSaves` | `public static int NumberOfCurrentSaves { get; }` |
| `ActiveSaveSlotName` | `public static string ActiveSaveSlotName { get; }` |

## Key Methods

### SetSaveDriver
`public static void SetSaveDriver(ISaveDriver saveDriver)`

**Purpose:** Assigns a new value to `save driver` and updates the object's internal state.

```csharp
// Static call; no instance required
MBSaveLoad.SetSaveDriver(saveDriver);
```

### GetSaveFiles
`public static SaveGameFileInfo GetSaveFiles(Func<SaveGameFileInfo, bool> condition = null)`

**Purpose:** Reads and returns the `save files` value held by the current object.

```csharp
// Static call; no instance required
MBSaveLoad.GetSaveFiles(func<SaveGameFileInfo, false);
```

### IsSaveGameFileExists
`public static bool IsSaveGameFileExists(string saveFileName)`

**Purpose:** Determines whether the current object is in the `save game file exists` state or condition.

```csharp
// Static call; no instance required
MBSaveLoad.IsSaveGameFileExists("example");
```

### GetSaveFileNames
`public static string GetSaveFileNames()`

**Purpose:** Reads and returns the `save file names` value held by the current object.

```csharp
// Static call; no instance required
MBSaveLoad.GetSaveFileNames();
```

### LoadSaveGameData
`public static LoadResult LoadSaveGameData(string saveName)`

**Purpose:** Reads `save game data` from persistent storage or a stream.

```csharp
// Static call; no instance required
MBSaveLoad.LoadSaveGameData("example");
```

### GetSaveFileWithName
`public static SaveGameFileInfo GetSaveFileWithName(string saveName)`

**Purpose:** Reads and returns the `save file with name` value held by the current object.

```csharp
// Static call; no instance required
MBSaveLoad.GetSaveFileWithName("example");
```

### QuickSaveCurrentGame
`public static void QuickSaveCurrentGame(CampaignSaveMetaDataArgs campaignMetaData, Action<(SaveResult, string)> onSaveCompleted)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MBSaveLoad.QuickSaveCurrentGame(campaignMetaData, action<(SaveResult, "example");
```

### AutoSaveCurrentGame
`public static void AutoSaveCurrentGame(CampaignSaveMetaDataArgs campaignMetaData, Action<(SaveResult, string)> onSaveCompleted)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MBSaveLoad.AutoSaveCurrentGame(campaignMetaData, action<(SaveResult, "example");
```

### SaveAsCurrentGame
`public static void SaveAsCurrentGame(CampaignSaveMetaDataArgs campaignMetaData, string saveName, Action<(SaveResult, string)> onSaveCompleted)`

**Purpose:** Writes `as current game` to persistent storage or a stream.

```csharp
// Static call; no instance required
MBSaveLoad.SaveAsCurrentGame(campaignMetaData, "example", action<(SaveResult, "example");
```

### DeleteSaveGame
`public static bool DeleteSaveGame(string saveName)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MBSaveLoad.DeleteSaveGame("example");
```

### Initialize
`public static void Initialize(GameTextManager localizedTextProvider)`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Static call; no instance required
MBSaveLoad.Initialize(localizedTextProvider);
```

### OnNewGame
`public static void OnNewGame()`

**Purpose:** Invoked when the `new game` event is raised.

```csharp
// Static call; no instance required
MBSaveLoad.OnNewGame();
```

### OnGameDestroy
`public static void OnGameDestroy()`

**Purpose:** Invoked when the `game destroy` event is raised.

```csharp
// Static call; no instance required
MBSaveLoad.OnGameDestroy();
```

### OnStartGame
`public static void OnStartGame(LoadResult loadResult)`

**Purpose:** Invoked when the `start game` event is raised.

```csharp
// Static call; no instance required
MBSaveLoad.OnStartGame(loadResult);
```

### IsSaveFileNameReserved
`public static bool IsSaveFileNameReserved(string name)`

**Purpose:** Determines whether the current object is in the `save file name reserved` state or condition.

```csharp
// Static call; no instance required
MBSaveLoad.IsSaveFileNameReserved("example");
```

### GetMaxNumberOfSaves
`public static int GetMaxNumberOfSaves()`

**Purpose:** Reads and returns the `max number of saves` value held by the current object.

```csharp
// Static call; no instance required
MBSaveLoad.GetMaxNumberOfSaves();
```

### IsMaxNumberOfSavesReached
`public static bool IsMaxNumberOfSavesReached()`

**Purpose:** Determines whether the current object is in the `max number of saves reached` state or condition.

```csharp
// Static call; no instance required
MBSaveLoad.IsMaxNumberOfSavesReached();
```

## Usage Example

```csharp
MBSaveLoad.SetSaveDriver(saveDriver);
```

## See Also

- [Area Index](../)