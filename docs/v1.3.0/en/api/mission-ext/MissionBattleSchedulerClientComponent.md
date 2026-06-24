<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionBattleSchedulerClientComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionBattleSchedulerClientComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionBattleSchedulerClientComponent : MissionLobbyComponent`
**Base:** `MissionLobbyComponent`
**File:** `TaleWorlds.MountAndBlade/MissionBattleSchedulerClientComponent.cs`

## Overview

`MissionBattleSchedulerClientComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `MissionBattleSchedulerClientComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### QuitMission
`public override void QuitMission()`

**Purpose:** Handles logic related to `quit mission`.

## Usage Example

```csharp
var component = agent.GetComponent<MissionBattleSchedulerClientComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)