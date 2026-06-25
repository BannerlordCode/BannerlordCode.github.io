---
title: "UserInformationRetrieveListener"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `UserInformationRetrieveListener`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# UserInformationRetrieveListener

**Namespace:** TaleWorlds.PlatformService.GOG
**Module:** TaleWorlds.PlatformService
**Type:** `public class UserInformationRetrieveListener : IUserInformationRetrieveListener`
**Base:** `IUserInformationRetrieveListener`
**File:** `Bannerlord.Source/bin/TaleWorlds.PlatformService.GOG/TaleWorlds.PlatformService.GOG/UserInformationRetrieveListener.cs`

## Overview

`UserInformationRetrieveListener` lives in `TaleWorlds.PlatformService.GOG` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.PlatformService.GOG` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `GotResult` | `public bool GotResult { get; }` |

## Key Methods

### OnUserInformationRetrieveFailure
`public override void OnUserInformationRetrieveFailure(GalaxyID userID, FailureReason failureReason)`

**Purpose:** Called when the `user information retrieve failure` event is raised.

### OnUserInformationRetrieveSuccess
`public override void OnUserInformationRetrieveSuccess(GalaxyID userID)`

**Purpose:** Called when the `user information retrieve success` event is raised.

## Usage Example

```csharp
var value = new UserInformationRetrieveListener();
value.OnUserInformationRetrieveFailure(userID, failureReason);
```

## See Also

- [Complete Class Catalog](../catalog)