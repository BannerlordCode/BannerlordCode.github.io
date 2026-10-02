---
title: "LocalizationException"
description: "LocalizationException — class in TaleWorlds.Localization. 3 public members (0 static)."
---

<!-- v147-skeleton -->
# LocalizationException

**Namespace:** `TaleWorlds.Localization`  
**Module:** `TaleWorlds.Localization`  
**Type:** `public class LocalizationException : Exception`  
**Base:** `Exception`  
**Source:** `TaleWorlds.Localization/LocalizationException.cs`

## Overview

`LocalizationException` is a named type in the TaleWorlds.Localization namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends Exception, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (3): `LocalizationException`, `LocalizationException`, `LocalizationException`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `LocalizationException` | ctor | Instance entry point. Takes no arguments. Returns ``. |
| `LocalizationException` | ctor | Instance entry point. Takes 1 argument: `string message`. Returns ``. |
| `LocalizationException` | ctor | Instance entry point. Takes 2 arguments: `string message`, `Exception inner`. Returns ``. |

- Constructed as `public LocalizationException()`.
- Constructed as `public LocalizationException(string message)`.
- Constructed as `public LocalizationException(string message, Exception inner)`.

## Usage Example

```csharp
var localizationException = new LocalizationException();
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.Localization/LocalizationException.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/localization/](../) — the other types in this bucket.
