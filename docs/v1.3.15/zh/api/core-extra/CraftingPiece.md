<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CraftingPiece`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CraftingPiece

**命名空间:** TaleWorlds.Core
**模块:** TaleWorlds.Core
**类型:** 类 class class
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`CraftingPiece` 是 `TaleWorlds.Core` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
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


## 主要方法

### GetInvalidCraftingPiece

```csharp
public static CraftingPiece GetInvalidCraftingPiece(CraftingPiece.PieceTypes pieceType)
```

### Deserialize

```csharp
public override void Deserialize(MBObjectManager objectManager, XmlNode node)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)