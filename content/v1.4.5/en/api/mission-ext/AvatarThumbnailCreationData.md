---
title: "AvatarThumbnailCreationData"
description: "Auto-generated class reference for AvatarThumbnailCreationData."
---
# AvatarThumbnailCreationData

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AvatarThumbnailCreationData : ThumbnailCreationData`
**Base:** `ThumbnailCreationData`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails/AvatarThumbnailCreationData.cs`

## Overview

`AvatarThumbnailCreationData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `AvatarThumbnailCreationData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `AvatarID` | `public string AvatarID { get; }` |
| `AvatarBytes` | `public byte AvatarBytes { get; }` |
| `Width` | `public uint Width { get; }` |
| `Height` | `public uint Height { get; }` |
| `ImageType` | `public ImageType ImageType { get; }` |

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
AvatarThumbnailCreationData entry = ...;
```

## See Also

- [Area Index](../)