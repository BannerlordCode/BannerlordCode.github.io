---
title: "CustomPartyComponent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CustomPartyComponent`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CustomPartyComponent

**Namespace:** TaleWorlds.CampaignSystem.Party.PartyComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CustomPartyComponent : PartyComponent`
**Base:** `PartyComponent`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Party.PartyComponents/CustomPartyComponent.cs`

## Overview

`CustomPartyComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `CustomPartyComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `CustomPartyBaseSpeed` | `public float CustomPartyBaseSpeed { get; set; }` |

## Key Methods

### InitializeCustomPartyPropertiesWithPartyTemplate
`public void InitializeCustomPartyPropertiesWithPartyTemplate(MobileParty mobileParty)`

**Purpose:** Initializes the state, resources, or bindings for `custom party properties with party template`.

### InitializeCustomPartyPropertiesWithTroopRoster
`public void InitializeCustomPartyPropertiesWithTroopRoster(MobileParty mobileParty)`

**Purpose:** Initializes the state, resources, or bindings for `custom party properties with troop roster`.

### GetDefaultComponentBanner
`public override Banner GetDefaultComponentBanner()`

**Purpose:** Gets the current value of `default component banner`.

### CreateCustomPartyWithPartyTemplate
`public static MobileParty CreateCustomPartyWithPartyTemplate(CampaignVec2 position, float spawnRadius, Settlement homeSettlement, TextObject name, Clan clan, PartyTemplateObject partyTemplate, Hero owner, string partyMountStringId = "", string partyHarnessStringId = "", float customPartyBaseSpeed = 0f, bool avoidHostileActions = false)`

**Purpose:** Creates a new `custom party with party template` instance or object.

### CreateCustomPartyWithPartyTemplate
`public static MobileParty CreateCustomPartyWithPartyTemplate(CampaignVec2 position, float spawnRadius, Settlement homeSettlement, TextObject name, Clan clan, PartyTemplateObject partyTemplate, Hero owner, Hero leader, string partyMountStringId = "", string partyHarnessStringId = "", float customPartyBaseSpeed = 0f, bool avoidHostileActions = false)`

**Purpose:** Creates a new `custom party with party template` instance or object.

### CreateCustomPartyWithTroopRoster
`public static MobileParty CreateCustomPartyWithTroopRoster(CampaignVec2 position, float spawnRadius, Settlement homeSettlement, TextObject name, Clan clan, TroopRoster troopRoster, TroopRoster prisonerRoster, Hero owner, string partyMountStringId = "", string partyHarnessStringId = "", float customPartyBaseSpeed = 0f, bool avoidHostileActions = false)`

**Purpose:** Creates a new `custom party with troop roster` instance or object.

### ConvertPartyToCustomParty
`public static void ConvertPartyToCustomParty(MobileParty mobileParty, Settlement homeSettlement, TextObject name, Hero owner, string partyMountStringId = "", string partyHarnessStringId = "", float customPartyBaseSpeed = 0f, bool avoidHostileActions = false)`

**Purpose:** Handles logic related to `convert party to custom party`.

### SetBaseSpeed
`public void SetBaseSpeed(float speed)`

**Purpose:** Sets the value or state of `base speed`.

### GetMountAndHarnessVisualIdsForPartyIcon
`public override void GetMountAndHarnessVisualIdsForPartyIcon(PartyBase party, out string mountStringId, out string harnessStringId)`

**Purpose:** Gets the current value of `mount and harness visual ids for party icon`.

## Usage Example

```csharp
var component = agent.GetComponent<CustomPartyComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)