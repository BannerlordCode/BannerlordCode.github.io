---
title: "IEducationLogic"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IEducationLogic`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# IEducationLogic

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `class`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/IEducationLogic.cs`

## Overview

`IEducationLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `IEducationLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
IEducationLogic implementation = GetEducationLogicImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)