---
title: "InMemDriver"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `InMemDriver`
- [← 本领域 / 返回 save-system](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# InMemDriver

**Namespace:** TaleWorlds.SaveSystem
**Module:** TaleWorlds.SaveSystem
**Type:** `public class InMemDriver : ISaveDriver`
**Base:** `ISaveDriver`
**File:** `Bannerlord.Source/bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem/InMemDriver.cs`

## 概述

`InMemDriver` 位于 `TaleWorlds.SaveSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.SaveSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

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
var value = new InMemDriver();
value.Save("example", 0, metaData, gameData);
```

## 参见

- [完整类目录](../catalog)