---
title: "FleeingData"
description: "Auto-generated class reference for FleeingData."
---
# FleeingData

**Namespace:** TaleWorlds.CampaignSystem.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class FleeingData`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Party/MobilePartyAi.cs`

## Overview

`FleeingData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `FleeingData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### Clear
`public void Clear()`

**Purpose:** Removes all content from the this instance.

```csharp
// Obtain an instance of FleeingData from the subsystem API first
FleeingData fleeingData = ...;
fleeingData.Clear();
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
FleeingData entry = ...;
```

## See Also

- [Area Index](../)