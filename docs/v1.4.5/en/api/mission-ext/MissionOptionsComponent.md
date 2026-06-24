<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionOptionsComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionOptionsComponent

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionOptionsComponent : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Source.Missions/MissionOptionsComponent.cs`

## Overview

`MissionOptionsComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `MissionOptionsComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnAddOptionsUIHandler
`public void OnAddOptionsUIHandler()`

**Purpose:** Called when the `add options u i handler` event is raised.

## Usage Example

```csharp
var component = agent.GetComponent<MissionOptionsComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)