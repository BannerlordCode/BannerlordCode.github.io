---
title: "Job"
description: "Auto-generated class reference for Job."
---
# Job

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public class Job`
**Base:** none
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/Job.cs`

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

**Purpose:** Executes the DoJob logic.

```csharp
// Obtain an instance of Job from the subsystem API first
Job job = ...;
job.DoJob(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Job job = ...;
job.DoJob(0);
```

## See Also

- [Area Index](../)