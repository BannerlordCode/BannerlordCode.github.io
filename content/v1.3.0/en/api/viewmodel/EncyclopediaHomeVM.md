---
title: "EncyclopediaHomeVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncyclopediaHomeVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EncyclopediaHomeVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaHomeVM : EncyclopediaPageVM`
**Base:** `EncyclopediaPageVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/EncyclopediaHomeVM.cs`

## Overview

`EncyclopediaHomeVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsListActive` | `public bool IsListActive { get; set; }` |
| `HomeTitleText` | `public string HomeTitleText { get; set; }` |
| `Lists` | `public MBBindingList<ListTypeVM> Lists { get; set; }` |

## Key Methods

### Refresh
`public override void Refresh()`

**Purpose:** Refreshes the display or cache of `refresh`.

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### GetNavigationBarURL
`public override string GetNavigationBarURL()`

**Purpose:** Gets the current value of `navigation bar u r l`.

### GetName
`public override string GetName()`

**Purpose:** Gets the current value of `name`.

## Usage Example

```csharp
var value = new EncyclopediaHomeVM();
value.Refresh();
```

## See Also

- [Complete Class Catalog](../catalog)