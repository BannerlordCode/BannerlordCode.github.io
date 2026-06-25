---
title: "BodyPropertiesModel"
description: "Auto-generated class reference for BodyPropertiesModel."
---
# BodyPropertiesModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class BodyPropertiesModel : MBGameModel<BodyPropertiesModel>`
**Base:** `MBGameModel<BodyPropertiesModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/BodyPropertiesModel.cs`

## Overview

`BodyPropertiesModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `BodyPropertiesModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetHairIndicesForCulture
`public abstract int GetHairIndicesForCulture(int race, int gender, float age, CultureObject culture)`

**Purpose:** **Purpose:** Reads and returns the hair indices for culture value held by the this instance.

```csharp
// Obtain an instance of BodyPropertiesModel from the subsystem API first
BodyPropertiesModel bodyPropertiesModel = ...;
var result = bodyPropertiesModel.GetHairIndicesForCulture(0, 0, 0, culture);
```

### GetBeardIndicesForCulture
`public abstract int GetBeardIndicesForCulture(int race, int gender, float age, CultureObject culture)`

**Purpose:** **Purpose:** Reads and returns the beard indices for culture value held by the this instance.

```csharp
// Obtain an instance of BodyPropertiesModel from the subsystem API first
BodyPropertiesModel bodyPropertiesModel = ...;
var result = bodyPropertiesModel.GetBeardIndicesForCulture(0, 0, 0, culture);
```

### GetTattooIndicesForCulture
`public abstract int GetTattooIndicesForCulture(int race, int gender, float age, CultureObject culture)`

**Purpose:** **Purpose:** Reads and returns the tattoo indices for culture value held by the this instance.

```csharp
// Obtain an instance of BodyPropertiesModel from the subsystem API first
BodyPropertiesModel bodyPropertiesModel = ...;
var result = bodyPropertiesModel.GetTattooIndicesForCulture(0, 0, 0, culture);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
BodyPropertiesModel instance = ...;
```

## See Also

- [Area Index](../)