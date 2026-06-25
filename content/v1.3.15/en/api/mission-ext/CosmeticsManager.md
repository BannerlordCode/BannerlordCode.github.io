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

`CosmeticsManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `CosmeticsManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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