---
title: "SphereData"
description: "Auto-generated class reference for SphereData."
---
# SphereData

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public struct SphereData`
**Base:** none
**File:** `TaleWorlds.Engine/SphereData.cs`

## Overview

`SphereData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `SphereData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
SphereData entry = ...;
```

## See Also

- [Area Index](../)