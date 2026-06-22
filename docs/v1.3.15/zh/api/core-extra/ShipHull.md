<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ShipHull`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ShipHull

**命名空间:** TaleWorlds.Core
**模块:** TaleWorlds.Core
**类型:** 类 class class
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`ShipHull` 是 `TaleWorlds.Core` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public TextObject Name { get; }` |
| `Description` | `public TextObject Description { get; }` |
| `EncyclopediaLink` | `public string EncyclopediaLink { get; }` |
| `EncyclopediaLinkWithName` | `public TextObject EncyclopediaLinkWithName { get; }` |
| `BaseSpeed` | `public float BaseSpeed { get; }` |
| `Value` | `public int Value { get; }` |
| `HasHold` | `public bool HasHold { get; }` |
| `CanNavigateShallowWater` | `public bool CanNavigateShallowWater { get; }` |
| `CanEquipFigurehead` | `public bool CanEquipFigurehead { get; }` |
| `ProductionBuildWeight` | `public float ProductionBuildWeight { get; }` |
| `SeaWorthiness` | `public int SeaWorthiness { get; }` |
| `Type` | `public ShipHull.ShipType Type { get; }` |
| `IsTradeShip` | `public bool IsTradeShip { get; }` |
| `MissionShipObjectId` | `public string MissionShipObjectId { get; }` |
| `DefaultFormationGroup` | `public int DefaultFormationGroup { get; }` |
| `InventoryCapacity` | `public int InventoryCapacity { get; }` |
| `MaxHitPoints` | `public int MaxHitPoints { get; }` |
| `MaxFireHitPoints` | `public int MaxFireHitPoints { get; }` |
| `MaxSailHitPoints` | `public int MaxSailHitPoints { get; }` |
| `TotalCrewCapacity` | `public int TotalCrewCapacity { get; }` |


## 主要方法

### ToString

```csharp
public override string ToString()
```

### GetName

```csharp
public override TextObject GetName()
```

### Deserialize

```csharp
public override void Deserialize(MBObjectManager objectManager, XmlNode node)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)