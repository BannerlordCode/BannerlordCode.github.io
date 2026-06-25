---
title: "HideoutBossFightBehavior"
description: "Auto-generated class reference for HideoutBossFightBehavior."
---
# HideoutBossFightBehavior

**Namespace:** SandBox.Objects.Cinematics
**Module:** SandBox.Objects
**Type:** `public class HideoutBossFightBehavior : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `Modules.SandBox/SandBox/SandBox.Objects.Cinematics/HideoutBossFightBehavior.cs`

## Overview

`HideoutBossFightBehavior` lives in `SandBox.Objects.Cinematics` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Objects.Cinematics` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PerturbSeed` | `public int PerturbSeed { get; }` |

## Key Methods

### GetPlayerFrames
`public void GetPlayerFrames(out MatrixFrame initialFrame, out MatrixFrame targetFrame, float perturbAmount = 0f)`

**Purpose:** **Purpose:** Reads and returns the player frames value held by the this instance.

```csharp
// Obtain an instance of HideoutBossFightBehavior from the subsystem API first
HideoutBossFightBehavior hideoutBossFightBehavior = ...;
hideoutBossFightBehavior.GetPlayerFrames(initialFrame, targetFrame, 0);
```

### GetBossFrames
`public void GetBossFrames(out MatrixFrame initialFrame, out MatrixFrame targetFrame, float perturbAmount = 0f)`

**Purpose:** **Purpose:** Reads and returns the boss frames value held by the this instance.

```csharp
// Obtain an instance of HideoutBossFightBehavior from the subsystem API first
HideoutBossFightBehavior hideoutBossFightBehavior = ...;
hideoutBossFightBehavior.GetBossFrames(initialFrame, targetFrame, 0);
```

### GetAllyFrames
`public void GetAllyFrames(out List<MatrixFrame> initialFrames, out List<MatrixFrame> targetFrames, int agentCount = 10, float agentOffsetAngle = MathF.PI / 20f, float perturbAmount = 0f)`

**Purpose:** **Purpose:** Reads and returns the ally frames value held by the this instance.

```csharp
// Obtain an instance of HideoutBossFightBehavior from the subsystem API first
HideoutBossFightBehavior hideoutBossFightBehavior = ...;
hideoutBossFightBehavior.GetAllyFrames(initialFrames, targetFrames, 0, 0, 0);
```

### GetBanditFrames
`public void GetBanditFrames(out List<MatrixFrame> initialFrames, out List<MatrixFrame> targetFrames, int agentCount = 10, float agentOffsetAngle = MathF.PI / 20f, float perturbAmount = 0f)`

**Purpose:** **Purpose:** Reads and returns the bandit frames value held by the this instance.

```csharp
// Obtain an instance of HideoutBossFightBehavior from the subsystem API first
HideoutBossFightBehavior hideoutBossFightBehavior = ...;
hideoutBossFightBehavior.GetBanditFrames(initialFrames, targetFrames, 0, 0, 0);
```

### GetAlliesInitialFrame
`public void GetAlliesInitialFrame(out MatrixFrame frame)`

**Purpose:** **Purpose:** Reads and returns the allies initial frame value held by the this instance.

```csharp
// Obtain an instance of HideoutBossFightBehavior from the subsystem API first
HideoutBossFightBehavior hideoutBossFightBehavior = ...;
hideoutBossFightBehavior.GetAlliesInitialFrame(frame);
```

### GetBanditsInitialFrame
`public void GetBanditsInitialFrame(out MatrixFrame frame)`

**Purpose:** **Purpose:** Reads and returns the bandits initial frame value held by the this instance.

```csharp
// Obtain an instance of HideoutBossFightBehavior from the subsystem API first
HideoutBossFightBehavior hideoutBossFightBehavior = ...;
hideoutBossFightBehavior.GetBanditsInitialFrame(frame);
```

### IsWorldPointInsideCameraVolume
`public bool IsWorldPointInsideCameraVolume(in Vec3 worldPoint)`

**Purpose:** **Purpose:** Determines whether the this instance is in the world point inside camera volume state or condition.

```csharp
// Obtain an instance of HideoutBossFightBehavior from the subsystem API first
HideoutBossFightBehavior hideoutBossFightBehavior = ...;
var result = hideoutBossFightBehavior.IsWorldPointInsideCameraVolume(worldPoint);
```

### ClampWorldPointToCameraVolume
`public bool ClampWorldPointToCameraVolume(in Vec3 worldPoint, out Vec3 clampedPoint)`

**Purpose:** **Purpose:** Executes the ClampWorldPointToCameraVolume logic.

```csharp
// Obtain an instance of HideoutBossFightBehavior from the subsystem API first
HideoutBossFightBehavior hideoutBossFightBehavior = ...;
var result = hideoutBossFightBehavior.ClampWorldPointToCameraVolume(worldPoint, clampedPoint);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
HideoutBossFightBehavior hideoutBossFightBehavior = ...;
hideoutBossFightBehavior.GetPlayerFrames(initialFrame, targetFrame, 0);
```

## See Also

- [Area Index](../)