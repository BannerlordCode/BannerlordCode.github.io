---
title: "MissionMultiplayerTeamDeathmatchClient"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionMultiplayerTeamDeathmatchClient`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionMultiplayerTeamDeathmatchClient

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMultiplayerTeamDeathmatchClient : MissionMultiplayerGameModeBaseClient`
**Base:** `MissionMultiplayerGameModeBaseClient`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionMultiplayerTeamDeathmatchClient.cs`

## Overview

`MissionMultiplayerTeamDeathmatchClient` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

### OnGoldAmountChangedForRepresentative
`public override void OnGoldAmountChangedForRepresentative(MissionRepresentativeBase representative, int goldAmount)`

**Purpose:** Called when the `gold amount changed for representative` event is raised.

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### GetGoldAmount
`public override int GetGoldAmount()`

**Purpose:** Gets the current value of `gold amount`.

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Called when the `remove behavior` event is raised.

## Usage Example

```csharp
var value = new MissionMultiplayerTeamDeathmatchClient();
value.OnBehaviorInitialize();
```

## See Also

- [Complete Class Catalog](../catalog)