<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `KingdomDiplomacyProposalActionItemVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# KingdomDiplomacyProposalActionItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomDiplomacyProposalActionItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomDiplomacyProposalActionItemVM.cs`

## Overview

`KingdomDiplomacyProposalActionItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; set; }` |
| `Explanation` | `public string Explanation { get; set; }` |
| `InfluenceCost` | `public int InfluenceCost { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `Hint` | `public HintViewModel Hint { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### ExecuteAction
`public void ExecuteAction()`

**Purpose:** Executes the `action` operation or workflow.

## Usage Example

```csharp
var value = new KingdomDiplomacyProposalActionItemVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)