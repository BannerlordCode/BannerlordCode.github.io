---
title: "AiEngagePartyBehavior"
description: "AI 交战决策行为，控制队伍是否主动与目标队伍交战。"
---
# AiEngagePartyBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class AiEngagePartyBehavior : CampaignBehaviorBase`
**Source:** `TaleWorlds.CampaignSystem/CampaignBehaviors/AiBehaviors/AiEngagePartyBehavior.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`AiEngagePartyBehavior` 是**AI 交战决策**的行为。它属于 `AiBehaviors` 子命名空间，负责在战役时钟推进时，判断一个队伍（`MobileParty`）是否应该主动与另一个队伍进入交战状态。它是 `CampaignBehaviorBase` 的标准子类，通过 `RegisterEvents()` 订阅战役事件、通过 `SyncData(IDataStore)` 持久化交战相关状态。

## 心智模型

把 `AiEngagePartyBehavior` 想成队伍的**作战决策官**：每个游戏小时，它评估当前态势（兵力对比、距离、仇恨关系、阵营立场），决定「打还是不打」。

- **小时级评估**：交战决策按游戏小时离散触发，与战役时钟对齐。
- **态势驱动**：决策依据是当前的战场态势，不是固定脚本。
- **双向判定**：交战是双方的，本 Behavior 从单方视角评估是否主动接战。

对 mod 开发者而言，想改 AI 的交战倾向（例如让某阵营更激进、或让某类队伍避免交战），应从这个 Behavior 入手。

## 怎么用

### 怎么拿到

`AiEngagePartyBehavior` 由战役系统在默认行为集合里自动注册。要访问它：

```csharp
var aiEngage = Campaign.Current.GetBehavior<AiEngagePartyBehavior>();
```

### 典型用法

1. **观察交战决策**：订阅相关事件，在 AI 决定是否交战时记录或干预。
2. **调整交战阈值**：通过 mod 配置影响交战评估的权重，间接改变 AI 攻击性。
3. **实现和平/敌对策略**：在自己的 Behavior 里覆盖交战决策，实现自定义外交-军事联动。

### 坑

- **交战是双向的**：本 Behavior 只决定单方是否主动接战，最终是否打起来还看对方。
- **不要绕过态势评估直接开战**：直接调用交战 API 会绕过 AI 的后果评估，可能导致外交关系异常。
- **读档后决策状态恢复**：交战相关状态通过 `SyncData` 持久化，读档后继续评估。

## 关键成员

- `RegisterEvents()`（`AiEngagePartyBehavior.cs:15`）—— 挂载战役事件订阅，把交战评估接入战役时钟。
- `SyncData(IDataStore dataStore)`（`AiEngagePartyBehavior.cs:28`）—— 持久化交战相关状态，保证读档后决策连续。

## 真实示例

```csharp
// 在自己的 Behavior 里观察 AI 交战决策
public override void RegisterEvents()
{
    CampaignEvents.HourlyTickParty.AddNonSerializedListener(this, OnHourlyTick);
}

private void OnHourlyTick(MobileParty party)
{
    // 小时 tick，可在此观察或影响 AI 交战评估
    // 实际交战决策由 AiEngagePartyBehavior 完成
}
```

## 参见

- [`MBObjectBase`](../MBObjectBase) —— `MobileParty` 作为 MB 对象的基类。
- [`MBObjectManager`](../MBObjectManager) —— 队伍的注册与查找。
- [`MBGUID`](../MBGUID) —— 队伍唯一标识，交战状态按 GUID 持久化。
- [`BeHostileAction`](../../campaign/BeHostileAction) —— AI 决定交战时触发的敌对动作。

## 导航

- 返回 [campaign-ext 桶索引](../_index)
- 上一项：[AiArmyMemberBehavior](../AiArmyMemberBehavior)
- 下一项：[AiLandBanditPatrollingBehavior](../AiLandBanditPatrollingBehavior)
