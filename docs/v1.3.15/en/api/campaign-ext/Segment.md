<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Segment`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Gets the current value of `children`.

### GetClassString
`public override string GetClassString()`

**Purpose:** Gets the current value of `class string`.

### Clone
`public override object Clone()`

**Purpose:** Handles logic related to `clone`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### AddCompatibleSnippet
`public bool AddCompatibleSnippet(Segment snippet, float compatibility)`

**Purpose:** Adds `compatible snippet` to the current collection or state.

### PropertyDifferencesAffectCompatibilities
`public override bool PropertyDifferencesAffectCompatibilities(PsaiMusicEntity otherEntity)`

**Purpose:** Handles logic related to `property differences affect compatibilities`.

### BuildCompatibleSegmentsSet
`public void BuildCompatibleSegmentsSet(PsaiProject project)`

**Purpose:** Handles logic related to `build compatible segments set`.

### SetStartMiddleEndPropertiesFromBitfield
`public void SetStartMiddleEndPropertiesFromBitfield(int bitfield)`

**Purpose:** Sets the value or state of `start middle end properties from bitfield`.

### CreateSegmentSuitabilityBitfield
`public int CreateSegmentSuitabilityBitfield(PsaiProject parentProject)`

**Purpose:** Creates a new `segment suitability bitfield` instance or object.

### CreatePsaiDotNetVersion
`public Segment CreatePsaiDotNetVersion(PsaiProject parentProject)`

**Purpose:** Creates a new `psai dot net version` instance or object.

### HasOnlyStartSuitability
`public bool HasOnlyStartSuitability()`

**Purpose:** Checks whether the current object has/contains `only start suitability`.

### HasOnlyMiddleSuitability
`public bool HasOnlyMiddleSuitability()`

**Purpose:** Checks whether the current object has/contains `only middle suitability`.

### HasOnlyEndSuitability
`public bool HasOnlyEndSuitability()`

**Purpose:** Checks whether the current object has/contains `only end suitability`.

### ReadOutSegmentSuitabilityFlag
`public static bool ReadOutSegmentSuitabilityFlag(int bitfield, SegmentSuitability suitability)`

**Purpose:** Handles logic related to `read out segment suitability flag`.

### SetSegmentSuitabilityFlag
`public static void SetSegmentSuitabilityFlag(ref int bitfield, SegmentSuitability snippetType)`

**Purpose:** Sets the value or state of `segment suitability flag`.

### ClearSegmentSuitabilityFlag
`public static void ClearSegmentSuitabilityFlag(ref int bitfield, SegmentSuitability snippetType)`

**Purpose:** Handles logic related to `clear segment suitability flag`.

### IsBridgeSnippetToAnyGroup
`public bool IsBridgeSnippetToAnyGroup(PsaiProject project)`

**Purpose:** Handles logic related to `is bridge snippet to any group`.

### IsManualBridgeSnippetForAnyGroup
`public bool IsManualBridgeSnippetForAnyGroup(PsaiProject project)`

**Purpose:** Handles logic related to `is manual bridge snippet for any group`.

### IsManualBridgeSegmentForSourceGroup
`public bool IsManualBridgeSegmentForSourceGroup(Group sourceGroup)`

**Purpose:** Handles logic related to `is manual bridge segment for source group`.

### GetCompatibilitySetting
`public override CompatibilitySetting GetCompatibilitySetting(PsaiMusicEntity targetEntity)`

**Purpose:** Gets the current value of `compatibility setting`.

### GetCompatibilityType
`public override CompatibilityType GetCompatibilityType(PsaiMusicEntity targetEntity, out CompatibilityReason reason)`

**Purpose:** Gets the current value of `compatibility type`.

### GetParent
`public override PsaiMusicEntity GetParent()`

**Purpose:** Gets the current value of `parent`.

### GetIndexPositionWithinParentEntity
`public override int GetIndexPositionWithinParentEntity(PsaiProject parentProject)`

**Purpose:** Gets the current value of `index position within parent entity`.

### GetExampleSnippet1
`public static Segment GetExampleSnippet1()`

**Purpose:** Gets the current value of `example snippet1`.

### GetExampleSnippet2
`public static Segment GetExampleSnippet2()`

**Purpose:** Gets the current value of `example snippet2`.

### GetExampleSnippet3
`public static Segment GetExampleSnippet3()`

**Purpose:** Gets the current value of `example snippet3`.

### GetExampleSnippet4
`public static Segment GetExampleSnippet4()`

**Purpose:** Gets the current value of `example snippet4`.

## Usage Example

```csharp
var value = new Segment();
value.GetChildren();
```

## See Also

- [Complete Class Catalog](../catalog)