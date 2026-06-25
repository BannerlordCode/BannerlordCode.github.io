---
title: "ProjectProperties"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ProjectProperties`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ProjectProperties

**Namespace:** psai.Editor
**Module:** psai.Editor
**Type:** `public class ProjectProperties : ICloneable`
**Base:** `ICloneable`
**File:** `TaleWorlds.PSAI/Editor/ProjectProperties.cs`

## 概述

`ProjectProperties` 位于 `psai.Editor`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `psai.Editor` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `WarningThresholdPreBeatMillis` | `public int WarningThresholdPreBeatMillis { get; set; }` |
| `DefaultCalculatePostAndPrebeatLengthBasedOnBeats` | `public bool DefaultCalculatePostAndPrebeatLengthBasedOnBeats { get; set; }` |
| `DefaultSegmentSuitabilites` | `public int DefaultSegmentSuitabilites { get; set; }` |
| `ForceFullRebuild` | `public bool ForceFullRebuild { get; set; }` |
| `ModuleIdPrefix` | `public string ModuleIdPrefix { get; set; }` |
| `VolumeBoost` | `public float VolumeBoost { get; set; }` |
| `ExportSoundQualityInPercent` | `public int ExportSoundQualityInPercent { get; set; }` |
| `DefaultPrebeats` | `public float DefaultPrebeats { get; set; }` |
| `DefaultPostbeats` | `public float DefaultPostbeats { get; set; }` |
| `DefaultBpm` | `public float DefaultBpm { get; set; }` |
| `DefaultPrebeatLengthInSamples` | `public int DefaultPrebeatLengthInSamples { get; set; }` |
| `DefaultPostbeatLengthInSamples` | `public int DefaultPostbeatLengthInSamples { get; set; }` |

## 主要方法

### ShallowCopy
`public ProjectProperties ShallowCopy()`

**用途 / Purpose:** 处理 `shallow copy` 相关逻辑。

### Clone
`public object Clone()`

**用途 / Purpose:** 处理 `clone` 相关逻辑。

## 使用示例

```csharp
var value = new ProjectProperties();
value.ShallowCopy();
```

## 参见

- [完整类目录](../catalog)