---
title: "NativeMessageBox"
description: "NativeMessageBox：TaleWorlds.MountAndBlade.Launcher.Library 的 public 类；公开成员 7 个（方法 1、属性 3、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.Launcher.Library/NativeMessageBox.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# NativeMessageBox

**Namespace:** `TaleWorlds.MountAndBlade.Launcher.Library`
**Module:** `TaleWorlds.MountAndBlade.Launcher.Library`
**Type:** `public static class NativeMessageBox`
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/NativeMessageBox.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

NativeMessageBox 位于 TaleWorlds.MountAndBlade.Launcher.Library 模块，源文件 TaleWorlds.MountAndBlade.Launcher.Library/NativeMessageBox.cs。它是一个 public 类，继承链为 NativeMessageBox。public/protected 成员共 7 个：1 方法、3 属性、3 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：NativeMessageBox 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Launcher.Library`，继承链 NativeMessageBox。成员构成以属性为主（属性 3/7，方法 1/7），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.Launcher.Library/NativeMessageBox.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Show` | `public static NativeMessageBox.Result Show(string text, string caption = " ", NativeMessageBox.Buttons buttons = NativeMessageBox.Buttons.OK, NativeMessageBox.Icon icon = NativeMessageBox.Icon.None)` | 方法 |
| `uint` | `public enum Buttons : uint` | 属性 |
| `uint` | `public enum Icon : uint` | 属性 |
| `Result` | `public enum Result` | 属性 |
| `uint` | `public enum Buttons : uint` | 嵌套类型 |
| `uint` | `public enum Icon : uint` | 嵌套类型 |
| `Result` | `public enum Result` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 DependentVersionMissmatchItem](../DependentVersionMissmatchItem/)
- [同命名空间 DLLResult](../DLLResult/)
- [同命名空间 LauncherConfirmStartVM](../LauncherConfirmStartVM/)
- [同命名空间 LauncherDebugManager](../LauncherDebugManager/)
