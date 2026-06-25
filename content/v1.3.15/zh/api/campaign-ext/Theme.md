---
title: "Theme"
description: "Theme 的自动生成类参考。"
---
# Theme

**Namespace:** psai.Editor
**Module:** psai.Editor
**Type:** `public class Theme : PsaiMusicEntity, ICloneable`
**Base:** `PsaiMusicEntity`
**File:** `TaleWorlds.PSAI/Editor/Theme.cs`

## 概述

`Theme` 位于 `psai.Editor`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `psai.Editor` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

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

## 主要方法

### ConvertPlaycountVsRandomWeightingToBooleanPlaycountPreferred
`public static bool ConvertPlaycountVsRandomWeightingToBooleanPlaycountPreferred(float weightingPlaycountVsRandom)`

**用途 / Purpose:** 把「playcount vs random weighting to boolean playcount preferred」转换为另一种表示或类型。

```csharp
// 静态调用，不需要实例
Theme.ConvertPlaycountVsRandomWeightingToBooleanPlaycountPreferred(0);
```

### GetClassString
`public override string GetClassString()`

**用途 / Purpose:** 读取并返回当前对象中 「class string」 的结果。

```csharp
// 先通过子系统 API 拿到 Theme 实例
Theme theme = ...;
var result = theme.GetClassString();
```

### GetChildren
`public override List<PsaiMusicEntity> GetChildren()`

**用途 / Purpose:** 读取并返回当前对象中 「children」 的结果。

```csharp
// 先通过子系统 API 拿到 Theme 实例
Theme theme = ...;
var result = theme.GetChildren();
```

### GetParent
`public override PsaiMusicEntity GetParent()`

**用途 / Purpose:** 读取并返回当前对象中 「parent」 的结果。

```csharp
// 先通过子系统 API 拿到 Theme 实例
Theme theme = ...;
var result = theme.GetParent();
```

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 Theme 实例
Theme theme = ...;
var result = theme.ToString();
```

### AddGroup
`public bool AddGroup(Group groupToAdd)`

**用途 / Purpose:** 将 「group」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Theme 实例
Theme theme = ...;
var result = theme.AddGroup(groupToAdd);
```

### DeleteGroup
`public void DeleteGroup(Group group)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Theme 实例
Theme theme = ...;
theme.DeleteGroup(group);
```

### GetSegmentsOfAllGroups
`public HashSet<Segment> GetSegmentsOfAllGroups()`

**用途 / Purpose:** 读取并返回当前对象中 「segments of all groups」 的结果。

```csharp
// 先通过子系统 API 拿到 Theme 实例
Theme theme = ...;
var result = theme.GetSegmentsOfAllGroups();
```

### GetAudioDataRelativeFilePathsUsedByThisTheme
`public HashSet<string> GetAudioDataRelativeFilePathsUsedByThisTheme()`

**用途 / Purpose:** 读取并返回当前对象中 「audio data relative file paths used by this theme」 的结果。

```csharp
// 先通过子系统 API 拿到 Theme 实例
Theme theme = ...;
var result = theme.GetAudioDataRelativeFilePathsUsedByThisTheme();
```

### GetCompatibilitySetting
`public override CompatibilitySetting GetCompatibilitySetting(PsaiMusicEntity targetEntity)`

**用途 / Purpose:** 读取并返回当前对象中 「compatibility setting」 的结果。

```csharp
// 先通过子系统 API 拿到 Theme 实例
Theme theme = ...;
var result = theme.GetCompatibilitySetting(targetEntity);
```

### GetCompatibilityType
`public override CompatibilityType GetCompatibilityType(PsaiMusicEntity targetEntity, out CompatibilityReason reason)`

**用途 / Purpose:** 读取并返回当前对象中 「compatibility type」 的结果。

```csharp
// 先通过子系统 API 拿到 Theme 实例
Theme theme = ...;
var result = theme.GetCompatibilityType(targetEntity, reason);
```

### GetIndexPositionWithinParentEntity
`public override int GetIndexPositionWithinParentEntity(PsaiProject parentProject)`

**用途 / Purpose:** 读取并返回当前对象中 「index position within parent entity」 的结果。

```csharp
// 先通过子系统 API 拿到 Theme 实例
Theme theme = ...;
var result = theme.GetIndexPositionWithinParentEntity(parentProject);
```

### PropertyDifferencesAffectCompatibilities
`public override bool PropertyDifferencesAffectCompatibilities(PsaiMusicEntity otherEntity)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Theme 实例
Theme theme = ...;
var result = theme.PropertyDifferencesAffectCompatibilities(otherEntity);
```

### SetAsParentThemeForAllGroupsAndSegments
`public void SetAsParentThemeForAllGroupsAndSegments()`

**用途 / Purpose:** 为 「as parent theme for all groups and segments」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Theme 实例
Theme theme = ...;
theme.SetAsParentThemeForAllGroupsAndSegments();
```

### CreatePsaiDotNetVersion
`public Theme CreatePsaiDotNetVersion()`

**用途 / Purpose:** 构建一个新的 「psai dot net version」 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 Theme 实例
Theme theme = ...;
var result = theme.CreatePsaiDotNetVersion();
```

### getTestTheme1
`public static Theme getTestTheme1()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
Theme.getTestTheme1();
```

### getTestTheme2
`public static Theme getTestTheme2()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
Theme.getTestTheme2();
```

### Clone
`public override object Clone()`

**用途 / Purpose:** 复制当前对象的状态并返回一个新实例。

```csharp
// 先通过子系统 API 拿到 Theme 实例
Theme theme = ...;
var result = theme.Clone();
```

### ShallowCopy
`public override PsaiMusicEntity ShallowCopy()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Theme 实例
Theme theme = ...;
var result = theme.ShallowCopy();
```

## 使用示例

```csharp
Theme.ConvertPlaycountVsRandomWeightingToBooleanPlaycountPreferred(0);
```

## 参见

- [本区域目录](../)