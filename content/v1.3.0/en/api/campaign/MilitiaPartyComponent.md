---
title: "MilitiaPartyComponent"
description: "Auto-generated class reference for MilitiaPartyComponent."
---
# MilitiaPartyComponent

**Namespace:** TaleWorlds.CampaignSystem.Party.PartyComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MilitiaPartyComponent : PartyComponent`
**Base:** `PartyComponent`
**File:** `TaleWorlds.CampaignSystem/Party/PartyComponents/MilitiaPartyComponent.cs`

## Overview

`MilitiaPartyComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `MilitiaPartyComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Settlement` | `public Settlement Settlement { get; }` |
| `PartyOwner` | `public override Hero PartyOwner { get; }` |
| `CanHaveNavalNavigationCapability` | `public override bool CanHaveNavalNavigationCapability { get; }` |
| `Name` | `public override TextObject Name { get; }` |
| `HomeSettlement` | `public override Settlement HomeSettlement { get; }` |

## Key Methods

### GetDefaultComponentBanner
`public override Banner GetDefaultComponentBanner()`

**Purpose:** Reads and returns the default component banner value held by the this instance.

```csharp
// Obtain an instance of MilitiaPartyComponent from the subsystem API first
MilitiaPartyComponent militiaPartyComponent = ...;
var result = militiaPartyComponent.GetDefaultComponentBanner();
```

### CreateMilitiaParty
`public static MobileParty CreateMilitiaParty(string stringId, Settlement settlement)`

**Purpose:** Constructs a new militia party entity and returns it to the caller.

```csharp
// Static call; no instance required
MilitiaPartyComponent.CreateMilitiaParty("example", settlement);
```

### ConvertPartyToMilitiaParty
`public static void ConvertPartyToMilitiaParty(MobileParty mobileParty, Settlement settlement)`

**Purpose:** Converts party to militia party into another representation or type.

```csharp
// Static call; no instance required
MilitiaPartyComponent.ConvertPartyToMilitiaParty(mobileParty, settlement);
```

### ClearCachedName
`public override void ClearCachedName()`

**Purpose:** Removes all cached name from the this instance.

```csharp
// Obtain an instance of MilitiaPartyComponent from the subsystem API first
MilitiaPartyComponent militiaPartyComponent = ...;
militiaPartyComponent.ClearCachedName();
```

### InitializeMilitiaPartyProperties
`public void InitializeMilitiaPartyProperties(MobileParty mobileParty, Settlement settlement)`

**Purpose:** Prepares the resources, state, or bindings required by militia party properties.

```csharp
// Obtain an instance of MilitiaPartyComponent from the subsystem API first
MilitiaPartyComponent militiaPartyComponent = ...;
militiaPartyComponent.InitializeMilitiaPartyProperties(mobileParty, settlement);
```

## Usage Example

```csharp
var component = agent.GetComponent<MilitiaPartyComponent>();
```

## See Also

- [Area Index](../)