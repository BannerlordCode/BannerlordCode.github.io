---
title: "MPPerkObject"
description: "MPPerkObject：TaleWorlds.MountAndBlade 的 public 类，继承 IReadOnlyPerkObject；公开成员 35 个（方法 18、属性 13、字段 0）。源文件 TaleWorlds.MountAndBlade/MPPerkObject.cs。"
---
# MPPerkObject

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MPPerkObject : IReadOnlyPerkObject`
**File:** `TaleWorlds.MountAndBlade/MPPerkObject.cs`

## 概述

MPPerkObject 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MPPerkObject.cs。它是一个 public 类，实现/继承 IReadOnlyPerkObject，继承链为 MPPerkObject → IReadOnlyPerkObject。public/protected 成员共 35 个：18 方法、13 属性、1 构造函数、3 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MPPerkObject 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 MPPerkObject → IReadOnlyPerkObject。成员构成以方法为主（方法 18/35，属性 13/35），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MPPerkObject.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Name` | `public TextObject Name` | 属性 |
| `Description` | `public TextObject Description` | 属性 |
| `HasBannerBearer` | `public bool HasBannerBearer` | 属性 |
| `List` | `public List<string>GameModes` | 属性 |
| `PerkListIndex` | `public int PerkListIndex` | 属性 |
| `IconId` | `public string IconId` | 属性 |
| `HeroIdleAnimOverride` | `public string HeroIdleAnimOverride` | 属性 |
| `HeroMountIdleAnimOverride` | `public string HeroMountIdleAnimOverride` | 属性 |
| `TroopIdleAnimOverride` | `public string TroopIdleAnimOverride` | 属性 |
| `TroopMountIdleAnimOverride` | `public string TroopMountIdleAnimOverride` | 属性 |
| `MPPerkObject` | `public MPPerkObject(MissionPeer peer, string name, string description, List<string>gameModes, int perkListIndex, string iconId, IEnumerable<MPConditionalEffect>conditionalEffects, IEnumerable<MPPerkEffectBase>effects, string heroIdleAnimOverride, string heroMountIdleAnimOverride, string troopIdleAnimOverride, string troopMountIdleAnimOverride)` | 构造函数 |
| `Clone` | `public MPPerkObject Clone(MissionPeer peer)` | 方法 |
| `Reset` | `public void Reset()` | 方法 |
| `GetExtraTroopCount` | `public int GetExtraTroopCount(bool isWarmup)` | 方法 |
| `EquipmentElement>>GetAlternativeEquipments` | `public List<ValueTuple<EquipmentIndex, EquipmentElement>>GetAlternativeEquipments(bool isWarmup, bool isPlayer, List<ValueTuple<EquipmentIndex, EquipmentElement>>alternativeEquipments, bool getAllEquipments = false)` | 方法 |
| `GetDrivenPropertyBonusOnSpawn` | `public float GetDrivenPropertyBonusOnSpawn(bool isWarmup, bool isPlayer, DrivenProperty drivenProperty, float baseValue)` | 方法 |
| `GetHitpoints` | `public float GetHitpoints(bool isWarmup, bool isPlayer)` | 方法 |
| `GetTroopCount` | `public static int GetTroopCount(MultiplayerClassDivisions.MPHeroClass heroClass, int botsPerFormation, MPPerkObject.MPOnSpawnPerkHandler onSpawnPerkHandler)` | 方法 |
| `Deserialize` | `public static IReadOnlyPerkObject Deserialize(XmlNode node)` | 方法 |
| `GetPerkHandler` | `public static MPPerkObject.MPPerkHandler GetPerkHandler(Agent agent)` | 方法 |
| `GetPerkHandler` | `public static MPPerkObject.MPPerkHandler GetPerkHandler(MissionPeer peer)` | 方法 |
| `GetCombatPerkHandler` | `public static MPPerkObject.MPCombatPerkHandler GetCombatPerkHandler(Agent attacker, Agent defender)` | 方法 |
| `GetOnSpawnPerkHandler` | `public static MPPerkObject.MPOnSpawnPerkHandler GetOnSpawnPerkHandler(MissionPeer peer)` | 方法 |
| `GetOnSpawnPerkHandler` | `public static MPPerkObject.MPOnSpawnPerkHandler GetOnSpawnPerkHandler(IEnumerable<IReadOnlyPerkObject>perks)` | 方法 |
| `RaiseEventForAllPeers` | `public static void RaiseEventForAllPeers(MPPerkCondition.PerkEventFlags flags)` | 方法 |
| `RaiseEventForAllPeersOnTeam` | `public static void RaiseEventForAllPeersOnTeam(Team side, MPPerkCondition.PerkEventFlags flags)` | 方法 |
| `TickAllPeerPerks` | `public static void TickAllPeerPerks(int tickCount)` | 方法 |
| `RaiseEventForAllPeersCommand` | `public static string RaiseEventForAllPeersCommand(List<string>strings)` | 方法 |
| `TickAllPeerPerksCommand` | `public static string TickAllPeerPerksCommand(List<string>strings)` | 方法 |
| `MPOnSpawnPerkHandler` | `public class MPOnSpawnPerkHandler` | 属性 |
| `MPPerkHandler` | `public class MPPerkHandler` | 属性 |
| `MPCombatPerkHandler` | `public class MPCombatPerkHandler` | 属性 |
| `MPOnSpawnPerkHandler` | `public class MPOnSpawnPerkHandler` | 嵌套类型 |
| `MPPerkHandler` | `public class MPPerkHandler` | 嵌套类型 |
| `MPCombatPerkHandler` | `public class MPCombatPerkHandler` | 嵌套类型 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 IReadOnlyPerkObject](../IReadOnlyPerkObject)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
