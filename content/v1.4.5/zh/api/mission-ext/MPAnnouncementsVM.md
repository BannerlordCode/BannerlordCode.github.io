---
title: "MPAnnouncementsVM"
description: "MPAnnouncementsVM 的自动生成类参考。"
---
# MPAnnouncementsVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Home
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPAnnouncementsVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Home/MPAnnouncementsVM.cs`

## 概述

`MPAnnouncementsVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Home`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Home` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `HasValidAnnouncements` | `public bool HasValidAnnouncements { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `AnnouncementList` | `public MBBindingList<MPAnnouncementItemVM> AnnouncementList { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPAnnouncementsVM 实例
MPAnnouncementsVM mPAnnouncementsVM = ...;
mPAnnouncementsVM.RefreshValues();
```

### OnTick
`public void OnTick(float dt)`

**用途 / Purpose:** 在 tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPAnnouncementsVM 实例
MPAnnouncementsVM mPAnnouncementsVM = ...;
mPAnnouncementsVM.OnTick(0);
```

### UpdateAnnouncements
`public async void UpdateAnnouncements()`

**用途 / Purpose:** 重新计算并更新 announcements 的最新表示。

```csharp
// 先通过子系统 API 拿到 MPAnnouncementsVM 实例
MPAnnouncementsVM mPAnnouncementsVM = ...;
mPAnnouncementsVM.UpdateAnnouncements();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPAnnouncementsVM mPAnnouncementsVM = ...;
mPAnnouncementsVM.RefreshValues();
```

## 参见

- [本区域目录](../)