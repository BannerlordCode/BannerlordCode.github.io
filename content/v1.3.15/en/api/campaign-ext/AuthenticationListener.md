---
title: "AuthenticationListener"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AuthenticationListener`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AuthenticationListener

**Namespace:** TaleWorlds.PlatformService.GOG
**Module:** TaleWorlds.PlatformService
**Type:** `public class AuthenticationListener : GlobalAuthListener`
**Base:** `GlobalAuthListener`
**File:** `TaleWorlds.PlatformService.GOG/AuthenticationListener.cs`

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

**Purpose:** Called when the `auth success` event is raised.

### OnAuthFailure
`public override void OnAuthFailure(IAuthListener.FailureReason failureReason)`

**Purpose:** Called when the `auth failure` event is raised.

### OnAuthLost
`public override void OnAuthLost()`

**Purpose:** Called when the `auth lost` event is raised.

## Usage Example

```csharp
var value = new AuthenticationListener();
value.OnAuthSuccess();
```

## See Also

- [Complete Class Catalog](../catalog)