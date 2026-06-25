---
title: "LoadContext"
description: "LoadContext 的自动生成类参考。"
---
# LoadContext

**Namespace:** TaleWorlds.SaveSystem.Load
**Module:** TaleWorlds.SaveSystem
**Type:** `public class LoadContext`
**Base:** 无
**File:** `TaleWorlds.SaveSystem/Load/LoadContext.cs`

## 概述

`LoadContext` 位于 `TaleWorlds.SaveSystem.Load`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.SaveSystem.Load` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `EnableLoadStatistics` | `public static bool EnableLoadStatistics { get; }` |
| `RootObject` | `public object RootObject { get; }` |
| `DefinitionContext` | `public DefinitionContext DefinitionContext { get; }` |
| `Driver` | `public ISaveDriver Driver { get; }` |

## 主要方法

### Load
`public bool Load(LoadData loadData, bool loadAsLateInitialize)`

**用途 / Purpose:** 从持久化存储或流中读取当前对象的数据。

```csharp
// 先通过子系统 API 拿到 LoadContext 实例
LoadContext loadContext = ...;
var result = loadContext.Load(loadData, false);
```

### TryConvertType
`public static bool TryConvertType(Type sourceType, Type targetType, ref object data)`

**用途 / Purpose:** 尝试获取 convert type 的值，通常通过 out 参数返回是否成功。

```csharp
// 静态调用，不需要实例
LoadContext.TryConvertType(sourceType, targetType, data);
```

### GetObjectWithId
`public ObjectHeaderLoadData GetObjectWithId(int id)`

**用途 / Purpose:** 读取并返回当前对象中 object with id 的结果。

```csharp
// 先通过子系统 API 拿到 LoadContext 实例
LoadContext loadContext = ...;
var result = loadContext.GetObjectWithId(0);
```

### GetContainerWithId
`public ContainerHeaderLoadData GetContainerWithId(int id)`

**用途 / Purpose:** 读取并返回当前对象中 container with id 的结果。

```csharp
// 先通过子系统 API 拿到 LoadContext 实例
LoadContext loadContext = ...;
var result = loadContext.GetContainerWithId(0);
```

### GetStringWithId
`public string GetStringWithId(int id)`

**用途 / Purpose:** 读取并返回当前对象中 string with id 的结果。

```csharp
// 先通过子系统 API 拿到 LoadContext 实例
LoadContext loadContext = ...;
var result = loadContext.GetStringWithId(0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
LoadContext loadContext = ...;
loadContext.Load(loadData, false);
```

## 参见

- [本区域目录](../)