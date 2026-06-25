---
title: "FileDriver"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FileDriver`
- [← 本领域 / 返回 save-system](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FileDriver

**命名空间:** TaleWorlds.SaveSystem
**模块:** TaleWorlds.SaveSystem
**类型:** `public class FileDriver : ISaveDriver`
**Base:** `ISaveDriver`
**领域:** save-system

## 概述

`FileDriver` 位于 `TaleWorlds.SaveSystem`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.SaveSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `SavePath` | `public static PlatformDirectoryPath SavePath { get; }` |

## 主要方法

### GetSaveFilePath
`public static PlatformFilePath GetSaveFilePath(string fileName)`

**用途 / Purpose:** 获取 `save file path` 的当前值。

### Save
`public Task<SaveResultWithMessage> Save(string saveName, int version, MetaData metaData, GameData gameData)`

**用途 / Purpose:** 保存 `save` 数据。

### LoadMetaData
`public MetaData LoadMetaData(string saveName)`

**用途 / Purpose:** 加载 `meta data` 数据。

### Load
`public LoadData Load(string saveName)`

**用途 / Purpose:** 加载 `load` 数据。

### GetSaveGameFileInfos
`public SaveGameFileInfo GetSaveGameFileInfos()`

**用途 / Purpose:** 获取 `save game file infos` 的当前值。

### GetSaveGameFileNames
`public string GetSaveGameFileNames()`

**用途 / Purpose:** 获取 `save game file names` 的当前值。

### Delete
`public bool Delete(string saveName)`

**用途 / Purpose:** 处理 `delete` 相关逻辑。

### IsSaveGameFileExists
`public bool IsSaveGameFileExists(string saveName)`

**用途 / Purpose:** 处理 `is save game file exists` 相关逻辑。

### IsWorkingAsync
`public bool IsWorkingAsync()`

**用途 / Purpose:** 处理 `is working async` 相关逻辑。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
FileDriver.GetSaveFilePath("example");
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-save)
