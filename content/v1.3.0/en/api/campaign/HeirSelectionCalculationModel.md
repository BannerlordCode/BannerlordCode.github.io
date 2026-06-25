---
title: "HeirSelectionCalculationModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HeirSelectionCalculationModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# HeirSelectionCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class HeirSelectionCalculationModel : MBGameModel<HeirSelectionCalculationModel>`
**Base:** `MBGameModel<HeirSelectionCalculationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/HeirSelectionCalculationModel.cs`

## Overview

`HeirSelectionCalculationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `HeirSelectionCalculationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `HighestSkillPoint` | `public abstract int HighestSkillPoint { get; }` |

## Key Methods

### CalculateHeirSelectionPoint
`public abstract int CalculateHeirSelectionPoint(Hero candidateHeir, Hero deadHero, ref Hero maxSkillHero)`

**Purpose:** Handles logic related to `calculate heir selection point`.

## Usage Example

```csharp
var implementation = new CustomHeirSelectionCalculationModel();
```

## See Also

- [Complete Class Catalog](../catalog)