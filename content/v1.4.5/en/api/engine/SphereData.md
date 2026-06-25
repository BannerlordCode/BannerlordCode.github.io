---
title: "SphereData"
description: "Auto-generated class reference for SphereData."
---
# SphereData

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public struct SphereData`
**Base:** none
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/SphereData.cs`

## Overview

`SphereData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `SphereData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### SphereData
`public struct SphereData(float radius, Vec3 origin)`

**Purpose:** **Purpose:** Executes the SphereData logic.

```csharp
// Obtain an instance of SphereData from the subsystem API first
SphereData sphereData = ...;
var result = sphereData.SphereData(0, origin);
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
SphereData entry = ...;
```

## See Also

- [Area Index](../)