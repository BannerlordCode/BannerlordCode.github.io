<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `KingdomClanVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# KingdomClanVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomClanVM : KingdomCategoryVM`
**Base:** `KingdomCategoryVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Clans/KingdomClanVM.cs`

## 概述

`KingdomClanVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### RefreshClan
`public void RefreshClan()`

**用途 / Purpose:** 刷新 `clan` 的显示或缓存。

### SelectClan
`public void SelectClan(Clan clan)`

**用途 / Purpose:** 处理 `select clan` 相关逻辑。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new KingdomClanVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)