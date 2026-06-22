<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CampaignPeriodicEventManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CampaignPeriodicEventManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CampaignPeriodicEventManager`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/CampaignPeriodicEventManager.cs`

## Overview

`CampaignPeriodicEventManager` is a manager (often reached via a Current singleton or Mission.Current). Use it to access/modify its managed subsystem.

## Key Methods

### CreatePeriodicEvent
```csharp
public static MBCampaignEvent CreatePeriodicEvent(CampaignTime triggerPeriod, CampaignTime initialWait)
```

### ToString
```csharp
public override string ToString()
```

## Usage Example

```csharp
// Typical usage of CampaignPeriodicEventManager (Manager)
CampaignPeriodicEventManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)