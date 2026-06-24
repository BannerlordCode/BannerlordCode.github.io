<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StealthBox`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# StealthBox

**Namespace:** TaleWorlds.MountAndBlade.Objects
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class StealthBox : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Objects/StealthBox.cs`

## Overview

`StealthBox` lives in `TaleWorlds.MountAndBlade.Objects` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Objects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsPointInside
`public bool IsPointInside(Vec3 point)`

**Purpose:** Handles logic related to `is point inside`.

### IsAgentInside
`public bool IsAgentInside(Agent agent)`

**Purpose:** Handles logic related to `is agent inside`.

## Usage Example

```csharp
var value = new StealthBox();
value.IsPointInside(point);
```

## See Also

- [Complete Class Catalog](../catalog)