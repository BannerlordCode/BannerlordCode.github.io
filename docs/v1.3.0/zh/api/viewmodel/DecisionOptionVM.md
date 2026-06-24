<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DecisionOptionVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DecisionOptionVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DecisionOptionVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/DecisionOptionVM.cs`

## 概述

`DecisionOptionVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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
| `SupportOption1Text` | `public string SupportOption1Text { get; set; }` |
| `SupportOption2Text` | `public string SupportOption2Text { get; set; }` |
| `SupportOption3Text` | `public string SupportOption3Text { get; set; }` |
| `IsSupportOption1Enabled` | `public bool IsSupportOption1Enabled { get; set; }` |
| `IsSupportOption2Enabled` | `public bool IsSupportOption2Enabled { get; set; }` |
| `IsSupportOption3Enabled` | `public bool IsSupportOption3Enabled { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### AfterKingChooseOutcome
`public void AfterKingChooseOutcome()`

**用途 / Purpose:** 处理 `after king choose outcome` 相关逻辑。

## 使用示例

```csharp
var value = new DecisionOptionVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)