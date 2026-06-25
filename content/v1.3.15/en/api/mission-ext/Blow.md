---
title: "Blow"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Blow`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Blow

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct Blow`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/Blow.cs`

## Overview

`Blow` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsMissile` | `public bool IsMissile { get; }` |

## Key Methods

### IsBlowCrit
`public bool IsBlowCrit(int maxHitPointsOfVictim)`

**Purpose:** Handles logic related to `is blow crit`.

### IsBlowLow
`public bool IsBlowLow(int maxHitPointsOfVictim)`

**Purpose:** Handles logic related to `is blow low`.

### IsHeadShot
`public bool IsHeadShot()`

**Purpose:** Handles logic related to `is head shot`.

## Usage Example

```csharp
var value = new Blow();
value.IsBlowCrit(0);
```

## See Also

- [Complete Class Catalog](../catalog)