---
title: "MPArmoryCosmeticTauntSlotVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPArmoryCosmeticTauntSlotVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MPArmoryCosmeticTauntSlotVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticItem
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPArmoryCosmeticTauntSlotVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticItem/MPArmoryCosmeticTauntSlotVM.cs`

## 概述

`MPArmoryCosmeticTauntSlotVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticItem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticItem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `SelectKeyVisual` | `public InputKeyItemVM SelectKeyVisual { get; set; }` |
| `EmptySlotKeyVisual` | `public InputKeyItemVM EmptySlotKeyVisual { get; set; }` |
| `IsAcceptingTaunts` | `public bool IsAcceptingTaunts { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsEmpty` | `public bool IsEmpty { get; set; }` |
| `IsFocused` | `public bool IsFocused { get; set; }` |
| `AssignedTauntItem` | `public MPArmoryCosmeticTauntItemVM AssignedTauntItem { get; set; }` |

## 主要方法

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### AssignTauntItem
`public void AssignTauntItem(MPArmoryCosmeticTauntItemVM tauntItem, bool isSwapping = false)`

**用途 / Purpose:** 处理 `assign taunt item` 相关逻辑。

### ExecuteSelect
`public void ExecuteSelect()`

**用途 / Purpose:** 执行 `select` 操作或流程。

### ExecutePreview
`public void ExecutePreview()`

**用途 / Purpose:** 执行 `preview` 操作或流程。

### ExecuteFocus
`public void ExecuteFocus()`

**用途 / Purpose:** 执行 `focus` 操作或流程。

### ExecuteUnfocus
`public void ExecuteUnfocus()`

**用途 / Purpose:** 执行 `unfocus` 操作或流程。

### SetSelectKeyVisual
`public void SetSelectKeyVisual(HotKey hotKey)`

**用途 / Purpose:** 设置 `select key visual` 的值或状态。

### SetEmptySlotKeyVisual
`public void SetEmptySlotKeyVisual(HotKey hotKey)`

**用途 / Purpose:** 设置 `empty slot key visual` 的值或状态。

## 使用示例

```csharp
var value = new MPArmoryCosmeticTauntSlotVM();
value.OnFinalize();
```

## 参见

- [完整类目录](../catalog)