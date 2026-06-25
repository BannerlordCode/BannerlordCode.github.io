---
title: "HorseComponent"
description: "HorseComponent 的自动生成类参考。"
---
# HorseComponent

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class HorseComponent : ItemComponent`
**Base:** `ItemComponent`
**File:** `TaleWorlds.Core/HorseComponent.cs`

## 概述

`HorseComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `HorseComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Monster` | `public Monster Monster { get; }` |
| `Maneuver` | `public int Maneuver { get; }` |
| `ChargeDamage` | `public int ChargeDamage { get; }` |
| `Speed` | `public int Speed { get; }` |
| `BodyLength` | `public int BodyLength { get; }` |
| `HitPoints` | `public int HitPoints { get; }` |
| `HitPointBonus` | `public int HitPointBonus { get; }` |
| `IsRideable` | `public bool IsRideable { get; }` |
| `IsPackAnimal` | `public bool IsPackAnimal { get; }` |
| `IsMount` | `public bool IsMount { get; }` |
| `IsLiveStock` | `public bool IsLiveStock { get; }` |
| `HorseMaterialNames` | `public MBReadOnlyList<HorseComponent.MaterialProperty> HorseMaterialNames { get; }` |
| `MeatCount` | `public int MeatCount { get; }` |
| `HideCount` | `public int HideCount { get; }` |
| `SkeletonScale` | `public SkeletonScale SkeletonScale { get; }` |
| `Name` | `public string Name { get; }` |

## 主要方法

### GetCopy
`public override ItemComponent GetCopy()`

**用途 / Purpose:** 读取并返回当前对象中 copy 的结果。

```csharp
// 先通过子系统 API 拿到 HorseComponent 实例
HorseComponent horseComponent = ...;
var result = horseComponent.GetCopy();
```

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** 从序列化数据还原当前对象。

```csharp
// 先通过子系统 API 拿到 HorseComponent 实例
HorseComponent horseComponent = ...;
horseComponent.Deserialize(objectManager, node);
```

## 使用示例

```csharp
var component = agent.GetComponent<HorseComponent>();
```

## 参见

- [本区域目录](../)