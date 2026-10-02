---
title: "FeatObject"
description: "FeatObject — class in TaleWorlds.CampaignSystem.CharacterDevelopment. 7 public members (1 static)."
---

<!-- v147-skeleton -->
# FeatObject

**Namespace:** `TaleWorlds.CampaignSystem.CharacterDevelopment`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public sealed class FeatObject : PropertyObject`  
**Base:** `PropertyObject`  
**Source:** `TaleWorlds.CampaignSystem/CharacterDevelopment/FeatObject.cs`

## Overview

`FeatObject` is a named type in the TaleWorlds.CampaignSystem.CharacterDevelopment namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends PropertyObject, so the members it does not redeclare are inherited from there. 5 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `FeatObject`.
- **Static entry points** (1): `All`.
- **Instance members** (5): `EffectBonus`, `IncrementType`, `IsPositive`, `Initialize`, `AdditionType`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `All` | property (static) | Static entry point `MBReadOnlyList<FeatObject>` property. Read it for current state; a declared setter writes that state in place. |
| `AdditionType` | property | Instance entry point `enum` property. Read it for current state; a declared setter writes that state in place. |
| `EffectBonus` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `IncrementType` | property | Instance entry point `FeatObject.AdditionType` property. Read it for current state; a declared setter writes that state in place. |
| `Initialize` | method | Instance entry point. Takes 5 arguments: `string name`, `string description`, `float effectBonus`, `bool isPositiveEffect`, …. |
| `IsPositive` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `FeatObject` | ctor | Instance entry point. Takes 1 argument: `string stringId`. Returns ``. |

- Constructed as `public FeatObject(string stringId)`.

## Usage Example

```csharp
var featObject = new FeatObject(stringId);
featObject.Initialize(name, description, effectBonus, isPositiveEffect, incrementType);
// Read current state through featObject.EffectBonus.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.CampaignSystem/CharacterDevelopment/FeatObject.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/campaign/](../) — the other types in this bucket.
