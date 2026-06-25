---
title: "HAuthTicket"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HAuthTicket`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# HAuthTicket

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public struct HAuthTicket`
**Base:** none
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/HAuthTicket.cs`

## Overview

`HAuthTicket` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### HAuthTicket
`public struct HAuthTicket(uint value)`

**Purpose:** Handles logic related to `h auth ticket`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### Equals
`public override bool Equals(object other)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### HAuthTicket
`public static explicit operator HAuthTicket(uint value)`

**Purpose:** Handles logic related to `h auth ticket`.

### uint
`public static explicit operator uint(HAuthTicket that)`

**Purpose:** Handles logic related to `uint`.

### Equals
`public bool Equals(HAuthTicket other)`

**Purpose:** Handles logic related to `equals`.

### CompareTo
`public int CompareTo(HAuthTicket other)`

**Purpose:** Handles logic related to `compare to`.

## Usage Example

```csharp
var value = new HAuthTicket();
value.HAuthTicket(0);
```

## See Also

- [Complete Class Catalog](../catalog)