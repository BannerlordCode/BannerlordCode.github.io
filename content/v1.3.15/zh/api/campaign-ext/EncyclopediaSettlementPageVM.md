---
title: "EncyclopediaSettlementPageVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EncyclopediaSettlementPageVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EncyclopediaSettlementPageVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaSettlementPageVM : EncyclopediaContentPageVM`
**Base:** `EncyclopediaContentPageVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaSettlementPageVM.cs`

## 概述

`EncyclopediaSettlementPageVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `OwnerBanner` | `public EncyclopediaFactionVM OwnerBanner { get; set; }` |
| `BoundSettlement` | `public EncyclopediaSettlementVM BoundSettlement { get; set; }` |
| `IsFortification` | `public bool IsFortification { get; set; }` |
| `IsTrackerButtonHighlightEnabled` | `public bool IsTrackerButtonHighlightEnabled { get; set; }` |
| `HasBoundSettlement` | `public bool HasBoundSettlement { get; set; }` |
| `SettlementCropPosition` | `public double SettlementCropPosition { get; set; }` |
| `BoundSettlementText` | `public string BoundSettlementText { get; set; }` |
| `TrackText` | `public string TrackText { get; set; }` |
| `SettlementPath` | `public string SettlementPath { get; set; }` |
| `SettlementName` | `public string SettlementName { get; set; }` |
| `InformationText` | `public string InformationText { get; set; }` |
| `Owner` | `public HeroVM Owner { get; set; }` |
| `SettlementsText` | `public string SettlementsText { get; set; }` |
| `SettlementImageID` | `public string SettlementImageID { get; set; }` |
| `NotableCharactersText` | `public string NotableCharactersText { get; set; }` |
| `SettlementType` | `public int SettlementType { get; set; }` |
| `History` | `public MBBindingList<EncyclopediaHistoryEventVM> History { get; set; }` |
| `Settlements` | `public MBBindingList<EncyclopediaSettlementVM> Settlements { get; set; }` |
| `NotableCharacters` | `public MBBindingList<HeroVM> NotableCharacters { get; set; }` |
| `ShowInMapHint` | `public HintViewModel ShowInMapHint { get; set; }` |
| `LeftSideProperties` | `public MBBindingList<EncyclopediaSettlementPageStatItemVM> LeftSideProperties { get; set; }` |
| `RightSideProperties` | `public MBBindingList<EncyclopediaSettlementPageStatItemVM> RightSideProperties { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `CultureText` | `public string CultureText { get; set; }` |
| `OwnerText` | `public string OwnerText { get; set; }` |
| `IsVisualTrackerSelected` | `public bool IsVisualTrackerSelected { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### Refresh
`public override void Refresh()`

**用途 / Purpose:** 刷新 `refresh` 的显示或缓存。

### GetName
`public override string GetName()`

**用途 / Purpose:** 获取 `name` 的当前值。

### ExecuteTrack
`public void ExecuteTrack()`

**用途 / Purpose:** 执行 `track` 操作或流程。

### GetNavigationBarURL
`public override string GetNavigationBarURL()`

**用途 / Purpose:** 获取 `navigation bar u r l` 的当前值。

### ExecuteBoundSettlementLink
`public void ExecuteBoundSettlementLink()`

**用途 / Purpose:** 执行 `bound settlement link` 操作或流程。

### ExecuteSwitchBookmarkedState
`public override void ExecuteSwitchBookmarkedState()`

**用途 / Purpose:** 执行 `switch bookmarked state` 操作或流程。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new EncyclopediaSettlementPageVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)