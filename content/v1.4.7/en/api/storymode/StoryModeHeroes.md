---
title: "StoryModeHeroes"
description: "StoryModeHeroes — class in StoryMode.StoryModeObjects. 10 public members (10 static)."
---

<!-- v147-skeleton -->
# StoryModeHeroes

**Namespace:** `StoryMode.StoryModeObjects`  
**Module:** `StoryMode`  
**Type:** `public class StoryModeHeroes`  
**Source:** `StoryMode/StoryModeObjects/StoryModeHeroes.cs`

## Overview

`StoryModeHeroes` is a named type in the StoryMode.StoryModeObjects namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Static entry points** (10): `ElderBrother`, `LittleBrother`, `LittleSister`, `Tacitus`, `Radagos`, `ImperialMentor`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AntiImperialMentor` | property (static) | Static entry point `Hero` property. Read it for current state; a declared setter writes that state in place. |
| `ElderBrother` | property (static) | Static entry point `Hero` property. Read it for current state; a declared setter writes that state in place. |
| `ImperialMentor` | property (static) | Static entry point `Hero` property. Read it for current state; a declared setter writes that state in place. |
| `LittleBrother` | property (static) | Static entry point `Hero` property. Read it for current state; a declared setter writes that state in place. |
| `LittleSister` | property (static) | Static entry point `Hero` property. Read it for current state; a declared setter writes that state in place. |
| `MainHeroFather` | property (static) | Static entry point `Hero` property. Read it for current state; a declared setter writes that state in place. |
| `MainHeroMother` | property (static) | Static entry point `Hero` property. Read it for current state; a declared setter writes that state in place. |
| `Radagos` | property (static) | Static entry point `Hero` property. Read it for current state; a declared setter writes that state in place. |
| `RadagosHenchman` | property (static) | Static entry point `Hero` property. Read it for current state; a declared setter writes that state in place. |
| `Tacitus` | property (static) | Static entry point `Hero` property. Read it for current state; a declared setter writes that state in place. |

## Usage Example

```csharp
// StoryModeHeroes exposes no public members in StoryMode.StoryModeObjects.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `StoryMode/StoryModeObjects/StoryModeHeroes.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [CampaignObjectManager](../../campaign/CampaignObjectManager/) — `TaleWorlds.CampaignSystem`.
- [HeroCreator](../../campaign/HeroCreator/) — `TaleWorlds.CampaignSystem`.
- [HeroDeveloper](../../campaign/HeroDeveloper/) — `TaleWorlds.CampaignSystem.CharacterDevelopment`.

Section: [api/storymode/](../) — the other types in this bucket.
