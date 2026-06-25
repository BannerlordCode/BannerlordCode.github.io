---
title: "GetRankedLeaderboardCountMessageResult"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GetRankedLeaderboardCountMessageResult`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GetRankedLeaderboardCountMessageResult

**Namespace:** Messages.FromLobbyServer.ToClient
**Module:** Messages.FromLobbyServer
**Type:** `public class GetRankedLeaderboardCountMessageResult : FunctionResult`
**Base:** `FunctionResult`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/Messages.FromLobbyServer.ToClient/GetRankedLeaderboardCountMessageResult.cs`

## Overview

`GetRankedLeaderboardCountMessageResult` lives in `Messages.FromLobbyServer.ToClient` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Messages.FromLobbyServer.ToClient` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Count` | `public int Count { get; }` |

## Usage Example

```csharp
var example = new GetRankedLeaderboardCountMessageResult();
```

## See Also

- [Complete Class Catalog](../catalog)