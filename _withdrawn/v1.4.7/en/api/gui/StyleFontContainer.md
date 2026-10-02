---
title: "StyleFontContainer"
description: "StyleFontContainer — class in TaleWorlds.TwoDimension. 5 public members (0 static)."
---

<!-- v147-skeleton -->
# StyleFontContainer

**Namespace:** `TaleWorlds.TwoDimension`  
**Module:** `TaleWorlds.TwoDimension`  
**Type:** `public class StyleFontContainer`  
**Source:** `TaleWorlds.TwoDimension/StyleFontContainer.cs`

## Overview

`StyleFontContainer` is a named type in the TaleWorlds.TwoDimension namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `StyleFontContainer`.
- **Instance members** (4): `Add`, `GetFontData`, `ClearFonts`, `FontData`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Add` | method | Instance entry point. Takes 3 arguments: `string style`, `Font font`, `float fontSize`. |
| `ClearFonts` | method | Instance entry point. Takes no arguments. Removes from or clears the collection this type owns. |
| `FontData` | property | Instance entry point `struct` property. Read it for current state; a declared setter writes that state in place. |
| `GetFontData` | method | Instance entry point. Takes 1 argument: `string style`. Returns `StyleFontContainer.FontData`. Read path: prefer it over reaching for the backing store. |
| `StyleFontContainer` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public StyleFontContainer()`.

## Usage Example

```csharp
var styleFontContainer = new StyleFontContainer();
styleFontContainer.Add(style, font, fontSize);
// Read current state through styleFontContainer.FontData.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.TwoDimension/StyleFontContainer.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/gui/](../) — the other types in this bucket.
