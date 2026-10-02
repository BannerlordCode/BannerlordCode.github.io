---
title: "PolishTextProcessor"
description: "PolishTextProcessor — class in TaleWorlds.Localization.TextProcessor.LanguageProcessors. 5 public members (2 static)."
---

<!-- v147-skeleton -->
# PolishTextProcessor

**Namespace:** `TaleWorlds.Localization.TextProcessor.LanguageProcessors`  
**Module:** `TaleWorlds.Localization`  
**Type:** `public class PolishTextProcessor : LanguageSpecificTextProcessor`  
**Base:** `LanguageSpecificTextProcessor`  
**Source:** `TaleWorlds.Localization/TextProcessor/LanguageProcessors/PolishTextProcessor.cs`

## Overview

`PolishTextProcessor` is a named type in the TaleWorlds.Localization.TextProcessor.LanguageProcessors namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends LanguageSpecificTextProcessor, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Static entry points** (2): `GetProcessedNouns`, `GetProcessedAdjectives`.
- **Instance members** (3): `CultureInfoForLanguage`, `ClearTemporaryData`, `ProcessToken`.
- **Extension points** (3): `CultureInfoForLanguage`, `ClearTemporaryData`, `ProcessToken`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `ClearTemporaryData` | method (override) | Overrides the base member. Takes no arguments. Removes from or clears the collection this type owns. |
| `CultureInfoForLanguage` | property (override) | Overrides the base member `CultureInfo` property. Read it for current state; a declared setter writes that state in place. |
| `GetProcessedAdjectives` | method (static) | Static entry point. Takes 3 arguments: `string str`, `string gender`, `string[] tokens`. Returns `string[]`. Read path: prefer it over reaching for the backing store. |
| `GetProcessedNouns` | method (static) | Static entry point. Takes 3 arguments: `string str`, `string gender`, `string[] tokens`. Returns `string[]`. Read path: prefer it over reaching for the backing store. |
| `ProcessToken` | method (override) | Overrides the base member. Takes 4 arguments: `string sourceText`, `ref int cursorPos`, `string token`, `StringBuilder outputString`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |

## Usage Example

```csharp
// Static entry points on PolishTextProcessor:
PolishTextProcessor.GetProcessedNouns(str, gender, tokens);
PolishTextProcessor.GetProcessedAdjectives(str, gender, tokens);
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 3 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.Localization/TextProcessor/LanguageProcessors/PolishTextProcessor.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [LanguageSpecificTextProcessor](../LanguageSpecificTextProcessor/) — `TaleWorlds.Localization.TextProcessor`.
- [Min](../../core-extra/Min/) — `TaleWorlds.LinQuick`.

Section: [api/localization/](../) — the other types in this bucket.
