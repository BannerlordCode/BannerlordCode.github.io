---
title: "MPMatchmakingItemVM"
description: "MPMatchmakingItemVM 的自动生成类参考。"
---
# MPMatchmakingItemVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.OfficialGame
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPMatchmakingItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.OfficialGame/MPMatchmakingItemVM.cs`

## 概述

`MPMatchmakingItemVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.OfficialGame`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.OfficialGame` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; set; }` |
| `Type` | `public string Type { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `IsAvailable` | `public bool IsAvailable { get; set; }` |

## 主要方法

### MPMatchmakingItemVM
`public unsafe MPMatchmakingItemVM(MultiplayerGameType type)`

**用途 / Purpose:** **用途 / Purpose:** 调用 MPMatchmakingItemVM 对应的操作。

```csharp
// 先通过子系统 API 拿到 MPMatchmakingItemVM 实例
MPMatchmakingItemVM mPMatchmakingItemVM = ...;
var result = mPMatchmakingItemVM.MPMatchmakingItemVM(type);
```

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPMatchmakingItemVM 实例
MPMatchmakingItemVM mPMatchmakingItemVM = ...;
mPMatchmakingItemVM.RefreshValues();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPMatchmakingItemVM mPMatchmakingItemVM = ...;
mPMatchmakingItemVM.MPMatchmakingItemVM(type);
```

## 参见

- [本区域目录](../)