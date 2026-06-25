---
title: "MapPatchData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapPatchData`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MapPatchData

**Namespace:** TaleWorlds.CampaignSystem.Map
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct MapPatchData`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Map/MapPatchData.cs`

## Overview

`MapPatchData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `MapPatchData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var value = new MapPatchData();
```

## See Also

- [Complete Class Catalog](../catalog)