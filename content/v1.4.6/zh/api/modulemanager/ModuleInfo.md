---
title: "ModuleInfo"
description: "ModuleInfo：TaleWorlds.ModuleManager 的 public 类；公开成员 19 个（方法 4、属性 14、字段 0）。源文件 TaleWorlds.ModuleManager/ModuleInfo.cs。"
---
# ModuleInfo

**Namespace:** `TaleWorlds.ModuleManager`
**Module:** `TaleWorlds.ModuleManager`
**Type:** `public class ModuleInfo`
**File:** `TaleWorlds.ModuleManager/ModuleInfo.cs`

## 概述

ModuleInfo 位于 TaleWorlds.ModuleManager 模块，源文件 TaleWorlds.ModuleManager/ModuleInfo.cs。它是一个 public 类，继承链为 ModuleInfo。public/protected 成员共 19 个：4 方法、14 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ModuleInfo 是 TaleWorlds.ModuleManager 的顶层类型，命名空间与模块目录一致，继承链 ModuleInfo。成员构成以属性为主（属性 14/19，方法 4/19），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.ModuleManager/ModuleInfo.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsSelected` | `public bool IsSelected` | 属性 |
| `Id` | `public string Id` | 属性 |
| `Name` | `public string Name` | 属性 |
| `IsOfficial` | `public bool IsOfficial` | 属性 |
| `IsDefault` | `public bool IsDefault` | 属性 |
| `IsRequiredOfficial` | `public bool IsRequiredOfficial` | 属性 |
| `IsActive` | `public bool IsActive` | 属性 |
| `Version` | `public ApplicationVersion Version` | 属性 |
| `RequiredBaseVersion` | `public ApplicationVersion RequiredBaseVersion` | 属性 |
| `Category` | `public ModuleCategory Category` | 属性 |
| `FolderPath` | `public string FolderPath` | 属性 |
| `Type` | `public ModuleType Type` | 属性 |
| `HasMultiplayerCategory` | `public bool HasMultiplayerCategory` | 属性 |
| `IsNative` | `public bool IsNative` | 属性 |
| `ModuleInfo` | `public ModuleInfo()` | 构造函数 |
| `LoadWithFullPath` | `public void LoadWithFullPath(string fullPath)` | 方法 |
| `ActivateModule` | `public void ActivateModule()` | 方法 |
| `DeactivateModule` | `public void DeactivateModule()` | 方法 |
| `UpdateVersionChangeSet` | `public void UpdateVersionChangeSet()` | 方法 |

## 参见

- [↑ modulemanager 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 DependedModule](../DependedModule)
- [同命名空间 Extensions](../Extensions)
- [同命名空间 IPlatformModuleExtension](../IPlatformModuleExtension)
- [同命名空间 ModuleCategory](../ModuleCategory)
