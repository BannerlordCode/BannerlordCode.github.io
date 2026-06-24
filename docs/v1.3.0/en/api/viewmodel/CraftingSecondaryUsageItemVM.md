<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CraftingSecondaryUsageItemVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CraftingSecondaryUsageItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CraftingSecondaryUsageItemVM : SelectorItemVM`
**Base:** `SelectorItemVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/CraftingSecondaryUsageItemVM.cs`

## Overview

`CraftingSecondaryUsageItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `UsageIndex` | `public int UsageIndex { get; }` |
| `SelectorIndex` | `public int SelectorIndex { get; }` |

## Key Methods

### ExecuteSelect
`public void ExecuteSelect()`

**Purpose:** Executes the `select` operation or workflow.

## Usage Example

```csharp
var value = new CraftingSecondaryUsageItemVM();
value.ExecuteSelect();
```

## See Also

- [Complete Class Catalog](../catalog)