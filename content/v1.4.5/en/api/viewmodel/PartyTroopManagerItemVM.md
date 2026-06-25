---
title: "PartyTroopManagerItemVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyTroopManagerItemVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PartyTroopManagerItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PartyTroopManagerItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp/PartyTroopManagerItemVM.cs`

## Overview

`PartyTroopManagerItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SetFocused` | `public Action<PartyTroopManagerItemVM> SetFocused { get; }` |
| `IsFocused` | `public bool IsFocused { get; set; }` |
| `PartyCharacter` | `public PartyCharacterVM PartyCharacter { get; set; }` |
| `IsTroopUpgradable` | `public bool IsTroopUpgradable { get; set; }` |
| `IsTroopRecruitable` | `public bool IsTroopRecruitable { get; set; }` |

## Key Methods

### ExecuteSetFocused
`public void ExecuteSetFocused()`

**Purpose:** Executes the `set focused` operation or workflow.

### ExecuteSetUnfocused
`public void ExecuteSetUnfocused()`

**Purpose:** Executes the `set unfocused` operation or workflow.

### ExecuteOpenTroopEncyclopedia
`public void ExecuteOpenTroopEncyclopedia()`

**Purpose:** Executes the `open troop encyclopedia` operation or workflow.

## Usage Example

```csharp
var value = new PartyTroopManagerItemVM();
value.ExecuteSetFocused();
```

## See Also

- [Complete Class Catalog](../catalog)