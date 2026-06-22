<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WeaponDesignElement`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WeaponDesignElement

**命名空间:** TaleWorlds.Core
**模块:** TaleWorlds.Core
**类型:** 类 class class
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`WeaponDesignElement` 是 `TaleWorlds.Core` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `ScalePercentage` | `public int ScalePercentage { get; }` |
| `ScaleFactor` | `public float ScaleFactor { get; }` |
| `IsPieceScaled` | `public bool IsPieceScaled { get; }` |
| `CraftingPiece` | `public CraftingPiece CraftingPiece { get; }` |
| `IsValid` | `public bool IsValid { get; }` |
| `ScaledLength` | `public float ScaledLength { get; }` |
| `ScaledWeight` | `public float ScaledWeight { get; }` |
| `ScaledCenterOfMass` | `public float ScaledCenterOfMass { get; }` |
| `ScaledDistanceToNextPiece` | `public float ScaledDistanceToNextPiece { get; }` |
| `ScaledDistanceToPreviousPiece` | `public float ScaledDistanceToPreviousPiece { get; }` |
| `ScaledBladeLength` | `public float ScaledBladeLength { get; }` |
| `ScaledPieceOffset` | `public float ScaledPieceOffset { get; }` |
| `ScaledPreviousPieceOffset` | `public float ScaledPreviousPieceOffset { get; }` |
| `ScaledNextPieceOffset` | `public float ScaledNextPieceOffset { get; }` |


## 主要方法

### SetScale

```csharp
public void SetScale(int scalePercentage)
```

### GetCopy

```csharp
public WeaponDesignElement GetCopy()
```

### GetInvalidPieceForType

```csharp
public static WeaponDesignElement GetInvalidPieceForType(CraftingPiece.PieceTypes pieceType)
```

### CreateUsablePiece

```csharp
public static WeaponDesignElement CreateUsablePiece(CraftingPiece craftingPiece, int scalePercentage = 100)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)