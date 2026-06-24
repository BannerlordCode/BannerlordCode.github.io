<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CampaignSiegeStateHandler`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CampaignSiegeStateHandler

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class CampaignSiegeStateHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/CampaignSiegeStateHandler.cs`

## Overview

`CampaignSiegeStateHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `CampaignSiegeStateHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsSiege` | `public bool IsSiege { get; }` |
| `IsSallyOut` | `public bool IsSallyOut { get; }` |
| `Settlement` | `public Settlement Settlement { get; }` |

## Key Methods

### OnRetreatMission
`public override void OnRetreatMission()`

**Purpose:** Called when the `retreat mission` event is raised.

### OnMissionResultReady
`public override void OnMissionResultReady(MissionResult missionResult)`

**Purpose:** Called when the `mission result ready` event is raised.

### OnSurrenderMission
`public override void OnSurrenderMission()`

**Purpose:** Called when the `surrender mission` event is raised.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new CampaignSiegeStateHandler());
```

## See Also

- [Complete Class Catalog](../catalog)