---
title: "DictionaryByType"
description: "DictionaryByType — class in TaleWorlds.Library.EventSystem. 2 public members (0 static)."
---

<!-- v147-skeleton -->
# DictionaryByType

**Namespace:** `TaleWorlds.Library.EventSystem`  
**Module:** `TaleWorlds.Library`  
**Type:** `public class DictionaryByType`  
**Source:** `TaleWorlds.Library/EventSystem/DictionaryByType.cs`

## Overview

`DictionaryByType` is a named type in the TaleWorlds.Library.EventSystem namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Instance members** (2): `GetClone`, `Clear`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Clear` | method | Instance entry point. Takes no arguments. |
| `GetClone` | method | Instance entry point. Takes no arguments. Returns `IDictionary<Type, object>`. Read path: prefer it over reaching for the backing store. |

## Usage Example

```csharp
// DictionaryByType exposes no public members in TaleWorlds.Library.EventSystem.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.Library/EventSystem/DictionaryByType.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [EventManager](../EventManager/) — `TaleWorlds.Library.EventSystem`.

Section: [api/core-extra/](../) — the other types in this bucket.
