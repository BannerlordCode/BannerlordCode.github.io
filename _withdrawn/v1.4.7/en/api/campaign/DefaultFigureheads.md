---
title: "DefaultFigureheads"
description: "DefaultFigureheads — class in TaleWorlds.CampaignSystem.Naval. 18 public members (17 static)."
---

<!-- v147-skeleton -->
# DefaultFigureheads

**Namespace:** `TaleWorlds.CampaignSystem.Naval`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DefaultFigureheads`  
**Source:** `TaleWorlds.CampaignSystem/Naval/DefaultFigureheads.cs`

## Overview

`DefaultFigureheads` is a named type in the TaleWorlds.CampaignSystem.Naval namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `DefaultFigureheads`.
- **Static entry points** (17): `Instance`, `Hawk`, `Lion`, `Dragon`, `WingsOfVictory`, `Ram`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Boar` | property (static) | Static entry point `Figurehead` property. Read it for current state; a declared setter writes that state in place. |
| `Deer` | property (static) | Static entry point `Figurehead` property. Read it for current state; a declared setter writes that state in place. |
| `Dragon` | property (static) | Static entry point `Figurehead` property. Read it for current state; a declared setter writes that state in place. |
| `Hawk` | property (static) | Static entry point `Figurehead` property. Read it for current state; a declared setter writes that state in place. |
| `Horse` | property (static) | Static entry point `Figurehead` property. Read it for current state; a declared setter writes that state in place. |
| `Instance` | property (static) | Static entry point `DefaultFigureheads` property. Read it for current state; a declared setter writes that state in place. |
| `Lion` | property (static) | Static entry point `Figurehead` property. Read it for current state; a declared setter writes that state in place. |
| `Oxen` | property (static) | Static entry point `Figurehead` property. Read it for current state; a declared setter writes that state in place. |
| `Ram` | property (static) | Static entry point `Figurehead` property. Read it for current state; a declared setter writes that state in place. |
| `Raven` | property (static) | Static entry point `Figurehead` property. Read it for current state; a declared setter writes that state in place. |
| `SaberToothTiger` | property (static) | Static entry point `Figurehead` property. Read it for current state; a declared setter writes that state in place. |
| `SeaSerpent` | property (static) | Static entry point `Figurehead` property. Read it for current state; a declared setter writes that state in place. |
| `Siren` | property (static) | Static entry point `Figurehead` property. Read it for current state; a declared setter writes that state in place. |
| `Swan` | property (static) | Static entry point `Figurehead` property. Read it for current state; a declared setter writes that state in place. |
| `Turtle` | property (static) | Static entry point `Figurehead` property. Read it for current state; a declared setter writes that state in place. |
| `Viper` | property (static) | Static entry point `Figurehead` property. Read it for current state; a declared setter writes that state in place. |
| `WingsOfVictory` | property (static) | Static entry point `Figurehead` property. Read it for current state; a declared setter writes that state in place. |
| `DefaultFigureheads` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public DefaultFigureheads()`.

## Usage Example

```csharp
var defaultFigureheads = new DefaultFigureheads();
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.CampaignSystem/Naval/DefaultFigureheads.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Figurehead](../Figurehead/) — `TaleWorlds.CampaignSystem.Naval`.
- [Ship](../Ship/) — `TaleWorlds.CampaignSystem.Naval`.

Section: [api/campaign/](../) — the other types in this bucket.
