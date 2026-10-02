---
title: "ContainerDefinition"
description: "ContainerDefinition：TaleWorlds.SaveSystem 的 public 类，继承 TypeDefinitionBase；公开成员 5 个（方法 1、属性 3、字段 0）。源文件 TaleWorlds.SaveSystem/Definition/ContainerDefinition.cs。"
---
# ContainerDefinition

**Namespace:** `TaleWorlds.SaveSystem.Definition`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class ContainerDefinition : TypeDefinitionBase`
**File:** `TaleWorlds.SaveSystem/Definition/ContainerDefinition.cs`

## 概述

ContainerDefinition 位于 TaleWorlds.SaveSystem 模块，源文件 TaleWorlds.SaveSystem/Definition/ContainerDefinition.cs。它是一个 public 类，实现/继承 TypeDefinitionBase，继承链为 ContainerDefinition → TypeDefinitionBase。public/protected 成员共 5 个：1 方法、3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ContainerDefinition 是 TaleWorlds.SaveSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.SaveSystem.Definition），继承链 ContainerDefinition → TypeDefinitionBase。成员构成以属性为主（属性 3/5，方法 1/5），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.SaveSystem/Definition/ContainerDefinition.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DefinedAssembly` | `public Assembly DefinedAssembly` | 属性 |
| `CollectObjectsMethod` | `public CollectObjectsDelegate CollectObjectsMethod` | 属性 |
| `HasNoChildObject` | `public bool HasNoChildObject` | 属性 |
| `ContainerDefinition` | `public ContainerDefinition(Type type, ContainerSaveId saveId, Assembly definedAssembly) : base(type, saveId)` | 构造函数 |
| `InitializeForAutoGeneration` | `public void InitializeForAutoGeneration(CollectObjectsDelegate collectObjectsDelegate, bool hasNoChildObject)` | 方法 |

## 参见

- [↑ savesystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 TypeDefinitionBase](../TypeDefinitionBase)
- [同命名空间 CollectObjectsDelegate](../CollectObjectsDelegate)
- [同命名空间 ContainerSaveId](../ContainerSaveId)
- [同命名空间 CustomField](../CustomField)
- [同命名空间 DefinitionContext](../DefinitionContext)
