---
title: "AdminPanelOption"
description: "AdminPanelOption 的自动生成类参考。"
---
# AdminPanelOption

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.Admin
**Module:** TaleWorlds.MountAndBlade
**Type:** `internal class AdminPanelOption<T> : IAdminPanelOptionInternal<T>, IAdminPanelOptionInternal, IAdminPanelOption<T>, IAdminPanelOption`
**Base:** `IAdminPanelOptionInternal<T>`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.Admin/AdminPanelOption.cs`

## 概述

`AdminPanelOption` 位于 `TaleWorlds.MountAndBlade.Multiplayer.Admin`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.Admin` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CanRevertToDefaultValue` | `public bool CanRevertToDefaultValue { get; }` |

## 主要方法

### AddValueChangedCallback
`public void AddValueChangedCallback(Action callback)`

**用途 / Purpose:** 将 「value changed callback」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 AdminPanelOption 实例
AdminPanelOption adminPanelOption = ...;
adminPanelOption.AddValueChangedCallback(callback);
```

### RemoveValueChangedCallback
`public void RemoveValueChangedCallback(Action callback)`

**用途 / Purpose:** 从当前容器或状态中移除 「value changed callback」。

```csharp
// 先通过子系统 API 拿到 AdminPanelOption 实例
AdminPanelOption adminPanelOption = ...;
adminPanelOption.RemoveValueChangedCallback(callback);
```

### OnFinalize
`public virtual void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 AdminPanelOption 实例
AdminPanelOption adminPanelOption = ...;
adminPanelOption.OnFinalize();
```

### BuildOptionType
`public AdminPanelOption<T> BuildOptionType(OptionType optionType, MultiplayerOptionsAccessMode accessMode = (MultiplayerOptionsAccessMode)1, bool buildDefaultValue = true, bool buildInitialValue = true)`

**用途 / Purpose:** 组装并返回「option type」的构建结果。

```csharp
// 先通过子系统 API 拿到 AdminPanelOption 实例
AdminPanelOption adminPanelOption = ...;
var result = adminPanelOption.BuildOptionType(optionType, (MultiplayerOptionsAccessMode)1, false, false);
```

### BuildIsRequired
`public AdminPanelOption<T> BuildIsRequired(bool isRequired)`

**用途 / Purpose:** 组装并返回「is required」的构建结果。

```csharp
// 先通过子系统 API 拿到 AdminPanelOption 实例
AdminPanelOption adminPanelOption = ...;
var result = adminPanelOption.BuildIsRequired(false);
```

### BuildRequiresRestart
`public AdminPanelOption<T> BuildRequiresRestart(bool requiresRestart)`

**用途 / Purpose:** 组装并返回「requires restart」的构建结果。

```csharp
// 先通过子系统 API 拿到 AdminPanelOption 实例
AdminPanelOption adminPanelOption = ...;
var result = adminPanelOption.BuildRequiresRestart(false);
```

### BuildName
`public AdminPanelOption<T> BuildName(TextObject name)`

**用途 / Purpose:** 组装并返回「name」的构建结果。

```csharp
// 先通过子系统 API 拿到 AdminPanelOption 实例
AdminPanelOption adminPanelOption = ...;
var result = adminPanelOption.BuildName(name);
```

### BuildDescription
`public AdminPanelOption<T> BuildDescription(TextObject description)`

**用途 / Purpose:** 组装并返回「description」的构建结果。

```csharp
// 先通过子系统 API 拿到 AdminPanelOption 实例
AdminPanelOption adminPanelOption = ...;
var result = adminPanelOption.BuildDescription(description);
```

### BuildInitialValue
`public AdminPanelOption<T> BuildInitialValue(T value)`

**用途 / Purpose:** 组装并返回「initial value」的构建结果。

```csharp
// 先通过子系统 API 拿到 AdminPanelOption 实例
AdminPanelOption adminPanelOption = ...;
var result = adminPanelOption.BuildInitialValue(value);
```

### BuildDefaultValue
`public AdminPanelOption<T> BuildDefaultValue(T value)`

**用途 / Purpose:** 组装并返回「default value」的构建结果。

```csharp
// 先通过子系统 API 拿到 AdminPanelOption 实例
AdminPanelOption adminPanelOption = ...;
var result = adminPanelOption.BuildDefaultValue(value);
```

### BuildOnAppliedCallback
`public AdminPanelOption<T> BuildOnAppliedCallback(Action<T> onApplied)`

**用途 / Purpose:** 组装并返回「on applied callback」的构建结果。

```csharp
// 先通过子系统 API 拿到 AdminPanelOption 实例
AdminPanelOption adminPanelOption = ...;
var result = adminPanelOption.BuildOnAppliedCallback(onApplied);
```

### GetValue
`public T GetValue()`

**用途 / Purpose:** 读取并返回当前对象中 「value」 的结果。

```csharp
// 先通过子系统 API 拿到 AdminPanelOption 实例
AdminPanelOption adminPanelOption = ...;
var result = adminPanelOption.GetValue();
```

### SetValue
`public void SetValue(T value)`

**用途 / Purpose:** 为 「value」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 AdminPanelOption 实例
AdminPanelOption adminPanelOption = ...;
adminPanelOption.SetValue(value);
```

### GetIsAvailable
`public virtual bool GetIsAvailable()`

**用途 / Purpose:** 读取并返回当前对象中 「is available」 的结果。

```csharp
// 先通过子系统 API 拿到 AdminPanelOption 实例
AdminPanelOption adminPanelOption = ...;
var result = adminPanelOption.GetIsAvailable();
```

### OnApplyChanges
`public void OnApplyChanges()`

**用途 / Purpose:** 在 「apply changes」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 AdminPanelOption 实例
AdminPanelOption adminPanelOption = ...;
adminPanelOption.OnApplyChanges();
```

### RevertChanges
`public void RevertChanges()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 AdminPanelOption 实例
AdminPanelOption adminPanelOption = ...;
adminPanelOption.RevertChanges();
```

### RestoreDefaults
`public void RestoreDefaults()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 AdminPanelOption 实例
AdminPanelOption adminPanelOption = ...;
adminPanelOption.RestoreDefaults();
```

### SetOnRefreshCallback
`public void SetOnRefreshCallback(Action callback)`

**用途 / Purpose:** 为 「on refresh callback」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 AdminPanelOption 实例
AdminPanelOption adminPanelOption = ...;
adminPanelOption.SetOnRefreshCallback(callback);
```

### GetIsDisabled
`public virtual bool GetIsDisabled(out string reason)`

**用途 / Purpose:** 读取并返回当前对象中 「is disabled」 的结果。

```csharp
// 先通过子系统 API 拿到 AdminPanelOption 实例
AdminPanelOption adminPanelOption = ...;
var result = adminPanelOption.GetIsDisabled(reason);
```

### GetOptionType
`public OptionType GetOptionType()`

**用途 / Purpose:** 读取并返回当前对象中 「option type」 的结果。

```csharp
// 先通过子系统 API 拿到 AdminPanelOption 实例
AdminPanelOption adminPanelOption = ...;
var result = adminPanelOption.GetOptionType();
```

### GetOptionAccessMode
`public MultiplayerOptionsAccessMode GetOptionAccessMode()`

**用途 / Purpose:** 读取并返回当前对象中 「option access mode」 的结果。

```csharp
// 先通过子系统 API 拿到 AdminPanelOption 实例
AdminPanelOption adminPanelOption = ...;
var result = adminPanelOption.GetOptionAccessMode();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
AdminPanelOption adminPanelOption = ...;
adminPanelOption.AddValueChangedCallback(callback);
```

## 参见

- [本区域目录](../)