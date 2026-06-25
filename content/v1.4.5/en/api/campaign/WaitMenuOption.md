---
title: "WaitMenuOption"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WaitMenuOption`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# WaitMenuOption

**Namespace:** TaleWorlds.CampaignSystem.GameMenus
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class WaitMenuOption`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameMenus/WaitMenuOption.cs`

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

**Purpose:** Called when the `condition delegate` event is raised.

### OnConsequenceDelegate
`public delegate void OnConsequenceDelegate(MenuCallbackArgs args)`

**Purpose:** Called when the `consequence delegate` event is raised.

### GetConditionsHold
`public bool GetConditionsHold(Game game, MapState mapState)`

**Purpose:** Gets the current value of `conditions hold`.

### RunConsequence
`public void RunConsequence(Game game, MapState mapState)`

**Purpose:** Handles logic related to `run consequence`.

### Deserialize
`public void Deserialize(XmlNode node, Type typeOfWaitMenusCallbacks)`

**Purpose:** Handles logic related to `deserialize`.

## Usage Example

```csharp
var value = new WaitMenuOption();
value.OnConditionDelegate(args);
```

## See Also

- [Complete Class Catalog](../catalog)