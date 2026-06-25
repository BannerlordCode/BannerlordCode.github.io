---
title: "WeaponAttributeVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WeaponAttributeVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WeaponAttributeVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class WeaponAttributeVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponAttributeVM.cs`

## Overview

`WeaponAttributeVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DamageType` | `public DamageTypes DamageType { get; }` |
| `AttributeType` | `public CraftingTemplate.CraftingStatTypes AttributeType { get; }` |
| `AttributeValue` | `public float AttributeValue { get; }` |
| `AttributeFieldText` | `public string AttributeFieldText { get; set; }` |

## Usage Example

```csharp
var value = new WeaponAttributeVM();
```

## See Also

- [Complete Class Catalog](../catalog)