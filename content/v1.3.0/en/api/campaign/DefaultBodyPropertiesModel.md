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

`DefaultBodyPropertiesModel` is the bridge between campaign characters and the face generator, and it does nothing but forward three lookups. `GetHairIndicesForCulture`, `GetBeardIndicesForCulture` and `GetTattooIndicesForCulture` each take a race index, a gender, an age and a `CultureObject`, and hand them to `FaceGen.GetHairIndicesByTag`, `FaceGen.GetFacialIndicesByTag` and `FaceGen.GetTattooIndicesByTag` respectively, passing the culture's string id as the tag (`TaleWorlds.CampaignSystem/GameComponents/DefaultBodyPropertiesModel.cs:13`, `:19`, `:25`). The arrays returned are mesh indices into the character asset, not item ids.

## Mental Model

The culture string id is the only real decision in the class, and it is not validated here — passing a culture whose id has no matching mesh tag returns whatever `FaceGen` produces for an unknown tag rather than an error, so a mod that adds a culture without mesh data gets a bald, beardless character rather than a crash. `BarberCampaignBehavior.cs:154` and `:155` are the consumers, and note what they pass: the main hero's *own* race, gender and age, used to build the barber's hairstyle selection list. That makes the age parameter load-bearing in a way it looks like it should not be — the same race and gender at age 20 and age 60 can resolve to different mesh sets, because `FaceGen` treats age as part of the tag lookup. An override is therefore only worth writing if the mod is adding mesh tags of its own; changing the age passed through would silently change which meshes are offered rather than restyling them.

## Key Methods

### GetHairIndicesForCulture
`public override int GetHairIndicesForCulture(int race, int gender, float age, CultureObject culture)`

**Purpose:** Reads and returns the hair indices for culture value held by this instance.

```csharp
DefaultBodyPropertiesModel defaultBodyPropertiesModel = ...;
var result = defaultBodyPropertiesModel.GetHairIndicesForCulture(0, 0, 0, culture);
```

### GetBeardIndicesForCulture
`public override int GetBeardIndicesForCulture(int race, int gender, float age, CultureObject culture)`

**Purpose:** Reads and returns the beard indices for culture value held by this instance.

```csharp
DefaultBodyPropertiesModel defaultBodyPropertiesModel = ...;
var result = defaultBodyPropertiesModel.GetBeardIndicesForCulture(0, 0, 0, culture);
```

### GetTattooIndicesForCulture
`public override int GetTattooIndicesForCulture(int race, int gender, float age, CultureObject culture)`

**Purpose:** Reads and returns the tattoo indices for culture value held by this instance.

```csharp
DefaultBodyPropertiesModel defaultBodyPropertiesModel = ...;
var result = defaultBodyPropertiesModel.GetTattooIndicesForCulture(0, 0, 0, culture);
```

## Usage Example

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    gameStarterObject.AddModel<BodyPropertiesModel>(new DefaultBodyPropertiesModel());
}
```

`BodyPropertiesModel` is declared as `MBGameModel<BodyPropertiesModel>` (`BodyPropertiesModel.cs:7`), so the generic `AddModel<T>` overload (`IGameStarter.cs:13`) accepts this instance. The stock game installs this same model through the same overload at `SandBoxManager.cs:351`.

## See Also

- [Area Index](../)