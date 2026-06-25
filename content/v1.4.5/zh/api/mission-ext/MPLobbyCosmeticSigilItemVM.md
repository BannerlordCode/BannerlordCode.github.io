---
title: "MPLobbyCosmeticSigilItemVM"
description: "MPLobbyCosmeticSigilItemVM 的自动生成类参考。"
---
# MPLobbyCosmeticSigilItemVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyCosmeticSigilItemVM : MPLobbySigilItemVM`
**Base:** `MPLobbySigilItemVM`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby/MPLobbyCosmeticSigilItemVM.cs`

## 概述

`MPLobbyCosmeticSigilItemVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsUnlocked` | `public bool IsUnlocked { get; set; }` |
| `IsUsed` | `public bool IsUsed { get; set; }` |
| `Rarity` | `public int Rarity { get; set; }` |
| `Cost` | `public int Cost { get; set; }` |

## 主要方法

### SetOnSelectionCallback
`public static void SetOnSelectionCallback(Action<MPLobbyCosmeticSigilItemVM> onSelection)`

**用途 / Purpose:** 为 「on selection callback」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
MPLobbyCosmeticSigilItemVM.SetOnSelectionCallback(onSelection);
```

### ResetOnSelectionCallback
`public static void ResetOnSelectionCallback()`

**用途 / Purpose:** 将 「on selection callback」 重置回默认或初始状态。

```csharp
// 静态调用，不需要实例
MPLobbyCosmeticSigilItemVM.ResetOnSelectionCallback();
```

### SetOnObtainRequestedCallback
`public static void SetOnObtainRequestedCallback(Action<MPLobbyCosmeticSigilItemVM> onObtainRequested)`

**用途 / Purpose:** 为 「on obtain requested callback」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
MPLobbyCosmeticSigilItemVM.SetOnObtainRequestedCallback(onObtainRequested);
```

### ResetOnObtainRequestedCallback
`public static void ResetOnObtainRequestedCallback()`

**用途 / Purpose:** 将 「on obtain requested callback」 重置回默认或初始状态。

```csharp
// 静态调用，不需要实例
MPLobbyCosmeticSigilItemVM.ResetOnObtainRequestedCallback();
```

## 使用示例

```csharp
MPLobbyCosmeticSigilItemVM.SetOnSelectionCallback(onSelection);
```

## 参见

- [本区域目录](../)