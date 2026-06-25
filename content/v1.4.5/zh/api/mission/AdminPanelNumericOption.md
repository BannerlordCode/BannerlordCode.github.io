---
title: "AdminPanelNumericOption"
description: "AdminPanelNumericOption 的自动生成类参考。"
---
# AdminPanelNumericOption

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.Admin.Internal
**Module:** TaleWorlds.MountAndBlade
**Type:** `internal class AdminPanelNumericOption : AdminPanelOption<int>, IAdminPanelNumericOption, IAdminPanelOption<int>, IAdminPanelOption`
**Base:** `AdminPanelOption<int>`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.Admin.Internal/AdminPanelNumericOption.cs`

## 概述

`AdminPanelNumericOption` 位于 `TaleWorlds.MountAndBlade.Multiplayer.Admin.Internal`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.Admin.Internal` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### SetMinimumValue
`public AdminPanelNumericOption SetMinimumValue(int value)`

**用途 / Purpose:** 为 「minimum value」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 AdminPanelNumericOption 实例
AdminPanelNumericOption adminPanelNumericOption = ...;
var result = adminPanelNumericOption.SetMinimumValue(0);
```

### SetMaximumValue
`public AdminPanelNumericOption SetMaximumValue(int value)`

**用途 / Purpose:** 为 「maximum value」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 AdminPanelNumericOption 实例
AdminPanelNumericOption adminPanelNumericOption = ...;
var result = adminPanelNumericOption.SetMaximumValue(0);
```

### SetMinimumAndMaximumFrom
`public AdminPanelNumericOption SetMinimumAndMaximumFrom(OptionType optionType)`

**用途 / Purpose:** 为 「minimum and maximum from」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 AdminPanelNumericOption 实例
AdminPanelNumericOption adminPanelNumericOption = ...;
var result = adminPanelNumericOption.SetMinimumAndMaximumFrom(optionType);
```

### GetMinimumValue
`public int? GetMinimumValue()`

**用途 / Purpose:** 读取并返回当前对象中 「minimum value」 的结果。

```csharp
// 先通过子系统 API 拿到 AdminPanelNumericOption 实例
AdminPanelNumericOption adminPanelNumericOption = ...;
var result = adminPanelNumericOption.GetMinimumValue();
```

### GetMaximumValue
`public int? GetMaximumValue()`

**用途 / Purpose:** 读取并返回当前对象中 「maximum value」 的结果。

```csharp
// 先通过子系统 API 拿到 AdminPanelNumericOption 实例
AdminPanelNumericOption adminPanelNumericOption = ...;
var result = adminPanelNumericOption.GetMaximumValue();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
AdminPanelNumericOption adminPanelNumericOption = ...;
adminPanelNumericOption.SetMinimumValue(0);
```

## 参见

- [本区域目录](../)