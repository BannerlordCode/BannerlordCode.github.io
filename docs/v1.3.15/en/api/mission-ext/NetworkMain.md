<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NetworkMain`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NetworkMain

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class NetworkMain`
**Area:** mission-ext

## Overview

`NetworkMain` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `GameClient` | `public static LobbyClient GameClient { get; }` |
| `CommunityClient` | `public static CommunityClient CommunityClient { get; }` |
| `CustomBattleServer` | `public static CustomBattleServer CustomBattleServer { get; }` |

## Key Methods

### SetPeers
`public static void SetPeers(LobbyClient gameClient, CommunityClient communityClient, CustomBattleServer customBattleServer)`

**Purpose:** Sets the value or state of `peers`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
NetworkMain.SetPeers(gameClient, communityClient, customBattleServer);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
