---
title: "WaitMenuOption"
description: "Auto-generated class reference for WaitMenuOption."
---
# WaitMenuOption

**Namespace:** TaleWorlds.CampaignSystem.GameMenus
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class WaitMenuOption`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameMenus/WaitMenuOption.cs`

## Overview

`WaitMenuOption` lives in `TaleWorlds.CampaignSystem.GameMenus` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.GameMenus` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Priority` | `public int Priority { get; }` |

## Key Methods

### OnConditionDelegate
`public delegate bool OnConditionDelegate(MenuCallbackArgs args)`

**Purpose:** **Purpose:** Invoked when the condition delegate event is raised.

```csharp
// Obtain an instance of WaitMenuOption from the subsystem API first
WaitMenuOption waitMenuOption = ...;
var result = waitMenuOption.OnConditionDelegate(args);
```

### OnConsequenceDelegate
`public delegate void OnConsequenceDelegate(MenuCallbackArgs args)`

**Purpose:** **Purpose:** Invoked when the consequence delegate event is raised.

```csharp
// Obtain an instance of WaitMenuOption from the subsystem API first
WaitMenuOption waitMenuOption = ...;
waitMenuOption.OnConsequenceDelegate(args);
```

### GetConditionsHold
`public bool GetConditionsHold(Game game, MapState mapState)`

**Purpose:** **Purpose:** Reads and returns the conditions hold value held by the this instance.

```csharp
// Obtain an instance of WaitMenuOption from the subsystem API first
WaitMenuOption waitMenuOption = ...;
var result = waitMenuOption.GetConditionsHold(game, mapState);
```

### RunConsequence
`public void RunConsequence(Game game, MapState mapState)`

**Purpose:** **Purpose:** Executes the RunConsequence logic.

```csharp
// Obtain an instance of WaitMenuOption from the subsystem API first
WaitMenuOption waitMenuOption = ...;
waitMenuOption.RunConsequence(game, mapState);
```

### Deserialize
`public void Deserialize(XmlNode node, Type typeOfWaitMenusCallbacks)`

**Purpose:** **Purpose:** Restores the this instance from serialized data.

```csharp
// Obtain an instance of WaitMenuOption from the subsystem API first
WaitMenuOption waitMenuOption = ...;
waitMenuOption.Deserialize(node, typeOfWaitMenusCallbacks);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
WaitMenuOption waitMenuOption = ...;
waitMenuOption.OnConditionDelegate(args);
```

## See Also

- [Area Index](../)