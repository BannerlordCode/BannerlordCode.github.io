---
title: "AdminPanelAction"
description: "AdminPanelAction 的自动生成类参考。"
---
# AdminPanelAction

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.Admin
**Module:** TaleWorlds.MountAndBlade
**Type:** `internal class AdminPanelAction : IAdminPanelActionInternal, IAdminPanelAction`
**Base:** `IAdminPanelActionInternal`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.Admin/AdminPanelAction.cs`

## 概述

`AdminPanelAction` 位于 `TaleWorlds.MountAndBlade.Multiplayer.Admin`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.Admin` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OnFinalize
`public virtual void OnFinalize()`

**用途 / Purpose:** **用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 AdminPanelAction 实例
AdminPanelAction adminPanelAction = ...;
adminPanelAction.OnFinalize();
```

### GetIsAvailable
`public virtual bool GetIsAvailable()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 is available 的结果。

```csharp
// 先通过子系统 API 拿到 AdminPanelAction 实例
AdminPanelAction adminPanelAction = ...;
var result = adminPanelAction.GetIsAvailable();
```

### GetIsDisabled
`public virtual bool GetIsDisabled(out string reason)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 is disabled 的结果。

```csharp
// 先通过子系统 API 拿到 AdminPanelAction 实例
AdminPanelAction adminPanelAction = ...;
var result = adminPanelAction.GetIsDisabled(reason);
```

### BuildName
`public AdminPanelAction BuildName(TextObject name)`

**用途 / Purpose:** **用途 / Purpose:** 组装并返回name的构建结果。

```csharp
// 先通过子系统 API 拿到 AdminPanelAction 实例
AdminPanelAction adminPanelAction = ...;
var result = adminPanelAction.BuildName(name);
```

### BuildDescription
`public AdminPanelAction BuildDescription(TextObject description)`

**用途 / Purpose:** **用途 / Purpose:** 组装并返回description的构建结果。

```csharp
// 先通过子系统 API 拿到 AdminPanelAction 实例
AdminPanelAction adminPanelAction = ...;
var result = adminPanelAction.BuildDescription(description);
```

### BuildOnActionExecutedCallback
`public AdminPanelAction BuildOnActionExecutedCallback(Action onActionExecuted)`

**用途 / Purpose:** **用途 / Purpose:** 组装并返回on action executed callback的构建结果。

```csharp
// 先通过子系统 API 拿到 AdminPanelAction 实例
AdminPanelAction adminPanelAction = ...;
var result = adminPanelAction.BuildOnActionExecutedCallback(onActionExecuted);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
AdminPanelAction adminPanelAction = ...;
adminPanelAction.OnFinalize();
```

## 参见

- [本区域目录](../)