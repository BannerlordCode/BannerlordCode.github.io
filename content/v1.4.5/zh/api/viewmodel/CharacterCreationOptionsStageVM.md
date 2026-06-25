---
title: "CharacterCreationOptionsStageVM"
description: "CharacterCreationOptionsStageVM 的自动生成类参考。"
---
# CharacterCreationOptionsStageVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation.OptionsStage
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterCreationOptionsStageVM : CharacterCreationStageBaseVM`
**Base:** `CharacterCreationStageBaseVM`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation.OptionsStage/CharacterCreationOptionsStageVM.cs`

## 概述

`CharacterCreationOptionsStageVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation.OptionsStage`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation.OptionsStage` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `CameraControlKeys` | `public MBBindingList<InputKeyItemVM> CameraControlKeys { get; set; }` |
| `OptionsController` | `public CampaignOptionsControllerVM OptionsController { get; set; }` |
| `CharacterGamepadControlsEnabled` | `public bool CharacterGamepadControlsEnabled { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 CharacterCreationOptionsStageVM 实例
CharacterCreationOptionsStageVM characterCreationOptionsStageVM = ...;
characterCreationOptionsStageVM.RefreshValues();
```

### CanAdvanceToNextStage
`public override bool CanAdvanceToNextStage()`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 advance to next stage 的前置条件。

```csharp
// 先通过子系统 API 拿到 CharacterCreationOptionsStageVM 实例
CharacterCreationOptionsStageVM characterCreationOptionsStageVM = ...;
var result = characterCreationOptionsStageVM.CanAdvanceToNextStage();
```

### OnNextStage
`public override void OnNextStage()`

**用途 / Purpose:** **用途 / Purpose:** 在 next stage 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CharacterCreationOptionsStageVM 实例
CharacterCreationOptionsStageVM characterCreationOptionsStageVM = ...;
characterCreationOptionsStageVM.OnNextStage();
```

### OnPreviousStage
`public override void OnPreviousStage()`

**用途 / Purpose:** **用途 / Purpose:** 在 previous stage 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CharacterCreationOptionsStageVM 实例
CharacterCreationOptionsStageVM characterCreationOptionsStageVM = ...;
characterCreationOptionsStageVM.OnPreviousStage();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** **用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CharacterCreationOptionsStageVM 实例
CharacterCreationOptionsStageVM characterCreationOptionsStageVM = ...;
characterCreationOptionsStageVM.OnFinalize();
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**用途 / Purpose:** **用途 / Purpose:** 为 cancel input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CharacterCreationOptionsStageVM 实例
CharacterCreationOptionsStageVM characterCreationOptionsStageVM = ...;
characterCreationOptionsStageVM.SetCancelInputKey(hotKey);
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**用途 / Purpose:** **用途 / Purpose:** 为 done input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CharacterCreationOptionsStageVM 实例
CharacterCreationOptionsStageVM characterCreationOptionsStageVM = ...;
characterCreationOptionsStageVM.SetDoneInputKey(hotKey);
```

### AddCameraControlInputKey
`public void AddCameraControlInputKey(HotKey hotKey)`

**用途 / Purpose:** **用途 / Purpose:** 将 camera control input key 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 CharacterCreationOptionsStageVM 实例
CharacterCreationOptionsStageVM characterCreationOptionsStageVM = ...;
characterCreationOptionsStageVM.AddCameraControlInputKey(hotKey);
```

### AddCameraControlInputKey
`public void AddCameraControlInputKey(GameKey gameKey)`

**用途 / Purpose:** **用途 / Purpose:** 将 camera control input key 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 CharacterCreationOptionsStageVM 实例
CharacterCreationOptionsStageVM characterCreationOptionsStageVM = ...;
characterCreationOptionsStageVM.AddCameraControlInputKey(gameKey);
```

### AddCameraControlInputKey
`public void AddCameraControlInputKey(GameAxisKey gameAxisKey, TextObject keyName)`

**用途 / Purpose:** **用途 / Purpose:** 将 camera control input key 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 CharacterCreationOptionsStageVM 实例
CharacterCreationOptionsStageVM characterCreationOptionsStageVM = ...;
characterCreationOptionsStageVM.AddCameraControlInputKey(gameAxisKey, keyName);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CharacterCreationOptionsStageVM characterCreationOptionsStageVM = ...;
characterCreationOptionsStageVM.RefreshValues();
```

## 参见

- [本区域目录](../)