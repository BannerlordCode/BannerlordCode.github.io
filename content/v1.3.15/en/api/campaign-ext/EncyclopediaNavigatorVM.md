---
title: "EncyclopediaNavigatorVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncyclopediaNavigatorVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EncyclopediaNavigatorVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaNavigatorVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/EncyclopediaNavigatorVM.cs`

## Overview

`EncyclopediaNavigatorVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

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
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### ExecuteHome
`public void ExecuteHome()`

**Purpose:** Executes the `home` operation or workflow.

### ExecuteBarLink
`public void ExecuteBarLink(string targetID)`

**Purpose:** Executes the `bar link` operation or workflow.

### ExecuteCloseEncyclopedia
`public void ExecuteCloseEncyclopedia()`

**Purpose:** Executes the `close encyclopedia` operation or workflow.

### ResetHistory
`public void ResetHistory()`

**Purpose:** Resets `history` to its initial state.

### ExecuteBack
`public void ExecuteBack()`

**Purpose:** Executes the `back` operation or workflow.

### ExecuteForward
`public void ExecuteForward()`

**Purpose:** Executes the `forward` operation or workflow.

### GetLastPage
`public Tuple<string, object> GetLastPage()`

**Purpose:** Gets the current value of `last page`.

### AddHistory
`public void AddHistory(string pageId, object obj)`

**Purpose:** Adds `history` to the current collection or state.

### UpdatePageName
`public void UpdatePageName(string value)`

**Purpose:** Updates the state or data of `page name`.

### ResetSearch
`public void ResetSearch()`

**Purpose:** Resets `search` to its initial state.

### ExecuteOnSearchActivated
`public void ExecuteOnSearchActivated()`

**Purpose:** Executes the `on search activated` operation or workflow.

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotkey)`

**Purpose:** Sets the value or state of `cancel input key`.

### SetPreviousPageInputKey
`public void SetPreviousPageInputKey(HotKey hotkey)`

**Purpose:** Sets the value or state of `previous page input key`.

### SetNextPageInputKey
`public void SetNextPageInputKey(HotKey hotkey)`

**Purpose:** Sets the value or state of `next page input key`.

### Compare
`public int Compare(EncyclopediaSearchResultVM x, EncyclopediaSearchResultVM y)`

**Purpose:** Handles logic related to `compare`.

## Usage Example

```csharp
var value = new EncyclopediaNavigatorVM();
value.OnFinalize();
```

## See Also

- [Complete Class Catalog](../catalog)