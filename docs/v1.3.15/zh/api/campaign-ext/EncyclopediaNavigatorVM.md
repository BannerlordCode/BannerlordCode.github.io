<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EncyclopediaNavigatorVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EncyclopediaNavigatorVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`EncyclopediaNavigatorVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `LastActivePage` | `public Tuple<string, object> LastActivePage { get; }` |
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
| `SearchText` | `public string SearchText { get; set; }` |


## 主要方法

### OnFinalize

```csharp
public override void OnFinalize()
```

### RefreshValues

```csharp
public override void RefreshValues()
```

### ExecuteHome

```csharp
public void ExecuteHome()
```

### ExecuteBarLink

```csharp
public void ExecuteBarLink(string targetID)
```

### ExecuteCloseEncyclopedia

```csharp
public void ExecuteCloseEncyclopedia()
```

### ResetHistory

```csharp
public void ResetHistory()
```

### ExecuteBack

```csharp
public void ExecuteBack()
```

### ExecuteForward

```csharp
public void ExecuteForward()
```

### GetLastPage

```csharp
public Tuple<string, object> GetLastPage()
```

### AddHistory

```csharp
public void AddHistory(string pageId, object obj)
```

### UpdatePageName

```csharp
public void UpdatePageName(string value)
```

### ResetSearch

```csharp
public void ResetSearch()
```

### ExecuteOnSearchActivated

```csharp
public void ExecuteOnSearchActivated()
```

### SetCancelInputKey

```csharp
public void SetCancelInputKey(HotKey hotkey)
```

### SetPreviousPageInputKey

```csharp
public void SetPreviousPageInputKey(HotKey hotkey)
```

### SetNextPageInputKey

```csharp
public void SetNextPageInputKey(HotKey hotkey)
```

### Compare

```csharp
public int Compare(EncyclopediaSearchResultVM x, EncyclopediaSearchResultVM y)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)