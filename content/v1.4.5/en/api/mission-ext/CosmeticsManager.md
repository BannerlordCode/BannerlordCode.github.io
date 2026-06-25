---
title: "CosmeticsManager"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CosmeticsManager`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CosmeticsManager

**Namespace:** TaleWorlds.MountAndBlade.Diamond.Cosmetics
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class CosmeticsManager`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond.Cosmetics/CosmeticsManager.cs`

## Overview

`CosmeticsManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `CosmeticsManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetCosmeticElement
`public static CosmeticElement GetCosmeticElement(string cosmeticId)`

**Purpose:** Gets the current value of `cosmetic element`.

### LoadFromXml
`public static void LoadFromXml(string path)`

**Purpose:** Loads `from xml` data.

## Usage Example

```csharp
var manager = CosmeticsManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)