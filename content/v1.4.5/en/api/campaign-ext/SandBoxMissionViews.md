---
title: "SandBoxMissionViews"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SandBoxMissionViews`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SandBoxMissionViews

**Namespace:** SandBox.View.Missions
**Module:** SandBox.View
**Type:** `public class SandBoxMissionViews`
**Area:** campaign-ext

## Overview

`SandBoxMissionViews` lives in `SandBox.View.Missions`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `SandBox.View.Missions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OpenTownCenterMission
`public static MissionView OpenTownCenterMission(Mission mission)`

**Purpose:** Handles logic related to `open town center mission`.

### OpenFacialAnimationTest
`public static MissionView OpenFacialAnimationTest(Mission mission)`

**Purpose:** Handles logic related to `open facial animation test`.

### OpenTavernMission
`public static MissionView OpenTavernMission(Mission mission)`

**Purpose:** Handles logic related to `open tavern mission`.

### OpenPrisonBreakMission
`public static MissionView OpenPrisonBreakMission(Mission mission)`

**Purpose:** Handles logic related to `open prison break mission`.

### OpenVillageMission
`public static MissionView OpenVillageMission(Mission mission)`

**Purpose:** Handles logic related to `open village mission`.

### OpenRetirementMission
`public static MissionView OpenRetirementMission(Mission mission)`

**Purpose:** Handles logic related to `open retirement mission`.

### OpenArenaStartMission
`public static MissionView OpenArenaStartMission(Mission mission)`

**Purpose:** Handles logic related to `open arena start mission`.

### OpenArenaDuelMission
`public static MissionView OpenArenaDuelMission(Mission mission)`

**Purpose:** Handles logic related to `open arena duel mission`.

### OpenTownMerchantMission
`public static MissionView OpenTownMerchantMission(Mission mission)`

**Purpose:** Handles logic related to `open town merchant mission`.

### OpenAlleyMission
`public static MissionView OpenAlleyMission(Mission mission)`

**Purpose:** Handles logic related to `open alley mission`.

### OpenSneakTeam3Mission
`public static MissionView OpenSneakTeam3Mission(Mission mission)`

**Purpose:** Handles logic related to `open sneak team3 mission`.

### OpenSimpleMountedPlayerMission
`public static MissionView OpenSimpleMountedPlayerMission(Mission mission)`

**Purpose:** Handles logic related to `open simple mounted player mission`.

### OpenBattleMission
`public static MissionView OpenBattleMission(Mission mission)`

**Purpose:** Handles logic related to `open battle mission`.

### OpenAlleyFightMission
`public static MissionView OpenAlleyFightMission(Mission mission)`

**Purpose:** Handles logic related to `open alley fight mission`.

### OpenHideoutBattleMission
`public static MissionView OpenHideoutBattleMission(Mission mission)`

**Purpose:** Handles logic related to `open hideout battle mission`.

### OpenHideoutAmbushMission
`public static MissionView OpenHideoutAmbushMission(Mission mission)`

**Purpose:** Handles logic related to `open hideout ambush mission`.

### OpenBattleMissionWhileEnteringSettlement
`public static MissionView OpenBattleMissionWhileEnteringSettlement(Mission mission)`

**Purpose:** Handles logic related to `open battle mission while entering settlement`.

### OpenCombatMissionWithDialogue
`public static MissionView OpenCombatMissionWithDialogue(Mission mission)`

**Purpose:** Handles logic related to `open combat mission with dialogue`.

### OpenTestSiegeEngineMission
`public static MissionView OpenTestSiegeEngineMission(Mission mission)`

**Purpose:** Handles logic related to `open test siege engine mission`.

### OpenCustomCameraMission
`public static MissionView OpenCustomCameraMission(Mission mission)`

**Purpose:** Handles logic related to `open custom camera mission`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
SandBoxMissionViews.OpenTownCenterMission(mission);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
