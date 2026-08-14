---
title: "CustomBattleId"
description: "CustomBattleId 的自动生成类参考。"
---
# CustomBattleId

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct CustomBattleId`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.Diamond/CustomBattleId.cs`

## 概述

`CustomBattleId` 位于 `TaleWorlds.MountAndBlade.Diamond`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Diamond` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Guid` | `public Guid Guid { get; }` |

## 主要方法

### NewGuid
`public static CustomBattleId NewGuid()`

**用途 / Purpose:** 调用 NewGuid 对应的操作。

```csharp
// 静态调用，不需要实例
CustomBattleId.NewGuid();
```

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 CustomBattleId 实例
CustomBattleId customBattleId = ...;
var result = customBattleId.ToString();
```

### ToByteArray
`public byte ToByteArray()`

**用途 / Purpose:** 调用 ToByteArray 对应的操作。

```csharp
// 先通过子系统 API 拿到 CustomBattleId 实例
CustomBattleId customBattleId = ...;
var result = customBattleId.ToByteArray();
```

### Equals
`public override bool Equals(object o)`

**用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 CustomBattleId 实例
CustomBattleId customBattleId = ...;
var result = customBattleId.Equals(o);
```

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 返回当前对象的哈希码，用于字典或哈希集合中的快速查找。

```csharp
// 先通过子系统 API 拿到 CustomBattleId 实例
CustomBattleId customBattleId = ...;
var result = customBattleId.GetHashCode();
```

## 使用示例

```csharp
CustomBattleId.NewGuid();
```

## 参见

- [本区域目录](../)