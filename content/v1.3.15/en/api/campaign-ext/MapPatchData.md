---
title: "MapPatchData"
description: "Auto-generated class reference for MapPatchData."
---
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
// This data object is usually returned by campaign/mission APIs
MapPatchData entry = ...;
```

## See Also

- [Area Index](../)