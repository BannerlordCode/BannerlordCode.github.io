---
title: "CampaignOptionsVM"
description: "Auto-generated class reference for CampaignOptionsVM."
---
# CampaignOptionsVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CampaignOptionsVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection/CampaignOptionsVM.cs`

## Overview

`CampaignOptionsVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `OptionsController` | `public CampaignOptionsControllerVM OptionsController { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `DoneText` | `public string DoneText { get; set; }` |
| `ResetTutorialText` | `public string ResetTutorialText { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of CampaignOptionsVM from the subsystem API first
CampaignOptionsVM campaignOptionsVM = ...;
campaignOptionsVM.RefreshValues();
```

### ExecuteDone
`public void ExecuteDone()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with done.

```csharp
// Obtain an instance of CampaignOptionsVM from the subsystem API first
CampaignOptionsVM campaignOptionsVM = ...;
campaignOptionsVM.ExecuteDone();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CampaignOptionsVM campaignOptionsVM = ...;
campaignOptionsVM.RefreshValues();
```

## See Also

- [Area Index](../)