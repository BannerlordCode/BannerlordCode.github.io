<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MountHealthCondition`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MountHealthCondition

**Namespace:** TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Conditions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MountHealthCondition : MPPerkCondition`
**Base:** `MPPerkCondition`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Conditions/MountHealthCondition.cs`

## Overview

`MountHealthCondition` lives in `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Conditions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Conditions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Check
`public override bool Check(MissionPeer peer)`

**Purpose:** Handles logic related to `check`.

### Check
`public override bool Check(Agent agent)`

**Purpose:** Handles logic related to `check`.

## Usage Example

```csharp
var value = new MountHealthCondition();
value.Check(peer);
```

## See Also

- [Complete Class Catalog](../catalog)