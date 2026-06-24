<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PlayerJoinGameResponseDataFromHost`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PlayerJoinGameResponseDataFromHost

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PlayerJoinGameResponseDataFromHost`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Diamond/PlayerJoinGameResponseDataFromHost.cs`

## Overview

`PlayerJoinGameResponseDataFromHost` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PlayerId` | `public PlayerId PlayerId { get; set; }` |
| `PeerIndex` | `public int PeerIndex { get; set; }` |
| `SessionKey` | `public int SessionKey { get; set; }` |
| `IsAdmin` | `public bool IsAdmin { get; set; }` |
| `CustomGameJoinResponse` | `public CustomGameJoinResponse CustomGameJoinResponse { get; set; }` |

## Usage Example

```csharp
var value = new PlayerJoinGameResponseDataFromHost();
```

## See Also

- [Complete Class Catalog](../catalog)