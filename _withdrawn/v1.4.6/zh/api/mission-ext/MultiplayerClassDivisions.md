---
title: "MultiplayerClassDivisions"
description: "MultiplayerClassDivisions：TaleWorlds.MountAndBlade 的 public 类；公开成员 15 个（方法 10、属性 3、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/MultiplayerClassDivisions.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MultiplayerClassDivisions

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MultiplayerClassDivisions`
**File:** `TaleWorlds.MountAndBlade/MultiplayerClassDivisions.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

MultiplayerClassDivisions 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MultiplayerClassDivisions.cs。它是一个 public 类，继承链为 MultiplayerClassDivisions。public/protected 成员共 15 个：10 方法、3 属性、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MultiplayerClassDivisions 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 MultiplayerClassDivisions。成员构成以方法为主（方法 10/15，属性 3/15），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MultiplayerClassDivisions.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `List` | `public static List<MultiplayerClassDivisions.MPHeroClassGroup>MultiplayerHeroClassGroups` | 属性 |
| `IEnumerable` | `public static IEnumerable<MultiplayerClassDivisions.MPHeroClass>GetMPHeroClasses(BasicCultureObject culture)` | 方法 |
| `MBReadOnlyList` | `public static MBReadOnlyList<MultiplayerClassDivisions.MPHeroClass>GetMPHeroClasses()` | 方法 |
| `GetMPHeroClassForCharacter` | `public static MultiplayerClassDivisions.MPHeroClass GetMPHeroClassForCharacter(BasicCharacterObject character)` | 方法 |
| `List` | `public static List<List<IReadOnlyPerkObject>>GetAllPerksForHeroClass(MultiplayerClassDivisions.MPHeroClass heroClass, string forcedForGameMode = null)` | 方法 |
| `GetMPHeroClassForPeer` | `public static MultiplayerClassDivisions.MPHeroClass GetMPHeroClassForPeer(MissionPeer peer, bool skipTeamCheck = false)` | 方法 |
| `GetMPHeroClassForFormation` | `public static TargetIconType GetMPHeroClassForFormation(Formation formation)` | 方法 |
| `List` | `public static List<List<IReadOnlyPerkObject>>GetAvailablePerksForPeer(MissionPeer missionPeer)` | 方法 |
| `Initialize` | `public static void Initialize()` | 方法 |
| `Release` | `public static void Release()` | 方法 |
| `GetMinimumTroopCost` | `public static int GetMinimumTroopCost(BasicCultureObject culture = null)` | 方法 |
| `MBObjectBase` | `public class MPHeroClass : MBObjectBase` | 属性 |
| `MPHeroClassGroup` | `public class MPHeroClassGroup` | 属性 |
| `MBObjectBase` | `public class MPHeroClass : MBObjectBase` | 嵌套类型 |
| `MPHeroClassGroup` | `public class MPHeroClassGroup` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
