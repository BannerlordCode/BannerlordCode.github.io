<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncyclopediaSettlementPageStatItemVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EncyclopediaSettlementPageStatItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaSettlementPageStatItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/EncyclopediaSettlementPageStatItemVM.cs`

## Overview

`EncyclopediaSettlementPageStatItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `BasicTooltipViewModel` | `public BasicTooltipViewModel BasicTooltipViewModel { get; set; }` |
| `TypeString` | `public string TypeString { get; set; }` |
| `StatText` | `public string StatText { get; set; }` |

## Usage Example

```csharp
var value = new EncyclopediaSettlementPageStatItemVM();
```

## See Also

- [Complete Class Catalog](../catalog)