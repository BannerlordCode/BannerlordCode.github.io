<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `KingdomClanVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# KingdomClanVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`KingdomClanVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `ClanSortController` | `public KingdomClanSortControllerVM ClanSortController { get; set; }` |
| `CurrentSelectedClan` | `public KingdomClanItemVM CurrentSelectedClan { get; set; }` |
| `ExpelActionExplanationText` | `public string ExpelActionExplanationText { get; set; }` |
| `SupportActionExplanationText` | `public string SupportActionExplanationText { get; set; }` |
| `BannerText` | `public string BannerText { get; set; }` |
| `TypeText` | `public string TypeText { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `InfluenceText` | `public string InfluenceText { get; set; }` |
| `FiefsText` | `public string FiefsText { get; set; }` |
| `MembersText` | `public string MembersText { get; set; }` |
| `Clans` | `public MBBindingList<KingdomClanItemVM> Clans { get; set; }` |
| `CanSupportCurrentClan` | `public bool CanSupportCurrentClan { get; set; }` |
| `CanExpelCurrentClan` | `public bool CanExpelCurrentClan { get; set; }` |
| `SupportText` | `public string SupportText { get; set; }` |
| `ExpelActionText` | `public string ExpelActionText { get; set; }` |
| `SupportCost` | `public int SupportCost { get; set; }` |
| `ExpelCost` | `public int ExpelCost { get; set; }` |
| `ExpelHint` | `public HintViewModel ExpelHint { get; set; }` |
| `SupportHint` | `public HintViewModel SupportHint { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### RefreshClan

```csharp
public void RefreshClan()
```

### SelectClan

```csharp
public void SelectClan(Clan clan)
```

### OnFinalize

```csharp
public override void OnFinalize()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)