---
title: "DecisionOptionVM"
description: "Auto-generated class reference for DecisionOptionVM."
---
# DecisionOptionVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DecisionOptionVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/DecisionOptionVM.cs`

## Overview

`DecisionOptionVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Option` | `public DecisionOutcome Option { get; }` |
| `Decision` | `public KingdomDecision Decision { get; }` |
| `OptionHint` | `public HintViewModel OptionHint { get; set; }` |
| `SupportersOfThisOption` | `public MBBindingList<DecisionSupporterVM> SupportersOfThisOption { get; set; }` |
| `Sponsor` | `public HeroVM Sponsor { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `SponsorWeightImagePath` | `public string SponsorWeightImagePath { get; set; }` |
| `CanBeChosen` | `public bool CanBeChosen { get; set; }` |
| `IsKingsOutcome` | `public bool IsKingsOutcome { get; set; }` |
| `IsPlayerSupporter` | `public bool IsPlayerSupporter { get; set; }` |
| `IsHighlightEnabled` | `public bool IsHighlightEnabled { get; set; }` |
| `WinPercentage` | `public int WinPercentage { get; set; }` |
| `WinPercentageStr` | `public string WinPercentageStr { get; set; }` |
| `Description` | `public string Description { get; set; }` |
| `InitialPercentage` | `public int InitialPercentage { get; set; }` |
| `InfluenceCost` | `public int InfluenceCost { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `IsOptionForAbstain` | `public bool IsOptionForAbstain { get; set; }` |
| `CurrentSupportWeight` | `public Supporter.SupportWeights CurrentSupportWeight { get; set; }` |
| `CurrentSupportWeightIndex` | `public int CurrentSupportWeightIndex { get; set; }` |
| `SupportOption1Text` | `public string SupportOption1Text { get; set; }` |
| `SupportOption2Text` | `public string SupportOption2Text { get; set; }` |
| `SupportOption3Text` | `public string SupportOption3Text { get; set; }` |
| `IsSupportOption1Enabled` | `public bool IsSupportOption1Enabled { get; set; }` |
| `IsSupportOption2Enabled` | `public bool IsSupportOption2Enabled { get; set; }` |
| `IsSupportOption3Enabled` | `public bool IsSupportOption3Enabled { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of DecisionOptionVM from the subsystem API first
DecisionOptionVM decisionOptionVM = ...;
decisionOptionVM.RefreshValues();
```

### AfterKingChooseOutcome
`public void AfterKingChooseOutcome()`

**Purpose:** Executes the AfterKingChooseOutcome logic.

```csharp
// Obtain an instance of DecisionOptionVM from the subsystem API first
DecisionOptionVM decisionOptionVM = ...;
decisionOptionVM.AfterKingChooseOutcome();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
DecisionOptionVM decisionOptionVM = ...;
decisionOptionVM.RefreshValues();
```

## See Also

- [Area Index](../)