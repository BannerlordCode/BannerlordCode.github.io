---
title: "VillagerPartyComponent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VillagerPartyComponent`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VillagerPartyComponent

**Namespace:** TaleWorlds.CampaignSystem.Party.PartyComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class VillagerPartyComponent : PartyComponent`
**Base:** `PartyComponent`
**File:** `TaleWorlds.CampaignSystem/Party/PartyComponents/VillagerPartyComponent.cs`

## Overview

`VillagerPartyComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `VillagerPartyComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Village` | `public Village Village { get; }` |
| `PartyOwner` | `public override Hero PartyOwner { get; }` |
| `HomeSettlement` | `public override Settlement HomeSettlement { get; }` |
| `Name` | `public override TextObject Name { get; }` |

## Key Methods

### CreateVillagerParty
`public static MobileParty CreateVillagerParty(string stringId, Village village)`

**Purpose:** Creates a new `villager party` instance or object.

### ConvertPartyToVillagerParty
`public static void ConvertPartyToVillagerParty(MobileParty mobileParty, Village village)`

**Purpose:** Handles logic related to `convert party to villager party`.

### GetDefaultComponentBanner
`public override Banner GetDefaultComponentBanner()`

**Purpose:** Gets the current value of `default component banner`.

### ClearCachedName
`public override void ClearCachedName()`

**Purpose:** Handles logic related to `clear cached name`.

### InitializeVillagerPartyProperties
`public void InitializeVillagerPartyProperties(MobileParty mobileParty, Village village)`

**Purpose:** Initializes the state, resources, or bindings for `villager party properties`.

## Usage Example

```csharp
var component = agent.GetComponent<VillagerPartyComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)