---
title: "MissionGauntletAdminPanel"
description: "MissionGauntletAdminPanel 的自动生成类参考。"
---
# MissionGauntletAdminPanel

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletAdminPanel : MissionView`
**Base:** `MissionView`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission/MissionGauntletAdminPanel.cs`

## 概述

`MissionGauntletAdminPanel` 位于 `TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CreateOptionProviderDelegeate
`public delegate IAdminPanelOptionProvider CreateOptionProviderDelegeate()`

**用途 / Purpose:** 构建一个新的 「option provider delegeate」 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 MissionGauntletAdminPanel 实例
MissionGauntletAdminPanel missionGauntletAdminPanel = ...;
var result = missionGauntletAdminPanel.CreateOptionProviderDelegeate();
```

### CreateOptionViewModelDelegate
`public delegate MultiplayerAdminPanelOptionBaseVM CreateOptionViewModelDelegate(IAdminPanelOption option)`

**用途 / Purpose:** 构建一个新的 「option view model delegate」 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 MissionGauntletAdminPanel 实例
MissionGauntletAdminPanel missionGauntletAdminPanel = ...;
var result = missionGauntletAdminPanel.CreateOptionViewModelDelegate(option);
```

### CreateActionViewModelDelegate
`public delegate MultiplayerAdminPanelOptionBaseVM CreateActionViewModelDelegate(IAdminPanelAction action)`

**用途 / Purpose:** 构建一个新的 「action view model delegate」 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 MissionGauntletAdminPanel 实例
MissionGauntletAdminPanel missionGauntletAdminPanel = ...;
var result = missionGauntletAdminPanel.CreateActionViewModelDelegate(action);
```

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**用途 / Purpose:** 在 「mission screen initialize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletAdminPanel 实例
MissionGauntletAdminPanel missionGauntletAdminPanel = ...;
missionGauntletAdminPanel.OnMissionScreenInitialize();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**用途 / Purpose:** 在 「mission screen tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletAdminPanel 实例
MissionGauntletAdminPanel missionGauntletAdminPanel = ...;
missionGauntletAdminPanel.OnMissionScreenTick(0);
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**用途 / Purpose:** 在 「mission screen finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletAdminPanel 实例
MissionGauntletAdminPanel missionGauntletAdminPanel = ...;
missionGauntletAdminPanel.OnMissionScreenFinalize();
```

### OnEscape
`public override bool OnEscape()`

**用途 / Purpose:** 在 「escape」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletAdminPanel 实例
MissionGauntletAdminPanel missionGauntletAdminPanel = ...;
var result = missionGauntletAdminPanel.OnEscape();
```

### AddOptionProviderCreator
`public void AddOptionProviderCreator(CreateOptionProviderDelegeate creator)`

**用途 / Purpose:** 将 「option provider creator」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MissionGauntletAdminPanel 实例
MissionGauntletAdminPanel missionGauntletAdminPanel = ...;
missionGauntletAdminPanel.AddOptionProviderCreator(creator);
```

### AddOptionViewModelCreator
`public void AddOptionViewModelCreator(CreateOptionViewModelDelegate creator)`

**用途 / Purpose:** 将 「option view model creator」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MissionGauntletAdminPanel 实例
MissionGauntletAdminPanel missionGauntletAdminPanel = ...;
missionGauntletAdminPanel.AddOptionViewModelCreator(creator);
```

### AddActionViewModelCreator
`public void AddActionViewModelCreator(CreateActionViewModelDelegate creator)`

**用途 / Purpose:** 将 「action view model creator」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MissionGauntletAdminPanel 实例
MissionGauntletAdminPanel missionGauntletAdminPanel = ...;
missionGauntletAdminPanel.AddActionViewModelCreator(creator);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MissionGauntletAdminPanel missionGauntletAdminPanel = ...;
missionGauntletAdminPanel.CreateOptionProviderDelegeate();
```

## 参见

- [本区域目录](../)