---
title: "LauncherModsVM"
description: "LauncherModsVM 的自动生成类参考。"
---
# LauncherModsVM

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LauncherModsVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/LauncherModsVM.cs`

## 概述

`LauncherModsVM` 位于 `TaleWorlds.MountAndBlade.Launcher.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Launcher.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ModuleListCode` | `public string ModuleListCode { get; }` |
| `IsDisabled` | `public bool IsDisabled { get; set; }` |
| `NameCategoryText` | `public string NameCategoryText { get; set; }` |
| `VersionCategoryText` | `public string VersionCategoryText { get; set; }` |
| `Modules` | `public MBBindingList<LauncherModuleVM> Modules { get; set; }` |

## 主要方法

### Refresh
`public void Refresh(bool isDisabled, bool isMultiplayer)`

**用途 / Purpose:** **用途 / Purpose:** 刷新当前对象的显示或缓存，使其与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 LauncherModsVM 实例
LauncherModsVM launcherModsVM = ...;
launcherModsVM.Refresh(false, false);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
LauncherModsVM launcherModsVM = ...;
launcherModsVM.Refresh(false, false);
```

## 参见

- [本区域目录](../)