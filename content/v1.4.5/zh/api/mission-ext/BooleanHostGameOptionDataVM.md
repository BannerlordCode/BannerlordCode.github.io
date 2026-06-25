---
title: "BooleanHostGameOptionDataVM"
description: "BooleanHostGameOptionDataVM 的自动生成类参考。"
---
# BooleanHostGameOptionDataVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.HostGame.HostGameOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BooleanHostGameOptionDataVM : GenericHostGameOptionDataVM`
**Base:** `GenericHostGameOptionDataVM`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.HostGame.HostGameOptions/BooleanHostGameOptionDataVM.cs`

## 概述

`BooleanHostGameOptionDataVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.HostGame.HostGameOptions`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.HostGame.HostGameOptions` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsSelected` | `public bool IsSelected { get; set; }` |

## 主要方法

### RefreshData
`public override void RefreshData()`

**用途 / Purpose:** 使 data 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 BooleanHostGameOptionDataVM 实例
BooleanHostGameOptionDataVM booleanHostGameOptionDataVM = ...;
booleanHostGameOptionDataVM.RefreshData();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
BooleanHostGameOptionDataVM booleanHostGameOptionDataVM = ...;
booleanHostGameOptionDataVM.RefreshData();
```

## 参见

- [本区域目录](../)