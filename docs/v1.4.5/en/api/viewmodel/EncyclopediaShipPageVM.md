<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncyclopediaShipPageVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EncyclopediaShipPageVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaShipPageVM : EncyclopediaContentPageVM`
**Base:** `EncyclopediaContentPageVM`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages/EncyclopediaShipPageVM.cs`

## Overview

`EncyclopediaShipPageVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `NameText` | `public string NameText { get; set; }` |
| `AvailableUpgradesText` | `public string AvailableUpgradesText { get; set; }` |
| `DescriptionText` | `public string DescriptionText { get; set; }` |
| `PrefabId` | `public string PrefabId { get; set; }` |
| `StatsText` | `public string StatsText { get; set; }` |
| `SailType` | `public string SailType { get; set; }` |
| `SailTypeStat` | `public EncyclopediaShipStatVM SailTypeStat { get; set; }` |
| `StatList` | `public MBBindingList<EncyclopediaShipStatVM> StatList { get; set; }` |
| `AllShipSlots` | `public MBBindingList<EncyclopediaShipSlotVM> AllShipSlots { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### GetName
`public override string GetName()`

**Purpose:** Gets the current value of `name`.

### GetNavigationBarURL
`public override string GetNavigationBarURL()`

**Purpose:** Gets the current value of `navigation bar u r l`.

### ExecuteLink
`public void ExecuteLink(string link)`

**Purpose:** Executes the `link` operation or workflow.

### ExecuteSwitchBookmarkedState
`public override void ExecuteSwitchBookmarkedState()`

**Purpose:** Executes the `switch bookmarked state` operation or workflow.

## Usage Example

```csharp
var value = new EncyclopediaShipPageVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)