---
title: "Track"
description: "Track：TaleWorlds.CampaignSystem 的 public 类，继承 ILocatable<Track>、IInteractablePoint；公开成员 14 个（方法 3、属性 9、字段 0）。canonical 桶 campaign。源文件 TaleWorlds.CampaignSystem/Track.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Track

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public sealed class Track : ILocatable<Track>, IInteractablePoint`
**File:** `TaleWorlds.CampaignSystem/Track.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## 概述

Track 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/Track.cs。它是一个 public 类（sealed），实现/继承 ILocatable<Track>、IInteractablePoint，继承链为 Track → ILocatable。public/protected 成员共 14 个：3 方法、9 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：Track 落在 canonical 桶 `campaign`（命中规则 `rule:TaleWorlds.CampaignSystem`），命名空间 `TaleWorlds.CampaignSystem`，继承链 Track → ILocatable。成员构成以属性为主（属性 9/14，方法 3/14），对外主要以状态读取接口暴露。继承链上的 ILocatable 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/Track.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetPosition2D` | `public Vec2 GetPosition2D` | 属性 |
| `CanPartyInteract` | `public bool CanPartyInteract(MobileParty mobileParty, float dt)` | 方法 |
| `GetPartyTypeEnum` | `public static Track.PartyTypeEnum GetPartyTypeEnum(MobileParty party)` | 方法 |
| `Size` | `public int Size` | 属性 |
| `IsDetected` | `public bool IsDetected` | 属性 |
| `IsPointer` | `public bool IsPointer` | 属性 |
| `IsEnemy` | `public bool IsEnemy` | 属性 |
| `IsExpired` | `public bool IsExpired` | 属性 |
| `IsAlive` | `public bool IsAlive` | 属性 |
| `Scale` | `public float Scale` | 属性 |
| `Track` | `public Track()` | 构造函数 |
| `Reset` | `public void Reset()` | 方法 |
| `PartyTypeEnum` | `public enum PartyTypeEnum` | 属性 |
| `PartyTypeEnum` | `public enum PartyTypeEnum` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 IInteractablePoint](../IInteractablePoint/)
- [同命名空间 ActionNotes](../ActionNotes/)
- [同命名空间 AIBehaviorData](../AIBehaviorData/)
- [同命名空间 Army](../Army/)
- [同命名空间 AtmosphereGrid](../AtmosphereGrid/)
