---
title: "CraftingTemplate"
description: "CraftingTemplate 的自动生成类参考。"
---
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

**用途 / Purpose:** 读取并返回当前对象中 index of usage data with id 的结果。

```csharp
// 先通过子系统 API 拿到 CraftingTemplate 实例
CraftingTemplate craftingTemplate = ...;
var result = craftingTemplate.GetIndexOfUsageDataWithId("example");
```

### IsPieceTypeHiddenOnHolster
`public bool IsPieceTypeHiddenOnHolster(CraftingPiece.PieceTypes pieceType)`

**用途 / Purpose:** 判断当前对象是否处于 piece type hidden on holster 状态或条件。

```csharp
// 先通过子系统 API 拿到 CraftingTemplate 实例
CraftingTemplate craftingTemplate = ...;
var result = craftingTemplate.IsPieceTypeHiddenOnHolster(pieceType);
```

### GetStatDatas
`public IEnumerable<KeyValuePair<CraftingTemplate.CraftingStatTypes, float>> GetStatDatas(string weaponDescriptionId, DamageTypes thrustDamageType, DamageTypes swingDamageType)`

**用途 / Purpose:** 读取并返回当前对象中 stat datas 的结果。

```csharp
// 先通过子系统 API 拿到 CraftingTemplate 实例
CraftingTemplate craftingTemplate = ...;
var result = craftingTemplate.GetStatDatas("example", thrustDamageType, swingDamageType);
```

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 CraftingTemplate 实例
CraftingTemplate craftingTemplate = ...;
var result = craftingTemplate.ToString();
```

### IsPieceTypeUsable
`public bool IsPieceTypeUsable(CraftingPiece.PieceTypes pieceType)`

**用途 / Purpose:** 判断当前对象是否处于 piece type usable 状态或条件。

```csharp
// 先通过子系统 API 拿到 CraftingTemplate 实例
CraftingTemplate craftingTemplate = ...;
var result = craftingTemplate.IsPieceTypeUsable(pieceType);
```

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** 从序列化数据还原当前对象。

```csharp
// 先通过子系统 API 拿到 CraftingTemplate 实例
CraftingTemplate craftingTemplate = ...;
craftingTemplate.Deserialize(objectManager, node);
```

### GetTemplateFromId
`public static CraftingTemplate GetTemplateFromId(string templateId)`

**用途 / Purpose:** 读取并返回当前对象中 template from id 的结果。

```csharp
// 静态调用，不需要实例
CraftingTemplate.GetTemplateFromId("example");
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CraftingTemplate craftingTemplate = ...;
craftingTemplate.GetIndexOfUsageDataWithId("example");
```

## 参见

- [本区域目录](../)