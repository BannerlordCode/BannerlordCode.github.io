---
title: "Job"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Job`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Job

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public class Job`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Engine/TaleWorlds.Engine/Job.cs`

## Overview

`Job` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Finished` | `public bool Finished { get; set; }` |

## Key Methods

### DoJob
`public virtual void DoJob(float dt)`

**Purpose:** Handles logic related to `do job`.

## Usage Example

```csharp
var value = new Job();
value.DoJob(0);
```

## See Also

- [Complete Class Catalog](../catalog)