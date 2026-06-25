---
title: "PopupSceneSwitchItemSequence"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PopupSceneSwitchItemSequence`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PopupSceneSwitchItemSequence

**Namespace:** TaleWorlds.MountAndBlade.View.Scripts
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PopupSceneSwitchItemSequence : PopupSceneSequence`
**Base:** `PopupSceneSequence`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Scripts/PopupSceneSwitchItemSequence.cs`

## Overview

`PopupSceneSwitchItemSequence` lives in `TaleWorlds.MountAndBlade.View.Scripts` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.Scripts` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnInitialState
`public override void OnInitialState()`

**Purpose:** Called when the `initial state` event is raised.

### OnPositiveState
`public override void OnPositiveState()`

**Purpose:** Called when the `positive state` event is raised.

### OnNegativeState
`public override void OnNegativeState()`

**Purpose:** Called when the `negative state` event is raised.

## Usage Example

```csharp
var value = new PopupSceneSwitchItemSequence();
value.OnInitialState();
```

## See Also

- [Complete Class Catalog](../catalog)