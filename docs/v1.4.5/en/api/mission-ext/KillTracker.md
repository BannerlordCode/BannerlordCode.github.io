<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `KillTracker`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# KillTracker

**Namespace:** TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class KillTracker : GameBadgeTracker`
**Base:** `GameBadgeTracker`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges/KillTracker.cs`

## Overview

`KillTracker` lives in `TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnKill
`public override void OnKill(KillData killData)`

**Purpose:** Called when the `kill` event is raised.

## Usage Example

```csharp
var value = new KillTracker();
value.OnKill(killData);
```

## See Also

- [Complete Class Catalog](../catalog)