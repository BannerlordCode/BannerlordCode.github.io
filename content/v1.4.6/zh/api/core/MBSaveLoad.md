---
title: "MBSaveLoad"
description: "MBSaveLoad：TaleWorlds.Core 的 public 类；公开成员 24 个（方法 17、属性 7、字段 0）。源文件 TaleWorlds.Core/MBSaveLoad.cs。"
---
# MBSaveLoad

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public static class MBSaveLoad`
**File:** `TaleWorlds.Core/MBSaveLoad.cs`

## 概述

MBSaveLoad 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/MBSaveLoad.cs。它是一个 public 类，继承链为 MBSaveLoad。public/protected 成员共 24 个：17 方法、7 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MBSaveLoad 是 TaleWorlds.Core 的顶层类型，命名空间与模块目录一致，继承链 MBSaveLoad。成员构成以方法为主（方法 17/24，属性 7/24），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/MBSaveLoad.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ModuleVersionSeperator` | `public static char ModuleVersionSeperator` | 属性 |
| `ModuleCodeSeperator` | `public static char ModuleCodeSeperator` | 属性 |
| `LastLoadedGameVersion` | `public static ApplicationVersion LastLoadedGameVersion` | 属性 |
| `CurrentVersion` | `public static ApplicationVersion CurrentVersion` | 属性 |
| `IsUpdatingGameVersion` | `public static bool IsUpdatingGameVersion` | 属性 |
| `NumberOfCurrentSaves` | `public static int NumberOfCurrentSaves` | 属性 |
| `ActiveSaveSlotName` | `public static string ActiveSaveSlotName` | 属性 |
| `SetSaveDriver` | `public static void SetSaveDriver(ISaveDriver saveDriver)` | 方法 |
| `SaveGameFileInfo[]GetSaveFiles` | `public static SaveGameFileInfo[]GetSaveFiles(Func<SaveGameFileInfo, bool>condition = null)` | 方法 |
| `IsSaveGameFileExists` | `public static bool IsSaveGameFileExists(string saveFileName)` | 方法 |
| `string[]GetSaveFileNames` | `public static string[]GetSaveFileNames()` | 方法 |
| `LoadSaveGameData` | `public static LoadResult LoadSaveGameData(string saveName)` | 方法 |
| `GetSaveFileWithName` | `public static SaveGameFileInfo GetSaveFileWithName(string saveName)` | 方法 |
| `QuickSaveCurrentGame` | `public static void QuickSaveCurrentGame(CampaignSaveMetaDataArgs campaignMetaData, Action<ValueTuple<SaveResult, string>>onSaveCompleted)` | 方法 |
| `AutoSaveCurrentGame` | `public static void AutoSaveCurrentGame(CampaignSaveMetaDataArgs campaignMetaData, Action<ValueTuple<SaveResult, string>>onSaveCompleted)` | 方法 |
| `SaveAsCurrentGame` | `public static void SaveAsCurrentGame(CampaignSaveMetaDataArgs campaignMetaData, string saveName, Action<ValueTuple<SaveResult, string>>onSaveCompleted)` | 方法 |
| `DeleteSaveGame` | `public static bool DeleteSaveGame(string saveName)` | 方法 |
| `Initialize` | `public static void Initialize(GameTextManager localizedTextProvider)` | 方法 |
| `OnNewGame` | `public static void OnNewGame()` | 方法 |
| `OnGameDestroy` | `public static void OnGameDestroy()` | 方法 |
| `OnStartGame` | `public static void OnStartGame(LoadResult loadResult)` | 方法 |
| `IsSaveFileNameReserved` | `public static bool IsSaveFileNameReserved(string name)` | 方法 |
| `GetMaxNumberOfSaves` | `public static int GetMaxNumberOfSaves()` | 方法 |
| `IsMaxNumberOfSavesReached` | `public static bool IsMaxNumberOfSavesReached()` | 方法 |

## 参见

- [↑ core 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionSetCode](../ActionSetCode)
- [同命名空间 AgentAttackType](../AgentAttackType)
- [同命名空间 AgentControllerType](../AgentControllerType)
- [同命名空间 AgentData](../AgentData)
