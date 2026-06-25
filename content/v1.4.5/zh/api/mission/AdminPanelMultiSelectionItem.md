---
title: "AdminPanelMultiSelectionItem"
description: "AdminPanelMultiSelectionItem 的自动生成类参考。"
---
# AdminPanelMultiSelectionItem

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.Admin.Internal
**Module:** TaleWorlds.MountAndBlade
**Type:** `internal class AdminPanelMultiSelectionItem : IAdminPanelMultiSelectionItem`
**Base:** `IAdminPanelMultiSelectionItem`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.Admin.Internal/AdminPanelMultiSelectionItem.cs`

## 概述

`AdminPanelMultiSelectionItem` 位于 `TaleWorlds.MountAndBlade.Multiplayer.Admin.Internal`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.Admin.Internal` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### SetIsFallbackValue
`public void SetIsFallbackValue(bool value)`

**用途 / Purpose:** 为 is fallback value 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 AdminPanelMultiSelectionItem 实例
AdminPanelMultiSelectionItem adminPanelMultiSelectionItem = ...;
adminPanelMultiSelectionItem.SetIsFallbackValue(false);
```

### SetIsDisabled
`public void SetIsDisabled(bool value)`

**用途 / Purpose:** 为 is disabled 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 AdminPanelMultiSelectionItem 实例
AdminPanelMultiSelectionItem adminPanelMultiSelectionItem = ...;
adminPanelMultiSelectionItem.SetIsDisabled(false);
```

### SetCanBeApplied
`public void SetCanBeApplied(bool value)`

**用途 / Purpose:** 为 can be applied 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 AdminPanelMultiSelectionItem 实例
AdminPanelMultiSelectionItem adminPanelMultiSelectionItem = ...;
adminPanelMultiSelectionItem.SetCanBeApplied(false);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
AdminPanelMultiSelectionItem adminPanelMultiSelectionItem = ...;
adminPanelMultiSelectionItem.SetIsFallbackValue(false);
```

## 参见

- [本区域目录](../)