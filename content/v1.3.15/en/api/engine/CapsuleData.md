---
title: "CapsuleData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CapsuleData`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Gets the current value of `box min max`.

## Usage Example

```csharp
var value = new CapsuleData();
```

## See Also

- [Complete Class Catalog](../catalog)