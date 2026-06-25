---
title: "LocatableSearchData"
description: "Auto-generated class reference for LocatableSearchData."
---
# LocatableSearchData

**Namespace:** TaleWorlds.CampaignSystem.Map
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct LocatableSearchData<T>`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Map/LocatableSearchData.cs`

## Overview

`LocatableSearchData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `LocatableSearchData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
LocatableSearchData entry = ...;
```

## See Also

- [Area Index](../)