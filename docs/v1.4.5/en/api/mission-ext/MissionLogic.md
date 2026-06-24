<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionLogic`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionLogic : MissionBehavior`
**Base:** `MissionBehavior`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionLogic.cs`

## Overview

`MissionLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `MissionLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnEndMissionRequest
`public virtual InquiryData OnEndMissionRequest(out bool canLeave)`

**Purpose:** Called when the `end mission request` event is raised.

### MissionEnded
`public virtual bool MissionEnded(ref MissionResult missionResult)`

**Purpose:** Handles logic related to `mission ended`.

### OnBattleEnded
`public virtual void OnBattleEnded()`

**Purpose:** Called when the `battle ended` event is raised.

### ShowBattleResults
`public virtual void ShowBattleResults()`

**Purpose:** Handles logic related to `show battle results`.

### OnRetreatMission
`public virtual void OnRetreatMission()`

**Purpose:** Called when the `retreat mission` event is raised.

### OnSurrenderMission
`public virtual void OnSurrenderMission()`

**Purpose:** Called when the `surrender mission` event is raised.

### OnAutoDeployTeam
`public virtual void OnAutoDeployTeam(Team team)`

**Purpose:** Called when the `auto deploy team` event is raised.

### GetExtraEquipmentElementsForCharacter
`public virtual List<EquipmentElement> GetExtraEquipmentElementsForCharacter(BasicCharacterObject character, bool getAllEquipments = false)`

**Purpose:** Gets the current value of `extra equipment elements for character`.

### OnMissionResultReady
`public virtual void OnMissionResultReady(MissionResult missionResult)`

**Purpose:** Called when the `mission result ready` event is raised.

## Usage Example

```csharp
var implementation = new CustomMissionLogic();
```

## See Also

- [Complete Class Catalog](../catalog)