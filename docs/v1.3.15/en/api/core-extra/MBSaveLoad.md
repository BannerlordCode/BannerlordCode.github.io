<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBSaveLoad`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBSaveLoad

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** class
**Area:** Core

## Overview

> This is an auto-generated stub. `MBSaveLoad` is a class in the `TaleWorlds.Core` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


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

```csharp
public static void SetSaveDriver(ISaveDriver saveDriver)
```

### GetSaveFiles

```csharp
public static SaveGameFileInfo GetSaveFiles(Func<SaveGameFileInfo, bool> condition = null)
```

### IsSaveGameFileExists

```csharp
public static bool IsSaveGameFileExists(string saveFileName)
```

### GetSaveFileNames

```csharp
public static string GetSaveFileNames()
```

### LoadSaveGameData

```csharp
public static LoadResult LoadSaveGameData(string saveName)
```

### GetSaveFileWithName

```csharp
public static SaveGameFileInfo GetSaveFileWithName(string saveName)
```

### QuickSaveCurrentGame

```csharp
public static void QuickSaveCurrentGame(CampaignSaveMetaDataArgs campaignMetaData, Action<ValueTuple<SaveResult, string>> onSaveCompleted)
```

### AutoSaveCurrentGame

```csharp
public static void AutoSaveCurrentGame(CampaignSaveMetaDataArgs campaignMetaData, Action<ValueTuple<SaveResult, string>> onSaveCompleted)
```

### SaveAsCurrentGame

```csharp
public static void SaveAsCurrentGame(CampaignSaveMetaDataArgs campaignMetaData, string saveName, Action<ValueTuple<SaveResult, string>> onSaveCompleted)
```

### DeleteSaveGame

```csharp
public static bool DeleteSaveGame(string saveName)
```

### Initialize

```csharp
public static void Initialize(GameTextManager localizedTextProvider)
```

### OnNewGame

```csharp
public static void OnNewGame()
```

### OnGameDestroy

```csharp
public static void OnGameDestroy()
```

### OnStartGame

```csharp
public static void OnStartGame(LoadResult loadResult)
```

### IsSaveFileNameReserved

```csharp
public static bool IsSaveFileNameReserved(string name)
```

### GetMaxNumberOfSaves

```csharp
public static int GetMaxNumberOfSaves()
```

### IsMaxNumberOfSavesReached

```csharp
public static bool IsMaxNumberOfSavesReached()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)