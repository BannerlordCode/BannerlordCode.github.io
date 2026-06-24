<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SteamInventoryResult_t`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SteamInventoryResult_t

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public struct SteamInventoryResult_t`
**Base:** none
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamInventoryResult_t.cs`

## Overview

`SteamInventoryResult_t` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SteamInventoryResult_t
`public struct SteamInventoryResult_t(int value)`

**Purpose:** Handles logic related to `steam inventory result_t`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### Equals
`public override bool Equals(object other)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### SteamInventoryResult_t
`public static explicit operator SteamInventoryResult_t(int value)`

**Purpose:** Handles logic related to `steam inventory result_t`.

### int
`public static explicit operator int(SteamInventoryResult_t that)`

**Purpose:** Handles logic related to `int`.

### Equals
`public bool Equals(SteamInventoryResult_t other)`

**Purpose:** Handles logic related to `equals`.

### CompareTo
`public int CompareTo(SteamInventoryResult_t other)`

**Purpose:** Handles logic related to `compare to`.

## Usage Example

```csharp
var value = new SteamInventoryResult_t();
value.SteamInventoryResult_t(0);
```

## See Also

- [Complete Class Catalog](../catalog)