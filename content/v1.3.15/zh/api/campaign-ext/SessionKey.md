---
title: "SessionKey"
description: "SessionKey 的自动生成类参考。"
---
# SessionKey

**Namespace:** TaleWorlds.Diamond
**Module:** TaleWorlds.Diamond
**Type:** `public struct SessionKey`
**Base:** 无
**File:** `TaleWorlds.Diamond/SessionKey.cs`

## 概述

`SessionKey` 位于 `TaleWorlds.Diamond`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Diamond` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Guid` | `public Guid Guid { get; }` |
| `Empty` | `public static SessionKey Empty { get; }` |

## 主要方法

### NewGuid
`public static SessionKey NewGuid()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
SessionKey.NewGuid();
```

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 SessionKey 实例
SessionKey sessionKey = ...;
var result = sessionKey.ToString();
```

### ToByteArray
`public byte ToByteArray()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 SessionKey 实例
SessionKey sessionKey = ...;
var result = sessionKey.ToByteArray();
```

### Equals
`public override bool Equals(object o)`

**用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 SessionKey 实例
SessionKey sessionKey = ...;
var result = sessionKey.Equals(o);
```

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 返回当前对象的哈希码，用于字典或哈希集合中的快速查找。

```csharp
// 先通过子系统 API 拿到 SessionKey 实例
SessionKey sessionKey = ...;
var result = sessionKey.GetHashCode();
```

## 使用示例

```csharp
SessionKey.NewGuid();
```

## 参见

- [本区域目录](../)