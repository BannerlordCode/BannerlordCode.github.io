---
title: "Vec3i"
description: "Vec3i 的自动生成类参考。"
---
# Vec3i

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct Vec3i`
**Base:** 无
**File:** `TaleWorlds.Library/Vec3i.cs`

## 概述

`Vec3i` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `this` | `public int this { get; set; }` |

## 主要方法

### ToVec3
`public Vec3 ToVec3()`

**用途 / Purpose:** 调用 ToVec3 对应的操作。

```csharp
// 先通过子系统 API 拿到 Vec3i 实例
Vec3i vec3i = ...;
var result = vec3i.ToVec3();
```

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 Vec3i 实例
Vec3i vec3i = ...;
var result = vec3i.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 返回当前对象的哈希码，用于字典或哈希集合中的快速查找。

```csharp
// 先通过子系统 API 拿到 Vec3i 实例
Vec3i vec3i = ...;
var result = vec3i.GetHashCode();
```

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 Vec3i 实例
Vec3i vec3i = ...;
var result = vec3i.ToString();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
Vec3i vec3i = ...;
vec3i.ToVec3();
```

## 参见

- [本区域目录](../)