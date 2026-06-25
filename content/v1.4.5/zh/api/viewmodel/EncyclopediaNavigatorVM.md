---
title: "EncyclopediaNavigatorVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EncyclopediaNavigatorVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# EncyclopediaNavigatorVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaNavigatorVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia/EncyclopediaNavigatorVM.cs`

## 概述

`EncyclopediaNavigatorVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `SearchText` | `public string SearchText { get; set; }` |
| `LastActivePage` | `public Tuple<string, object> LastActivePage { get; set; }` |
| `CanSwitchTabs` | `public bool CanSwitchTabs { get; set; }` |
| `IsBackEnabled` | `public bool IsBackEnabled { get; set; }` |
| `IsForwardEnabled` | `public bool IsForwardEnabled { get; set; }` |
| `IsHighlightEnabled` | `public bool IsHighlightEnabled { get; set; }` |
| `IsSearchResultsShown` | `public bool IsSearchResultsShown { get; set; }` |
| `NavBarString` | `public string NavBarString { get; set; }` |
| `PageName` | `public string PageName { get; set; }` |
| `DoneText` | `public string DoneText { get; set; }` |
| `LeaderText` | `public string LeaderText { get; set; }` |
| `SearchResults` | `public MBBindingList<EncyclopediaSearchResultVM> SearchResults { get; set; }` |
| `SearchText` | `public string SearchText { get; set; }` |
| `MinCharAmountToShowResults` | `public int MinCharAmountToShowResults { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `PreviousPageInputKey` | `public InputKeyItemVM PreviousPageInputKey { get; set; }` |
| `NextPageInputKey` | `public InputKeyItemVM NextPageInputKey { get; set; }` |

## 主要方法

### Compare
`public int Compare(EncyclopediaSearchResultVM x, EncyclopediaSearchResultVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### ExecuteHome
`public void ExecuteHome()`

**用途 / Purpose:** 执行 `home` 操作或流程。

### ExecuteBarLink
`public void ExecuteBarLink(string targetID)`

**用途 / Purpose:** 执行 `bar link` 操作或流程。

### ExecuteCloseEncyclopedia
`public void ExecuteCloseEncyclopedia()`

**用途 / Purpose:** 执行 `close encyclopedia` 操作或流程。

### ResetHistory
`public void ResetHistory()`

**用途 / Purpose:** 将 `history` 重置为初始状态。

### ExecuteBack
`public void ExecuteBack()`

**用途 / Purpose:** 执行 `back` 操作或流程。

### ExecuteForward
`public void ExecuteForward()`

**用途 / Purpose:** 执行 `forward` 操作或流程。

### GetLastPage
`public Tuple<string, object> GetLastPage()`

**用途 / Purpose:** 获取 `last page` 的当前值。

### AddHistory
`public void AddHistory(string pageId, object obj)`

**用途 / Purpose:** 向当前集合/状态中添加 `history`。

### UpdatePageName
`public void UpdatePageName(string value)`

**用途 / Purpose:** 更新 `page name` 的状态或数据。

### ResetSearch
`public void ResetSearch()`

**用途 / Purpose:** 将 `search` 重置为初始状态。

### ExecuteOnSearchActivated
`public void ExecuteOnSearchActivated()`

**用途 / Purpose:** 执行 `on search activated` 操作或流程。

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotkey)`

**用途 / Purpose:** 设置 `cancel input key` 的值或状态。

### SetPreviousPageInputKey
`public void SetPreviousPageInputKey(HotKey hotkey)`

**用途 / Purpose:** 设置 `previous page input key` 的值或状态。

### SetNextPageInputKey
`public void SetNextPageInputKey(HotKey hotkey)`

**用途 / Purpose:** 设置 `next page input key` 的值或状态。

## 使用示例

```csharp
var value = new EncyclopediaNavigatorVM();
value.Compare(x, y);
```

## 参见

- [完整类目录](../catalog)