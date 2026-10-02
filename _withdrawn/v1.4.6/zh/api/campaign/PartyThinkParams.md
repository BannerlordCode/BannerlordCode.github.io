---
title: "PartyThinkParams"
description: "PartyThinkParams：TaleWorlds.CampaignSystem 的 public 类；公开成员 9 个（方法 6、属性 2、字段 0）。canonical 桶 campaign。源文件 TaleWorlds.CampaignSystem/PartyThinkParams.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PartyThinkParams

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class PartyThinkParams`
**File:** `TaleWorlds.CampaignSystem/PartyThinkParams.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## 概述

PartyThinkParams 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/PartyThinkParams.cs。它是一个 public 类，继承链为 PartyThinkParams。public/protected 成员共 9 个：6 方法、2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PartyThinkParams 落在 canonical 桶 `campaign`（命中规则 `rule:TaleWorlds.CampaignSystem`），命名空间 `TaleWorlds.CampaignSystem`，继承链 PartyThinkParams。成员构成以方法为主（方法 6/9，属性 2/9），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/PartyThinkParams.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `float>>AIBehaviorScores` | `public MBReadOnlyList<ValueTuple<AIBehaviorData, float>>AIBehaviorScores` | 属性 |
| `MBReadOnlyList` | `public MBReadOnlyList<MobileParty>PossibleArmyMembersUponArmyCreation` | 属性 |
| `PartyThinkParams` | `public PartyThinkParams(MobileParty mobileParty)` | 构造函数 |
| `Reset` | `public void Reset(MobileParty mobileParty)` | 方法 |
| `Initialization` | `public void Initialization()` | 方法 |
| `SetArmyMembers` | `public void SetArmyMembers(MBList<MobileParty>armyMembers)` | 方法 |
| `TryGetBehaviorScore` | `public bool TryGetBehaviorScore(in AIBehaviorData aiBehaviorData, out float score)` | 方法 |
| `SetBehaviorScore` | `public void SetBehaviorScore(in AIBehaviorData aiBehaviorData, float score)` | 方法 |
| `AddBehaviorScore` | `public void AddBehaviorScore(in ValueTuple<AIBehaviorData, float>value)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionNotes](../ActionNotes/)
- [同命名空间 AIBehaviorData](../AIBehaviorData/)
- [同命名空间 Army](../Army/)
- [同命名空间 AtmosphereGrid](../AtmosphereGrid/)
