---
title: "WeaponDesignElement"
description: "WeaponDesignElement 的自动生成类参考。"
---
# WeaponDesignElement

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class WeaponDesignElement`
**Base:** 无
**File:** `TaleWorlds.Core/WeaponDesignElement.cs`

## 概述

`WeaponDesignElement` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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
`public void SetScale(int scalePercentage)`

**用途 / Purpose:** **用途 / Purpose:** 为 scale 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 WeaponDesignElement 实例
WeaponDesignElement weaponDesignElement = ...;
weaponDesignElement.SetScale(0);
```

### GetCopy
`public WeaponDesignElement GetCopy()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 copy 的结果。

```csharp
// 先通过子系统 API 拿到 WeaponDesignElement 实例
WeaponDesignElement weaponDesignElement = ...;
var result = weaponDesignElement.GetCopy();
```

### GetInvalidPieceForType
`public static WeaponDesignElement GetInvalidPieceForType(CraftingPiece.PieceTypes pieceType)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 invalid piece for type 的结果。

```csharp
// 静态调用，不需要实例
WeaponDesignElement.GetInvalidPieceForType(pieceType);
```

### CreateUsablePiece
`public static WeaponDesignElement CreateUsablePiece(CraftingPiece craftingPiece, int scalePercentage = 100)`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 usable piece 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
WeaponDesignElement.CreateUsablePiece(craftingPiece, 0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
WeaponDesignElement weaponDesignElement = ...;
weaponDesignElement.SetScale(0);
```

## 参见

- [本区域目录](../)