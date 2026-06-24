<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `servernetadr_t`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# servernetadr_t

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public struct servernetadr_t`
**Base:** none
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/servernetadr_t.cs`

## Overview

`servernetadr_t` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Init
`public void Init(uint ip, ushort usQueryPort, ushort usConnectionPort)`

**Purpose:** Initializes the state, resources, or bindings for `init`.

### GetQueryPort
`public ushort GetQueryPort()`

**Purpose:** Gets the current value of `query port`.

### SetQueryPort
`public void SetQueryPort(ushort usPort)`

**Purpose:** Sets the value or state of `query port`.

### GetConnectionPort
`public ushort GetConnectionPort()`

**Purpose:** Gets the current value of `connection port`.

### SetConnectionPort
`public void SetConnectionPort(ushort usPort)`

**Purpose:** Sets the value or state of `connection port`.

### GetIP
`public uint GetIP()`

**Purpose:** Gets the current value of `i p`.

### SetIP
`public void SetIP(uint unIP)`

**Purpose:** Sets the value or state of `i p`.

### GetConnectionAddressString
`public string GetConnectionAddressString()`

**Purpose:** Gets the current value of `connection address string`.

### GetQueryAddressString
`public string GetQueryAddressString()`

**Purpose:** Gets the current value of `query address string`.

### ToString
`public static string ToString(uint unIP, ushort usPort)`

**Purpose:** Handles logic related to `to string`.

### Equals
`public override bool Equals(object other)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### Equals
`public bool Equals(servernetadr_t other)`

**Purpose:** Handles logic related to `equals`.

### CompareTo
`public int CompareTo(servernetadr_t other)`

**Purpose:** Handles logic related to `compare to`.

## Usage Example

```csharp
var value = new servernetadr_t();
value.Init(0, 0, 0);
```

## See Also

- [Complete Class Catalog](../catalog)