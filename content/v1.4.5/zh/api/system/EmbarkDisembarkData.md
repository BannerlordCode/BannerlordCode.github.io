---
title: "EmbarkDisembarkData"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EmbarkDisembarkData`
- [← 本领域 / 返回 system](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# EmbarkDisembarkData

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public class EmbarkDisembarkData`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/Helpers/NavigationHelper.cs`

## 概述

`EmbarkDisembarkData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `EmbarkDisembarkData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
var value = new EmbarkDisembarkData();
```

## 参见

- [完整类目录](../catalog)