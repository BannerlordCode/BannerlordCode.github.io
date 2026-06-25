---
title: "HSteamNetPollGroup"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HSteamNetPollGroup`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# HSteamNetPollGroup

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public struct HSteamNetPollGroup`
**Base:** none
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/HSteamNetPollGroup.cs`

## Overview

`HSteamNetPollGroup` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### HSteamNetPollGroup
`public struct HSteamNetPollGroup(uint value)`

**Purpose:** Handles logic related to `h steam net poll group`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### Equals
`public override bool Equals(object other)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### HSteamNetPollGroup
`public static explicit operator HSteamNetPollGroup(uint value)`

**Purpose:** Handles logic related to `h steam net poll group`.

### uint
`public static explicit operator uint(HSteamNetPollGroup that)`

**Purpose:** Handles logic related to `uint`.

### Equals
`public bool Equals(HSteamNetPollGroup other)`

**Purpose:** Handles logic related to `equals`.

### CompareTo
`public int CompareTo(HSteamNetPollGroup other)`

**Purpose:** Handles logic related to `compare to`.

## Usage Example

```csharp
var value = new HSteamNetPollGroup();
value.HSteamNetPollGroup(0);
```

## See Also

- [Complete Class Catalog](../catalog)