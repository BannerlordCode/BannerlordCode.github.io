---
title: "AccessObjectJsonConverter"
description: "AccessObjectJsonConverter — class in TaleWorlds.Diamond. 4 public members (0 static)."
---

<!-- v147-skeleton -->
# AccessObjectJsonConverter

**Namespace:** `TaleWorlds.Diamond`  
**Module:** `TaleWorlds.Diamond`  
**Type:** `public class AccessObjectJsonConverter : JsonConverter`  
**Base:** `JsonConverter`  
**Source:** `TaleWorlds.Diamond/AccessObjectJsonConverter.cs`

## Overview

`AccessObjectJsonConverter` is a named type in the TaleWorlds.Diamond namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends JsonConverter, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Instance members** (4): `CanConvert`, `ReadJson`, `CanWrite`, `WriteJson`.
- **Extension points** (4): `CanConvert`, `ReadJson`, `CanWrite`, `WriteJson`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CanConvert` | method (override) | Overrides the base member. Takes 1 argument: `Type objectType`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `CanWrite` | property (override) | Overrides the base member `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `ReadJson` | method (override) | Overrides the base member. Takes 4 arguments: `JsonReader reader`, `Type objectType`, `object existingValue`, `JsonSerializer serializer`. Returns `object`. |
| `WriteJson` | method (override) | Overrides the base member. Takes 3 arguments: `JsonWriter writer`, `object value`, `JsonSerializer serializer`. |

## Usage Example

```csharp
// AccessObjectJsonConverter is read through its properties:
//   CanWrite : bool
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 4 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.Diamond/AccessObjectJsonConverter.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [AccessObject](../AccessObject/) — `TaleWorlds.Diamond`.

Section: [api/engine/](../) — the other types in this bucket.
