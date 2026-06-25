---
title: "VillageEventOptionData"
description: "Auto-generated class reference for VillageEventOptionData."
---
# VillageEventOptionData

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct VillageEventOptionData`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Issues/RevenueFarmingIssueBehavior.cs`

## Overview

`VillageEventOptionData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `VillageEventOptionData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
VillageEventOptionData entry = ...;
```

## See Also

- [Area Index](../)