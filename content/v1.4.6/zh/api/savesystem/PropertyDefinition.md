---
title: "PropertyDefinition"
description: "PropertyDefinition：TaleWorlds.SaveSystem 的 public 类，继承 MemberDefinition；公开成员 9 个（方法 3、属性 5、字段 0）。源文件 TaleWorlds.SaveSystem/Definition/PropertyDefinition.cs。"
---
# PropertyDefinition

**Namespace:** `TaleWorlds.SaveSystem.Definition`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class PropertyDefinition : MemberDefinition`
**File:** `TaleWorlds.SaveSystem/Definition/PropertyDefinition.cs`

## 概述

PropertyDefinition 位于 TaleWorlds.SaveSystem 模块，源文件 TaleWorlds.SaveSystem/Definition/PropertyDefinition.cs。它是一个 public 类，实现/继承 MemberDefinition，继承链为 PropertyDefinition → MemberDefinition。public/protected 成员共 9 个：3 方法、5 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PropertyDefinition 是 TaleWorlds.SaveSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.SaveSystem.Definition），继承链 PropertyDefinition → MemberDefinition。成员构成以属性为主（属性 5/9，方法 3/9），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.SaveSystem/Definition/PropertyDefinition.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PropertyInfo` | `public PropertyInfo PropertyInfo` | 属性 |
| `SaveablePropertyAttribute` | `public SaveablePropertyAttribute SaveablePropertyAttribute` | 属性 |
| `GetMethod` | `public MethodInfo GetMethod` | 属性 |
| `SetMethod` | `public MethodInfo SetMethod` | 属性 |
| `GetPropertyValueMethod` | `public GetPropertyValueDelegate GetPropertyValueMethod` | 属性 |
| `PropertyDefinition` | `public PropertyDefinition(PropertyInfo propertyInfo, MemberTypeId id) : base(propertyInfo, id)` | 构造函数 |
| `GetMemberType` | `public override Type GetMemberType()` | 方法 |
| `GetValue` | `public override object GetValue(object target)` | 方法 |
| `InitializeForAutoGeneration` | `public void InitializeForAutoGeneration(GetPropertyValueDelegate getPropertyValueMethod)` | 方法 |

## 参见

- [↑ savesystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 MemberDefinition](../MemberDefinition)
- [同命名空间 CollectObjectsDelegate](../CollectObjectsDelegate)
- [同命名空间 ContainerDefinition](../ContainerDefinition)
- [同命名空间 ContainerSaveId](../ContainerSaveId)
- [同命名空间 CustomField](../CustomField)
