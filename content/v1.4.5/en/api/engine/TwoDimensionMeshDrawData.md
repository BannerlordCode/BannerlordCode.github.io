---
title: "TwoDimensionMeshDrawData"
description: "Auto-generated class reference for TwoDimensionMeshDrawData."
---
# TwoDimensionMeshDrawData

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public struct TwoDimensionMeshDrawData`
**Base:** none
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/TwoDimensionMeshDrawData.cs`

## Overview

`TwoDimensionMeshDrawData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `TwoDimensionMeshDrawData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
TwoDimensionMeshDrawData entry = ...;
```

## See Also

- [Area Index](../)