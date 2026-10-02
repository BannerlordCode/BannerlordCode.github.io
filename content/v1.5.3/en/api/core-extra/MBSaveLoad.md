---
title: "MBSaveLoad"
description: "Auto-generated class reference for MBSaveLoad."
---
# MBSaveLoad

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class MBSaveLoad `
**Base:** System.Object
**Source:** TaleWorlds.Core/MBSaveLoad.cs

## Overview

Auto-generated stub for `MBSaveLoad`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### SetSaveDriver
`public static void SetSaveDriver(ISaveDriver saveDriver)`

### GetSaveFiles
`public static SaveGameFileInfo[] GetSaveFiles(Func<SaveGameFileInfo,bool> condition = null)`

### IsSaveGameFileExists
`public static bool IsSaveGameFileExists(string saveFileName)`

### GetSaveFileNames
`public static string[] GetSaveFileNames()`

### LoadSaveGameData
`public static LoadResult LoadSaveGameData(string saveName)`

### GetSaveFileWithName
`public static SaveGameFileInfo GetSaveFileWithName(string saveName)`

### QuickSaveCurrentGame
`public static void QuickSaveCurrentGame(CampaignSaveMetaDataArgs campaignMetaData,Action<ValueTuple<SaveResult,string>> onSaveCompleted)`

### AutoSaveCurrentGame
`public static void AutoSaveCurrentGame(CampaignSaveMetaDataArgs campaignMetaData,Action<ValueTuple<SaveResult,string>> onSaveCompleted)`

### SaveAsCurrentGame
`public static void SaveAsCurrentGame(CampaignSaveMetaDataArgs campaignMetaData,string saveName,Action<ValueTuple<SaveResult,string>> onSaveCompleted)`

### DeleteSaveGame
`public static bool DeleteSaveGame(string saveName)`

### Initialize
`public static void Initialize(GameTextManager localizedTextProvider)`

### OnNewGame
`public static void OnNewGame()`

### OnGameDestroy
`public static void OnGameDestroy()`

### OnStartGame
`public static void OnStartGame(LoadResult loadResult)`

### IsSaveFileNameReserved
`public static bool IsSaveFileNameReserved(string name)`

### GetMaxNumberOfSaves
`public static int GetMaxNumberOfSaves()`

### IsMaxNumberOfSavesReached
`public static bool IsMaxNumberOfSavesReached()`

## See Also

- [Section index](../)
