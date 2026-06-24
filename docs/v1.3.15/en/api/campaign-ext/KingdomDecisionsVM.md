<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `KingdomDecisionsVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# KingdomDecisionsVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomDecisionsVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/KingdomDecisionsVM.cs`

## Overview

`KingdomDecisionsVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsCurrentDecisionActive` | `public bool IsCurrentDecisionActive { get; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `CurrentDecision` | `public DecisionItemBaseVM CurrentDecision { get; set; }` |
| `NotificationCount` | `public int NotificationCount { get; set; }` |
| `IsRefreshed` | `public bool IsRefreshed { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### OnFrameTick
`public void OnFrameTick()`

**Purpose:** Called when the `frame tick` event is raised.

### HandleNextDecision
`public void HandleNextDecision()`

**Purpose:** Handles the `next decision` event or callback.

### HandleDecision
`public void HandleDecision(KingdomDecision curDecision)`

**Purpose:** Handles the `decision` event or callback.

### RefreshWith
`public void RefreshWith(KingdomDecision decision)`

**Purpose:** Refreshes the display or cache of `with`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `done input key`.

## Usage Example

```csharp
var value = new KingdomDecisionsVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)