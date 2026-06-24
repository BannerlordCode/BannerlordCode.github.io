<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PlayerInfo`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PlayerInfo

**Namespace:** TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PlayerInfo`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData/PlayerInfo.cs`

## Overview

`PlayerInfo` lives in `TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PlayerId` | `public string PlayerId { get; set; }` |
| `Username` | `public string Username { get; set; }` |
| `ForcedIndex` | `public int ForcedIndex { get; set; }` |
| `TeamNo` | `public int TeamNo { get; set; }` |
| `Kill` | `public int Kill { get; set; }` |
| `Death` | `public int Death { get; set; }` |
| `Assist` | `public int Assist { get; set; }` |

## Key Methods

### HasSameContentWith
`public bool HasSameContentWith(PlayerInfo other)`

**Purpose:** Checks whether the current object has/contains `same content with`.

## Usage Example

```csharp
var value = new PlayerInfo();
value.HasSameContentWith(other);
```

## See Also

- [Complete Class Catalog](../catalog)