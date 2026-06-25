---
title: "PartyLeaderChangeNotificationVM"
description: "Auto-generated class reference for PartyLeaderChangeNotificationVM."
---
# PartyLeaderChangeNotificationVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PartyLeaderChangeNotificationVM : MapNotificationItemBaseVM`
**Base:** `MapNotificationItemBaseVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapNotificationTypes/PartyLeaderChangeNotificationVM.cs`

## Overview

`PartyLeaderChangeNotificationVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnFinalize
`public override void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of PartyLeaderChangeNotificationVM from the subsystem API first
PartyLeaderChangeNotificationVM partyLeaderChangeNotificationVM = ...;
partyLeaderChangeNotificationVM.OnFinalize();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PartyLeaderChangeNotificationVM partyLeaderChangeNotificationVM = ...;
partyLeaderChangeNotificationVM.OnFinalize();
```

## See Also

- [Area Index](../)