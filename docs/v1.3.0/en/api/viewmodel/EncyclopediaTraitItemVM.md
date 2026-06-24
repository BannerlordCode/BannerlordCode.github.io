<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncyclopediaTraitItemVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EncyclopediaTraitItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaTraitItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Items/EncyclopediaTraitItemVM.cs`

## Overview

`EncyclopediaTraitItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TraitId` | `public string TraitId { get; set; }` |
| `Hint` | `public HintViewModel Hint { get; set; }` |
| `Value` | `public int Value { get; set; }` |

## Usage Example

```csharp
var example = new EncyclopediaTraitItemVM();
```

## See Also

- [Complete Class Catalog](../catalog)