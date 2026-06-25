---
title: "EventBroadcastFlags"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EventBroadcastFlags`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EventBroadcastFlags

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public enum EventBroadcastFlags`
**Area:** mission-ext

## Overview

`EventBroadcastFlags` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `None` |
| `0` |
| `ExcludeTargetPlayer` |
| `1` |
| `ExcludeNoBloodStainsOption` |
| `2` |
| `ExcludeNoParticlesOption` |
| `4` |
| `ExcludeNoSoundOption` |
| `8` |
| `AddToMissionRecord` |
| `16` |
| `IncludeUnsynchronizedClients` |
| `32` |
| `ExcludeOtherTeamPlayers` |
| `64` |
| `ExcludePeerTeamPlayers` |
| `128` |
| `DontSendToPeers` |

## Usage Example

```csharp
EventBroadcastFlags example = EventBroadcastFlags.None;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
