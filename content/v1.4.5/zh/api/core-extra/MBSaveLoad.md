---
title: "MBSaveLoad"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBSaveLoad`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MBSaveLoad

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class MBSaveLoad`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/MBSaveLoad.cs`

## 概述

`MBSaveLoad` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `LastLoadedGameVersion` | `public static ApplicationVersion LastLoadedGameVersion { get; }` |
| `CurrentVersion` | `public static ApplicationVersion CurrentVersion { get; }` |
| `NumberOfCurrentSaves` | `public static int NumberOfCurrentSaves { get; }` |
| `ActiveSaveSlotName` | `public static string ActiveSaveSlotName { get; }` |

## 主要方法

### SetSaveDriver
`public static void SetSaveDriver(ISaveDriver saveDriver)`

**用途 / Purpose:** 设置 `save driver` 的值或状态。

### GetSaveFiles
`public static SaveGameFileInfo GetSaveFiles(Func<SaveGameFileInfo, bool> condition = null)`

**用途 / Purpose:** 获取 `save files` 的当前值。

### IsSaveGameFileExists
`public static bool IsSaveGameFileExists(string saveFileName)`

**用途 / Purpose:** 处理 `is save game file exists` 相关逻辑。

### GetSaveFileNames
`public static string GetSaveFileNames()`

**用途 / Purpose:** 获取 `save file names` 的当前值。

### LoadSaveGameData
`public static LoadResult LoadSaveGameData(string saveName)`

**用途 / Purpose:** 加载 `save game data` 数据。

### GetSaveFileWithName
`public static SaveGameFileInfo GetSaveFileWithName(string saveName)`

**用途 / Purpose:** 获取 `save file with name` 的当前值。

### QuickSaveCurrentGame
`public static void QuickSaveCurrentGame(CampaignSaveMetaDataArgs campaignMetaData, Action<(SaveResult, string)> onSaveCompleted)`

**用途 / Purpose:** 处理 `quick save current game` 相关逻辑。

### AutoSaveCurrentGame
`public static void AutoSaveCurrentGame(CampaignSaveMetaDataArgs campaignMetaData, Action<(SaveResult, string)> onSaveCompleted)`

**用途 / Purpose:** 处理 `auto save current game` 相关逻辑。

### SaveAsCurrentGame
`public static void SaveAsCurrentGame(CampaignSaveMetaDataArgs campaignMetaData, string saveName, Action<(SaveResult, string)> onSaveCompleted)`

**用途 / Purpose:** 保存 `as current game` 数据。

### DeleteSaveGame
`public static bool DeleteSaveGame(string saveName)`

**用途 / Purpose:** 处理 `delete save game` 相关逻辑。

### Initialize
`public static void Initialize(GameTextManager localizedTextProvider)`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### OnNewGame
`public static void OnNewGame()`

**用途 / Purpose:** 当 `new game` 事件触发时调用此方法。

### OnGameDestroy
`public static void OnGameDestroy()`

**用途 / Purpose:** 当 `game destroy` 事件触发时调用此方法。

### OnStartGame
`public static void OnStartGame(LoadResult loadResult)`

**用途 / Purpose:** 当 `start game` 事件触发时调用此方法。

### IsSaveFileNameReserved
`public static bool IsSaveFileNameReserved(string name)`

**用途 / Purpose:** 处理 `is save file name reserved` 相关逻辑。

### GetMaxNumberOfSaves
`public static int GetMaxNumberOfSaves()`

**用途 / Purpose:** 获取 `max number of saves` 的当前值。

### IsMaxNumberOfSavesReached
`public static bool IsMaxNumberOfSavesReached()`

**用途 / Purpose:** 处理 `is max number of saves reached` 相关逻辑。

## 使用示例

```csharp
MBSaveLoad.SetSaveDriver(saveDriver);
```

## 参见

- [完整类目录](../catalog)