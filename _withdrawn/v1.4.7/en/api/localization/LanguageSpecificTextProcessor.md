---
title: "LanguageSpecificTextProcessor"
description: "LanguageSpecificTextProcessor — class in TaleWorlds.Localization.TextProcessor. 5 public members (0 static)."
---

<!-- v147-skeleton -->
# LanguageSpecificTextProcessor

**Namespace:** `TaleWorlds.Localization.TextProcessor`  
**Module:** `TaleWorlds.Localization`  
**Type:** `public abstract class LanguageSpecificTextProcessor`  
**Source:** `TaleWorlds.Localization/TextProcessor/LanguageSpecificTextProcessor.cs`

## Overview

`LanguageSpecificTextProcessor` is a named type in the TaleWorlds.Localization.TextProcessor namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `LanguageSpecificTextProcessor`.
- **Instance members** (4): `ProcessToken`, `CultureInfoForLanguage`, `ClearTemporaryData`, `Process`.
- **Extension points** (3): `ProcessToken`, `CultureInfoForLanguage`, `ClearTemporaryData`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `ClearTemporaryData` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. Removes from or clears the collection this type owns. |
| `CultureInfoForLanguage` | property (abstract) | Abstract — a subclass must supply it `CultureInfo` property. Read it for current state; a declared setter writes that state in place. |
| `ProcessToken` | method (abstract) | Abstract — a subclass must supply it. Takes 4 arguments: `string sourceText`, `ref int cursorPos`, `string token`, `StringBuilder outputString`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `Process` | method | Instance entry point. Takes 1 argument: `string text`. Returns `string`. |
| `LanguageSpecificTextProcessor` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public LanguageSpecificTextProcessor()`.

## Usage Example

```csharp
var languageSpecificTextProcessor = new LanguageSpecificTextProcessor();
languageSpecificTextProcessor.ProcessToken(sourceText, theTarget, token, outputString);
// Read current state through languageSpecificTextProcessor.CultureInfoForLanguage.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 3 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.Localization/TextProcessor/LanguageSpecificTextProcessor.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Min](../../core-extra/Min/) — `TaleWorlds.LinQuick`.

Section: [api/localization/](../) — the other types in this bucket.
