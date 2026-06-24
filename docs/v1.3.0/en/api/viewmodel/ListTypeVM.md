<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ListTypeVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ListTypeVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ListTypeVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/ListTypeVM.cs`

## Overview

`ListTypeVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ID` | `public string ID { get; set; }` |
| `Order` | `public int Order { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `ImageID` | `public string ImageID { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### Execute
`public void Execute()`

**Purpose:** Executes the `execute` operation or workflow.

## Usage Example

```csharp
var value = new ListTypeVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)