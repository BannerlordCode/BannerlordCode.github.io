---
title: "EducationGainedAttributeItemVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EducationGainedAttributeItemVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EducationGainedAttributeItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Education
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EducationGainedAttributeItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Education/EducationGainedAttributeItemVM.cs`

## 概述

`EducationGainedAttributeItemVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Education`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Education` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Hint` | `public BasicTooltipViewModel Hint { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `HasIncreasedInCurrentStage` | `public bool HasIncreasedInCurrentStage { get; set; }` |

## 主要方法

### SetValue
`public void SetValue(int gainedFromOtherStages, int gainedFromCurrentStage)`

**用途 / Purpose:** 设置 `value` 的值或状态。

## 使用示例

```csharp
var value = new EducationGainedAttributeItemVM();
value.SetValue(0, 0);
```

## 参见

- [完整类目录](../catalog)