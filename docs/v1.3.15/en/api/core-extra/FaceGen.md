<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FaceGen`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FaceGen

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class FaceGen`
**Area:** core-extra

## Overview

`FaceGen` lives in `TaleWorlds.Core`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetInstance
`public static void SetInstance(IFaceGen faceGen)`

**Purpose:** Sets the value or state of `instance`.

### GetRandomBodyProperties
`public static BodyProperties GetRandomBodyProperties(int race, bool isFemale, BodyProperties bodyPropertiesMin, BodyProperties bodyPropertiesMax, int hairCoverType, int seed, string hairTags, string beardTags, string tatooTags, float variationAmount)`

**Purpose:** Gets the current value of `random body properties`.

### GetRaceCount
`public static int GetRaceCount()`

**Purpose:** Gets the current value of `race count`.

### GetRaceOrDefault
`public static int GetRaceOrDefault(string raceId)`

**Purpose:** Gets the current value of `race or default`.

### GetBaseMonsterNameFromRace
`public static string GetBaseMonsterNameFromRace(int race)`

**Purpose:** Gets the current value of `base monster name from race`.

### GetRaceNames
`public static string GetRaceNames()`

**Purpose:** Gets the current value of `race names`.

### GetMonster
`public static Monster GetMonster(string monsterID)`

**Purpose:** Gets the current value of `monster`.

### GetMonsterWithSuffix
`public static Monster GetMonsterWithSuffix(int race, string suffix)`

**Purpose:** Gets the current value of `monster with suffix`.

### GetBaseMonsterFromRace
`public static Monster GetBaseMonsterFromRace(int race)`

**Purpose:** Gets the current value of `base monster from race`.

### GenerateParentKey
`public static void GenerateParentKey(BodyProperties childBodyProperties, int race, ref BodyProperties motherBodyProperties, ref BodyProperties fatherBodyProperties)`

**Purpose:** Handles logic related to `generate parent key`.

### SetHair
`public static void SetHair(ref BodyProperties bodyProperties, int hair, int beard, int tattoo)`

**Purpose:** Sets the value or state of `hair`.

### SetBody
`public static void SetBody(ref BodyProperties bodyProperties, int build, int weight)`

**Purpose:** Sets the value or state of `body`.

### SetPigmentation
`public static void SetPigmentation(ref BodyProperties bodyProperties, int skinColor, int hairColor, int eyeColor)`

**Purpose:** Sets the value or state of `pigmentation`.

### GetBodyPropertiesWithAge
`public static BodyProperties GetBodyPropertiesWithAge(ref BodyProperties originalBodyProperties, float age)`

**Purpose:** Gets the current value of `body properties with age`.

### GetMaturityTypeWithAge
`public static BodyMeshMaturityType GetMaturityTypeWithAge(float age)`

**Purpose:** Gets the current value of `maturity type with age`.

### GetHairIndicesByTag
`public static int GetHairIndicesByTag(int race, int curGender, float age, string tag)`

**Purpose:** Gets the current value of `hair indices by tag`.

### GetFacialIndicesByTag
`public static int GetFacialIndicesByTag(int race, int curGender, float age, string tag)`

**Purpose:** Gets the current value of `facial indices by tag`.

### GetTattooIndicesByTag
`public static int GetTattooIndicesByTag(int race, int curGender, float age, string tag)`

**Purpose:** Gets the current value of `tattoo indices by tag`.

### GetTattooZeroProbability
`public static float GetTattooZeroProbability(int race, int curGender, float age)`

**Purpose:** Gets the current value of `tattoo zero probability`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
FaceGen.SetInstance(faceGen);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)
