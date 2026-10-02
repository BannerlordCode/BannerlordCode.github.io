---
title: "LauncherDLLData"
description: "LauncherDLLData：TaleWorlds.MountAndBlade.Launcher.Library 的 public 类；公开成员 8 个（方法 3、属性 4、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.Launcher.Library/LauncherDLLData.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# LauncherDLLData

**Namespace:** `TaleWorlds.MountAndBlade.Launcher.Library`
**Module:** `TaleWorlds.MountAndBlade.Launcher.Library`
**Type:** `public class LauncherDLLData`
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/LauncherDLLData.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

LauncherDLLData 位于 TaleWorlds.MountAndBlade.Launcher.Library 模块，源文件 TaleWorlds.MountAndBlade.Launcher.Library/LauncherDLLData.cs。它是一个 public 类，继承链为 LauncherDLLData。public/protected 成员共 8 个：3 方法、4 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：LauncherDLLData 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Launcher.Library`，继承链 LauncherDLLData。成员构成以属性为主（属性 4/8，方法 3/8），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.Launcher.Library/LauncherDLLData.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SubModule` | `public SubModuleInfo SubModule` | 属性 |
| `IsDangerous` | `public bool IsDangerous` | 属性 |
| `VerifyInformation` | `public string VerifyInformation` | 属性 |
| `Size` | `public uint Size` | 属性 |
| `LauncherDLLData` | `public LauncherDLLData(SubModuleInfo subModule, bool isDangerous, string verifyInformation, uint size)` | 构造函数 |
| `SetIsDLLDangerous` | `public void SetIsDLLDangerous(bool isDangerous)` | 方法 |
| `SetDLLSize` | `public void SetDLLSize(uint size)` | 方法 |
| `SetDLLVerifyInformation` | `public void SetDLLVerifyInformation(string info)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 DependentVersionMissmatchItem](../DependentVersionMissmatchItem/)
- [同命名空间 DLLResult](../DLLResult/)
- [同命名空间 LauncherConfirmStartVM](../LauncherConfirmStartVM/)
- [同命名空间 LauncherDebugManager](../LauncherDebugManager/)
