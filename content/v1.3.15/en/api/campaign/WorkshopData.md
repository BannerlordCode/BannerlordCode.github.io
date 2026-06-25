---
title: "WorkshopData"
description: "Auto-generated class reference for WorkshopData."
---
# WorkshopData

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `internal class WorkshopData`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/WorkshopsCampaignBehavior.cs`

## Overview

`WorkshopData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `WorkshopData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the current object.

```csharp
// Obtain an instance of WorkshopData from the subsystem API first
WorkshopData workshopData = ...;
var result = workshopData.ToString();
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
WorkshopData entry = ...;
```

## See Also

- [Area Index](../)