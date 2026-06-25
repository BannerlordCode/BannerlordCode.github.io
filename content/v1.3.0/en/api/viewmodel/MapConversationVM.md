---
title: "MapConversationVM"
description: "Auto-generated class reference for MapConversationVM."
---
# MapConversationVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapConversation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MapConversationVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapConversation/MapConversationVM.cs`

## Overview

`MapConversationVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapConversation` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapConversation` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DialogController` | `public MissionConversationVM DialogController { get; set; }` |
| `TableauData` | `public object TableauData { get; set; }` |
| `IsBarterActive` | `public bool IsBarterActive { get; set; }` |

## Key Methods

### ExecuteContinue
`public void ExecuteContinue()`

**Purpose:** Runs the operation or workflow associated with `continue`.

```csharp
// Obtain an instance of MapConversationVM from the subsystem API first
MapConversationVM mapConversationVM = ...;
mapConversationVM.ExecuteContinue();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Obtain an instance of MapConversationVM from the subsystem API first
MapConversationVM mapConversationVM = ...;
mapConversationVM.OnFinalize();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MapConversationVM mapConversationVM = ...;
mapConversationVM.ExecuteContinue();
```

## See Also

- [Area Index](../)