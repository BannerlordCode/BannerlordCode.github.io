<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ArenaDuelMissionBehavior`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ArenaDuelMissionBehavior

**Namespace:** SandBox.Missions.MissionLogics.Arena
**Module:** SandBox.Missions
**Type:** `public class ArenaDuelMissionBehavior : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Missions.MissionLogics.Arena/ArenaDuelMissionBehavior.cs`

## Overview

`ArenaDuelMissionBehavior` lives in `SandBox.Missions.MissionLogics.Arena` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Missions.MissionLogics.Arena` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

## Usage Example

```csharp
var value = new ArenaDuelMissionBehavior();
value.AfterStart();
```

## See Also

- [Complete Class Catalog](../catalog)