<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Theme`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Theme

**Namespace:** psai.Editor
**Module:** psai.Editor
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `Theme` is a class in the `psai.Editor` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Id` | `public int Id { get; set; }` |
| `Description` | `public string Description { get; set; }` |
| `ThemeTypeInt` | `public int ThemeTypeInt { get; set; }` |
| `Serialization_ManuallyBlockedThemeIds` | `public List<int> Serialization_ManuallyBlockedThemeIds { get; }` |
| `ManuallyBlockedTargetThemes` | `public HashSet<Theme> ManuallyBlockedTargetThemes { get; }` |
| `IntensityAfterRest` | `public float IntensityAfterRest { get; set; }` |
| `MusicPhaseSecondsAfterRest` | `public int MusicPhaseSecondsAfterRest { get; set; }` |
| `MusicPhaseSecondsGeneral` | `public int MusicPhaseSecondsGeneral { get; set; }` |
| `RestSecondsMin` | `public int RestSecondsMin { get; set; }` |
| `RestSecondsMax` | `public int RestSecondsMax { get; set; }` |
| `FadeoutMs` | `public int FadeoutMs { get; set; }` |
| `Priority` | `public int Priority { get; set; }` |
| `WeightingSwitchGroups` | `public float WeightingSwitchGroups { get; set; }` |
| `WeightingIntensityVsVariance` | `public float WeightingIntensityVsVariance { get; set; }` |
| `WeightingLowPlaycountVsRandom` | `public float WeightingLowPlaycountVsRandom { get; set; }` |
| `Groups` | `public List<Group> Groups { get; set; }` |


## Key Methods

### ConvertPlaycountVsRandomWeightingToBooleanPlaycountPreferred

```csharp
public static bool ConvertPlaycountVsRandomWeightingToBooleanPlaycountPreferred(float weightingPlaycountVsRandom)
```

### GetClassString

```csharp
public override string GetClassString()
```

### GetChildren

```csharp
public override List<PsaiMusicEntity> GetChildren()
```

### GetParent

```csharp
public override PsaiMusicEntity GetParent()
```

### ToString

```csharp
public override string ToString()
```

### AddGroup

```csharp
public bool AddGroup(Group groupToAdd)
```

### DeleteGroup

```csharp
public void DeleteGroup(Group group)
```

### GetSegmentsOfAllGroups

```csharp
public HashSet<Segment> GetSegmentsOfAllGroups()
```

### GetAudioDataRelativeFilePathsUsedByThisTheme

```csharp
public HashSet<string> GetAudioDataRelativeFilePathsUsedByThisTheme()
```

### GetCompatibilitySetting

```csharp
public override CompatibilitySetting GetCompatibilitySetting(PsaiMusicEntity targetEntity)
```

### GetCompatibilityType

```csharp
public override CompatibilityType GetCompatibilityType(PsaiMusicEntity targetEntity, out CompatibilityReason reason)
```

### GetIndexPositionWithinParentEntity

```csharp
public override int GetIndexPositionWithinParentEntity(PsaiProject parentProject)
```

### PropertyDifferencesAffectCompatibilities

```csharp
public override bool PropertyDifferencesAffectCompatibilities(PsaiMusicEntity otherEntity)
```

### SetAsParentThemeForAllGroupsAndSegments

```csharp
public void SetAsParentThemeForAllGroupsAndSegments()
```

### CreatePsaiDotNetVersion

```csharp
public Theme CreatePsaiDotNetVersion()
```

### getTestTheme1

```csharp
public static Theme getTestTheme1()
```

### getTestTheme2

```csharp
public static Theme getTestTheme2()
```

### Clone

```csharp
public override object Clone()
```

### ShallowCopy

```csharp
public override PsaiMusicEntity ShallowCopy()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)