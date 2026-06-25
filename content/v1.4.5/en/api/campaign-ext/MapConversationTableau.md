---
title: "MapConversationTableau"
description: "Auto-generated class reference for MapConversationTableau."
---
# MapConversationTableau

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public class MapConversationTableau`
**Base:** none
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Map/MapConversationTableau.cs`

## Overview

`MapConversationTableau` lives in `SandBox.View.Map` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.View.Map` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Texture` | `public Texture Texture { get; }` |

## Key Methods

### SetEnabled
`public void SetEnabled(bool enabled)`

**Purpose:** **Purpose:** Assigns a new value to enabled and updates the object's internal state.

```csharp
// Obtain an instance of MapConversationTableau from the subsystem API first
MapConversationTableau mapConversationTableau = ...;
mapConversationTableau.SetEnabled(false);
```

### SetData
`public void SetData(object data)`

**Purpose:** **Purpose:** Assigns a new value to data and updates the object's internal state.

```csharp
// Obtain an instance of MapConversationTableau from the subsystem API first
MapConversationTableau mapConversationTableau = ...;
mapConversationTableau.SetData(data);
```

### SetTargetSize
`public void SetTargetSize(int width, int height)`

**Purpose:** **Purpose:** Assigns a new value to target size and updates the object's internal state.

```csharp
// Obtain an instance of MapConversationTableau from the subsystem API first
MapConversationTableau mapConversationTableau = ...;
mapConversationTableau.SetTargetSize(0, 0);
```

### OnFinalize
`public void OnFinalize(bool clearNextFrame)`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of MapConversationTableau from the subsystem API first
MapConversationTableau mapConversationTableau = ...;
mapConversationTableau.OnFinalize(false);
```

### OnTick
`public void OnTick(float dt)`

**Purpose:** **Purpose:** Invoked when the tick event is raised.

```csharp
// Obtain an instance of MapConversationTableau from the subsystem API first
MapConversationTableau mapConversationTableau = ...;
mapConversationTableau.OnTick(0);
```

### OnConversationPlay
`public void OnConversationPlay(string idleActionId, string idleFaceAnimId, string reactionId, string reactionFaceAnimId, string soundPath)`

**Purpose:** **Purpose:** Invoked when the conversation play event is raised.

```csharp
// Obtain an instance of MapConversationTableau from the subsystem API first
MapConversationTableau mapConversationTableau = ...;
mapConversationTableau.OnConversationPlay("example", "example", "example", "example", "example");
```

### RemovePreviousAgentsSoundEvent
`public void RemovePreviousAgentsSoundEvent()`

**Purpose:** **Purpose:** Removes previous agents sound event from the current collection or state.

```csharp
// Obtain an instance of MapConversationTableau from the subsystem API first
MapConversationTableau mapConversationTableau = ...;
mapConversationTableau.RemovePreviousAgentsSoundEvent();
```

### StopConversationSoundEvent
`public void StopConversationSoundEvent()`

**Purpose:** **Purpose:** Stops the conversation sound event flow or state machine.

```csharp
// Obtain an instance of MapConversationTableau from the subsystem API first
MapConversationTableau mapConversationTableau = ...;
mapConversationTableau.StopConversationSoundEvent();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MapConversationTableau mapConversationTableau = ...;
mapConversationTableau.SetEnabled(false);
```

## See Also

- [Area Index](../)