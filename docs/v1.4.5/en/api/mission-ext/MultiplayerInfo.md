<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerInfo`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerInfo

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerInfo`
**Base:** none
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/MultiplayerInfo.cs`

## Overview

`MultiplayerInfo` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsMultiplayerTeamAvailable
`public bool IsMultiplayerTeamAvailable(int peerNo, int teamNo)`

**Purpose:** Handles logic related to `is multiplayer team available`.

## Usage Example

```csharp
var value = new MultiplayerInfo();
value.IsMultiplayerTeamAvailable(0, 0);
```

## See Also

- [Complete Class Catalog](../catalog)