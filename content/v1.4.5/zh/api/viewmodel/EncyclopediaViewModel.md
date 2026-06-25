---
title: "EncyclopediaViewModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EncyclopediaViewModel`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# EncyclopediaViewModel

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaViewModel : Attribute`
**Base:** `Attribute`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages/EncyclopediaViewModel.cs`

## 概述

`EncyclopediaViewModel` 是一个 Gauntlet ViewModel——C# 逻辑与 UI 之间的数据绑定桥梁。mod 常通过它暴露状态、命令和列表项给界面。

## 心智模型

把 `EncyclopediaViewModel` 当作一个 ViewModel 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `PageTargetType` | `public Type PageTargetType { get; }` |

## 使用示例

```csharp
var vm = new EncyclopediaViewModel();
movie.SetViewModel(vm);
```

## 参见

- [完整类目录](../catalog)