---
title: "SkillObjectComparer"
description: "Auto-generated class reference for SkillObjectComparer."
---
# SkillObjectComparer

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SkillObjectComparer : IComparer<SkillObject>`
**Base:** `IComparer<SkillObject>`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignUIHelper.cs`

## Overview

`SkillObjectComparer` lives in `TaleWorlds.CampaignSystem.ViewModelCollection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Compare
`public int Compare(SkillObject x, SkillObject y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of SkillObjectComparer from the subsystem API first
SkillObjectComparer skillObjectComparer = ...;
var result = skillObjectComparer.Compare(x, y);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SkillObjectComparer skillObjectComparer = ...;
skillObjectComparer.Compare(x, y);
```

## See Also

- [Area Index](../)