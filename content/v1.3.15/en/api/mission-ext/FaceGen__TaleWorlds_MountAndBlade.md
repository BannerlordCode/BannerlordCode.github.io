---
title: "FaceGen"
description: "Auto-generated class reference for FaceGen."
---
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

**Purpose:** Constructs a new instance entity and returns it to the caller.

```csharp
// Static call; no instance required
FaceGen.CreateInstance();
```

### GetMonster
`public Monster GetMonster(string monsterID)`

**Purpose:** Reads and returns the monster value held by the this instance.

```csharp
// Obtain an instance of FaceGen from the subsystem API first
FaceGen faceGen = ...;
var result = faceGen.GetMonster("example");
```

### GetMonsterWithSuffix
`public Monster GetMonsterWithSuffix(int race, string suffix)`

**Purpose:** Reads and returns the monster with suffix value held by the this instance.

```csharp
// Obtain an instance of FaceGen from the subsystem API first
FaceGen faceGen = ...;
var result = faceGen.GetMonsterWithSuffix(0, "example");
```

### GetBaseMonsterFromRace
`public Monster GetBaseMonsterFromRace(int race)`

**Purpose:** Reads and returns the base monster from race value held by the this instance.

```csharp
// Obtain an instance of FaceGen from the subsystem API first
FaceGen faceGen = ...;
var result = faceGen.GetBaseMonsterFromRace(0);
```

### GetRandomBodyProperties
`public BodyProperties GetRandomBodyProperties(int race, bool isFemale, BodyProperties bodyPropertiesMin, BodyProperties bodyPropertiesMax, int hairCoverType, int seed, string hairTags, string beardTags, string tattooTags, float variationAmount)`

**Purpose:** Reads and returns the random body properties value held by the this instance.

```csharp
// Obtain an instance of FaceGen from the subsystem API first
FaceGen faceGen = ...;
var result = faceGen.GetRandomBodyProperties(0, false, bodyPropertiesMin, bodyPropertiesMax, 0, 0, "example", "example", "example", 0);
```

### GetBodyPropertiesWithAge
`public BodyProperties GetBodyPropertiesWithAge(ref BodyProperties bodyProperties, float age)`

**Purpose:** Reads and returns the body properties with age value held by the this instance.

```csharp
// Obtain an instance of FaceGen from the subsystem API first
FaceGen faceGen = ...;
var result = faceGen.GetBodyPropertiesWithAge(bodyProperties, 0);
```

### GetParamsFromBody
`public void GetParamsFromBody(ref FaceGenerationParams faceGenerationParams, BodyProperties bodyProperties, bool earsAreHidden, bool mouthIsHidden)`

**Purpose:** Reads and returns the params from body value held by the this instance.

```csharp
// Obtain an instance of FaceGen from the subsystem API first
FaceGen faceGen = ...;
faceGen.GetParamsFromBody(faceGenerationParams, bodyProperties, false, false);
```

### GetMaturityTypeWithAge
`public BodyMeshMaturityType GetMaturityTypeWithAge(float age)`

**Purpose:** Reads and returns the maturity type with age value held by the this instance.

```csharp
// Obtain an instance of FaceGen from the subsystem API first
FaceGen faceGen = ...;
var result = faceGen.GetMaturityTypeWithAge(0);
```

### FlushFaceCache
`public static void FlushFaceCache()`

**Purpose:** Executes the FlushFaceCache logic.

```csharp
// Static call; no instance required
FaceGen.FlushFaceCache();
```

### GetRaceCount
`public int GetRaceCount()`

**Purpose:** Reads and returns the race count value held by the this instance.

```csharp
// Obtain an instance of FaceGen from the subsystem API first
FaceGen faceGen = ...;
var result = faceGen.GetRaceCount();
```

### GetRaceOrDefault
`public int GetRaceOrDefault(string raceId)`

**Purpose:** Reads and returns the race or default value held by the this instance.

```csharp
// Obtain an instance of FaceGen from the subsystem API first
FaceGen faceGen = ...;
var result = faceGen.GetRaceOrDefault("example");
```

### GetBaseMonsterNameFromRace
`public string GetBaseMonsterNameFromRace(int race)`

**Purpose:** Reads and returns the base monster name from race value held by the this instance.

```csharp
// Obtain an instance of FaceGen from the subsystem API first
FaceGen faceGen = ...;
var result = faceGen.GetBaseMonsterNameFromRace(0);
```

### GetRaceNames
`public string GetRaceNames()`

**Purpose:** Reads and returns the race names value held by the this instance.

```csharp
// Obtain an instance of FaceGen from the subsystem API first
FaceGen faceGen = ...;
var result = faceGen.GetRaceNames();
```

### GetHairIndicesByTag
`public int GetHairIndicesByTag(int race, int curGender, float age, string tag)`

**Purpose:** Reads and returns the hair indices by tag value held by the this instance.

```csharp
// Obtain an instance of FaceGen from the subsystem API first
FaceGen faceGen = ...;
var result = faceGen.GetHairIndicesByTag(0, 0, 0, "example");
```

### GetFacialIndicesByTag
`public int GetFacialIndicesByTag(int race, int curGender, float age, string tag)`

**Purpose:** Reads and returns the facial indices by tag value held by the this instance.

```csharp
// Obtain an instance of FaceGen from the subsystem API first
FaceGen faceGen = ...;
var result = faceGen.GetFacialIndicesByTag(0, 0, 0, "example");
```

### GetTattooIndicesByTag
`public int GetTattooIndicesByTag(int race, int curGender, float age, string tag)`

**Purpose:** Reads and returns the tattoo indices by tag value held by the this instance.

```csharp
// Obtain an instance of FaceGen from the subsystem API first
FaceGen faceGen = ...;
var result = faceGen.GetTattooIndicesByTag(0, 0, 0, "example");
```

### GetTattooZeroProbability
`public float GetTattooZeroProbability(int race, int curGender, float age)`

**Purpose:** Reads and returns the tattoo zero probability value held by the this instance.

```csharp
// Obtain an instance of FaceGen from the subsystem API first
FaceGen faceGen = ...;
var result = faceGen.GetTattooZeroProbability(0, 0, 0);
```

## Usage Example

```csharp
FaceGen.CreateInstance();
```

## See Also

- [Area Index](../)