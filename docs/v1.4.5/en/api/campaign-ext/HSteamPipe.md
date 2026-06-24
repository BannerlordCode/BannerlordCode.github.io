<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HSteamPipe`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# HSteamPipe

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public struct HSteamPipe`
**Base:** none
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/HSteamPipe.cs`

## Overview

`HSteamPipe` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### HSteamPipe
`public struct HSteamPipe(int value)`

**Purpose:** Handles logic related to `h steam pipe`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### Equals
`public override bool Equals(object other)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### HSteamPipe
`public static explicit operator HSteamPipe(int value)`

**Purpose:** Handles logic related to `h steam pipe`.

### int
`public static explicit operator int(HSteamPipe that)`

**Purpose:** Handles logic related to `int`.

### Equals
`public bool Equals(HSteamPipe other)`

**Purpose:** Handles logic related to `equals`.

### CompareTo
`public int CompareTo(HSteamPipe other)`

**Purpose:** Handles logic related to `compare to`.

## Usage Example

```csharp
var value = new HSteamPipe();
value.HSteamPipe(0);
```

## See Also

- [Complete Class Catalog](../catalog)