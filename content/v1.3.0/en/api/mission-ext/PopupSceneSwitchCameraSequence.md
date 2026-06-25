---
title: "PopupSceneSwitchCameraSequence"
description: "Auto-generated class reference for PopupSceneSwitchCameraSequence."
---
# PopupSceneSwitchCameraSequence

**Namespace:** TaleWorlds.MountAndBlade.View.Scripts
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PopupSceneSwitchCameraSequence : PopupSceneSequence`
**Base:** `PopupSceneSequence`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Scripts/PopupSceneSwitchCameraSequence.cs`

## Overview

`PopupSceneSwitchCameraSequence` lives in `TaleWorlds.MountAndBlade.View.Scripts` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.Scripts` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnInitialState
`public override void OnInitialState()`

**Purpose:** Invoked when the `initial state` event is raised.

```csharp
// Obtain an instance of PopupSceneSwitchCameraSequence from the subsystem API first
PopupSceneSwitchCameraSequence popupSceneSwitchCameraSequence = ...;
popupSceneSwitchCameraSequence.OnInitialState();
```

### OnPositiveState
`public override void OnPositiveState()`

**Purpose:** Invoked when the `positive state` event is raised.

```csharp
// Obtain an instance of PopupSceneSwitchCameraSequence from the subsystem API first
PopupSceneSwitchCameraSequence popupSceneSwitchCameraSequence = ...;
popupSceneSwitchCameraSequence.OnPositiveState();
```

### OnNegativeState
`public override void OnNegativeState()`

**Purpose:** Invoked when the `negative state` event is raised.

```csharp
// Obtain an instance of PopupSceneSwitchCameraSequence from the subsystem API first
PopupSceneSwitchCameraSequence popupSceneSwitchCameraSequence = ...;
popupSceneSwitchCameraSequence.OnNegativeState();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PopupSceneSwitchCameraSequence popupSceneSwitchCameraSequence = ...;
popupSceneSwitchCameraSequence.OnInitialState();
```

## See Also

- [Area Index](../)