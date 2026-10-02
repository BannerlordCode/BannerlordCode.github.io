---
title: "SandboxApplyWeatherEffectsModel"
description: "SandboxApplyWeatherEffectsModel — class in SandBox.GameComponents. 1 public member (0 static)."
---

<!-- v147-skeleton -->
# SandboxApplyWeatherEffectsModel

**Namespace:** `SandBox.GameComponents`  
**Module:** `SandBox`  
**Type:** `public class SandboxApplyWeatherEffectsModel : ApplyWeatherEffectsModel`  
**Base:** `ApplyWeatherEffectsModel`  
**Source:** `SandBox/GameComponents/SandboxApplyWeatherEffectsModel.cs`

## Overview

`SandboxApplyWeatherEffectsModel` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

It extends ApplyWeatherEffectsModel, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Instance members** (1): `ApplyWeatherEffects`.
- **Extension points** (1): `ApplyWeatherEffects`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `ApplyWeatherEffects` | method (override) | Overrides the base member. Takes no arguments. Write path: where the engine offers a matching Action or owner method, prefer that instead. |

## Usage Example

```csharp
SandboxApplyWeatherEffectsModel.ApplyWeatherEffects();
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox/GameComponents/SandboxApplyWeatherEffectsModel.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ApplyWeatherEffectsModel](../../mission-ext/ApplyWeatherEffectsModel/) — `TaleWorlds.MountAndBlade.ComponentInterfaces`.

Section: [api/sandbox/](../) — the other types in this bucket.
