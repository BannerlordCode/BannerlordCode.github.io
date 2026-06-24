<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HSteamUser`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# HSteamUser

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public struct HSteamUser`
**Base:** none
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/HSteamUser.cs`

## Overview

`HSteamUser` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### HSteamUser
`public struct HSteamUser(int value)`

**Purpose:** Handles logic related to `h steam user`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### Equals
`public override bool Equals(object other)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### HSteamUser
`public static explicit operator HSteamUser(int value)`

**Purpose:** Handles logic related to `h steam user`.

### int
`public static explicit operator int(HSteamUser that)`

**Purpose:** Handles logic related to `int`.

### Equals
`public bool Equals(HSteamUser other)`

**Purpose:** Handles logic related to `equals`.

### CompareTo
`public int CompareTo(HSteamUser other)`

**Purpose:** Handles logic related to `compare to`.

## Usage Example

```csharp
var value = new HSteamUser();
value.HSteamUser(0);
```

## See Also

- [Complete Class Catalog](../catalog)