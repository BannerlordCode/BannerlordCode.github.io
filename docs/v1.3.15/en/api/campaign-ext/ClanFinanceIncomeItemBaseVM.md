<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClanFinanceIncomeItemBaseVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClanFinanceIncomeItemBaseVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanFinanceIncomeItemBaseVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinanceIncomeItemBaseVM.cs`

## Overview

`ClanFinanceIncomeItemBaseVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IncomeTypeAsEnum` | `public IncomeTypes IncomeTypeAsEnum { get; set; }` |
| `ItemProperties` | `public MBBindingList<SelectableItemPropertyVM> ItemProperties { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `Location` | `public string Location { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `IncomeValueText` | `public string IncomeValueText { get; set; }` |
| `ImageName` | `public string ImageName { get; set; }` |
| `Income` | `public int Income { get; set; }` |
| `Visual` | `public ImageIdentifierVM Visual { get; set; }` |
| `IncomeType` | `public int IncomeType { get; set; }` |

## Key Methods

### OnIncomeSelection
`public void OnIncomeSelection()`

**Purpose:** Called when the `income selection` event is raised.

## Usage Example

```csharp
var value = new ClanFinanceIncomeItemBaseVM();
value.OnIncomeSelection();
```

## See Also

- [Complete Class Catalog](../catalog)