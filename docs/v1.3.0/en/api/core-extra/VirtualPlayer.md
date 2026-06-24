<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VirtualPlayer`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# VirtualPlayer

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class VirtualPlayer`
**Base:** none
**File:** `TaleWorlds.Core/VirtualPlayer.cs`

## Overview

`VirtualPlayer` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PeerComponents` | `public static Dictionary<Type, object> PeerComponents { get; }` |
| `BannerCode` | `public string BannerCode { get; set; }` |
| `BodyProperties` | `public BodyProperties BodyProperties { get; }` |
| `Race` | `public int Race { get; }` |
| `IsFemale` | `public bool IsFemale { get; }` |
| `Id` | `public PlayerId Id { get; }` |
| `Index` | `public int Index { get; }` |
| `IsMine` | `public bool IsMine { get; }` |
| `UserName` | `public string UserName { get; }` |
| `ChosenBadgeIndex` | `public int ChosenBadgeIndex { get; set; }` |

## Key Methods

### Reset
`public static void Reset()`

**Purpose:** Resets `reset` to its initial state.

### AddComponent
`public PeerComponent AddComponent(Type peerComponentType)`

**Purpose:** Adds `component` to the current collection or state.

### AddComponent
`public PeerComponent AddComponent(uint componentId)`

**Purpose:** Adds `component` to the current collection or state.

### GetComponent
`public PeerComponent GetComponent(uint componentId)`

**Purpose:** Gets the current value of `component`.

### GetComponent
`public PeerComponent GetComponent(Type peerComponentType)`

**Purpose:** Gets the current value of `component`.

### RemoveComponent
`public void RemoveComponent(PeerComponent component)`

**Purpose:** Removes `component` from the current collection or state.

### OnDisconnect
`public void OnDisconnect()`

**Purpose:** Called when the `disconnect` event is raised.

### SynchronizeComponentsTo
`public void SynchronizeComponentsTo(VirtualPlayer peer)`

**Purpose:** Handles logic related to `synchronize components to`.

### UpdateIndexForReconnectingPlayer
`public void UpdateIndexForReconnectingPlayer(int playerIndex)`

**Purpose:** Updates the state or data of `index for reconnecting player`.

## Usage Example

```csharp
VirtualPlayer.Reset();
```

## See Also

- [Complete Class Catalog](../catalog)