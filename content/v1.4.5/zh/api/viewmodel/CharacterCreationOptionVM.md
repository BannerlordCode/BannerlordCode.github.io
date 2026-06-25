---
title: "CharacterCreationOptionVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CharacterCreationOptionVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CharacterCreationOptionVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterCreationOptionVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation/CharacterCreationOptionVM.cs`

## 概述

`CharacterCreationOptionVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `ActionText` | `public string ActionText { get; set; }` |
| `PositiveEffectText` | `public string PositiveEffectText { get; set; }` |
| `NegativeEffectText` | `public string NegativeEffectText { get; set; }` |
| `DescriptionText` | `public string DescriptionText { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### ExecuteSelect
`public void ExecuteSelect()`

**用途 / Purpose:** 执行 `select` 操作或流程。

## 使用示例

```csharp
var value = new CharacterCreationOptionVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)