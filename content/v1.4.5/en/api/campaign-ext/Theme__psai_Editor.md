---
title: "Theme__psai_Editor"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Theme`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Theme

**Namespace:** psai.Editor
**Module:** psai.Editor
**Type:** `public class Theme : PsaiMusicEntity, ICloneable`
**Base:** `PsaiMusicEntity`
**File:** `Bannerlord.Source/bin/TaleWorlds.PSAI/psai.Editor/Theme.cs`

## Overview

`Theme` lives in `psai.Editor` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `psai.Editor` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

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
`public static bool ConvertPlaycountVsRandomWeightingToBooleanPlaycountPreferred(float weightingPlaycountVsRandom)`

**Purpose:** Handles logic related to `convert playcount vs random weighting to boolean playcount preferred`.

### GetClassString
`public override string GetClassString()`

**Purpose:** Gets the current value of `class string`.

### GetChildren
`public override List<PsaiMusicEntity> GetChildren()`

**Purpose:** Gets the current value of `children`.

### GetParent
`public override PsaiMusicEntity GetParent()`

**Purpose:** Gets the current value of `parent`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### AddGroup
`public bool AddGroup(Group groupToAdd)`

**Purpose:** Adds `group` to the current collection or state.

### DeleteGroup
`public void DeleteGroup(Group group)`

**Purpose:** Handles logic related to `delete group`.

### GetSegmentsOfAllGroups
`public HashSet<Segment> GetSegmentsOfAllGroups()`

**Purpose:** Gets the current value of `segments of all groups`.

### GetAudioDataRelativeFilePathsUsedByThisTheme
`public HashSet<string> GetAudioDataRelativeFilePathsUsedByThisTheme()`

**Purpose:** Gets the current value of `audio data relative file paths used by this theme`.

### GetCompatibilitySetting
`public override CompatibilitySetting GetCompatibilitySetting(PsaiMusicEntity targetEntity)`

**Purpose:** Gets the current value of `compatibility setting`.

### GetCompatibilityType
`public override CompatibilityType GetCompatibilityType(PsaiMusicEntity targetEntity, out CompatibilityReason reason)`

**Purpose:** Gets the current value of `compatibility type`.

### GetIndexPositionWithinParentEntity
`public override int GetIndexPositionWithinParentEntity(PsaiProject parentProject)`

**Purpose:** Gets the current value of `index position within parent entity`.

### PropertyDifferencesAffectCompatibilities
`public override bool PropertyDifferencesAffectCompatibilities(PsaiMusicEntity otherEntity)`

**Purpose:** Handles logic related to `property differences affect compatibilities`.

### SetAsParentThemeForAllGroupsAndSegments
`public void SetAsParentThemeForAllGroupsAndSegments()`

**Purpose:** Sets the value or state of `as parent theme for all groups and segments`.

### CreatePsaiDotNetVersion
`public psai.net.Theme CreatePsaiDotNetVersion()`

**Purpose:** Creates a new `psai dot net version` instance or object.

### getTestTheme1
`public static Theme getTestTheme1()`

**Purpose:** Handles logic related to `get test theme1`.

### getTestTheme2
`public static Theme getTestTheme2()`

**Purpose:** Handles logic related to `get test theme2`.

### Clone
`public override object Clone()`

**Purpose:** Handles logic related to `clone`.

### ShallowCopy
`public override PsaiMusicEntity ShallowCopy()`

**Purpose:** Handles logic related to `shallow copy`.

## Usage Example

```csharp
Theme.ConvertPlaycountVsRandomWeightingToBooleanPlaycountPreferred(0);
```

## See Also

- [Complete Class Catalog](../catalog)