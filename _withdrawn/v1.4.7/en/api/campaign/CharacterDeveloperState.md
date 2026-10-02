---
title: "CharacterDeveloperState"
description: "CharacterDeveloperState — class in TaleWorlds.CampaignSystem.GameState. 5 public members (0 static)."
---

<!-- v147-skeleton -->
# CharacterDeveloperState

**Namespace:** `TaleWorlds.CampaignSystem.GameState`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class CharacterDeveloperState : GameState`  
**Base:** `GameState`  
**Source:** `TaleWorlds.CampaignSystem/GameState/CharacterDeveloperState.cs`

## Overview

`CharacterDeveloperState` is a named type in the TaleWorlds.CampaignSystem.GameState namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends GameState, so the members it does not redeclare are inherited from there. 3 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (2): `CharacterDeveloperState`, `CharacterDeveloperState`.
- **Instance members** (3): `IsMenuState`, `InitialSelectedHero`, `Handler`.
- **Extension points** (1): `IsMenuState`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `IsMenuState` | property (override) | Overrides the base member `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `Handler` | property | Instance entry point `ICharacterDeveloperStateHandler` property. Read it for current state; a declared setter writes that state in place. |
| `InitialSelectedHero` | property | Instance entry point `Hero` property. Read it for current state; a declared setter writes that state in place. |
| `CharacterDeveloperState` | ctor | Instance entry point. Takes no arguments. Returns ``. |
| `CharacterDeveloperState` | ctor | Instance entry point. Takes 1 argument: `Hero initialSelectedHero`. Returns ``. |

- Constructed as `public CharacterDeveloperState()`.
- Constructed as `public CharacterDeveloperState(Hero initialSelectedHero)`.

## Usage Example

```csharp
var characterDeveloperState = new CharacterDeveloperState();
// Read current state through characterDeveloperState.IsMenuState.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem/GameState/CharacterDeveloperState.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/campaign/](../) — the other types in this bucket.
