---
title: "DefaultBodyPropertiesModel"
description: "Auto-generated class reference for DefaultBodyPropertiesModel."
---
# DefaultBodyPropertiesModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultBodyPropertiesModel : BodyPropertiesModel`
**Base:** `BodyPropertiesModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultBodyPropertiesModel.cs`

## Overview

`DefaultBodyPropertiesModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultBodyPropertiesModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetHairIndicesForCulture
`public override int GetHairIndicesForCulture(int race, int gender, float age, CultureObject culture)`

**Purpose:** Reads and returns the hair indices for culture value held by the this instance.

```csharp
// Obtain an instance of DefaultBodyPropertiesModel from the subsystem API first
DefaultBodyPropertiesModel defaultBodyPropertiesModel = ...;
var result = defaultBodyPropertiesModel.GetHairIndicesForCulture(0, 0, 0, culture);
```

### GetBeardIndicesForCulture
`public override int GetBeardIndicesForCulture(int race, int gender, float age, CultureObject culture)`

**Purpose:** Reads and returns the beard indices for culture value held by the this instance.

```csharp
// Obtain an instance of DefaultBodyPropertiesModel from the subsystem API first
DefaultBodyPropertiesModel defaultBodyPropertiesModel = ...;
var result = defaultBodyPropertiesModel.GetBeardIndicesForCulture(0, 0, 0, culture);
```

### GetTattooIndicesForCulture
`public override int GetTattooIndicesForCulture(int race, int gender, float age, CultureObject culture)`

**Purpose:** Reads and returns the tattoo indices for culture value held by the this instance.

```csharp
// Obtain an instance of DefaultBodyPropertiesModel from the subsystem API first
DefaultBodyPropertiesModel defaultBodyPropertiesModel = ...;
var result = defaultBodyPropertiesModel.GetTattooIndicesForCulture(0, 0, 0, culture);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultBodyPropertiesModel>(new MyDefaultBodyPropertiesModel());
```

## See Also

- [Area Index](../)