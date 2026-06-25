---
title: "BehaviorSaveData"
description: "Auto-generated class reference for BehaviorSaveData."
---
# BehaviorSaveData

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `internal class BehaviorSaveData : IDataStore`
**Base:** `IDataStore`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CampaignBehaviorDataStore.cs`

## Overview

`BehaviorSaveData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `BehaviorSaveData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
BehaviorSaveData entry = ...;
```

## See Also

- [Area Index](../)