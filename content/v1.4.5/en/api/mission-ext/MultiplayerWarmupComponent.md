---
title: "MultiplayerWarmupComponent"
description: "Auto-generated class reference for MultiplayerWarmupComponent."
---
# MultiplayerWarmupComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerWarmupComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MultiplayerWarmupComponent.cs`

## Overview

`MultiplayerWarmupComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `MultiplayerWarmupComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the `behavior initialize` event is raised.

```csharp
// Obtain an instance of MultiplayerWarmupComponent from the subsystem API first
MultiplayerWarmupComponent multiplayerWarmupComponent = ...;
multiplayerWarmupComponent.OnBehaviorInitialize();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MultiplayerWarmupComponent from the subsystem API first
MultiplayerWarmupComponent multiplayerWarmupComponent = ...;
multiplayerWarmupComponent.AfterStart();
```

### CheckForWarmupProgressEnd
`public bool CheckForWarmupProgressEnd()`

**Purpose:** Verifies whether `for warmup progress end` holds true for the current object.

```csharp
// Obtain an instance of MultiplayerWarmupComponent from the subsystem API first
MultiplayerWarmupComponent multiplayerWarmupComponent = ...;
var result = multiplayerWarmupComponent.CheckForWarmupProgressEnd();
```

### OnPreDisplayMissionTick
`public override void OnPreDisplayMissionTick(float dt)`

**Purpose:** Invoked when the `pre display mission tick` event is raised.

```csharp
// Obtain an instance of MultiplayerWarmupComponent from the subsystem API first
MultiplayerWarmupComponent multiplayerWarmupComponent = ...;
multiplayerWarmupComponent.OnPreDisplayMissionTick(0);
```

### EndWarmupProgress
`public void EndWarmupProgress()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MultiplayerWarmupComponent from the subsystem API first
MultiplayerWarmupComponent multiplayerWarmupComponent = ...;
multiplayerWarmupComponent.EndWarmupProgress();
```

### CanMatchStartAfterWarmup
`public bool CanMatchStartAfterWarmup()`

**Purpose:** Checks whether the current object meets the preconditions for `match start after warmup`.

```csharp
// Obtain an instance of MultiplayerWarmupComponent from the subsystem API first
MultiplayerWarmupComponent multiplayerWarmupComponent = ...;
var result = multiplayerWarmupComponent.CanMatchStartAfterWarmup();
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Invoked when the `remove behavior` event is raised.

```csharp
// Obtain an instance of MultiplayerWarmupComponent from the subsystem API first
MultiplayerWarmupComponent multiplayerWarmupComponent = ...;
multiplayerWarmupComponent.OnRemoveBehavior();
```

### CommandEndWarmup
`public static string CommandEndWarmup(List<string> strings)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MultiplayerWarmupComponent.CommandEndWarmup(strings);
```

## Usage Example

```csharp
var component = agent.GetComponent<MultiplayerWarmupComponent>();
```

## See Also

- [Area Index](../)