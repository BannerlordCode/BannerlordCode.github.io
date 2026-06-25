---
title: "EducationOptionVM"
description: "Auto-generated class reference for EducationOptionVM."
---
# EducationOptionVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Education
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EducationOptionVM : StringItemWithActionVM`
**Base:** `StringItemWithActionVM`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Education/EducationOptionVM.cs`

## Overview

`EducationOptionVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Education` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Education` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `OptionEffect` | `public string OptionEffect { get; }` |
| `OptionDescription` | `public string OptionDescription { get; }` |
| `CharacterProperties` | `public EducationCampaignBehavior.EducationCharacterProperties CharacterProperties { get; }` |
| `ActionID` | `public string ActionID { get; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of EducationOptionVM from the subsystem API first
EducationOptionVM educationOptionVM = ...;
educationOptionVM.RefreshValues();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EducationOptionVM educationOptionVM = ...;
educationOptionVM.RefreshValues();
```

## See Also

- [Area Index](../)