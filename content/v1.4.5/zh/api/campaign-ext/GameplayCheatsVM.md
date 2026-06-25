---
title: "GameplayCheatsVM"
description: "GameplayCheatsVM 的自动生成类参考。"
---
# GameplayCheatsVM

**Namespace:** SandBox.ViewModelCollection.Map.Cheat
**Module:** SandBox.ViewModelCollection
**Type:** `public class GameplayCheatsVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Map.Cheat/GameplayCheatsVM.cs`

## 概述

`GameplayCheatsVM` 位于 `SandBox.ViewModelCollection.Map.Cheat`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.Map.Cheat` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Title` | `public string Title { get; set; }` |
| `ButtonCloseLabel` | `public string ButtonCloseLabel { get; set; }` |
| `Cheats` | `public MBBindingList<CheatItemBaseVM> Cheats { get; set; }` |
| `CloseInputKey` | `public InputKeyItemVM CloseInputKey { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 GameplayCheatsVM 实例
GameplayCheatsVM gameplayCheatsVM = ...;
gameplayCheatsVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GameplayCheatsVM 实例
GameplayCheatsVM gameplayCheatsVM = ...;
gameplayCheatsVM.OnFinalize();
```

### ExecuteClose
`public void ExecuteClose()`

**用途 / Purpose:** 执行 close 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 GameplayCheatsVM 实例
GameplayCheatsVM gameplayCheatsVM = ...;
gameplayCheatsVM.ExecuteClose();
```

### SetCloseInputKey
`public void SetCloseInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 close input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GameplayCheatsVM 实例
GameplayCheatsVM gameplayCheatsVM = ...;
gameplayCheatsVM.SetCloseInputKey(hotKey);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
GameplayCheatsVM gameplayCheatsVM = ...;
gameplayCheatsVM.RefreshValues();
```

## 参见

- [本区域目录](../)