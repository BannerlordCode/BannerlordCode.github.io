<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `UGCHandle_t`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# UGCHandle_t

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public struct UGCHandle_t`
**Base:** none
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/UGCHandle_t.cs`

## Overview

`UGCHandle_t` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### UGCHandle_t
`public struct UGCHandle_t(ulong value)`

**Purpose:** Handles logic related to `u g c handle_t`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### Equals
`public override bool Equals(object other)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### UGCHandle_t
`public static explicit operator UGCHandle_t(ulong value)`

**Purpose:** Handles logic related to `u g c handle_t`.

### ulong
`public static explicit operator ulong(UGCHandle_t that)`

**Purpose:** Handles logic related to `ulong`.

### Equals
`public bool Equals(UGCHandle_t other)`

**Purpose:** Handles logic related to `equals`.

### CompareTo
`public int CompareTo(UGCHandle_t other)`

**Purpose:** Handles logic related to `compare to`.

## Usage Example

```csharp
var value = new UGCHandle_t();
value.UGCHandle_t(0);
```

## See Also

- [Complete Class Catalog](../catalog)