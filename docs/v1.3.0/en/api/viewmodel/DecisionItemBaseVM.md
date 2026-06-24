<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DecisionItemBaseVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DecisionItemBaseVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DecisionItemBaseVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/ItemTypes/DecisionItemBaseVM.cs`

## Overview

`DecisionItemBaseVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `KingdomDecisionMaker` | `public KingdomElection KingdomDecisionMaker { get; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `EndDecisionHint` | `public HintViewModel EndDecisionHint { get; set; }` |
| `DecisionType` | `public int DecisionType { get; set; }` |
| `TotalInfluenceText` | `public string TotalInfluenceText { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `CurrentStageIndex` | `public int CurrentStageIndex { get; set; }` |
| `IsPlayerSupporter` | `public bool IsPlayerSupporter { get; set; }` |
| `CanEndDecision` | `public bool CanEndDecision { get; set; }` |
| `IsKingsDecisionOver` | `public bool IsKingsDecisionOver { get; set; }` |
| `RelationChangeText` | `public string RelationChangeText { get; set; }` |
| `DescriptionText` | `public string DescriptionText { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `DoneText` | `public string DoneText { get; set; }` |
| `InfluenceCostText` | `public string InfluenceCostText { get; set; }` |
| `DecisionOptionsList` | `public MBBindingList<DecisionOptionVM> DecisionOptionsList { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### ExecuteFinalSelection
`public void ExecuteFinalSelection()`

**Purpose:** Executes the `final selection` operation or workflow.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### SetDoneInputKey
`public void SetDoneInputKey(InputKeyItemVM inputKeyItemVM)`

**Purpose:** Sets the value or state of `done input key`.

## Usage Example

```csharp
var value = new DecisionItemBaseVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)