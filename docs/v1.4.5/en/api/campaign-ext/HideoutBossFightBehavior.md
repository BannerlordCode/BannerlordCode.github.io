<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HideoutBossFightBehavior`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# HideoutBossFightBehavior

**Namespace:** SandBox.Objects.Cinematics
**Module:** SandBox.Objects
**Type:** `public class HideoutBossFightBehavior : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Objects.Cinematics/HideoutBossFightBehavior.cs`

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

**Purpose:** Gets the current value of `player frames`.

### GetBossFrames
`public void GetBossFrames(out MatrixFrame initialFrame, out MatrixFrame targetFrame, float perturbAmount = 0f)`

**Purpose:** Gets the current value of `boss frames`.

### GetAllyFrames
`public void GetAllyFrames(out List<MatrixFrame> initialFrames, out List<MatrixFrame> targetFrames, int agentCount = 10, float agentOffsetAngle = MathF.PI / 20f, float perturbAmount = 0f)`

**Purpose:** Gets the current value of `ally frames`.

### GetBanditFrames
`public void GetBanditFrames(out List<MatrixFrame> initialFrames, out List<MatrixFrame> targetFrames, int agentCount = 10, float agentOffsetAngle = MathF.PI / 20f, float perturbAmount = 0f)`

**Purpose:** Gets the current value of `bandit frames`.

### GetAlliesInitialFrame
`public void GetAlliesInitialFrame(out MatrixFrame frame)`

**Purpose:** Gets the current value of `allies initial frame`.

### GetBanditsInitialFrame
`public void GetBanditsInitialFrame(out MatrixFrame frame)`

**Purpose:** Gets the current value of `bandits initial frame`.

### IsWorldPointInsideCameraVolume
`public bool IsWorldPointInsideCameraVolume(in Vec3 worldPoint)`

**Purpose:** Handles logic related to `is world point inside camera volume`.

### ClampWorldPointToCameraVolume
`public bool ClampWorldPointToCameraVolume(in Vec3 worldPoint, out Vec3 clampedPoint)`

**Purpose:** Handles logic related to `clamp world point to camera volume`.

## Usage Example

```csharp
var value = new HideoutBossFightBehavior();
value.GetPlayerFrames(initialFrame, targetFrame, 0);
```

## See Also

- [Complete Class Catalog](../catalog)