<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `KingdomClanItemVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# KingdomClanItemVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`KingdomClanItemVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; set; }` |
| `ClanType` | `public int ClanType { get; set; }` |
| `NumOfMembers` | `public int NumOfMembers { get; set; }` |
| `NumOfFiefs` | `public int NumOfFiefs { get; set; }` |
| `TierText` | `public string TierText { get; set; }` |
| `Banner` | `public BannerImageIdentifierVM Banner { get; set; }` |
| `Banner_9` | `public BannerImageIdentifierVM Banner_9 { get; set; }` |
| `Members` | `public MBBindingList<HeroVM> Members { get; set; }` |
| `Fiefs` | `public MBBindingList<KingdomClanFiefItemVM> Fiefs { get; set; }` |
| `Influence` | `public int Influence { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### Refresh

```csharp
public void Refresh()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)