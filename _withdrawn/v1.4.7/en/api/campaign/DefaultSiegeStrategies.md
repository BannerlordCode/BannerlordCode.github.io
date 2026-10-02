---
title: "DefaultSiegeStrategies"
description: "DefaultSiegeStrategies — class in TaleWorlds.CampaignSystem.Siege. 10 public members (9 static)."
---

<!-- v147-skeleton -->
# DefaultSiegeStrategies

**Namespace:** `TaleWorlds.CampaignSystem.Siege`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DefaultSiegeStrategies`  
**Source:** `TaleWorlds.CampaignSystem/Siege/DefaultSiegeStrategies.cs`

## Overview

`DefaultSiegeStrategies` is a named type in the TaleWorlds.CampaignSystem.Siege namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `DefaultSiegeStrategies`.
- **Static entry points** (9): `PreserveStrength`, `PrepareAgainstAssault`, `CounterBombardment`, `PrepareAssault`, `BreachWalls`, `WearOutDefenders`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AllAttackerStrategies` | property (static) | Static entry point `IEnumerable<SiegeStrategy>` property. Read it for current state; a declared setter writes that state in place. |
| `AllDefenderStrategies` | property (static) | Static entry point `IEnumerable<SiegeStrategy>` property. Read it for current state; a declared setter writes that state in place. |
| `BreachWalls` | property (static) | Static entry point `SiegeStrategy` property. Read it for current state; a declared setter writes that state in place. |
| `CounterBombardment` | property (static) | Static entry point `SiegeStrategy` property. Read it for current state; a declared setter writes that state in place. |
| `Custom` | property (static) | Static entry point `SiegeStrategy` property. Read it for current state; a declared setter writes that state in place. |
| `PrepareAgainstAssault` | property (static) | Static entry point `SiegeStrategy` property. Read it for current state; a declared setter writes that state in place. |
| `PrepareAssault` | property (static) | Static entry point `SiegeStrategy` property. Read it for current state; a declared setter writes that state in place. |
| `PreserveStrength` | property (static) | Static entry point `SiegeStrategy` property. Read it for current state; a declared setter writes that state in place. |
| `WearOutDefenders` | property (static) | Static entry point `SiegeStrategy` property. Read it for current state; a declared setter writes that state in place. |
| `DefaultSiegeStrategies` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public DefaultSiegeStrategies()`.

## Usage Example

```csharp
var defaultSiegeStrategies = new DefaultSiegeStrategies();
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.CampaignSystem/Siege/DefaultSiegeStrategies.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/campaign/](../) — the other types in this bucket.
