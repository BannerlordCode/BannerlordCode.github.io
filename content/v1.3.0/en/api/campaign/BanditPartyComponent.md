---
title: "BanditPartyComponent"
description: "Auto-generated class reference for BanditPartyComponent."
---
# BanditPartyComponent

**Namespace:** TaleWorlds.CampaignSystem.Party.PartyComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class BanditPartyComponent : WarPartyComponent`
**Base:** `WarPartyComponent`
**File:** `TaleWorlds.CampaignSystem/Party/PartyComponents/BanditPartyComponent.cs`

## Overview

`BanditPartyComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `BanditPartyComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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
`public static MobileParty CreateBanditParty(string stringId, Clan clan, Hideout hideout, bool isBossParty)`

**Purpose:** Constructs a new `bandit party` entity and returns it to the caller.

```csharp
// Static call; no instance required
BanditPartyComponent.CreateBanditParty("example", clan, hideout, false);
```

### ConvertPartyToBanditParty
`public static void ConvertPartyToBanditParty(MobileParty mobileParty, Clan clan, Hideout hideout, bool isBossParty)`

**Purpose:** Converts `party to bandit party` into another representation or type.

```csharp
// Static call; no instance required
BanditPartyComponent.ConvertPartyToBanditParty(mobileParty, clan, hideout, false);
```

### CreateLooterParty
`public static MobileParty CreateLooterParty(string stringId, Clan clan, Settlement relatedSettlement, bool isBossParty)`

**Purpose:** Constructs a new `looter party` entity and returns it to the caller.

```csharp
// Static call; no instance required
BanditPartyComponent.CreateLooterParty("example", clan, relatedSettlement, false);
```

### ConvertPartyToLooterParty
`public static void ConvertPartyToLooterParty(MobileParty mobileParty, Clan clan, Settlement relatedSettlement)`

**Purpose:** Converts `party to looter party` into another representation or type.

```csharp
// Static call; no instance required
BanditPartyComponent.ConvertPartyToLooterParty(mobileParty, clan, relatedSettlement);
```

### SetHomeHideout
`public void SetHomeHideout(Hideout hideout)`

**Purpose:** Assigns a new value to `home hideout` and updates the object's internal state.

```csharp
// Obtain an instance of BanditPartyComponent from the subsystem API first
BanditPartyComponent banditPartyComponent = ...;
banditPartyComponent.SetHomeHideout(hideout);
```

### ClearCachedName
`public override void ClearCachedName()`

**Purpose:** Removes all `cached name` from the current object.

```csharp
// Obtain an instance of BanditPartyComponent from the subsystem API first
BanditPartyComponent banditPartyComponent = ...;
banditPartyComponent.ClearCachedName();
```

## Usage Example

```csharp
var component = agent.GetComponent<BanditPartyComponent>();
```

## See Also

- [Area Index](../)