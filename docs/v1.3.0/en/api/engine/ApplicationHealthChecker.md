<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ApplicationHealthChecker`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ApplicationHealthChecker

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public class ApplicationHealthChecker`
**Base:** none
**File:** `TaleWorlds.Engine/ApplicationHealthChecker.cs`

## Overview

`ApplicationHealthChecker` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Start
`public void Start()`

**Purpose:** Handles logic related to `start`.

### Stop
`public void Stop()`

**Purpose:** Handles logic related to `stop`.

### Update
`public void Update()`

**Purpose:** Updates the state or data of `update`.

## Usage Example

```csharp
var value = new ApplicationHealthChecker();
value.Start();
```

## See Also

- [Complete Class Catalog](../catalog)