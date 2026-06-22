<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `JobManager`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# JobManager

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public class JobManager`
**Base:** none
**File:** `TaleWorlds.Engine/JobManager.cs`

## Overview

`JobManager` is a manager (often reached via a Current singleton or Mission.Current). Use it to access/modify its managed subsystem.

## Key Methods

### AddJob
```csharp
public void AddJob(Job job)
```

## Usage Example

```csharp
// Typical usage of JobManager (Manager)
JobManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)