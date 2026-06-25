---
title: "CraftingTemplate"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CraftingTemplate`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CraftingTemplate

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class CraftingTemplate : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.Core/CraftingTemplate.cs`

## 概述

`CraftingTemplate` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `BuildOrders` | `public PieceData BuildOrders { get; }` |
| `WeaponDescriptions` | `public WeaponDescription WeaponDescriptions { get; }` |
| `Pieces` | `public List<CraftingPiece> Pieces { get; }` |
| `ItemType` | `public ItemObject.ItemTypeEnum ItemType { get; }` |
| `ItemModifierGroup` | `public ItemModifierGroup ItemModifierGroup { get; }` |
| `ItemHolsters` | `public string ItemHolsters { get; }` |
| `ItemHolsterPositionShift` | `public Vec3 ItemHolsterPositionShift { get; }` |
| `UseWeaponAsHolsterMesh` | `public bool UseWeaponAsHolsterMesh { get; }` |
| `AlwaysShowHolsterWithWeapon` | `public bool AlwaysShowHolsterWithWeapon { get; }` |
| `RotateWeaponInHolster` | `public bool RotateWeaponInHolster { get; }` |
| `PieceTypeToScaleHolsterWith` | `public CraftingPiece.PieceTypes PieceTypeToScaleHolsterWith { get; }` |
| `All` | `public static MBReadOnlyList<CraftingTemplate> All { get; }` |

## 主要方法

### GetIndexOfUsageDataWithId
`public int GetIndexOfUsageDataWithId(string weaponDescriptionId)`

**用途 / Purpose:** 获取 `index of usage data with id` 的当前值。

### IsPieceTypeHiddenOnHolster
`public bool IsPieceTypeHiddenOnHolster(CraftingPiece.PieceTypes pieceType)`

**用途 / Purpose:** 处理 `is piece type hidden on holster` 相关逻辑。

### GetStatDatas
`public IEnumerable<KeyValuePair<CraftingTemplate.CraftingStatTypes, float>> GetStatDatas(string weaponDescriptionId, DamageTypes thrustDamageType, DamageTypes swingDamageType)`

**用途 / Purpose:** 获取 `stat datas` 的当前值。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### IsPieceTypeUsable
`public bool IsPieceTypeUsable(CraftingPiece.PieceTypes pieceType)`

**用途 / Purpose:** 处理 `is piece type usable` 相关逻辑。

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** 处理 `deserialize` 相关逻辑。

### GetTemplateFromId
`public static CraftingTemplate GetTemplateFromId(string templateId)`

**用途 / Purpose:** 获取 `template from id` 的当前值。

## 使用示例

```csharp
var value = new CraftingTemplate();
value.GetIndexOfUsageDataWithId("example");
```

## 参见

- [完整类目录](../catalog)