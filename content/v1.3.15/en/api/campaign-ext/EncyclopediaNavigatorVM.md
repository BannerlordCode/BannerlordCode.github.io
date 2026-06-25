---
title: "EncyclopediaNavigatorVM"
description: "Auto-generated class reference for EncyclopediaNavigatorVM."
---
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

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of EncyclopediaNavigatorVM from the subsystem API first
EncyclopediaNavigatorVM encyclopediaNavigatorVM = ...;
encyclopediaNavigatorVM.OnFinalize();
```

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of EncyclopediaNavigatorVM from the subsystem API first
EncyclopediaNavigatorVM encyclopediaNavigatorVM = ...;
encyclopediaNavigatorVM.RefreshValues();
```

### ExecuteHome
`public void ExecuteHome()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with home.

```csharp
// Obtain an instance of EncyclopediaNavigatorVM from the subsystem API first
EncyclopediaNavigatorVM encyclopediaNavigatorVM = ...;
encyclopediaNavigatorVM.ExecuteHome();
```

### ExecuteBarLink
`public void ExecuteBarLink(string targetID)`

**Purpose:** **Purpose:** Runs the operation or workflow associated with bar link.

```csharp
// Obtain an instance of EncyclopediaNavigatorVM from the subsystem API first
EncyclopediaNavigatorVM encyclopediaNavigatorVM = ...;
encyclopediaNavigatorVM.ExecuteBarLink("example");
```

### ExecuteCloseEncyclopedia
`public void ExecuteCloseEncyclopedia()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with close encyclopedia.

```csharp
// Obtain an instance of EncyclopediaNavigatorVM from the subsystem API first
EncyclopediaNavigatorVM encyclopediaNavigatorVM = ...;
encyclopediaNavigatorVM.ExecuteCloseEncyclopedia();
```

### ResetHistory
`public void ResetHistory()`

**Purpose:** **Purpose:** Returns history to its default or initial condition.

```csharp
// Obtain an instance of EncyclopediaNavigatorVM from the subsystem API first
EncyclopediaNavigatorVM encyclopediaNavigatorVM = ...;
encyclopediaNavigatorVM.ResetHistory();
```

### ExecuteBack
`public void ExecuteBack()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with back.

```csharp
// Obtain an instance of EncyclopediaNavigatorVM from the subsystem API first
EncyclopediaNavigatorVM encyclopediaNavigatorVM = ...;
encyclopediaNavigatorVM.ExecuteBack();
```

### ExecuteForward
`public void ExecuteForward()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with forward.

```csharp
// Obtain an instance of EncyclopediaNavigatorVM from the subsystem API first
EncyclopediaNavigatorVM encyclopediaNavigatorVM = ...;
encyclopediaNavigatorVM.ExecuteForward();
```

### GetLastPage
`public Tuple<string, object> GetLastPage()`

**Purpose:** **Purpose:** Reads and returns the last page value held by the this instance.

```csharp
// Obtain an instance of EncyclopediaNavigatorVM from the subsystem API first
EncyclopediaNavigatorVM encyclopediaNavigatorVM = ...;
var result = encyclopediaNavigatorVM.GetLastPage();
```

### AddHistory
`public void AddHistory(string pageId, object obj)`

**Purpose:** **Purpose:** Adds history to the current collection or state.

```csharp
// Obtain an instance of EncyclopediaNavigatorVM from the subsystem API first
EncyclopediaNavigatorVM encyclopediaNavigatorVM = ...;
encyclopediaNavigatorVM.AddHistory("example", obj);
```

### UpdatePageName
`public void UpdatePageName(string value)`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of page name.

```csharp
// Obtain an instance of EncyclopediaNavigatorVM from the subsystem API first
EncyclopediaNavigatorVM encyclopediaNavigatorVM = ...;
encyclopediaNavigatorVM.UpdatePageName("example");
```

### ResetSearch
`public void ResetSearch()`

**Purpose:** **Purpose:** Returns search to its default or initial condition.

```csharp
// Obtain an instance of EncyclopediaNavigatorVM from the subsystem API first
EncyclopediaNavigatorVM encyclopediaNavigatorVM = ...;
encyclopediaNavigatorVM.ResetSearch();
```

### ExecuteOnSearchActivated
`public void ExecuteOnSearchActivated()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with on search activated.

```csharp
// Obtain an instance of EncyclopediaNavigatorVM from the subsystem API first
EncyclopediaNavigatorVM encyclopediaNavigatorVM = ...;
encyclopediaNavigatorVM.ExecuteOnSearchActivated();
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotkey)`

**Purpose:** **Purpose:** Assigns a new value to cancel input key and updates the object's internal state.

```csharp
// Obtain an instance of EncyclopediaNavigatorVM from the subsystem API first
EncyclopediaNavigatorVM encyclopediaNavigatorVM = ...;
encyclopediaNavigatorVM.SetCancelInputKey(hotkey);
```

### SetPreviousPageInputKey
`public void SetPreviousPageInputKey(HotKey hotkey)`

**Purpose:** **Purpose:** Assigns a new value to previous page input key and updates the object's internal state.

```csharp
// Obtain an instance of EncyclopediaNavigatorVM from the subsystem API first
EncyclopediaNavigatorVM encyclopediaNavigatorVM = ...;
encyclopediaNavigatorVM.SetPreviousPageInputKey(hotkey);
```

### SetNextPageInputKey
`public void SetNextPageInputKey(HotKey hotkey)`

**Purpose:** **Purpose:** Assigns a new value to next page input key and updates the object's internal state.

```csharp
// Obtain an instance of EncyclopediaNavigatorVM from the subsystem API first
EncyclopediaNavigatorVM encyclopediaNavigatorVM = ...;
encyclopediaNavigatorVM.SetNextPageInputKey(hotkey);
```

### Compare
`public int Compare(EncyclopediaSearchResultVM x, EncyclopediaSearchResultVM y)`

**Purpose:** **Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of EncyclopediaNavigatorVM from the subsystem API first
EncyclopediaNavigatorVM encyclopediaNavigatorVM = ...;
var result = encyclopediaNavigatorVM.Compare(x, y);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EncyclopediaNavigatorVM encyclopediaNavigatorVM = ...;
encyclopediaNavigatorVM.OnFinalize();
```

## See Also

- [Area Index](../)