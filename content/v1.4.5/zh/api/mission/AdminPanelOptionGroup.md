---
title: "AdminPanelOptionGroup"
description: "AdminPanelOptionGroup 的自动生成类参考。"
---
# AdminPanelOptionGroup

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.Admin
**Module:** TaleWorlds.MountAndBlade
**Type:** `internal class AdminPanelOptionGroup : IAdminPanelOptionGroup, IAdminPanelTickable`
**Base:** `IAdminPanelOptionGroup`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.Admin/AdminPanelOptionGroup.cs`

## 概述

`AdminPanelOptionGroup` 位于 `TaleWorlds.MountAndBlade.Multiplayer.Admin`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.Admin` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### AddOption
`public void AddOption(IAdminPanelOption option)`

**用途 / Purpose:** 将 option 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 AdminPanelOptionGroup 实例
AdminPanelOptionGroup adminPanelOptionGroup = ...;
adminPanelOptionGroup.AddOption(option);
```

### AddAction
`public void AddAction(IAdminPanelAction action)`

**用途 / Purpose:** 将 action 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 AdminPanelOptionGroup 实例
AdminPanelOptionGroup adminPanelOptionGroup = ...;
adminPanelOptionGroup.AddAction(action);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
AdminPanelOptionGroup adminPanelOptionGroup = ...;
adminPanelOptionGroup.AddOption(option);
```

## 参见

- [本区域目录](../)