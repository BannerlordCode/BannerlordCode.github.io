<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CraftingResourceItemVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CraftingResourceItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CraftingResourceItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/CraftingResourceItemVM.cs`

## Overview

`CraftingResourceItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ResourceItem` | `public ItemObject ResourceItem { get; }` |
| `ResourceMaterial` | `public CraftingMaterials ResourceMaterial { get; }` |
| `ResourceName` | `public string ResourceName { get; set; }` |
| `ResourceHint` | `public HintViewModel ResourceHint { get; set; }` |
| `ResourceMaterialTypeAsStr` | `public string ResourceMaterialTypeAsStr { get; set; }` |
| `ResourceAmount` | `public int ResourceAmount { get; set; }` |
| `ResourceChangeAmount` | `public int ResourceChangeAmount { get; set; }` |
| `ResourceItemStringId` | `public string ResourceItemStringId { get; set; }` |
| `IsResourceAvailable` | `public bool IsResourceAvailable { get; set; }` |

## Usage Example

```csharp
var value = new CraftingResourceItemVM();
```

## See Also

- [Complete Class Catalog](../catalog)