---
title: "DefaultTextProcessor"
description: "DefaultTextProcessor — class in TaleWorlds.Localization.TextProcessor. 3 public members (0 static)."
---

<!-- v147-skeleton -->
# DefaultTextProcessor

**Namespace:** `TaleWorlds.Localization.TextProcessor`  
**Module:** `TaleWorlds.Localization`  
**Type:** `public class DefaultTextProcessor : LanguageSpecificTextProcessor`  
**Base:** `LanguageSpecificTextProcessor`  
**Source:** `TaleWorlds.Localization/TextProcessor/DefaultTextProcessor.cs`

## Overview

`DefaultTextProcessor` is a named type in the TaleWorlds.Localization.TextProcessor namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends LanguageSpecificTextProcessor, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Instance members** (3): `ProcessToken`, `CultureInfoForLanguage`, `ClearTemporaryData`.
- **Extension points** (3): `ProcessToken`, `CultureInfoForLanguage`, `ClearTemporaryData`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `ClearTemporaryData` | method (override) | Overrides the base member. Takes no arguments. Removes from or clears the collection this type owns. |
| `CultureInfoForLanguage` | property (override) | Overrides the base member `CultureInfo` property. Read it for current state; a declared setter writes that state in place. |
| `ProcessToken` | method (override) | Overrides the base member. Takes 4 arguments: `string sourceText`, `ref int cursorPos`, `string token`, `StringBuilder outputString`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |

## Usage Example

```csharp
// DefaultTextProcessor is read through its properties:
//   CultureInfoForLanguage : CultureInfo
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 3 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.Localization/TextProcessor/DefaultTextProcessor.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [LanguageSpecificTextProcessor](../LanguageSpecificTextProcessor/) — `TaleWorlds.Localization.TextProcessor`.

Section: [api/localization/](../) — the other types in this bucket.
