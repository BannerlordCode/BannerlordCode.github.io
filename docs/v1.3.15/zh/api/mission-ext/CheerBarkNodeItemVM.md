<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CheerBarkNodeItemVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CheerBarkNodeItemVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CheerBarkNodeItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/CheerBarkNodeItemVM.cs`

## 概述

`CheerBarkNodeItemVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ShortcutKey` | `public InputKeyItemVM ShortcutKey { get; set; }` |
| `SubNodes` | `public MBBindingList<CheerBarkNodeItemVM> SubNodes { get; set; }` |
| `CheerNameText` | `public string CheerNameText { get; set; }` |
| `IsDisabled` | `public bool IsDisabled { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `HasSubNodes` | `public bool HasSubNodes { get; set; }` |
| `TypeAsString` | `public string TypeAsString { get; set; }` |
| `TauntVisualName` | `public string TauntVisualName { get; set; }` |
| `SelectedNodeText` | `public string SelectedNodeText { get; set; }` |

## 主要方法

### ClearSelectionRecursive
`public void ClearSelectionRecursive()`

**用途 / Purpose:** 处理 `clear selection recursive` 相关逻辑。

### ExecuteFocused
`public void ExecuteFocused()`

**用途 / Purpose:** 执行 `focused` 操作或流程。

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### AddSubNode
`public void AddSubNode(CheerBarkNodeItemVM subNode)`

**用途 / Purpose:** 向当前集合/状态中添加 `sub node`。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new CheerBarkNodeItemVM();
value.ClearSelectionRecursive();
```

## 参见

- [完整类目录](../catalog)