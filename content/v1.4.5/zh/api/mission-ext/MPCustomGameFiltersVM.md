---
title: "MPCustomGameFiltersVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPCustomGameFiltersVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MPCustomGameFiltersVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.CustomGame
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPCustomGameFiltersVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.CustomGame/MPCustomGameFiltersVM.cs`

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

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### GetFilteredServerList
`public List<GameServerEntry> GetFilteredServerList(IEnumerable<GameServerEntry> unfilteredList)`

**用途 / Purpose:** 获取 `filtered server list` 的当前值。

## 使用示例

```csharp
var value = new MPCustomGameFiltersVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)