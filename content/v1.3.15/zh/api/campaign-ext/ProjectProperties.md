---
title: "ProjectProperties"
description: "ProjectProperties 的自动生成类参考。"
---
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

**用途 / Purpose:** 处理与 「shallow copy」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 ProjectProperties 实例
ProjectProperties projectProperties = ...;
var result = projectProperties.ShallowCopy();
```

### Clone
`public object Clone()`

**用途 / Purpose:** 复制当前对象的状态并返回一个新实例。

```csharp
// 先通过子系统 API 拿到 ProjectProperties 实例
ProjectProperties projectProperties = ...;
var result = projectProperties.Clone();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ProjectProperties projectProperties = ...;
projectProperties.ShallowCopy();
```

## 参见

- [本区域目录](../)