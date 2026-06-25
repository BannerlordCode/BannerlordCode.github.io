---
title: "AgentInteractionInterfaceVM"
description: "Auto-generated class reference for AgentInteractionInterfaceVM."
---
# AgentInteractionInterfaceVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentInteractionInterfaceVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Interaction/AgentInteractionInterfaceVM.cs`

## Overview

`AgentInteractionInterfaceVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TargetHealth` | `public int TargetHealth { get; set; }` |
| `ShowHealthBar` | `public bool ShowHealthBar { get; set; }` |
| `PrimaryInteractionMessages` | `public MBBindingList<MissionPrimaryInteractionItemVM> PrimaryInteractionMessages { get; set; }` |
| `SecondaryInteractionMessages` | `public MBBindingList<MissionInteractionItemBaseVM> SecondaryInteractionMessages { get; set; }` |
| `BackgroundColor` | `public string BackgroundColor { get; set; }` |
| `TextColor` | `public string TextColor { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `HasSecondaryMessages` | `public bool HasSecondaryMessages { get; set; }` |
| `DisplayInteractionText` | `public bool DisplayInteractionText { get; set; }` |
| `ForcedInteractionMessages` | `public MBBindingList<MissionPrimaryInteractionItemVM> ForcedInteractionMessages { get; set; }` |
| `HasForcedMessages` | `public bool HasForcedMessages { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of AgentInteractionInterfaceVM from the subsystem API first
AgentInteractionInterfaceVM agentInteractionInterfaceVM = ...;
agentInteractionInterfaceVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of AgentInteractionInterfaceVM from the subsystem API first
AgentInteractionInterfaceVM agentInteractionInterfaceVM = ...;
agentInteractionInterfaceVM.OnFinalize();
```

### OnFocusedHealthChanged
`public void OnFocusedHealthChanged(IFocusable focusable, float healthPercentage, bool hideHealthbarWhenFull)`

**Purpose:** **Purpose:** Invoked when the focused health changed event is raised.

```csharp
// Obtain an instance of AgentInteractionInterfaceVM from the subsystem API first
AgentInteractionInterfaceVM agentInteractionInterfaceVM = ...;
agentInteractionInterfaceVM.OnFocusedHealthChanged(focusable, 0, false);
```

### OnActiveMissionHintChanged
`public void OnActiveMissionHintChanged(MissionHint previousHint, MissionHint newHint)`

**Purpose:** **Purpose:** Invoked when the active mission hint changed event is raised.

```csharp
// Obtain an instance of AgentInteractionInterfaceVM from the subsystem API first
AgentInteractionInterfaceVM agentInteractionInterfaceVM = ...;
agentInteractionInterfaceVM.OnActiveMissionHintChanged(previousHint, newHint);
```

### AddSecondaryMessage
`public void AddSecondaryMessage(MissionInteractionItemBaseVM message)`

**Purpose:** **Purpose:** Adds secondary message to the current collection or state.

```csharp
// Obtain an instance of AgentInteractionInterfaceVM from the subsystem API first
AgentInteractionInterfaceVM agentInteractionInterfaceVM = ...;
agentInteractionInterfaceVM.AddSecondaryMessage(message);
```

### RemoveSecondaryMessage
`public bool RemoveSecondaryMessage(MissionInteractionItemBaseVM message)`

**Purpose:** **Purpose:** Removes secondary message from the current collection or state.

```csharp
// Obtain an instance of AgentInteractionInterfaceVM from the subsystem API first
AgentInteractionInterfaceVM agentInteractionInterfaceVM = ...;
var result = agentInteractionInterfaceVM.RemoveSecondaryMessage(message);
```

### HasSecondaryInteractionMessage
`public bool HasSecondaryInteractionMessage(MissionInteractionItemBaseVM message)`

**Purpose:** **Purpose:** Determines whether the this instance already holds secondary interaction message.

```csharp
// Obtain an instance of AgentInteractionInterfaceVM from the subsystem API first
AgentInteractionInterfaceVM agentInteractionInterfaceVM = ...;
var result = agentInteractionInterfaceVM.HasSecondaryInteractionMessage(message);
```

### ResetFocus
`public void ResetFocus()`

**Purpose:** **Purpose:** Returns focus to its default or initial condition.

```csharp
// Obtain an instance of AgentInteractionInterfaceVM from the subsystem API first
AgentInteractionInterfaceVM agentInteractionInterfaceVM = ...;
agentInteractionInterfaceVM.ResetFocus();
```

### SetForcedInteractionTexts
`public void SetForcedInteractionTexts(TextObject text1, bool isDisabled1, TextObject text2, bool isDisabled2)`

**Purpose:** **Purpose:** Assigns a new value to forced interaction texts and updates the object's internal state.

```csharp
// Obtain an instance of AgentInteractionInterfaceVM from the subsystem API first
AgentInteractionInterfaceVM agentInteractionInterfaceVM = ...;
agentInteractionInterfaceVM.SetForcedInteractionTexts(text1, false, text2, false);
```

### ClearForcedInteractionTexts
`public void ClearForcedInteractionTexts()`

**Purpose:** **Purpose:** Removes all forced interaction texts from the this instance.

```csharp
// Obtain an instance of AgentInteractionInterfaceVM from the subsystem API first
AgentInteractionInterfaceVM agentInteractionInterfaceVM = ...;
agentInteractionInterfaceVM.ClearForcedInteractionTexts();
```

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IAgentInteractionInterfaceVM service = ...;
```

## See Also

- [Area Index](../)