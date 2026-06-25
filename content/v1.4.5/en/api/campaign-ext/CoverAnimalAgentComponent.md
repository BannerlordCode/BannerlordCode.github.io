---
title: "CoverAnimalAgentComponent"
description: "Auto-generated class reference for CoverAnimalAgentComponent."
---
# CoverAnimalAgentComponent

**Namespace:** SandBox.Missions
**Module:** SandBox.Missions
**Type:** `public class CoverAnimalAgentComponent : AgentComponent, IFocusable`
**Base:** `AgentComponent`
**File:** `Modules.SandBox/SandBox/SandBox.Missions/CoverAnimalAgentComponent.cs`

## Overview

`CoverAnimalAgentComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `CoverAnimalAgentComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### SetDynamicPatrolArea
`public void SetDynamicPatrolArea(GameEntity parentPatrolPoint)`

**Purpose:** Assigns a new value to dynamic patrol area and updates the object's internal state.

```csharp
// Obtain an instance of CoverAnimalAgentComponent from the subsystem API first
CoverAnimalAgentComponent coverAnimalAgentComponent = ...;
coverAnimalAgentComponent.SetDynamicPatrolArea(parentPatrolPoint);
```

### StartMovement
`public void StartMovement()`

**Purpose:** Starts the movement flow or state machine.

```csharp
// Obtain an instance of CoverAnimalAgentComponent from the subsystem API first
CoverAnimalAgentComponent coverAnimalAgentComponent = ...;
coverAnimalAgentComponent.StartMovement();
```

### OnTick
`public override void OnTick(float dt)`

**Purpose:** Invoked when the tick event is raised.

```csharp
// Obtain an instance of CoverAnimalAgentComponent from the subsystem API first
CoverAnimalAgentComponent coverAnimalAgentComponent = ...;
coverAnimalAgentComponent.OnTick(0);
```

### IsTargetReached
`public bool IsTargetReached()`

**Purpose:** Determines whether the this instance is in the target reached state or condition.

```csharp
// Obtain an instance of CoverAnimalAgentComponent from the subsystem API first
CoverAnimalAgentComponent coverAnimalAgentComponent = ...;
var result = coverAnimalAgentComponent.IsTargetReached();
```

### SetTargetFrame
`public void SetTargetFrame(WorldPosition position, float rotation, float rangeThreshold = 1f, AIScriptedFrameFlags flags = (AIScriptedFrameFlags)0)`

**Purpose:** Assigns a new value to target frame and updates the object's internal state.

```csharp
// Obtain an instance of CoverAnimalAgentComponent from the subsystem API first
CoverAnimalAgentComponent coverAnimalAgentComponent = ...;
coverAnimalAgentComponent.SetTargetFrame(position, 0, 0, (AIScriptedFrameFlags)0);
```

### OnFocusGain
`public void OnFocusGain(Agent userAgent)`

**Purpose:** Invoked when the focus gain event is raised.

```csharp
// Obtain an instance of CoverAnimalAgentComponent from the subsystem API first
CoverAnimalAgentComponent coverAnimalAgentComponent = ...;
coverAnimalAgentComponent.OnFocusGain(userAgent);
```

### OnFocusLose
`public void OnFocusLose(Agent userAgent)`

**Purpose:** Invoked when the focus lose event is raised.

```csharp
// Obtain an instance of CoverAnimalAgentComponent from the subsystem API first
CoverAnimalAgentComponent coverAnimalAgentComponent = ...;
coverAnimalAgentComponent.OnFocusLose(userAgent);
```

### GetInfoTextForBeingNotInteractable
`public TextObject GetInfoTextForBeingNotInteractable(Agent userAgent)`

**Purpose:** Reads and returns the info text for being not interactable value held by the this instance.

```csharp
// Obtain an instance of CoverAnimalAgentComponent from the subsystem API first
CoverAnimalAgentComponent coverAnimalAgentComponent = ...;
var result = coverAnimalAgentComponent.GetInfoTextForBeingNotInteractable(userAgent);
```

### GetDescriptionText
`public TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**Purpose:** Reads and returns the description text value held by the this instance.

```csharp
// Obtain an instance of CoverAnimalAgentComponent from the subsystem API first
CoverAnimalAgentComponent coverAnimalAgentComponent = ...;
var result = coverAnimalAgentComponent.GetDescriptionText(gameEntity);
```

## Usage Example

```csharp
var component = agent.GetComponent<CoverAnimalAgentComponent>();
```

## See Also

- [Area Index](../)