---
title: "StandaloneUIDomain"
description: "StandaloneUIDomain：TaleWorlds.MountAndBlade.Launcher.Library 的 public 类，继承 FrameworkDomain；公开成员 6 个（方法 2、属性 3、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.Launcher.Library/StandaloneUIDomain.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# StandaloneUIDomain

**Namespace:** `TaleWorlds.MountAndBlade.Launcher.Library`
**Module:** `TaleWorlds.MountAndBlade.Launcher.Library`
**Type:** `public class StandaloneUIDomain : FrameworkDomain`
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/StandaloneUIDomain.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

StandaloneUIDomain 位于 TaleWorlds.MountAndBlade.Launcher.Library 模块，源文件 TaleWorlds.MountAndBlade.Launcher.Library/StandaloneUIDomain.cs。它是一个 public 类，实现/继承 FrameworkDomain，继承链为 StandaloneUIDomain → FrameworkDomain。public/protected 成员共 6 个：2 方法、3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：StandaloneUIDomain 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Launcher.Library`，继承链 StandaloneUIDomain → FrameworkDomain。成员构成以属性为主（属性 3/6，方法 2/6），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.Launcher.Library/StandaloneUIDomain.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `UserDataManager` | `public UserDataManager UserDataManager` | 属性 |
| `StandaloneUIDomain` | `public StandaloneUIDomain(GraphicsForm graphicsForm, ResourceDepot resourceDepot)` | 构造函数 |
| `Update` | `public override void Update()` | 方法 |
| `AdditionalArgs` | `public string AdditionalArgs` | 属性 |
| `HasUnofficialModulesSelected` | `public bool HasUnofficialModulesSelected` | 属性 |
| `Destroy` | `public override void Destroy()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 FrameworkDomain](../../gui/FrameworkDomain/)
- [同命名空间 DependentVersionMissmatchItem](../DependentVersionMissmatchItem/)
- [同命名空间 DLLResult](../DLLResult/)
- [同命名空间 LauncherConfirmStartVM](../LauncherConfirmStartVM/)
- [同命名空间 LauncherDebugManager](../LauncherDebugManager/)
