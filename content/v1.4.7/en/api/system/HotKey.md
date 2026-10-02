---
title: "HotKey"
description: "HotKey — class in TaleWorlds.InputSystem. 10 public members (0 static)."
---

<!-- v147-skeleton -->
# HotKey

**Namespace:** `TaleWorlds.InputSystem`  
**Module:** `TaleWorlds.InputSystem`  
**Type:** `public class HotKey`  
**Source:** `TaleWorlds.InputSystem/HotKey.cs`

## Overview

`HotKey` is a named type in the TaleWorlds.InputSystem namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `HotKey`.
- **Instance members** (7): `Keys`, `DefaultKeys`, `HasModifier`, `HasSameModifiers`, `ToString`, `Equals`, ….
- **Extension points** (3): `ToString`, `Equals`, `GetHashCode`.
- **Data and constants** (2): `Id`, `GroupId`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Equals` | method (override) | Overrides the base member. Takes 1 argument: `object obj`. Returns `bool`. |
| `GetHashCode` | method (override) | Overrides the base member. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `ToString` | method (override) | Overrides the base member. Takes no arguments. Returns `string`. |
| `DefaultKeys` | property | Instance entry point `List<Key>` property. Read it for current state; a declared setter writes that state in place. |
| `HasModifier` | method | Instance entry point. Takes 1 argument: `HotKey.Modifiers modifier`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `HasSameModifiers` | method | Instance entry point. Takes 1 argument: `HotKey other`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `Keys` | property | Instance entry point `List<Key>` property. Read it for current state; a declared setter writes that state in place. |
| `HotKey` | ctor | Instance entry point. Takes 5 arguments: `string id`, `string groupId`, `List<Key> keys`, `HotKey.Modifiers modifiers`, …. Returns ``. |
| `GroupId` | field | Instance entry point `string` field — direct storage with no validation or notification. |
| `Id` | field | Instance entry point `string` field — direct storage with no validation or notification. |

- Constructed as `public HotKey(string id, string groupId, List<Key> keys, HotKey.Modifiers modifiers = HotKey.Modifiers.None, HotKey.Modifiers negativeModifiers = HotKey.Modifiers.None)`.

## Usage Example

```csharp
var hotKey = new HotKey(id, groupId, keys, modifiers, negativeModifiers);
hotKey.HasModifier(modifier);
// Read current state through hotKey.Keys.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 3 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.InputSystem/HotKey.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/system/](../) — the other types in this bucket.
