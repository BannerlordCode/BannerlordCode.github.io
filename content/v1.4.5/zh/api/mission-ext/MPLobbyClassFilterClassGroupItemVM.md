---
title: "MPLobbyClassFilterClassGroupItemVM"
description: "MPLobbyClassFilterClassGroupItemVM 的自动生成类参考。"
---
# MPLobbyClassFilterClassGroupItemVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.ClassFilter
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyClassFilterClassGroupItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.ClassFilter/MPLobbyClassFilterClassGroupItemVM.cs`

## 概述

`MPLobbyClassFilterClassGroupItemVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.ClassFilter`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.ClassFilter` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ClassGroup` | `public MPHeroClassGroup ClassGroup { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `Classes` | `public MBBindingList<MPLobbyClassFilterClassItemVM> Classes { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPLobbyClassFilterClassGroupItemVM 实例
MPLobbyClassFilterClassGroupItemVM mPLobbyClassFilterClassGroupItemVM = ...;
mPLobbyClassFilterClassGroupItemVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyClassFilterClassGroupItemVM 实例
MPLobbyClassFilterClassGroupItemVM mPLobbyClassFilterClassGroupItemVM = ...;
mPLobbyClassFilterClassGroupItemVM.OnFinalize();
```

### AddClass
`public void AddClass(BasicCultureObject culture, MPHeroClass heroClass, Action<MPLobbyClassFilterClassItemVM> onSelect)`

**用途 / Purpose:** 将 「class」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MPLobbyClassFilterClassGroupItemVM 实例
MPLobbyClassFilterClassGroupItemVM mPLobbyClassFilterClassGroupItemVM = ...;
mPLobbyClassFilterClassGroupItemVM.AddClass(culture, heroClass, onSelect);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPLobbyClassFilterClassGroupItemVM mPLobbyClassFilterClassGroupItemVM = ...;
mPLobbyClassFilterClassGroupItemVM.RefreshValues();
```

## 参见

- [本区域目录](../)