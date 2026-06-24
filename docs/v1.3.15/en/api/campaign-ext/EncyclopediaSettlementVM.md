<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncyclopediaSettlementVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EncyclopediaSettlementVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaSettlementVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Items/EncyclopediaSettlementVM.cs`

## Overview

`EncyclopediaSettlementVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `FileName` | `public string FileName { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### ExecuteLink
`public void ExecuteLink()`

**Purpose:** Executes the `link` operation or workflow.

### ExecuteEndHint
`public void ExecuteEndHint()`

**Purpose:** Executes the `end hint` operation or workflow.

### ExecuteBeginHint
`public void ExecuteBeginHint()`

**Purpose:** Executes the `begin hint` operation or workflow.

## Usage Example

```csharp
var value = new EncyclopediaSettlementVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)