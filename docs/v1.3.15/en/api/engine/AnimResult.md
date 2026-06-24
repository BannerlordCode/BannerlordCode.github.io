<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AnimResult`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AnimResult

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public struct AnimResult`
**Base:** none
**File:** `TaleWorlds.Engine/AnimResult.cs`

## Overview

`AnimResult` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetEntitialOutTransform
`public Transformation GetEntitialOutTransform(sbyte boneIndex, Skeleton skeleton)`

**Purpose:** Gets the current value of `entitial out transform`.

### SetOutBoneDisplacement
`public void SetOutBoneDisplacement(sbyte boneIndex, Vec3 position, Skeleton skeleton)`

**Purpose:** Sets the value or state of `out bone displacement`.

### SetOutQuat
`public void SetOutQuat(sbyte boneIndex, Mat3 rotation, Skeleton skeleton)`

**Purpose:** Sets the value or state of `out quat`.

## Usage Example

```csharp
var value = new AnimResult();
value.GetEntitialOutTransform(0, skeleton);
```

## See Also

- [Complete Class Catalog](../catalog)