<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HServerListRequest`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# HServerListRequest

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public struct HServerListRequest`
**Base:** none
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/HServerListRequest.cs`

## Overview

`HServerListRequest` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### HServerListRequest
`public struct HServerListRequest(IntPtr value)`

**Purpose:** Handles logic related to `h server list request`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### Equals
`public override bool Equals(object other)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### HServerListRequest
`public static explicit operator HServerListRequest(IntPtr value)`

**Purpose:** Handles logic related to `h server list request`.

### IntPtr
`public static explicit operator IntPtr(HServerListRequest that)`

**Purpose:** Handles logic related to `int ptr`.

### Equals
`public bool Equals(HServerListRequest other)`

**Purpose:** Handles logic related to `equals`.

## Usage Example

```csharp
var value = new HServerListRequest();
value.HServerListRequest(value);
```

## See Also

- [Complete Class Catalog](../catalog)