---
title: "CapsuleData"
description: "Auto-generated class reference for CapsuleData."
---
# CapsuleData

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public struct CapsuleData`
**Base:** none
**File:** `TaleWorlds.Engine/CapsuleData.cs`

## Overview

`CapsuleData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `CapsuleData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `P1` | `public Vec3 P1 { get; set; }` |
| `P2` | `public Vec3 P2 { get; set; }` |
| `Radius` | `public float Radius { get; set; }` |

## Key Methods

### GetBoxMinMax
`public ValueTuple<Vec3, Vec3> GetBoxMinMax()`

**Purpose:** Reads and returns the `box min max` value held by the current object.

```csharp
// Obtain an instance of CapsuleData from the subsystem API first
CapsuleData capsuleData = ...;
var result = capsuleData.GetBoxMinMax();
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
CapsuleData entry = ...;
```

## See Also

- [Area Index](../)