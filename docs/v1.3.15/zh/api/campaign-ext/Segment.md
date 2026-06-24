<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Segment`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Segment

**Namespace:** psai.Editor
**Module:** psai.Editor
**Type:** `public class Segment : PsaiMusicEntity, ICloneable`
**Base:** `PsaiMusicEntity`
**File:** `TaleWorlds.PSAI/Editor/Segment.cs`

## 概述

`Segment` 位于 `psai.Editor`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `psai.Editor` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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
| `Group` | `public Group Group { get; set; }` |
| `ManuallyLinkedSnippets` | `public HashSet<Segment> ManuallyLinkedSnippets { get; set; }` |
| `ManuallyBlockedSnippets` | `public HashSet<Segment> ManuallyBlockedSnippets { get; set; }` |
| `CompatibleSnippetsIds` | `public Dictionary<int, float> CompatibleSnippetsIds { get; }` |

## 主要方法

### GetChildren
`public override List<PsaiMusicEntity> GetChildren()`

**用途 / Purpose:** 获取 `children` 的当前值。

### GetClassString
`public override string GetClassString()`

**用途 / Purpose:** 获取 `class string` 的当前值。

### Clone
`public override object Clone()`

**用途 / Purpose:** 处理 `clone` 相关逻辑。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### AddCompatibleSnippet
`public bool AddCompatibleSnippet(Segment snippet, float compatibility)`

**用途 / Purpose:** 向当前集合/状态中添加 `compatible snippet`。

### PropertyDifferencesAffectCompatibilities
`public override bool PropertyDifferencesAffectCompatibilities(PsaiMusicEntity otherEntity)`

**用途 / Purpose:** 处理 `property differences affect compatibilities` 相关逻辑。

### BuildCompatibleSegmentsSet
`public void BuildCompatibleSegmentsSet(PsaiProject project)`

**用途 / Purpose:** 处理 `build compatible segments set` 相关逻辑。

### SetStartMiddleEndPropertiesFromBitfield
`public void SetStartMiddleEndPropertiesFromBitfield(int bitfield)`

**用途 / Purpose:** 设置 `start middle end properties from bitfield` 的值或状态。

### CreateSegmentSuitabilityBitfield
`public int CreateSegmentSuitabilityBitfield(PsaiProject parentProject)`

**用途 / Purpose:** 创建一个 `segment suitability bitfield` 实例或对象。

### CreatePsaiDotNetVersion
`public Segment CreatePsaiDotNetVersion(PsaiProject parentProject)`

**用途 / Purpose:** 创建一个 `psai dot net version` 实例或对象。

### HasOnlyStartSuitability
`public bool HasOnlyStartSuitability()`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `only start suitability`。

### HasOnlyMiddleSuitability
`public bool HasOnlyMiddleSuitability()`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `only middle suitability`。

### HasOnlyEndSuitability
`public bool HasOnlyEndSuitability()`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `only end suitability`。

### ReadOutSegmentSuitabilityFlag
`public static bool ReadOutSegmentSuitabilityFlag(int bitfield, SegmentSuitability suitability)`

**用途 / Purpose:** 处理 `read out segment suitability flag` 相关逻辑。

### SetSegmentSuitabilityFlag
`public static void SetSegmentSuitabilityFlag(ref int bitfield, SegmentSuitability snippetType)`

**用途 / Purpose:** 设置 `segment suitability flag` 的值或状态。

### ClearSegmentSuitabilityFlag
`public static void ClearSegmentSuitabilityFlag(ref int bitfield, SegmentSuitability snippetType)`

**用途 / Purpose:** 处理 `clear segment suitability flag` 相关逻辑。

### IsBridgeSnippetToAnyGroup
`public bool IsBridgeSnippetToAnyGroup(PsaiProject project)`

**用途 / Purpose:** 处理 `is bridge snippet to any group` 相关逻辑。

### IsManualBridgeSnippetForAnyGroup
`public bool IsManualBridgeSnippetForAnyGroup(PsaiProject project)`

**用途 / Purpose:** 处理 `is manual bridge snippet for any group` 相关逻辑。

### IsManualBridgeSegmentForSourceGroup
`public bool IsManualBridgeSegmentForSourceGroup(Group sourceGroup)`

**用途 / Purpose:** 处理 `is manual bridge segment for source group` 相关逻辑。

### GetCompatibilitySetting
`public override CompatibilitySetting GetCompatibilitySetting(PsaiMusicEntity targetEntity)`

**用途 / Purpose:** 获取 `compatibility setting` 的当前值。

### GetCompatibilityType
`public override CompatibilityType GetCompatibilityType(PsaiMusicEntity targetEntity, out CompatibilityReason reason)`

**用途 / Purpose:** 获取 `compatibility type` 的当前值。

### GetParent
`public override PsaiMusicEntity GetParent()`

**用途 / Purpose:** 获取 `parent` 的当前值。

### GetIndexPositionWithinParentEntity
`public override int GetIndexPositionWithinParentEntity(PsaiProject parentProject)`

**用途 / Purpose:** 获取 `index position within parent entity` 的当前值。

### GetExampleSnippet1
`public static Segment GetExampleSnippet1()`

**用途 / Purpose:** 获取 `example snippet1` 的当前值。

### GetExampleSnippet2
`public static Segment GetExampleSnippet2()`

**用途 / Purpose:** 获取 `example snippet2` 的当前值。

### GetExampleSnippet3
`public static Segment GetExampleSnippet3()`

**用途 / Purpose:** 获取 `example snippet3` 的当前值。

### GetExampleSnippet4
`public static Segment GetExampleSnippet4()`

**用途 / Purpose:** 获取 `example snippet4` 的当前值。

## 使用示例

```csharp
var value = new Segment();
value.GetChildren();
```

## 参见

- [完整类目录](../catalog)