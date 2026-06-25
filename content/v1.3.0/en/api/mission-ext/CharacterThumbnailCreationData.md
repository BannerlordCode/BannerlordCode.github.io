---
title: "CharacterThumbnailCreationData"
description: "Auto-generated class reference for CharacterThumbnailCreationData."
---
# CharacterThumbnailCreationData

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CharacterThumbnailCreationData : ThumbnailCreationData`
**Base:** `ThumbnailCreationData`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/CharacterThumbnailCreationData.cs`

## Overview

`CharacterThumbnailCreationData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `CharacterThumbnailCreationData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `CharacterCode` | `public CharacterCode CharacterCode { get; }` |
| `SetAction` | `public Action<Texture> SetAction { get; }` |
| `IsBig` | `public bool IsBig { get; }` |
| `CustomSizeX` | `public int CustomSizeX { get; }` |
| `CustomSizeY` | `public int CustomSizeY { get; }` |

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
CharacterThumbnailCreationData entry = ...;
```

## See Also

- [Area Index](../)