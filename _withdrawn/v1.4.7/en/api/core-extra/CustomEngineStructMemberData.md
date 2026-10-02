---
title: "CustomEngineStructMemberData"
description: "CustomEngineStructMemberData — class in TaleWorlds.DotNet. 5 public members (0 static)."
---

<!-- v147-skeleton -->
# CustomEngineStructMemberData

**Namespace:** `TaleWorlds.DotNet`  
**Module:** `TaleWorlds.DotNet`  
**Type:** `public class CustomEngineStructMemberData : Attribute`  
**Base:** `Attribute`  
**Source:** `TaleWorlds.DotNet/CustomEngineStructMemberData.cs`

## Overview

`CustomEngineStructMemberData` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

It extends Attribute, so the members it does not redeclare are inherited from there. 3 of its own members are properties, which is where most reads and writes land.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Constructed with** (2): `CustomEngineStructMemberData`, `CustomEngineStructMemberData`.
- **Instance members** (3): `CustomMemberName`, `IgnoreMemberOffsetTest`, `PublicPrivateModifierFlippedInNative`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CustomMemberName` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `IgnoreMemberOffsetTest` | property | Instance entry point `bool` property. Read it for current state; a declared setter writes that state in place. |
| `PublicPrivateModifierFlippedInNative` | property | Instance entry point `bool` property. Read it for current state; a declared setter writes that state in place. |
| `CustomEngineStructMemberData` | ctor | Instance entry point. Takes 1 argument: `string customMemberName`. Returns ``. |
| `CustomEngineStructMemberData` | ctor | Instance entry point. Takes 2 arguments: `string customMemberName`, `bool ignoreMemberOffsetTest`. Returns ``. |

- Constructed as `public CustomEngineStructMemberData(string customMemberName)`.
- Constructed as `public CustomEngineStructMemberData(string customMemberName, bool ignoreMemberOffsetTest)`.

## Usage Example

```csharp
var data = new CustomEngineStructMemberData
{
    CustomMemberName = "",
    IgnoreMemberOffsetTest = false,
    PublicPrivateModifierFlippedInNative = false,
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- The declaration in `TaleWorlds.DotNet/CustomEngineStructMemberData.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/core-extra/](../) — the other types in this bucket.
