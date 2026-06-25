---
title: "MBTeam"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBTeam`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBTeam

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct MBTeam`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MBTeam.cs`

## Overview

`MBTeam` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `InvalidTeam` | `public static MBTeam InvalidTeam { get; }` |
| `IsValid` | `public bool IsValid { get; }` |

## Key Methods

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### Equals
`public override bool Equals(object obj)`

**Purpose:** Handles logic related to `equals`.

### IsEnemyOf
`public bool IsEnemyOf(MBTeam otherTeam)`

**Purpose:** Handles logic related to `is enemy of`.

### SetIsEnemyOf
`public void SetIsEnemyOf(MBTeam otherTeam, bool isEnemyOf)`

**Purpose:** Sets the value or state of `is enemy of`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

## Usage Example

```csharp
var value = new MBTeam();
value.GetHashCode();
```

## See Also

- [Complete Class Catalog](../catalog)