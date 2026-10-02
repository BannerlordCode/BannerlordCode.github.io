---
title: "Figurehead"
description: "Figurehead — class in TaleWorlds.CampaignSystem.Naval. 5 public members (0 static)."
---

<!-- v147-skeleton -->
# Figurehead

**Namespace:** `TaleWorlds.CampaignSystem.Naval`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class Figurehead : PropertyObject`  
**Base:** `PropertyObject`  
**Source:** `TaleWorlds.CampaignSystem/Naval/Figurehead.cs`

## Overview

`Figurehead` is a named type in the TaleWorlds.CampaignSystem.Naval namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends PropertyObject, so the members it does not redeclare are inherited from there. 3 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `Figurehead`.
- **Instance members** (4): `EffectIncrementType`, `EffectAmount`, `Culture`, `Initialize`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Culture` | property | Instance entry point `CultureObject` property. Read it for current state; a declared setter writes that state in place. |
| `EffectAmount` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `EffectIncrementType` | property | Instance entry point `EffectIncrementType` property. Read it for current state; a declared setter writes that state in place. |
| `Initialize` | method | Instance entry point. Takes 5 arguments: `TextObject name`, `TextObject description`, `float amount`, `CultureObject culture`, …. |
| `Figurehead` | ctor | Instance entry point. Takes 1 argument: `string stringId`. Returns ``. |

- Constructed as `public Figurehead(string stringId)`.

## Usage Example

```csharp
var figurehead = new Figurehead(stringId);
figurehead.Initialize(name, description, amount, culture, effectIncrementType);
// Read current state through figurehead.EffectIncrementType.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.CampaignSystem/Naval/Figurehead.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/campaign/](../) — the other types in this bucket.
