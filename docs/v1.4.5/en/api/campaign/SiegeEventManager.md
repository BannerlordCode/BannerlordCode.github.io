<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SiegeEventManager`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SiegeEventManager

**Namespace:** TaleWorlds.CampaignSystem.Siege
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SiegeEventManager`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Siege/SiegeEventManager.cs`

## Overview

`SiegeEventManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `SiegeEventManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### StartSiegeEvent
`public SiegeEvent StartSiegeEvent(Settlement settlement, MobileParty besiegerParty)`

**Purpose:** Handles logic related to `start siege event`.

### Tick
`public void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

### OnAfterLoad
`public void OnAfterLoad()`

**Purpose:** Called when the `after load` event is raised.

## Usage Example

```csharp
var manager = SiegeEventManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)