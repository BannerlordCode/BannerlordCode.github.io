<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Theme`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Theme

**命名空间:** psai.Editor
**模块:** psai.Editor
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`Theme` 是 `psai.Editor` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
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

```csharp
public static bool ConvertPlaycountVsRandomWeightingToBooleanPlaycountPreferred(float weightingPlaycountVsRandom)
```

### GetClassString

```csharp
public override string GetClassString()
```

### GetChildren

```csharp
public override List<PsaiMusicEntity> GetChildren()
```

### GetParent

```csharp
public override PsaiMusicEntity GetParent()
```

### ToString

```csharp
public override string ToString()
```

### AddGroup

```csharp
public bool AddGroup(Group groupToAdd)
```

### DeleteGroup

```csharp
public void DeleteGroup(Group group)
```

### GetSegmentsOfAllGroups

```csharp
public HashSet<Segment> GetSegmentsOfAllGroups()
```

### GetAudioDataRelativeFilePathsUsedByThisTheme

```csharp
public HashSet<string> GetAudioDataRelativeFilePathsUsedByThisTheme()
```

### GetCompatibilitySetting

```csharp
public override CompatibilitySetting GetCompatibilitySetting(PsaiMusicEntity targetEntity)
```

### GetCompatibilityType

```csharp
public override CompatibilityType GetCompatibilityType(PsaiMusicEntity targetEntity, out CompatibilityReason reason)
```

### GetIndexPositionWithinParentEntity

```csharp
public override int GetIndexPositionWithinParentEntity(PsaiProject parentProject)
```

### PropertyDifferencesAffectCompatibilities

```csharp
public override bool PropertyDifferencesAffectCompatibilities(PsaiMusicEntity otherEntity)
```

### SetAsParentThemeForAllGroupsAndSegments

```csharp
public void SetAsParentThemeForAllGroupsAndSegments()
```

### CreatePsaiDotNetVersion

```csharp
public Theme CreatePsaiDotNetVersion()
```

### getTestTheme1

```csharp
public static Theme getTestTheme1()
```

### getTestTheme2

```csharp
public static Theme getTestTheme2()
```

### Clone

```csharp
public override object Clone()
```

### ShallowCopy

```csharp
public override PsaiMusicEntity ShallowCopy()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)