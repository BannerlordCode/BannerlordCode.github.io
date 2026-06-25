---
title: "MBGUID"
description: "MBGUID 的自动生成类参考。"
---
# MBGUID

**Namespace:** TaleWorlds.ObjectSystem
**Module:** TaleWorlds.ObjectSystem
**Type:** `public struct MBGUID : IComparable, IEquatable<MBGUID>`
**Base:** `IComparable`
**File:** `TaleWorlds.ObjectSystem/MBGUID.cs`

## 概述

`MBGUID` 位于 `TaleWorlds.ObjectSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.ObjectSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `InternalValue` | `public uint InternalValue { get; }` |
| `SubId` | `public uint SubId { get; }` |

## 主要方法

### GetHash2
`public static long GetHash2(MBGUID id1, MBGUID id2)`

**用途 / Purpose:** 读取并返回当前对象中 「hash2」 的结果。

```csharp
// 静态调用，不需要实例
MBGUID.GetHash2(id1, id2);
```

### CompareTo
`public int CompareTo(object a)`

**用途 / Purpose:** 将当前对象与传入实例比较大小或顺序。

```csharp
// 先通过子系统 API 拿到 MBGUID 实例
MBGUID mBGUID = ...;
var result = mBGUID.CompareTo(a);
```

### GetTypeIndex
`public uint GetTypeIndex()`

**用途 / Purpose:** 读取并返回当前对象中 「type index」 的结果。

```csharp
// 先通过子系统 API 拿到 MBGUID 实例
MBGUID mBGUID = ...;
var result = mBGUID.GetTypeIndex();
```

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 返回当前对象的哈希码，用于字典或哈希集合中的快速查找。

```csharp
// 先通过子系统 API 拿到 MBGUID 实例
MBGUID mBGUID = ...;
var result = mBGUID.GetHashCode();
```

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 MBGUID 实例
MBGUID mBGUID = ...;
var result = mBGUID.ToString();
```

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 MBGUID 实例
MBGUID mBGUID = ...;
var result = mBGUID.Equals(obj);
```

### Equals
`public bool Equals(MBGUID other)`

**用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 MBGUID 实例
MBGUID mBGUID = ...;
var result = mBGUID.Equals(other);
```

## 使用示例

```csharp
MBGUID.GetHash2(id1, id2);
```

## 参见

- [本区域目录](../)