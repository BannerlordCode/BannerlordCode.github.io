---
title: "AgeModel"
description: "Auto-generated class reference for AgeModel."
---
# AgeModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class AgeModel : MBGameModel<AgeModel>`
**Base:** `MBGameModel<AgeModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/AgeModel.cs`

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

**Purpose:** Reads and returns the age limit for location value held by the this instance.

```csharp
// Obtain an instance of AgeModel from the subsystem API first
AgeModel ageModel = ...;
ageModel.GetAgeLimitForLocation(character, minimumAge, maximumAge, "example");
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
AgeModel instance = ...;
```

## See Also

- [Area Index](../)