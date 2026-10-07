---
title: "MakeHeroFugitiveAction"
description: "MakeHeroFugitiveAction 把英雄打成在逃状态：先按早退、领队解散队伍、普通成员移出名册、离开据点四步摘干净社会关系，再置 CharacterStates.Fugitive 并广播 OnCharacterBecameFugitive。"
---
# MakeHeroFugitiveAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/MakeHeroFugitiveAction.cs`

## 概述

`MakeHeroFugitiveAction` 是「让一个英雄变成在逃者」的静态动作。它做的事可以概括成一句话：**先把这个英雄从所有社会关系里摘出去，再给他盖上 `Fugitive` 状态章，最后广播一声。**

摘关系分四步，顺序固定：`MakeHeroFugitiveAction.cs:7` 起先判活，死了就直接 return；`MakeHeroFugitiveAction.cs:11` 起处理队伍——他是领队就整队解散，不是领队就从花名册里把他那一格删掉；`MakeHeroFugitiveAction.cs:22` 起处理据点——他正待在某个据点里就让他离城；`MakeHeroFugitiveAction.cs:26` 置状态；`MakeHeroFugitiveAction.cs:27` 广播 `OnCharacterBecameFugitive`。

它与 `DisableHeroAction` 是**双胞胎结构**：同样的早退、同样的领队/普通成员分支、同样的离城调用。**差别只有两处**——终态是 `CharacterStates.Fugitive` 而不是 `Disabled`，而且它多一个 `showNotification` 参数。

## 心智模型

**把它想成「摘关系 → 盖章 → 广播」三段式，而不是「设个状态」那么轻。**

1. **状态只是结果，摘关系才是主体。** `MakeHeroFugitiveAction.cs:26` 的 `ChangeState` 只有一行，而它前面 `MakeHeroFugitiveAction.cs:7` 到 `MakeHeroFugitiveAction.cs:24` 全是副作用。**所以「英雄变成在逃」在数据上的真正含义是：他不在任何队伍里、不在任何据点里、`HeroState` 是 `Fugitive`。** 三者缺一，订阅方读到的状态就是自相矛盾的。
2. **领队与普通成员走的是两条完全不同的分支。** `MakeHeroFugitiveAction.cs:13` 判 `PartyBelongedTo.LeaderHero == fugitive`：是领队就 `DestroyPartyAction.Apply(null, fugitive.PartyBelongedTo)`（`MakeHeroFugitiveAction.cs:15`）——**整队消失**；不是领队就 `MemberRoster.RemoveTroop(fugitive.CharacterObject)`（`MakeHeroFugitiveAction.cs:19`）——**只删他这一格，队伍还在**。**这个分支判断决定了「他的部下们是跟着一起消失还是留下」，是调用前必须想清楚的事。**
3. **`ChangeState(Fugitive)` 自己不发事件。** `Hero.ChangeState`（`Hero.cs:1762`）里的 switch 只对 `Traveling` 和 `Active` 两个值派发事件，`Fugitive` 落在 default 里什么也不做。**所以 `MakeHeroFugitiveAction.cs:27` 的 `OnCharacterBecameFugitive` 是这次状态变更的唯一通知出口**——少了它，`IsFugitive`（`Hero.cs:302`）已经为 true 却没人被告知。
4. **`showNotification` 默认是 `false`。** `MakeHeroFugitiveAction.cs:30` 的签名给了默认值，而绝大多数调用点都不传。**所以「静默变成在逃」是常态，要弹窗提示必须显式传 `true`。**

## 怎么用

### 怎么拿到

**源文件：** `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/MakeHeroFugitiveAction.cs`（全文 34 行）。

**类声明：** `public static class MakeHeroFugitiveAction`（`MakeHeroFugitiveAction.cs:3`）。

**公开入口：** `public static void Apply(Hero fugitive, bool showNotification = false)`（`MakeHeroFugitiveAction.cs:30`），内部转调私有的 `ApplyInternal(Hero, bool)`（`MakeHeroFugitiveAction.cs:5`）。**`ApplyInternal` 是 private，mod 侧只能走 `Apply`。**

**主要调用点（全树共 18 处，以下 4 处最能说明语义）：**

- `Hero.cs:1630` 与 `Hero.cs:1640` —— 读旧存档（早于 v1.2.8.31599）时的数据修复：英雄名义上属于主队伍但花名册里没有他，就把他打成在逃。
- `ApplyHeirSelectionAction.cs:60` —— 选继承人时，把主队伍花名册里除主角以外的英雄全部打成在逃，逼他们离队。
- `EndCaptivityAction.cs:53` —— 囚犯被释放后，若他是玩家同伴则打成在逃（`EndCaptivityAction.cs:57` 是 default 分支，覆盖其余释放原因）。

### 典型用法

**让一个英雄静默变成在逃（最常用）：**

```csharp
MakeHeroFugitiveAction.Apply(hero);
```

**要让界面弹提示就显式传第二个参数：**

```csharp
MakeHeroFugitiveAction.Apply(hero, showNotification: true);
```

**只想摘关系、不想改状态的话，这个动作给不了你**——`ApplyInternal` 是 private，而 `Apply` 一定会走到 `MakeHeroFugitiveAction.cs:26`。要拆开就得自己按 `MakeHeroFugitiveAction.cs:11` 到 `MakeHeroFugitiveAction.cs:24` 的顺序复刻。

### 坑

- **领队是主角时，队伍不会被解散。** `MakeHeroFugitiveAction.cs:15` 调的 `DestroyPartyAction.Apply` 内部第一件事就是 `if (destroyedParty != MobileParty.MainParty)`（`DestroyPartyAction.cs:12`）——**主队伍直接跳过，什么都不做。** 所以「主角变成在逃」时他的队伍原样保留，只有 `MakeHeroFugitiveAction.cs:26` 的状态和 `MakeHeroFugitiveAction.cs:27` 的事件会发生。
- **`MakeHeroFugitiveAction.cs:22` 那道 `CurrentSettlement != null` 判断是承重的。** 它保护的 `LeaveSettlementAction.ApplyForCharacterOnly`（`LeaveSettlementAction.cs:36`）第一行就把 `hero.CurrentSettlement` 存进局部变量，紧接着 `LeaveSettlementAction.cs:39` 就读 `currentSettlement.LocationComplex`——**`CurrentSettlement` 为 null 时那里直接空引用。** 少了这道判断，任何让「不在据点里的英雄」变成在逃的调用都会崩。
- **离城不发 `OnSettlementLeft`。** `LeaveSettlementAction.ApplyForCharacterOnly`（`LeaveSettlementAction.cs:36`）只清 `StayingInSettlement` 并从据点场景里摘掉角色，**`OnSettlementLeft` 只在 `ApplyForParty`（`LeaveSettlementAction.cs:33`）里派发。** 所以订阅「谁离开了据点」的 mod 收不到在逃英雄离城的通知。
- **死了的英雄静默返回。** `MakeHeroFugitiveAction.cs:7` 判 `!fugitive.IsAlive` 就 return（`IsAlive` 定义在 `Hero.cs:316`，即 `!IsDead`）——**不改状态、不发事件、没有任何日志。** 想确认「为什么没生效」时先查活着的。
- **`showNotification` 默认 `false`。** `MakeHeroFugitiveAction.cs:30` 的默认值意味着**绝大多数调用是静默的**。如果你在 mod 里依赖「变成在逃时玩家会看到提示」，得自己传 `true`。
- **与 `DisableHeroAction` 的差别别记错。** 两者骨架相同，但 `DisableHeroAction` 多一步 `StayingInSettlement` 处理（`DisableHeroAction.cs:22` 起）和囚犯处理（`DisableHeroAction.cs:31` 起），终态是 `Disabled`。**要「在逃」就用 `MakeHeroFugitiveAction`，要「隐居」就用 `DisableHeroAction`。**

## 关键成员

- `MakeHeroFugitiveAction.Apply(Hero, bool)` — `MakeHeroFugitiveAction.cs:30`，**唯一公开入口**，`showNotification` 默认 `false`，转调 `ApplyInternal`。
- `MakeHeroFugitiveAction.ApplyInternal(Hero, bool)` — `MakeHeroFugitiveAction.cs:5`，**真正干活的那个**：早退判活、领队/普通成员分支、离城、置状态、广播，五步按序执行。
- `DestroyPartyAction.Apply(PartyBase, MobileParty)` — `DestroyPartyAction.cs:29`，**领队分支的执行者**，整队移除并派发 `OnMobilePartyDestroyed`；**但对主队伍是空操作**（`DestroyPartyAction.cs:12`）。
- `LeaveSettlementAction.ApplyForCharacterOnly(Hero)` — `LeaveSettlementAction.cs:36`，**离城执行者**，清 `StayingInSettlement` 并从据点场景摘掉角色，**不发 `OnSettlementLeft`**。
- `Hero.ChangeState(CharacterStates)` — `Hero.cs:1762`，**盖章**，内部 switch 只对 `Traveling` 与 `Active` 派发事件，**`Fugitive` 不发**。
- `CampaignEventDispatcher.Instance.OnCharacterBecameFugitive(Hero, bool)` — `CampaignEventDispatcher.cs:702`，**广播出口**，虚方法在 `CampaignEventReceiver.cs:325`，事件字段在 `CampaignEvents.cs:1778`。

## 真实示例

```csharp
// 复刻 MakeHeroFugitiveAction.cs:7 —— 早退判活
if (!fugitive.IsAlive)
{
    return;
}

// 复刻 MakeHeroFugitiveAction.cs:13 与 MakeHeroFugitiveAction.cs:15 —— 领队则整队解散
if (fugitive.PartyBelongedTo != null && fugitive.PartyBelongedTo.LeaderHero == fugitive)
{
    DestroyPartyAction.Apply(null, fugitive.PartyBelongedTo);
}

// 复刻 MakeHeroFugitiveAction.cs:26 —— 置在逃状态
fugitive.ChangeState(Hero.CharacterStates.Fugitive);

// 复刻 MakeHeroFugitiveAction.cs:27 —— 广播（showNotification 由调用方决定）
CampaignEventDispatcher.Instance.OnCharacterBecameFugitive(fugitive, showNotification);
```

**逐条核源：** 第一段对应 `MakeHeroFugitiveAction.cs:7` 到 `MakeHeroFugitiveAction.cs:9`，`IsAlive` 是 `Hero.cs:316` 的表达式属性；第二段对应 `MakeHeroFugitiveAction.cs:13` 与 `MakeHeroFugitiveAction.cs:15`，注意 `DestroyPartyAction.Apply` 的第一个参数传 `null` 表示「没有摧毁方」，它只被透传进 `OnMobilePartyDestroyed`；第三段对应 `MakeHeroFugitiveAction.cs:26`，`CharacterStates` 枚举定义在 `Hero.cs:28`，`Fugitive` 是第三个值；第四段对应 `MakeHeroFugitiveAction.cs:27`，**这是整次状态变更唯一的事件出口**。

## 参见

- [DisableHeroAction](../DisableHeroAction) — 双胞胎类，骨架相同但终态是 `Disabled` 且多两步处理
- [DestroyPartyAction](../DestroyPartyAction) — 领队分支的执行者，对主队伍空操作
- [LeaveSettlementAction](../LeaveSettlementAction) — 离城执行者，`ApplyForCharacterOnly` 不发离城事件
- [Hero](../../campaign/Hero) — `CharacterStates` 枚举的宿主，`Fugitive` 是其中一员
- [CampaignEventDispatcher](../CampaignEventDispatcher) 与 [CampaignEventReceiver](../CampaignEventReceiver) — 事件派发与接收两端

## 导航

- [本区域目录](../)
