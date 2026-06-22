<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EncyclopediaSortController`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EncyclopediaSortController

**Namespace:** TaleWorlds.CampaignSystem.Encyclopedia
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaSortController`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Encyclopedia/EncyclopediaSortController.cs`

## 概述

`EncyclopediaSortController` 是一个任务控制器，驱动某个任务子系统（部署、高光、援兵等）。经 Mission.Current 或作为任务行为访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public TextObject Name { get; }` |
| `Comparer` | `public EncyclopediaListItemComparerBase Comparer { get; }` |

## 使用示例

```csharp
// EncyclopediaSortController (Controller) 的典型用法
Mission.Current.GetMissionBehavior<EncyclopediaSortController>();
```

## 参见

- [完整类目录](../catalog)