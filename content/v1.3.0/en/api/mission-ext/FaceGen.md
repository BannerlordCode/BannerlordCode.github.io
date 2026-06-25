---
title: "FaceGen"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FaceGen`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# FaceGen

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FaceGen : IFaceGen`
**Base:** `IFaceGen`
**File:** `TaleWorlds.MountAndBlade/FaceGen.cs`

## Overview

`FaceGen` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateInstance
`public static void CreateInstance()`

**Purpose:** Creates a new `instance` instance or object.

### GetMonster
`public Monster GetMonster(string monsterID)`

**Purpose:** Gets the current value of `monster`.

### GetMonsterWithSuffix
`public Monster GetMonsterWithSuffix(int race, string suffix)`

**Purpose:** Gets the current value of `monster with suffix`.

### GetBaseMonsterFromRace
`public Monster GetBaseMonsterFromRace(int race)`

**Purpose:** Gets the current value of `base monster from race`.

### GetRandomBodyProperties
`public BodyProperties GetRandomBodyProperties(int race, bool isFemale, BodyProperties bodyPropertiesMin, BodyProperties bodyPropertiesMax, int hairCoverType, int seed, string hairTags, string beardTags, string tattooTags, float variationAmount)`

**Purpose:** Gets the current value of `random body properties`.

### GetBodyPropertiesWithAge
`public BodyProperties GetBodyPropertiesWithAge(ref BodyProperties bodyProperties, float age)`

**Purpose:** Gets the current value of `body properties with age`.

### GetParamsFromBody
`public void GetParamsFromBody(ref FaceGenerationParams faceGenerationParams, BodyProperties bodyProperties, bool earsAreHidden, bool mouthIsHidden)`

**Purpose:** Gets the current value of `params from body`.

### GetMaturityTypeWithAge
`public BodyMeshMaturityType GetMaturityTypeWithAge(float age)`

**Purpose:** Gets the current value of `maturity type with age`.

### GetRaceCount
`public int GetRaceCount()`

**Purpose:** Gets the current value of `race count`.

### GetRaceOrDefault
`public int GetRaceOrDefault(string raceId)`

**Purpose:** Gets the current value of `race or default`.

### GetBaseMonsterNameFromRace
`public string GetBaseMonsterNameFromRace(int race)`

**Purpose:** Gets the current value of `base monster name from race`.

### GetRaceNames
`public string GetRaceNames()`

**Purpose:** Gets the current value of `race names`.

### GetHairIndicesByTag
`public int GetHairIndicesByTag(int race, int curGender, float age, string tag)`

**Purpose:** Gets the current value of `hair indices by tag`.

### GetFacialIndicesByTag
`public int GetFacialIndicesByTag(int race, int curGender, float age, string tag)`

**Purpose:** Gets the current value of `facial indices by tag`.

### GetTattooIndicesByTag
`public int GetTattooIndicesByTag(int race, int curGender, float age, string tag)`

**Purpose:** Gets the current value of `tattoo indices by tag`.

### GetTattooZeroProbability
`public float GetTattooZeroProbability(int race, int curGender, float age)`

**Purpose:** Gets the current value of `tattoo zero probability`.

## Usage Example

```csharp
FaceGen.CreateInstance();
```

## See Also

- [Complete Class Catalog](../catalog)