---
title: "SettlementPositionScript"
description: "SandBox.View.Map.SettlementPositionScript —— 命名空间 SandBox.View.Map 中的类，来自 bannerlord-1.4.7 源码的自动生成骨架页，仅收录成员签名。"
---

<!-- v147-skeleton -->

# SettlementPositionScript

**Namespace:** `SandBox.View.Map`  
**Module:** `SandBox.View`  
**Type:** `public class SettlementPositionScript : ScriptComponentBehavior`  
**Base:** `ScriptComponentBehavior`  
**Source:** `SandBox.View/Map/SettlementPositionScript.cs`

## 概述

`SettlementPositionScript` 是 bannerlord-1.4.7 源码中命名空间 `SandBox.View.Map` 下的类，声明于模块目录 `SandBox.View` 的 `SandBox.View/Map/SettlementPositionScript.cs`（第 22 行声明）。该声明访问级别为public（公开），修饰为无特殊修饰，基类型是 `ScriptComponentBehavior`；解析到的成员共 121 项，其中 25 项为 public 或 protected。

本页由 `tools/_v147_skeleton.mjs` 从上述源文件抽取生成，作用是提供该类型在 1.4.7 中的真实声明与签名清单。行为说明、调用时机与 mod 集成方式尚未撰写。

## 关键成员

下列签名按源码声明顺序逐字照抄（每项后的说明只描述签名形态，不描述业务用途）：

- `public SettlementRecord(string settlementId, Vec2 position, Vec2 gatePosition, XmlNode node, bool hasGate, Vec2 portPosition, bool hasPort, bool isFortification)` — 方法，8 个参数，返回 S
- `public readonly string SettlementId;` — 字段，类型 string
- `public readonly XmlNode Node;` — 字段，类型 XmlNode
- `public readonly Vec2 Position;` — 字段，类型 Vec2
- `public readonly Vec2 GatePosition;` — 字段，类型 Vec2
- `public readonly bool HasGate;` — 字段，类型 bool
- `public readonly Vec2 PortPosition;` — 字段，类型 Vec2
- `public readonly bool HasPort;` — 字段，类型 bool
- `public readonly bool IsFortification;` — 字段，类型 bool
- `public SettlementPositionScriptNavigationCache(List<SettlementPositionScript.SettlementRecord> settlementRecords, Scene scene, MapDistanceModel mapDistanceModel, PartyNavigationModel partyNavigationModel, MobileParty.NavigationType navigationType)` — 方法，5 个参数，返回 S
- `protected override NavigationCacheElement<SettlementPositionScript.SettlementRecord> GetCacheElement(SettlementPositionScript.SettlementRecord settlement, bool isPortUsed)` — 方法，2 个参数，返回 NavigationCacheElement<SettlementPositionScript.SettlementRecord>
- `protected override SettlementPositionScript.SettlementRecord GetCacheElement(string settlementId)` — 方法，1 个参数，返回 SettlementPositionScript.SettlementRecord
- `public override void GetSceneXmlCrcValues(out uint sceneXmlCrc, out uint sceneNavigationMeshCrc)` — 方法，2 个参数，返回 void
- `protected override int GetNavMeshFaceCount()` — 方法，0 个参数，返回 int
- `protected override Vec2 GetNavMeshFaceCenterPosition(int faceIndex)` — 方法，1 个参数，返回 Vec2
- `protected override PathFaceRecord GetFaceRecordAtIndex(int faceIndex)` — 方法，1 个参数，返回 PathFaceRecord
- `protected override int[] GetExcludedFaceIds()` — 方法，0 个参数，返回 int[]
- `protected override int GetRegionSwitchCostTo0()` — 方法，0 个参数，返回 int
- `protected override int GetRegionSwitchCostTo1()` — 方法，0 个参数，返回 int
- `protected override IEnumerable<SettlementPositionScript.SettlementRecord> GetClosestSettlementsToPositionInCache(Vec2 checkPosition, List<SettlementPositionScript.SettlementRecord> settlements)` — 方法，2 个参数，返回 IEnumerable<SettlementPositionScript.SettlementRecord>
- `protected override float GetRealPathDistanceFromPositionToSettlement(Vec2 checkPosition, PathFaceRecord currentFaceRecord, float maxDistanceToLookForPathDetection, SettlementPositionScript.SettlementRecord currentSettlementToLook, out bool isPort)` — 方法，5 个参数，返回 float
- `protected override float GetRealDistanceAndLandRatioBetweenSettlements(NavigationCacheElement<SettlementPositionScript.SettlementRecord> settlement1, NavigationCacheElement<SettlementPositionScript.SettlementRecord> settlement2, out float landRatio)` — 方法，3 个参数，返回 float
- `protected override void GetFaceRecordForPoint(Vec2 position, out bool isOnRegion1)` — 方法，2 个参数，返回 void
- `protected override bool CheckBeingNeighbor(List<SettlementPositionScript.SettlementRecord> settlementsToConsider, SettlementPositionScript.SettlementRecord settlement1, SettlementPositionScript.SettlementRecord settlement2, bool useGate1, bool useGate2, out float distance)` — 方法，6 个参数，返回 bool
- `protected override List<SettlementPositionScript.SettlementRecord> GetAllRegisteredSettlements()` — 方法，0 个参数，返回 List<SettlementPositionScript.SettlementRecord>


## 心智模型

把这一页当作源码的索引来读，而不是教程：上面的 25 条成员记录全部来自 `SandBox.View/Map/SettlementPositionScript.cs` 的真实声明，签名与返回类型是准确事实，而签名背后的行为、调用时机与失败边界本页尚未撰写，需要时请回到该源文件逐行核对。判断一个成员能否从 mod 侧直接调用，看的是 `public class SettlementPositionScript : ScriptComponentBehavior` 这一行的访问级别与修饰（当前为public（公开）、无特殊修饰）以及上面每项的 get/set 与参数个数，而不是本页的措辞。

## 参见

- 本目录索引：[`sandbox` API](../)
- [Add1000GoldCheat（同命名空间）](../Add1000GoldCheat)
- [Add100InfluenceCheat（同命名空间）](../Add100InfluenceCheat)
- [Add100RenownCheat（同命名空间）](../Add100RenownCheat)
- [FastModeSubModule（campaign 桶）](../../campaign/FastModeSubModule)
- [IGameStarter（core-extra 桶）](../../core-extra/IGameStarter)
