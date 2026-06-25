---
title: "Segment"
description: "Auto-generated class reference for Segment."
---
# Segment

**Namespace:** psai.Editor
**Module:** psai.Editor
**Type:** `public class Segment : PsaiMusicEntity, ICloneable`
**Base:** `PsaiMusicEntity`
**File:** `TaleWorlds.PSAI/Editor/Segment.cs`

## Overview

`Segment` lives in `psai.Editor` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `psai.Editor` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Id` | `public int Id { get; set; }` |
| `IsAutomaticBridgeSegment` | `public bool IsAutomaticBridgeSegment { get; set; }` |
| `Intensity` | `public float Intensity { get; set; }` |
| `IsUsableAtStart` | `public bool IsUsableAtStart { get; set; }` |
| `IsUsableInMiddle` | `public bool IsUsableInMiddle { get; set; }` |
| `IsUsableAtEnd` | `public bool IsUsableAtEnd { get; set; }` |
| `AudioData` | `public AudioData AudioData { get; set; }` |
| `CalculatePostAndPrebeatLengthBasedOnBeats` | `public bool CalculatePostAndPrebeatLengthBasedOnBeats { get; set; }` |
| `PreBeatLengthInSamples` | `public int PreBeatLengthInSamples { get; set; }` |
| `PostBeatLengthInSamples` | `public int PostBeatLengthInSamples { get; set; }` |
| `PreBeats` | `public float PreBeats { get; set; }` |
| `PostBeats` | `public float PostBeats { get; set; }` |
| `Bpm` | `public float Bpm { get; set; }` |
| `SampleRate` | `public int SampleRate { get; set; }` |
| `TotalLengthInSamples` | `public int TotalLengthInSamples { get; set; }` |
| `BitsPerSample` | `public int BitsPerSample { get; set; }` |
| `ThemeId` | `public int ThemeId { get; set; }` |
| `Serialization_ManuallyBlockedSegmentIds` | `public List<int> Serialization_ManuallyBlockedSegmentIds { get; set; }` |
| `Serialization_ManuallyLinkedSegmentIds` | `public List<int> Serialization_ManuallyLinkedSegmentIds { get; set; }` |
| `DefaultCompatibiltyAsFollower` | `public CompatibilityType DefaultCompatibiltyAsFollower { get; set; }` |
| `Group` | `public Group Group { get; set; }` |
| `ManuallyLinkedSnippets` | `public HashSet<Segment> ManuallyLinkedSnippets { get; set; }` |
| `ManuallyBlockedSnippets` | `public HashSet<Segment> ManuallyBlockedSnippets { get; set; }` |
| `CompatibleSnippetsIds` | `public Dictionary<int, float> CompatibleSnippetsIds { get; }` |

## Key Methods

### GetChildren
`public override List<PsaiMusicEntity> GetChildren()`

**Purpose:** **Purpose:** Reads and returns the children value held by the this instance.

```csharp
// Obtain an instance of Segment from the subsystem API first
Segment segment = ...;
var result = segment.GetChildren();
```

### GetClassString
`public override string GetClassString()`

**Purpose:** **Purpose:** Reads and returns the class string value held by the this instance.

```csharp
// Obtain an instance of Segment from the subsystem API first
Segment segment = ...;
var result = segment.GetClassString();
```

### Clone
`public override object Clone()`

**Purpose:** **Purpose:** Duplicates the this instance's state and returns a new instance.

```csharp
// Obtain an instance of Segment from the subsystem API first
Segment segment = ...;
var result = segment.Clone();
```

### ToString
`public override string ToString()`

**Purpose:** **Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of Segment from the subsystem API first
Segment segment = ...;
var result = segment.ToString();
```

### AddCompatibleSnippet
`public bool AddCompatibleSnippet(Segment snippet, float compatibility)`

**Purpose:** **Purpose:** Adds compatible snippet to the current collection or state.

```csharp
// Obtain an instance of Segment from the subsystem API first
Segment segment = ...;
var result = segment.AddCompatibleSnippet(snippet, 0);
```

### PropertyDifferencesAffectCompatibilities
`public override bool PropertyDifferencesAffectCompatibilities(PsaiMusicEntity otherEntity)`

**Purpose:** **Purpose:** Executes the PropertyDifferencesAffectCompatibilities logic.

```csharp
// Obtain an instance of Segment from the subsystem API first
Segment segment = ...;
var result = segment.PropertyDifferencesAffectCompatibilities(otherEntity);
```

### BuildCompatibleSegmentsSet
`public void BuildCompatibleSegmentsSet(PsaiProject project)`

**Purpose:** **Purpose:** Assembles and returns the built result for compatible segments set.

```csharp
// Obtain an instance of Segment from the subsystem API first
Segment segment = ...;
segment.BuildCompatibleSegmentsSet(project);
```

### SetStartMiddleEndPropertiesFromBitfield
`public void SetStartMiddleEndPropertiesFromBitfield(int bitfield)`

**Purpose:** **Purpose:** Assigns a new value to start middle end properties from bitfield and updates the object's internal state.

```csharp
// Obtain an instance of Segment from the subsystem API first
Segment segment = ...;
segment.SetStartMiddleEndPropertiesFromBitfield(0);
```

### CreateSegmentSuitabilityBitfield
`public int CreateSegmentSuitabilityBitfield(PsaiProject parentProject)`

**Purpose:** **Purpose:** Constructs a new segment suitability bitfield entity and returns it to the caller.

```csharp
// Obtain an instance of Segment from the subsystem API first
Segment segment = ...;
var result = segment.CreateSegmentSuitabilityBitfield(parentProject);
```

### CreatePsaiDotNetVersion
`public Segment CreatePsaiDotNetVersion(PsaiProject parentProject)`

**Purpose:** **Purpose:** Constructs a new psai dot net version entity and returns it to the caller.

```csharp
// Obtain an instance of Segment from the subsystem API first
Segment segment = ...;
var result = segment.CreatePsaiDotNetVersion(parentProject);
```

### HasOnlyStartSuitability
`public bool HasOnlyStartSuitability()`

**Purpose:** **Purpose:** Determines whether the this instance already holds only start suitability.

```csharp
// Obtain an instance of Segment from the subsystem API first
Segment segment = ...;
var result = segment.HasOnlyStartSuitability();
```

### HasOnlyMiddleSuitability
`public bool HasOnlyMiddleSuitability()`

**Purpose:** **Purpose:** Determines whether the this instance already holds only middle suitability.

```csharp
// Obtain an instance of Segment from the subsystem API first
Segment segment = ...;
var result = segment.HasOnlyMiddleSuitability();
```

### HasOnlyEndSuitability
`public bool HasOnlyEndSuitability()`

**Purpose:** **Purpose:** Determines whether the this instance already holds only end suitability.

```csharp
// Obtain an instance of Segment from the subsystem API first
Segment segment = ...;
var result = segment.HasOnlyEndSuitability();
```

### ReadOutSegmentSuitabilityFlag
`public static bool ReadOutSegmentSuitabilityFlag(int bitfield, SegmentSuitability suitability)`

**Purpose:** **Purpose:** Reads the data or state of out segment suitability flag.

```csharp
// Static call; no instance required
Segment.ReadOutSegmentSuitabilityFlag(0, suitability);
```

### SetSegmentSuitabilityFlag
`public static void SetSegmentSuitabilityFlag(ref int bitfield, SegmentSuitability snippetType)`

**Purpose:** **Purpose:** Assigns a new value to segment suitability flag and updates the object's internal state.

```csharp
// Static call; no instance required
Segment.SetSegmentSuitabilityFlag(bitfield, snippetType);
```

### ClearSegmentSuitabilityFlag
`public static void ClearSegmentSuitabilityFlag(ref int bitfield, SegmentSuitability snippetType)`

**Purpose:** **Purpose:** Removes all segment suitability flag from the this instance.

```csharp
// Static call; no instance required
Segment.ClearSegmentSuitabilityFlag(bitfield, snippetType);
```

### IsBridgeSnippetToAnyGroup
`public bool IsBridgeSnippetToAnyGroup(PsaiProject project)`

**Purpose:** **Purpose:** Determines whether the this instance is in the bridge snippet to any group state or condition.

```csharp
// Obtain an instance of Segment from the subsystem API first
Segment segment = ...;
var result = segment.IsBridgeSnippetToAnyGroup(project);
```

### IsManualBridgeSnippetForAnyGroup
`public bool IsManualBridgeSnippetForAnyGroup(PsaiProject project)`

**Purpose:** **Purpose:** Determines whether the this instance is in the manual bridge snippet for any group state or condition.

```csharp
// Obtain an instance of Segment from the subsystem API first
Segment segment = ...;
var result = segment.IsManualBridgeSnippetForAnyGroup(project);
```

### IsManualBridgeSegmentForSourceGroup
`public bool IsManualBridgeSegmentForSourceGroup(Group sourceGroup)`

**Purpose:** **Purpose:** Determines whether the this instance is in the manual bridge segment for source group state or condition.

```csharp
// Obtain an instance of Segment from the subsystem API first
Segment segment = ...;
var result = segment.IsManualBridgeSegmentForSourceGroup(sourceGroup);
```

### GetCompatibilitySetting
`public override CompatibilitySetting GetCompatibilitySetting(PsaiMusicEntity targetEntity)`

**Purpose:** **Purpose:** Reads and returns the compatibility setting value held by the this instance.

```csharp
// Obtain an instance of Segment from the subsystem API first
Segment segment = ...;
var result = segment.GetCompatibilitySetting(targetEntity);
```

### GetCompatibilityType
`public override CompatibilityType GetCompatibilityType(PsaiMusicEntity targetEntity, out CompatibilityReason reason)`

**Purpose:** **Purpose:** Reads and returns the compatibility type value held by the this instance.

```csharp
// Obtain an instance of Segment from the subsystem API first
Segment segment = ...;
var result = segment.GetCompatibilityType(targetEntity, reason);
```

### GetParent
`public override PsaiMusicEntity GetParent()`

**Purpose:** **Purpose:** Reads and returns the parent value held by the this instance.

```csharp
// Obtain an instance of Segment from the subsystem API first
Segment segment = ...;
var result = segment.GetParent();
```

### GetIndexPositionWithinParentEntity
`public override int GetIndexPositionWithinParentEntity(PsaiProject parentProject)`

**Purpose:** **Purpose:** Reads and returns the index position within parent entity value held by the this instance.

```csharp
// Obtain an instance of Segment from the subsystem API first
Segment segment = ...;
var result = segment.GetIndexPositionWithinParentEntity(parentProject);
```

### GetExampleSnippet1
`public static Segment GetExampleSnippet1()`

**Purpose:** **Purpose:** Reads and returns the example snippet1 value held by the this instance.

```csharp
// Static call; no instance required
Segment.GetExampleSnippet1();
```

### GetExampleSnippet2
`public static Segment GetExampleSnippet2()`

**Purpose:** **Purpose:** Reads and returns the example snippet2 value held by the this instance.

```csharp
// Static call; no instance required
Segment.GetExampleSnippet2();
```

### GetExampleSnippet3
`public static Segment GetExampleSnippet3()`

**Purpose:** **Purpose:** Reads and returns the example snippet3 value held by the this instance.

```csharp
// Static call; no instance required
Segment.GetExampleSnippet3();
```

### GetExampleSnippet4
`public static Segment GetExampleSnippet4()`

**Purpose:** **Purpose:** Reads and returns the example snippet4 value held by the this instance.

```csharp
// Static call; no instance required
Segment.GetExampleSnippet4();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Segment segment = ...;
segment.GetChildren();
```

## See Also

- [Area Index](../)