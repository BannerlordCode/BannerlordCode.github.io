<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EpicFriendListService`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EpicFriendListService

**Namespace:** TaleWorlds.PlatformService.Epic
**Module:** TaleWorlds.PlatformService
**Type:** `public class EpicFriendListService : IFriendListService`
**Base:** `IFriendListService`
**File:** `TaleWorlds.PlatformService.Epic/EpicFriendListService.cs`

## Overview

`EpicFriendListService` lives in `TaleWorlds.PlatformService.Epic` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.PlatformService.Epic` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### UserStatusChanged
`public void UserStatusChanged(PlayerId playerId)`

**Purpose:** Handles logic related to `user status changed`.

## Usage Example

```csharp
var value = new EpicFriendListService();
value.UserStatusChanged(playerId);
```

## See Also

- [Complete Class Catalog](../catalog)