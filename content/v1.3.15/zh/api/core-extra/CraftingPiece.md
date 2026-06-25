---
title: "CraftingPiece"
description: "CraftingPiece 的自动生成类参考。"
---
# CraftingPiece

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public sealed class CraftingPiece : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.Core/CraftingPiece.cs`

## 概述

`CraftingPiece` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; }` |
| `Name` | `public TextObject Name { get; }` |
| `PieceType` | `public CraftingPiece.PieceTypes PieceType { get; }` |
| `MeshName` | `public string MeshName { get; }` |
| `Culture` | `public BasicCultureObject Culture { get; }` |
| `Length` | `public float Length { get; }` |
| `DistanceToNextPiece` | `public float DistanceToNextPiece { get; }` |
| `DistanceToPreviousPiece` | `public float DistanceToPreviousPiece { get; }` |
| `PieceOffset` | `public float PieceOffset { get; }` |
| `PreviousPieceOffset` | `public float PreviousPieceOffset { get; }` |
| `NextPieceOffset` | `public float NextPieceOffset { get; }` |
| `Weight` | `public float Weight { get; }` |
| `Inertia` | `public float Inertia { get; }` |
| `CenterOfMass` | `public float CenterOfMass { get; }` |
| `ArmorBonus` | `public int ArmorBonus { get; }` |
| `SwingDamageBonus` | `public int SwingDamageBonus { get; }` |
| `SwingSpeedBonus` | `public int SwingSpeedBonus { get; }` |
| `ThrustDamageBonus` | `public int ThrustDamageBonus { get; }` |
| `ThrustSpeedBonus` | `public int ThrustSpeedBonus { get; }` |
| `HandlingBonus` | `public int HandlingBonus { get; }` |
| `AccuracyBonus` | `public int AccuracyBonus { get; }` |
| `PieceTier` | `public int PieceTier { get; }` |
| `FullScale` | `public bool FullScale { get; }` |
| `ItemHolsterPosShift` | `public Vec3 ItemHolsterPosShift { get; }` |
| `Appearance` | `public float Appearance { get; }` |
| `IsGivenByDefault` | `public bool IsGivenByDefault { get; }` |
| `IsHiddenOnDesigner` | `public bool IsHiddenOnDesigner { get; }` |
| `IsUnique` | `public bool IsUnique { get; }` |
| `ItemUsageFeaturesToExclude` | `public string ItemUsageFeaturesToExclude { get; }` |
| `MaterialsUsed` | `public MBReadOnlyList<ValueTuple<CraftingMaterials, int>> MaterialsUsed { get; }` |
| `IsEmptyPiece` | `public bool IsEmptyPiece { get; }` |
| `CraftingCost` | `public int CraftingCost { get; }` |
| `RequiredSkillValue` | `public int RequiredSkillValue { get; }` |
| `BladeData` | `public BladeData BladeData { get; }` |
| `All` | `public static MBReadOnlyList<CraftingPiece> All { get; }` |

## 主要方法

### GetInvalidCraftingPiece
`public static CraftingPiece GetInvalidCraftingPiece(CraftingPiece.PieceTypes pieceType)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 invalid crafting piece 的结果。

```csharp
// 静态调用，不需要实例
CraftingPiece.GetInvalidCraftingPiece(pieceType);
```

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** **用途 / Purpose:** 从序列化数据还原当前对象。

```csharp
// 先通过子系统 API 拿到 CraftingPiece 实例
CraftingPiece craftingPiece = ...;
craftingPiece.Deserialize(objectManager, node);
```

## 使用示例

```csharp
CraftingPiece.GetInvalidCraftingPiece(pieceType);
```

## 参见

- [本区域目录](../)