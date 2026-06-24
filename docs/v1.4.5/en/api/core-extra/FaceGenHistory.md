<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FaceGenHistory`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# FaceGenHistory

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class FaceGenHistory`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/FaceGenHistory.cs`

## Overview

`FaceGenHistory` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ClearHistory
`public void ClearHistory()`

**Purpose:** Handles logic related to `clear history`.

## Usage Example

```csharp
var value = new FaceGenHistory();
value.ClearHistory();
```

## See Also

- [Complete Class Catalog](../catalog)