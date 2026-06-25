---
title: "BannerIconData"
description: "Auto-generated class reference for BannerIconData."
---
# BannerIconData

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public struct BannerIconData`
**Base:** none
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/BannerIconData.cs`

## Overview

`BannerIconData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `BannerIconData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaterialName` | `public string MaterialName { get; }` |
| `TextureIndex` | `public int TextureIndex { get; }` |

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
BannerIconData entry = ...;
```

## See Also

- [Area Index](../)