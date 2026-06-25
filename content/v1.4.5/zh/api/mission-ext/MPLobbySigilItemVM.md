---
title: "MPLobbySigilItemVM"
description: "MPLobbySigilItemVM 的自动生成类参考。"
---
# MPLobbySigilItemVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbySigilItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby/MPLobbySigilItemVM.cs`

## 概述

`MPLobbySigilItemVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IconID` | `public int IconID { get; }` |
| `IconPath` | `public string IconPath { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |

## 主要方法

### RefreshWith
`public void RefreshWith(int iconID)`

**用途 / Purpose:** **用途 / Purpose:** 使 with 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPLobbySigilItemVM 实例
MPLobbySigilItemVM mPLobbySigilItemVM = ...;
mPLobbySigilItemVM.RefreshWith(0);
```

### RefreshWith
`public void RefreshWith(Banner banner)`

**用途 / Purpose:** **用途 / Purpose:** 使 with 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPLobbySigilItemVM 实例
MPLobbySigilItemVM mPLobbySigilItemVM = ...;
mPLobbySigilItemVM.RefreshWith(banner);
```

### RefreshWith
`public void RefreshWith(string bannerCode)`

**用途 / Purpose:** **用途 / Purpose:** 使 with 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPLobbySigilItemVM 实例
MPLobbySigilItemVM mPLobbySigilItemVM = ...;
mPLobbySigilItemVM.RefreshWith("example");
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPLobbySigilItemVM mPLobbySigilItemVM = ...;
mPLobbySigilItemVM.RefreshWith(0);
```

## 参见

- [本区域目录](../)