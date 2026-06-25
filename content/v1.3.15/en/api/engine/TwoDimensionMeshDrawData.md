---
title: "TwoDimensionMeshDrawData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TwoDimensionMeshDrawData`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TwoDimensionMeshDrawData

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public struct TwoDimensionMeshDrawData`
**Base:** none
**File:** `TaleWorlds.Engine/TwoDimensionMeshDrawData.cs`

## Overview

`TwoDimensionMeshDrawData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `TwoDimensionMeshDrawData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var value = new TwoDimensionMeshDrawData();
```

## See Also

- [Complete Class Catalog](../catalog)