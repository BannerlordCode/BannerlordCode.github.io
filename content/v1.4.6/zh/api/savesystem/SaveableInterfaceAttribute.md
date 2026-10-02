---
title: "SaveableInterfaceAttribute"
description: "SaveableInterfaceAttribute：TaleWorlds.SaveSystem 的 public 类，继承 Attribute；公开成员 2 个（方法 0、属性 1、字段 0）。源文件 TaleWorlds.SaveSystem/SaveableInterfaceAttribute.cs。"
---
# SaveableInterfaceAttribute

**Namespace:** `TaleWorlds.SaveSystem`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class SaveableInterfaceAttribute : Attribute`
**File:** `TaleWorlds.SaveSystem/SaveableInterfaceAttribute.cs`

## 概述

SaveableInterfaceAttribute 位于 TaleWorlds.SaveSystem 模块，源文件 TaleWorlds.SaveSystem/SaveableInterfaceAttribute.cs。它是一个 public 类，实现/继承 Attribute，继承链为 SaveableInterfaceAttribute → Attribute。public/protected 成员共 2 个：1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SaveableInterfaceAttribute 是 TaleWorlds.SaveSystem 的顶层类型，命名空间与模块目录一致，继承链 SaveableInterfaceAttribute → Attribute。成员构成以属性为主（属性 1/2，方法 0/2），对外主要以状态读取接口暴露。继承链上的 Attribute 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.SaveSystem/SaveableInterfaceAttribute.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SaveId` | `public int SaveId` | 属性 |
| `SaveableInterfaceAttribute` | `public SaveableInterfaceAttribute(int saveId)` | 构造函数 |

## 参见

- [↑ savesystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AsyncFileSaveDriver](../AsyncFileSaveDriver)
- [同命名空间 ContainerType](../ContainerType)
- [同命名空间 EntryId](../EntryId)
- [同命名空间 FileDriver](../FileDriver)
