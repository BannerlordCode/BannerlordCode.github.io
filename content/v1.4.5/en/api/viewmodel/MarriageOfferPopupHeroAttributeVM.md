---
title: "MarriageOfferPopupHeroAttributeVM"
description: "Auto-generated class reference for MarriageOfferPopupHeroAttributeVM."
---
# MarriageOfferPopupHeroAttributeVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.MarriageOfferPopup
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MarriageOfferPopupHeroAttributeVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Map.MarriageOfferPopup/MarriageOfferPopupHeroAttributeVM.cs`

## Overview

`MarriageOfferPopupHeroAttributeVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MarriageOfferPopup` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MarriageOfferPopup` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AttributeText` | `public string AttributeText { get; set; }` |
| `AttributeSkills` | `public MBBindingList<EncyclopediaSkillVM> AttributeSkills { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MarriageOfferPopupHeroAttributeVM from the subsystem API first
MarriageOfferPopupHeroAttributeVM marriageOfferPopupHeroAttributeVM = ...;
marriageOfferPopupHeroAttributeVM.RefreshValues();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MarriageOfferPopupHeroAttributeVM marriageOfferPopupHeroAttributeVM = ...;
marriageOfferPopupHeroAttributeVM.RefreshValues();
```

## See Also

- [Area Index](../)