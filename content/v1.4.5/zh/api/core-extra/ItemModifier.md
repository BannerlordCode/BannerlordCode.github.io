---
title: "ItemModifier"
description: "ItemModifier 的自动生成类参考。"
---
# ItemModifier

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public sealed class ItemModifier : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/ItemModifier.cs`

## 概述

`ItemModifier` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public TextObject Name { get; }` |
| `Damage` | `public int Damage { get; }` |
| `Speed` | `public int Speed { get; }` |
| `MissileSpeed` | `public int MissileSpeed { get; }` |
| `Armor` | `public int Armor { get; }` |
| `HitPoints` | `public short HitPoints { get; }` |
| `StackCount` | `public short StackCount { get; }` |
| `MountSpeed` | `public float MountSpeed { get; }` |
| `Maneuver` | `public float Maneuver { get; }` |
| `ChargeDamage` | `public float ChargeDamage { get; }` |
| `MountHitPoints` | `public float MountHitPoints { get; }` |
| `LootDropScore` | `public float LootDropScore { get; }` |
| `ProductionDropScore` | `public float ProductionDropScore { get; }` |
| `PriceMultiplier` | `public float PriceMultiplier { get; }` |
| `ItemQuality` | `public ItemQuality ItemQuality { get; }` |

## 主要方法

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** **用途 / Purpose:** 从序列化数据还原当前对象。

```csharp
// 先通过子系统 API 拿到 ItemModifier 实例
ItemModifier itemModifier = ...;
itemModifier.Deserialize(objectManager, node);
```

### IsBeneficial
`public bool IsBeneficial()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 beneficial 状态或条件。

```csharp
// 先通过子系统 API 拿到 ItemModifier 实例
ItemModifier itemModifier = ...;
var result = itemModifier.IsBeneficial();
```

### Equals
`public bool Equals(ItemModifier other)`

**用途 / Purpose:** **用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 ItemModifier 实例
ItemModifier itemModifier = ...;
var result = itemModifier.Equals(other);
```

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** **用途 / Purpose:** 返回当前对象的哈希码，用于字典或哈希集合中的快速查找。

```csharp
// 先通过子系统 API 拿到 ItemModifier 实例
ItemModifier itemModifier = ...;
var result = itemModifier.GetHashCode();
```

### ModifyDamage
`public int ModifyDamage(int baseDamage)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ModifyDamage 对应的操作。

```csharp
// 先通过子系统 API 拿到 ItemModifier 实例
ItemModifier itemModifier = ...;
var result = itemModifier.ModifyDamage(0);
```

### ModifySpeed
`public int ModifySpeed(int baseSpeed)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ModifySpeed 对应的操作。

```csharp
// 先通过子系统 API 拿到 ItemModifier 实例
ItemModifier itemModifier = ...;
var result = itemModifier.ModifySpeed(0);
```

### ModifyMountSpeed
`public int ModifyMountSpeed(int baseSpeed)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ModifyMountSpeed 对应的操作。

```csharp
// 先通过子系统 API 拿到 ItemModifier 实例
ItemModifier itemModifier = ...;
var result = itemModifier.ModifyMountSpeed(0);
```

### ModifyMountManeuver
`public int ModifyMountManeuver(int baseManeuver)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ModifyMountManeuver 对应的操作。

```csharp
// 先通过子系统 API 拿到 ItemModifier 实例
ItemModifier itemModifier = ...;
var result = itemModifier.ModifyMountManeuver(0);
```

### ModifyMountCharge
`public int ModifyMountCharge(int baseCharge)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ModifyMountCharge 对应的操作。

```csharp
// 先通过子系统 API 拿到 ItemModifier 实例
ItemModifier itemModifier = ...;
var result = itemModifier.ModifyMountCharge(0);
```

### ModifyMountHitPoints
`public int ModifyMountHitPoints(int baseCharge)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ModifyMountHitPoints 对应的操作。

```csharp
// 先通过子系统 API 拿到 ItemModifier 实例
ItemModifier itemModifier = ...;
var result = itemModifier.ModifyMountHitPoints(0);
```

### ModifyMissileSpeed
`public int ModifyMissileSpeed(int baseSpeed)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ModifyMissileSpeed 对应的操作。

```csharp
// 先通过子系统 API 拿到 ItemModifier 实例
ItemModifier itemModifier = ...;
var result = itemModifier.ModifyMissileSpeed(0);
```

### ModifyArmor
`public int ModifyArmor(int armorValue)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ModifyArmor 对应的操作。

```csharp
// 先通过子系统 API 拿到 ItemModifier 实例
ItemModifier itemModifier = ...;
var result = itemModifier.ModifyArmor(0);
```

### ModifyHitPoints
`public short ModifyHitPoints(short baseHitPoints)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ModifyHitPoints 对应的操作。

```csharp
// 先通过子系统 API 拿到 ItemModifier 实例
ItemModifier itemModifier = ...;
var result = itemModifier.ModifyHitPoints(0);
```

### ModifyStackCount
`public short ModifyStackCount(short baseStackCount)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ModifyStackCount 对应的操作。

```csharp
// 先通过子系统 API 拿到 ItemModifier 实例
ItemModifier itemModifier = ...;
var result = itemModifier.ModifyStackCount(0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ItemModifier itemModifier = ...;
itemModifier.Deserialize(objectManager, node);
```

## 参见

- [本区域目录](../)