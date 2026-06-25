---
title: "Threat"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Threat`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Threat

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class Threat`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/Threat.cs`

## Overview

`Threat` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; }` |
| `TargetingPosition` | `public Vec3 TargetingPosition { get; }` |

## Key Methods

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### GetGlobalVelocity
`public Vec3 GetGlobalVelocity()`

**Purpose:** Gets the current value of `global velocity`.

### Equals
`public override bool Equals(object obj)`

**Purpose:** Handles logic related to `equals`.

### DisplayDebugInfo
`public void DisplayDebugInfo()`

**Purpose:** Handles logic related to `display debug info`.

## Usage Example

```csharp
var value = new Threat();
value.GetHashCode();
```

## See Also

- [Complete Class Catalog](../catalog)