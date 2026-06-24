<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AttackEntityOrderSecondaryDetachment`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AttackEntityOrderSecondaryDetachment

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AttackEntityOrderSecondaryDetachment`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/AttackEntityOrderSecondaryDetachment.cs`

## Overview

`AttackEntityOrderSecondaryDetachment` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### TickOccasionally
`public void TickOccasionally(Formation formation)`

**Purpose:** Handles logic related to `tick occasionally`.

### Disband
`public void Disband(Formation formation)`

**Purpose:** Handles logic related to `disband`.

## Usage Example

```csharp
var value = new AttackEntityOrderSecondaryDetachment();
value.TickOccasionally(formation);
```

## See Also

- [Complete Class Catalog](../catalog)