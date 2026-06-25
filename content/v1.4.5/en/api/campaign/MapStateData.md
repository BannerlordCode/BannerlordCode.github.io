---
title: "MapStateData"
description: "Auto-generated class reference for MapStateData."
---
# MapStateData

**Namespace:** TaleWorlds.CampaignSystem.GameState
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MapStateData`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameState/MapStateData.cs`

## Overview

`MapStateData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `MapStateData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
MapStateData entry = ...;
```

## See Also

- [Area Index](../)