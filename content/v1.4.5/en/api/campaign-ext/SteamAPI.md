---
title: "SteamAPI"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SteamAPI`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SteamAPI

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public static class SteamAPI`
**Base:** none
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamAPI.cs`

## Overview

`SteamAPI` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Init
`public static bool Init()`

**Purpose:** Initializes the state, resources, or bindings for `init`.

### Shutdown
`public static void Shutdown()`

**Purpose:** Handles logic related to `shutdown`.

### RestartAppIfNecessary
`public static bool RestartAppIfNecessary(AppId_t unOwnAppID)`

**Purpose:** Handles logic related to `restart app if necessary`.

### ReleaseCurrentThreadMemory
`public static void ReleaseCurrentThreadMemory()`

**Purpose:** Handles logic related to `release current thread memory`.

### RunCallbacks
`public static void RunCallbacks()`

**Purpose:** Handles logic related to `run callbacks`.

### IsSteamRunning
`public static bool IsSteamRunning()`

**Purpose:** Handles logic related to `is steam running`.

### GetHSteamPipe
`public static HSteamPipe GetHSteamPipe()`

**Purpose:** Gets the current value of `h steam pipe`.

### GetHSteamUser
`public static HSteamUser GetHSteamUser()`

**Purpose:** Gets the current value of `h steam user`.

## Usage Example

```csharp
SteamAPI.Init();
```

## See Also

- [Complete Class Catalog](../catalog)