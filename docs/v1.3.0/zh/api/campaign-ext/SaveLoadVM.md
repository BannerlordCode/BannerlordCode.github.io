<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SaveLoadVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SaveLoadVM

**Namespace:** SandBox.ViewModelCollection.SaveLoad
**Module:** SandBox.ViewModelCollection
**Type:** `public class SaveLoadVM : ViewModel`
**Base:** `ViewModel`
**File:** `SandBox.ViewModelCollection/SaveLoad/SaveLoadVM.cs`

## 概述

`SaveLoadVM` 位于 `SandBox.ViewModelCollection.SaveLoad`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.SaveLoad` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsLoadingSaves` | `public bool IsLoadingSaves { get; set; }` |
| `IsBusyWithAnAction` | `public bool IsBusyWithAnAction { get; set; }` |
| `IsSearchAvailable` | `public bool IsSearchAvailable { get; set; }` |
| `SearchText` | `public string SearchText { get; set; }` |
| `SearchPlaceholderText` | `public string SearchPlaceholderText { get; set; }` |
| `VisualDisabledText` | `public string VisualDisabledText { get; set; }` |
| `SaveGroups` | `public MBBindingList<SavedGameGroupVM> SaveGroups { get; set; }` |
| `CurrentSelectedSave` | `public SavedGameVM CurrentSelectedSave { get; set; }` |
| `CreateNewSaveSlotText` | `public string CreateNewSaveSlotText { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `CancelText` | `public string CancelText { get; set; }` |
| `IsSaving` | `public bool IsSaving { get; set; }` |
| `CanCreateNewSave` | `public bool CanCreateNewSave { get; set; }` |
| `IsVisualDisabled` | `public bool IsVisualDisabled { get; set; }` |
| `CreateNewSaveHint` | `public HintViewModel CreateNewSaveHint { get; set; }` |
| `IsActionEnabled` | `public bool IsActionEnabled { get; set; }` |
| `IsAnyItemSelected` | `public bool IsAnyItemSelected { get; set; }` |
| `DoneText` | `public string DoneText { get; set; }` |
| `SaveLoadText` | `public string SaveLoadText { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `DeleteInputKey` | `public InputKeyItemVM DeleteInputKey { get; set; }` |

## 主要方法

### Initialize
`public async void Initialize()`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### ExecuteCreateNewSaveGame
`public void ExecuteCreateNewSaveGame()`

**用途 / Purpose:** 执行 `create new save game` 操作或流程。

### ExecuteDone
`public void ExecuteDone()`

**用途 / Purpose:** 执行 `done` 操作或流程。

### ExecuteLoadSave
`public void ExecuteLoadSave()`

**用途 / Purpose:** 执行 `load save` 操作或流程。

### DeleteSelectedSave
`public void DeleteSelectedSave()`

**用途 / Purpose:** 处理 `delete selected save` 相关逻辑。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotkey)`

**用途 / Purpose:** 设置 `done input key` 的值或状态。

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotkey)`

**用途 / Purpose:** 设置 `cancel input key` 的值或状态。

### SetDeleteInputKey
`public void SetDeleteInputKey(HotKey hotkey)`

**用途 / Purpose:** 设置 `delete input key` 的值或状态。

## 使用示例

```csharp
var value = new SaveLoadVM();
value.Initialize();
```

## 参见

- [完整类目录](../catalog)