---
title: "Romance"
description: "Romance — class in TaleWorlds.CampaignSystem. 7 public members (4 static)."
---

<!-- v147-skeleton -->
# Romance

**Namespace:** `TaleWorlds.CampaignSystem`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class Romance`  
**Source:** `TaleWorlds.CampaignSystem/Romance.cs`

## Overview

`Romance` is a named type in the TaleWorlds.CampaignSystem namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `Romance`.
- **Static entry points** (4): `RomanticStateList`, `GetCourtedHeroInOtherClan`, `GetRomanticLevel`, `GetRomanticState`.
- **Instance members** (2): `RomanticState`, `RomanceLevelEnum`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetCourtedHeroInOtherClan` | method (static) | Static entry point. Takes 2 arguments: `Hero person1`, `Hero person2`. Returns `Hero`. Read path: prefer it over reaching for the backing store. |
| `GetRomanticLevel` | method (static) | Static entry point. Takes 2 arguments: `Hero person1`, `Hero person2`. Returns `Romance.RomanceLevelEnum`. Read path: prefer it over reaching for the backing store. |
| `GetRomanticState` | method (static) | Static entry point. Takes 2 arguments: `Hero person1`, `Hero person2`. Returns `Romance.RomanticState`. Read path: prefer it over reaching for the backing store. |
| `RomanticStateList` | property (static) | Static entry point `List<Romance.RomanticState>` property. Read it for current state; a declared setter writes that state in place. |
| `RomanceLevelEnum` | property | Instance entry point `enum` property. Read it for current state; a declared setter writes that state in place. |
| `RomanticState` | property | Instance entry point `class` property. Read it for current state; a declared setter writes that state in place. |
| `Romance` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public Romance()`.

## Usage Example

```csharp
// Static entry points on Romance:
Romance.GetCourtedHeroInOtherClan(person1, person2);
Romance.GetRomanticLevel(person1, person2);
Romance.GetRomanticState(person1, person2);
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.CampaignSystem/Romance.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/campaign/](../) — the other types in this bucket.
