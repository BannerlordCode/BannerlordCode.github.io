---
title: "GarrisonPartyComponent"
description: "Auto-generated class reference for GarrisonPartyComponent."
---
# GarrisonPartyComponent

**Namespace:** TaleWorlds.CampaignSystem.Party.PartyComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GarrisonPartyComponent : PartyComponent`
**Base:** `PartyComponent`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Party.PartyComponents/GarrisonPartyComponent.cs`

## Overview

`GarrisonPartyComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `GarrisonPartyComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public override TextObject Name { get; }` |
| `Settlement` | `public Settlement Settlement { get; }` |

## Key Methods

### InitializeGarrisonPartyProperties
`public void InitializeGarrisonPartyProperties(MobileParty mobileParty, Settlement settlement)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by garrison party properties.

```csharp
// Obtain an instance of GarrisonPartyComponent from the subsystem API first
GarrisonPartyComponent garrisonPartyComponent = ...;
garrisonPartyComponent.InitializeGarrisonPartyProperties(mobileParty, settlement);
```

### CreateGarrisonParty
`public static MobileParty CreateGarrisonParty(string stringId, Settlement settlement)`

**Purpose:** **Purpose:** Constructs a new garrison party entity and returns it to the caller.

```csharp
// Static call; no instance required
GarrisonPartyComponent.CreateGarrisonParty("example", settlement);
```

### ConvertPartyToGarrisonParty
`public static void ConvertPartyToGarrisonParty(MobileParty mobileParty, Settlement settlement)`

**Purpose:** **Purpose:** Converts party to garrison party into another representation or type.

```csharp
// Static call; no instance required
GarrisonPartyComponent.ConvertPartyToGarrisonParty(mobileParty, settlement);
```

### GetDefaultComponentBanner
`public override Banner GetDefaultComponentBanner()`

**Purpose:** **Purpose:** Reads and returns the default component banner value held by the this instance.

```csharp
// Obtain an instance of GarrisonPartyComponent from the subsystem API first
GarrisonPartyComponent garrisonPartyComponent = ...;
var result = garrisonPartyComponent.GetDefaultComponentBanner();
```

### SetWagePaymentLimit
`public override void SetWagePaymentLimit(int newLimit)`

**Purpose:** **Purpose:** Assigns a new value to wage payment limit and updates the object's internal state.

```csharp
// Obtain an instance of GarrisonPartyComponent from the subsystem API first
GarrisonPartyComponent garrisonPartyComponent = ...;
garrisonPartyComponent.SetWagePaymentLimit(0);
```

### ClearCachedName
`public override void ClearCachedName()`

**Purpose:** **Purpose:** Removes all cached name from the this instance.

```csharp
// Obtain an instance of GarrisonPartyComponent from the subsystem API first
GarrisonPartyComponent garrisonPartyComponent = ...;
garrisonPartyComponent.ClearCachedName();
```

## Usage Example

```csharp
var component = agent.GetComponent<GarrisonPartyComponent>();
```

## See Also

- [Area Index](../)