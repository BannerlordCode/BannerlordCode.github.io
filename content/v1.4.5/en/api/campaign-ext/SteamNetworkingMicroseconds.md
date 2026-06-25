---
title: "SteamNetworkingMicroseconds"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SteamNetworkingMicroseconds`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SteamNetworkingMicroseconds

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public struct SteamNetworkingMicroseconds`
**Base:** none
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamNetworkingMicroseconds.cs`

## Overview

`SteamNetworkingMicroseconds` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SteamNetworkingMicroseconds
`public struct SteamNetworkingMicroseconds(long value)`

**Purpose:** Handles logic related to `steam networking microseconds`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### Equals
`public override bool Equals(object other)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### SteamNetworkingMicroseconds
`public static explicit operator SteamNetworkingMicroseconds(long value)`

**Purpose:** Handles logic related to `steam networking microseconds`.

### long
`public static explicit operator long(SteamNetworkingMicroseconds that)`

**Purpose:** Handles logic related to `long`.

### Equals
`public bool Equals(SteamNetworkingMicroseconds other)`

**Purpose:** Handles logic related to `equals`.

### CompareTo
`public int CompareTo(SteamNetworkingMicroseconds other)`

**Purpose:** Handles logic related to `compare to`.

## Usage Example

```csharp
var value = new SteamNetworkingMicroseconds();
value.SteamNetworkingMicroseconds(0);
```

## See Also

- [Complete Class Catalog](../catalog)