---
title: "MapConversationMission"
description: "Auto-generated class reference for MapConversationMission."
---
# MapConversationMission

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public class MapConversationMission : ICampaignMission`
**Base:** `ICampaignMission`
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Map/MapConversationView.cs`

## Overview

`MapConversationMission` lives in `SandBox.View.Map` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.View.Map` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ConversationTableau` | `public MapConversationTableau ConversationTableau { get; }` |

## Key Methods

### ConversationPlayArgs
`public struct ConversationPlayArgs(string idleActionId, string idleFaceAnimId, string reactionId, string reactionFaceAnimId, string soundPath)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MapConversationMission from the subsystem API first
MapConversationMission mapConversationMission = ...;
var result = mapConversationMission.ConversationPlayArgs("example", "example", "example", "example", "example");
```

### SetConversationTableau
`public void SetConversationTableau(MapConversationTableau tableau)`

**Purpose:** Assigns a new value to `conversation tableau` and updates the object's internal state.

```csharp
// Obtain an instance of MapConversationMission from the subsystem API first
MapConversationMission mapConversationMission = ...;
mapConversationMission.SetConversationTableau(tableau);
```

### Tick
`public void Tick(float dt)`

**Purpose:** Advances the current object's state by one frame or update cycle.

```csharp
// Obtain an instance of MapConversationMission from the subsystem API first
MapConversationMission mapConversationMission = ...;
mapConversationMission.Tick(0);
```

### OnFinalize
`public void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Obtain an instance of MapConversationMission from the subsystem API first
MapConversationMission mapConversationMission = ...;
mapConversationMission.OnFinalize();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MapConversationMission mapConversationMission = ...;
mapConversationMission.ConversationPlayArgs("example", "example", "example", "example", "example");
```

## See Also

- [Area Index](../)