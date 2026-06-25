---
title: "PartyTroopManagerItemVM"
description: "Auto-generated class reference for PartyTroopManagerItemVM."
---
# PartyTroopManagerItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PartyTroopManagerItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp/PartyTroopManagerItemVM.cs`

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

**Purpose:** Runs the operation or workflow associated with `set focused`.

```csharp
// Obtain an instance of PartyTroopManagerItemVM from the subsystem API first
PartyTroopManagerItemVM partyTroopManagerItemVM = ...;
partyTroopManagerItemVM.ExecuteSetFocused();
```

### ExecuteSetUnfocused
`public void ExecuteSetUnfocused()`

**Purpose:** Runs the operation or workflow associated with `set unfocused`.

```csharp
// Obtain an instance of PartyTroopManagerItemVM from the subsystem API first
PartyTroopManagerItemVM partyTroopManagerItemVM = ...;
partyTroopManagerItemVM.ExecuteSetUnfocused();
```

### ExecuteOpenTroopEncyclopedia
`public void ExecuteOpenTroopEncyclopedia()`

**Purpose:** Runs the operation or workflow associated with `open troop encyclopedia`.

```csharp
// Obtain an instance of PartyTroopManagerItemVM from the subsystem API first
PartyTroopManagerItemVM partyTroopManagerItemVM = ...;
partyTroopManagerItemVM.ExecuteOpenTroopEncyclopedia();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PartyTroopManagerItemVM partyTroopManagerItemVM = ...;
partyTroopManagerItemVM.ExecuteSetFocused();
```

## See Also

- [Area Index](../)