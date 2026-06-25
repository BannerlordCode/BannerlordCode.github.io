---
title: "LegacySaveContext"
description: "LegacySaveContext 的自动生成类参考。"
---
# LegacySaveContext

**Namespace:** TaleWorlds.SaveSystem.Save
**Module:** TaleWorlds.SaveSystem
**Type:** `public class LegacySaveContext : ISaveContext`
**Base:** `ISaveContext`
**File:** `bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem.Save/LegacySaveContext.cs`

## 概述

`LegacySaveContext` 位于 `TaleWorlds.SaveSystem.Save`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.SaveSystem.Save` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `RootObject` | `public object RootObject { get; }` |
| `SaveData` | `public GameData SaveData { get; }` |
| `DefinitionContext` | `public DefinitionContext DefinitionContext { get; }` |

## 主要方法

### SaveStatistics
`public struct SaveStatistics(Dictionary<string, (int, int, int, long)> typeStatistics, Dictionary<string, (int, int, int, int, long)> containerStatistics)`

**用途 / Purpose:** 将 statistics 写入持久化存储或流中。

```csharp
// 先通过子系统 API 拿到 LegacySaveContext 实例
LegacySaveContext legacySaveContext = ...;
var result = legacySaveContext.SaveStatistics(dictionary<string, (int, 0, 0, 0, dictionary<string, (int, 0, 0, 0, 0);
```

### GetContainerSize
`public long GetContainerSize(string key)`

**用途 / Purpose:** 读取并返回当前对象中 container size 的结果。

```csharp
// 先通过子系统 API 拿到 LegacySaveContext 实例
LegacySaveContext legacySaveContext = ...;
var result = legacySaveContext.GetContainerSize("example");
```

### GetTypeKeys
`public List<string> GetTypeKeys()`

**用途 / Purpose:** 读取并返回当前对象中 type keys 的结果。

```csharp
// 先通过子系统 API 拿到 LegacySaveContext 实例
LegacySaveContext legacySaveContext = ...;
var result = legacySaveContext.GetTypeKeys();
```

### GetContainerKeys
`public List<string> GetContainerKeys()`

**用途 / Purpose:** 读取并返回当前对象中 container keys 的结果。

```csharp
// 先通过子系统 API 拿到 LegacySaveContext 实例
LegacySaveContext legacySaveContext = ...;
var result = legacySaveContext.GetContainerKeys();
```

### GetStatistics
`public static SaveStatistics GetStatistics()`

**用途 / Purpose:** 读取并返回当前对象中 statistics 的结果。

```csharp
// 静态调用，不需要实例
LegacySaveContext.GetStatistics();
```

### AddStrings
`public void AddStrings(List<string> texts)`

**用途 / Purpose:** 将 strings 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 LegacySaveContext 实例
LegacySaveContext legacySaveContext = ...;
legacySaveContext.AddStrings(texts);
```

### AddOrGetStringId
`public int AddOrGetStringId(string text)`

**用途 / Purpose:** 将 or get string id 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 LegacySaveContext 实例
LegacySaveContext legacySaveContext = ...;
var result = legacySaveContext.AddOrGetStringId("example");
```

### GetObjectId
`public int GetObjectId(object target)`

**用途 / Purpose:** 读取并返回当前对象中 object id 的结果。

```csharp
// 先通过子系统 API 拿到 LegacySaveContext 实例
LegacySaveContext legacySaveContext = ...;
var result = legacySaveContext.GetObjectId(target);
```

### GetContainerId
`public int GetContainerId(object target)`

**用途 / Purpose:** 读取并返回当前对象中 container id 的结果。

```csharp
// 先通过子系统 API 拿到 LegacySaveContext 实例
LegacySaveContext legacySaveContext = ...;
var result = legacySaveContext.GetContainerId(target);
```

### GetStringId
`public int GetStringId(string target)`

**用途 / Purpose:** 读取并返回当前对象中 string id 的结果。

```csharp
// 先通过子系统 API 拿到 LegacySaveContext 实例
LegacySaveContext legacySaveContext = ...;
var result = legacySaveContext.GetStringId("example");
```

### Save
`public bool Save(object target, MetaData metaData, out string errorMessage)`

**用途 / Purpose:** 将当前对象的数据写入持久化存储或流中。

```csharp
// 先通过子系统 API 拿到 LegacySaveContext 实例
LegacySaveContext legacySaveContext = ...;
var result = legacySaveContext.Save(target, metaData, errorMessage);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
LegacySaveContext legacySaveContext = ...;
legacySaveContext.SaveStatistics(dictionary<string, (int, 0, 0, 0, dictionary<string, (int, 0, 0, 0, 0);
```

## 参见

- [本区域目录](../)