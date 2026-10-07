---
title: "CosmeticsManager"
description: "Auto-generated class reference for CosmeticsManager."
---
# CosmeticsManager

**Namespace:** TaleWorlds.MountAndBlade.Diamond.Cosmetics
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class CosmeticsManager`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Diamond/Cosmetics/CosmeticsManager.cs`

## Overview

`CosmeticsManager` is a `static` registry of multiplayer cosmetics, loaded from XML. Its static constructor
does the loading: `LoadFromXml(ModuleHelper.GetModuleFullPath("Native") + "ModuleData/mpcosmetics.xml")`
(`CosmeticsManager.cs:15`). The first time *any* member of the class is touched, the file is read and
parsed.

After loading there are two views of the same data: `CosmeticElementsList`, an `MBReadOnlyList<CosmeticElement>`
(`CosmeticsManager.cs:22`), and a private `Dictionary<string, CosmeticElement>` keyed by id, exposed for
id-only lookups through `GetCosmeticElement(string)` (`CosmeticsManager.cs:31`), which returns `null` on a
miss rather than throwing.

The parse produces a *different subclass per type*: `ClothingCosmeticElement` for `type="Clothing"` with
its `Replace` children parsed into item and itemless lists (`CosmeticsManager.cs:128`), a bare
`CosmeticElement` for `type="Frame"` (`CosmeticsManager.cs:132`), `SigilCosmeticElement` which additionally
reads the `banner_code` attribute (`CosmeticsManager.cs:148`), and `TauntCosmeticElement` which reads `name`
and is constructed with an id of `-1` (`CosmeticsManager.cs:165`). Two public enums hang off the class:
`CosmeticType` and `CosmeticRarity` (`CosmeticsManager.cs:206`).

## Mental Model

Read it as a load-on-first-touch XML registry with almost no defensive parsing. The boundaries:

- **First touch does file I/O and can throw.** `LoadFromXml` opens a `StreamReader` on the path
  (`CosmeticsManager.cs:45`); a missing file throws from the static constructor, which surfaces as a
  `TypeInitializationException` on whatever member you happened to touch first. The reader is also not
  closed in a `using` — it is closed by an explicit `Close()` after `Load` (`CosmeticsManager.cs:48`), so a
  parse failure leaks the handle.
- **Attributes are read without null checks.** `Attributes.ItemOf("id").Value`
  (`CosmeticsManager.cs:61`) throws on a missing attribute, and `int.Parse` on the cost
  (`CosmeticsManager.cs:102`) throws on a non-numeric value. There is no per-element try/catch, so one bad
  row aborts the whole load and leaves the previous tables in place.
- **Unknown type and rarity fall through to `Debug.FailedAssert` but still produce an element.** The `else`
  arms (`CosmeticsManager.cs:82`, `CosmeticsManager.cs:100`) only assert; the local keeps the default value
  (`Clothing`, `Common`) and the element is constructed anyway. A typo in the XML produces a common clothing
  cosmetic instead of being skipped.
- **`LoadFromXml` clears a dictionary it is about to replace.** Line `CosmeticsManager.cs:49` calls
  `_cosmeticElementsLookup.Clear()`, but line `CosmeticsManager.cs:174` assigns a brand-new dictionary, so
  the `Clear` does nothing observable.
- **Duplicate ids are never detected.** `CheckForCosmeticsListDuplicatesDebug` exists
  (`CosmeticsManager.cs:183`) and would assert, but nothing in the tree calls it. A duplicated id silently
  overwrites in the lookup (`CosmeticsManager.cs:177`) while *both* copies stay in the list.
- **The load path is hard-coded to the Native module.** Nothing scans other modules' `ModuleData`, so a mod
  shipping its own `mpcosmetics.xml` must call the public `LoadFromXml` itself.

## How to use

**Getting one.** There is nothing to instantiate — the class is static and self-loading. Use
`GetCosmeticElement(id)` for a single lookup and `CosmeticElementsList` when you need to enumerate or cast
to a specific subclass.

```csharp
using TaleWorlds.MountAndBlade.Diamond.Cosmetics;
using TaleWorlds.MountAndBlade.Diamond.Cosmetics.CosmeticTypes;

public class CosmeticPreview
{
    public string Describe(string cosmeticId)
    {
        if (Campaign.Current == null) { return null; }

        // First access runs the static constructor and parses mpcosmetics.xml
        // (CosmeticsManager.cs:15) - do it once, not per frame.
        CosmeticElement element = CosmeticsManager.GetCosmeticElement(cosmeticId);
        if (element == null) { return "unknown cosmetic " + cosmeticId; }

        // Only Clothing produces a rich element; a Frame is the base CosmeticElement
        // (CosmeticsManager.cs:132).
        var clothing = element as ClothingCosmeticElement;
        return clothing != null
            ? clothing.Id + " replaces " + string.Join(", ", clothing.ReplaceItemsId)
            : element.Id + " costs " + element.Cost;
    }
}
```

**The mistake that bites.** Shipping a hand-written `mpcosmetics.xml` with a missing or non-numeric
attribute. `Attributes.ItemOf("id").Value` and `int.Parse` have no guards
(`CosmeticsManager.cs:61`, `CosmeticsManager.cs:102`), so a single malformed row throws out of the static
constructor, every later access to any `CosmeticsManager` member fails with a `TypeInitializationException`,
and the cosmetics UI dies with an error that names no row of your file. Validate the XML before shipping.



## Key Properties

| Name | Signature |
|------|-----------|
| `CosmeticElementsList` | `public static MBReadOnlyList<CosmeticElement> CosmeticElementsList { get; }` |

## Key Methods

### GetCosmeticElement
`public static CosmeticElement GetCosmeticElement(string cosmeticId)`

**Purpose:** Reads and returns the cosmetic element value held by the this instance.

```csharp
// Static call; no instance required
CosmeticsManager.GetCosmeticElement("example");
```

### LoadFromXml
`public static void LoadFromXml(string path)`

**Purpose:** Reads from xml from persistent storage or a stream.

```csharp
// Static call; no instance required
CosmeticsManager.LoadFromXml("example");
```

## Usage Example

```csharp
var manager = CosmeticsManager.Current;
```

## See Also

- [Area Index](../)
- [ClanWorkshopTypeVisualBrushWidget](../ClanWorkshopTypeVisualBrushWidget)
- [CustomGameBannedPlayerManager](../CustomGameBannedPlayerManager)
- [CommunityGameJoinData](../CommunityGameJoinData)
- [中文页面](../../../../zh/api/mission-ext/CosmeticsManager)