---
title: "TextPart"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TextPart`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TextPart

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class TextPart`
**Base:** 无
**File:** `TaleWorlds.TwoDimension/TextPart.cs`

## 概述

`TextPart` 位于 `TaleWorlds.TwoDimension`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.TwoDimension` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `DrawObject2D` | `public TextDrawObject DrawObject2D { get; set; }` |
| `DefaultFont` | `public Font DefaultFont { get; set; }` |
| `WordWidth` | `public float WordWidth { get; set; }` |
| `PartPosition` | `public Vector2 PartPosition { get; set; }` |

## 使用示例

```csharp
var value = new TextPart();
```

## 参见

- [完整类目录](../catalog)