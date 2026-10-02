---
title: "IPlatformModuleExtension"
description: "IPlatformModuleExtension：TaleWorlds.ModuleManager 的 public 接口；公开成员 5 个（方法 5、属性 0、字段 0）。源文件 TaleWorlds.ModuleManager/IPlatformModuleExtension.cs。"
---
# IPlatformModuleExtension

**Namespace:** `TaleWorlds.ModuleManager`
**Module:** `TaleWorlds.ModuleManager`
**Type:** `public interface IPlatformModuleExtension`
**File:** `TaleWorlds.ModuleManager/IPlatformModuleExtension.cs`

## 概述

IPlatformModuleExtension 位于 TaleWorlds.ModuleManager 模块，源文件 TaleWorlds.ModuleManager/IPlatformModuleExtension.cs。它是一个 public 接口，继承链为 IPlatformModuleExtension。public/protected 成员共 5 个：5 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：IPlatformModuleExtension 是 TaleWorlds.ModuleManager 的顶层类型，命名空间与模块目录一致，继承链 IPlatformModuleExtension。成员构成以方法为主（方法 5/5，属性 0/5），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.ModuleManager/IPlatformModuleExtension.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Initialize` | `void Initialize(List<string>args);` | 方法 |
| `Destroy` | `void Destroy();` | 方法 |
| `string[]GetModulePaths` | `string[]GetModulePaths();` | 方法 |
| `SetLauncherMode` | `void SetLauncherMode(bool isLauncherModeActive);` | 方法 |
| `CheckEntitlement` | `bool CheckEntitlement(string title);` | 方法 |

## 参见

- [↑ modulemanager 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 DependedModule](../DependedModule)
- [同命名空间 Extensions](../Extensions)
- [同命名空间 ModuleCategory](../ModuleCategory)
- [同命名空间 ModuleHelper](../ModuleHelper)
