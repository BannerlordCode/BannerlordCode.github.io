---
title: "GameOverVM"
description: "GameOverVM 的自动生成类参考。"
---
# GameOverVM

**Namespace:** SandBox.ViewModelCollection.GameOver
**Module:** SandBox.ViewModelCollection
**Type:** `public class GameOverVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.GameOver/GameOverVM.cs`

## 概述

`GameOverVM` 位于 `SandBox.ViewModelCollection.GameOver`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.GameOver` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CloseText` | `public string CloseText { get; set; }` |
| `StatisticsTitle` | `public string StatisticsTitle { get; set; }` |
| `ReasonAsString` | `public string ReasonAsString { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `ClanBanner` | `public BannerImageIdentifierVM ClanBanner { get; set; }` |
| `IsPositiveGameOver` | `public bool IsPositiveGameOver { get; set; }` |
| `CloseInputKey` | `public InputKeyItemVM CloseInputKey { get; set; }` |
| `Categories` | `public MBBindingList<GameOverStatCategoryVM> Categories { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 GameOverVM 实例
GameOverVM gameOverVM = ...;
gameOverVM.RefreshValues();
```

### ExecuteClose
`public void ExecuteClose()`

**用途 / Purpose:** **用途 / Purpose:** 执行 close 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 GameOverVM 实例
GameOverVM gameOverVM = ...;
gameOverVM.ExecuteClose();
```

### SetCloseInputKey
`public void SetCloseInputKey(HotKey hotKey)`

**用途 / Purpose:** **用途 / Purpose:** 为 close input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GameOverVM 实例
GameOverVM gameOverVM = ...;
gameOverVM.SetCloseInputKey(hotKey);
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** **用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GameOverVM 实例
GameOverVM gameOverVM = ...;
gameOverVM.OnFinalize();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
GameOverVM gameOverVM = ...;
gameOverVM.RefreshValues();
```

## 参见

- [本区域目录](../)