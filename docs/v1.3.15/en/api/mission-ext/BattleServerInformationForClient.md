<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BattleServerInformationForClient`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BattleServerInformationForClient

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct BattleServerInformationForClient`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Diamond/BattleServerInformationForClient.cs`

## Overview

`BattleServerInformationForClient` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MatchId` | `public string MatchId { get; set; }` |
| `ServerAddress` | `public string ServerAddress { get; set; }` |
| `ServerPort` | `public ushort ServerPort { get; set; }` |
| `PeerIndex` | `public int PeerIndex { get; set; }` |
| `TeamNo` | `public int TeamNo { get; set; }` |
| `SessionKey` | `public int SessionKey { get; set; }` |
| `SceneName` | `public string SceneName { get; set; }` |
| `GameType` | `public string GameType { get; set; }` |

## Usage Example

```csharp
var value = new BattleServerInformationForClient();
```

## See Also

- [Complete Class Catalog](../catalog)