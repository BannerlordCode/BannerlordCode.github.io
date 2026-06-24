<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RTime32`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# RTime32

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public struct RTime32`
**Base:** none
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/RTime32.cs`

## Overview

`RTime32` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RTime32
`public struct RTime32(uint value)`

**Purpose:** Handles logic related to `r time32`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### Equals
`public override bool Equals(object other)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### RTime32
`public static explicit operator RTime32(uint value)`

**Purpose:** Handles logic related to `r time32`.

### uint
`public static explicit operator uint(RTime32 that)`

**Purpose:** Handles logic related to `uint`.

### Equals
`public bool Equals(RTime32 other)`

**Purpose:** Handles logic related to `equals`.

### CompareTo
`public int CompareTo(RTime32 other)`

**Purpose:** Handles logic related to `compare to`.

## Usage Example

```csharp
var value = new RTime32();
value.RTime32(0);
```

## See Also

- [Complete Class Catalog](../catalog)