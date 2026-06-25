---
title: "AgentInteractionInterfaceVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AgentInteractionInterfaceVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AgentInteractionInterfaceVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentInteractionInterfaceVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction/AgentInteractionInterfaceVM.cs`

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

**Purpose:** Refreshes the display or cache of `values`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### OnFocusedHealthChanged
`public void OnFocusedHealthChanged(IFocusable focusable, float healthPercentage, bool hideHealthbarWhenFull)`

**Purpose:** Called when the `focused health changed` event is raised.

### OnActiveMissionHintChanged
`public void OnActiveMissionHintChanged(MissionHint previousHint, MissionHint newHint)`

**Purpose:** Called when the `active mission hint changed` event is raised.

### AddSecondaryMessage
`public void AddSecondaryMessage(MissionInteractionItemBaseVM message)`

**Purpose:** Adds `secondary message` to the current collection or state.

### RemoveSecondaryMessage
`public bool RemoveSecondaryMessage(MissionInteractionItemBaseVM message)`

**Purpose:** Removes `secondary message` from the current collection or state.

### HasSecondaryInteractionMessage
`public bool HasSecondaryInteractionMessage(MissionInteractionItemBaseVM message)`

**Purpose:** Checks whether the current object has/contains `secondary interaction message`.

### ResetFocus
`public void ResetFocus()`

**Purpose:** Resets `focus` to its initial state.

### SetForcedInteractionTexts
`public void SetForcedInteractionTexts(TextObject text1, bool isDisabled1, TextObject text2, bool isDisabled2)`

**Purpose:** Sets the value or state of `forced interaction texts`.

### ClearForcedInteractionTexts
`public void ClearForcedInteractionTexts()`

**Purpose:** Handles logic related to `clear forced interaction texts`.

## Usage Example

```csharp
AgentInteractionInterfaceVM implementation = GetAgentInteractionInterfaceVMImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)