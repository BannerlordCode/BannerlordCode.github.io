---
title: "ResourceDepot"
description: "ResourceDepot 的自动生成类参考。"
---
# ResourceDepot

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class ResourceDepot`
**Base:** 无
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/ResourceDepot.cs`

## 概述

`ResourceDepot` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### AddLocation
`public void AddLocation(string basePath, string location)`

**用途 / Purpose:** 将 「location」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 ResourceDepot 实例
ResourceDepot resourceDepot = ...;
resourceDepot.AddLocation("example", "example");
```

### CollectResources
`public void CollectResources()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 ResourceDepot 实例
ResourceDepot resourceDepot = ...;
resourceDepot.CollectResources();
```

### GetFiles
`public string GetFiles(string subDirectory, string extension, bool excludeSubContents = false)`

**用途 / Purpose:** 读取并返回当前对象中 「files」 的结果。

```csharp
// 先通过子系统 API 拿到 ResourceDepot 实例
ResourceDepot resourceDepot = ...;
var result = resourceDepot.GetFiles("example", "example", false);
```

### GetFilePath
`public string GetFilePath(string file)`

**用途 / Purpose:** 读取并返回当前对象中 「file path」 的结果。

```csharp
// 先通过子系统 API 拿到 ResourceDepot 实例
ResourceDepot resourceDepot = ...;
var result = resourceDepot.GetFilePath("example");
```

### GetFilesEndingWith
`public IEnumerable<string> GetFilesEndingWith(string fileEndName)`

**用途 / Purpose:** 读取并返回当前对象中 「files ending with」 的结果。

```csharp
// 先通过子系统 API 拿到 ResourceDepot 实例
ResourceDepot resourceDepot = ...;
var result = resourceDepot.GetFilesEndingWith("example");
```

### StartWatchingChangesInDepot
`public void StartWatchingChangesInDepot()`

**用途 / Purpose:** 启动「watching changes in depot」流程或状态机。

```csharp
// 先通过子系统 API 拿到 ResourceDepot 实例
ResourceDepot resourceDepot = ...;
resourceDepot.StartWatchingChangesInDepot();
```

### StopWatchingChangesInDepot
`public void StopWatchingChangesInDepot()`

**用途 / Purpose:** 停止「watching changes in depot」流程或状态机。

```csharp
// 先通过子系统 API 拿到 ResourceDepot 实例
ResourceDepot resourceDepot = ...;
resourceDepot.StopWatchingChangesInDepot();
```

### CheckForChanges
`public void CheckForChanges()`

**用途 / Purpose:** 检查「for changes」在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 ResourceDepot 实例
ResourceDepot resourceDepot = ...;
resourceDepot.CheckForChanges();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ResourceDepot resourceDepot = ...;
resourceDepot.AddLocation("example", "example");
```

## 参见

- [本区域目录](../)