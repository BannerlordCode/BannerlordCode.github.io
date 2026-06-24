<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CraftingHeroPopupVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CraftingHeroPopupVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CraftingHeroPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/CraftingHeroPopupVM.cs`

## Overview

`CraftingHeroPopupVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsVisible` | `public bool IsVisible { get; set; }` |
| `SelectHeroText` | `public string SelectHeroText { get; set; }` |
| `CraftingHeroes` | `public MBBindingList<CraftingAvailableHeroItemVM> CraftingHeroes { get; }` |
| `ExitInputKey` | `public InputKeyItemVM ExitInputKey { get; set; }` |

## Key Methods

### ExecuteOpenPopup
`public void ExecuteOpenPopup()`

**Purpose:** Executes the `open popup` operation or workflow.

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**Purpose:** Executes the `close popup` operation or workflow.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### SetExitInputKey
`public void SetExitInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `exit input key`.

## Usage Example

```csharp
var value = new CraftingHeroPopupVM();
value.ExecuteOpenPopup();
```

## See Also

- [Complete Class Catalog](../catalog)