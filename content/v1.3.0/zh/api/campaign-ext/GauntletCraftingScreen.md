---
title: "GauntletCraftingScreen"
description: "GauntletCraftingScreen 的自动生成类参考。"
---
# GauntletCraftingScreen

**Namespace:** SandBox.GauntletUI
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletCraftingScreen : ScreenBase, ICraftingStateHandler, IGameStateListener`
**Base:** `ScreenBase`
**File:** `SandBox.GauntletUI/GauntletCraftingScreen.cs`

## 概述

`GauntletCraftingScreen` 位于 `SandBox.GauntletUI`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.GauntletUI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Initialize
`public void Initialize()`

**用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 GauntletCraftingScreen 实例
GauntletCraftingScreen gauntletCraftingScreen = ...;
gauntletCraftingScreen.Initialize();
```

### OnCraftingLogicInitialized
`public void OnCraftingLogicInitialized()`

**用途 / Purpose:** 在 「crafting logic initialized」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GauntletCraftingScreen 实例
GauntletCraftingScreen gauntletCraftingScreen = ...;
gauntletCraftingScreen.OnCraftingLogicInitialized();
```

### OnCraftingLogicRefreshed
`public void OnCraftingLogicRefreshed()`

**用途 / Purpose:** 在 「crafting logic refreshed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GauntletCraftingScreen 实例
GauntletCraftingScreen gauntletCraftingScreen = ...;
gauntletCraftingScreen.OnCraftingLogicRefreshed();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
GauntletCraftingScreen gauntletCraftingScreen = ...;
gauntletCraftingScreen.Initialize();
```

## 参见

- [本区域目录](../)