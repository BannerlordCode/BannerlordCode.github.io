<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IAgentBehaviorManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# IAgentBehaviorManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `class`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/IAgentBehaviorManager.cs`

## Overview

`IAgentBehaviorManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `IAgentBehaviorManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
IAgentBehaviorManager implementation = GetAgentBehaviorManagerImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)