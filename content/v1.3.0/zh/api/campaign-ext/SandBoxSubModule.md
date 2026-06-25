---
title: "SandBoxSubModule"
description: "SandBoxSubModule 的自动生成类参考。"
---
# SandBoxSubModule

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public class SandBoxSubModule : MBSubModuleBase`
**Base:** `MBSubModuleBase`
**File:** `SandBox/SandBoxSubModule.cs`

## 概述

`SandBoxSubModule` 位于 `SandBox`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OnCampaignStart
`public override void OnCampaignStart(Game game, object starterObject)`

**用途 / Purpose:** **用途 / Purpose:** 在 campaign start 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SandBoxSubModule 实例
SandBoxSubModule sandBoxSubModule = ...;
sandBoxSubModule.OnCampaignStart(game, starterObject);
```

### OnGameInitializationFinished
`public override void OnGameInitializationFinished(Game game)`

**用途 / Purpose:** **用途 / Purpose:** 在 game initialization finished 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SandBoxSubModule 实例
SandBoxSubModule sandBoxSubModule = ...;
sandBoxSubModule.OnGameInitializationFinished(game);
```

### RegisterSubModuleObjects
`public override void RegisterSubModuleObjects(bool isSavedCampaign)`

**用途 / Purpose:** **用途 / Purpose:** 将sub module objects注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 SandBoxSubModule 实例
SandBoxSubModule sandBoxSubModule = ...;
sandBoxSubModule.RegisterSubModuleObjects(false);
```

### AfterRegisterSubModuleObjects
`public override void AfterRegisterSubModuleObjects(bool isSavedCampaign)`

**用途 / Purpose:** **用途 / Purpose:** 调用 AfterRegisterSubModuleObjects 对应的操作。

```csharp
// 先通过子系统 API 拿到 SandBoxSubModule 实例
SandBoxSubModule sandBoxSubModule = ...;
sandBoxSubModule.AfterRegisterSubModuleObjects(false);
```

### OnGameLoaded
`public override void OnGameLoaded(Game game, object starterObject)`

**用途 / Purpose:** **用途 / Purpose:** 在 game loaded 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SandBoxSubModule 实例
SandBoxSubModule sandBoxSubModule = ...;
sandBoxSubModule.OnGameLoaded(game, starterObject);
```

### OnConfigChanged
`public override void OnConfigChanged()`

**用途 / Purpose:** **用途 / Purpose:** 在 config changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SandBoxSubModule 实例
SandBoxSubModule sandBoxSubModule = ...;
sandBoxSubModule.OnConfigChanged();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SandBoxSubModule sandBoxSubModule = ...;
sandBoxSubModule.OnCampaignStart(game, starterObject);
```

## 参见

- [本区域目录](../)