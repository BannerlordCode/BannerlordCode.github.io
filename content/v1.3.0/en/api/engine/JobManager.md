---
title: "JobManager"
description: "Auto-generated class reference for JobManager."
---
# JobManager

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public class JobManager`
**Base:** none
**File:** `TaleWorlds.Engine/JobManager.cs`

## Overview

`JobManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `JobManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AddJob
`public void AddJob(Job job)`

**Purpose:** **Purpose:** Adds job to the current collection or state.

```csharp
// Obtain an instance of JobManager from the subsystem API first
JobManager jobManager = ...;
jobManager.AddJob(job);
```

## Usage Example

```csharp
var manager = JobManager.Current;
```

## See Also

- [Area Index](../)