<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CraftingTemplate`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CraftingTemplate

**命名空间:** TaleWorlds.Core
**模块:** TaleWorlds.Core
**类型:** 类 class class
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`CraftingTemplate` 是 `TaleWorlds.Core` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
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

```csharp
public int GetIndexOfUsageDataWithId(string weaponDescriptionId)
```

### IsPieceTypeHiddenOnHolster

```csharp
public bool IsPieceTypeHiddenOnHolster(CraftingPiece.PieceTypes pieceType)
```

### GetStatDatas

```csharp
public IEnumerable<KeyValuePair<CraftingTemplate.CraftingStatTypes, float>> GetStatDatas(string weaponDescriptionId, DamageTypes thrustDamageType, DamageTypes swingDamageType)
```

### ToString

```csharp
public override string ToString()
```

### IsPieceTypeUsable

```csharp
public bool IsPieceTypeUsable(CraftingPiece.PieceTypes pieceType)
```

### Deserialize

```csharp
public override void Deserialize(MBObjectManager objectManager, XmlNode node)
```

### GetTemplateFromId

```csharp
public static CraftingTemplate GetTemplateFromId(string templateId)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)