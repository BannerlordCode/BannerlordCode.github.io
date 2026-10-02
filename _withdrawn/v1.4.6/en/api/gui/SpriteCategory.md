---
title: "SpriteCategory"
description: "SpriteCategory: a public class in TaleWorlds.TwoDimension; 21 exposed members (9 methods, 9 properties, 1 fields). Canonical bucket gui. Source: TaleWorlds.TwoDimension/SpriteCategory.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SpriteCategory

**Namespace:** `TaleWorlds.TwoDimension`
**Module:** `TaleWorlds.TwoDimension`
**Type:** `public class SpriteCategory`
**File:** `TaleWorlds.TwoDimension/SpriteCategory.cs`
**Bucket:** `gui` (rule:TaleWorlds.TwoDimension)

## Overview

SpriteCategory lives in the TaleWorlds.TwoDimension module, source file TaleWorlds.TwoDimension/SpriteCategory.cs. It is a public class; the inheritance chain is SpriteCategory. It exposes 21 public/protected members: 9 methods, 9 properties, 1 fields, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SpriteCategory lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.TwoDimension`), namespace `TaleWorlds.TwoDimension`, inheritance chain SpriteCategory. The surface is method-led (methods 9/21, properties 9/21), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.TwoDimension/SpriteCategory.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Name` | `public string Name` | property |
| `List` | `public List<SpritePart>SpriteParts` | property |
| `List` | `public List<SpritePart>SortedSpritePartList` | property |
| `List` | `public List<Texture>SpriteSheets` | property |
| `SpriteSheetCount` | `public int SpriteSheetCount` | property |
| `IsLoaded` | `public bool IsLoaded` | property |
| `IsPartiallyLoaded` | `public bool IsPartiallyLoaded` | property |
| `Vec2i[]SheetSizes` | `public Vec2i[]SheetSizes` | property |
| `SpriteCategory` | `public SpriteCategory(string name, int spriteSheetCount, bool alwaysLoad = false)` | constructor |
| `Load` | `public void Load(ITwoDimensionResourceContext resourceContext, ResourceDepot resourceDepot)` | method |
| `Unload` | `public void Unload()` | method |
| `Reload` | `public void Reload(ITwoDimensionResourceContext resourceContext, ResourceDepot resourceDepot, SpriteCategory newCategoryInfo)` | method |
| `InitializePartialLoad` | `public void InitializePartialLoad()` | method |
| `ReleasePartialLoad` | `public void ReleasePartialLoad()` | method |
| `PartialLoadAtIndex` | `public void PartialLoadAtIndex(ITwoDimensionResourceContext resourceContext, ResourceDepot resourceDepot, int sheetIndex)` | method |
| `PartialUnloadAtIndex` | `public void PartialUnloadAtIndex(int sheetIndex)` | method |
| `SortList` | `public void SortList()` | method |
| `IsCategoryFullyLoaded` | `public bool IsCategoryFullyLoaded()` | method |
| `SpriteSheetSize` | `public const int SpriteSheetSize` | field |
| `IComparer` | `protected class SpriteSizeComparer : IComparer<SpritePart>` | property |
| `IComparer` | `protected class SpriteSizeComparer : IComparer<SpritePart>` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace BitmapFontCharacter](../BitmapFontCharacter/)
- [same namespace EditableText](../EditableText/)
- [same namespace Font](../Font/)
- [same namespace FontStyle](../FontStyle/)
