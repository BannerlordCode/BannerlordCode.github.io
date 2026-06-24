<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SNetListenSocket_t`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SNetListenSocket_t

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public struct SNetListenSocket_t`
**Base:** none
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SNetListenSocket_t.cs`

## Overview

`SNetListenSocket_t` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SNetListenSocket_t
`public struct SNetListenSocket_t(uint value)`

**Purpose:** Handles logic related to `s net listen socket_t`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### Equals
`public override bool Equals(object other)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### SNetListenSocket_t
`public static explicit operator SNetListenSocket_t(uint value)`

**Purpose:** Handles logic related to `s net listen socket_t`.

### uint
`public static explicit operator uint(SNetListenSocket_t that)`

**Purpose:** Handles logic related to `uint`.

### Equals
`public bool Equals(SNetListenSocket_t other)`

**Purpose:** Handles logic related to `equals`.

### CompareTo
`public int CompareTo(SNetListenSocket_t other)`

**Purpose:** Handles logic related to `compare to`.

## Usage Example

```csharp
var value = new SNetListenSocket_t();
value.SNetListenSocket_t(0);
```

## See Also

- [Complete Class Catalog](../catalog)