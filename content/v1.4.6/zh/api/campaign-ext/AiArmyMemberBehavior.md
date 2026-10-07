---
title: "AiArmyMemberBehavior"
description: "军团成员 AI 决策入口，每个游戏小时为军团成员产生思考参数。"
---
# AiArmyMemberBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class AiArmyMemberBehavior : CampaignBehaviorBase`
**Source:** `TaleWorlds.CampaignSystem/CampaignBehaviors/AiBehaviors/AiArmyMemberBehavior.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`AiArmyMemberBehavior` 是**军团成员 AI 决策**的行为入口。它属于 `AiBehaviors` 子命名空间，专门负责在战役时钟推进时，为军团（Army）中的成员生成思考参数（`PartyThinkParams`），驱动成员在「跟随 / 独立 / 解散 / 加入」等决策之间选择。它是 `CampaignBehaviorBase` 的标准子类，通过 `RegisterEvents()` 订阅战役事件、通过 `SyncData(IDataStore)` 持久化 AI 相关状态。

## 心智模型

把 `AiArmyMemberBehavior` 想成军团的**参谋部**：每个游戏小时，它召集军团成员开一次「作战会议」，给每个成员发一份思考参数（`PartyThinkParams`），成员据此决定下一步行动。

- **小时级 tick**：决策不是实时的，而是按游戏小时离散触发，与战役时钟对齐。
- **参数驱动**：AI 不直接做决定，而是产出 `PartyThinkParams`，由后续逻辑消费。
- **军团维度**：作用对象是 `MobileParty`（军团成员队伍），不是单个英雄。

对 mod 开发者而言，想改军团成员的 AI 行为（例如让成员更倾向于独立、或更忠诚），应从这个 Behavior 的 `AiHourlyTick` 入手。

## 怎么用

### 怎么拿到

`AiArmyMemberBehavior` 由战役系统在默认行为集合里自动注册。要访问它：

```csharp
var aiArmy = Campaign.Current.GetBehavior<AiArmyMemberBehavior>();
```

### 典型用法

1. **观察成员决策**：订阅相关事件，在成员产生思考参数时记录或修改。
2. **调整 AI 倾向**：通过 mod 配置影响 `PartyThinkParams` 的生成，间接改变成员行为。
3. **扩展新决策**：在自己的 Behavior 里消费 `PartyThinkParams`，实现自定义军团策略。

### 坑

- **不要每帧调用 `AiHourlyTick`**：它是小时级入口，频繁调用会导致 AI 决策抖动。
- **`PartyThinkParams` 是值语义**：修改参数副本不会影响原始决策，要改就改生成逻辑。
- **军团解散后 tick 停止**：成员离开军团后不再产生思考参数。

## 关键成员

- `RegisterEvents()`（`AiArmyMemberBehavior.cs:43`）—— 挂载战役事件订阅，把军团成员 AI tick 接入战役时钟。
- `SyncData(IDataStore dataStore)`（`AiArmyMemberBehavior.cs:50`）—— 持久化军团成员 AI 状态，保证读档后决策连续。
- `AiHourlyTick(MobileParty mobileParty, PartyThinkParams p)`（`AiArmyMemberBehavior.cs:67`）—— 军团成员 AI 决策入口，每个游戏小时被调，为指定成员队伍生成思考参数。

## 真实示例

```csharp
// 在自己的 Behavior 里观察军团成员 AI 决策
public override void RegisterEvents()
{
    CampaignEvents.HourlyTickParty.AddNonSerializedListener(this, OnHourlyTick);
}

private void OnHourlyTick(MobileParty party)
{
    if (party.IsArmy)
    {
        // 军团成员的小时 tick，可在此观察或影响 AI 决策
    }
}
```

## 参见

- [`MBObjectBase`](../MBObjectBase) —— `MobileParty` 作为 MB 对象的基类。
- [`MBObjectManager`](../MBObjectManager) —— 军团成员队伍的注册与查找。
- [`MBGUID`](../MBGUID) —— 军团成员唯一标识，AI 状态按 GUID 持久化。
- [`BeHostileAction`](../../campaign/BeHostileAction) —— 军团成员 AI 决定敌对时的相关动作。

## 导航

- 返回 [campaign-ext 桶索引](../_index)
- 上一项：[AgingCampaignBehavior](../AgingCampaignBehavior)
- 下一项：[AiEngagePartyBehavior](../AiEngagePartyBehavior)
