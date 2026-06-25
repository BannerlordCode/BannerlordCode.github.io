---
title: "MBTeam"
description: "MBTeam 的自动生成类参考。"
---
# MBTeam

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct MBTeam`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/MBTeam.cs`

## 概述

`MBTeam` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `InvalidTeam` | `public static MBTeam InvalidTeam { get; }` |
| `IsValid` | `public bool IsValid { get; }` |

## 主要方法

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** **用途 / Purpose:** 返回当前对象的哈希码，用于字典或哈希集合中的快速查找。

```csharp
// 先通过子系统 API 拿到 MBTeam 实例
MBTeam mBTeam = ...;
var result = mBTeam.GetHashCode();
```

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** **用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 MBTeam 实例
MBTeam mBTeam = ...;
var result = mBTeam.Equals(obj);
```

### IsEnemyOf
`public bool IsEnemyOf(MBTeam otherTeam)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 enemy of 状态或条件。

```csharp
// 先通过子系统 API 拿到 MBTeam 实例
MBTeam mBTeam = ...;
var result = mBTeam.IsEnemyOf(otherTeam);
```

### SetIsEnemyOf
`public void SetIsEnemyOf(MBTeam otherTeam, bool isEnemyOf)`

**用途 / Purpose:** **用途 / Purpose:** 为 is enemy of 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MBTeam 实例
MBTeam mBTeam = ...;
mBTeam.SetIsEnemyOf(otherTeam, false);
```

### ToString
`public override string ToString()`

**用途 / Purpose:** **用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 MBTeam 实例
MBTeam mBTeam = ...;
var result = mBTeam.ToString();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MBTeam mBTeam = ...;
mBTeam.GetHashCode();
```

## 参见

- [本区域目录](../)