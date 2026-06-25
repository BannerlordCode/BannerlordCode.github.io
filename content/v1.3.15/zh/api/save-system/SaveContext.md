---
title: "SaveContext"
description: "SaveContext 的自动生成类参考。"
---
# SaveContext

**Namespace:** TaleWorlds.SaveSystem.Save
**Module:** TaleWorlds.SaveSystem
**Type:** `public class SaveContext : ISaveContext`
**Base:** `ISaveContext`
**File:** `TaleWorlds.SaveSystem/Save/SaveContext.cs`

## 概述

`SaveContext` 位于 `TaleWorlds.SaveSystem.Save`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.SaveSystem.Save` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `RootObject` | `public object RootObject { get; }` |
| `SaveData` | `public GameData SaveData { get; }` |
| `DefinitionContext` | `public DefinitionContext DefinitionContext { get; }` |
| `EnableSaveStatistics` | `public static bool EnableSaveStatistics { get; }` |

## 主要方法

### GetStatistics
`public static SaveContext.SaveStatistics GetStatistics()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 statistics 的结果。

```csharp
// 静态调用，不需要实例
SaveContext.GetStatistics();
```

### AddOrGetStringId
`public int AddOrGetStringId(string text)`

**用途 / Purpose:** **用途 / Purpose:** 将 or get string id 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 SaveContext 实例
SaveContext saveContext = ...;
var result = saveContext.AddOrGetStringId("example");
```

### GetObjectId
`public int GetObjectId(object target)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 object id 的结果。

```csharp
// 先通过子系统 API 拿到 SaveContext 实例
SaveContext saveContext = ...;
var result = saveContext.GetObjectId(target);
```

### GetContainerId
`public int GetContainerId(object target)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 container id 的结果。

```csharp
// 先通过子系统 API 拿到 SaveContext 实例
SaveContext saveContext = ...;
var result = saveContext.GetContainerId(target);
```

### GetStringId
`public int GetStringId(string target)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 string id 的结果。

```csharp
// 先通过子系统 API 拿到 SaveContext 实例
SaveContext saveContext = ...;
var result = saveContext.GetStringId("example");
```

### GetStringSizeInBytes
`public static int GetStringSizeInBytes(string text)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 string size in bytes 的结果。

```csharp
// 静态调用，不需要实例
SaveContext.GetStringSizeInBytes("example");
```

### Save
`public bool Save(object target, MetaData metaData, out string errorMessage)`

**用途 / Purpose:** **用途 / Purpose:** 将当前对象的数据写入持久化存储或流中。

```csharp
// 先通过子系统 API 拿到 SaveContext 实例
SaveContext saveContext = ...;
var result = saveContext.Save(target, metaData, errorMessage);
```

### GetObjectCounts
`public ValueTuple<int, int, int, long> GetObjectCounts(string key)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 object counts 的结果。

```csharp
// 先通过子系统 API 拿到 SaveContext 实例
SaveContext saveContext = ...;
var result = saveContext.GetObjectCounts("example");
```

### GetContainerCounts
`public ValueTuple<int, int, int, int, long> GetContainerCounts(string key)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 container counts 的结果。

```csharp
// 先通过子系统 API 拿到 SaveContext 实例
SaveContext saveContext = ...;
var result = saveContext.GetContainerCounts("example");
```

### GetContainerSize
`public long GetContainerSize(string key)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 container size 的结果。

```csharp
// 先通过子系统 API 拿到 SaveContext 实例
SaveContext saveContext = ...;
var result = saveContext.GetContainerSize("example");
```

### GetTypeKeys
`public List<string> GetTypeKeys()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 type keys 的结果。

```csharp
// 先通过子系统 API 拿到 SaveContext 实例
SaveContext saveContext = ...;
var result = saveContext.GetTypeKeys();
```

### GetContainerKeys
`public List<string> GetContainerKeys()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 container keys 的结果。

```csharp
// 先通过子系统 API 拿到 SaveContext 实例
SaveContext saveContext = ...;
var result = saveContext.GetContainerKeys();
```

## 使用示例

```csharp
SaveContext.GetStatistics();
```

## 参见

- [本区域目录](../)