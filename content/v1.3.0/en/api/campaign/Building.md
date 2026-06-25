---
title: "Building"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Building`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Building

**Namespace:** TaleWorlds.CampaignSystem.Settlements.Buildings
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class Building`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Settlements/Buildings/Building.cs`

## Overview

`Building` lives in `TaleWorlds.CampaignSystem.Settlements.Buildings` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Settlements.Buildings` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public TextObject Name { get; }` |
| `Explanation` | `public TextObject Explanation { get; }` |
| `BuildingType` | `public BuildingType BuildingType { get; }` |
| `Town` | `public Town Town { get; }` |
| `CurrentLevel` | `public int CurrentLevel { get; set; }` |

## Key Methods

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### GetConstructionCost
`public int GetConstructionCost()`

**Purpose:** Gets the current value of `construction cost`.

### LevelUp
`public void LevelUp()`

**Purpose:** Handles logic related to `level up`.

### LevelDown
`public void LevelDown()`

**Purpose:** Handles logic related to `level down`.

### HitPointChanged
`public void HitPointChanged(float change)`

**Purpose:** Handles logic related to `hit point changed`.

### AddEffectOfBuilding
`public void AddEffectOfBuilding(BuildingEffectEnum buildingEffect, ref ExplainedNumber result)`

**Purpose:** Adds `effect of building` to the current collection or state.

### GetBonusExplanation
`public TextObject GetBonusExplanation()`

**Purpose:** Gets the current value of `bonus explanation`.

## Usage Example

```csharp
var value = new Building();
value.GetHashCode();
```

## See Also

- [Complete Class Catalog](../catalog)