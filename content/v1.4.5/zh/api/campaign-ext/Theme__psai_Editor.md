---
title: "Theme__psai_Editor"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Theme`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Theme

**Namespace:** psai.Editor
**Module:** psai.Editor
**Type:** `public class Theme : PsaiMusicEntity, ICloneable`
**Base:** `PsaiMusicEntity`
**File:** `Bannerlord.Source/bin/TaleWorlds.PSAI/psai.Editor/Theme.cs`

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

**用途 / Purpose:** 处理 `convert playcount vs random weighting to boolean playcount preferred` 相关逻辑。

### GetClassString
`public override string GetClassString()`

**用途 / Purpose:** 获取 `class string` 的当前值。

### GetChildren
`public override List<PsaiMusicEntity> GetChildren()`

**用途 / Purpose:** 获取 `children` 的当前值。

### GetParent
`public override PsaiMusicEntity GetParent()`

**用途 / Purpose:** 获取 `parent` 的当前值。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### AddGroup
`public bool AddGroup(Group groupToAdd)`

**用途 / Purpose:** 向当前集合/状态中添加 `group`。

### DeleteGroup
`public void DeleteGroup(Group group)`

**用途 / Purpose:** 处理 `delete group` 相关逻辑。

### GetSegmentsOfAllGroups
`public HashSet<Segment> GetSegmentsOfAllGroups()`

**用途 / Purpose:** 获取 `segments of all groups` 的当前值。

### GetAudioDataRelativeFilePathsUsedByThisTheme
`public HashSet<string> GetAudioDataRelativeFilePathsUsedByThisTheme()`

**用途 / Purpose:** 获取 `audio data relative file paths used by this theme` 的当前值。

### GetCompatibilitySetting
`public override CompatibilitySetting GetCompatibilitySetting(PsaiMusicEntity targetEntity)`

**用途 / Purpose:** 获取 `compatibility setting` 的当前值。

### GetCompatibilityType
`public override CompatibilityType GetCompatibilityType(PsaiMusicEntity targetEntity, out CompatibilityReason reason)`

**用途 / Purpose:** 获取 `compatibility type` 的当前值。

### GetIndexPositionWithinParentEntity
`public override int GetIndexPositionWithinParentEntity(PsaiProject parentProject)`

**用途 / Purpose:** 获取 `index position within parent entity` 的当前值。

### PropertyDifferencesAffectCompatibilities
`public override bool PropertyDifferencesAffectCompatibilities(PsaiMusicEntity otherEntity)`

**用途 / Purpose:** 处理 `property differences affect compatibilities` 相关逻辑。

### SetAsParentThemeForAllGroupsAndSegments
`public void SetAsParentThemeForAllGroupsAndSegments()`

**用途 / Purpose:** 设置 `as parent theme for all groups and segments` 的值或状态。

### CreatePsaiDotNetVersion
`public psai.net.Theme CreatePsaiDotNetVersion()`

**用途 / Purpose:** 创建一个 `psai dot net version` 实例或对象。

### getTestTheme1
`public static Theme getTestTheme1()`

**用途 / Purpose:** 处理 `get test theme1` 相关逻辑。

### getTestTheme2
`public static Theme getTestTheme2()`

**用途 / Purpose:** 处理 `get test theme2` 相关逻辑。

### Clone
`public override object Clone()`

**用途 / Purpose:** 处理 `clone` 相关逻辑。

### ShallowCopy
`public override PsaiMusicEntity ShallowCopy()`

**用途 / Purpose:** 处理 `shallow copy` 相关逻辑。

## 使用示例

```csharp
Theme.ConvertPlaycountVsRandomWeightingToBooleanPlaycountPreferred(0);
```

## 参见

- [完整类目录](../catalog)