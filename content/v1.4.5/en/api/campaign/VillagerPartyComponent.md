---
title: "VillagerPartyComponent"
description: "Auto-generated class reference for VillagerPartyComponent."
---
# VillagerPartyComponent

**Namespace:** TaleWorlds.CampaignSystem.Party.PartyComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class VillagerPartyComponent : PartyComponent`
**Base:** `PartyComponent`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Party.PartyComponents/VillagerPartyComponent.cs`

## Overview

`VillagerPartyComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `VillagerPartyComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Village` | `public Village Village { get; }` |
| `Name` | `public override TextObject Name { get; }` |

## Key Methods

### InitializeVillagerPartyProperties
`public void InitializeVillagerPartyProperties(MobileParty mobileParty, Village village)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by villager party properties.

```csharp
// Obtain an instance of VillagerPartyComponent from the subsystem API first
VillagerPartyComponent villagerPartyComponent = ...;
villagerPartyComponent.InitializeVillagerPartyProperties(mobileParty, village);
```

### CreateVillagerParty
`public static MobileParty CreateVillagerParty(string stringId, Village village)`

**Purpose:** **Purpose:** Constructs a new villager party entity and returns it to the caller.

```csharp
// Static call; no instance required
VillagerPartyComponent.CreateVillagerParty("example", village);
```

### ConvertPartyToVillagerParty
`public static void ConvertPartyToVillagerParty(MobileParty mobileParty, Village village)`

**Purpose:** **Purpose:** Converts party to villager party into another representation or type.

```csharp
// Static call; no instance required
VillagerPartyComponent.ConvertPartyToVillagerParty(mobileParty, village);
```

### GetDefaultComponentBanner
`public override Banner GetDefaultComponentBanner()`

**Purpose:** **Purpose:** Reads and returns the default component banner value held by the this instance.

```csharp
// Obtain an instance of VillagerPartyComponent from the subsystem API first
VillagerPartyComponent villagerPartyComponent = ...;
var result = villagerPartyComponent.GetDefaultComponentBanner();
```

### ClearCachedName
`public override void ClearCachedName()`

**Purpose:** **Purpose:** Removes all cached name from the this instance.

```csharp
// Obtain an instance of VillagerPartyComponent from the subsystem API first
VillagerPartyComponent villagerPartyComponent = ...;
villagerPartyComponent.ClearCachedName();
```

## Usage Example

```csharp
var component = agent.GetComponent<VillagerPartyComponent>();
```

## See Also

- [Area Index](../)