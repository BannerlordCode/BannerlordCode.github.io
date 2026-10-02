---
title: "SaveableBasicTypeDefiner"
description: "SaveableBasicTypeDefiner：TaleWorlds.SaveSystem 的 public 类，继承 SaveableTypeDefiner；公开成员 7 个（方法 6、属性 0、字段 0）。源文件 TaleWorlds.SaveSystem/SaveableBasicTypeDefiner.cs。"
---
# SaveableBasicTypeDefiner

**Namespace:** `TaleWorlds.SaveSystem`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class SaveableBasicTypeDefiner : SaveableTypeDefiner`
**File:** `TaleWorlds.SaveSystem/SaveableBasicTypeDefiner.cs`

## 概述

SaveableBasicTypeDefiner 位于 TaleWorlds.SaveSystem 模块，源文件 TaleWorlds.SaveSystem/SaveableBasicTypeDefiner.cs。它是一个 public 类，实现/继承 SaveableTypeDefiner，继承链为 SaveableBasicTypeDefiner → SaveableTypeDefiner。public/protected 成员共 7 个：6 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SaveableBasicTypeDefiner 是 TaleWorlds.SaveSystem 的顶层类型，命名空间与模块目录一致，继承链 SaveableBasicTypeDefiner → SaveableTypeDefiner。成员构成以方法为主（方法 6/7，属性 0/7），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.SaveSystem/SaveableBasicTypeDefiner.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SaveableBasicTypeDefiner` | `public SaveableBasicTypeDefiner() : base(30000)` | 构造函数 |
| `DefineBasicTypes` | `protected internal override void DefineBasicTypes()` | 方法 |
| `DefineClassTypes` | `protected internal override void DefineClassTypes()` | 方法 |
| `DefineStructTypes` | `protected internal override void DefineStructTypes()` | 方法 |
| `DefineGenericStructDefinitions` | `protected internal override void DefineGenericStructDefinitions()` | 方法 |
| `DefineGenericClassDefinitions` | `protected internal override void DefineGenericClassDefinitions()` | 方法 |
| `DefineContainerDefinitions` | `protected internal override void DefineContainerDefinitions()` | 方法 |

## 参见

- [↑ savesystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 SaveableTypeDefiner](../SaveableTypeDefiner)
- [同命名空间 AsyncFileSaveDriver](../AsyncFileSaveDriver)
- [同命名空间 ContainerType](../ContainerType)
- [同命名空间 EntryId](../EntryId)
- [同命名空间 FileDriver](../FileDriver)
