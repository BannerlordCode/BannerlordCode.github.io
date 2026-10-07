---
title: "AiLandBanditPatrollingBehavior"
description: "陆上土匪巡逻 AI，控制土匪队伍的巡逻路径与行为。"
---
# AiLandBanditPatrollingBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class AiLandBanditPatrollingBehavior : CampaignBehaviorBase`
**Source:** `TaleWorlds.CampaignSystem/CampaignBehaviors/AiBehaviors/AiLandBanditPatrollingBehavior.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`AiLandBanditPatrollingBehavior` 是**陆上土匪巡逻 AI** 的行为。它属于 `AiBehaviors` 子命名空间，专门负责在战役时钟推进时，为陆上土匪队伍（`MobileParty`）生成巡逻决策，驱动土匪在地图上巡逻、游荡、寻找目标。它是 `CampaignBehaviorBase` 的标准子类，通过 `RegisterEvents()` 订阅战役事件、通过 `SyncData(IDataStore)` 持久化巡逻状态。

## 心智模型

把 `AiLandBanditPatrollingBehavior` 想成土匪的**巡逻队长**：每个游戏小时，它给土匪队伍下达下一步巡逻指令——往哪个方向走、是否追击附近目标、是否返回巢穴。

- **小时级 tick**：巡逻决策按游戏小时离散触发，与战役时钟对齐。
- **目标驱动**：巡逻不是随机游走，而是有目标偏好（商队、村庄、其他队伍）。
- **陆上限定**：只管陆上土匪，水上或其他类型敌人由其他 Behavior 负责。

对 mod 开发者而言，想改土匪的巡逻行为（例如让土匪更活跃、或限制其活动范围），应从这个 Behavior 的 `AiHourlyTick` 入手。

## 怎么用

### 怎么拿到

`AiLandBanditPatrollingBehavior` 由战役系统在默认行为集合里自动注册。要访问它：

```csharp
var aiBandit = Campaign.Current.GetBehavior<AiLandBanditPatrollingBehavior>();
```

### 典型用法

1. **观察土匪巡逻**：订阅相关事件，在土匪产生巡逻决策时记录或干预。
2. **调整巡逻范围**：通过 mod 配置影响巡逻半径与目标偏好，间接改变土匪活动区域。
3. **实现自定义敌人 AI**：在自己的 Behavior 里消费 `PartyThinkParams`，实现非土匪类敌人的巡逻逻辑。

### 坑

- **不要每帧调用 `AiHourlyTick`**：它是小时级入口，频繁调用会导致巡逻决策抖动。
- **`PartyThinkParams` 是值语义**：修改参数副本不会影响原始决策，要改就改生成逻辑。
- **土匪类型限定**：本 Behavior 只处理陆上土匪，对其他敌人类型无效。

## 关键成员

- `RegisterEvents()`（`AiLandBanditPatrollingBehavior.cs:12`）—— 挂载战役事件订阅，把土匪巡逻 tick 接入战役时钟。
- `SyncData(IDataStore dataStore)`（`AiLandBanditPatrollingBehavior.cs:18`）—— 持久化土匪巡逻状态，保证读档后巡逻连续。
- `AiHourlyTick(MobileParty mobileParty, PartyThinkParams p)`（`AiLandBanditPatrollingBehavior.cs:23`）—— 陆上土匪巡逻 AI 入口，每个游戏小时被调，为土匪队伍生成巡逻思考参数。

## 真实示例

```csharp
// 在自己的 Behavior 里观察土匪巡逻决策
public override void RegisterEvents()
{
    CampaignEvents.HourlyTickParty.AddNonSerializedListener(this, OnHourlyTick);
}

private void OnHourlyTick(MobileParty party)
{
    if (party.IsBandit)
    {
        // 土匪的小时 tick，可在此观察或影响巡逻决策
    }
}
```

## 参见

- [`MBObjectBase`](../MBObjectBase) —— `MobileParty` 作为 MB 对象的基类。
- [`MBObjectManager`](../MBObjectManager) —— 土匪队伍的注册与查找。
- [`MBGUID`](../MBGUID) —— 土匪队伍唯一标识，巡逻状态按 GUID 持久化。
- [`BeHostileAction`](../../campaign/BeHostileAction) —— 土匪巡逻发现目标时触发的敌对动作。

## 导航

- 返回 [campaign-ext 桶索引](../_index)
- 上一项：[AiEngagePartyBehavior](../AiEngagePartyBehavior)
- 下一项：[AgingCampaignBehavior](../AgingCampaignBehavior)
