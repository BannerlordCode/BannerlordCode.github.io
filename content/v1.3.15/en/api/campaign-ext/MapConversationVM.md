---
title: "MapConversationVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapConversationVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Executes the `continue` operation or workflow.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### Tick
`public void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

## Usage Example

```csharp
var value = new MapConversationVM();
value.ExecuteContinue();
```

## See Also

- [Complete Class Catalog](../catalog)