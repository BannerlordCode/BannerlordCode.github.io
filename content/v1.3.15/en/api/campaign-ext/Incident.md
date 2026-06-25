---
title: "Incident"
description: "Auto-generated class reference for Incident."
---
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
`public void Initialize(string title, string description, IncidentsCampaignBehaviour.IncidentTrigger trigger, IncidentsCampaignBehaviour.IncidentType type, CampaignTime cooldown, Func<TextObject, bool> condition)`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Obtain an instance of Incident from the subsystem API first
Incident incident = ...;
incident.Initialize("example", "example", trigger, type, cooldown, func<TextObject, false);
```

### AddOption
`public void AddOption(string text, List<IncidentEffect> effects, Incident.IncidentOptionConditionDelegate condition = null, Incident.IncidentOptionConsequenceDelegate consequence = null)`

**Purpose:** Adds `option` to the current collection or state.

```csharp
// Obtain an instance of Incident from the subsystem API first
Incident incident = ...;
incident.AddOption("example", effects, null, null);
```

### CanIncidentBeInvoked
`public bool CanIncidentBeInvoked()`

**Purpose:** Checks whether the current object meets the preconditions for `incident be invoked`.

```csharp
// Obtain an instance of Incident from the subsystem API first
Incident incident = ...;
var result = incident.CanIncidentBeInvoked();
```

### GetOptionText
`public TextObject GetOptionText(int index)`

**Purpose:** Reads and returns the `option text` value held by the current object.

```csharp
// Obtain an instance of Incident from the subsystem API first
Incident incident = ...;
var result = incident.GetOptionText(0);
```

### GetOptionHint
`public List<TextObject> GetOptionHint(int index)`

**Purpose:** Reads and returns the `option hint` value held by the current object.

```csharp
// Obtain an instance of Incident from the subsystem API first
Incident incident = ...;
var result = incident.GetOptionHint(0);
```

### InvokeOption
`public List<TextObject> InvokeOption(int index)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Incident from the subsystem API first
Incident incident = ...;
var result = incident.InvokeOption(0);
```

### IncidentOptionConditionDelegate
`public delegate bool IncidentOptionConditionDelegate(TextObject text)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Incident from the subsystem API first
Incident incident = ...;
var result = incident.IncidentOptionConditionDelegate(text);
```

### IncidentOptionConsequenceDelegate
`public delegate void IncidentOptionConsequenceDelegate()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Incident from the subsystem API first
Incident incident = ...;
incident.IncidentOptionConsequenceDelegate();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Incident incident = ...;
incident.Initialize("example", "example", trigger, type, cooldown, func<TextObject, false);
```

## See Also

- [Area Index](../)