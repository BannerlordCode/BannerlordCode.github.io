---
title: "CharacterThumbnailCreationData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterThumbnailCreationData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CharacterThumbnailCreationData

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CharacterThumbnailCreationData : ThumbnailCreationData`
**Base:** `ThumbnailCreationData`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails/CharacterThumbnailCreationData.cs`

## Overview

`CharacterThumbnailCreationData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `CharacterThumbnailCreationData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `CharacterCode` | `public CharacterCode CharacterCode { get; }` |
| `IsBig` | `public bool IsBig { get; }` |
| `CustomSizeX` | `public int CustomSizeX { get; }` |
| `CustomSizeY` | `public int CustomSizeY { get; }` |

## Usage Example

```csharp
var value = new CharacterThumbnailCreationData();
```

## See Also

- [Complete Class Catalog](../catalog)