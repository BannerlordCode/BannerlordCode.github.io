<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ChairUsePoint`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ChairUsePoint

**Namespace:** SandBox.Objects.AnimationPoints
**Module:** SandBox.Objects
**Type:** `public class ChairUsePoint : AnimationPoint`
**Base:** `AnimationPoint`
**File:** `SandBox/Objects/AnimationPoints/ChairUsePoint.cs`

## Overview

`ChairUsePoint` lives in `SandBox.Objects.AnimationPoints` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Objects.AnimationPoints` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnUse
`public override void OnUse(Agent userAgent, sbyte agentBoneIndex)`

**Purpose:** Called when the `use` event is raised.

## Usage Example

```csharp
var value = new ChairUsePoint();
value.OnUse(userAgent, 0);
```

## See Also

- [Complete Class Catalog](../catalog)