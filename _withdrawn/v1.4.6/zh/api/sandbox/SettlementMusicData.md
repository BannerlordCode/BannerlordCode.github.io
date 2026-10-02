---
title: "SettlementMusicData"
description: "SettlementMusicData：SandBox.Objects 的 public 类，继承 MBObjectBase；公开成员 6 个（方法 1、属性 5、字段 0）。canonical 桶 sandbox。源文件 SandBox/Objects/SettlementMusicData.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SettlementMusicData

**Namespace:** `SandBox.Objects`
**Module:** `SandBox`
**Type:** `public class SettlementMusicData : MBObjectBase`
**File:** `SandBox/Objects/SettlementMusicData.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

SettlementMusicData 位于 SandBox 模块，源文件 SandBox/Objects/SettlementMusicData.cs。它是一个 public 类，实现/继承 MBObjectBase，继承链为 SettlementMusicData → MBObjectBase。public/protected 成员共 6 个：1 方法、5 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SettlementMusicData 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.Objects`，继承链 SettlementMusicData → MBObjectBase。成员构成以属性为主（属性 5/6，方法 1/6），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Objects/SettlementMusicData.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MusicPath` | `public string MusicPath` | 属性 |
| `Culture` | `public CultureObject Culture` | 属性 |
| `MBReadOnlyList` | `public MBReadOnlyList<InstrumentData>Instruments` | 属性 |
| `LocationId` | `public string LocationId` | 属性 |
| `Tempo` | `public int Tempo` | 属性 |
| `Deserialize` | `public override void Deserialize(MBObjectManager objectManager, XmlNode node)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MBObjectBase](../../campaign-ext/MBObjectBase/)
- [同命名空间 CheckpointArea](../CheckpointArea/)
- [同命名空间 DefaultMusicInstrumentData](../DefaultMusicInstrumentData/)
- [同命名空间 DynamicPatrolAreaParent](../DynamicPatrolAreaParent/)
- [同命名空间 GenericMissionEventBox](../GenericMissionEventBox/)
