---
title: "MBSaveLoad"
description: "MBSaveLoad 的自动生成类参考。"
---
# MBSaveLoad

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class MBSaveLoad`
**Base:** 无
**File:** `TaleWorlds.Core/MBSaveLoad.cs`

## 概述

`MBSaveLoad` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ModuleVersionSeperator` | `public static char ModuleVersionSeperator { get; }` |
| `ModuleCodeSeperator` | `public static char ModuleCodeSeperator { get; }` |
| `LastLoadedGameVersion` | `public static ApplicationVersion LastLoadedGameVersion { get; }` |
| `CurrentVersion` | `public static ApplicationVersion CurrentVersion { get; }` |
| `IsUpdatingGameVersion` | `public static bool IsUpdatingGameVersion { get; }` |
| `NumberOfCurrentSaves` | `public static int NumberOfCurrentSaves { get; }` |
| `ActiveSaveSlotName` | `public static string ActiveSaveSlotName { get; }` |

## 主要方法

### SetSaveDriver
`public static void SetSaveDriver(ISaveDriver saveDriver)`

**用途 / Purpose:** 为 「save driver」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
MBSaveLoad.SetSaveDriver(saveDriver);
```

### GetSaveFiles
`public static SaveGameFileInfo GetSaveFiles(Func<SaveGameFileInfo, bool> condition = null)`

**用途 / Purpose:** 读取并返回当前对象中 「save files」 的结果。

```csharp
// 静态调用，不需要实例
MBSaveLoad.GetSaveFiles(func<SaveGameFileInfo, false);
```

### IsSaveGameFileExists
`public static bool IsSaveGameFileExists(string saveFileName)`

**用途 / Purpose:** 判断当前对象是否处于 「save game file exists」 状态或条件。

```csharp
// 静态调用，不需要实例
MBSaveLoad.IsSaveGameFileExists("example");
```

### GetSaveFileNames
`public static string GetSaveFileNames()`

**用途 / Purpose:** 读取并返回当前对象中 「save file names」 的结果。

```csharp
// 静态调用，不需要实例
MBSaveLoad.GetSaveFileNames();
```

### LoadSaveGameData
`public static LoadResult LoadSaveGameData(string saveName)`

**用途 / Purpose:** 从持久化存储或流中读取 「save game data」。

```csharp
// 静态调用，不需要实例
MBSaveLoad.LoadSaveGameData("example");
```

### GetSaveFileWithName
`public static SaveGameFileInfo GetSaveFileWithName(string saveName)`

**用途 / Purpose:** 读取并返回当前对象中 「save file with name」 的结果。

```csharp
// 静态调用，不需要实例
MBSaveLoad.GetSaveFileWithName("example");
```

### QuickSaveCurrentGame
`public static void QuickSaveCurrentGame(CampaignSaveMetaDataArgs campaignMetaData, Action<ValueTuple<SaveResult, string>> onSaveCompleted)`

**用途 / Purpose:** 处理与 「quick save current game」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MBSaveLoad.QuickSaveCurrentGame(campaignMetaData, action<ValueTuple<SaveResult, "example");
```

### AutoSaveCurrentGame
`public static void AutoSaveCurrentGame(CampaignSaveMetaDataArgs campaignMetaData, Action<ValueTuple<SaveResult, string>> onSaveCompleted)`

**用途 / Purpose:** 处理与 「auto save current game」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MBSaveLoad.AutoSaveCurrentGame(campaignMetaData, action<ValueTuple<SaveResult, "example");
```

### SaveAsCurrentGame
`public static void SaveAsCurrentGame(CampaignSaveMetaDataArgs campaignMetaData, string saveName, Action<ValueTuple<SaveResult, string>> onSaveCompleted)`

**用途 / Purpose:** 将 「as current game」 写入持久化存储或流中。

```csharp
// 静态调用，不需要实例
MBSaveLoad.SaveAsCurrentGame(campaignMetaData, "example", action<ValueTuple<SaveResult, "example");
```

### DeleteSaveGame
`public static bool DeleteSaveGame(string saveName)`

**用途 / Purpose:** 处理与 「delete save game」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MBSaveLoad.DeleteSaveGame("example");
```

### Initialize
`public static void Initialize(GameTextManager localizedTextProvider)`

**用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 静态调用，不需要实例
MBSaveLoad.Initialize(localizedTextProvider);
```

### OnNewGame
`public static void OnNewGame()`

**用途 / Purpose:** 在 「new game」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
MBSaveLoad.OnNewGame();
```

### OnGameDestroy
`public static void OnGameDestroy()`

**用途 / Purpose:** 在 「game destroy」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
MBSaveLoad.OnGameDestroy();
```

### OnStartGame
`public static void OnStartGame(LoadResult loadResult)`

**用途 / Purpose:** 在 「start game」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
MBSaveLoad.OnStartGame(loadResult);
```

### IsSaveFileNameReserved
`public static bool IsSaveFileNameReserved(string name)`

**用途 / Purpose:** 判断当前对象是否处于 「save file name reserved」 状态或条件。

```csharp
// 静态调用，不需要实例
MBSaveLoad.IsSaveFileNameReserved("example");
```

### GetMaxNumberOfSaves
`public static int GetMaxNumberOfSaves()`

**用途 / Purpose:** 读取并返回当前对象中 「max number of saves」 的结果。

```csharp
// 静态调用，不需要实例
MBSaveLoad.GetMaxNumberOfSaves();
```

### IsMaxNumberOfSavesReached
`public static bool IsMaxNumberOfSavesReached()`

**用途 / Purpose:** 判断当前对象是否处于 「max number of saves reached」 状态或条件。

```csharp
// 静态调用，不需要实例
MBSaveLoad.IsMaxNumberOfSavesReached();
```

## 使用示例

```csharp
MBSaveLoad.SetSaveDriver(saveDriver);
```

## 参见

- [本区域目录](../)