<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `JobManager`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# JobManager

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public class JobManager`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Engine/TaleWorlds.Engine/JobManager.cs`

## Overview

`JobManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `JobManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AddJob
`public void AddJob(Job job)`

**Purpose:** Adds `job` to the current collection or state.

## Usage Example

```csharp
var manager = JobManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)