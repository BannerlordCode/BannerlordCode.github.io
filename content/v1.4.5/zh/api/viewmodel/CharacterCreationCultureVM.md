---
title: "CharacterCreationCultureVM"
description: "CharacterCreationCultureVM 的自动生成类参考。"
---
# CharacterCreationCultureVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterCreationCultureVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation/CharacterCreationCultureVM.cs`

## 概述

`CharacterCreationCultureVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Culture` | `public CultureObject Culture { get; set; }` |
| `CultureID` | `public string CultureID { get; set; }` |
| `CultureColor1` | `public Color CultureColor1 { get; set; }` |
| `DescriptionText` | `public string DescriptionText { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `ShortenedNameText` | `public string ShortenedNameText { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `Feats` | `public MBBindingList<CharacterCreationCultureFeatVM> Feats { get; set; }` |

## 主要方法

### ExecuteSelectCulture
`public void ExecuteSelectCulture()`

**用途 / Purpose:** 执行 select culture 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 CharacterCreationCultureVM 实例
CharacterCreationCultureVM characterCreationCultureVM = ...;
characterCreationCultureVM.ExecuteSelectCulture();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CharacterCreationCultureVM characterCreationCultureVM = ...;
characterCreationCultureVM.ExecuteSelectCulture();
```

## 参见

- [本区域目录](../)