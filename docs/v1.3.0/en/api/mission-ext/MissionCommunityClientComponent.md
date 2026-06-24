<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionCommunityClientComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionCommunityClientComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionCommunityClientComponent : MissionLobbyComponent`
**Base:** `MissionLobbyComponent`
**File:** `TaleWorlds.MountAndBlade/MissionCommunityClientComponent.cs`

## Overview

`MissionCommunityClientComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `MissionCommunityClientComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

### SetServerEndingBeforeClientLoaded
`public void SetServerEndingBeforeClientLoaded(bool isServerEndingBeforeClientLoaded)`

**Purpose:** Sets the value or state of `server ending before client loaded`.

### QuitMission
`public override void QuitMission()`

**Purpose:** Handles logic related to `quit mission`.

## Usage Example

```csharp
var component = agent.GetComponent<MissionCommunityClientComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)