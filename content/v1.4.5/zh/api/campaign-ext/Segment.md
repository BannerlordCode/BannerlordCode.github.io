---
title: "Segment"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Segment`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Segment

**Namespace:** psai.net
**Module:** psai.net
**Type:** `public class Segment`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.PSAI/psai.net/Segment.cs`

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

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### IsUsableAs
`public bool IsUsableAs(SegmentSuitability snippetType)`

**用途 / Purpose:** 处理 `is usable as` 相关逻辑。

### IsUsableOnlyAs
`public bool IsUsableOnlyAs(SegmentSuitability snippetType)`

**用途 / Purpose:** 处理 `is usable only as` 相关逻辑。

### ReturnSegmentWithLowestIntensityDifference
`public Segment ReturnSegmentWithLowestIntensityDifference(List<Segment> argSnippets)`

**用途 / Purpose:** 处理 `return segment with lowest intensity difference` 相关逻辑。

### CheckIfAtLeastOneDirectTransitionOrLayeringIsPossible
`public bool CheckIfAtLeastOneDirectTransitionOrLayeringIsPossible(Soundtrack soundtrack, int targetThemeId)`

**用途 / Purpose:** 处理 `check if at least one direct transition or layering is possible` 相关逻辑。

### GetStringFromSegmentSuitabilities
`public static string GetStringFromSegmentSuitabilities(int snippetTypeBitfield)`

**用途 / Purpose:** 获取 `string from segment suitabilities` 的当前值。

## 使用示例

```csharp
var value = new Segment();
value.ToString();
```

## 参见

- [完整类目录](../catalog)