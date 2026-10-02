---
title: "Attributes"
description: "Attributes — class in TaleWorlds.CampaignSystem.Extensions. 1 public member (1 static)."
---

<!-- v147-skeleton -->
# Attributes

**Namespace:** `TaleWorlds.CampaignSystem.Extensions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class Attributes`  
**Source:** `TaleWorlds.CampaignSystem/Extensions/Attributes.cs`

## Overview

`Attributes` is a named type in the TaleWorlds.CampaignSystem.Extensions namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Static entry points** (1): `All`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `All` | property (static) | Static entry point `MBReadOnlyList<CharacterAttribute>` property. Read it for current state; a declared setter writes that state in place. |

## Usage Example

```csharp
// Attributes exposes no public members in TaleWorlds.CampaignSystem.Extensions.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.CampaignSystem/Extensions/Attributes.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Extensions](../../engine/Extensions/) — `TaleWorlds.Engine.GauntletUI`.

Section: [api/campaign/](../) — the other types in this bucket.
