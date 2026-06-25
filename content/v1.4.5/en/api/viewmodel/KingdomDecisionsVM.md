---
title: "KingdomDecisionsVM"
description: "Auto-generated class reference for KingdomDecisionsVM."
---
# KingdomDecisionsVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomDecisionsVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions/KingdomDecisionsVM.cs`

## Overview

`KingdomDecisionsVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `CurrentDecision` | `public DecisionItemBaseVM CurrentDecision { get; set; }` |
| `NotificationCount` | `public int NotificationCount { get; set; }` |
| `IsRefreshed` | `public bool IsRefreshed { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of KingdomDecisionsVM from the subsystem API first
KingdomDecisionsVM kingdomDecisionsVM = ...;
kingdomDecisionsVM.RefreshValues();
```

### OnFrameTick
`public void OnFrameTick()`

**Purpose:** **Purpose:** Invoked when the frame tick event is raised.

```csharp
// Obtain an instance of KingdomDecisionsVM from the subsystem API first
KingdomDecisionsVM kingdomDecisionsVM = ...;
kingdomDecisionsVM.OnFrameTick();
```

### HandleNextDecision
`public void HandleNextDecision()`

**Purpose:** **Purpose:** Executes the response logic associated with next decision.

```csharp
// Obtain an instance of KingdomDecisionsVM from the subsystem API first
KingdomDecisionsVM kingdomDecisionsVM = ...;
kingdomDecisionsVM.HandleNextDecision();
```

### HandleDecision
`public void HandleDecision(KingdomDecision curDecision)`

**Purpose:** **Purpose:** Executes the response logic associated with decision.

```csharp
// Obtain an instance of KingdomDecisionsVM from the subsystem API first
KingdomDecisionsVM kingdomDecisionsVM = ...;
kingdomDecisionsVM.HandleDecision(curDecision);
```

### RefreshWith
`public void RefreshWith(KingdomDecision decision)`

**Purpose:** **Purpose:** Keeps the display or cache of with in sync with the underlying state.

```csharp
// Obtain an instance of KingdomDecisionsVM from the subsystem API first
KingdomDecisionsVM kingdomDecisionsVM = ...;
kingdomDecisionsVM.RefreshWith(decision);
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of KingdomDecisionsVM from the subsystem API first
KingdomDecisionsVM kingdomDecisionsVM = ...;
kingdomDecisionsVM.OnFinalize();
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**Purpose:** **Purpose:** Assigns a new value to done input key and updates the object's internal state.

```csharp
// Obtain an instance of KingdomDecisionsVM from the subsystem API first
KingdomDecisionsVM kingdomDecisionsVM = ...;
kingdomDecisionsVM.SetDoneInputKey(hotKey);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
KingdomDecisionsVM kingdomDecisionsVM = ...;
kingdomDecisionsVM.RefreshValues();
```

## See Also

- [Area Index](../)