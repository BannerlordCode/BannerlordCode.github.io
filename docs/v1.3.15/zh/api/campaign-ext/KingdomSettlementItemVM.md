<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `KingdomSettlementItemVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# KingdomSettlementItemVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`KingdomSettlementItemVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Garrison` | `public int Garrison { get; }` |
| `Militia` | `public int Militia { get; }` |
| `ItemProperties` | `public MBBindingList<SelectableFiefItemPropertyVM> ItemProperties { get; set; }` |
| `Villages` | `public MBBindingList<KingdomSettlementVillageItemVM> Villages { get; set; }` |
| `IconPath` | `public string IconPath { get; set; }` |
| `Defenders` | `public int Defenders { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `ImageName` | `public string ImageName { get; set; }` |
| `SettlementImagePath` | `public string SettlementImagePath { get; set; }` |
| `GovernorName` | `public string GovernorName { get; set; }` |
| `OwnerClanBanner` | `public BannerImageIdentifierVM OwnerClanBanner { get; set; }` |
| `OwnerClanBanner_9` | `public BannerImageIdentifierVM OwnerClanBanner_9 { get; set; }` |
| `Owner` | `public HeroVM Owner { get; set; }` |
| `WallLevel` | `public int WallLevel { get; set; }` |
| `Prosperity` | `public int Prosperity { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### ExecuteLink

```csharp
public void ExecuteLink()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)