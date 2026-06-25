---
title: "DuelZoneLandmark"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DuelZoneLandmark`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DuelZoneLandmark

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DuelZoneLandmark : ScriptComponentBehavior, IFocusable`
**Base:** `ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/DuelZoneLandmark.cs`

## Overview

`DuelZoneLandmark` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `FocusableObjectType` | `public FocusableObjectType FocusableObjectType { get; }` |
| `IsFocusable` | `public virtual bool IsFocusable { get; }` |

## Key Methods

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
var value = new DuelZoneLandmark();
value.OnFocusGain(userAgent);
```

## See Also

- [Complete Class Catalog](../catalog)