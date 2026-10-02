---
title: "ManagedScriptComponent"
description: "ManagedScriptComponent：TaleWorlds.Engine 的 public 类，继承 ScriptComponent；公开成员 3 个（方法 2、属性 1、字段 0）。源文件 TaleWorlds.Engine/ManagedScriptComponent.cs。"
---
# ManagedScriptComponent

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public sealed class ManagedScriptComponent : ScriptComponent`
**File:** `TaleWorlds.Engine/ManagedScriptComponent.cs`

## 概述

ManagedScriptComponent 位于 TaleWorlds.Engine 模块，源文件 TaleWorlds.Engine/ManagedScriptComponent.cs。它是一个 public 类（sealed），实现/继承 ScriptComponent，继承链为 ManagedScriptComponent → ScriptComponent → NativeObject。public/protected 成员共 3 个：2 方法、1 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ManagedScriptComponent 是 TaleWorlds.Engine 的顶层类型，命名空间与模块目录一致，继承链 ManagedScriptComponent → ScriptComponent → NativeObject。成员构成以方法为主（方法 2/3，属性 1/3），对外主要以操作入口暴露。继承链上的 NativeObject 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Engine/ManagedScriptComponent.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ScriptComponentBehavior` | `public ScriptComponentBehavior ScriptComponentBehavior` | 属性 |
| `SetVariableEditorWidgetStatus` | `public void SetVariableEditorWidgetStatus(string field, bool enabled)` | 方法 |
| `SetVariableEditorWidgetValue` | `public void SetVariableEditorWidgetValue(string field, RglScriptFieldType fieldType, double value)` | 方法 |

## 参见

- [↑ engine 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 ScriptComponent](../ScriptComponent)
- [同命名空间 AnimResult](../AnimResult)
- [同命名空间 ApplicationHealthChecker](../ApplicationHealthChecker)
- [同命名空间 AsyncTask](../AsyncTask)
- [同命名空间 BillboardType](../BillboardType)
