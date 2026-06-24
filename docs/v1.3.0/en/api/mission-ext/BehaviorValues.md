<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BehaviorValues`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BehaviorValues

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct BehaviorValues`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/HumanAIComponent.cs`

## Overview

`BehaviorValues` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetValueAt
`public float GetValueAt(float x)`

**Purpose:** Gets the current value of `value at`.

## Usage Example

```csharp
var value = new BehaviorValues();
value.GetValueAt(0);
```

## See Also

- [Complete Class Catalog](../catalog)