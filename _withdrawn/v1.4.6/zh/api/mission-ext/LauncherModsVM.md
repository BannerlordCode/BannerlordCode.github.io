---
title: "LauncherModsVM"
description: "LauncherModsVM：TaleWorlds.MountAndBlade.Launcher.Library 的 public 类，继承 ViewModel；公开成员 7 个（方法 1、属性 5、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.Launcher.Library/LauncherModsVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# LauncherModsVM

**Namespace:** `TaleWorlds.MountAndBlade.Launcher.Library`
**Module:** `TaleWorlds.MountAndBlade.Launcher.Library`
**Type:** `public class LauncherModsVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/LauncherModsVM.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

LauncherModsVM 位于 TaleWorlds.MountAndBlade.Launcher.Library 模块，源文件 TaleWorlds.MountAndBlade.Launcher.Library/LauncherModsVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 LauncherModsVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 7 个：1 方法、5 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：LauncherModsVM 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Launcher.Library`，继承链 LauncherModsVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 5/7，方法 1/7），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.Launcher.Library/LauncherModsVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `LauncherModsVM` | `public LauncherModsVM(UserDataManager userDataManager)` | 构造函数 |
| `Refresh` | `public void Refresh(bool isDisabled, bool isMultiplayer)` | 方法 |
| `ModuleListCode` | `public string ModuleListCode` | 属性 |
| `IsDisabled` | `public bool IsDisabled` | 属性 |
| `NameCategoryText` | `public string NameCategoryText` | 属性 |
| `VersionCategoryText` | `public string VersionCategoryText` | 属性 |
| `MBBindingList` | `public MBBindingList<LauncherModuleVM>Modules` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 DependentVersionMissmatchItem](../DependentVersionMissmatchItem/)
- [同命名空间 DLLResult](../DLLResult/)
- [同命名空间 LauncherConfirmStartVM](../LauncherConfirmStartVM/)
- [同命名空间 LauncherDebugManager](../LauncherDebugManager/)
