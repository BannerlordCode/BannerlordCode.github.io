---
title: "Hideout"
description: "Hideout 的自动生成类参考。"
---
# Hideout

**Namespace:** TaleWorlds.CampaignSystem.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class Hideout : SettlementComponent, ISpottable`
**Base:** `SettlementComponent`
**File:** `TaleWorlds.CampaignSystem/Settlements/Hideout.cs`

## 概述

`Hideout` 位于 `TaleWorlds.CampaignSystem.Settlements`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Settlements` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `NextPossibleAttackTime` | `public CampaignTime NextPossibleAttackTime { get; }` |
| `All` | `public static MBReadOnlyList<Hideout> All { get; }` |
| `IsInfested` | `public bool IsInfested { get; }` |
| `MapFaction` | `public override IFaction MapFaction { get; }` |
| `IsSpotted` | `public bool IsSpotted { get; set; }` |

## 主要方法

### UpdateNextPossibleAttackTime
`public void UpdateNextPossibleAttackTime()`

**用途 / Purpose:** 重新计算并更新 「next possible attack time」 的最新表示。

```csharp
// 先通过子系统 API 拿到 Hideout 实例
Hideout hideout = ...;
hideout.UpdateNextPossibleAttackTime();
```

### GetDefenderParties
`public IEnumerable<PartyBase> GetDefenderParties(MapEvent.BattleTypes battleType)`

**用途 / Purpose:** 读取并返回当前对象中 「defender parties」 的结果。

```csharp
// 先通过子系统 API 拿到 Hideout 实例
Hideout hideout = ...;
var result = hideout.GetDefenderParties(battleType);
```

### GetNextDefenderParty
`public PartyBase GetNextDefenderParty(ref int partyIndex, MapEvent.BattleTypes battleType)`

**用途 / Purpose:** 读取并返回当前对象中 「next defender party」 的结果。

```csharp
// 先通过子系统 API 拿到 Hideout 实例
Hideout hideout = ...;
var result = hideout.GetNextDefenderParty(partyIndex, battleType);
```

### OnPartyEntered
`public override void OnPartyEntered(MobileParty mobileParty)`

**用途 / Purpose:** 在 「party entered」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Hideout 实例
Hideout hideout = ...;
hideout.OnPartyEntered(mobileParty);
```

### OnPartyLeft
`public override void OnPartyLeft(MobileParty mobileParty)`

**用途 / Purpose:** 在 「party left」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Hideout 实例
Hideout hideout = ...;
hideout.OnPartyLeft(mobileParty);
```

### OnRelatedPartyRemoved
`public override void OnRelatedPartyRemoved(MobileParty mobileParty)`

**用途 / Purpose:** 在 「related party removed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Hideout 实例
Hideout hideout = ...;
hideout.OnRelatedPartyRemoved(mobileParty);
```

### OnInit
`public override void OnInit()`

**用途 / Purpose:** 在 「init」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Hideout 实例
Hideout hideout = ...;
hideout.OnInit();
```

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** 从序列化数据还原当前对象。

```csharp
// 先通过子系统 API 拿到 Hideout 实例
Hideout hideout = ...;
hideout.Deserialize(objectManager, node);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
Hideout hideout = ...;
hideout.UpdateNextPossibleAttackTime();
```

## 参见

- [本区域目录](../)