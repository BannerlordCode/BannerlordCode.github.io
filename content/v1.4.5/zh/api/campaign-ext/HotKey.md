---
title: "HotKey"
description: "HotKey 的自动生成类参考。"
---
# HotKey

**Namespace:** TaleWorlds.InputSystem
**Module:** TaleWorlds.InputSystem
**Type:** `public class HotKey`
**Base:** 无
**File:** `TaleWorlds.InputSystem/HotKey.cs`

## 概述

`HotKey` 位于 `TaleWorlds.InputSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.InputSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Keys` | `public List<Key> Keys { get; }` |
| `DefaultKeys` | `public List<Key> DefaultKeys { get; }` |

## 主要方法

### HasModifier
`public bool HasModifier(HotKey.Modifiers modifier)`

**用途 / Purpose:** 判断当前对象是否已经持有 modifier。

```csharp
// 先通过子系统 API 拿到 HotKey 实例
HotKey hotKey = ...;
var result = hotKey.HasModifier(modifier);
```

### HasSameModifiers
`public bool HasSameModifiers(HotKey other)`

**用途 / Purpose:** 判断当前对象是否已经持有 same modifiers。

```csharp
// 先通过子系统 API 拿到 HotKey 实例
HotKey hotKey = ...;
var result = hotKey.HasSameModifiers(other);
```

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 HotKey 实例
HotKey hotKey = ...;
var result = hotKey.ToString();
```

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 HotKey 实例
HotKey hotKey = ...;
var result = hotKey.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 返回当前对象的哈希码，用于字典或哈希集合中的快速查找。

```csharp
// 先通过子系统 API 拿到 HotKey 实例
HotKey hotKey = ...;
var result = hotKey.GetHashCode();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
HotKey hotKey = ...;
hotKey.HasModifier(modifier);
```

## 参见

- [本区域目录](../)