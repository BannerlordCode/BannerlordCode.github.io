---
title: "CharacterCreationStageBaseVM"
description: "CharacterCreationStageBaseVM 的自动生成类参考。"
---
# CharacterCreationStageBaseVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CharacterCreationStageBaseVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation/CharacterCreationStageBaseVM.cs`

## 概述

`CharacterCreationStageBaseVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Title` | `public string Title { get; set; }` |
| `Description` | `public string Description { get; set; }` |
| `SelectionText` | `public string SelectionText { get; set; }` |
| `NextStageText` | `public string NextStageText { get; set; }` |
| `PreviousStageText` | `public string PreviousStageText { get; set; }` |
| `TotalStageCount` | `public int TotalStageCount { get; set; }` |
| `FurthestIndex` | `public int FurthestIndex { get; set; }` |
| `CurrentStageIndex` | `public int CurrentStageIndex { get; set; }` |
| `AnyItemSelected` | `public bool AnyItemSelected { get; set; }` |
| `CanAdvance` | `public bool CanAdvance { get; set; }` |

## 主要方法

### OnNextStage
`public abstract void OnNextStage()`

**用途 / Purpose:** 在 next stage 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CharacterCreationStageBaseVM 实例
CharacterCreationStageBaseVM characterCreationStageBaseVM = ...;
characterCreationStageBaseVM.OnNextStage();
```

### OnPreviousStage
`public abstract void OnPreviousStage()`

**用途 / Purpose:** 在 previous stage 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CharacterCreationStageBaseVM 实例
CharacterCreationStageBaseVM characterCreationStageBaseVM = ...;
characterCreationStageBaseVM.OnPreviousStage();
```

### CanAdvanceToNextStage
`public abstract bool CanAdvanceToNextStage()`

**用途 / Purpose:** 检查当前对象是否满足 advance to next stage 的前置条件。

```csharp
// 先通过子系统 API 拿到 CharacterCreationStageBaseVM 实例
CharacterCreationStageBaseVM characterCreationStageBaseVM = ...;
var result = characterCreationStageBaseVM.CanAdvanceToNextStage();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
CharacterCreationStageBaseVM instance = ...;
```

## 参见

- [本区域目录](../)