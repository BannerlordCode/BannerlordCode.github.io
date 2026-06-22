<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Segment`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Segment

**命名空间:** psai.Editor
**模块:** psai.Editor
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`Segment` 是 `psai.Editor` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

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


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)