---
title: "ResourceDepot"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ResourceDepot`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ResourceDepot

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class ResourceDepot`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.Library/TaleWorlds.Library/ResourceDepot.cs`

## 概述

`ResourceDepot` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### AddLocation
`public void AddLocation(string basePath, string location)`

**用途 / Purpose:** 向当前集合/状态中添加 `location`。

### CollectResources
`public void CollectResources()`

**用途 / Purpose:** 处理 `collect resources` 相关逻辑。

### GetFiles
`public string GetFiles(string subDirectory, string extension, bool excludeSubContents = false)`

**用途 / Purpose:** 获取 `files` 的当前值。

### GetFilePath
`public string GetFilePath(string file)`

**用途 / Purpose:** 获取 `file path` 的当前值。

### GetFilesEndingWith
`public IEnumerable<string> GetFilesEndingWith(string fileEndName)`

**用途 / Purpose:** 获取 `files ending with` 的当前值。

### StartWatchingChangesInDepot
`public void StartWatchingChangesInDepot()`

**用途 / Purpose:** 处理 `start watching changes in depot` 相关逻辑。

### StopWatchingChangesInDepot
`public void StopWatchingChangesInDepot()`

**用途 / Purpose:** 处理 `stop watching changes in depot` 相关逻辑。

### CheckForChanges
`public void CheckForChanges()`

**用途 / Purpose:** 处理 `check for changes` 相关逻辑。

## 使用示例

```csharp
var value = new ResourceDepot();
value.AddLocation("example", "example");
```

## 参见

- [完整类目录](../catalog)