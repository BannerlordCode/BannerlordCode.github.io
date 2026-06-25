---
title: "ThumbnailCreationData"
description: "Auto-generated class reference for ThumbnailCreationData."
---
# ThumbnailCreationData

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class ThumbnailCreationData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/ThumbnailCreationData.cs`

## Overview

`ThumbnailCreationData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `ThumbnailCreationData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `RenderId` | `public string RenderId { get; set; }` |

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
ThumbnailCreationData instance = ...;
```

## See Also

- [Area Index](../)