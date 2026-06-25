---
title: "FaceGen"
description: "Auto-generated class reference for FaceGen."
---
# FaceGen

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class FaceGen`
**Base:** none
**File:** `TaleWorlds.Core/FaceGen.cs`

## Overview

`FaceGen` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetInstance
`public static void SetInstance(IFaceGen faceGen)`

**Purpose:** **Purpose:** Assigns a new value to instance and updates the object's internal state.

```csharp
// Static call; no instance required
FaceGen.SetInstance(faceGen);
```

### GetRandomBodyProperties
`public static BodyProperties GetRandomBodyProperties(int race, bool isFemale, BodyProperties bodyPropertiesMin, BodyProperties bodyPropertiesMax, int hairCoverType, int seed, string hairTags, string beardTags, string tatooTags, float variationAmount)`

**Purpose:** **Purpose:** Reads and returns the random body properties value held by the this instance.

```csharp
// Static call; no instance required
FaceGen.GetRandomBodyProperties(0, false, bodyPropertiesMin, bodyPropertiesMax, 0, 0, "example", "example", "example", 0);
```

### GetRaceCount
`public static int GetRaceCount()`

**Purpose:** **Purpose:** Reads and returns the race count value held by the this instance.

```csharp
// Static call; no instance required
FaceGen.GetRaceCount();
```

### GetRaceOrDefault
`public static int GetRaceOrDefault(string raceId)`

**Purpose:** **Purpose:** Reads and returns the race or default value held by the this instance.

```csharp
// Static call; no instance required
FaceGen.GetRaceOrDefault("example");
```

### GetBaseMonsterNameFromRace
`public static string GetBaseMonsterNameFromRace(int race)`

**Purpose:** **Purpose:** Reads and returns the base monster name from race value held by the this instance.

```csharp
// Static call; no instance required
FaceGen.GetBaseMonsterNameFromRace(0);
```

### GetRaceNames
`public static string GetRaceNames()`

**Purpose:** **Purpose:** Reads and returns the race names value held by the this instance.

```csharp
// Static call; no instance required
FaceGen.GetRaceNames();
```

### GetMonster
`public static Monster GetMonster(string monsterID)`

**Purpose:** **Purpose:** Reads and returns the monster value held by the this instance.

```csharp
// Static call; no instance required
FaceGen.GetMonster("example");
```

### GetMonsterWithSuffix
`public static Monster GetMonsterWithSuffix(int race, string suffix)`

**Purpose:** **Purpose:** Reads and returns the monster with suffix value held by the this instance.

```csharp
// Static call; no instance required
FaceGen.GetMonsterWithSuffix(0, "example");
```

### GetBaseMonsterFromRace
`public static Monster GetBaseMonsterFromRace(int race)`

**Purpose:** **Purpose:** Reads and returns the base monster from race value held by the this instance.

```csharp
// Static call; no instance required
FaceGen.GetBaseMonsterFromRace(0);
```

### GenerateParentKey
`public static void GenerateParentKey(BodyProperties childBodyProperties, int race, ref BodyProperties motherBodyProperties, ref BodyProperties fatherBodyProperties)`

**Purpose:** **Purpose:** Generates an instance, data, or representation of parent key.

```csharp
// Static call; no instance required
FaceGen.GenerateParentKey(childBodyProperties, 0, motherBodyProperties, fatherBodyProperties);
```

### SetHair
`public static void SetHair(ref BodyProperties bodyProperties, int hair, int beard, int tattoo)`

**Purpose:** **Purpose:** Assigns a new value to hair and updates the object's internal state.

```csharp
// Static call; no instance required
FaceGen.SetHair(bodyProperties, 0, 0, 0);
```

### SetBody
`public static void SetBody(ref BodyProperties bodyProperties, int build, int weight)`

**Purpose:** **Purpose:** Assigns a new value to body and updates the object's internal state.

```csharp
// Static call; no instance required
FaceGen.SetBody(bodyProperties, 0, 0);
```

### SetPigmentation
`public static void SetPigmentation(ref BodyProperties bodyProperties, int skinColor, int hairColor, int eyeColor)`

**Purpose:** **Purpose:** Assigns a new value to pigmentation and updates the object's internal state.

```csharp
// Static call; no instance required
FaceGen.SetPigmentation(bodyProperties, 0, 0, 0);
```

### GetBodyPropertiesWithAge
`public static BodyProperties GetBodyPropertiesWithAge(ref BodyProperties originalBodyProperties, float age)`

**Purpose:** **Purpose:** Reads and returns the body properties with age value held by the this instance.

```csharp
// Static call; no instance required
FaceGen.GetBodyPropertiesWithAge(originalBodyProperties, 0);
```

### GetMaturityTypeWithAge
`public static BodyMeshMaturityType GetMaturityTypeWithAge(float age)`

**Purpose:** **Purpose:** Reads and returns the maturity type with age value held by the this instance.

```csharp
// Static call; no instance required
FaceGen.GetMaturityTypeWithAge(0);
```

### GetHairIndicesByTag
`public static int GetHairIndicesByTag(int race, int curGender, float age, string tag)`

**Purpose:** **Purpose:** Reads and returns the hair indices by tag value held by the this instance.

```csharp
// Static call; no instance required
FaceGen.GetHairIndicesByTag(0, 0, 0, "example");
```

### GetFacialIndicesByTag
`public static int GetFacialIndicesByTag(int race, int curGender, float age, string tag)`

**Purpose:** **Purpose:** Reads and returns the facial indices by tag value held by the this instance.

```csharp
// Static call; no instance required
FaceGen.GetFacialIndicesByTag(0, 0, 0, "example");
```

### GetTattooIndicesByTag
`public static int GetTattooIndicesByTag(int race, int curGender, float age, string tag)`

**Purpose:** **Purpose:** Reads and returns the tattoo indices by tag value held by the this instance.

```csharp
// Static call; no instance required
FaceGen.GetTattooIndicesByTag(0, 0, 0, "example");
```

### GetTattooZeroProbability
`public static float GetTattooZeroProbability(int race, int curGender, float age)`

**Purpose:** **Purpose:** Reads and returns the tattoo zero probability value held by the this instance.

```csharp
// Static call; no instance required
FaceGen.GetTattooZeroProbability(0, 0, 0);
```

## Usage Example

```csharp
FaceGen.SetInstance(faceGen);
```

## See Also

- [Area Index](../)