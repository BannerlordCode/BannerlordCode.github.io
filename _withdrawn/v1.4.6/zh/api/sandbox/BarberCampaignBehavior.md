---
title: "BarberCampaignBehavior"
description: "BarberCampaignBehavior：SandBox.CampaignBehaviors 的 public 类，继承 CampaignBehaviorBase、IFacegenCampaignBehavior；公开成员 3 个（方法 3、属性 0、字段 0）。canonical 桶 sandbox。源文件 SandBox/CampaignBehaviors/BarberCampaignBehavior.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BarberCampaignBehavior

**Namespace:** `SandBox.CampaignBehaviors`
**Module:** `SandBox`
**Type:** `public class BarberCampaignBehavior : CampaignBehaviorBase, IFacegenCampaignBehavior, ICampaignBehavior`
**File:** `SandBox/CampaignBehaviors/BarberCampaignBehavior.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

BarberCampaignBehavior 位于 SandBox 模块，源文件 SandBox/CampaignBehaviors/BarberCampaignBehavior.cs。它是一个 public 类，实现/继承 CampaignBehaviorBase、IFacegenCampaignBehavior、ICampaignBehavior，继承链为 BarberCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior。public/protected 成员共 3 个：3 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BarberCampaignBehavior 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.CampaignBehaviors`，继承链 BarberCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior。成员构成以方法为主（方法 3/3，属性 0/3），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/CampaignBehaviors/BarberCampaignBehavior.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | 方法 |
| `SyncData` | `public override void SyncData(IDataStore store)` | 方法 |
| `GetFaceGenFilter` | `public IFaceGeneratorCustomFilter GetFaceGenFilter()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 CampaignBehaviorBase](../../campaign/CampaignBehaviorBase/)
- [基类/接口 IFacegenCampaignBehavior](../../campaign-ext/IFacegenCampaignBehavior/)
- [基类/接口 ICampaignBehavior](../../campaign/ICampaignBehavior/)
- [同命名空间 AlleyCampaignBehavior](../AlleyCampaignBehavior/)
- [同命名空间 ArenaMasterCampaignBehavior](../ArenaMasterCampaignBehavior/)
- [同命名空间 BoardGameCampaignBehavior](../BoardGameCampaignBehavior/)
- [同命名空间 CheckpointCampaignBehavior](../CheckpointCampaignBehavior/)
