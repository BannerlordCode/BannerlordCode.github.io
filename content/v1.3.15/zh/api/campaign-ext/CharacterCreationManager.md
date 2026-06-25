---
title: "CharacterCreationManager"
description: "CharacterCreationManager 的自动生成类参考。"
---
# CharacterCreationManager

**Namespace:** TaleWorlds.CampaignSystem.CharacterCreationContent
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterCreationManager`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/CharacterCreationContent/CharacterCreationManager.cs`

## 概述

`CharacterCreationManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `CharacterCreationManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `NarrativeMenus` | `public MBReadOnlyList<NarrativeMenu> NarrativeMenus { get; }` |
| `CharacterCreationContent` | `public CharacterCreationContent CharacterCreationContent { get; }` |
| `CurrentMenu` | `public NarrativeMenu CurrentMenu { get; }` |
| `CharacterCreationMenuCount` | `public int CharacterCreationMenuCount { get; }` |
| `CurrentStage` | `public CharacterCreationStageBase CurrentStage { get; }` |

## 主要方法

### RegisterCharacterCreationContentHandler
`public void RegisterCharacterCreationContentHandler(ICharacterCreationContentHandler characterCreationContentHandler, int priority)`

**用途 / Purpose:** **用途 / Purpose:** 将character creation content handler注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 CharacterCreationManager 实例
CharacterCreationManager characterCreationManager = ...;
characterCreationManager.RegisterCharacterCreationContentHandler(characterCreationContentHandler, 0);
```

### AddStage
`public void AddStage(CharacterCreationStageBase stage)`

**用途 / Purpose:** **用途 / Purpose:** 将 stage 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 CharacterCreationManager 实例
CharacterCreationManager characterCreationManager = ...;
characterCreationManager.AddStage(stage);
```

### NextStage
`public void NextStage()`

**用途 / Purpose:** **用途 / Purpose:** 调用 NextStage 对应的操作。

```csharp
// 先通过子系统 API 拿到 CharacterCreationManager 实例
CharacterCreationManager characterCreationManager = ...;
characterCreationManager.NextStage();
```

### PreviousStage
`public void PreviousStage()`

**用途 / Purpose:** **用途 / Purpose:** 调用 PreviousStage 对应的操作。

```csharp
// 先通过子系统 API 拿到 CharacterCreationManager 实例
CharacterCreationManager characterCreationManager = ...;
characterCreationManager.PreviousStage();
```

### GoToStage
`public void GoToStage(int stageIndex)`

**用途 / Purpose:** **用途 / Purpose:** 调用 GoToStage 对应的操作。

```csharp
// 先通过子系统 API 拿到 CharacterCreationManager 实例
CharacterCreationManager characterCreationManager = ...;
characterCreationManager.GoToStage(0);
```

### GetIndexOfCurrentStage
`public int GetIndexOfCurrentStage()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 index of current stage 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterCreationManager 实例
CharacterCreationManager characterCreationManager = ...;
var result = characterCreationManager.GetIndexOfCurrentStage();
```

### GetTotalStagesCount
`public int GetTotalStagesCount()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 total stages count 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterCreationManager 实例
CharacterCreationManager characterCreationManager = ...;
var result = characterCreationManager.GetTotalStagesCount();
```

### GetFurthestIndex
`public int GetFurthestIndex()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 furthest index 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterCreationManager 实例
CharacterCreationManager characterCreationManager = ...;
var result = characterCreationManager.GetFurthestIndex();
```

### AddNewMenu
`public void AddNewMenu(NarrativeMenu menu)`

**用途 / Purpose:** **用途 / Purpose:** 将 new menu 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 CharacterCreationManager 实例
CharacterCreationManager characterCreationManager = ...;
characterCreationManager.AddNewMenu(menu);
```

### GetCurrentMenu
`public NarrativeMenu GetCurrentMenu(int index)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 current menu 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterCreationManager 实例
CharacterCreationManager characterCreationManager = ...;
var result = characterCreationManager.GetCurrentMenu(0);
```

### GetCurrentMenuOptions
`public IEnumerable<NarrativeMenuOption> GetCurrentMenuOptions(int index)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 current menu options 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterCreationManager 实例
CharacterCreationManager characterCreationManager = ...;
var result = characterCreationManager.GetCurrentMenuOptions(0);
```

### GetNarrativeMenuWithId
`public NarrativeMenu GetNarrativeMenuWithId(string stringId)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 narrative menu with id 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterCreationManager 实例
CharacterCreationManager characterCreationManager = ...;
var result = characterCreationManager.GetNarrativeMenuWithId("example");
```

### DeleteNarrativeMenuWithId
`public void DeleteNarrativeMenuWithId(string stringId)`

**用途 / Purpose:** **用途 / Purpose:** 调用 DeleteNarrativeMenuWithId 对应的操作。

```csharp
// 先通过子系统 API 拿到 CharacterCreationManager 实例
CharacterCreationManager characterCreationManager = ...;
characterCreationManager.DeleteNarrativeMenuWithId("example");
```

### ResetNarrativeMenus
`public void ResetNarrativeMenus()`

**用途 / Purpose:** **用途 / Purpose:** 将 narrative menus 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 CharacterCreationManager 实例
CharacterCreationManager characterCreationManager = ...;
characterCreationManager.ResetNarrativeMenus();
```

### ResetMenuOptions
`public void ResetMenuOptions()`

**用途 / Purpose:** **用途 / Purpose:** 将 menu options 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 CharacterCreationManager 实例
CharacterCreationManager characterCreationManager = ...;
characterCreationManager.ResetMenuOptions();
```

### StartNarrativeStage
`public void StartNarrativeStage()`

**用途 / Purpose:** **用途 / Purpose:** 启动narrative stage流程或状态机。

```csharp
// 先通过子系统 API 拿到 CharacterCreationManager 实例
CharacterCreationManager characterCreationManager = ...;
characterCreationManager.StartNarrativeStage();
```

### TrySwitchToNextMenu
`public bool TrySwitchToNextMenu()`

**用途 / Purpose:** **用途 / Purpose:** 尝试获取 switch to next menu 的值，通常通过 out 参数返回是否成功。

```csharp
// 先通过子系统 API 拿到 CharacterCreationManager 实例
CharacterCreationManager characterCreationManager = ...;
var result = characterCreationManager.TrySwitchToNextMenu();
```

### TrySwitchToPreviousMenu
`public bool TrySwitchToPreviousMenu()`

**用途 / Purpose:** **用途 / Purpose:** 尝试获取 switch to previous menu 的值，通常通过 out 参数返回是否成功。

```csharp
// 先通过子系统 API 拿到 CharacterCreationManager 实例
CharacterCreationManager characterCreationManager = ...;
var result = characterCreationManager.TrySwitchToPreviousMenu();
```

### OnNarrativeMenuOptionSelected
`public void OnNarrativeMenuOptionSelected(NarrativeMenuOption option)`

**用途 / Purpose:** **用途 / Purpose:** 在 narrative menu option selected 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CharacterCreationManager 实例
CharacterCreationManager characterCreationManager = ...;
characterCreationManager.OnNarrativeMenuOptionSelected(option);
```

### GetSuitableNarrativeMenuOptions
`public IEnumerable<NarrativeMenuOption> GetSuitableNarrativeMenuOptions()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 suitable narrative menu options 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterCreationManager 实例
CharacterCreationManager characterCreationManager = ...;
var result = characterCreationManager.GetSuitableNarrativeMenuOptions();
```

### ApplyFinalEffects
`public void ApplyFinalEffects()`

**用途 / Purpose:** **用途 / Purpose:** 将 final effects 的效果应用到当前对象。

```csharp
// 先通过子系统 API 拿到 CharacterCreationManager 实例
CharacterCreationManager characterCreationManager = ...;
characterCreationManager.ApplyFinalEffects();
```

## 使用示例

```csharp
var manager = CharacterCreationManager.Current;
```

## 参见

- [本区域目录](../)