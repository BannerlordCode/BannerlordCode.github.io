---
title: "QuestNotificationItemVM"
description: "Auto-generated class reference for QuestNotificationItemVM."
---
# QuestNotificationItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class QuestNotificationItemVM : MapNotificationItemBaseVM`
**Base:** `MapNotificationItemBaseVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapNotificationTypes/QuestNotificationItemVM.cs`

## Overview

`QuestNotificationItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ManualRefreshRelevantStatus
`public override void ManualRefreshRelevantStatus()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of QuestNotificationItemVM from the subsystem API first
QuestNotificationItemVM questNotificationItemVM = ...;
questNotificationItemVM.ManualRefreshRelevantStatus();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
QuestNotificationItemVM questNotificationItemVM = ...;
questNotificationItemVM.ManualRefreshRelevantStatus();
```

## See Also

- [Area Index](../)