<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FaceGen`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FaceGen

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** class
**Area:** Core

## Overview

> This is an auto-generated stub. `FaceGen` is a class in the `TaleWorlds.Core` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

### SetInstance

```csharp
public static void SetInstance(IFaceGen faceGen)
```

### GetRandomBodyProperties

```csharp
public static BodyProperties GetRandomBodyProperties(int race, bool isFemale, BodyProperties bodyPropertiesMin, BodyProperties bodyPropertiesMax, int hairCoverType, int seed, string hairTags, string beardTags, string tatooTags, float variationAmount)
```

### GetRaceCount

```csharp
public static int GetRaceCount()
```

### GetRaceOrDefault

```csharp
public static int GetRaceOrDefault(string raceId)
```

### GetBaseMonsterNameFromRace

```csharp
public static string GetBaseMonsterNameFromRace(int race)
```

### GetRaceNames

```csharp
public static string GetRaceNames()
```

### GetMonster

```csharp
public static Monster GetMonster(string monsterID)
```

### GetMonsterWithSuffix

```csharp
public static Monster GetMonsterWithSuffix(int race, string suffix)
```

### GetBaseMonsterFromRace

```csharp
public static Monster GetBaseMonsterFromRace(int race)
```

### GenerateParentKey

```csharp
public static void GenerateParentKey(BodyProperties childBodyProperties, int race, ref BodyProperties motherBodyProperties, ref BodyProperties fatherBodyProperties)
```

### SetHair

```csharp
public static void SetHair(ref BodyProperties bodyProperties, int hair, int beard, int tattoo)
```

### SetBody

```csharp
public static void SetBody(ref BodyProperties bodyProperties, int build, int weight)
```

### SetPigmentation

```csharp
public static void SetPigmentation(ref BodyProperties bodyProperties, int skinColor, int hairColor, int eyeColor)
```

### GetBodyPropertiesWithAge

```csharp
public static BodyProperties GetBodyPropertiesWithAge(ref BodyProperties originalBodyProperties, float age)
```

### GetMaturityTypeWithAge

```csharp
public static BodyMeshMaturityType GetMaturityTypeWithAge(float age)
```

### GetHairIndicesByTag

```csharp
public static int GetHairIndicesByTag(int race, int curGender, float age, string tag)
```

### GetFacialIndicesByTag

```csharp
public static int GetFacialIndicesByTag(int race, int curGender, float age, string tag)
```

### GetTattooIndicesByTag

```csharp
public static int GetTattooIndicesByTag(int race, int curGender, float age, string tag)
```

### GetTattooZeroProbability

```csharp
public static float GetTattooZeroProbability(int race, int curGender, float age)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)