---
title: "MemberDefinition"
description: "MemberDefinition：TaleWorlds.SaveSystem.Definition 的 public 类；公开成员 5 个（方法 2、属性 2、字段 0）。canonical 桶 save-system。源文件 TaleWorlds.SaveSystem/Definition/MemberDefinition.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MemberDefinition

**Namespace:** `TaleWorlds.SaveSystem.Definition`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public abstract class MemberDefinition`
**File:** `TaleWorlds.SaveSystem/Definition/MemberDefinition.cs`
**Bucket:** `save-system` (rule:TaleWorlds.SaveSystem)

## 概述

MemberDefinition 位于 TaleWorlds.SaveSystem 模块，源文件 TaleWorlds.SaveSystem/Definition/MemberDefinition.cs。它是一个 public 类（abstract），继承链为 MemberDefinition。public/protected 成员共 5 个：2 方法、2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MemberDefinition 落在 canonical 桶 `save-system`（命中规则 `rule:TaleWorlds.SaveSystem`），命名空间 `TaleWorlds.SaveSystem.Definition`，继承链 MemberDefinition。成员构成以方法为主（方法 2/5，属性 2/5），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.SaveSystem/Definition/MemberDefinition.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Id` | `public MemberTypeId Id` | 属性 |
| `MemberInfo` | `public MemberInfo MemberInfo` | 属性 |
| `MemberDefinition` | `protected MemberDefinition(MemberInfo memberInfo, MemberTypeId id)` | 构造函数 |
| `GetMemberType` | `public abstract Type GetMemberType();` | 方法 |
| `GetValue` | `public abstract object GetValue(object target);` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 CollectObjectsDelegate](../CollectObjectsDelegate/)
- [同命名空间 ContainerDefinition](../ContainerDefinition/)
- [同命名空间 ContainerSaveId](../ContainerSaveId/)
- [同命名空间 CustomField](../CustomField/)
