---
title: "SteamNetworkingMessage_t"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SteamNetworkingMessage_t`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SteamNetworkingMessage_t

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public struct SteamNetworkingMessage_t`
**Base:** none
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamNetworkingMessage_t.cs`

## Overview

`SteamNetworkingMessage_t` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Release
`public void Release()`

**Purpose:** Handles logic related to `release`.

### Release
`public static void Release(IntPtr pointer)`

**Purpose:** Handles logic related to `release`.

### FromIntPtr
`public static SteamNetworkingMessage_t FromIntPtr(IntPtr pointer)`

**Purpose:** Handles logic related to `from int ptr`.

## Usage Example

```csharp
var value = new SteamNetworkingMessage_t();
value.Release();
```

## See Also

- [Complete Class Catalog](../catalog)