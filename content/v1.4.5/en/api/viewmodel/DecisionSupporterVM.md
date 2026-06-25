---
title: "DecisionSupporterVM"
description: "Auto-generated class reference for DecisionSupporterVM."
---
# DecisionSupporterVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DecisionSupporterVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions/DecisionSupporterVM.cs`

## Overview

`DecisionSupporterVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Visual` | `public CharacterImageIdentifierVM Visual { get; set; }` |
| `SupportStrength` | `public int SupportStrength { get; set; }` |
| `SupportWeightImagePath` | `public string SupportWeightImagePath { get; set; }` |
| `Name` | `public string Name { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of DecisionSupporterVM from the subsystem API first
DecisionSupporterVM decisionSupporterVM = ...;
decisionSupporterVM.RefreshValues();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
DecisionSupporterVM decisionSupporterVM = ...;
decisionSupporterVM.RefreshValues();
```

## See Also

- [Area Index](../)