---
title: "RemoveClanOfficerRoleForPlayerMessage"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RemoveClanOfficerRoleForPlayerMessage`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# RemoveClanOfficerRoleForPlayerMessage

**Namespace:** Messages.FromClient.ToLobbyServer
**Module:** Messages.FromClient
**Type:** `public class RemoveClanOfficerRoleForPlayerMessage : Message`
**Base:** `Message`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/Messages.FromClient.ToLobbyServer/RemoveClanOfficerRoleForPlayerMessage.cs`

## Overview

`RemoveClanOfficerRoleForPlayerMessage` lives in `Messages.FromClient.ToLobbyServer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Messages.FromClient.ToLobbyServer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `RemovedOfficerId` | `public PlayerId RemovedOfficerId { get; }` |

## Usage Example

```csharp
var example = new RemoveClanOfficerRoleForPlayerMessage();
```

## See Also

- [Complete Class Catalog](../catalog)