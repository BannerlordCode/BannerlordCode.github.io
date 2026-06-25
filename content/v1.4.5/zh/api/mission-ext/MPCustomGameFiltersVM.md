---
title: "MPCustomGameFiltersVM"
description: "MPCustomGameFiltersVM 的自动生成类参考。"
---
# MPCustomGameFiltersVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.CustomGame
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPCustomGameFiltersVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.CustomGame/MPCustomGameFiltersVM.cs`

## 概述

`MPCustomGameFiltersVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.CustomGame`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.CustomGame` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `TitleText` | `public string TitleText { get; set; }` |
| `SearchInitialText` | `public string SearchInitialText { get; set; }` |
| `SearchText` | `public string SearchText { get; set; }` |
| `Items` | `public MBBindingList<MPCustomGameFilterItemVM> Items { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPCustomGameFiltersVM 实例
MPCustomGameFiltersVM mPCustomGameFiltersVM = ...;
mPCustomGameFiltersVM.RefreshValues();
```

### GetFilteredServerList
`public List<GameServerEntry> GetFilteredServerList(IEnumerable<GameServerEntry> unfilteredList)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 filtered server list 的结果。

```csharp
// 先通过子系统 API 拿到 MPCustomGameFiltersVM 实例
MPCustomGameFiltersVM mPCustomGameFiltersVM = ...;
var result = mPCustomGameFiltersVM.GetFilteredServerList(unfilteredList);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPCustomGameFiltersVM mPCustomGameFiltersVM = ...;
mPCustomGameFiltersVM.RefreshValues();
```

## 参见

- [本区域目录](../)