---
title: "MPArmoryHeroPreviewVM"
description: "Auto-generated class reference for MPArmoryHeroPreviewVM."
---
# MPArmoryHeroPreviewVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPArmoryHeroPreviewVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory/MPArmoryHeroPreviewVM.cs`

## Overview

`MPArmoryHeroPreviewVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `HeroVisual` | `public CharacterViewModel HeroVisual { get; set; }` |
| `ClassName` | `public string ClassName { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MPArmoryHeroPreviewVM from the subsystem API first
MPArmoryHeroPreviewVM mPArmoryHeroPreviewVM = ...;
mPArmoryHeroPreviewVM.RefreshValues();
```

### SetCharacter
`public unsafe void SetCharacter(BasicCharacterObject character, DynamicBodyProperties dynamicBodyProperties, int race, bool isFemale)`

**Purpose:** Assigns a new value to character and updates the object's internal state.

```csharp
// Obtain an instance of MPArmoryHeroPreviewVM from the subsystem API first
MPArmoryHeroPreviewVM mPArmoryHeroPreviewVM = ...;
mPArmoryHeroPreviewVM.SetCharacter(character, dynamicBodyProperties, 0, false);
```

### SetCharacterClass
`public void SetCharacterClass(BasicCharacterObject classCharacter)`

**Purpose:** Assigns a new value to character class and updates the object's internal state.

```csharp
// Obtain an instance of MPArmoryHeroPreviewVM from the subsystem API first
MPArmoryHeroPreviewVM mPArmoryHeroPreviewVM = ...;
mPArmoryHeroPreviewVM.SetCharacterClass(classCharacter);
```

### SetCharacterPerks
`public void SetCharacterPerks(List<IReadOnlyPerkObject> selectedPerks)`

**Purpose:** Assigns a new value to character perks and updates the object's internal state.

```csharp
// Obtain an instance of MPArmoryHeroPreviewVM from the subsystem API first
MPArmoryHeroPreviewVM mPArmoryHeroPreviewVM = ...;
mPArmoryHeroPreviewVM.SetCharacterPerks(selectedPerks);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPArmoryHeroPreviewVM mPArmoryHeroPreviewVM = ...;
mPArmoryHeroPreviewVM.RefreshValues();
```

## See Also

- [Area Index](../)