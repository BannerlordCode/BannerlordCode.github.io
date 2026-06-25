---
title: "SubtitleItem"
description: "SubtitleItem 的自动生成类参考。"
---
# SubtitleItem

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class SubtitleItem`
**Base:** 无
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/SRTHelper.cs`

## 概述

`SubtitleItem` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `StartTime` | `public int StartTime { get; set; }` |
| `EndTime` | `public int EndTime { get; set; }` |
| `Lines` | `public List<string> Lines { get; set; }` |

## 主要方法

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 SubtitleItem 实例
SubtitleItem subtitleItem = ...;
var result = subtitleItem.ToString();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SubtitleItem subtitleItem = ...;
subtitleItem.ToString();
```

## 参见

- [本区域目录](../)