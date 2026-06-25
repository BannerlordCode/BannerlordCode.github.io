---
title: "PlayerConnectionInfo"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PlayerConnectionInfo`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PlayerConnectionInfo

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PlayerConnectionInfo`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/PlayerConnectionInfo.cs`

## Overview

`PlayerConnectionInfo` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SessionKey` | `public int SessionKey { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `NetworkPeer` | `public NetworkCommunicator NetworkPeer { get; set; }` |

## Key Methods

### AddParameter
`public void AddParameter(string name, object parameter)`

**Purpose:** Adds `parameter` to the current collection or state.

## Usage Example

```csharp
var value = new PlayerConnectionInfo();
value.AddParameter("example", parameter);
```

## See Also

- [Complete Class Catalog](../catalog)