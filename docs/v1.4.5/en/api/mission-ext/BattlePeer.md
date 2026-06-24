<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BattlePeer`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BattlePeer

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattlePeer`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/BattlePeer.cs`

## Overview

`BattlePeer` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Index` | `public int Index { get; }` |
| `Name` | `public string Name { get; }` |
| `TeamNo` | `public int TeamNo { get; }` |
| `BattleJoinType` | `public BattleJoinType BattleJoinType { get; }` |
| `PlayerData` | `public PlayerData PlayerData { get; }` |
| `UsedCosmetics` | `public Dictionary<string, List<string>> UsedCosmetics { get; }` |
| `SessionKey` | `public int SessionKey { get; }` |
| `QuitType` | `public BattlePeerQuitType QuitType { get; }` |

## Key Methods

### Rejoin
`public void Rejoin(int teamNo)`

**Purpose:** Handles logic related to `rejoin`.

### InitializeSession
`public void InitializeSession(int index, int sessionKey)`

**Purpose:** Initializes the state, resources, or bindings for `session`.

## Usage Example

```csharp
var value = new BattlePeer();
value.Rejoin(0);
```

## See Also

- [Complete Class Catalog](../catalog)