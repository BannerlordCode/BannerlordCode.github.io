<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ShipUpgradePiece`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ShipUpgradePiece

**命名空间:** TaleWorlds.Core
**模块:** TaleWorlds.Core
**类型:** 类 class class
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`ShipUpgradePiece` 是 `TaleWorlds.Core` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public TextObject Name { get; }` |
| `Description` | `public TextObject Description { get; }` |
| `TargetSlots` | `public MBReadOnlyList<ShipSlot> TargetSlots { get; }` |
| `LightValue` | `public int LightValue { get; }` |
| `MediumValue` | `public int MediumValue { get; }` |
| `HeavyValue` | `public int HeavyValue { get; }` |
| `SlotPrefabChildTagId` | `public string SlotPrefabChildTagId { get; }` |
| `NotMerchandise` | `public bool NotMerchandise { get; }` |
| `CombatFactor` | `public float CombatFactor { get; }` |
| `CrewCapacityBonusMultiplier` | `public float CrewCapacityBonusMultiplier { get; }` |
| `RequiredPortLevel` | `public int RequiredPortLevel { get; }` |
| `ShipWeightBonusMultiplier` | `public float ShipWeightBonusMultiplier { get; }` |
| `RequiredCulture1` | `public BasicCultureObject RequiredCulture1 { get; }` |
| `DecreaseForwardDragMultiplier` | `public float DecreaseForwardDragMultiplier { get; }` |
| `CampaignSpeedBonusMultiplier` | `public float CampaignSpeedBonusMultiplier { get; }` |
| `MaxHitPointsBonusMultiplier` | `public float MaxHitPointsBonusMultiplier { get; }` |
| `MaxSailHitPointsBonusMultiplier` | `public float MaxSailHitPointsBonusMultiplier { get; }` |
| `SeaWorthinessBonus` | `public int SeaWorthinessBonus { get; }` |
| `CrewShieldHitPointsBonusMultiplier` | `public float CrewShieldHitPointsBonusMultiplier { get; }` |
| `InventoryCapacityBonusMultiplier` | `public float InventoryCapacityBonusMultiplier { get; }` |


## 主要方法

### Deserialize

```csharp
public override void Deserialize(MBObjectManager objectManager, XmlNode node)
```

### ToString

```csharp
public override string ToString()
```

### GetName

```csharp
public override TextObject GetName()
```

### DoesPieceMatchSlot

```csharp
public bool DoesPieceMatchSlot(ShipSlot slot)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)