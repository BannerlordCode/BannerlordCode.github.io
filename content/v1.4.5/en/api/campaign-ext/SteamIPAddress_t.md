---
title: "SteamIPAddress_t"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SteamIPAddress_t`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SteamIPAddress_t

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public struct SteamIPAddress_t`
**Base:** none
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamIPAddress_t.cs`

## Overview

`SteamIPAddress_t` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ToIPAddress
`public IPAddress ToIPAddress()`

**Purpose:** Handles logic related to `to i p address`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### GetIPType
`public ESteamIPType GetIPType()`

**Purpose:** Gets the current value of `i p type`.

### IsSet
`public bool IsSet()`

**Purpose:** Handles logic related to `is set`.

## Usage Example

```csharp
var value = new SteamIPAddress_t();
value.ToIPAddress();
```

## See Also

- [Complete Class Catalog](../catalog)