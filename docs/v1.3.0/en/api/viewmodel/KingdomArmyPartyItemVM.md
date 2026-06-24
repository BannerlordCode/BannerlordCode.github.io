<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `KingdomArmyPartyItemVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# KingdomArmyPartyItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomArmyPartyItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Armies/KingdomArmyPartyItemVM.cs`

## Overview

`KingdomArmyPartyItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Visual` | `public CharacterImageIdentifierVM Visual { get; set; }` |
| `Name` | `public string Name { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### ExecuteLink
`public void ExecuteLink()`

**Purpose:** Executes the `link` operation or workflow.

## Usage Example

```csharp
var value = new KingdomArmyPartyItemVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)