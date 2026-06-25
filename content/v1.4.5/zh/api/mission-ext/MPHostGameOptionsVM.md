---
title: "MPHostGameOptionsVM"
description: "MPHostGameOptionsVM 的自动生成类参考。"
---
# MPHostGameOptionsVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.HostGame
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPHostGameOptionsVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.HostGame/MPHostGameOptionsVM.cs`

## 概述

`MPHostGameOptionsVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.HostGame`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.HostGame` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `GeneralOptions` | `public MBBindingList<GenericHostGameOptionDataVM> GeneralOptions { get; set; }` |
| `IsRefreshed` | `public bool IsRefreshed { get; set; }` |
| `IsInMission` | `public bool IsInMission { get; set; }` |

## 主要方法

### Compare
`public int Compare(GenericHostGameOptionDataVM x, GenericHostGameOptionDataVM y)`

**用途 / Purpose:** **用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 MPHostGameOptionsVM 实例
MPHostGameOptionsVM mPHostGameOptionsVM = ...;
var result = mPHostGameOptionsVM.Compare(x, y);
```

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPHostGameOptionsVM 实例
MPHostGameOptionsVM mPHostGameOptionsVM = ...;
mPHostGameOptionsVM.RefreshValues();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPHostGameOptionsVM mPHostGameOptionsVM = ...;
mPHostGameOptionsVM.Compare(x, y);
```

## 参见

- [本区域目录](../)