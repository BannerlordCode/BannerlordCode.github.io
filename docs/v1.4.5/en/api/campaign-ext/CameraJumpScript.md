<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CameraJumpScript`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CameraJumpScript

**Namespace:** SandBox.Missions
**Module:** SandBox.Missions
**Type:** `public class CameraJumpScript : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Missions/CameraJumpScript.cs`

## Overview

`CameraJumpScript` lives in `SandBox.Missions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Missions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetTickRequirement
`public override TickRequirement GetTickRequirement()`

**Purpose:** Gets the current value of `tick requirement`.

## Usage Example

```csharp
var value = new CameraJumpScript();
value.GetTickRequirement();
```

## See Also

- [Complete Class Catalog](../catalog)