---
title: "HitParticleResultData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HitParticleResultData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# HitParticleResultData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct HitParticleResultData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/HitParticleResultData.cs`

## Overview

`HitParticleResultData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `HitParticleResultData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### Reset
`public void Reset()`

**Purpose:** Resets `reset` to its initial state.

## Usage Example

```csharp
var value = new HitParticleResultData();
```

## See Also

- [Complete Class Catalog](../catalog)