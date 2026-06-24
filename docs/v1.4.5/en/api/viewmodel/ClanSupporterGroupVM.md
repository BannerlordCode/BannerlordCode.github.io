<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClanSupporterGroupVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ClanSupporterGroupVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Supporters
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanSupporterGroupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Supporters/ClanSupporterGroupVM.cs`

## Overview

`ClanSupporterGroupVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Supporters` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Supporters` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TitleText` | `public string TitleText { get; set; }` |
| `TotalInfluenceBonus` | `public float TotalInfluenceBonus { get; }` |
| `InfluenceBonusDescription` | `public string InfluenceBonusDescription { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `TotalInfluence` | `public string TotalInfluence { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `Supporters` | `public MBBindingList<ClanSupporterItemVM> Supporters { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### AddSupporter
`public void AddSupporter(Hero hero)`

**Purpose:** Adds `supporter` to the current collection or state.

### Refresh
`public void Refresh()`

**Purpose:** Refreshes the display or cache of `refresh`.

### ExecuteSelect
`public void ExecuteSelect()`

**Purpose:** Executes the `select` operation or workflow.

## Usage Example

```csharp
var value = new ClanSupporterGroupVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)