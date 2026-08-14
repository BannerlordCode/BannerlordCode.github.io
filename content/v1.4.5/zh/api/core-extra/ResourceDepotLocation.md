---
title: "ResourceDepotLocation"
description: "ResourceDepotLocation 的自动生成类参考。"
---
# ResourceDepotLocation

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class ResourceDepotLocation`
**Base:** 无
**File:** `TaleWorlds.Library/ResourceDepotLocation.cs`

## 概述

`ResourceDepotLocation` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `BasePath` | `public string BasePath { get; }` |
| `Path` | `public string Path { get; }` |
| `FullPath` | `public string FullPath { get; }` |
| `Watcher` | `public FileSystemWatcher Watcher { get; }` |

## 主要方法

### StartWatchingChanges
`public void StartWatchingChanges(FileSystemEventHandler onChangeEvent, RenamedEventHandler onRenameEvent)`

**用途 / Purpose:** 启动watching changes流程或状态机。

```csharp
// 先通过子系统 API 拿到 ResourceDepotLocation 实例
ResourceDepotLocation resourceDepotLocation = ...;
resourceDepotLocation.StartWatchingChanges(onChangeEvent, onRenameEvent);
```

### StopWatchingChanges
`public void StopWatchingChanges()`

**用途 / Purpose:** 停止watching changes流程或状态机。

```csharp
// 先通过子系统 API 拿到 ResourceDepotLocation 实例
ResourceDepotLocation resourceDepotLocation = ...;
resourceDepotLocation.StopWatchingChanges();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ResourceDepotLocation resourceDepotLocation = ...;
resourceDepotLocation.StartWatchingChanges(onChangeEvent, onRenameEvent);
```

## 参见

- [本区域目录](../)