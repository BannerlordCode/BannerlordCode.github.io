<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PlayerBattleInfo`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PlayerBattleInfo

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PlayerBattleInfo`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Diamond/PlayerBattleInfo.cs`

## Overview

`PlayerBattleInfo` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PlayerId` | `public PlayerId PlayerId { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `TeamNo` | `public int TeamNo { get; set; }` |
| `Fled` | `public bool Fled { get; }` |
| `Disconnected` | `public bool Disconnected { get; set; }` |
| `JoinType` | `public BattleJoinType JoinType { get; set; }` |
| `PeerIndex` | `public int PeerIndex { get; set; }` |
| `CurrentState` | `public PlayerBattleInfo.State CurrentState { get; }` |

## Key Methods

### Flee
`public void Flee()`

**Purpose:** Handles logic related to `flee`.

### Disconnect
`public void Disconnect()`

**Purpose:** Handles logic related to `disconnect`.

### Initialize
`public void Initialize(int peerIndex)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### RejoinBattle
`public void RejoinBattle(int teamNo)`

**Purpose:** Handles logic related to `rejoin battle`.

### Clone
`public PlayerBattleInfo Clone()`

**Purpose:** Handles logic related to `clone`.

## Usage Example

```csharp
var value = new PlayerBattleInfo();
value.Flee();
```

## See Also

- [Complete Class Catalog](../catalog)