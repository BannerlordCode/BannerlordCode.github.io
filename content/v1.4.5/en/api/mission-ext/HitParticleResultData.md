---
title: "HitParticleResultData"
description: "Auto-generated class reference for HitParticleResultData."
---
# HitParticleResultData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct HitParticleResultData`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/HitParticleResultData.cs`

## Overview

`HitParticleResultData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `HitParticleResultData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### Reset
`public void Reset()`

**Purpose:** **Purpose:** Returns the this instance to its default or initial condition.

```csharp
// Obtain an instance of HitParticleResultData from the subsystem API first
HitParticleResultData hitParticleResultData = ...;
hitParticleResultData.Reset();
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
HitParticleResultData entry = ...;
```

## See Also

- [Area Index](../)