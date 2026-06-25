---
title: "HeroViewModel"
description: "Auto-generated class reference for HeroViewModel."
---
# HeroViewModel

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class HeroViewModel : CharacterViewModel`
**Base:** `CharacterViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection/HeroViewModel.cs`

## Overview

`HeroViewModel` is a Gauntlet ViewModel — the data-binding bridge between C# logic and UI. Mods typically use it to expose state, commands, and list items to the screen.

## Mental Model

Treat `HeroViewModel` as a ViewModel-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsDead` | `public bool IsDead { get; set; }` |

## Key Methods

### SetEquipment
`public override void SetEquipment(Equipment equipment)`

**Purpose:** Assigns a new value to `equipment` and updates the object's internal state.

```csharp
// Obtain an instance of HeroViewModel from the subsystem API first
HeroViewModel heroViewModel = ...;
heroViewModel.SetEquipment(equipment);
```

### FillFrom
`public void FillFrom(Hero hero, int seed = -1, bool useCivilian = false, bool useCharacteristicIdleAction = false)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of HeroViewModel from the subsystem API first
HeroViewModel heroViewModel = ...;
heroViewModel.FillFrom(hero, 0, false, false);
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Obtain an instance of HeroViewModel from the subsystem API first
HeroViewModel heroViewModel = ...;
heroViewModel.OnFinalize();
```

## Usage Example

```csharp
// Bind the instance as the view-model of a movie or view
HeroViewModel vm = ...;
movie.SetViewModel(vm);
```

## See Also

- [Area Index](../)