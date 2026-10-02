---
title: "InstrumentData"
description: "InstrumentData：SandBox 的 public 类，继承 MBObjectBase；公开成员 9 个（方法 2、属性 5、字段 0）。源文件 SandBox/Objects/InstrumentData.cs。"
---
# InstrumentData

**Namespace:** `SandBox.Objects`
**Module:** `SandBox`
**Type:** `public class InstrumentData : MBObjectBase`
**File:** `SandBox/Objects/InstrumentData.cs`

## 概述

InstrumentData 位于 SandBox 模块，源文件 SandBox/Objects/InstrumentData.cs。它是一个 public 类，实现/继承 MBObjectBase，继承链为 InstrumentData → MBObjectBase。public/protected 成员共 9 个：2 方法、5 属性、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：InstrumentData 是 SandBox 的顶层类型，命名空间与模块目录不同（SandBox.Objects），继承链 InstrumentData → MBObjectBase。成员构成以属性为主（属性 5/9，方法 2/9），对外主要以状态读取接口暴露。继承链上的 MBObjectBase 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Objects/InstrumentData.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `string>>InstrumentEntities` | `public MBReadOnlyList<ValueTuple<HumanBone, string>>InstrumentEntities` | 属性 |
| `SittingAction` | `public string SittingAction` | 属性 |
| `StandingAction` | `public string StandingAction` | 属性 |
| `Tag` | `public string Tag` | 属性 |
| `IsDataWithoutInstrument` | `public bool IsDataWithoutInstrument` | 属性 |
| `InstrumentData` | `public InstrumentData()` | 构造函数 |
| `InstrumentData` | `public InstrumentData(string stringId) : base(stringId)` | 构造函数 |
| `InitializeInstrumentData` | `public void InitializeInstrumentData(string sittingAction, string standingAction, bool isDataWithoutInstrument)` | 方法 |
| `Deserialize` | `public override void Deserialize(MBObjectManager objectManager, XmlNode node)` | 方法 |

## 参见

- [↑ sandbox 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CheckpointArea](../CheckpointArea)
- [同命名空间 DefaultMusicInstrumentData](../DefaultMusicInstrumentData)
- [同命名空间 DynamicPatrolAreaParent](../DynamicPatrolAreaParent)
- [同命名空间 GenericMissionEventBox](../GenericMissionEventBox)
