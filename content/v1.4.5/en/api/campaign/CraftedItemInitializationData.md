---
title: "CraftedItemInitializationData"
description: "Auto-generated class reference for CraftedItemInitializationData."
---
# CraftedItemInitializationData

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `internal class CraftedItemInitializationData`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/CraftingCampaignBehavior.cs`

## Overview

`CraftedItemInitializationData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `CraftedItemInitializationData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
CraftedItemInitializationData entry = ...;
```

## See Also

- [Area Index](../)