---
title: "WeaponDesignSelectorVM"
description: "Auto-generated class reference for WeaponDesignSelectorVM."
---
# WeaponDesignSelectorVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class WeaponDesignSelectorVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponDesignSelectorVM.cs`

## Overview

`WeaponDesignSelectorVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Design` | `public WeaponDesign Design { get; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `WeaponTypeCode` | `public string WeaponTypeCode { get; set; }` |
| `Visual` | `public ItemImageIdentifierVM Visual { get; set; }` |
| `Hint` | `public BasicTooltipViewModel Hint { get; set; }` |

## Key Methods

### ExecuteSelect
`public void ExecuteSelect()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with select.

```csharp
// Obtain an instance of WeaponDesignSelectorVM from the subsystem API first
WeaponDesignSelectorVM weaponDesignSelectorVM = ...;
weaponDesignSelectorVM.ExecuteSelect();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of WeaponDesignSelectorVM from the subsystem API first
WeaponDesignSelectorVM weaponDesignSelectorVM = ...;
weaponDesignSelectorVM.OnFinalize();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
WeaponDesignSelectorVM weaponDesignSelectorVM = ...;
weaponDesignSelectorVM.ExecuteSelect();
```

## See Also

- [Area Index](../)