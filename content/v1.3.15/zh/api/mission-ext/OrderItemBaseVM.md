---
title: "OrderItemBaseVM"
description: "OrderItemBaseVM 的自动生成类参考。"
---
# OrderItemBaseVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class OrderItemBaseVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderItemBaseVM.cs`

## 概述

`OrderItemBaseVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.Order`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.Order` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ShortcutKey` | `public InputKeyItemVM ShortcutKey { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `CanUseShortcuts` | `public bool CanUseShortcuts { get; set; }` |
| `OrderIconId` | `public string OrderIconId { get; set; }` |
| `SelectionState` | `public string SelectionState { get; set; }` |
| `Name` | `public string Name { get; set; }` |

## 主要方法

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** **用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 OrderItemBaseVM 实例
OrderItemBaseVM orderItemBaseVM = ...;
orderItemBaseVM.OnFinalize();
```

### RefreshState
`public void RefreshState()`

**用途 / Purpose:** **用途 / Purpose:** 使 state 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 OrderItemBaseVM 实例
OrderItemBaseVM orderItemBaseVM = ...;
orderItemBaseVM.RefreshState();
```

### ExecuteAction
`public void ExecuteAction(VisualOrderExecutionParameters executionParameters)`

**用途 / Purpose:** **用途 / Purpose:** 执行 action 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 OrderItemBaseVM 实例
OrderItemBaseVM orderItemBaseVM = ...;
orderItemBaseVM.ExecuteAction(executionParameters);
```

### SetShortcutKey
`public void SetShortcutKey(InputKeyItemVM inputKeyItem)`

**用途 / Purpose:** **用途 / Purpose:** 为 shortcut key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 OrderItemBaseVM 实例
OrderItemBaseVM orderItemBaseVM = ...;
orderItemBaseVM.SetShortcutKey(inputKeyItem);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
OrderItemBaseVM instance = ...;
```

## 参见

- [本区域目录](../)