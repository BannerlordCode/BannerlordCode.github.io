<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FireTrebuchet`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# FireTrebuchet

**Namespace:** TaleWorlds.MountAndBlade.Objects.Siege
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FireTrebuchet : Trebuchet`
**Base:** `Trebuchet`
**File:** `TaleWorlds.MountAndBlade/Objects/Siege/FireTrebuchet.cs`

## Overview

`FireTrebuchet` lives in `TaleWorlds.MountAndBlade.Objects.Siege` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Objects.Siege` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetSiegeEngineType
`public override SiegeEngineType GetSiegeEngineType()`

**Purpose:** Gets the current value of `siege engine type`.

### ProcessTargetValue
`public override float ProcessTargetValue(float baseValue, TargetFlags flags)`

**Purpose:** Handles logic related to `process target value`.

## Usage Example

```csharp
var value = new FireTrebuchet();
value.GetSiegeEngineType();
```

## See Also

- [Complete Class Catalog](../catalog)