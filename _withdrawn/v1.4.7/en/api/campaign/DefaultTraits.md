---
title: "DefaultTraits"
description: "DefaultTraits — class in TaleWorlds.CampaignSystem.CharacterDevelopment. 27 public members (25 static)."
---

<!-- v147-skeleton -->
# DefaultTraits

**Namespace:** `TaleWorlds.CampaignSystem.CharacterDevelopment`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DefaultTraits`  
**Source:** `TaleWorlds.CampaignSystem/CharacterDevelopment/DefaultTraits.cs`

## Overview

`DefaultTraits` is a named type in the TaleWorlds.CampaignSystem.CharacterDevelopment namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `DefaultTraits`.
- **Static entry points** (25): `Frequency`, `Mercy`, `Valor`, `Honor`, `Generosity`, `Calculating`, ….
- **Instance members** (1): `RegisterAll`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Authoritarian` | property (static) | Static entry point `TraitObject` property. Read it for current state; a declared setter writes that state in place. |
| `Blacksmith` | property (static) | Static entry point `TraitObject` property. Read it for current state; a declared setter writes that state in place. |
| `Calculating` | property (static) | Static entry point `TraitObject` property. Read it for current state; a declared setter writes that state in place. |
| `Commander` | property (static) | Static entry point `TraitObject` property. Read it for current state; a declared setter writes that state in place. |
| `Egalitarian` | property (static) | Static entry point `TraitObject` property. Read it for current state; a declared setter writes that state in place. |
| `Frequency` | property (static) | Static entry point `TraitObject` property. Read it for current state; a declared setter writes that state in place. |
| `Generosity` | property (static) | Static entry point `TraitObject` property. Read it for current state; a declared setter writes that state in place. |
| `Honor` | property (static) | Static entry point `TraitObject` property. Read it for current state; a declared setter writes that state in place. |
| `Mercy` | property (static) | Static entry point `TraitObject` property. Read it for current state; a declared setter writes that state in place. |
| `NavalSoldier` | property (static) | Static entry point `TraitObject` property. Read it for current state; a declared setter writes that state in place. |
| `Oligarchic` | property (static) | Static entry point `TraitObject` property. Read it for current state; a declared setter writes that state in place. |
| `PersonaCurt` | property (static) | Static entry point `TraitObject` property. Read it for current state; a declared setter writes that state in place. |
| `PersonaEarnest` | property (static) | Static entry point `TraitObject` property. Read it for current state; a declared setter writes that state in place. |
| `PersonaIronic` | property (static) | Static entry point `TraitObject` property. Read it for current state; a declared setter writes that state in place. |
| `Personality` | property (static) | Static entry point `IEnumerable<TraitObject>` property. Read it for current state; a declared setter writes that state in place. |
| `PersonaSoftspoken` | property (static) | Static entry point `TraitObject` property. Read it for current state; a declared setter writes that state in place. |
| `RogueSkills` | property (static) | Static entry point `TraitObject` property. Read it for current state; a declared setter writes that state in place. |
| `ScoutSkills` | property (static) | Static entry point `TraitObject` property. Read it for current state; a declared setter writes that state in place. |
| `SergeantCommandSkills` | property (static) | Static entry point `TraitObject` property. Read it for current state; a declared setter writes that state in place. |
| `Siegecraft` | property (static) | Static entry point `TraitObject` property. Read it for current state; a declared setter writes that state in place. |
| `Smuggler` | property (static) | Static entry point `TraitObject` property. Read it for current state; a declared setter writes that state in place. |
| `Surgery` | property (static) | Static entry point `TraitObject` property. Read it for current state; a declared setter writes that state in place. |
| `Thug` | property (static) | Static entry point `TraitObject` property. Read it for current state; a declared setter writes that state in place. |
| `Trader` | property (static) | Static entry point `TraitObject` property. Read it for current state; a declared setter writes that state in place. |

- Constructed as `public DefaultTraits()`.

3 further public members follow the same patterns.
## Usage Example

```csharp
var defaultTraits = new DefaultTraits();
defaultTraits.RegisterAll();
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.CampaignSystem/CharacterDevelopment/DefaultTraits.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/campaign/](../) — the other types in this bucket.
