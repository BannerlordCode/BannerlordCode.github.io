---
title: "DependedModule"
description: "DependedModule：TaleWorlds.ModuleManager 的 public 结构体；公开成员 5 个（方法 1、属性 3、字段 0）。源文件 TaleWorlds.ModuleManager/DependedModule.cs。"
---
# DependedModule

**Namespace:** `TaleWorlds.ModuleManager`
**Module:** `TaleWorlds.ModuleManager`
**Type:** `public struct DependedModule`
**File:** `TaleWorlds.ModuleManager/DependedModule.cs`

## 概述

DependedModule 位于 TaleWorlds.ModuleManager 模块，源文件 TaleWorlds.ModuleManager/DependedModule.cs。它是一个 public 结构体，继承链为 DependedModule。public/protected 成员共 5 个：1 方法、3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DependedModule 是 TaleWorlds.ModuleManager 的顶层类型，命名空间与模块目录一致，继承链 DependedModule。成员构成以属性为主（属性 3/5，方法 1/5），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.ModuleManager/DependedModule.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ModuleId` | `public string ModuleId` | 属性 |
| `Version` | `public ApplicationVersion Version` | 属性 |
| `IsOptional` | `public bool IsOptional` | 属性 |
| `DependedModule` | `public DependedModule(string moduleId, ApplicationVersion version, bool isOptional = false)` | 构造函数 |
| `UpdateVersionChangeSet` | `public void UpdateVersionChangeSet()` | 方法 |

## 参见

- [↑ modulemanager 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 Extensions](../Extensions)
- [同命名空间 IPlatformModuleExtension](../IPlatformModuleExtension)
- [同命名空间 ModuleCategory](../ModuleCategory)
- [同命名空间 ModuleHelper](../ModuleHelper)
