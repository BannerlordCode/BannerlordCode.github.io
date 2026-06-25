---
title: "MissionMainAgentInteractionComponent"
description: "Auto-generated class reference for MissionMainAgentInteractionComponent."
---
# MissionMainAgentInteractionComponent

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMainAgentInteractionComponent`
**Base:** none
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews/MissionMainAgentInteractionComponent.cs`

## Overview

`MissionMainAgentInteractionComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `MissionMainAgentInteractionComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentFocusedObject` | `public IFocusable CurrentFocusedObject { get; }` |
| `CurrentFocusedMachine` | `public IFocusable CurrentFocusedMachine { get; }` |

## Key Methods

### MissionFocusGainedEventDelegate
`public delegate void MissionFocusGainedEventDelegate(Agent agent, IFocusable focusableObject, bool isInteractable)`

**Purpose:** Executes the MissionFocusGainedEventDelegate logic.

```csharp
// Obtain an instance of MissionMainAgentInteractionComponent from the subsystem API first
MissionMainAgentInteractionComponent missionMainAgentInteractionComponent = ...;
missionMainAgentInteractionComponent.MissionFocusGainedEventDelegate(agent, focusableObject, false);
```

### MissionFocusLostEventDelegate
`public delegate void MissionFocusLostEventDelegate(Agent agent, IFocusable focusableObject)`

**Purpose:** Executes the MissionFocusLostEventDelegate logic.

```csharp
// Obtain an instance of MissionMainAgentInteractionComponent from the subsystem API first
MissionMainAgentInteractionComponent missionMainAgentInteractionComponent = ...;
missionMainAgentInteractionComponent.MissionFocusLostEventDelegate(agent, focusableObject);
```

### MissionFocusHealthChangeDelegate
`public delegate void MissionFocusHealthChangeDelegate(IFocusable focusable, float healthPercentage, bool hideHealthbarWhenFull)`

**Purpose:** Executes the MissionFocusHealthChangeDelegate logic.

```csharp
// Obtain an instance of MissionMainAgentInteractionComponent from the subsystem API first
MissionMainAgentInteractionComponent missionMainAgentInteractionComponent = ...;
missionMainAgentInteractionComponent.MissionFocusHealthChangeDelegate(focusable, 0, false);
```

### SetCurrentFocusedObject
`public void SetCurrentFocusedObject(IFocusable focusedObject, IFocusable focusedMachine, sbyte focusedObjectBoneIndex, bool isInteractable)`

**Purpose:** Assigns a new value to current focused object and updates the object's internal state.

```csharp
// Obtain an instance of MissionMainAgentInteractionComponent from the subsystem API first
MissionMainAgentInteractionComponent missionMainAgentInteractionComponent = ...;
missionMainAgentInteractionComponent.SetCurrentFocusedObject(focusedObject, focusedMachine, 0, false);
```

### ClearFocus
`public void ClearFocus()`

**Purpose:** Removes all focus from the this instance.

```csharp
// Obtain an instance of MissionMainAgentInteractionComponent from the subsystem API first
MissionMainAgentInteractionComponent missionMainAgentInteractionComponent = ...;
missionMainAgentInteractionComponent.ClearFocus();
```

### OnClearScene
`public void OnClearScene()`

**Purpose:** Invoked when the clear scene event is raised.

```csharp
// Obtain an instance of MissionMainAgentInteractionComponent from the subsystem API first
MissionMainAgentInteractionComponent missionMainAgentInteractionComponent = ...;
missionMainAgentInteractionComponent.OnClearScene();
```

### FocusTick
`public void FocusTick()`

**Purpose:** Executes the FocusTick logic.

```csharp
// Obtain an instance of MissionMainAgentInteractionComponent from the subsystem API first
MissionMainAgentInteractionComponent missionMainAgentInteractionComponent = ...;
missionMainAgentInteractionComponent.FocusTick();
```

### FocusStateCheckTick
`public void FocusStateCheckTick()`

**Purpose:** Executes the FocusStateCheckTick logic.

```csharp
// Obtain an instance of MissionMainAgentInteractionComponent from the subsystem API first
MissionMainAgentInteractionComponent missionMainAgentInteractionComponent = ...;
missionMainAgentInteractionComponent.FocusStateCheckTick();
```

### FocusedItemHealthTick
`public void FocusedItemHealthTick()`

**Purpose:** Executes the FocusedItemHealthTick logic.

```csharp
// Obtain an instance of MissionMainAgentInteractionComponent from the subsystem API first
MissionMainAgentInteractionComponent missionMainAgentInteractionComponent = ...;
missionMainAgentInteractionComponent.FocusedItemHealthTick();
```

## Usage Example

```csharp
var component = agent.GetComponent<MissionMainAgentInteractionComponent>();
```

## See Also

- [Area Index](../)