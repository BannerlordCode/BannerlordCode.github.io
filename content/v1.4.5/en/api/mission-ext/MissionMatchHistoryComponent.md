---
title: "MissionMatchHistoryComponent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionMatchHistoryComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionMatchHistoryComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMatchHistoryComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/MissionMatchHistoryComponent.cs`

## Overview

`MissionMatchHistoryComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `MissionMatchHistoryComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CreateIfConditionsAreMet
`public static MissionMatchHistoryComponent CreateIfConditionsAreMet()`

**Purpose:** Creates a new `if conditions are met` instance or object.

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Called when the `remove behavior` event is raised.

## Usage Example

```csharp
var component = agent.GetComponent<MissionMatchHistoryComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)