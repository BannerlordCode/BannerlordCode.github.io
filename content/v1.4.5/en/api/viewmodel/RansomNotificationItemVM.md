---
title: "RansomNotificationItemVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RansomNotificationItemVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# RansomNotificationItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class RansomNotificationItemVM : MapNotificationItemBaseVM`
**Base:** `MapNotificationItemBaseVM`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes/RansomNotificationItemVM.cs`

## Overview

`RansomNotificationItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

## Usage Example

```csharp
var value = new RansomNotificationItemVM();
value.OnFinalize();
```

## See Also

- [Complete Class Catalog](../catalog)