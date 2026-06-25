---
title: "AddFriendMessage"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AddFriendMessage`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AddFriendMessage

**Namespace:** Messages.FromClient.ToLobbyServer
**Module:** Messages.FromClient
**Type:** `public class AddFriendMessage : Message`
**Base:** `Message`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/Messages.FromClient.ToLobbyServer/AddFriendMessage.cs`

## Overview

`AddFriendMessage` lives in `Messages.FromClient.ToLobbyServer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Messages.FromClient.ToLobbyServer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `FriendId` | `public PlayerId FriendId { get; }` |
| `DontUseNameForUnknownPlayer` | `public bool DontUseNameForUnknownPlayer { get; }` |

## Usage Example

```csharp
var example = new AddFriendMessage();
```

## See Also

- [Complete Class Catalog](../catalog)