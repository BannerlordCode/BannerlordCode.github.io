---
title: "LauncherUI"
description: "LauncherUI：TaleWorlds.MountAndBlade.Launcher.Library 的 public 类；公开成员 12 个（方法 7、属性 2、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.Launcher.Library/LauncherUI.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# LauncherUI

**Namespace:** `TaleWorlds.MountAndBlade.Launcher.Library`
**Module:** `TaleWorlds.MountAndBlade.Launcher.Library`
**Type:** `public class LauncherUI`
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/LauncherUI.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

LauncherUI 位于 TaleWorlds.MountAndBlade.Launcher.Library 模块，源文件 TaleWorlds.MountAndBlade.Launcher.Library/LauncherUI.cs。它是一个 public 类，继承链为 LauncherUI。public/protected 成员共 12 个：7 方法、2 属性、2 事件、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：LauncherUI 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Launcher.Library`，继承链 LauncherUI。成员构成以方法为主（方法 7/12，属性 2/12），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.Launcher.Library/LauncherUI.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Action` | `public static event Action<string>OnAddHintInformation;` | 事件 |
| `OnHideHintInformation;` | `public static event Action OnHideHintInformation;` | 事件 |
| `HasUnofficialModulesSelected` | `public bool HasUnofficialModulesSelected` | 属性 |
| `LauncherUI` | `public LauncherUI(UserDataManager userDataManager, UIContext context, Action onClose, Action onMinimize)` | 构造函数 |
| `Initialize` | `public void Initialize()` | 方法 |
| `OnFinalize` | `public void OnFinalize()` | 方法 |
| `AdditionalArgs` | `public string AdditionalArgs` | 属性 |
| `Update` | `public void Update()` | 方法 |
| `CheckMouseOverWindowDragArea` | `public bool CheckMouseOverWindowDragArea()` | 方法 |
| `HitTest` | `public bool HitTest()` | 方法 |
| `AddHintInformation` | `public static void AddHintInformation(string message)` | 方法 |
| `HideHintInformation` | `public static void HideHintInformation()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 DependentVersionMissmatchItem](../DependentVersionMissmatchItem/)
- [同命名空间 DLLResult](../DLLResult/)
- [同命名空间 LauncherConfirmStartVM](../LauncherConfirmStartVM/)
- [同命名空间 LauncherDebugManager](../LauncherDebugManager/)
