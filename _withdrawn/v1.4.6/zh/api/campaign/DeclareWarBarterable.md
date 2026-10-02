---
title: "DeclareWarBarterable"
description: "DeclareWarBarterable：TaleWorlds.CampaignSystem.BarterSystem.Barterables 的 public 类，继承 Barterable；公开成员 8 个（方法 3、属性 4、字段 0）。canonical 桶 campaign。源文件 TaleWorlds.CampaignSystem/BarterSystem/Barterables/DeclareWarBarterable.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DeclareWarBarterable

**Namespace:** `TaleWorlds.CampaignSystem.BarterSystem.Barterables`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DeclareWarBarterable : Barterable`
**File:** `TaleWorlds.CampaignSystem/BarterSystem/Barterables/DeclareWarBarterable.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## 概述

DeclareWarBarterable 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/BarterSystem/Barterables/DeclareWarBarterable.cs。它是一个 public 类，实现/继承 Barterable，继承链为 DeclareWarBarterable → Barterable。public/protected 成员共 8 个：3 方法、4 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DeclareWarBarterable 落在 canonical 桶 `campaign`（命中规则 `rule:TaleWorlds.CampaignSystem`），命名空间 `TaleWorlds.CampaignSystem.BarterSystem.Barterables`，继承链 DeclareWarBarterable → Barterable。成员构成以属性为主（属性 4/8，方法 3/8），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/BarterSystem/Barterables/DeclareWarBarterable.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `StringID` | `public override string StringID` | 属性 |
| `DeclaringFaction` | `public IFaction DeclaringFaction` | 属性 |
| `OtherFaction` | `public IFaction OtherFaction` | 属性 |
| `Name` | `public override TextObject Name` | 属性 |
| `DeclareWarBarterable` | `public DeclareWarBarterable(IFaction declaringFaction, IFaction otherFaction) : base(declaringFaction.Leader, null)` | 构造函数 |
| `Apply` | `public override void Apply()` | 方法 |
| `GetUnitValueForFaction` | `public override int GetUnitValueForFaction(IFaction faction)` | 方法 |
| `GetVisualIdentifier` | `public override ImageIdentifier GetVisualIdentifier()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 Barterable](../Barterable/)
- [同命名空间 Barterable](../Barterable/)
- [同命名空间 FiefBarterable](../FiefBarterable/)
- [同命名空间 GoldBarterable](../GoldBarterable/)
- [同命名空间 ItemBarterable](../ItemBarterable/)
