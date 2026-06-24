<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BannerlordFriendListService`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BannerlordFriendListService

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BannerlordFriendListService : IFriendListService`
**Base:** `IFriendListService`
**File:** `TaleWorlds.MountAndBlade/BannerlordFriendListService.cs`

## Overview

`BannerlordFriendListService` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnFriendListReceived
`public void OnFriendListReceived(FriendInfo friends)`

**Purpose:** Called when the `friend list received` event is raised.

## Usage Example

```csharp
var value = new BannerlordFriendListService();
value.OnFriendListReceived(friends);
```

## See Also

- [Complete Class Catalog](../catalog)