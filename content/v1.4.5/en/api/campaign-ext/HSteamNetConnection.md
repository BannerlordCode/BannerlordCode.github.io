---
title: "HSteamNetConnection"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HSteamNetConnection`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# HSteamNetConnection

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public struct HSteamNetConnection`
**Base:** none
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/HSteamNetConnection.cs`

## Overview

`HSteamNetConnection` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### HSteamNetConnection
`public struct HSteamNetConnection(uint value)`

**Purpose:** Handles logic related to `h steam net connection`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### Equals
`public override bool Equals(object other)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### HSteamNetConnection
`public static explicit operator HSteamNetConnection(uint value)`

**Purpose:** Handles logic related to `h steam net connection`.

### uint
`public static explicit operator uint(HSteamNetConnection that)`

**Purpose:** Handles logic related to `uint`.

### Equals
`public bool Equals(HSteamNetConnection other)`

**Purpose:** Handles logic related to `equals`.

### CompareTo
`public int CompareTo(HSteamNetConnection other)`

**Purpose:** Handles logic related to `compare to`.

## Usage Example

```csharp
var value = new HSteamNetConnection();
value.HSteamNetConnection(0);
```

## See Also

- [Complete Class Catalog](../catalog)