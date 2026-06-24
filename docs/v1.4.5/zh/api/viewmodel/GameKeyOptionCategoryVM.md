<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameKeyOptionCategoryVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GameKeyOptionCategoryVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GameKeys
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GameKeyOptionCategoryVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GameKeys/GameKeyOptionCategoryVM.cs`

## 概述

`GameKeyOptionCategoryVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GameKeys`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GameKeys` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `ResetText` | `public string ResetText { get; set; }` |
| `GameKeyGroups` | `public MBBindingList<GameKeyGroupVM> GameKeyGroups { get; set; }` |
| `AuxiliaryKeyGroups` | `public MBBindingList<AuxiliaryKeyGroupVM> AuxiliaryKeyGroups { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### IsChanged
`public bool IsChanged()`

**用途 / Purpose:** 处理 `is changed` 相关逻辑。

### ExecuteResetToDefault
`public void ExecuteResetToDefault()`

**用途 / Purpose:** 执行 `reset to default` 操作或流程。

### OnDone
`public void OnDone()`

**用途 / Purpose:** 当 `done` 事件触发时调用此方法。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### Cancel
`public void Cancel()`

**用途 / Purpose:** 判断当前对象是否可以执行 `cel`。

### ApplyValues
`public void ApplyValues()`

**用途 / Purpose:** 将 `values` 应用到当前对象。

## 使用示例

```csharp
var value = new GameKeyOptionCategoryVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)