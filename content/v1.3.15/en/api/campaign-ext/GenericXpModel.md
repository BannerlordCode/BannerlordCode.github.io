---
title: "GenericXpModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GenericXpModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GenericXpModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class GenericXpModel : MBGameModel<GenericXpModel>`
**Base:** `MBGameModel<GenericXpModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/GenericXpModel.cs`

## Overview

`GenericXpModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `GenericXpModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetXpMultiplier
`public abstract float GetXpMultiplier(Hero hero)`

**Purpose:** Gets the current value of `xp multiplier`.

## Usage Example

```csharp
var implementation = new CustomGenericXpModel();
```

## See Also

- [Complete Class Catalog](../catalog)