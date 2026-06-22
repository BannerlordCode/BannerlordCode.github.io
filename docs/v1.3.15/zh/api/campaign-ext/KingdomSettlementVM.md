<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `KingdomSettlementVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# KingdomSettlementVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`KingdomSettlementVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `CurrentSelectedSettlement` | `public KingdomSettlementItemVM CurrentSelectedSettlement { get; set; }` |
| `SettlementSortController` | `public KingdomSettlementSortControllerVM SettlementSortController { get; set; }` |
| `AnnexHint` | `public HintViewModel AnnexHint { get; set; }` |
| `ProposeText` | `public string ProposeText { get; set; }` |
| `AnnexActionExplanationText` | `public string AnnexActionExplanationText { get; set; }` |
| `ProsperityText` | `public string ProsperityText { get; set; }` |
| `VillagesText` | `public string VillagesText { get; set; }` |
| `OwnerText` | `public string OwnerText { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `ClanText` | `public string ClanText { get; set; }` |
| `FoodText` | `public string FoodText { get; set; }` |
| `GarrisonText` | `public string GarrisonText { get; set; }` |
| `MilitiaText` | `public string MilitiaText { get; set; }` |
| `AnnexText` | `public string AnnexText { get; set; }` |
| `TypeText` | `public string TypeText { get; set; }` |
| `AnnexCost` | `public int AnnexCost { get; set; }` |
| `DefendersText` | `public string DefendersText { get; set; }` |
| `Settlements` | `public MBBindingList<KingdomSettlementItemVM> Settlements { get; set; }` |
| `CanAnnexCurrentSettlement` | `public bool CanAnnexCurrentSettlement { get; set; }` |
| `HasCost` | `public bool HasCost { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### RefreshSettlementList

```csharp
public void RefreshSettlementList()
```

### SelectSettlement

```csharp
public void SelectSettlement(Settlement settlement)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)