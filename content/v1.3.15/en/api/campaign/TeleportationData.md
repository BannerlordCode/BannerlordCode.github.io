---
title: "TeleportationData"
description: "Auto-generated class reference for TeleportationData."
---
# TeleportationData

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `internal class TeleportationData`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/TeleportationCampaignBehavior.cs`

## Overview

`TeleportationData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `TeleportationData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
TeleportationData entry = ...;
```

## See Also

- [Area Index](../)