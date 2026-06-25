---
title: "IIncidentManager"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IIncidentManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IIncidentManager

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `class`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/IIncidentManager.cs`

## Overview

`IIncidentManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `IIncidentManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
IIncidentManager implementation = GetIncidentManagerImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)