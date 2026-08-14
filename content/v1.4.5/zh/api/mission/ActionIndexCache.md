---
title: "ActionIndexCache"
description: "ActionIndexCache 的自动生成类参考。"
---
# ActionIndexCache

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `struct ActionIndexCache : IEquatable<ActionIndexCache>`
**Base:** `IEquatable<ActionIndexCache>`
**File:** `TaleWorlds.MountAndBlade/ActionIndexCache.cs`

## 概述

`ActionIndexCache` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Index` | `public int Index { get; }` |

## 主要方法

### Create
`public static ActionIndexCache Create(string actName)`

**用途 / Purpose:** 创建当前对象的新实例或相关实体。

```csharp
// 静态调用，不需要实例
ActionIndexCache.Create("example");
```

### GetName
`public string GetName()`

**用途 / Purpose:** 读取并返回当前对象中 name 的结果。

```csharp
// 先通过子系统 API 拿到 ActionIndexCache 实例
ActionIndexCache actionIndexCache = ...;
var result = actionIndexCache.GetName();
```

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 ActionIndexCache 实例
ActionIndexCache actionIndexCache = ...;
var result = actionIndexCache.Equals(obj);
```

### Equals
`public bool Equals(ActionIndexCache other)`

**用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 ActionIndexCache 实例
ActionIndexCache actionIndexCache = ...;
var result = actionIndexCache.Equals(other);
```

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 返回当前对象的哈希码，用于字典或哈希集合中的快速查找。

```csharp
// 先通过子系统 API 拿到 ActionIndexCache 实例
ActionIndexCache actionIndexCache = ...;
var result = actionIndexCache.GetHashCode();
```

## 使用示例

```csharp
ActionIndexCache.Create("example");
```

## 参见

- [本区域目录](../)