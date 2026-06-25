---
title: "UIColors"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `UIColors`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# UIColors

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class UIColors`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/UIColors.cs`

## 概述

`UIColors` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `PositiveIndicator` | `public static Color PositiveIndicator { get; }` |
| `NegativeIndicator` | `public static Color NegativeIndicator { get; }` |
| `Gold` | `public static Color Gold { get; }` |

## 使用示例

```csharp
var value = new UIColors();
```

## 参见

- [完整类目录](../catalog)