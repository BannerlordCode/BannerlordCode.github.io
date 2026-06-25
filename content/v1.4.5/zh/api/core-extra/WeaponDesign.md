---
title: "WeaponDesign"
description: "WeaponDesign 的自动生成类参考。"
---
# WeaponDesign

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class WeaponDesign`
**Base:** 无
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/WeaponDesign.cs`

## 概述

`WeaponDesign` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `WeaponName` | `public TextObject WeaponName { get; }` |
| `HandToBottomLength` | `public float HandToBottomLength { get; }` |
| `HashedCode` | `public string HashedCode { get; }` |

## 主要方法

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 WeaponDesign 实例
WeaponDesign weaponDesign = ...;
var result = weaponDesign.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 返回当前对象的哈希码，用于字典或哈希集合中的快速查找。

```csharp
// 先通过子系统 API 拿到 WeaponDesign 实例
WeaponDesign weaponDesign = ...;
var result = weaponDesign.GetHashCode();
```

### SetWeaponName
`public void SetWeaponName(TextObject name)`

**用途 / Purpose:** 为 weapon name 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 WeaponDesign 实例
WeaponDesign weaponDesign = ...;
weaponDesign.SetWeaponName(name);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
WeaponDesign weaponDesign = ...;
weaponDesign.Equals(obj);
```

## 参见

- [本区域目录](../)