<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncyclopediaNavigatorVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EncyclopediaNavigatorVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `EncyclopediaNavigatorVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

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


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)