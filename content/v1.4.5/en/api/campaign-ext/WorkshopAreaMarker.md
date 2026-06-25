---
title: "WorkshopAreaMarker"
description: "Auto-generated class reference for WorkshopAreaMarker."
---
# WorkshopAreaMarker

**Namespace:** SandBox.Objects.AreaMarkers
**Module:** SandBox.Objects
**Type:** `public class WorkshopAreaMarker : AreaMarker`
**Base:** `AreaMarker`
**File:** `Modules.SandBox/SandBox/SandBox.Objects.AreaMarkers/WorkshopAreaMarker.cs`

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

**Purpose:** **Purpose:** Reads and returns the workshop value held by the this instance.

```csharp
// Obtain an instance of WorkshopAreaMarker from the subsystem API first
WorkshopAreaMarker workshopAreaMarker = ...;
var result = workshopAreaMarker.GetWorkshop();
```

### GetWorkshopType
`public WorkshopType GetWorkshopType()`

**Purpose:** **Purpose:** Reads and returns the workshop type value held by the this instance.

```csharp
// Obtain an instance of WorkshopAreaMarker from the subsystem API first
WorkshopAreaMarker workshopAreaMarker = ...;
var result = workshopAreaMarker.GetWorkshopType();
```

### GetName
`public override TextObject GetName()`

**Purpose:** **Purpose:** Reads and returns the name value held by the this instance.

```csharp
// Obtain an instance of WorkshopAreaMarker from the subsystem API first
WorkshopAreaMarker workshopAreaMarker = ...;
var result = workshopAreaMarker.GetName();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
WorkshopAreaMarker workshopAreaMarker = ...;
workshopAreaMarker.GetWorkshop();
```

## See Also

- [Area Index](../)