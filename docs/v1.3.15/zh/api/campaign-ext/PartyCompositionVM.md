<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyCompositionVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyCompositionVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.Party
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`PartyCompositionVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.Party` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `InfantryCount` | `public int InfantryCount { get; set; }` |
| `RangedCount` | `public int RangedCount { get; set; }` |
| `CavalryCount` | `public int CavalryCount { get; set; }` |
| `HorseArcherCount` | `public int HorseArcherCount { get; set; }` |
| `InfantryHint` | `public HintViewModel InfantryHint { get; set; }` |
| `RangedHint` | `public HintViewModel RangedHint { get; set; }` |
| `CavalryHint` | `public HintViewModel CavalryHint { get; set; }` |
| `HorseArcherHint` | `public HintViewModel HorseArcherHint { get; set; }` |


## 主要方法

### OnTroopRemoved

```csharp
public void OnTroopRemoved(FormationClass formationClass, int count)
```

### OnTroopAdded

```csharp
public void OnTroopAdded(FormationClass formationClass, int count)
```

### RefreshCounts

```csharp
public void RefreshCounts(MBBindingList<PartyCharacterVM> list)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)