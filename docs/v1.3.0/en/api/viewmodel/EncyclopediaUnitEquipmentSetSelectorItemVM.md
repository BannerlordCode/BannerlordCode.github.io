<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncyclopediaUnitEquipmentSetSelectorItemVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EncyclopediaUnitEquipmentSetSelectorItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaUnitEquipmentSetSelectorItemVM : SelectorItemVM`
**Base:** `SelectorItemVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Items/EncyclopediaUnitEquipmentSetSelectorItemVM.cs`

## Overview

`EncyclopediaUnitEquipmentSetSelectorItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `EquipmentSet` | `public Equipment EquipmentSet { get; }` |
| `LeftEquipmentList` | `public MBBindingList<CharacterEquipmentItemVM> LeftEquipmentList { get; set; }` |
| `RightEquipmentList` | `public MBBindingList<CharacterEquipmentItemVM> RightEquipmentList { get; set; }` |

## Usage Example

```csharp
var example = new EncyclopediaUnitEquipmentSetSelectorItemVM();
```

## See Also

- [Complete Class Catalog](../catalog)