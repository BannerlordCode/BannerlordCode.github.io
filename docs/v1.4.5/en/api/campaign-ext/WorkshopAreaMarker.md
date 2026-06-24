<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WorkshopAreaMarker`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# WorkshopAreaMarker

**Namespace:** SandBox.Objects.AreaMarkers
**Module:** SandBox.Objects
**Type:** `public class WorkshopAreaMarker : AreaMarker`
**Base:** `AreaMarker`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Objects.AreaMarkers/WorkshopAreaMarker.cs`

## Overview

`WorkshopAreaMarker` lives in `SandBox.Objects.AreaMarkers` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Objects.AreaMarkers` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Tag` | `public override string Tag { get; }` |

## Key Methods

### GetWorkshop
`public Workshop GetWorkshop()`

**Purpose:** Gets the current value of `workshop`.

### GetWorkshopType
`public WorkshopType GetWorkshopType()`

**Purpose:** Gets the current value of `workshop type`.

### GetName
`public override TextObject GetName()`

**Purpose:** Gets the current value of `name`.

## Usage Example

```csharp
var value = new WorkshopAreaMarker();
value.GetWorkshop();
```

## See Also

- [Complete Class Catalog](../catalog)