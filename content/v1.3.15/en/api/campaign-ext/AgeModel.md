---
title: "AgeModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AgeModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AgeModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class AgeModel : MBGameModel<AgeModel>`
**Base:** `MBGameModel<AgeModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/AgeModel.cs`

## Overview

`AgeModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `AgeModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `BecomeInfantAge` | `public abstract int BecomeInfantAge { get; }` |
| `BecomeChildAge` | `public abstract int BecomeChildAge { get; }` |
| `BecomeTeenagerAge` | `public abstract int BecomeTeenagerAge { get; }` |
| `HeroComesOfAge` | `public abstract int HeroComesOfAge { get; }` |
| `BecomeOldAge` | `public abstract int BecomeOldAge { get; }` |
| `MiddleAdultHoodAge` | `public abstract int MiddleAdultHoodAge { get; }` |
| `MaxAge` | `public abstract int MaxAge { get; }` |

## Key Methods

### GetAgeLimitForLocation
`public abstract void GetAgeLimitForLocation(CharacterObject character, out int minimumAge, out int maximumAge, string additionalTags = "")`

**Purpose:** Gets the current value of `age limit for location`.

## Usage Example

```csharp
var implementation = new CustomAgeModel();
```

## See Also

- [Complete Class Catalog](../catalog)