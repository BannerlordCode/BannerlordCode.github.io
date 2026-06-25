---
title: "GameKeyOptionVM"
description: "GameKeyOptionVM 的自动生成类参考。"
---
# GameKeyOptionVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GameKeys
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GameKeyOptionVM : KeyOptionVM`
**Base:** `KeyOptionVM`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GameKeys/GameKeyOptionVM.cs`

## 概述

`GameKeyOptionVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GameKeys`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GameKeys` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CurrentGameKey` | `public GameKey CurrentGameKey { get; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 GameKeyOptionVM 实例
GameKeyOptionVM gameKeyOptionVM = ...;
gameKeyOptionVM.RefreshValues();
```

### Set
`public override void Set(InputKey newKey)`

**用途 / Purpose:** **用途 / Purpose:** 为当前对象的属性或状态赋新值。

```csharp
// 先通过子系统 API 拿到 GameKeyOptionVM 实例
GameKeyOptionVM gameKeyOptionVM = ...;
gameKeyOptionVM.Set(newKey);
```

### Update
`public override void Update()`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新当前对象的最新表示。

```csharp
// 先通过子系统 API 拿到 GameKeyOptionVM 实例
GameKeyOptionVM gameKeyOptionVM = ...;
gameKeyOptionVM.Update();
```

### OnDone
`public override void OnDone()`

**用途 / Purpose:** **用途 / Purpose:** 在 done 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GameKeyOptionVM 实例
GameKeyOptionVM gameKeyOptionVM = ...;
gameKeyOptionVM.OnDone();
```

### ExecuteRevert
`public override void ExecuteRevert()`

**用途 / Purpose:** **用途 / Purpose:** 执行 revert 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 GameKeyOptionVM 实例
GameKeyOptionVM gameKeyOptionVM = ...;
gameKeyOptionVM.ExecuteRevert();
```

### Apply
`public void Apply()`

**用途 / Purpose:** **用途 / Purpose:** 将当前对象的效果应用到目标。

```csharp
// 先通过子系统 API 拿到 GameKeyOptionVM 实例
GameKeyOptionVM gameKeyOptionVM = ...;
gameKeyOptionVM.Apply();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
GameKeyOptionVM gameKeyOptionVM = ...;
gameKeyOptionVM.RefreshValues();
```

## 参见

- [本区域目录](../)