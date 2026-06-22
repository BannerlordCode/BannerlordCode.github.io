<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DecisionOptionVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DecisionOptionVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`DecisionOptionVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Option` | `public DecisionOutcome Option { get; }` |
| `Decision` | `public KingdomDecision Decision { get; }` |
| `OptionHint` | `public HintViewModel OptionHint { get; set; }` |
| `SupportersOfThisOption` | `public MBBindingList<DecisionSupporterVM> SupportersOfThisOption { get; set; }` |
| `Sponsor` | `public HeroVM Sponsor { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `SponsorWeightImagePath` | `public string SponsorWeightImagePath { get; set; }` |
| `CanBeChosen` | `public bool CanBeChosen { get; set; }` |
| `IsKingsOutcome` | `public bool IsKingsOutcome { get; set; }` |
| `IsPlayerSupporter` | `public bool IsPlayerSupporter { get; set; }` |
| `IsHighlightEnabled` | `public bool IsHighlightEnabled { get; set; }` |
| `WinPercentage` | `public int WinPercentage { get; set; }` |
| `WinPercentageStr` | `public string WinPercentageStr { get; set; }` |
| `Description` | `public string Description { get; set; }` |
| `InitialPercentage` | `public int InitialPercentage { get; set; }` |
| `InfluenceCost` | `public int InfluenceCost { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `IsOptionForAbstain` | `public bool IsOptionForAbstain { get; set; }` |
| `CurrentSupportWeight` | `public Supporter.SupportWeights CurrentSupportWeight { get; set; }` |
| `CurrentSupportWeightIndex` | `public int CurrentSupportWeightIndex { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### AfterKingChooseOutcome

```csharp
public void AfterKingChooseOutcome()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)