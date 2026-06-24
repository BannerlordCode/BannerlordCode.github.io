<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ICustomSystemManager`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ICustomSystemManager

**Namespace:** TaleWorlds.CampaignSystem.Handlers
**Module:** TaleWorlds.CampaignSystem
**Type:** `class`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Handlers/ICustomSystemManager.cs`

## Overview

`ICustomSystemManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `ICustomSystemManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
ICustomSystemManager implementation = GetCustomSystemManagerImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)