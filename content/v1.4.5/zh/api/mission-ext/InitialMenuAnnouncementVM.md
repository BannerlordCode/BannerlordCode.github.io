---
title: "InitialMenuAnnouncementVM"
description: "InitialMenuAnnouncementVM 的自动生成类参考。"
---
# InitialMenuAnnouncementVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.InitialMenu
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class InitialMenuAnnouncementVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.InitialMenu/InitialMenuAnnouncementVM.cs`

## 概述

`InitialMenuAnnouncementVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.InitialMenu`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.InitialMenu` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ImageUrl` | `public string ImageUrl { get; set; }` |
| `LinkUrl` | `public string LinkUrl { get; set; }` |
| `ExcludedModules` | `public List<string> ExcludedModules { get; set; }` |
| `IsVisible` | `public bool IsVisible { get; set; }` |
| `IsLinkAvailable` | `public bool IsLinkAvailable { get; set; }` |
| `ImageSourcePath` | `public string ImageSourcePath { get; set; }` |

## 主要方法

### Tick
`public void Tick()`

**用途 / Purpose:** **用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 InitialMenuAnnouncementVM 实例
InitialMenuAnnouncementVM initialMenuAnnouncementVM = ...;
initialMenuAnnouncementVM.Tick();
```

### Refresh
`public void Refresh()`

**用途 / Purpose:** **用途 / Purpose:** 刷新当前对象的显示或缓存，使其与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 InitialMenuAnnouncementVM 实例
InitialMenuAnnouncementVM initialMenuAnnouncementVM = ...;
initialMenuAnnouncementVM.Refresh();
```

### ExecuteNavigateToLink
`public void ExecuteNavigateToLink()`

**用途 / Purpose:** **用途 / Purpose:** 执行 navigate to link 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 InitialMenuAnnouncementVM 实例
InitialMenuAnnouncementVM initialMenuAnnouncementVM = ...;
initialMenuAnnouncementVM.ExecuteNavigateToLink();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
InitialMenuAnnouncementVM initialMenuAnnouncementVM = ...;
initialMenuAnnouncementVM.Tick();
```

## 参见

- [本区域目录](../)