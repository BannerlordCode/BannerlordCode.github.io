<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ServerMessage`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ServerMessage

**Namespace:** NetworkMessages.FromServer
**Module:** NetworkMessages.FromServer
**Type:** `public sealed class ServerMessage : GameNetworkMessage`
**Base:** `GameNetworkMessage`
**File:** `TaleWorlds.MountAndBlade/NetworkMessages/FromServer/ServerMessage.cs`

## Overview

`ServerMessage` lives in `NetworkMessages.FromServer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `NetworkMessages.FromServer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Message` | `public string Message { get; }` |
| `IsMessageTextId` | `public bool IsMessageTextId { get; }` |
| `IsAdminAnnouncement` | `public bool IsAdminAnnouncement { get; }` |

## Usage Example

```csharp
var example = new ServerMessage();
```

## See Also

- [Complete Class Catalog](../catalog)