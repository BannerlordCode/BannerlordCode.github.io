---
title: "MilitiaPartyComponent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MilitiaPartyComponent`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MilitiaPartyComponent

**Namespace:** TaleWorlds.CampaignSystem.Party.PartyComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MilitiaPartyComponent : PartyComponent`
**Base:** `PartyComponent`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Party.PartyComponents/MilitiaPartyComponent.cs`

## Overview

`MilitiaPartyComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `MilitiaPartyComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Settlement` | `public Settlement Settlement { get; }` |
| `Name` | `public override TextObject Name { get; }` |

## Key Methods

### InitializeMilitiaPartyProperties
`public void InitializeMilitiaPartyProperties(MobileParty mobileParty, Settlement settlement)`

**Purpose:** Initializes the state, resources, or bindings for `militia party properties`.

### GetDefaultComponentBanner
`public override Banner GetDefaultComponentBanner()`

**Purpose:** Gets the current value of `default component banner`.

### CreateMilitiaParty
`public static MobileParty CreateMilitiaParty(string stringId, Settlement settlement)`

**Purpose:** Creates a new `militia party` instance or object.

### ConvertPartyToMilitiaParty
`public static void ConvertPartyToMilitiaParty(MobileParty mobileParty, Settlement settlement)`

**Purpose:** Handles logic related to `convert party to militia party`.

### ClearCachedName
`public override void ClearCachedName()`

**Purpose:** Handles logic related to `clear cached name`.

## Usage Example

```csharp
var component = agent.GetComponent<MilitiaPartyComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)