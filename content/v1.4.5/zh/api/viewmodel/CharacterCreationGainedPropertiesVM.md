---
title: "CharacterCreationGainedPropertiesVM"
description: "CharacterCreationGainedPropertiesVM 的自动生成类参考。"
---
# CharacterCreationGainedPropertiesVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterCreationGainedPropertiesVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation/CharacterCreationGainedPropertiesVM.cs`

## 概述

`CharacterCreationGainedPropertiesVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `GainGroups` | `public MBBindingList<CharacterCreationGainGroupItemVM> GainGroups { get; set; }` |
| `GainedTraits` | `public MBBindingList<EncyclopediaTraitItemVM> GainedTraits { get; set; }` |
| `OtherSkills` | `public MBBindingList<CharacterCreationGainedSkillItemVM> OtherSkills { get; set; }` |

## 主要方法

### UpdateValues
`public void UpdateValues()`

**用途 / Purpose:** 重新计算并更新 values 的最新表示。

```csharp
// 先通过子系统 API 拿到 CharacterCreationGainedPropertiesVM 实例
CharacterCreationGainedPropertiesVM characterCreationGainedPropertiesVM = ...;
characterCreationGainedPropertiesVM.UpdateValues();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CharacterCreationGainedPropertiesVM characterCreationGainedPropertiesVM = ...;
characterCreationGainedPropertiesVM.UpdateValues();
```

## 参见

- [本区域目录](../)