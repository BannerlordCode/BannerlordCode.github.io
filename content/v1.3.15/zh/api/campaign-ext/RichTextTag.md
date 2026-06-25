---
title: "RichTextTag"
description: "RichTextTag 的自动生成类参考。"
---
# RichTextTag

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class RichTextTag`
**Base:** 无
**File:** `TaleWorlds.TwoDimension/RichTextTag.cs`

## 概述

`RichTextTag` 位于 `TaleWorlds.TwoDimension`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.TwoDimension` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; }` |
| `Type` | `public RichTextTagType Type { get; set; }` |

## 主要方法

### AddAtrribute
`public void AddAtrribute(string key, string value)`

**用途 / Purpose:** 将 「atrribute」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 RichTextTag 实例
RichTextTag richTextTag = ...;
richTextTag.AddAtrribute("example", "example");
```

### GetAttribute
`public string GetAttribute(string key)`

**用途 / Purpose:** 读取并返回当前对象中 「attribute」 的结果。

```csharp
// 先通过子系统 API 拿到 RichTextTag 实例
RichTextTag richTextTag = ...;
var result = richTextTag.GetAttribute("example");
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
RichTextTag richTextTag = ...;
richTextTag.AddAtrribute("example", "example");
```

## 参见

- [本区域目录](../)