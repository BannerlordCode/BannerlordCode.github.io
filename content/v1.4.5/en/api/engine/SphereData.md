---
title: "SphereData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SphereData`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SphereData

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public struct SphereData`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Engine/TaleWorlds.Engine/SphereData.cs`

## Overview

`SphereData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `SphereData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### SphereData
`public struct SphereData(float radius, Vec3 origin)`

**Purpose:** Handles logic related to `sphere data`.

## Usage Example

```csharp
var value = new SphereData();
```

## See Also

- [Complete Class Catalog](../catalog)