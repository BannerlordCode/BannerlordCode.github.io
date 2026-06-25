---
title: "AuthenticationListener"
description: "Auto-generated class reference for AuthenticationListener."
---
# AuthenticationListener

**Namespace:** TaleWorlds.PlatformService.GOG
**Module:** TaleWorlds.PlatformService
**Type:** `public class AuthenticationListener : GlobalAuthListener`
**Base:** `GlobalAuthListener`
**File:** `bin/TaleWorlds.PlatformService.GOG/TaleWorlds.PlatformService.GOG/AuthenticationListener.cs`

## Overview

`AuthenticationListener` lives in `TaleWorlds.PlatformService.GOG` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.PlatformService.GOG` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `GotResult` | `public bool GotResult { get; }` |

## Key Methods

### OnAuthSuccess
`public override void OnAuthSuccess()`

**Purpose:** Invoked when the `auth success` event is raised.

```csharp
// Obtain an instance of AuthenticationListener from the subsystem API first
AuthenticationListener authenticationListener = ...;
authenticationListener.OnAuthSuccess();
```

### OnAuthFailure
`public override void OnAuthFailure(FailureReason failureReason)`

**Purpose:** Invoked when the `auth failure` event is raised.

```csharp
// Obtain an instance of AuthenticationListener from the subsystem API first
AuthenticationListener authenticationListener = ...;
authenticationListener.OnAuthFailure(failureReason);
```

### OnAuthLost
`public override void OnAuthLost()`

**Purpose:** Invoked when the `auth lost` event is raised.

```csharp
// Obtain an instance of AuthenticationListener from the subsystem API first
AuthenticationListener authenticationListener = ...;
authenticationListener.OnAuthLost();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
AuthenticationListener authenticationListener = ...;
authenticationListener.OnAuthSuccess();
```

## See Also

- [Area Index](../)