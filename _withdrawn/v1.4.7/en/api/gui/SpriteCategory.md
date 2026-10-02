---
title: "SpriteCategory"
description: "SpriteCategory — class in TaleWorlds.TwoDimension. 20 public members (0 static)."
---

<!-- v147-skeleton -->
# SpriteCategory

**Namespace:** `TaleWorlds.TwoDimension`  
**Module:** `TaleWorlds.TwoDimension`  
**Type:** `public class SpriteCategory`  
**Source:** `TaleWorlds.TwoDimension/SpriteCategory.cs`

## Overview

`SpriteCategory` is a named type in the TaleWorlds.TwoDimension namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `SpriteCategory`.
- **Instance members** (17): `Name`, `SpriteParts`, `SortedSpritePartList`, `SpriteSheets`, `SpriteSheetCount`, `IsLoaded`, ….
- **Data and constants** (2): `SpriteSheetSize`, `AlwaysLoad`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `InitializePartialLoad` | method | Instance entry point. Takes no arguments. |
| `IsCategoryFullyLoaded` | method | Instance entry point. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsLoaded` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsPartiallyLoaded` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `Load` | method | Instance entry point. Takes 2 arguments: `ITwoDimensionResourceContext resourceContext`, `ResourceDepot resourceDepot`. |
| `Name` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `PartialLoadAtIndex` | method | Instance entry point. Takes 3 arguments: `ITwoDimensionResourceContext resourceContext`, `ResourceDepot resourceDepot`, `int sheetIndex`. |
| `PartialUnloadAtIndex` | method | Instance entry point. Takes 1 argument: `int sheetIndex`. |
| `ReleasePartialLoad` | method | Instance entry point. Takes no arguments. |
| `Reload` | method | Instance entry point. Takes 3 arguments: `ITwoDimensionResourceContext resourceContext`, `ResourceDepot resourceDepot`, `SpriteCategory newCategoryInfo`. |
| `SheetSizes` | property | Instance entry point `Vec2i[]` property. Read it for current state; a declared setter writes that state in place. |
| `SortedSpritePartList` | property | Instance entry point `List<SpritePart>` property. Read it for current state; a declared setter writes that state in place. |
| `SortList` | method | Instance entry point. Takes no arguments. |
| `SpriteParts` | property | Instance entry point `List<SpritePart>` property. Read it for current state; a declared setter writes that state in place. |
| `SpriteSheetCount` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `SpriteSheets` | property | Instance entry point `List<Texture>` property. Read it for current state; a declared setter writes that state in place. |
| `Unload` | method | Instance entry point. Takes no arguments. |
| `SpriteSheetSize` | const | Instance entry point. Takes no arguments. Returns `int`. |
| `SpriteCategory` | ctor | Instance entry point. Takes 3 arguments: `string name`, `int spriteSheetCount`, `bool alwaysLoad`. Returns ``. |
| `AlwaysLoad` | field | Instance entry point `bool` field — direct storage with no validation or notification. |

- Constructed as `public SpriteCategory(string name, int spriteSheetCount, bool alwaysLoad = false)`.

## Usage Example

```csharp
var spriteCategory = new SpriteCategory(name, spriteSheetCount, alwaysLoad);
spriteCategory.Load(resourceContext, resourceDepot);
// Read current state through spriteCategory.Name.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.TwoDimension/SpriteCategory.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/gui/](../) — the other types in this bucket.
