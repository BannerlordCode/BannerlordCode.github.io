---
title: "EncyclopediaNavigatorVM"
description: "EncyclopediaNavigatorVM 的自动生成类参考。"
---
# EncyclopediaNavigatorVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaNavigatorVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia/EncyclopediaNavigatorVM.cs`

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

**用途 / Purpose:** **用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 EncyclopediaNavigatorVM 实例
EncyclopediaNavigatorVM encyclopediaNavigatorVM = ...;
var result = encyclopediaNavigatorVM.Compare(x, y);
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** **用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 EncyclopediaNavigatorVM 实例
EncyclopediaNavigatorVM encyclopediaNavigatorVM = ...;
encyclopediaNavigatorVM.OnFinalize();
```

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 EncyclopediaNavigatorVM 实例
EncyclopediaNavigatorVM encyclopediaNavigatorVM = ...;
encyclopediaNavigatorVM.RefreshValues();
```

### ExecuteHome
`public void ExecuteHome()`

**用途 / Purpose:** **用途 / Purpose:** 执行 home 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 EncyclopediaNavigatorVM 实例
EncyclopediaNavigatorVM encyclopediaNavigatorVM = ...;
encyclopediaNavigatorVM.ExecuteHome();
```

### ExecuteBarLink
`public void ExecuteBarLink(string targetID)`

**用途 / Purpose:** **用途 / Purpose:** 执行 bar link 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 EncyclopediaNavigatorVM 实例
EncyclopediaNavigatorVM encyclopediaNavigatorVM = ...;
encyclopediaNavigatorVM.ExecuteBarLink("example");
```

### ExecuteCloseEncyclopedia
`public void ExecuteCloseEncyclopedia()`

**用途 / Purpose:** **用途 / Purpose:** 执行 close encyclopedia 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 EncyclopediaNavigatorVM 实例
EncyclopediaNavigatorVM encyclopediaNavigatorVM = ...;
encyclopediaNavigatorVM.ExecuteCloseEncyclopedia();
```

### ResetHistory
`public void ResetHistory()`

**用途 / Purpose:** **用途 / Purpose:** 将 history 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 EncyclopediaNavigatorVM 实例
EncyclopediaNavigatorVM encyclopediaNavigatorVM = ...;
encyclopediaNavigatorVM.ResetHistory();
```

### ExecuteBack
`public void ExecuteBack()`

**用途 / Purpose:** **用途 / Purpose:** 执行 back 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 EncyclopediaNavigatorVM 实例
EncyclopediaNavigatorVM encyclopediaNavigatorVM = ...;
encyclopediaNavigatorVM.ExecuteBack();
```

### ExecuteForward
`public void ExecuteForward()`

**用途 / Purpose:** **用途 / Purpose:** 执行 forward 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 EncyclopediaNavigatorVM 实例
EncyclopediaNavigatorVM encyclopediaNavigatorVM = ...;
encyclopediaNavigatorVM.ExecuteForward();
```

### GetLastPage
`public Tuple<string, object> GetLastPage()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 last page 的结果。

```csharp
// 先通过子系统 API 拿到 EncyclopediaNavigatorVM 实例
EncyclopediaNavigatorVM encyclopediaNavigatorVM = ...;
var result = encyclopediaNavigatorVM.GetLastPage();
```

### AddHistory
`public void AddHistory(string pageId, object obj)`

**用途 / Purpose:** **用途 / Purpose:** 将 history 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 EncyclopediaNavigatorVM 实例
EncyclopediaNavigatorVM encyclopediaNavigatorVM = ...;
encyclopediaNavigatorVM.AddHistory("example", obj);
```

### UpdatePageName
`public void UpdatePageName(string value)`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 page name 的最新表示。

```csharp
// 先通过子系统 API 拿到 EncyclopediaNavigatorVM 实例
EncyclopediaNavigatorVM encyclopediaNavigatorVM = ...;
encyclopediaNavigatorVM.UpdatePageName("example");
```

### ResetSearch
`public void ResetSearch()`

**用途 / Purpose:** **用途 / Purpose:** 将 search 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 EncyclopediaNavigatorVM 实例
EncyclopediaNavigatorVM encyclopediaNavigatorVM = ...;
encyclopediaNavigatorVM.ResetSearch();
```

### ExecuteOnSearchActivated
`public void ExecuteOnSearchActivated()`

**用途 / Purpose:** **用途 / Purpose:** 执行 on search activated 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 EncyclopediaNavigatorVM 实例
EncyclopediaNavigatorVM encyclopediaNavigatorVM = ...;
encyclopediaNavigatorVM.ExecuteOnSearchActivated();
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotkey)`

**用途 / Purpose:** **用途 / Purpose:** 为 cancel input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 EncyclopediaNavigatorVM 实例
EncyclopediaNavigatorVM encyclopediaNavigatorVM = ...;
encyclopediaNavigatorVM.SetCancelInputKey(hotkey);
```

### SetPreviousPageInputKey
`public void SetPreviousPageInputKey(HotKey hotkey)`

**用途 / Purpose:** **用途 / Purpose:** 为 previous page input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 EncyclopediaNavigatorVM 实例
EncyclopediaNavigatorVM encyclopediaNavigatorVM = ...;
encyclopediaNavigatorVM.SetPreviousPageInputKey(hotkey);
```

### SetNextPageInputKey
`public void SetNextPageInputKey(HotKey hotkey)`

**用途 / Purpose:** **用途 / Purpose:** 为 next page input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 EncyclopediaNavigatorVM 实例
EncyclopediaNavigatorVM encyclopediaNavigatorVM = ...;
encyclopediaNavigatorVM.SetNextPageInputKey(hotkey);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
EncyclopediaNavigatorVM encyclopediaNavigatorVM = ...;
encyclopediaNavigatorVM.Compare(x, y);
```

## 参见

- [本区域目录](../)