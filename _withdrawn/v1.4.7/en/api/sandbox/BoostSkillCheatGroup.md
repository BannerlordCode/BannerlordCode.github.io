---
title: "BoostSkillCheatGroup"
description: "BoostSkillCheatGroup — class in SandBox. 2 public members (0 static)."
---

<!-- v147-skeleton -->
# BoostSkillCheatGroup

**Namespace:** `SandBox`  
**Module:** `SandBox`  
**Type:** `public class BoostSkillCheatGroup : GameplayCheatGroup`  
**Base:** `GameplayCheatGroup`  
**Source:** `SandBox/BoostSkillCheatGroup.cs`

## Overview

`BoostSkillCheatGroup` is a named type in the SandBox namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends GameplayCheatGroup, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Instance members** (2): `GetCheats`, `GetName`.
- **Extension points** (2): `GetCheats`, `GetName`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetCheats` | method (override) | Overrides the base member. Takes no arguments. Returns `IEnumerable<GameplayCheatBase>`. Read path: prefer it over reaching for the backing store. |
| `GetName` | method (override) | Overrides the base member. Takes no arguments. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |

## Usage Example

```csharp
// BoostSkillCheatGroup exposes no public members in SandBox.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox/BoostSkillCheatGroup.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Extensions](../../engine/Extensions/) — `TaleWorlds.Engine.GauntletUI`.
- [HeroDeveloper](../../campaign/HeroDeveloper/) — `TaleWorlds.CampaignSystem.CharacterDevelopment`.

Section: [api/sandbox/](../) — the other types in this bucket.
