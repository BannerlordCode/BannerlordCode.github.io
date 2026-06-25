---
title: "ISteamMatchmakingRulesResponse"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ISteamMatchmakingRulesResponse`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ISteamMatchmakingRulesResponse

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public class ISteamMatchmakingRulesResponse`
**Base:** none
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/ISteamMatchmakingRulesResponse.cs`

## Overview

`ISteamMatchmakingRulesResponse` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RulesResponded
`public delegate void RulesResponded(string pchRule, string pchValue)`

**Purpose:** Handles logic related to `rules responded`.

### RulesFailedToRespond
`public delegate void RulesFailedToRespond()`

**Purpose:** Handles logic related to `rules failed to respond`.

### RulesRefreshComplete
`public delegate void RulesRefreshComplete()`

**Purpose:** Handles logic related to `rules refresh complete`.

### InternalRulesResponded
`public delegate void InternalRulesResponded(IntPtr thisptr, IntPtr pchRule, IntPtr pchValue)`

**Purpose:** Handles logic related to `internal rules responded`.

### InternalRulesFailedToRespond
`public delegate void InternalRulesFailedToRespond(IntPtr thisptr)`

**Purpose:** Handles logic related to `internal rules failed to respond`.

### InternalRulesRefreshComplete
`public delegate void InternalRulesRefreshComplete(IntPtr thisptr)`

**Purpose:** Handles logic related to `internal rules refresh complete`.

### IntPtr
`public static explicit operator IntPtr(ISteamMatchmakingRulesResponse that)`

**Purpose:** Handles logic related to `int ptr`.

## Usage Example

```csharp
var value = new ISteamMatchmakingRulesResponse();
value.RulesResponded("example", "example");
```

## See Also

- [Complete Class Catalog](../catalog)