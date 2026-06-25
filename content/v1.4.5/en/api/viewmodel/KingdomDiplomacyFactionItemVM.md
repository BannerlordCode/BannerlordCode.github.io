---
title: "KingdomDiplomacyFactionItemVM"
description: "Auto-generated class reference for KingdomDiplomacyFactionItemVM."
---
# KingdomDiplomacyFactionItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomDiplomacyFactionItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy/KingdomDiplomacyFactionItemVM.cs`

## Overview

`KingdomDiplomacyFactionItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Hint` | `public HintViewModel Hint { get; set; }` |
| `Visual` | `public BannerImageIdentifierVM Visual { get; set; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
KingdomDiplomacyFactionItemVM instance = ...;
```

## See Also

- [Area Index](../)