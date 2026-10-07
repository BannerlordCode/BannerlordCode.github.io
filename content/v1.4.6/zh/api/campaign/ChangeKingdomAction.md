---
title: "ChangeKingdomAction"
description: "让家族加入或退出王国的统一入口：9 个 ApplyBy* 方法覆盖加入/叛逃/建国/退出/叛乱/佣兵等途径，全部委托同一个 ApplyInternal。"
---
# ChangeKingdomAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class ChangeKingdomAction`
**Source:** `TaleWorlds.CampaignSystem/Actions/ChangeKingdomAction.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`ChangeKingdomAction` 是「改变家族所属王国」的统一入口。它把「换王国」这件事拆成两个维度：**目标王国**（加入谁，或 `null` 表示退出）和**途径**（`ChangeKingdomActionDetail` 枚举）。

对外它提供 9 个 `ApplyBy*` 方法，每个对应一种业务场景；它们全部转发给同一个私有 `ApplyInternal`，只是传入不同的 `detail` 枚举和附加参数。

## 心智模型

**它是一个「场景 → 枚举」的翻译层**，真正的逻辑在 `ApplyInternal`。

- 9 个 `ApplyBy*` 的差别只有两个：传哪个 `ChangeKingdomActionDetail`，以及是否额外触发事件。
- 只有 `ApplyByJoinToKingdomByDefection` 会额外派发 `OnClanDefected` 事件（`:160`）—— 叛逃需要通知原王国。
- 加入类方法大多接受 `CampaignTime shouldStayInKingdomUntil`，用来限制「必须待到某个时间点」（佣兵合同、临时加入）。
- 退出类方法把 `newKingdom` 传 `null`，靠 `detail` 区分是普通退出、被灭国、叛乱还是家族毁灭。

**为什么分 9 个方法**：换王国在游戏里是**强后果**事件（影响外交、战争、领地、继承）。不同途径的后续处理不同，所以用方法名把语义固定下来，而不是让调用方自己拼枚举。

## 怎么用

### 怎么拿到

静态类，直接调：

```csharp
ChangeKingdomAction.ApplyByJoinToKingdom(clan, newKingdom);
```

### 典型用法

```csharp
// 家族加入一个王国（可指定必须待到何时）
ChangeKingdomAction.ApplyByJoinToKingdom(clan, kingdom,
    shouldStayInKingdomUntil: CampaignTime.FromDays(30));

// 家族退出当前王国
ChangeKingdomAction.ApplyByLeaveKingdom(clan);

// 以佣兵身份加入（awardMultiplier 默认 50）
ChangeKingdomAction.ApplyByJoinFactionAsMercenary(clan, kingdom);
```

### 坑

- **退出类方法不检查家族是否真的有王国**。对 `clan.Kingdom == null` 的家族调 `ApplyByLeaveKingdom` 不会报错，只是无效果。
- **`ApplyByJoinToKingdomByDefection` 会触发 `OnClanDefected`** —— mod 如果挂了这个事件，要预期它在此刻被调用。
- **4 个 `const float` 是平衡常数**（`PotentialSettlementsPerNobleEffect` 等），改它们会全局影响王国实力评估。

## 关键成员

- `ApplyByJoinToKingdom(Clan, Kingdom, CampaignTime, bool)`（`ChangeKingdomAction.cs:152`）—— 普通加入。
- `ApplyByJoinToKingdomByDefection(Clan, Kingdom, Kingdom, CampaignTime, bool)`（`ChangeKingdomAction.cs:158`）—— 叛逃加入，额外派发 `OnClanDefected`。
- `ApplyByCreateKingdom(Clan, Kingdom, bool)`（`ChangeKingdomAction.cs:165`）—— 建国并加入。
- `ApplyByLeaveByKingdomDestruction(Clan, bool)`（`ChangeKingdomAction.cs:171`）—— 因王国被灭而退出。
- `ApplyByLeaveKingdom(Clan, bool)`（`ChangeKingdomAction.cs:177`）—— 普通退出。
- `ApplyByLeaveWithRebellionAgainstKingdom(Clan, bool)`（`ChangeKingdomAction.cs:183`）—— 叛乱退出。
- `ApplyByJoinFactionAsMercenary(Clan, Kingdom, CampaignTime, int, bool)`（`ChangeKingdomAction.cs:189`）—— 以佣兵身份加入，`awardMultiplier` 默认 50。
- `ApplyByLeaveKingdomAsMercenary(Clan, bool)`（`ChangeKingdomAction.cs:195`）—— 退出佣兵身份。
- `ApplyByLeaveKingdomByClanDestruction(Clan, bool)`（`ChangeKingdomAction.cs:201`）—— 因家族毁灭而退出。
- `PotentialSettlementsPerNobleEffect = 0.2f` / `NewGainedFiefsValueForKingdomConstant = 0.1f` / `LordsUnitStrengthValue = 20f` / `MercenaryUnitStrengthValue = 5f`（`ChangeKingdomAction.cs:235`-`:244`）—— 王国实力评估常数。

## 真实示例

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

public static void JoinKingdom(Clan clan, Kingdom kingdom)
{
    // 普通加入：一个方法调用完成
    ChangeKingdomAction.ApplyByJoinToKingdom(clan, kingdom);
}

public static void BecomeMercenary(Clan clan, Kingdom kingdom)
{
    // 佣兵加入：默认 awardMultiplier = 50
    ChangeKingdomAction.ApplyByJoinFactionAsMercenary(clan, kingdom);
}
```

## 参见

- [`BeHostileAction`](../BeHostileAction) —— 同属「改变阵营间状态」的 Action 家族，但改的是关系值而非王国归属。
- [`AddCompanionAction`](../AddCompanionAction) —— 把英雄挂进家族，常与换王国配合（先换王国再调同伴）。
- [`_index`](../_index) —— `campaign` 桶全类型索引。

## 导航

- 同桶：[`../AIBehaviorData`](../AIBehaviorData) · [`../ActionNotes`](../ActionNotes) · [`../AddCompanionAction`](../AddCompanionAction) · [`../AddHeroToPartyAction`](../AddHeroToPartyAction)
- 父索引：[`../_index`](../_index)
