---
title: "MemberDefinition"
description: "MemberDefinition：TaleWorlds.SaveSystem 的 public 类；公开成员 5 个（方法 2、属性 2、字段 0）。源文件 TaleWorlds.SaveSystem/Definition/MemberDefinition.cs。"
---
# MemberDefinition

**Namespace:** `TaleWorlds.SaveSystem.Definition`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public abstract class MemberDefinition`
**File:** `TaleWorlds.SaveSystem/Definition/MemberDefinition.cs`

## 概述

MemberDefinition 位于 TaleWorlds.SaveSystem 模块，源文件 TaleWorlds.SaveSystem/Definition/MemberDefinition.cs。它是一个 public 类（abstract），继承链为 MemberDefinition。public/protected 成员共 5 个：2 方法、2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MemberDefinition 是 TaleWorlds.SaveSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.SaveSystem.Definition），继承链 MemberDefinition。成员构成以方法为主（方法 2/5，属性 2/5），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.SaveSystem/Definition/MemberDefinition.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Id` | `public MemberTypeId Id` | 属性 |
| `MemberInfo` | `public MemberInfo MemberInfo` | 属性 |
| `MemberDefinition` | `protected MemberDefinition(MemberInfo memberInfo, MemberTypeId id)` | 构造函数 |
| `GetMemberType` | `public abstract Type GetMemberType();` | 方法 |
| `GetValue` | `public abstract object GetValue(object target);` | 方法 |

## 参见

- [↑ savesystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CollectObjectsDelegate](../CollectObjectsDelegate)
- [同命名空间 ContainerDefinition](../ContainerDefinition)
- [同命名空间 ContainerSaveId](../ContainerSaveId)
- [同命名空间 CustomField](../CustomField)
