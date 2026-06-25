---
title: "SettlementMenuOverlayModel"
description: "Auto-generated class reference for SettlementMenuOverlayModel."
---
# SettlementMenuOverlayModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementMenuOverlayModel : MBGameModel<SettlementMenuOverlayModel>`
**Base:** `MBGameModel<SettlementMenuOverlayModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/SettlementMenuOverlayModel.cs`

## Overview

`SettlementMenuOverlayModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `SettlementMenuOverlayModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetOverlayHeroes
`public abstract Dictionary<Hero, bool> GetOverlayHeroes()`

**Purpose:** Reads and returns the `overlay heroes` value held by the current object.

```csharp
// Obtain an instance of SettlementMenuOverlayModel from the subsystem API first
SettlementMenuOverlayModel settlementMenuOverlayModel = ...;
var result = settlementMenuOverlayModel.GetOverlayHeroes();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
SettlementMenuOverlayModel instance = ...;
```

## See Also

- [Area Index](../)