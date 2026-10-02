---
title: "LauncherConfirmStartVM"
description: "LauncherConfirmStartVM：TaleWorlds.MountAndBlade.Launcher.Library 的 public 类，继承 ViewModel；公开成员 5 个（方法 1、属性 3、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.Launcher.Library/LauncherConfirmStartVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# LauncherConfirmStartVM

**Namespace:** `TaleWorlds.MountAndBlade.Launcher.Library`
**Module:** `TaleWorlds.MountAndBlade.Launcher.Library`
**Type:** `public class LauncherConfirmStartVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/LauncherConfirmStartVM.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

LauncherConfirmStartVM 位于 TaleWorlds.MountAndBlade.Launcher.Library 模块，源文件 TaleWorlds.MountAndBlade.Launcher.Library/LauncherConfirmStartVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 LauncherConfirmStartVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 5 个：1 方法、3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：LauncherConfirmStartVM 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Launcher.Library`，继承链 LauncherConfirmStartVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 3/5，方法 1/5），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.Launcher.Library/LauncherConfirmStartVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `LauncherConfirmStartVM` | `public LauncherConfirmStartVM(Action onConfirm)` | 构造函数 |
| `EnableWith` | `public void EnableWith(List<SubModuleInfo>unverifiedSubModules, List<DependentVersionMissmatchItem>missmatchedDependentModules)` | 方法 |
| `IsEnabled` | `public bool IsEnabled` | 属性 |
| `Description` | `public string Description` | 属性 |
| `Title` | `public string Title` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 DependentVersionMissmatchItem](../DependentVersionMissmatchItem/)
- [同命名空间 DLLResult](../DLLResult/)
- [同命名空间 LauncherDebugManager](../LauncherDebugManager/)
- [同命名空间 LauncherDLLData](../LauncherDLLData/)
