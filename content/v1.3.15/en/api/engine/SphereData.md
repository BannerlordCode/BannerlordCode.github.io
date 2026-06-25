---
title: "SphereData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SphereData`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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
var value = new SphereData();
```

## See Also

- [Complete Class Catalog](../catalog)