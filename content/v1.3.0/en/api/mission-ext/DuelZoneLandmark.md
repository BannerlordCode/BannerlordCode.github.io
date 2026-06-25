---
title: "DuelZoneLandmark"
description: "Auto-generated class reference for DuelZoneLandmark."
---
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

## Key Methods

### OnFocusGain
`public void OnFocusGain(Agent userAgent)`

**Purpose:** Invoked when the `focus gain` event is raised.

```csharp
// Obtain an instance of DuelZoneLandmark from the subsystem API first
DuelZoneLandmark duelZoneLandmark = ...;
duelZoneLandmark.OnFocusGain(userAgent);
```

### OnFocusLose
`public void OnFocusLose(Agent userAgent)`

**Purpose:** Invoked when the `focus lose` event is raised.

```csharp
// Obtain an instance of DuelZoneLandmark from the subsystem API first
DuelZoneLandmark duelZoneLandmark = ...;
duelZoneLandmark.OnFocusLose(userAgent);
```

### GetInfoTextForBeingNotInteractable
`public TextObject GetInfoTextForBeingNotInteractable(Agent userAgent)`

**Purpose:** Reads and returns the `info text for being not interactable` value held by the current object.

```csharp
// Obtain an instance of DuelZoneLandmark from the subsystem API first
DuelZoneLandmark duelZoneLandmark = ...;
var result = duelZoneLandmark.GetInfoTextForBeingNotInteractable(userAgent);
```

### GetDescriptionText
`public TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**Purpose:** Reads and returns the `description text` value held by the current object.

```csharp
// Obtain an instance of DuelZoneLandmark from the subsystem API first
DuelZoneLandmark duelZoneLandmark = ...;
var result = duelZoneLandmark.GetDescriptionText(gameEntity);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
DuelZoneLandmark duelZoneLandmark = ...;
duelZoneLandmark.OnFocusGain(userAgent);
```

## See Also

- [Area Index](../)