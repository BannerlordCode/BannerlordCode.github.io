---
title: "SkillObjectComparer"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SkillObjectComparer`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `compare`.

## Usage Example

```csharp
var value = new SkillObjectComparer();
value.Compare(x, y);
```

## See Also

- [Complete Class Catalog](../catalog)