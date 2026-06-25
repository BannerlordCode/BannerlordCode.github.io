---
title: "GauntletInventoryScreen"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GauntletInventoryScreen`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 执行 `looting script` 操作或流程。

### ExecuteSellAllLoot
`public void ExecuteSellAllLoot()`

**用途 / Purpose:** 执行 `sell all loot` 操作或流程。

### ExecuteCancel
`public void ExecuteCancel()`

**用途 / Purpose:** 执行 `cancel` 操作或流程。

### ExecuteConfirm
`public void ExecuteConfirm()`

**用途 / Purpose:** 执行 `confirm` 操作或流程。

### ExecuteSwitchToPreviousTab
`public void ExecuteSwitchToPreviousTab()`

**用途 / Purpose:** 执行 `switch to previous tab` 操作或流程。

### ExecuteSwitchToNextTab
`public void ExecuteSwitchToNextTab()`

**用途 / Purpose:** 执行 `switch to next tab` 操作或流程。

### ExecuteBuySingle
`public void ExecuteBuySingle()`

**用途 / Purpose:** 执行 `buy single` 操作或流程。

### ExecuteSellSingle
`public void ExecuteSellSingle()`

**用途 / Purpose:** 执行 `sell single` 操作或流程。

### ExecuteTakeAll
`public void ExecuteTakeAll()`

**用途 / Purpose:** 执行 `take all` 操作或流程。

### ExecuteGiveAll
`public void ExecuteGiveAll()`

**用途 / Purpose:** 执行 `give all` 操作或流程。

### ExecuteBuyConsumableItem
`public void ExecuteBuyConsumableItem()`

**用途 / Purpose:** 执行 `buy consumable item` 操作或流程。

## 使用示例

```csharp
var value = new GauntletInventoryScreen();
value.ExecuteLootingScript();
```

## 参见

- [完整类目录](../catalog)