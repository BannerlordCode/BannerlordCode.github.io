---
title: "ProposeCallToWarOfferNotificationItemVM"
description: "Auto-generated class reference for ProposeCallToWarOfferNotificationItemVM."
---
# ProposeCallToWarOfferNotificationItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ProposeCallToWarOfferNotificationItemVM : MapNotificationItemBaseVM`
**Base:** `MapNotificationItemBaseVM`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes/ProposeCallToWarOfferNotificationItemVM.cs`

## Overview

`ProposeCallToWarOfferNotificationItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of ProposeCallToWarOfferNotificationItemVM from the subsystem API first
ProposeCallToWarOfferNotificationItemVM proposeCallToWarOfferNotificationItemVM = ...;
proposeCallToWarOfferNotificationItemVM.OnFinalize();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ProposeCallToWarOfferNotificationItemVM proposeCallToWarOfferNotificationItemVM = ...;
proposeCallToWarOfferNotificationItemVM.OnFinalize();
```

## See Also

- [Area Index](../)