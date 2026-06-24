<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionAgentStatusUIHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionAgentStatusUIHandler

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionAgentStatusUIHandler : MissionBattleUIBaseView`
**Base:** `MissionBattleUIBaseView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionAgentStatusUIHandler.cs`

## Overview

`MissionAgentStatusUIHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionAgentStatusUIHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new MissionAgentStatusUIHandler());
```

## See Also

- [Complete Class Catalog](../catalog)