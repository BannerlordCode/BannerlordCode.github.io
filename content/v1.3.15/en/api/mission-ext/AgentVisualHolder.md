---
title: "AgentVisualHolder"
description: "Auto-generated class reference for AgentVisualHolder."
---
# AgentVisualHolder

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentVisualHolder : IAgentVisual`
**Base:** `IAgentVisual`
**File:** `TaleWorlds.MountAndBlade/AgentVisualHolder.cs`

## Overview

`AgentVisualHolder` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetAction
`public void SetAction(in ActionIndexCache actionName, float startProgress = 0f, bool forceFaceMorphRestart = true)`

**Purpose:** Assigns a new value to `action` and updates the object's internal state.

```csharp
// Obtain an instance of AgentVisualHolder from the subsystem API first
AgentVisualHolder agentVisualHolder = ...;
agentVisualHolder.SetAction(actionName, 0, false);
```

### GetEntity
`public GameEntity GetEntity()`

**Purpose:** Reads and returns the `entity` value held by the current object.

```csharp
// Obtain an instance of AgentVisualHolder from the subsystem API first
AgentVisualHolder agentVisualHolder = ...;
var result = agentVisualHolder.GetEntity();
```

### GetVisuals
`public MBAgentVisuals GetVisuals()`

**Purpose:** Reads and returns the `visuals` value held by the current object.

```csharp
// Obtain an instance of AgentVisualHolder from the subsystem API first
AgentVisualHolder agentVisualHolder = ...;
var result = agentVisualHolder.GetVisuals();
```

### SetFrame
`public void SetFrame(ref MatrixFrame frame)`

**Purpose:** Assigns a new value to `frame` and updates the object's internal state.

```csharp
// Obtain an instance of AgentVisualHolder from the subsystem API first
AgentVisualHolder agentVisualHolder = ...;
agentVisualHolder.SetFrame(frame);
```

### GetFrame
`public MatrixFrame GetFrame()`

**Purpose:** Reads and returns the `frame` value held by the current object.

```csharp
// Obtain an instance of AgentVisualHolder from the subsystem API first
AgentVisualHolder agentVisualHolder = ...;
var result = agentVisualHolder.GetFrame();
```

### GetBodyProperties
`public BodyProperties GetBodyProperties()`

**Purpose:** Reads and returns the `body properties` value held by the current object.

```csharp
// Obtain an instance of AgentVisualHolder from the subsystem API first
AgentVisualHolder agentVisualHolder = ...;
var result = agentVisualHolder.GetBodyProperties();
```

### SetBodyProperties
`public void SetBodyProperties(BodyProperties bodyProperties)`

**Purpose:** Assigns a new value to `body properties` and updates the object's internal state.

```csharp
// Obtain an instance of AgentVisualHolder from the subsystem API first
AgentVisualHolder agentVisualHolder = ...;
agentVisualHolder.SetBodyProperties(bodyProperties);
```

### GetIsFemale
`public bool GetIsFemale()`

**Purpose:** Reads and returns the `is female` value held by the current object.

```csharp
// Obtain an instance of AgentVisualHolder from the subsystem API first
AgentVisualHolder agentVisualHolder = ...;
var result = agentVisualHolder.GetIsFemale();
```

### GetCharacterObjectID
`public string GetCharacterObjectID()`

**Purpose:** Reads and returns the `character object i d` value held by the current object.

```csharp
// Obtain an instance of AgentVisualHolder from the subsystem API first
AgentVisualHolder agentVisualHolder = ...;
var result = agentVisualHolder.GetCharacterObjectID();
```

### SetCharacterObjectID
`public void SetCharacterObjectID(string id)`

**Purpose:** Assigns a new value to `character object i d` and updates the object's internal state.

```csharp
// Obtain an instance of AgentVisualHolder from the subsystem API first
AgentVisualHolder agentVisualHolder = ...;
agentVisualHolder.SetCharacterObjectID("example");
```

### GetEquipment
`public Equipment GetEquipment()`

**Purpose:** Reads and returns the `equipment` value held by the current object.

```csharp
// Obtain an instance of AgentVisualHolder from the subsystem API first
AgentVisualHolder agentVisualHolder = ...;
var result = agentVisualHolder.GetEquipment();
```

### RefreshWithNewEquipment
`public void RefreshWithNewEquipment(Equipment equipment)`

**Purpose:** Keeps the display or cache of `with new equipment` in sync with the underlying state.

```csharp
// Obtain an instance of AgentVisualHolder from the subsystem API first
AgentVisualHolder agentVisualHolder = ...;
agentVisualHolder.RefreshWithNewEquipment(equipment);
```

### SetClothingColors
`public void SetClothingColors(uint color1, uint color2)`

**Purpose:** Assigns a new value to `clothing colors` and updates the object's internal state.

```csharp
// Obtain an instance of AgentVisualHolder from the subsystem API first
AgentVisualHolder agentVisualHolder = ...;
agentVisualHolder.SetClothingColors(0, 0);
```

### GetClothingColors
`public void GetClothingColors(out uint color1, out uint color2)`

**Purpose:** Reads and returns the `clothing colors` value held by the current object.

```csharp
// Obtain an instance of AgentVisualHolder from the subsystem API first
AgentVisualHolder agentVisualHolder = ...;
agentVisualHolder.GetClothingColors(color1, color2);
```

### GetCopyAgentVisualsData
`public AgentVisualsData GetCopyAgentVisualsData()`

**Purpose:** Reads and returns the `copy agent visuals data` value held by the current object.

```csharp
// Obtain an instance of AgentVisualHolder from the subsystem API first
AgentVisualHolder agentVisualHolder = ...;
var result = agentVisualHolder.GetCopyAgentVisualsData();
```

### Refresh
`public void Refresh(bool needBatchedVersionForWeaponMeshes, AgentVisualsData data, bool forceUseFaceCache = false)`

**Purpose:** Refreshes the current object's display or cache to match the underlying state.

```csharp
// Obtain an instance of AgentVisualHolder from the subsystem API first
AgentVisualHolder agentVisualHolder = ...;
agentVisualHolder.Refresh(false, data, false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
AgentVisualHolder agentVisualHolder = ...;
agentVisualHolder.SetAction(actionName, 0, false);
```

## See Also

- [Area Index](../)