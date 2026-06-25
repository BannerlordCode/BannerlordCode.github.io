---
title: "CustomPartyComponent"
description: "Auto-generated class reference for CustomPartyComponent."
---
# CustomPartyComponent

**Namespace:** TaleWorlds.CampaignSystem.Party.PartyComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CustomPartyComponent : PartyComponent`
**Base:** `PartyComponent`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Party.PartyComponents/CustomPartyComponent.cs`

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

**Purpose:** Prepares the resources, state, or bindings required by `custom party properties with party template`.

```csharp
// Obtain an instance of CustomPartyComponent from the subsystem API first
CustomPartyComponent customPartyComponent = ...;
customPartyComponent.InitializeCustomPartyPropertiesWithPartyTemplate(mobileParty);
```

### InitializeCustomPartyPropertiesWithTroopRoster
`public void InitializeCustomPartyPropertiesWithTroopRoster(MobileParty mobileParty)`

**Purpose:** Prepares the resources, state, or bindings required by `custom party properties with troop roster`.

```csharp
// Obtain an instance of CustomPartyComponent from the subsystem API first
CustomPartyComponent customPartyComponent = ...;
customPartyComponent.InitializeCustomPartyPropertiesWithTroopRoster(mobileParty);
```

### GetDefaultComponentBanner
`public override Banner GetDefaultComponentBanner()`

**Purpose:** Reads and returns the `default component banner` value held by the current object.

```csharp
// Obtain an instance of CustomPartyComponent from the subsystem API first
CustomPartyComponent customPartyComponent = ...;
var result = customPartyComponent.GetDefaultComponentBanner();
```

### CreateCustomPartyWithPartyTemplate
`public static MobileParty CreateCustomPartyWithPartyTemplate(CampaignVec2 position, float spawnRadius, Settlement homeSettlement, TextObject name, Clan clan, PartyTemplateObject partyTemplate, Hero owner, string partyMountStringId = "", string partyHarnessStringId = "", float customPartyBaseSpeed = 0f, bool avoidHostileActions = false)`

**Purpose:** Constructs a new `custom party with party template` entity and returns it to the caller.

```csharp
// Static call; no instance required
CustomPartyComponent.CreateCustomPartyWithPartyTemplate(position, 0, homeSettlement, name, clan, partyTemplate, owner, "example", "example", 0, false);
```

### CreateCustomPartyWithPartyTemplate
`public static MobileParty CreateCustomPartyWithPartyTemplate(CampaignVec2 position, float spawnRadius, Settlement homeSettlement, TextObject name, Clan clan, PartyTemplateObject partyTemplate, Hero owner, Hero leader, string partyMountStringId = "", string partyHarnessStringId = "", float customPartyBaseSpeed = 0f, bool avoidHostileActions = false)`

**Purpose:** Constructs a new `custom party with party template` entity and returns it to the caller.

```csharp
// Static call; no instance required
CustomPartyComponent.CreateCustomPartyWithPartyTemplate(position, 0, homeSettlement, name, clan, partyTemplate, owner, leader, "example", "example", 0, false);
```

### CreateCustomPartyWithTroopRoster
`public static MobileParty CreateCustomPartyWithTroopRoster(CampaignVec2 position, float spawnRadius, Settlement homeSettlement, TextObject name, Clan clan, TroopRoster troopRoster, TroopRoster prisonerRoster, Hero owner, string partyMountStringId = "", string partyHarnessStringId = "", float customPartyBaseSpeed = 0f, bool avoidHostileActions = false)`

**Purpose:** Constructs a new `custom party with troop roster` entity and returns it to the caller.

```csharp
// Static call; no instance required
CustomPartyComponent.CreateCustomPartyWithTroopRoster(position, 0, homeSettlement, name, clan, troopRoster, prisonerRoster, owner, "example", "example", 0, false);
```

### ConvertPartyToCustomParty
`public static void ConvertPartyToCustomParty(MobileParty mobileParty, Settlement homeSettlement, TextObject name, Hero owner, string partyMountStringId = "", string partyHarnessStringId = "", float customPartyBaseSpeed = 0f, bool avoidHostileActions = false)`

**Purpose:** Converts `party to custom party` into another representation or type.

```csharp
// Static call; no instance required
CustomPartyComponent.ConvertPartyToCustomParty(mobileParty, homeSettlement, name, owner, "example", "example", 0, false);
```

### SetBaseSpeed
`public void SetBaseSpeed(float speed)`

**Purpose:** Assigns a new value to `base speed` and updates the object's internal state.

```csharp
// Obtain an instance of CustomPartyComponent from the subsystem API first
CustomPartyComponent customPartyComponent = ...;
customPartyComponent.SetBaseSpeed(0);
```

### GetMountAndHarnessVisualIdsForPartyIcon
`public override void GetMountAndHarnessVisualIdsForPartyIcon(PartyBase party, out string mountStringId, out string harnessStringId)`

**Purpose:** Reads and returns the `mount and harness visual ids for party icon` value held by the current object.

```csharp
// Obtain an instance of CustomPartyComponent from the subsystem API first
CustomPartyComponent customPartyComponent = ...;
customPartyComponent.GetMountAndHarnessVisualIdsForPartyIcon(party, mountStringId, harnessStringId);
```

## Usage Example

```csharp
var component = agent.GetComponent<CustomPartyComponent>();
```

## See Also

- [Area Index](../)