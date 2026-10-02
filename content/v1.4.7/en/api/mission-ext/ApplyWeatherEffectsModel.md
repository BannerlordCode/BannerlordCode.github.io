---
title: "ApplyWeatherEffectsModel"
description: "ApplyWeatherEffectsModel — class in TaleWorlds.MountAndBlade.ComponentInterfaces. 1 public member (0 static)."
---

<!-- v147-skeleton -->
# ApplyWeatherEffectsModel

**Namespace:** `TaleWorlds.MountAndBlade.ComponentInterfaces`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public abstract class ApplyWeatherEffectsModel : MBGameModel<ApplyWeatherEffectsModel>`  
**Base:** `MBGameModel`  
**Source:** `TaleWorlds.MountAndBlade/ComponentInterfaces/ApplyWeatherEffectsModel.cs`

## Overview

`ApplyWeatherEffectsModel` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

It extends MBGameModel, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Instance members** (1): `ApplyWeatherEffects`.
- **Extension points** (1): `ApplyWeatherEffects`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `ApplyWeatherEffects` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. Write path: where the engine offers a matching Action or owner method, prefer that instead. |

## Usage Example

```csharp
ApplyWeatherEffectsModel.ApplyWeatherEffects();
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade/ComponentInterfaces/ApplyWeatherEffectsModel.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/mission-ext/](../) — the other types in this bucket.
