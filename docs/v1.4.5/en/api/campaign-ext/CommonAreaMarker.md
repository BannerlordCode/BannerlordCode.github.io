<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CommonAreaMarker`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CommonAreaMarker

**Namespace:** SandBox.Objects.AreaMarkers
**Module:** SandBox.Objects
**Type:** `public class CommonAreaMarker : AreaMarker`
**Base:** `AreaMarker`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Objects.AreaMarkers/CommonAreaMarker.cs`

## Overview

`CommonAreaMarker` lives in `SandBox.Objects.AreaMarkers` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Objects.AreaMarkers` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `HiddenSpawnFrames` | `public List<MatrixFrame> HiddenSpawnFrames { get; }` |
| `Tag` | `public override string Tag { get; }` |

## Key Methods

### GetUsableMachinesInRange
`public override List<UsableMachine> GetUsableMachinesInRange(string excludeTag = null)`

**Purpose:** Gets the current value of `usable machines in range`.

### GetAlley
`public Alley GetAlley()`

**Purpose:** Gets the current value of `alley`.

### GetName
`public override TextObject GetName()`

**Purpose:** Gets the current value of `name`.

## Usage Example

```csharp
var value = new CommonAreaMarker();
value.GetUsableMachinesInRange("example");
```

## See Also

- [Complete Class Catalog](../catalog)