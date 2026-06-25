---
title: "LoadResult"
description: "LoadResult 的自动生成类参考。"
---
# LoadResult

**Namespace:** TaleWorlds.SaveSystem.Load
**Module:** TaleWorlds.SaveSystem
**Type:** `public class LoadResult`
**Base:** 无
**File:** `bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem.Load/LoadResult.cs`

## 概述

`LoadResult` 位于 `TaleWorlds.SaveSystem.Load`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.SaveSystem.Load` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Root` | `public object Root { get; }` |
| `Successful` | `public bool Successful { get; }` |
| `Errors` | `public LoadError Errors { get; }` |
| `MetaData` | `public MetaData MetaData { get; }` |

## 主要方法

### InitializeObjects
`public void InitializeObjects()`

**用途 / Purpose:** **用途 / Purpose:** 为 objects 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 LoadResult 实例
LoadResult loadResult = ...;
loadResult.InitializeObjects();
```

### AfterInitializeObjects
`public void AfterInitializeObjects()`

**用途 / Purpose:** **用途 / Purpose:** 调用 AfterInitializeObjects 对应的操作。

```csharp
// 先通过子系统 API 拿到 LoadResult 实例
LoadResult loadResult = ...;
loadResult.AfterInitializeObjects();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
LoadResult loadResult = ...;
loadResult.InitializeObjects();
```

## 参见

- [本区域目录](../)