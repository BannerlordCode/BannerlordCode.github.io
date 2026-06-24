<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBSaveLoad`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBSaveLoad

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class MBSaveLoad`
**Area:** core-extra

## Overview

`MBSaveLoad` lives in `TaleWorlds.Core`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ModuleVersionSeperator` | `public static char ModuleVersionSeperator { get; }` |
| `ModuleCodeSeperator` | `public static char ModuleCodeSeperator { get; }` |
| `LastLoadedGameVersion` | `public static ApplicationVersion LastLoadedGameVersion { get; }` |
| `CurrentVersion` | `public static ApplicationVersion CurrentVersion { get; }` |
| `IsUpdatingGameVersion` | `public static bool IsUpdatingGameVersion { get; }` |
| `NumberOfCurrentSaves` | `public static int NumberOfCurrentSaves { get; }` |
| `ActiveSaveSlotName` | `public static string ActiveSaveSlotName { get; }` |

## Key Methods

### SetSaveDriver
`public static void SetSaveDriver(ISaveDriver saveDriver)`

**Purpose:** Sets the value or state of `save driver`.

### GetSaveFiles
`public static SaveGameFileInfo GetSaveFiles(Func<SaveGameFileInfo, bool> condition = null)`

**Purpose:** Gets the current value of `save files`.

### IsSaveGameFileExists
`public static bool IsSaveGameFileExists(string saveFileName)`

**Purpose:** Handles logic related to `is save game file exists`.

### GetSaveFileNames
`public static string GetSaveFileNames()`

**Purpose:** Gets the current value of `save file names`.

### LoadSaveGameData
`public static LoadResult LoadSaveGameData(string saveName)`

**Purpose:** Loads `save game data` data.

### GetSaveFileWithName
`public static SaveGameFileInfo GetSaveFileWithName(string saveName)`

**Purpose:** Gets the current value of `save file with name`.

### QuickSaveCurrentGame
`public static void QuickSaveCurrentGame(CampaignSaveMetaDataArgs campaignMetaData, Action<ValueTuple<SaveResult, string>> onSaveCompleted)`

**Purpose:** Handles logic related to `quick save current game`.

### AutoSaveCurrentGame
`public static void AutoSaveCurrentGame(CampaignSaveMetaDataArgs campaignMetaData, Action<ValueTuple<SaveResult, string>> onSaveCompleted)`

**Purpose:** Handles logic related to `auto save current game`.

### SaveAsCurrentGame
`public static void SaveAsCurrentGame(CampaignSaveMetaDataArgs campaignMetaData, string saveName, Action<ValueTuple<SaveResult, string>> onSaveCompleted)`

**Purpose:** Saves `as current game` data.

### DeleteSaveGame
`public static bool DeleteSaveGame(string saveName)`

**Purpose:** Handles logic related to `delete save game`.

### Initialize
`public static void Initialize(GameTextManager localizedTextProvider)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### OnNewGame
`public static void OnNewGame()`

**Purpose:** Called when the `new game` event is raised.

### OnGameDestroy
`public static void OnGameDestroy()`

**Purpose:** Called when the `game destroy` event is raised.

### OnStartGame
`public static void OnStartGame(LoadResult loadResult)`

**Purpose:** Called when the `start game` event is raised.

### IsSaveFileNameReserved
`public static bool IsSaveFileNameReserved(string name)`

**Purpose:** Handles logic related to `is save file name reserved`.

### GetMaxNumberOfSaves
`public static int GetMaxNumberOfSaves()`

**Purpose:** Gets the current value of `max number of saves`.

### IsMaxNumberOfSavesReached
`public static bool IsMaxNumberOfSavesReached()`

**Purpose:** Handles logic related to `is max number of saves reached`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
MBSaveLoad.SetSaveDriver(saveDriver);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)
