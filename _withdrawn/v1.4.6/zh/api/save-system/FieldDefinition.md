---
title: "FieldDefinition"
description: "FieldDefinition：TaleWorlds.SaveSystem.Definition 的 public 类，继承 MemberDefinition；公开成员 7 个（方法 3、属性 3、字段 0）。canonical 桶 save-system。源文件 TaleWorlds.SaveSystem/Definition/FieldDefinition.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# FieldDefinition

**Namespace:** `TaleWorlds.SaveSystem.Definition`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class FieldDefinition : MemberDefinition`
**File:** `TaleWorlds.SaveSystem/Definition/FieldDefinition.cs`
**Bucket:** `save-system` (rule:TaleWorlds.SaveSystem)

## 概述

FieldDefinition 位于 TaleWorlds.SaveSystem 模块，源文件 TaleWorlds.SaveSystem/Definition/FieldDefinition.cs。它是一个 public 类，实现/继承 MemberDefinition，继承链为 FieldDefinition → MemberDefinition。public/protected 成员共 7 个：3 方法、3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：FieldDefinition 落在 canonical 桶 `save-system`（命中规则 `rule:TaleWorlds.SaveSystem`），命名空间 `TaleWorlds.SaveSystem.Definition`，继承链 FieldDefinition → MemberDefinition。成员构成以方法为主（方法 3/7，属性 3/7），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.SaveSystem/Definition/FieldDefinition.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `FieldInfo` | `public FieldInfo FieldInfo` | 属性 |
| `SaveableFieldAttribute` | `public SaveableFieldAttribute SaveableFieldAttribute` | 属性 |
| `GetFieldValueMethod` | `public GetFieldValueDelegate GetFieldValueMethod` | 属性 |
| `FieldDefinition` | `public FieldDefinition(FieldInfo fieldInfo, MemberTypeId id) : base(fieldInfo, id)` | 构造函数 |
| `GetMemberType` | `public override Type GetMemberType()` | 方法 |
| `GetValue` | `public override object GetValue(object target)` | 方法 |
| `InitializeForAutoGeneration` | `public void InitializeForAutoGeneration(GetFieldValueDelegate getFieldValueMethod)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MemberDefinition](../MemberDefinition/)
- [同命名空间 CollectObjectsDelegate](../CollectObjectsDelegate/)
- [同命名空间 ContainerDefinition](../ContainerDefinition/)
- [同命名空间 ContainerSaveId](../ContainerSaveId/)
- [同命名空间 CustomField](../CustomField/)
