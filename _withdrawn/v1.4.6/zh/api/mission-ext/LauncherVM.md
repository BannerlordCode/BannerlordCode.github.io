---
title: "LauncherVM"
description: "LauncherVM：TaleWorlds.MountAndBlade.Launcher.Library 的 public 类，继承 ViewModel；公开成员 25 个（方法 3、属性 21、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.Launcher.Library/LauncherVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# LauncherVM

**Namespace:** `TaleWorlds.MountAndBlade.Launcher.Library`
**Module:** `TaleWorlds.MountAndBlade.Launcher.Library`
**Type:** `public class LauncherVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/LauncherVM.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

LauncherVM 位于 TaleWorlds.MountAndBlade.Launcher.Library 模块，源文件 TaleWorlds.MountAndBlade.Launcher.Library/LauncherVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 LauncherVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 25 个：3 方法、21 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：LauncherVM 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Launcher.Library`，继承链 LauncherVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 21/25，方法 3/25），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.Launcher.Library/LauncherVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GameTypeArgument` | `public string GameTypeArgument` | 属性 |
| `ContinueGameArgument` | `public string ContinueGameArgument` | 属性 |
| `LauncherVM` | `public LauncherVM(UserDataManager userDataManager, Action onClose, Action onMinimize)` | 构造函数 |
| `ExecuteStartGame` | `public void ExecuteStartGame(int mode)` | 方法 |
| `ExecuteClose` | `public void ExecuteClose()` | 方法 |
| `ExecuteMinimize` | `public void ExecuteMinimize()` | 方法 |
| `IsSingleplayer` | `public bool IsSingleplayer` | 属性 |
| `IsMultiplayer` | `public bool IsMultiplayer` | 属性 |
| `IsDigitalCompanion` | `public bool IsDigitalCompanion` | 属性 |
| `IsSingleplayerAvailable` | `public bool IsSingleplayerAvailable` | 属性 |
| `IsDigitalCompanionAvailable` | `public bool IsDigitalCompanionAvailable` | 属性 |
| `VersionText` | `public string VersionText` | 属性 |
| `News` | `public LauncherNewsVM News` | 属性 |
| `ConfirmStart` | `public LauncherConfirmStartVM ConfirmStart` | 属性 |
| `ModsData` | `public LauncherModsVM ModsData` | 属性 |
| `Hint` | `public LauncherInformationVM Hint` | 属性 |
| `PlayText` | `public string PlayText` | 属性 |
| `ContinueText` | `public string ContinueText` | 属性 |
| `LaunchText` | `public string LaunchText` | 属性 |
| `SingleplayerText` | `public string SingleplayerText` | 属性 |
| `DigitalCompanionText` | `public string DigitalCompanionText` | 属性 |
| `MultiplayerText` | `public string MultiplayerText` | 属性 |
| `NewsText` | `public string NewsText` | 属性 |
| `DlcText` | `public string DlcText` | 属性 |
| `ModsText` | `public string ModsText` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 DependentVersionMissmatchItem](../DependentVersionMissmatchItem/)
- [同命名空间 DLLResult](../DLLResult/)
- [同命名空间 LauncherConfirmStartVM](../LauncherConfirmStartVM/)
- [同命名空间 LauncherDebugManager](../LauncherDebugManager/)
