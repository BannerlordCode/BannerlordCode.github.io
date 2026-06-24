<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BadgeOwnerKillTracker`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BadgeOwnerKillTracker

**Namespace:** TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BadgeOwnerKillTracker : GameBadgeTracker`
**Base:** `GameBadgeTracker`
**File:** `TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/BadgeOwnerKillTracker.cs`

## Overview

`BadgeOwnerKillTracker` lives in `TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnPlayerJoin
`public override void OnPlayerJoin(PlayerData playerData)`

**Purpose:** Called when the `player join` event is raised.

### OnKill
`public override void OnKill(KillData killData)`

**Purpose:** Called when the `kill` event is raised.

## Usage Example

```csharp
var value = new BadgeOwnerKillTracker();
value.OnPlayerJoin(playerData);
```

## See Also

- [Complete Class Catalog](../catalog)