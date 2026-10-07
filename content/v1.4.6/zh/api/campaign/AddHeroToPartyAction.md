---
title: "AddHeroToPartyAction"
description: "把英雄塞进移动队伍的入口：static class，Apply(Hero, MobileParty, bool showNotification = true)，处理原队伍结算、总督卸任、名册加入与通知"
---
# AddHeroToPartyAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class AddHeroToPartyAction`
**Source:** `TaleWorlds.CampaignSystem/Actions/AddHeroToPartyAction.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`AddHeroToPartyAction` 是「**把一个英雄加入某支移动队伍**」的官方入口，典型场景包括囚犯转化、征召入伍、同伴归队等。它是一个 `static class`，对外只暴露 `Apply(Hero hero, MobileParty party, bool showNotification = true)`。

内部逻辑（`ApplyInternal`）处理完整的转队手续：

1. 若英雄原属某队伍（`hero.PartyBelongedTo != null`），从原队伍名册中**减员计数**；
2. 清空 `hero.StayingInSettlement`（不再驻留定居点）；
3. 若英雄是总督（`hero.GovernorOf != null`），调用 `ChangeGovernorAction.RemoveGovernorOf` **卸任总督**；
4. 把英雄加入新队伍名册（`AddElementToMemberRoster`）；
5. 派发 `CampaignEventDispatcher.Instance.OnHeroJoinedParty(hero, newParty)` 事件；
6. 若 `showNotification` 为真、目标是玩家主队伍、且英雄是玩家同伴，弹出「同伴已加入」的快速提示。

## 心智模型

把它想成**员工调部门**：英雄从原部门（队伍/驻留地/总督职位）调到新部门（目标队伍）。调动的完整手续是——

1. 原部门销编（名册减员）；
2. 解除兼职（驻留定居点、总督职位都要清空，一人不能兼两职）；
3. 新部门入编（名册加人）；
4. 全公司广播（`OnHeroJoinedParty` 事件）；
5. 如果是「核心员工」（玩家同伴）进了「总公司」（主队伍），还要弹公告（快速提示）。

与 `AddCompanionAction` 一样，这是战役层「动作（Action）」类的标准形态：**无状态、纯静态、Apply + ApplyInternal**。

## 怎么用

### 怎么拿到

- 静态类，直接 `AddHeroToPartyAction.Apply(hero, party)` 调用，无需实例化。

### 典型用法

```csharp
// 场景：囚犯转化——把敌方英雄加入玩家队伍
AddHeroToPartyAction.Apply(capturedHero, MobileParty.MainParty);

// 场景：静默加入（不弹通知）
AddHeroToPartyAction.Apply(hero, someParty, showNotification: false);
```

### 坑

- **总督会被自动卸任**：如果英雄是某定居点总督，Apply 后其总督身份被移除——这是设计而非副作用，调用前需确认是否接受；
- `showNotification` 只在「目标是 `MobileParty.MainParty` 且英雄是玩家同伴」时才真正弹提示，其他情况传 `true` 也不会有提示；
- 事件只在 `ApplyInternal` 里派发——绕过 `Apply` 直接改字段会导致 UI/AI 不同步；
- 命名空间是 `TaleWorlds.CampaignSystem.Actions`（带 `.Actions` 后缀），`using` 时别漏。

## 关键成员

- `Apply(Hero hero, MobileParty party, bool showNotification = true)`（`AddHeroToPartyAction.cs:37`）—— 公开入口：把 `hero` 加入 `party`，可选是否弹加入提示。
- `ApplyInternal(Hero hero, MobileParty newParty, bool showNotification = true)`（`AddHeroToPartyAction.cs:13`）—— 私有实现：原队伍销编 → 清空驻留 → 总督卸任 → 新队伍入编 → 派发 `OnHeroJoinedParty` → 按需弹提示。

## 真实示例

```csharp
// 场景：Mod 中完成「招募囚犯」任务后把英雄加入玩家队伍
public void RecruitPrisoner(Hero prisoner)
{
    AddHeroToPartyAction.Apply(prisoner, MobileParty.MainParty);
    // prisoner.PartyBelongedTo 现在指向主队伍；
    // 若 prisoner 是总督，其总督职位已被自动解除；
    // OnHeroJoinedParty 事件已派发，UI 与 AI 同步更新
}

// 场景：AI 内部静默调队（不弹提示）
AddHeroToPartyAction.Apply(hero, aiParty, showNotification: false);
```

## 参见

- [Hero](../Hero) —— 英雄类，被加入队伍的对象
- [Clan](../Clan) —— 家族类，队伍与英雄的归属背景
- [AddCompanionAction](../AddCompanionAction) —— 同族动作类，把英雄挂为家族同伴

## 导航

- 返回 [campaign 桶索引](../_index)
- 同批页面：[AIBehaviorData](../AIBehaviorData) / [ActionNotes](../ActionNotes) / [AddCompanionAction](../AddCompanionAction)
