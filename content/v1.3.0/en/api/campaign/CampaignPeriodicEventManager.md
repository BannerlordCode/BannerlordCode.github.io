---
title: "CampaignPeriodicEventManager"
description: "Auto-generated class reference for CampaignPeriodicEventManager."
---
# CampaignPeriodicEventManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CampaignPeriodicEventManager`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/CampaignPeriodicEventManager.cs`

## Overview

`CampaignPeriodicEventManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `CampaignPeriodicEventManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CreatePeriodicEvent
`public static MBCampaignEvent CreatePeriodicEvent(CampaignTime triggerPeriod, CampaignTime initialWait)`

**Purpose:** Constructs a new `periodic event` entity and returns it to the caller.

```csharp
// Static call; no instance required
CampaignPeriodicEventManager.CreatePeriodicEvent(triggerPeriod, initialWait);
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the current object.

```csharp
// Obtain an instance of CampaignPeriodicEventManager from the subsystem API first
CampaignPeriodicEventManager campaignPeriodicEventManager = ...;
var result = campaignPeriodicEventManager.ToString();
```

## Usage Example

```csharp
var manager = CampaignPeriodicEventManager.Current;
```

## See Also

- [Area Index](../)