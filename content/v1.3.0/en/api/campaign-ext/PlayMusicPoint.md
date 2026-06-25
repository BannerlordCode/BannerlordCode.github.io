---
title: "PlayMusicPoint"
description: "Auto-generated class reference for PlayMusicPoint."
---
# PlayMusicPoint

**Namespace:** SandBox.Objects.AnimationPoints
**Module:** SandBox.Objects
**Type:** `public class PlayMusicPoint : AnimationPoint`
**Base:** `AnimationPoint`
**File:** `SandBox/Objects/AnimationPoints/PlayMusicPoint.cs`

## Overview

`PlayMusicPoint` lives in `SandBox.Objects.AnimationPoints` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Objects.AnimationPoints` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### StartLoop
`public void StartLoop(SoundEvent trackEvent)`

**Purpose:** Starts the `loop` flow or state machine.

```csharp
// Obtain an instance of PlayMusicPoint from the subsystem API first
PlayMusicPoint playMusicPoint = ...;
playMusicPoint.StartLoop(trackEvent);
```

### EndLoop
`public void EndLoop()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of PlayMusicPoint from the subsystem API first
PlayMusicPoint playMusicPoint = ...;
playMusicPoint.EndLoop();
```

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**Purpose:** Reads and returns the `tick requirement` value held by the current object.

```csharp
// Obtain an instance of PlayMusicPoint from the subsystem API first
PlayMusicPoint playMusicPoint = ...;
var result = playMusicPoint.GetTickRequirement();
```

### OnUseStopped
`public override void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)`

**Purpose:** Invoked when the `use stopped` event is raised.

```csharp
// Obtain an instance of PlayMusicPoint from the subsystem API first
PlayMusicPoint playMusicPoint = ...;
playMusicPoint.OnUseStopped(userAgent, false, 0);
```

### ChangeInstrument
`public void ChangeInstrument(Tuple<InstrumentData, float> instrument)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of PlayMusicPoint from the subsystem API first
PlayMusicPoint playMusicPoint = ...;
playMusicPoint.ChangeInstrument(tuple<InstrumentData, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PlayMusicPoint playMusicPoint = ...;
playMusicPoint.StartLoop(trackEvent);
```

## See Also

- [Area Index](../)