---
title: "EncyclopediaUnitPageVM"
description: "Auto-generated class reference for EncyclopediaUnitPageVM."
---
# EncyclopediaUnitPageVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaUnitPageVM : EncyclopediaContentPageVM`
**Base:** `EncyclopediaContentPageVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaUnitPageVM.cs`

## Overview

`EncyclopediaUnitPageVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Skills` | `public MBBindingList<EncyclopediaSkillVM> Skills { get; set; }` |
| `PropertiesList` | `public MBBindingList<StringItemWithHintVM> PropertiesList { get; set; }` |
| `EquipmentSetSelector` | `public SelectorVM<EncyclopediaUnitEquipmentSetSelectorItemVM> EquipmentSetSelector { get; set; }` |
| `CurrentSelectedEquipmentSet` | `public EncyclopediaUnitEquipmentSetSelectorItemVM CurrentSelectedEquipmentSet { get; set; }` |
| `UnitCharacter` | `public CharacterViewModel UnitCharacter { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `DescriptionText` | `public string DescriptionText { get; set; }` |
| `Tree` | `public EncyclopediaTroopTreeNodeVM Tree { get; set; }` |
| `TreeDisplayErrorText` | `public string TreeDisplayErrorText { get; set; }` |
| `EquipmentSetText` | `public string EquipmentSetText { get; set; }` |
| `HasErrors` | `public bool HasErrors { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of EncyclopediaUnitPageVM from the subsystem API first
EncyclopediaUnitPageVM encyclopediaUnitPageVM = ...;
encyclopediaUnitPageVM.RefreshValues();
```

### GetName
`public override string GetName()`

**Purpose:** **Purpose:** Reads and returns the name value held by the this instance.

```csharp
// Obtain an instance of EncyclopediaUnitPageVM from the subsystem API first
EncyclopediaUnitPageVM encyclopediaUnitPageVM = ...;
var result = encyclopediaUnitPageVM.GetName();
```

### GetNavigationBarURL
`public override string GetNavigationBarURL()`

**Purpose:** **Purpose:** Reads and returns the navigation bar u r l value held by the this instance.

```csharp
// Obtain an instance of EncyclopediaUnitPageVM from the subsystem API first
EncyclopediaUnitPageVM encyclopediaUnitPageVM = ...;
var result = encyclopediaUnitPageVM.GetNavigationBarURL();
```

### ExecuteSwitchBookmarkedState
`public override void ExecuteSwitchBookmarkedState()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with switch bookmarked state.

```csharp
// Obtain an instance of EncyclopediaUnitPageVM from the subsystem API first
EncyclopediaUnitPageVM encyclopediaUnitPageVM = ...;
encyclopediaUnitPageVM.ExecuteSwitchBookmarkedState();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EncyclopediaUnitPageVM encyclopediaUnitPageVM = ...;
encyclopediaUnitPageVM.RefreshValues();
```

## See Also

- [Area Index](../)