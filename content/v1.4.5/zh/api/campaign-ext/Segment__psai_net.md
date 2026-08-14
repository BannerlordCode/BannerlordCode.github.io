---
title: "Segment"
description: "Segment 的自动生成类参考。"
---
# Segment

**Namespace:** psai.net
**Module:** psai.net
**Type:** `public class Segment`
**Base:** 无
**File:** `TaleWorlds.PSAI/net/Segment.cs`

## 概述

`Segment` 位于 `psai.net`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `psai.net` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Id` | `public int Id { get; set; }` |
| `Intensity` | `public float Intensity { get; set; }` |
| `ThemeId` | `public int ThemeId { get; set; }` |
| `Name` | `public string Name { get; }` |
| `Playcount` | `public int Playcount { get; }` |
| `MaxPreBeatMsOfCompatibleSnippetsWithinSameTheme` | `public int MaxPreBeatMsOfCompatibleSnippetsWithinSameTheme { get; }` |
| `Followers` | `public List<Follower> Followers { get; }` |
| `SnippetTypeBitfield` | `public int SnippetTypeBitfield { get; set; }` |

## 主要方法

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 Segment 实例
Segment segment = ...;
var result = segment.ToString();
```

### IsUsableAs
`public bool IsUsableAs(SegmentSuitability snippetType)`

**用途 / Purpose:** 判断当前对象是否处于 usable as 状态或条件。

```csharp
// 先通过子系统 API 拿到 Segment 实例
Segment segment = ...;
var result = segment.IsUsableAs(snippetType);
```

### IsUsableOnlyAs
`public bool IsUsableOnlyAs(SegmentSuitability snippetType)`

**用途 / Purpose:** 判断当前对象是否处于 usable only as 状态或条件。

```csharp
// 先通过子系统 API 拿到 Segment 实例
Segment segment = ...;
var result = segment.IsUsableOnlyAs(snippetType);
```

### ReturnSegmentWithLowestIntensityDifference
`public Segment ReturnSegmentWithLowestIntensityDifference(List<Segment> argSnippets)`

**用途 / Purpose:** 调用 ReturnSegmentWithLowestIntensityDifference 对应的操作。

```csharp
// 先通过子系统 API 拿到 Segment 实例
Segment segment = ...;
var result = segment.ReturnSegmentWithLowestIntensityDifference(argSnippets);
```

### CheckIfAtLeastOneDirectTransitionOrLayeringIsPossible
`public bool CheckIfAtLeastOneDirectTransitionOrLayeringIsPossible(Soundtrack soundtrack, int targetThemeId)`

**用途 / Purpose:** 检查if at least one direct transition or layering is possible在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 Segment 实例
Segment segment = ...;
var result = segment.CheckIfAtLeastOneDirectTransitionOrLayeringIsPossible(soundtrack, 0);
```

### GetStringFromSegmentSuitabilities
`public static string GetStringFromSegmentSuitabilities(int snippetTypeBitfield)`

**用途 / Purpose:** 读取并返回当前对象中 string from segment suitabilities 的结果。

```csharp
// 静态调用，不需要实例
Segment.GetStringFromSegmentSuitabilities(0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
Segment segment = ...;
segment.ToString();
```

## 参见

- [本区域目录](../)