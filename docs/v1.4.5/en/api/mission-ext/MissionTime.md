<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionTime`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionTime

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct MissionTime : IComparable<MissionTime>`
**Base:** `IComparable<MissionTime>`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionTime.cs`

## Overview

`MissionTime` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

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
MissionTime.MillisecondsFromNow(0);
```

## See Also

- [Complete Class Catalog](../catalog)