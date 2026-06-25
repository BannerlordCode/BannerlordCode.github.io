---
title: "MPLobbyCosmeticSigilItemVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPLobbyCosmeticSigilItemVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyCosmeticSigilItemVM

**命名空间:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby
**模块:** TaleWorlds.MountAndBlade
**类型:** `public class MPLobbyCosmeticSigilItemVM : MPLobbySigilItemVM`
**Base:** `MPLobbySigilItemVM`
**领域:** mission-ext

## 概述

`MPLobbyCosmeticSigilItemVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

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

**用途 / Purpose:** 设置 `on selection callback` 的值或状态。

### ResetOnSelectionCallback
`public static void ResetOnSelectionCallback()`

**用途 / Purpose:** 将 `on selection callback` 重置为初始状态。

### SetOnObtainRequestedCallback
`public static void SetOnObtainRequestedCallback(Action<MPLobbyCosmeticSigilItemVM> onObtainRequested)`

**用途 / Purpose:** 设置 `on obtain requested callback` 的值或状态。

### ResetOnObtainRequestedCallback
`public static void ResetOnObtainRequestedCallback()`

**用途 / Purpose:** 将 `on obtain requested callback` 重置为初始状态。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
MPLobbyCosmeticSigilItemVM.SetOnSelectionCallback(onSelection);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
