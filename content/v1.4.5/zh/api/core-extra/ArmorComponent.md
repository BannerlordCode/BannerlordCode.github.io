---
title: "ArmorComponent"
description: "ArmorComponent 的自动生成类参考。"
---
# ArmorComponent

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class ArmorComponent : ItemComponent`
**Base:** `ItemComponent`
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/ArmorComponent.cs`

## 概述

`ArmorComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `ArmorComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `HeadArmor` | `public int HeadArmor { get; }` |
| `BodyArmor` | `public int BodyArmor { get; }` |
| `LegArmor` | `public int LegArmor { get; }` |
| `ArmArmor` | `public int ArmArmor { get; }` |
| `ManeuverBonus` | `public int ManeuverBonus { get; }` |
| `SpeedBonus` | `public int SpeedBonus { get; }` |
| `ChargeBonus` | `public int ChargeBonus { get; }` |
| `FamilyType` | `public int FamilyType { get; }` |
| `MultiMeshHasGenderVariations` | `public bool MultiMeshHasGenderVariations { get; }` |
| `MaterialType` | `public ArmorMaterialTypes MaterialType { get; }` |
| `MeshesMask` | `public SkinMask MeshesMask { get; }` |
| `BodyMeshType` | `public BodyMeshTypes BodyMeshType { get; }` |
| `BodyDeformType` | `public BodyDeformTypes BodyDeformType { get; }` |
| `HairCoverType` | `public HairCoverTypes HairCoverType { get; }` |
| `BeardCoverType` | `public BeardCoverTypes BeardCoverType { get; }` |
| `ManeCoverType` | `public HorseHarnessCoverTypes ManeCoverType { get; }` |
| `TailCoverType` | `public HorseTailCoverTypes TailCoverType { get; }` |
| `StealthFactor` | `public int StealthFactor { get; }` |
| `ReinsMesh` | `public string ReinsMesh { get; }` |
| `IsNoSlim` | `public bool IsNoSlim { get; }` |

## 主要方法

### GetCopy
`public override ItemComponent GetCopy()`

**用途 / Purpose:** 读取并返回当前对象中 「copy」 的结果。

```csharp
// 先通过子系统 API 拿到 ArmorComponent 实例
ArmorComponent armorComponent = ...;
var result = armorComponent.GetCopy();
```

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** 从序列化数据还原当前对象。

```csharp
// 先通过子系统 API 拿到 ArmorComponent 实例
ArmorComponent armorComponent = ...;
armorComponent.Deserialize(objectManager, node);
```

## 使用示例

```csharp
var component = agent.GetComponent<ArmorComponent>();
```

## 参见

- [本区域目录](../)