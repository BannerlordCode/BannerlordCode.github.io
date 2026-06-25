---
title: "BannerData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BannerData`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BannerData

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class BannerData`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/BannerData.cs`

## Overview

`BannerData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `BannerData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MeshId` | `public int MeshId { get; set; }` |
| `ColorId` | `public int ColorId { get; set; }` |
| `ColorId2` | `public int ColorId2 { get; set; }` |
| `Size` | `public Vec2 Size { get; set; }` |
| `Position` | `public Vec2 Position { get; set; }` |
| `DrawStroke` | `public bool DrawStroke { get; set; }` |
| `Mirror` | `public bool Mirror { get; set; }` |
| `RotationValue` | `public float RotationValue { get; set; }` |

## Key Methods

### Equals
`public override bool Equals(object obj)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

## Usage Example

```csharp
var value = new BannerData();
```

## See Also

- [Complete Class Catalog](../catalog)