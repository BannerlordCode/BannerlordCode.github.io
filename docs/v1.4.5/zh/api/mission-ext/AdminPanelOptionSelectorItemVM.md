<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AdminPanelOptionSelectorItemVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# AdminPanelOptionSelectorItemVM

**命名空间:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel
**模块:** TaleWorlds.MountAndBlade
**类型:** `public class AdminPanelOptionSelectorItemVM : SelectorItemVM`
**Base:** `SelectorItemVM`
**领域:** mission-ext

## 概述

`AdminPanelOptionSelectorItemVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsMultiSelectionOption` | `public bool IsMultiSelectionOption { get; set; }` |
| `MultiSelectionOptions` | `public AdminPanelOptionSelectorVM MultiSelectionOptions { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### UpdateValues
`public override void UpdateValues()`

**用途 / Purpose:** 更新 `values` 的状态或数据。

### ExecuteRestoreDefaults
`public override void ExecuteRestoreDefaults()`

**用途 / Purpose:** 执行 `restore defaults` 操作或流程。

### ExecuteRevertChanges
`public override void ExecuteRevertChanges()`

**用途 / Purpose:** 执行 `revert changes` 操作或流程。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 AdminPanelOptionSelectorItemVM 实例，再调用它的公开方法
var value = new AdminPanelOptionSelectorItemVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
