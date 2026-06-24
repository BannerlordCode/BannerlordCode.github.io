<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OtherMissionViews`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# OtherMissionViews

**Namespace:** SandBox.View.Missions
**Module:** SandBox.View
**Type:** `public class OtherMissionViews`
**Area:** campaign-ext

## Overview

`OtherMissionViews` lives in `SandBox.View.Missions`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `SandBox.View.Missions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OpenBattleChallengeMission
`public static MissionView OpenBattleChallengeMission(Mission mission)`

**Purpose:** Handles logic related to `open battle challenge mission`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
OtherMissionViews.OpenBattleChallengeMission(mission);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
