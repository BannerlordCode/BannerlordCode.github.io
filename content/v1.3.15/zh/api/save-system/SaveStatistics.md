---
title: "SaveStatistics"
description: "SaveStatistics 的自动生成类参考。"
---
# SaveStatistics

**Namespace:** TaleWorlds.SaveSystem.Save
**Module:** TaleWorlds.SaveSystem
**Type:** `public struct SaveStatistics`
**Base:** 无
**File:** `TaleWorlds.SaveSystem/Save/LegacySaveContext.cs`

## 概述

`SaveStatistics` 位于 `TaleWorlds.SaveSystem.Save`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.SaveSystem.Save` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetObjectCounts
`public ValueTuple<int, int, int, long> GetObjectCounts(string key)`

**用途 / Purpose:** 读取并返回当前对象中 object counts 的结果。

```csharp
// 先通过子系统 API 拿到 SaveStatistics 实例
SaveStatistics saveStatistics = ...;
var result = saveStatistics.GetObjectCounts("example");
```

### GetContainerCounts
`public ValueTuple<int, int, int, int, long> GetContainerCounts(string key)`

**用途 / Purpose:** 读取并返回当前对象中 container counts 的结果。

```csharp
// 先通过子系统 API 拿到 SaveStatistics 实例
SaveStatistics saveStatistics = ...;
var result = saveStatistics.GetContainerCounts("example");
```

### GetContainerSize
`public long GetContainerSize(string key)`

**用途 / Purpose:** 读取并返回当前对象中 container size 的结果。

```csharp
// 先通过子系统 API 拿到 SaveStatistics 实例
SaveStatistics saveStatistics = ...;
var result = saveStatistics.GetContainerSize("example");
```

### GetTypeKeys
`public List<string> GetTypeKeys()`

**用途 / Purpose:** 读取并返回当前对象中 type keys 的结果。

```csharp
// 先通过子系统 API 拿到 SaveStatistics 实例
SaveStatistics saveStatistics = ...;
var result = saveStatistics.GetTypeKeys();
```

### GetContainerKeys
`public List<string> GetContainerKeys()`

**用途 / Purpose:** 读取并返回当前对象中 container keys 的结果。

```csharp
// 先通过子系统 API 拿到 SaveStatistics 实例
SaveStatistics saveStatistics = ...;
var result = saveStatistics.GetContainerKeys();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SaveStatistics saveStatistics = ...;
saveStatistics.GetObjectCounts("example");
```

## 参见

- [本区域目录](../)