---
title: "Theme"
description: "Auto-generated class reference for Theme."
---
# Theme

**Namespace:** psai.Editor
**Module:** psai.Editor
**Type:** `public class Theme : PsaiMusicEntity, ICloneable`
**Base:** `PsaiMusicEntity`
**File:** `TaleWorlds.PSAI/Editor/Theme.cs`

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

**Purpose:** **Purpose:** Converts playcount vs random weighting to boolean playcount preferred into another representation or type.

```csharp
// Static call; no instance required
Theme.ConvertPlaycountVsRandomWeightingToBooleanPlaycountPreferred(0);
```

### GetClassString
`public override string GetClassString()`

**Purpose:** **Purpose:** Reads and returns the class string value held by the this instance.

```csharp
// Obtain an instance of Theme from the subsystem API first
Theme theme = ...;
var result = theme.GetClassString();
```

### GetChildren
`public override List<PsaiMusicEntity> GetChildren()`

**Purpose:** **Purpose:** Reads and returns the children value held by the this instance.

```csharp
// Obtain an instance of Theme from the subsystem API first
Theme theme = ...;
var result = theme.GetChildren();
```

### GetParent
`public override PsaiMusicEntity GetParent()`

**Purpose:** **Purpose:** Reads and returns the parent value held by the this instance.

```csharp
// Obtain an instance of Theme from the subsystem API first
Theme theme = ...;
var result = theme.GetParent();
```

### ToString
`public override string ToString()`

**Purpose:** **Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of Theme from the subsystem API first
Theme theme = ...;
var result = theme.ToString();
```

### AddGroup
`public bool AddGroup(Group groupToAdd)`

**Purpose:** **Purpose:** Adds group to the current collection or state.

```csharp
// Obtain an instance of Theme from the subsystem API first
Theme theme = ...;
var result = theme.AddGroup(groupToAdd);
```

### DeleteGroup
`public void DeleteGroup(Group group)`

**Purpose:** **Purpose:** Executes the DeleteGroup logic.

```csharp
// Obtain an instance of Theme from the subsystem API first
Theme theme = ...;
theme.DeleteGroup(group);
```

### GetSegmentsOfAllGroups
`public HashSet<Segment> GetSegmentsOfAllGroups()`

**Purpose:** **Purpose:** Reads and returns the segments of all groups value held by the this instance.

```csharp
// Obtain an instance of Theme from the subsystem API first
Theme theme = ...;
var result = theme.GetSegmentsOfAllGroups();
```

### GetAudioDataRelativeFilePathsUsedByThisTheme
`public HashSet<string> GetAudioDataRelativeFilePathsUsedByThisTheme()`

**Purpose:** **Purpose:** Reads and returns the audio data relative file paths used by this theme value held by the this instance.

```csharp
// Obtain an instance of Theme from the subsystem API first
Theme theme = ...;
var result = theme.GetAudioDataRelativeFilePathsUsedByThisTheme();
```

### GetCompatibilitySetting
`public override CompatibilitySetting GetCompatibilitySetting(PsaiMusicEntity targetEntity)`

**Purpose:** **Purpose:** Reads and returns the compatibility setting value held by the this instance.

```csharp
// Obtain an instance of Theme from the subsystem API first
Theme theme = ...;
var result = theme.GetCompatibilitySetting(targetEntity);
```

### GetCompatibilityType
`public override CompatibilityType GetCompatibilityType(PsaiMusicEntity targetEntity, out CompatibilityReason reason)`

**Purpose:** **Purpose:** Reads and returns the compatibility type value held by the this instance.

```csharp
// Obtain an instance of Theme from the subsystem API first
Theme theme = ...;
var result = theme.GetCompatibilityType(targetEntity, reason);
```

### GetIndexPositionWithinParentEntity
`public override int GetIndexPositionWithinParentEntity(PsaiProject parentProject)`

**Purpose:** **Purpose:** Reads and returns the index position within parent entity value held by the this instance.

```csharp
// Obtain an instance of Theme from the subsystem API first
Theme theme = ...;
var result = theme.GetIndexPositionWithinParentEntity(parentProject);
```

### PropertyDifferencesAffectCompatibilities
`public override bool PropertyDifferencesAffectCompatibilities(PsaiMusicEntity otherEntity)`

**Purpose:** **Purpose:** Executes the PropertyDifferencesAffectCompatibilities logic.

```csharp
// Obtain an instance of Theme from the subsystem API first
Theme theme = ...;
var result = theme.PropertyDifferencesAffectCompatibilities(otherEntity);
```

### SetAsParentThemeForAllGroupsAndSegments
`public void SetAsParentThemeForAllGroupsAndSegments()`

**Purpose:** **Purpose:** Assigns a new value to as parent theme for all groups and segments and updates the object's internal state.

```csharp
// Obtain an instance of Theme from the subsystem API first
Theme theme = ...;
theme.SetAsParentThemeForAllGroupsAndSegments();
```

### CreatePsaiDotNetVersion
`public Theme CreatePsaiDotNetVersion()`

**Purpose:** **Purpose:** Constructs a new psai dot net version entity and returns it to the caller.

```csharp
// Obtain an instance of Theme from the subsystem API first
Theme theme = ...;
var result = theme.CreatePsaiDotNetVersion();
```

### getTestTheme1
`public static Theme getTestTheme1()`

**Purpose:** **Purpose:** Executes the getTestTheme1 logic.

```csharp
// Static call; no instance required
Theme.getTestTheme1();
```

### getTestTheme2
`public static Theme getTestTheme2()`

**Purpose:** **Purpose:** Executes the getTestTheme2 logic.

```csharp
// Static call; no instance required
Theme.getTestTheme2();
```

### Clone
`public override object Clone()`

**Purpose:** **Purpose:** Duplicates the this instance's state and returns a new instance.

```csharp
// Obtain an instance of Theme from the subsystem API first
Theme theme = ...;
var result = theme.Clone();
```

### ShallowCopy
`public override PsaiMusicEntity ShallowCopy()`

**Purpose:** **Purpose:** Executes the ShallowCopy logic.

```csharp
// Obtain an instance of Theme from the subsystem API first
Theme theme = ...;
var result = theme.ShallowCopy();
```

## Usage Example

```csharp
Theme.ConvertPlaycountVsRandomWeightingToBooleanPlaycountPreferred(0);
```

## See Also

- [Area Index](../)