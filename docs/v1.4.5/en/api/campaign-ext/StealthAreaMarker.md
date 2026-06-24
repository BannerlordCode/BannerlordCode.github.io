<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StealthAreaMarker`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# StealthAreaMarker

**Namespace:** SandBox.Objects.AreaMarkers
**Module:** SandBox.Objects
**Type:** `public class StealthAreaMarker : AreaMarker`
**Base:** `AreaMarker`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Objects.AreaMarkers/StealthAreaMarker.cs`

## Overview

`StealthAreaMarker` lives in `SandBox.Objects.AreaMarkers` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Objects.AreaMarkers` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ReinforcementAllyGroupSpawnPoint` | `public GameEntity ReinforcementAllyGroupSpawnPoint { get; }` |
| `WaitPoint` | `public GameEntity WaitPoint { get; }` |

## Key Methods

### AfterMissionStart
`public override void AfterMissionStart()`

**Purpose:** Handles logic related to `after mission start`.

## Usage Example

```csharp
var value = new StealthAreaMarker();
value.AfterMissionStart();
```

## See Also

- [Complete Class Catalog](../catalog)