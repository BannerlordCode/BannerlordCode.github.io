<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CharacterCreationManager`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CharacterCreationManager

**Namespace:** TaleWorlds.CampaignSystem.CharacterCreationContent
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterCreationManager`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CharacterCreationContent/CharacterCreationManager.cs`

## 概述

`CharacterCreationManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `CharacterCreationManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `CharacterCreationContent` | `public CharacterCreationContent CharacterCreationContent { get; }` |
| `CurrentMenu` | `public NarrativeMenu CurrentMenu { get; }` |
| `CurrentStage` | `public CharacterCreationStageBase CurrentStage { get; }` |

## 主要方法

### RegisterCharacterCreationContentHandler
`public void RegisterCharacterCreationContentHandler(ICharacterCreationContentHandler characterCreationContentHandler, int priority)`

**用途 / Purpose:** 处理 `register character creation content handler` 相关逻辑。

### AddStage
`public void AddStage(CharacterCreationStageBase stage)`

**用途 / Purpose:** 向当前集合/状态中添加 `stage`。

### NextStage
`public void NextStage()`

**用途 / Purpose:** 处理 `next stage` 相关逻辑。

### PreviousStage
`public void PreviousStage()`

**用途 / Purpose:** 处理 `previous stage` 相关逻辑。

### GoToStage
`public void GoToStage(int stageIndex)`

**用途 / Purpose:** 处理 `go to stage` 相关逻辑。

### GetIndexOfCurrentStage
`public int GetIndexOfCurrentStage()`

**用途 / Purpose:** 获取 `index of current stage` 的当前值。

### GetTotalStagesCount
`public int GetTotalStagesCount()`

**用途 / Purpose:** 获取 `total stages count` 的当前值。

### GetFurthestIndex
`public int GetFurthestIndex()`

**用途 / Purpose:** 获取 `furthest index` 的当前值。

### AddNewMenu
`public void AddNewMenu(NarrativeMenu menu)`

**用途 / Purpose:** 向当前集合/状态中添加 `new menu`。

### GetCurrentMenu
`public NarrativeMenu GetCurrentMenu(int index)`

**用途 / Purpose:** 获取 `current menu` 的当前值。

### GetCurrentMenuOptions
`public IEnumerable<NarrativeMenuOption> GetCurrentMenuOptions(int index)`

**用途 / Purpose:** 获取 `current menu options` 的当前值。

### GetNarrativeMenuWithId
`public NarrativeMenu GetNarrativeMenuWithId(string stringId)`

**用途 / Purpose:** 获取 `narrative menu with id` 的当前值。

### DeleteNarrativeMenuWithId
`public void DeleteNarrativeMenuWithId(string stringId)`

**用途 / Purpose:** 处理 `delete narrative menu with id` 相关逻辑。

### ResetNarrativeMenus
`public void ResetNarrativeMenus()`

**用途 / Purpose:** 将 `narrative menus` 重置为初始状态。

### ResetMenuOptions
`public void ResetMenuOptions()`

**用途 / Purpose:** 将 `menu options` 重置为初始状态。

### StartNarrativeStage
`public void StartNarrativeStage()`

**用途 / Purpose:** 处理 `start narrative stage` 相关逻辑。

### TrySwitchToNextMenu
`public bool TrySwitchToNextMenu()`

**用途 / Purpose:** 尝试获取 `switch to next menu`，通常以 out 参数返回结果。

### TrySwitchToPreviousMenu
`public bool TrySwitchToPreviousMenu()`

**用途 / Purpose:** 尝试获取 `switch to previous menu`，通常以 out 参数返回结果。

### OnNarrativeMenuOptionSelected
`public void OnNarrativeMenuOptionSelected(NarrativeMenuOption option)`

**用途 / Purpose:** 当 `narrative menu option selected` 事件触发时调用此方法。

### GetSuitableNarrativeMenuOptions
`public IEnumerable<NarrativeMenuOption> GetSuitableNarrativeMenuOptions()`

**用途 / Purpose:** 获取 `suitable narrative menu options` 的当前值。

### ApplyFinalEffects
`public void ApplyFinalEffects()`

**用途 / Purpose:** 将 `final effects` 应用到当前对象。

## 使用示例

```csharp
var manager = CharacterCreationManager.Current;
```

## 参见

- [完整类目录](../catalog)