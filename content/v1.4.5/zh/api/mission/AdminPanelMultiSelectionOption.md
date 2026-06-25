---
title: "AdminPanelMultiSelectionOption"
description: "AdminPanelMultiSelectionOption 的自动生成类参考。"
---
# AdminPanelMultiSelectionOption

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.Admin.Internal
**Module:** TaleWorlds.MountAndBlade
**Type:** `internal class AdminPanelMultiSelectionOption : AdminPanelOption<IAdminPanelMultiSelectionItem>, IAdminPanelMultiSelectionOption, IAdminPanelOption<IAdminPanelMultiSelectionItem>, IAdminPanelOption`
**Base:** `AdminPanelOption<IAdminPanelMultiSelectionItem>`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.Admin.Internal/AdminPanelMultiSelectionOption.cs`

## 概述

`AdminPanelMultiSelectionOption` 位于 `TaleWorlds.MountAndBlade.Multiplayer.Admin.Internal`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.Admin.Internal` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### BuildAvailableOptions
`public virtual AdminPanelMultiSelectionOption BuildAvailableOptions(MBReadOnlyList<IAdminPanelMultiSelectionItem> options)`

**用途 / Purpose:** 组装并返回available options的构建结果。

```csharp
// 先通过子系统 API 拿到 AdminPanelMultiSelectionOption 实例
AdminPanelMultiSelectionOption adminPanelMultiSelectionOption = ...;
var result = adminPanelMultiSelectionOption.BuildAvailableOptions(options);
```

### BuildAvailableOptions
`public virtual AdminPanelMultiSelectionOption BuildAvailableOptions(OptionType optionType, bool buildDefaultValue = true)`

**用途 / Purpose:** 组装并返回available options的构建结果。

```csharp
// 先通过子系统 API 拿到 AdminPanelMultiSelectionOption 实例
AdminPanelMultiSelectionOption adminPanelMultiSelectionOption = ...;
var result = adminPanelMultiSelectionOption.BuildAvailableOptions(optionType, false);
```

### GetAvailableOptions
`public MBReadOnlyList<IAdminPanelMultiSelectionItem> GetAvailableOptions()`

**用途 / Purpose:** 读取并返回当前对象中 available options 的结果。

```csharp
// 先通过子系统 API 拿到 AdminPanelMultiSelectionOption 实例
AdminPanelMultiSelectionOption adminPanelMultiSelectionOption = ...;
var result = adminPanelMultiSelectionOption.GetAvailableOptions();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
AdminPanelMultiSelectionOption adminPanelMultiSelectionOption = ...;
adminPanelMultiSelectionOption.BuildAvailableOptions(options);
```

## 参见

- [本区域目录](../)