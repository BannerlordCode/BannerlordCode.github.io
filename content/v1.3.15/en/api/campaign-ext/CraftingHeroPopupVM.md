---
title: "CraftingHeroPopupVM"
description: "Auto-generated class reference for CraftingHeroPopupVM."
---
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

**Purpose:** Runs the operation or workflow associated with `open popup`.

```csharp
// Obtain an instance of CraftingHeroPopupVM from the subsystem API first
CraftingHeroPopupVM craftingHeroPopupVM = ...;
craftingHeroPopupVM.ExecuteOpenPopup();
```

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**Purpose:** Runs the operation or workflow associated with `close popup`.

```csharp
// Obtain an instance of CraftingHeroPopupVM from the subsystem API first
CraftingHeroPopupVM craftingHeroPopupVM = ...;
craftingHeroPopupVM.ExecuteClosePopup();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Obtain an instance of CraftingHeroPopupVM from the subsystem API first
CraftingHeroPopupVM craftingHeroPopupVM = ...;
craftingHeroPopupVM.OnFinalize();
```

### SetExitInputKey
`public void SetExitInputKey(HotKey hotKey)`

**Purpose:** Assigns a new value to `exit input key` and updates the object's internal state.

```csharp
// Obtain an instance of CraftingHeroPopupVM from the subsystem API first
CraftingHeroPopupVM craftingHeroPopupVM = ...;
craftingHeroPopupVM.SetExitInputKey(hotKey);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CraftingHeroPopupVM craftingHeroPopupVM = ...;
craftingHeroPopupVM.ExecuteOpenPopup();
```

## See Also

- [Area Index](../)