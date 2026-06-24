<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WeaponPropertyComparer`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# WeaponPropertyComparer

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class WeaponPropertyComparer : IComparer<CraftingListPropertyItem>`
**Base:** `IComparer<CraftingListPropertyItem>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign/WeaponDesignVM.cs`

## Overview

`WeaponPropertyComparer` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Compare
`public int Compare(CraftingListPropertyItem x, CraftingListPropertyItem y)`

**Purpose:** Handles logic related to `compare`.

## Usage Example

```csharp
var value = new WeaponPropertyComparer();
value.Compare(x, y);
```

## See Also

- [Complete Class Catalog](../catalog)