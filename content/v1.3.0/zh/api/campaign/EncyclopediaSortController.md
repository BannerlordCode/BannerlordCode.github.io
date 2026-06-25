---
title: "EncyclopediaSortController"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EncyclopediaSortController`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# EncyclopediaSortController

**Namespace:** TaleWorlds.CampaignSystem.Encyclopedia
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaSortController`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Encyclopedia/EncyclopediaSortController.cs`

## 概述

`EncyclopediaSortController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `EncyclopediaSortController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public TextObject Name { get; }` |
| `Comparer` | `public EncyclopediaListItemComparerBase Comparer { get; }` |

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<EncyclopediaSortController>();
```

## 参见

- [完整类目录](../catalog)