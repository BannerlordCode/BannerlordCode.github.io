---
title: "BannerData"
description: "Auto-generated class reference for BannerData."
---
# BannerData

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class BannerData`
**Base:** none
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/BannerData.cs`

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

**Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of BannerData from the subsystem API first
BannerData bannerData = ...;
var result = bannerData.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Returns a hash code for the this instance, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of BannerData from the subsystem API first
BannerData bannerData = ...;
var result = bannerData.GetHashCode();
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
BannerData entry = ...;
```

## See Also

- [Area Index](../)