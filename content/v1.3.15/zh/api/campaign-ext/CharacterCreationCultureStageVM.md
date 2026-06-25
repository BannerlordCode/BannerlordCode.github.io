---
title: "CharacterCreationCultureStageVM"
description: "CharacterCreationCultureStageVM 的自动生成类参考。"
---
# CharacterCreationCultureStageVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterCreationCultureStageVM : CharacterCreationStageBaseVM`
**Base:** `CharacterCreationStageBaseVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationCultureStageVM.cs`

## 概述

`CharacterCreationCultureStageVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `Cultures` | `public MBBindingList<CharacterCreationCultureVM> Cultures { get; set; }` |
| `CurrentSelectedCulture` | `public CharacterCreationCultureVM CurrentSelectedCulture { get; set; }` |

## 主要方法

### OnCultureSelection
`public void OnCultureSelection(CharacterCreationCultureVM selectedCulture)`

**用途 / Purpose:** **用途 / Purpose:** 在 culture selection 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CharacterCreationCultureStageVM 实例
CharacterCreationCultureStageVM characterCreationCultureStageVM = ...;
characterCreationCultureStageVM.OnCultureSelection(selectedCulture);
```

### OnNextStage
`public override void OnNextStage()`

**用途 / Purpose:** **用途 / Purpose:** 在 next stage 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CharacterCreationCultureStageVM 实例
CharacterCreationCultureStageVM characterCreationCultureStageVM = ...;
characterCreationCultureStageVM.OnNextStage();
```

### OnPreviousStage
`public override void OnPreviousStage()`

**用途 / Purpose:** **用途 / Purpose:** 在 previous stage 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CharacterCreationCultureStageVM 实例
CharacterCreationCultureStageVM characterCreationCultureStageVM = ...;
characterCreationCultureStageVM.OnPreviousStage();
```

### CanAdvanceToNextStage
`public override bool CanAdvanceToNextStage()`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 advance to next stage 的前置条件。

```csharp
// 先通过子系统 API 拿到 CharacterCreationCultureStageVM 实例
CharacterCreationCultureStageVM characterCreationCultureStageVM = ...;
var result = characterCreationCultureStageVM.CanAdvanceToNextStage();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** **用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CharacterCreationCultureStageVM 实例
CharacterCreationCultureStageVM characterCreationCultureStageVM = ...;
characterCreationCultureStageVM.OnFinalize();
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**用途 / Purpose:** **用途 / Purpose:** 为 cancel input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CharacterCreationCultureStageVM 实例
CharacterCreationCultureStageVM characterCreationCultureStageVM = ...;
characterCreationCultureStageVM.SetCancelInputKey(hotKey);
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**用途 / Purpose:** **用途 / Purpose:** 为 done input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CharacterCreationCultureStageVM 实例
CharacterCreationCultureStageVM characterCreationCultureStageVM = ...;
characterCreationCultureStageVM.SetDoneInputKey(hotKey);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CharacterCreationCultureStageVM characterCreationCultureStageVM = ...;
characterCreationCultureStageVM.OnCultureSelection(selectedCulture);
```

## 参见

- [本区域目录](../)