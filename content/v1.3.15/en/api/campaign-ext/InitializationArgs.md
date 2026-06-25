---
title: "InitializationArgs"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InitializationArgs`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InitializationArgs

**Namespace:** TaleWorlds.CampaignSystem.Party.PartyComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `class InitializationArgs`
**Area:** campaign-ext

## Overview

`InitializationArgs` lives in `TaleWorlds.CampaignSystem.Party.PartyComponents`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Party.PartyComponents` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Hideout` | `public Hideout Hideout { get; }` |
| `IsBossParty` | `public bool IsBossParty { get; }` |
| `HomeSettlement` | `public override Settlement HomeSettlement { get; }` |
| `PartyOwner` | `public override Hero PartyOwner { get; }` |
| `Name` | `public override TextObject Name { get; }` |

## Key Methods

### CreateBanditParty
`public static MobileParty CreateBanditParty(string stringId, Clan clan, Hideout hideout, bool isBossParty, PartyTemplateObject pt, CampaignVec2 initialPosition)`

**Purpose:** Creates a new `bandit party` instance or object.

### ConvertPartyToBanditParty
`public static void ConvertPartyToBanditParty(MobileParty mobileParty, Clan clan, Hideout hideout, bool isBossParty)`

**Purpose:** Handles logic related to `convert party to bandit party`.

### CreateLooterParty
`public static MobileParty CreateLooterParty(string stringId, Clan clan, Settlement relatedSettlement, bool isBossParty, PartyTemplateObject pt, CampaignVec2 initialPosition)`

**Purpose:** Creates a new `looter party` instance or object.

### ConvertPartyToLooterParty
`public static void ConvertPartyToLooterParty(MobileParty mobileParty, Clan clan, Settlement relatedSettlement)`

**Purpose:** Handles logic related to `convert party to looter party`.

### SetHomeHideout
`public void SetHomeHideout(Hideout hideout)`

**Purpose:** Sets the value or state of `home hideout`.

### ClearCachedName
`public override void ClearCachedName()`

**Purpose:** Handles logic related to `clear cached name`.

### InitializeBanditOnCreation
`public void InitializeBanditOnCreation(MobileParty mobileParty)`

**Purpose:** Initializes the state, resources, or bindings for `bandit on creation`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
InitializationArgs.CreateBanditParty("example", clan, hideout, false, pt, initialPosition);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
