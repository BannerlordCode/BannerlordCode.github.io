---
title: "AppId_t"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AppId_t`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AppId_t

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public struct AppId_t`
**Base:** none
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/AppId_t.cs`

## Overview

`AppId_t` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### AppId_t
`public struct AppId_t(uint value)`

**Purpose:** Handles logic related to `app id_t`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### Equals
`public override bool Equals(object other)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### AppId_t
`public static explicit operator AppId_t(uint value)`

**Purpose:** Handles logic related to `app id_t`.

### uint
`public static explicit operator uint(AppId_t that)`

**Purpose:** Handles logic related to `uint`.

### Equals
`public bool Equals(AppId_t other)`

**Purpose:** Handles logic related to `equals`.

### CompareTo
`public int CompareTo(AppId_t other)`

**Purpose:** Handles logic related to `compare to`.

## Usage Example

```csharp
var value = new AppId_t();
value.AppId_t(0);
```

## See Also

- [Complete Class Catalog](../catalog)