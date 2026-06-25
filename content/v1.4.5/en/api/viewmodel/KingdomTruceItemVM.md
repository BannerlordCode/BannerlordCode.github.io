---
title: "KingdomTruceItemVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `KingdomTruceItemVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# KingdomTruceItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomTruceItemVM : KingdomDiplomacyItemVM`
**Base:** `KingdomDiplomacyItemVM`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy/KingdomTruceItemVM.cs`

## Overview

`KingdomTruceItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TributePaid` | `public int TributePaid { get; set; }` |
| `HasTradeAgreement` | `public bool HasTradeAgreement { get; set; }` |
| `HasAlliance` | `public bool HasAlliance { get; set; }` |
| `AllianceEndTimeStr` | `public string AllianceEndTimeStr { get; set; }` |
| `TradeAgreementEndTimeStr` | `public string TradeAgreementEndTimeStr { get; set; }` |

## Usage Example

```csharp
var example = new KingdomTruceItemVM();
```

## See Also

- [Complete Class Catalog](../catalog)