---
title: "MissionTime"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionTime`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionTime

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct MissionTime : IComparable<MissionTime>`
**Base:** `IComparable<MissionTime>`
**Area:** mission-ext

## Overview

`MissionTime` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `NumberOfTicks` | `public long NumberOfTicks { get; }` |
| `DeltaTime` | `public static MissionTime DeltaTime { get; }` |
| `Now` | `public static MissionTime Now { get; }` |
| `IsFuture` | `public bool IsFuture { get; }` |
| `IsPast` | `public bool IsPast { get; }` |
| `IsNow` | `public bool IsNow { get; }` |
| `ElapsedHours` | `public float ElapsedHours { get; }` |
| `ElapsedSeconds` | `public float ElapsedSeconds { get; }` |
| `ElapsedMilliseconds` | `public float ElapsedMilliseconds { get; }` |
| `ToHours` | `public double ToHours { get; }` |
| `ToMinutes` | `public double ToMinutes { get; }` |
| `ToSeconds` | `public double ToSeconds { get; }` |
| `ToMilliseconds` | `public double ToMilliseconds { get; }` |
| `Zero` | `public static MissionTime Zero { get; }` |

## Key Methods

### MillisecondsFromNow
`public static MissionTime MillisecondsFromNow(float valueInMilliseconds)`

**Purpose:** Handles logic related to `milliseconds from now`.

### SecondsFromNow
`public static MissionTime SecondsFromNow(float valueInSeconds)`

**Purpose:** Handles logic related to `seconds from now`.

### Equals
`public bool Equals(MissionTime other)`

**Purpose:** Handles logic related to `equals`.

### Equals
`public override bool Equals(object obj)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### CompareTo
`public int CompareTo(MissionTime other)`

**Purpose:** Handles logic related to `compare to`.

### Milliseconds
`public static MissionTime Milliseconds(float valueInMilliseconds)`

**Purpose:** Handles logic related to `milliseconds`.

### Seconds
`public static MissionTime Seconds(float valueInSeconds)`

**Purpose:** Handles logic related to `seconds`.

### Minutes
`public static MissionTime Minutes(float valueInMinutes)`

**Purpose:** Handles logic related to `minutes`.

### Hours
`public static MissionTime Hours(float valueInHours)`

**Purpose:** Handles logic related to `hours`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
MissionTime.MillisecondsFromNow(0);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
