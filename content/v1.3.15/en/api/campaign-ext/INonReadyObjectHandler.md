---
title: "INonReadyObjectHandler"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `INonReadyObjectHandler`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# INonReadyObjectHandler

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `class`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/INonReadyObjectHandler.cs`

## Overview

`INonReadyObjectHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `INonReadyObjectHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
INonReadyObjectHandler implementation = GetNonReadyObjectHandlerImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)