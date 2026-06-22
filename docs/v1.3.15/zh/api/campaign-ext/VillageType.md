<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `VillageType`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VillageType

**命名空间:** TaleWorlds.CampaignSystem.Settlements
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`VillageType` 是 `TaleWorlds.CampaignSystem.Settlements` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `All` | `public static MBReadOnlyList<VillageType> All { get; }` |
| `Productions` | `public MBReadOnlyList<ValueTuple<ItemObject, float>> Productions { get; }` |
| `PrimaryProduction` | `public ItemObject PrimaryProduction { get; }` |


## 主要方法

### Initialize

```csharp
public VillageType Initialize(TextObject shortName, string meshName, string meshNameUnderConstruction, string meshNameBurned, ValueTuple<ItemObject, float> productions)
```

### ToString

```csharp
public override string ToString()
```

### AddProductions

```csharp
public void AddProductions(IEnumerable<ValueTuple<ItemObject, float>> productions)
```

### GetProductionPerDay

```csharp
public float GetProductionPerDay(ItemObject item)
```

### GetProductionPerDay

```csharp
public float GetProductionPerDay(ItemCategory itemCategory)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)