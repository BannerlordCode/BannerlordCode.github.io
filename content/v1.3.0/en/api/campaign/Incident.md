---
title: "Incident"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Incident`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Incident

**Namespace:** TaleWorlds.CampaignSystem.Incidents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class Incident : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.CampaignSystem/Incidents/Incident.cs`

## Overview

`Incident` lives in `TaleWorlds.CampaignSystem.Incidents` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Incidents` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Title` | `public TextObject Title { get; }` |
| `Description` | `public TextObject Description { get; }` |
| `Trigger` | `public IncidentsCampaignBehaviour.IncidentTrigger Trigger { get; }` |
| `Type` | `public IncidentsCampaignBehaviour.IncidentType Type { get; }` |
| `Cooldown` | `public CampaignTime Cooldown { get; }` |
| `NumOfOptions` | `public int NumOfOptions { get; }` |
| `Effects` | `public IReadOnlyList<IncidentEffect> Effects { get; }` |

## Key Methods

### Initialize
`public void Initialize(string title, string description, IncidentsCampaignBehaviour.IncidentTrigger trigger, IncidentsCampaignBehaviour.IncidentType type, CampaignTime cooldown, Func<TextObject, bool> condition, Action<Incident> consequence)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### AddOption
`public void AddOption(string text, List<IncidentEffect> effects, Incident.IncidentOptionConditionDelegate condition = null, Incident.IncidentOptionConsequenceDelegate consequence = null)`

**Purpose:** Adds `option` to the current collection or state.

### CanIncidentBeInvoked
`public bool CanIncidentBeInvoked()`

**Purpose:** Checks whether the current object can `incident be invoked`.

### GetOptionText
`public TextObject GetOptionText(int index)`

**Purpose:** Gets the current value of `option text`.

### GetOptionHint
`public List<TextObject> GetOptionHint(int index)`

**Purpose:** Gets the current value of `option hint`.

### InvokeOption
`public List<TextObject> InvokeOption(int index)`

**Purpose:** Handles logic related to `invoke option`.

### IncidentOptionConditionDelegate
`public delegate bool IncidentOptionConditionDelegate(TextObject text)`

**Purpose:** Handles logic related to `incident option condition delegate`.

### IncidentOptionConsequenceDelegate
`public delegate void IncidentOptionConsequenceDelegate()`

**Purpose:** Handles logic related to `incident option consequence delegate`.

## Usage Example

```csharp
var value = new Incident();
value.Initialize("example", "example", trigger, type, cooldown, func<TextObject, false, consequence);
```

## See Also

- [Complete Class Catalog](../catalog)