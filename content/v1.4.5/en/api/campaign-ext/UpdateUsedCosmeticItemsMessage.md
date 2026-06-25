---
title: "UpdateUsedCosmeticItemsMessage"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `UpdateUsedCosmeticItemsMessage`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# UpdateUsedCosmeticItemsMessage

**Namespace:** Messages.FromClient.ToLobbyServer
**Module:** Messages.FromClient
**Type:** `public class UpdateUsedCosmeticItemsMessage : Message`
**Base:** `Message`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/Messages.FromClient.ToLobbyServer/UpdateUsedCosmeticItemsMessage.cs`

## Overview

`UpdateUsedCosmeticItemsMessage` lives in `Messages.FromClient.ToLobbyServer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Messages.FromClient.ToLobbyServer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `UsedCosmetics` | `public List<CosmeticItemInfo> UsedCosmetics { get; }` |

## Usage Example

```csharp
var example = new UpdateUsedCosmeticItemsMessage();
```

## See Also

- [Complete Class Catalog](../catalog)