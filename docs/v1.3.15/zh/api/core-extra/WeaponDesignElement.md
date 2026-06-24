<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WeaponDesignElement`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 设置 `scale` 的值或状态。

### GetCopy
`public WeaponDesignElement GetCopy()`

**用途 / Purpose:** 获取 `copy` 的当前值。

### GetInvalidPieceForType
`public static WeaponDesignElement GetInvalidPieceForType(CraftingPiece.PieceTypes pieceType)`

**用途 / Purpose:** 获取 `invalid piece for type` 的当前值。

### CreateUsablePiece
`public static WeaponDesignElement CreateUsablePiece(CraftingPiece craftingPiece, int scalePercentage = 100)`

**用途 / Purpose:** 创建一个 `usable piece` 实例或对象。

## 使用示例

```csharp
var value = new WeaponDesignElement();
value.SetScale(0);
```

## 参见

- [完整类目录](../catalog)