---
title: "Segment"
description: "Segment 的自动生成类参考。"
---
# Segment

**Namespace:** psai.Editor
**Module:** psai.Editor
**Type:** `public class Segment : PsaiMusicEntity, ICloneable`
**Base:** `PsaiMusicEntity`
**File:** `bin/TaleWorlds.PSAI/psai.Editor/Segment.cs`

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
| `BitsPerSample` | `public int BitsPerSample { get; set; }` |
| `ThemeId` | `public int ThemeId { get; set; }` |
| `Serialization_ManuallyBlockedSegmentIds` | `public List<int> Serialization_ManuallyBlockedSegmentIds { get; set; }` |
| `Serialization_ManuallyLinkedSegmentIds` | `public List<int> Serialization_ManuallyLinkedSegmentIds { get; set; }` |
| `DefaultCompatibiltyAsFollower` | `public CompatibilityType DefaultCompatibiltyAsFollower { get; set; }` |
| `Group` | `public Group Group { get; set; }` |
| `ManuallyLinkedSnippets` | `public HashSet<Segment> ManuallyLinkedSnippets { get; set; }` |
| `ManuallyBlockedSnippets` | `public HashSet<Segment> ManuallyBlockedSnippets { get; set; }` |

## 主要方法

### GetChildren
`public override List<PsaiMusicEntity> GetChildren()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 children 的结果。

```csharp
// 先通过子系统 API 拿到 Segment 实例
Segment segment = ...;
var result = segment.GetChildren();
```

### GetClassString
`public override string GetClassString()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 class string 的结果。

```csharp
// 先通过子系统 API 拿到 Segment 实例
Segment segment = ...;
var result = segment.GetClassString();
```

### Clone
`public override object Clone()`

**用途 / Purpose:** **用途 / Purpose:** 复制当前对象的状态并返回一个新实例。

```csharp
// 先通过子系统 API 拿到 Segment 实例
Segment segment = ...;
var result = segment.Clone();
```

### ToString
`public override string ToString()`

**用途 / Purpose:** **用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 Segment 实例
Segment segment = ...;
var result = segment.ToString();
```

### AddCompatibleSnippet
`public bool AddCompatibleSnippet(Segment snippet, float compatibility)`

**用途 / Purpose:** **用途 / Purpose:** 将 compatible snippet 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Segment 实例
Segment segment = ...;
var result = segment.AddCompatibleSnippet(snippet, 0);
```

### PropertyDifferencesAffectCompatibilities
`public override bool PropertyDifferencesAffectCompatibilities(PsaiMusicEntity otherEntity)`

**用途 / Purpose:** **用途 / Purpose:** 调用 PropertyDifferencesAffectCompatibilities 对应的操作。

```csharp
// 先通过子系统 API 拿到 Segment 实例
Segment segment = ...;
var result = segment.PropertyDifferencesAffectCompatibilities(otherEntity);
```

### BuildCompatibleSegmentsSet
`public void BuildCompatibleSegmentsSet(PsaiProject project)`

**用途 / Purpose:** **用途 / Purpose:** 组装并返回compatible segments set的构建结果。

```csharp
// 先通过子系统 API 拿到 Segment 实例
Segment segment = ...;
segment.BuildCompatibleSegmentsSet(project);
```

### SetStartMiddleEndPropertiesFromBitfield
`public void SetStartMiddleEndPropertiesFromBitfield(int bitfield)`

**用途 / Purpose:** **用途 / Purpose:** 为 start middle end properties from bitfield 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Segment 实例
Segment segment = ...;
segment.SetStartMiddleEndPropertiesFromBitfield(0);
```

### CreateSegmentSuitabilityBitfield
`public int CreateSegmentSuitabilityBitfield(PsaiProject parentProject)`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 segment suitability bitfield 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 Segment 实例
Segment segment = ...;
var result = segment.CreateSegmentSuitabilityBitfield(parentProject);
```

### CreatePsaiDotNetVersion
`public psai.net.Segment CreatePsaiDotNetVersion(PsaiProject parentProject)`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 psai dot net version 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 Segment 实例
Segment segment = ...;
var result = segment.CreatePsaiDotNetVersion(parentProject);
```

### HasOnlyStartSuitability
`public bool HasOnlyStartSuitability()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否已经持有 only start suitability。

```csharp
// 先通过子系统 API 拿到 Segment 实例
Segment segment = ...;
var result = segment.HasOnlyStartSuitability();
```

### HasOnlyMiddleSuitability
`public bool HasOnlyMiddleSuitability()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否已经持有 only middle suitability。

```csharp
// 先通过子系统 API 拿到 Segment 实例
Segment segment = ...;
var result = segment.HasOnlyMiddleSuitability();
```

### HasOnlyEndSuitability
`public bool HasOnlyEndSuitability()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否已经持有 only end suitability。

```csharp
// 先通过子系统 API 拿到 Segment 实例
Segment segment = ...;
var result = segment.HasOnlyEndSuitability();
```

### ReadOutSegmentSuitabilityFlag
`public static bool ReadOutSegmentSuitabilityFlag(int bitfield, SegmentSuitability suitability)`

**用途 / Purpose:** **用途 / Purpose:** 读取out segment suitability flag的数据或状态。

```csharp
// 静态调用，不需要实例
Segment.ReadOutSegmentSuitabilityFlag(0, suitability);
```

### SetSegmentSuitabilityFlag
`public static void SetSegmentSuitabilityFlag(ref int bitfield, SegmentSuitability snippetType)`

**用途 / Purpose:** **用途 / Purpose:** 为 segment suitability flag 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
Segment.SetSegmentSuitabilityFlag(bitfield, snippetType);
```

### ClearSegmentSuitabilityFlag
`public static void ClearSegmentSuitabilityFlag(ref int bitfield, SegmentSuitability snippetType)`

**用途 / Purpose:** **用途 / Purpose:** 清空当前对象中的segment suitability flag。

```csharp
// 静态调用，不需要实例
Segment.ClearSegmentSuitabilityFlag(bitfield, snippetType);
```

### IsBridgeSnippetToAnyGroup
`public bool IsBridgeSnippetToAnyGroup(PsaiProject project)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 bridge snippet to any group 状态或条件。

```csharp
// 先通过子系统 API 拿到 Segment 实例
Segment segment = ...;
var result = segment.IsBridgeSnippetToAnyGroup(project);
```

### IsManualBridgeSnippetForAnyGroup
`public bool IsManualBridgeSnippetForAnyGroup(PsaiProject project)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 manual bridge snippet for any group 状态或条件。

```csharp
// 先通过子系统 API 拿到 Segment 实例
Segment segment = ...;
var result = segment.IsManualBridgeSnippetForAnyGroup(project);
```

### IsManualBridgeSegmentForSourceGroup
`public bool IsManualBridgeSegmentForSourceGroup(Group sourceGroup)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 manual bridge segment for source group 状态或条件。

```csharp
// 先通过子系统 API 拿到 Segment 实例
Segment segment = ...;
var result = segment.IsManualBridgeSegmentForSourceGroup(sourceGroup);
```

### GetCompatibilitySetting
`public override CompatibilitySetting GetCompatibilitySetting(PsaiMusicEntity targetEntity)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 compatibility setting 的结果。

```csharp
// 先通过子系统 API 拿到 Segment 实例
Segment segment = ...;
var result = segment.GetCompatibilitySetting(targetEntity);
```

### GetCompatibilityType
`public override CompatibilityType GetCompatibilityType(PsaiMusicEntity targetEntity, out CompatibilityReason reason)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 compatibility type 的结果。

```csharp
// 先通过子系统 API 拿到 Segment 实例
Segment segment = ...;
var result = segment.GetCompatibilityType(targetEntity, reason);
```

### GetParent
`public override PsaiMusicEntity GetParent()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 parent 的结果。

```csharp
// 先通过子系统 API 拿到 Segment 实例
Segment segment = ...;
var result = segment.GetParent();
```

### GetIndexPositionWithinParentEntity
`public override int GetIndexPositionWithinParentEntity(PsaiProject parentProject)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 index position within parent entity 的结果。

```csharp
// 先通过子系统 API 拿到 Segment 实例
Segment segment = ...;
var result = segment.GetIndexPositionWithinParentEntity(parentProject);
```

### GetExampleSnippet1
`public static Segment GetExampleSnippet1()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 example snippet1 的结果。

```csharp
// 静态调用，不需要实例
Segment.GetExampleSnippet1();
```

### GetExampleSnippet2
`public static Segment GetExampleSnippet2()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 example snippet2 的结果。

```csharp
// 静态调用，不需要实例
Segment.GetExampleSnippet2();
```

### GetExampleSnippet3
`public static Segment GetExampleSnippet3()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 example snippet3 的结果。

```csharp
// 静态调用，不需要实例
Segment.GetExampleSnippet3();
```

### GetExampleSnippet4
`public static Segment GetExampleSnippet4()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 example snippet4 的结果。

```csharp
// 静态调用，不需要实例
Segment.GetExampleSnippet4();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
Segment segment = ...;
segment.GetChildren();
```

## 参见

- [本区域目录](../)