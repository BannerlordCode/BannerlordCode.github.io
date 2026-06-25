---
title: "MultiplayerWarmupComponent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerWarmupComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerWarmupComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerWarmupComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MultiplayerWarmupComponent.cs`

## Overview

`MultiplayerWarmupComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `MultiplayerWarmupComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### CheckForWarmupProgressEnd
`public bool CheckForWarmupProgressEnd()`

**Purpose:** Handles logic related to `check for warmup progress end`.

### OnPreDisplayMissionTick
`public override void OnPreDisplayMissionTick(float dt)`

**Purpose:** Called when the `pre display mission tick` event is raised.

### EndWarmupProgress
`public void EndWarmupProgress()`

**Purpose:** Handles logic related to `end warmup progress`.

### CanMatchStartAfterWarmup
`public bool CanMatchStartAfterWarmup()`

**Purpose:** Checks whether the current object can `match start after warmup`.

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Called when the `remove behavior` event is raised.

### CommandEndWarmup
`public static string CommandEndWarmup(List<string> strings)`

**Purpose:** Handles logic related to `command end warmup`.

## Usage Example

```csharp
var component = agent.GetComponent<MultiplayerWarmupComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)