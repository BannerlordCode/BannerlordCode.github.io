---
title: "HasTableauCache"
description: "HasTableauCache 的自动生成类参考。"
---
# HasTableauCache

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public class HasTableauCache : Attribute`
**Base:** `Attribute`
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/HasTableauCache.cs`

## 概述

`HasTableauCache` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `TableauCacheType` | `public Type TableauCacheType { get; }` |
| `MaterialCacheIDGetType` | `public Type MaterialCacheIDGetType { get; }` |

## 主要方法

### CollectTableauCacheTypes
`public static void CollectTableauCacheTypes()`

**用途 / Purpose:** **用途 / Purpose:** 调用 CollectTableauCacheTypes 对应的操作。

```csharp
// 静态调用，不需要实例
HasTableauCache.CollectTableauCacheTypes();
```

## 使用示例

```csharp
HasTableauCache.CollectTableauCacheTypes();
```

## 参见

- [本区域目录](../)