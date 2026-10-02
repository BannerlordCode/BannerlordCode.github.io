---
title: "WidgetAttributeContext"
description: "WidgetAttributeContext：TaleWorlds.GauntletUI.PrefabSystem 的 public 类；公开成员 7 个（方法 4、属性 2、字段 0）。源文件 TaleWorlds.GauntletUI.PrefabSystem/WidgetAttributeContext.cs。"
---
# WidgetAttributeContext

**Namespace:** `TaleWorlds.GauntletUI.PrefabSystem`
**Module:** `TaleWorlds.GauntletUI.PrefabSystem`
**Type:** `public class WidgetAttributeContext`
**File:** `TaleWorlds.GauntletUI.PrefabSystem/WidgetAttributeContext.cs`

## 概述

WidgetAttributeContext 位于 TaleWorlds.GauntletUI.PrefabSystem 模块，源文件 TaleWorlds.GauntletUI.PrefabSystem/WidgetAttributeContext.cs。它是一个 public 类，继承链为 WidgetAttributeContext。public/protected 成员共 7 个：4 方法、2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：WidgetAttributeContext 是 TaleWorlds.GauntletUI.PrefabSystem 的顶层类型，命名空间与模块目录一致，继承链 WidgetAttributeContext。成员构成以方法为主（方法 4/7，属性 2/7），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI.PrefabSystem/WidgetAttributeContext.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IEnumerable` | `public IEnumerable<WidgetAttributeKeyType>RegisteredKeyTypes` | 属性 |
| `IEnumerable` | `public IEnumerable<WidgetAttributeValueType>RegisteredValueTypes` | 属性 |
| `WidgetAttributeContext` | `public WidgetAttributeContext()` | 构造函数 |
| `RegisterKeyType` | `public void RegisterKeyType(WidgetAttributeKeyType keyType)` | 方法 |
| `RegisterValueType` | `public void RegisterValueType(WidgetAttributeValueType valueType)` | 方法 |
| `GetKeyType` | `public WidgetAttributeKeyType GetKeyType(string key)` | 方法 |
| `GetValueType` | `public WidgetAttributeValueType GetValueType(string value)` | 方法 |

## 参见

- [↑ gauntletui-prefabsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ConstantDefinition](../ConstantDefinition)
- [同命名空间 ConstantDefinitionType](../ConstantDefinitionType)
- [同命名空间 CreateGeneratedWidget](../CreateGeneratedWidget)
- [同命名空间 CustomWidgetType](../CustomWidgetType)
