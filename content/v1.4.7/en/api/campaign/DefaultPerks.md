---
title: "DefaultPerks"
description: "DefaultPerks — class in TaleWorlds.CampaignSystem.CharacterDevelopment. 19 public members (18 static)."
---

<!-- v147-skeleton -->
# DefaultPerks

**Namespace:** `TaleWorlds.CampaignSystem.CharacterDevelopment`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DefaultPerks`  
**Source:** `TaleWorlds.CampaignSystem/CharacterDevelopment/DefaultPerks.cs`

## Overview

`DefaultPerks` is a named type in the TaleWorlds.CampaignSystem.CharacterDevelopment namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `DefaultPerks`.
- **Static entry points** (18): `OneHanded`, `TwoHanded`, `Polearm`, `Bow`, `Crossbow`, `Throwing`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Athletics` | property (static) | Static entry point `class` property. Read it for current state; a declared setter writes that state in place. |
| `Bow` | property (static) | Static entry point `class` property. Read it for current state; a declared setter writes that state in place. |
| `Charm` | property (static) | Static entry point `class` property. Read it for current state; a declared setter writes that state in place. |
| `Crafting` | property (static) | Static entry point `class` property. Read it for current state; a declared setter writes that state in place. |
| `Crossbow` | property (static) | Static entry point `class` property. Read it for current state; a declared setter writes that state in place. |
| `Engineering` | property (static) | Static entry point `class` property. Read it for current state; a declared setter writes that state in place. |
| `Leadership` | property (static) | Static entry point `class` property. Read it for current state; a declared setter writes that state in place. |
| `Medicine` | property (static) | Static entry point `class` property. Read it for current state; a declared setter writes that state in place. |
| `OneHanded` | property (static) | Static entry point `class` property. Read it for current state; a declared setter writes that state in place. |
| `Polearm` | property (static) | Static entry point `class` property. Read it for current state; a declared setter writes that state in place. |
| `Riding` | property (static) | Static entry point `class` property. Read it for current state; a declared setter writes that state in place. |
| `Roguery` | property (static) | Static entry point `class` property. Read it for current state; a declared setter writes that state in place. |
| `Scouting` | property (static) | Static entry point `class` property. Read it for current state; a declared setter writes that state in place. |
| `Steward` | property (static) | Static entry point `class` property. Read it for current state; a declared setter writes that state in place. |
| `Tactics` | property (static) | Static entry point `class` property. Read it for current state; a declared setter writes that state in place. |
| `Throwing` | property (static) | Static entry point `class` property. Read it for current state; a declared setter writes that state in place. |
| `Trade` | property (static) | Static entry point `class` property. Read it for current state; a declared setter writes that state in place. |
| `TwoHanded` | property (static) | Static entry point `class` property. Read it for current state; a declared setter writes that state in place. |
| `DefaultPerks` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public DefaultPerks()`.

## Usage Example

```csharp
var defaultPerks = new DefaultPerks();
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.CampaignSystem/CharacterDevelopment/DefaultPerks.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Crafting](../../core-extra/Crafting/) — `TaleWorlds.Core`.
- [Building](../Building/) — `TaleWorlds.CampaignSystem.Settlements.Buildings`.

Section: [api/campaign/](../) — the other types in this bucket.
