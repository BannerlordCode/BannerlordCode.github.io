<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBSaveLoad`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBSaveLoad

**命名空间:** TaleWorlds.Core
**模块:** TaleWorlds.Core
**类型:** 类 class class
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`MBSaveLoad` 是 `TaleWorlds.Core` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)