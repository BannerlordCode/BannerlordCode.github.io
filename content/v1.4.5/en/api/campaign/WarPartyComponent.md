---
title: "WarPartyComponent"
description: "Auto-generated class reference for WarPartyComponent."
---
# WarPartyComponent

**Namespace:** TaleWorlds.CampaignSystem.Party.PartyComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class WarPartyComponent : PartyComponent`
**Base:** `PartyComponent`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Party.PartyComponents/WarPartyComponent.cs`

## Overview

`WarPartyComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `WarPartyComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetDefaultComponentBanner
`public override Banner GetDefaultComponentBanner()`

**Purpose:** Reads and returns the `default component banner` value held by the current object.

```csharp
// Obtain an instance of WarPartyComponent from the subsystem API first
WarPartyComponent warPartyComponent = ...;
var result = warPartyComponent.GetDefaultComponentBanner();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
WarPartyComponent instance = ...;
```

## See Also

- [Area Index](../)