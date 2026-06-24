<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CoverAnimalAgentComponent`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CoverAnimalAgentComponent

**Namespace:** SandBox.Missions
**Module:** SandBox.Missions
**Type:** `public class CoverAnimalAgentComponent : AgentComponent, IFocusable`
**Base:** `AgentComponent`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Missions/CoverAnimalAgentComponent.cs`

## Overview

`CoverAnimalAgentComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `CoverAnimalAgentComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### SetDynamicPatrolArea
`public void SetDynamicPatrolArea(GameEntity parentPatrolPoint)`

**Purpose:** Sets the value or state of `dynamic patrol area`.

### StartMovement
`public void StartMovement()`

**Purpose:** Handles logic related to `start movement`.

### OnTick
`public override void OnTick(float dt)`

**Purpose:** Called when the `tick` event is raised.

### IsTargetReached
`public bool IsTargetReached()`

**Purpose:** Handles logic related to `is target reached`.

### SetTargetFrame
`public void SetTargetFrame(WorldPosition position, float rotation, float rangeThreshold = 1f, AIScriptedFrameFlags flags = (AIScriptedFrameFlags)0)`

**Purpose:** Sets the value or state of `target frame`.

### OnFocusGain
`public void OnFocusGain(Agent userAgent)`

**Purpose:** Called when the `focus gain` event is raised.

### OnFocusLose
`public void OnFocusLose(Agent userAgent)`

**Purpose:** Called when the `focus lose` event is raised.

### GetInfoTextForBeingNotInteractable
`public TextObject GetInfoTextForBeingNotInteractable(Agent userAgent)`

**Purpose:** Gets the current value of `info text for being not interactable`.

### GetDescriptionText
`public TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**Purpose:** Gets the current value of `description text`.

## Usage Example

```csharp
var component = agent.GetComponent<CoverAnimalAgentComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)