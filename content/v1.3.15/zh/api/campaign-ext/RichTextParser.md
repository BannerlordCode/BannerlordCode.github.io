---
title: "RichTextParser"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `RichTextParser`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RichTextParser

**命名空间:** TaleWorlds.TwoDimension
**模块:** TaleWorlds.TwoDimension
**类型:** `public class RichTextParser`
**领域:** campaign-ext

## 概述

`RichTextParser` 位于 `TaleWorlds.TwoDimension`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.TwoDimension` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Parse
`public static List<TextToken> Parse(string text)`

**用途 / Purpose:** 处理 `parse` 相关逻辑。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
RichTextParser.Parse("example");
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
