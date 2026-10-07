---
title: "AddCompanionAction"
description: "把同伴挂进家族的入口：static class，仅一个 Apply(Clan, Hero)，内部先解雇原主再改 CompanionOf 并派发 OnNewCompanionAdded 事件"
---
# AddCompanionAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class AddCompanionAction`
**Source:** `TaleWorlds.CampaignSystem/Actions/AddCompanionAction.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`AddCompanionAction` 是「**把一个英雄变成某家族的同伴**」这一动作的官方入口。它是一个 `static class`，对外只暴露一个方法 `Apply(Clan clan, Hero companion)`。

内部逻辑（`ApplyInternal`）分三步：若该英雄已有主（`CompanionOf != null`），先调用 `RemoveCompanionAction.ApplyByFire` 将其从原家族**解雇**；然后把 `companion.CompanionOf` 指向新家族；最后通过 `CampaignEventDispatcher.Instance.OnNewCompanionAdded(companion)` 派发事件，让全战役系统知晓。

## 心智模型

把它想成**员工调档手续**：英雄（员工）只能挂在一个家族（公司）名下。调档时——

1. 先办离职：如果员工还在别的公司，先走 `RemoveCompanionAction.ApplyByFire` 解雇流程；
2. 再办入职：把 `CompanionOf` 字段改成新家族；
3. 最后发全公司广播：`OnNewCompanionAdded` 事件，所有订阅者（UI、AI、任务系统）同步更新。

这是战役层「动作（Action）」类的标准形态：**无状态、纯静态、一个 Apply 入口 + 一个 ApplyInternal 实现**，与 `AddHeroToPartyAction`、`RemoveCompanionAction` 等同族。

## 怎么用

### 怎么拿到

- 静态类，直接 `AddCompanionAction.Apply(clan, hero)` 调用，无需实例化。

### 典型用法

```csharp
// 场景：玩家家族招募一个自由英雄为同伴
AddCompanionAction.Apply(playerClan, targetHero);
// 之后 targetHero.CompanionOf == playerClan，且 OnNewCompanionAdded 已派发
```

### 坑

- **重复调用是安全的**：内部会先解雇原主，所以同一英雄反复 Apply 到不同家族不会残留旧关系；
- 事件只在 `ApplyInternal` 里派发一次——如果你绕过 `Apply` 直接改 `CompanionOf` 字段，UI 和 AI 不会收到通知；
- 命名空间是 `TaleWorlds.CampaignSystem.Actions`（带 `.Actions` 后缀），`using` 时别漏。

## 关键成员

- `Apply(Clan clan, Hero companion)`（`AddCompanionAction.cs:20`）—— 公开入口：把 `companion` 挂到 `clan` 名下成为同伴。
- `ApplyInternal(Clan clan, Hero companion)`（`AddCompanionAction.cs:11`）—— 私有实现：解雇原主 → 设置 `CompanionOf` → 派发 `OnNewCompanionAdded` 事件。

## 真实示例

```csharp
// 场景：Mod 中把某 NPC 英雄赠予玩家家族作为任务奖励
public void GrantCompanionToPlayer(Hero npc)
{
    Clan playerClan = Clan.PlayerClan;
    AddCompanionAction.Apply(playerClan, npc);
    // npc.CompanionOf 现在指向玩家家族；
    // CampaignEventDispatcher 的订阅者已收到 OnNewCompanionAdded(npc)
}
```

## 参见

- [Clan](../Clan) —— 家族类，`CompanionOf` 字段所指向的目标
- [Hero](../Hero) —— 英雄类，被挂载的同伴本体
- [AddHeroToPartyAction](../AddHeroToPartyAction) —— 同族动作类，把英雄塞进队伍

## 导航

- 返回 [campaign 桶索引](../_index)
- 同批页面：[AIBehaviorData](../AIBehaviorData) / [ActionNotes](../ActionNotes) / [AddHeroToPartyAction](../AddHeroToPartyAction)
