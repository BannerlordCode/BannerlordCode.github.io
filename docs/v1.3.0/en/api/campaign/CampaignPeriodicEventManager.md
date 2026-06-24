<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CampaignPeriodicEventManager`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Creates a new `periodic event` instance or object.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

## Usage Example

```csharp
var manager = CampaignPeriodicEventManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)