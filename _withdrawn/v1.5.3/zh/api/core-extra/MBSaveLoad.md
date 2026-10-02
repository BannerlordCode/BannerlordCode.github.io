---
title: "MBSaveLoad"
description: "MBSaveLoad 的自动生成类参考。"
---
# MBSaveLoad

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class MBSaveLoad `
**Base:** System.Object
**Source:** TaleWorlds.Core/MBSaveLoad.cs

## 概述

`MBSaveLoad` 的自动生成类参考页面。声明来自 `TaleWorlds.Core/MBSaveLoad.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### SetSaveDriver
`public static void SetSaveDriver(ISaveDriver saveDriver) `

### GetSaveFiles
`public static SaveGameFileInfo[] GetSaveFiles(Func<SaveGameFileInfo,bool> condition = null) `

### IsSaveGameFileExists
`public static bool IsSaveGameFileExists(string saveFileName) `

### GetSaveFileNames
`public static string[] GetSaveFileNames() `

### LoadSaveGameData
`public static LoadResult LoadSaveGameData(string saveName) `

### GetSaveFileWithName
`public static SaveGameFileInfo GetSaveFileWithName(string saveName) `

### QuickSaveCurrentGame
`public static void QuickSaveCurrentGame(CampaignSaveMetaDataArgs campaignMetaData,Action<ValueTuple<SaveResult,string>> onSaveCompleted) `

### AutoSaveCurrentGame
`public static void AutoSaveCurrentGame(CampaignSaveMetaDataArgs campaignMetaData,Action<ValueTuple<SaveResult,string>> onSaveCompleted) `

### SaveAsCurrentGame
`public static void SaveAsCurrentGame(CampaignSaveMetaDataArgs campaignMetaData,string saveName,Action<ValueTuple<SaveResult,string>> onSaveCompleted) `

### DeleteSaveGame
`public static bool DeleteSaveGame(string saveName) `

### Initialize
`public static void Initialize(GameTextManager localizedTextProvider) `

### OnNewGame
`public static void OnNewGame() `

### OnGameDestroy
`public static void OnGameDestroy() `

### OnStartGame
`public static void OnStartGame(LoadResult loadResult) `

### IsSaveFileNameReserved
`public static bool IsSaveFileNameReserved(string name) `

### GetMaxNumberOfSaves
`public static int GetMaxNumberOfSaves() `

### IsMaxNumberOfSavesReached
`public static bool IsMaxNumberOfSavesReached() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
