---
title: "MPArmoryHeroPreviewVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPArmoryHeroPreviewVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPArmoryHeroPreviewVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPArmoryHeroPreviewVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory/MPArmoryHeroPreviewVM.cs`

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

**Purpose:** Refreshes the display or cache of `values`.

### SetCharacter
`public unsafe void SetCharacter(BasicCharacterObject character, DynamicBodyProperties dynamicBodyProperties, int race, bool isFemale)`

**Purpose:** Sets the value or state of `character`.

### SetCharacterClass
`public void SetCharacterClass(BasicCharacterObject classCharacter)`

**Purpose:** Sets the value or state of `character class`.

### SetCharacterPerks
`public void SetCharacterPerks(List<IReadOnlyPerkObject> selectedPerks)`

**Purpose:** Sets the value or state of `character perks`.

## Usage Example

```csharp
var value = new MPArmoryHeroPreviewVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)