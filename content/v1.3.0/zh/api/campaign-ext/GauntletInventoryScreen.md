---
title: "GauntletInventoryScreen"
description: "GauntletInventoryScreen 的自动生成类参考。"
---
# GauntletInventoryScreen

**Namespace:** SandBox.GauntletUI
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletInventoryScreen : ScreenBase, IInventoryStateHandler, IGameStateListener, IChangeableScreen`
**Base:** `ScreenBase`
**File:** `SandBox.GauntletUI/GauntletInventoryScreen.cs`

## 概述

`GauntletInventoryScreen` 位于 `SandBox.GauntletUI`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.GauntletUI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `InventoryState` | `public InventoryState InventoryState { get; }` |

## 主要方法

### ExecuteLootingScript
`public void ExecuteLootingScript()`

**用途 / Purpose:** **用途 / Purpose:** 执行 looting script 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 GauntletInventoryScreen 实例
GauntletInventoryScreen gauntletInventoryScreen = ...;
gauntletInventoryScreen.ExecuteLootingScript();
```

### ExecuteSellAllLoot
`public void ExecuteSellAllLoot()`

**用途 / Purpose:** **用途 / Purpose:** 执行 sell all loot 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 GauntletInventoryScreen 实例
GauntletInventoryScreen gauntletInventoryScreen = ...;
gauntletInventoryScreen.ExecuteSellAllLoot();
```

### ExecuteCancel
`public void ExecuteCancel()`

**用途 / Purpose:** **用途 / Purpose:** 执行 cancel 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 GauntletInventoryScreen 实例
GauntletInventoryScreen gauntletInventoryScreen = ...;
gauntletInventoryScreen.ExecuteCancel();
```

### ExecuteConfirm
`public void ExecuteConfirm()`

**用途 / Purpose:** **用途 / Purpose:** 执行 confirm 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 GauntletInventoryScreen 实例
GauntletInventoryScreen gauntletInventoryScreen = ...;
gauntletInventoryScreen.ExecuteConfirm();
```

### ExecuteSwitchToPreviousTab
`public void ExecuteSwitchToPreviousTab()`

**用途 / Purpose:** **用途 / Purpose:** 执行 switch to previous tab 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 GauntletInventoryScreen 实例
GauntletInventoryScreen gauntletInventoryScreen = ...;
gauntletInventoryScreen.ExecuteSwitchToPreviousTab();
```

### ExecuteSwitchToNextTab
`public void ExecuteSwitchToNextTab()`

**用途 / Purpose:** **用途 / Purpose:** 执行 switch to next tab 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 GauntletInventoryScreen 实例
GauntletInventoryScreen gauntletInventoryScreen = ...;
gauntletInventoryScreen.ExecuteSwitchToNextTab();
```

### ExecuteBuySingle
`public void ExecuteBuySingle()`

**用途 / Purpose:** **用途 / Purpose:** 执行 buy single 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 GauntletInventoryScreen 实例
GauntletInventoryScreen gauntletInventoryScreen = ...;
gauntletInventoryScreen.ExecuteBuySingle();
```

### ExecuteSellSingle
`public void ExecuteSellSingle()`

**用途 / Purpose:** **用途 / Purpose:** 执行 sell single 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 GauntletInventoryScreen 实例
GauntletInventoryScreen gauntletInventoryScreen = ...;
gauntletInventoryScreen.ExecuteSellSingle();
```

### ExecuteTakeAll
`public void ExecuteTakeAll()`

**用途 / Purpose:** **用途 / Purpose:** 执行 take all 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 GauntletInventoryScreen 实例
GauntletInventoryScreen gauntletInventoryScreen = ...;
gauntletInventoryScreen.ExecuteTakeAll();
```

### ExecuteGiveAll
`public void ExecuteGiveAll()`

**用途 / Purpose:** **用途 / Purpose:** 执行 give all 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 GauntletInventoryScreen 实例
GauntletInventoryScreen gauntletInventoryScreen = ...;
gauntletInventoryScreen.ExecuteGiveAll();
```

### ExecuteBuyConsumableItem
`public void ExecuteBuyConsumableItem()`

**用途 / Purpose:** **用途 / Purpose:** 执行 buy consumable item 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 GauntletInventoryScreen 实例
GauntletInventoryScreen gauntletInventoryScreen = ...;
gauntletInventoryScreen.ExecuteBuyConsumableItem();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
GauntletInventoryScreen gauntletInventoryScreen = ...;
gauntletInventoryScreen.ExecuteLootingScript();
```

## 参见

- [本区域目录](../)