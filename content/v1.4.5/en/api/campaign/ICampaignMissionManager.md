---
title: "ICampaignMissionManager"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ICampaignMissionManager`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ICampaignMissionManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public interface ICampaignMissionManager`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CampaignMission.cs`

## Overview

`ICampaignMissionManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `ICampaignMissionManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
ICampaignMissionManager implementation = GetCampaignMissionManagerImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)