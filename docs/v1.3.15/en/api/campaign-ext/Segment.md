<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Segment`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Segment

**Namespace:** psai.Editor
**Module:** psai.Editor
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `Segment` is a class in the `psai.Editor` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


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


## Key Methods

### GetChildren

```csharp
public override List<PsaiMusicEntity> GetChildren()
```

### GetClassString

```csharp
public override string GetClassString()
```

### Clone

```csharp
public override object Clone()
```

### ToString

```csharp
public override string ToString()
```

### AddCompatibleSnippet

```csharp
public bool AddCompatibleSnippet(Segment snippet, float compatibility)
```

### PropertyDifferencesAffectCompatibilities

```csharp
public override bool PropertyDifferencesAffectCompatibilities(PsaiMusicEntity otherEntity)
```

### BuildCompatibleSegmentsSet

```csharp
public void BuildCompatibleSegmentsSet(PsaiProject project)
```

### SetStartMiddleEndPropertiesFromBitfield

```csharp
public void SetStartMiddleEndPropertiesFromBitfield(int bitfield)
```

### CreateSegmentSuitabilityBitfield

```csharp
public int CreateSegmentSuitabilityBitfield(PsaiProject parentProject)
```

### CreatePsaiDotNetVersion

```csharp
public Segment CreatePsaiDotNetVersion(PsaiProject parentProject)
```

### HasOnlyStartSuitability

```csharp
public bool HasOnlyStartSuitability()
```

### HasOnlyMiddleSuitability

```csharp
public bool HasOnlyMiddleSuitability()
```

### HasOnlyEndSuitability

```csharp
public bool HasOnlyEndSuitability()
```

### ReadOutSegmentSuitabilityFlag

```csharp
public static bool ReadOutSegmentSuitabilityFlag(int bitfield, SegmentSuitability suitability)
```

### SetSegmentSuitabilityFlag

```csharp
public static void SetSegmentSuitabilityFlag(ref int bitfield, SegmentSuitability snippetType)
```

### ClearSegmentSuitabilityFlag

```csharp
public static void ClearSegmentSuitabilityFlag(ref int bitfield, SegmentSuitability snippetType)
```

### IsBridgeSnippetToAnyGroup

```csharp
public bool IsBridgeSnippetToAnyGroup(PsaiProject project)
```

### IsManualBridgeSnippetForAnyGroup

```csharp
public bool IsManualBridgeSnippetForAnyGroup(PsaiProject project)
```

### IsManualBridgeSegmentForSourceGroup

```csharp
public bool IsManualBridgeSegmentForSourceGroup(Group sourceGroup)
```

### GetCompatibilitySetting

```csharp
public override CompatibilitySetting GetCompatibilitySetting(PsaiMusicEntity targetEntity)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)