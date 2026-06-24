<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MusicBattleMissionView`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MusicBattleMissionView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Sound
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MusicBattleMissionView : MissionView, IMusicHandler`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Sound/MusicBattleMissionView.cs`

## Overview

`MusicBattleMissionView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MusicBattleMissionView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Called when the `mission screen finalize` event is raised.

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Called when the `agent removed` event is raised.

## Usage Example

```csharp
var view = new MusicBattleMissionView();
```

## See Also

- [Complete Class Catalog](../catalog)