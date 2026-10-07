---
title: "Campaign Action 家族 — *Action.Apply 统一入口"
description: "战役层所有状态改变的统一入口：62 个 *Action 静态类如何改数据并广播事件，以及 Action 之间的级联关系。"
---

# Campaign Action 家族

**Namespace:** `TaleWorlds.CampaignSystem.Actions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** 架构主题页 — 覆盖 `TaleWorlds.CampaignSystem.Actions` 下 62 个 `*Action` 入口类  
**源文件：** `TaleWorlds.CampaignSystem/Actions/`  
**行号口径：** 本页所有 `X.cs:N` 均指 **v1.3.15** 源码树（`bannerlord-1.3.15/`）。

> 节 schema：本页采用规范七节（概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航）。

## 概述

在战役层，几乎每一次「世界状态改变」——给钱、结仇、杀人、毁村、换统治者——都不是由调用方直接改字段，而是统一收敛到一个静态入口：`TaleWorlds.CampaignSystem.Actions` 命名空间下的 `*Action` 类。你调它的 `ApplyXxx`，它负责两件事：把数据改对（含 clamp、守门、按付款方/收款方类型分支），然后广播一个战役事件。于是 UI、任务、AI、存档这些下游系统不需要知道「谁改了数据」，只需要订阅事件。本页覆盖该家族 62 个入口类，讲清它的统一形态、为什么必须走它、以及 Action 之间如何级联。

家族规模（命令可复算）：

- `ls TaleWorlds.CampaignSystem/Actions/*.cs | wc -l` → **62**
- `grep -h "public static void Apply" TaleWorlds.CampaignSystem/Actions/*.cs | wc -l` → **172**
- `grep -h "static void ApplyInternal" TaleWorlds.CampaignSystem/Actions/*.cs | wc -l` → **54**
- `grep -l "public static class" TaleWorlds.CampaignSystem/Actions/*.cs | wc -l` → **58**

## 心智模型

**① 家族统一形态。** 62 个文件里 58 个是 `public static class`：无实例状态、无构造函数、不可继承，公开面是一组静态 `ApplyXxx`（全家族共 172 个），真正干活的是私有 `ApplyInternal`（全家族共 54 个）。4 个例外：`ChangePlayerCharacterAction` / `ChangeRulingClanAction` / `RaftStateChangeAction` 是普通 class，`EndCaptivityDetail` 是 enum/辅助类型，不是 Action 入口。看到 `ApplyInternal` 就知道：公开重载只是「选参数」的壳，语义全在内部那一处。

**② 为什么不能直接改字段。** `Hero.cs:1597` 的 `Gold` 有 public setter，行体只有 `this._gold = MathF.Max(0, value)`；同文件里的 `SetPersonalRelation` 是同一形态。直接改编译得过、也真的改了数，但它**只做 clamp，不发任何事件** ⇒ 经济事件链断掉，UI/任务/模型都收不到通知。`GiveGoldAction.cs:12` 之所以存在，正是因为它在那 30 行里把「写余额」和 `CampaignEventDispatcher.Instance.OnHeroOrPartyTradedGold`（`GiveGoldAction.cs:42`）绑在一起。

**③ Action 与事件的级联关系。** 链路是 Action → `CampaignEventDispatcher.Instance.OnXxx` → `CampaignEvents.XxxEvent` → Behavior 订阅者。三处 file:行号：`CampaignEventDispatcher.cs:299`（`OnHeroOrPartyTradedGold`）、`CampaignEvents.cs:501`（`HeroRelationChanged`）、`CampaignEvents.cs:1285`（`HeroKilledEvent`）。`CampaignEvents.cs:1294` 的 `OnHeroKilled` 是订阅端转发实现，`CharacterRelationCampaignBehavior.cs:31` 是真实订阅样例。

**④ Action 之间会互相调用形成级联。** `BeHostileAction.cs:194` 在宣战时顺带调 `ChangeRelationAction.ApplyPlayerRelation(..., -10, ...)`；`KillCharacterAction.cs:91` / `KillCharacterAction.cs:125` / `KillCharacterAction.cs:146` 分别调 `ChangeRulingClanAction.Apply` / `DestroyPartyAction.Apply` / `DestroyClanAction.Apply`。所以**不要在事件回调里再调同一个 Action**——那会沿着同一条链二次触发，轻则重复扣重，重则递归。

**⑤ 何时不要用 Action。** 只读计算、纯查询、只改本地瞬时状态（比如一个 UI 临时变量）不要走 Action。Action 的代价是「改数据 + 广播事件」，只为读而调它是纯浪费，还会让事件流里出现噪声。

**⑥ 出错会怎样。** 绕过 Action = 事件不发 = 其它系统状态发散：钱给了但任务没触发、人死了但 clan 没换统治者。而且它**不会立刻崩**，只是某天 UI 数字对不上、某个任务永远不完成——这是最难查的一类 bug。

## 怎么用

1. **先按语义找对应 Action。** 金币 → `GiveGoldAction`；关系 → `ChangeRelationAction`；死亡 → `KillCharacterAction`。命名是 `动词 + 名词 + Action`，不要自己 new 一个。
2. **读它的公开 `ApplyXxx` 重载，选匹配你「付款方/收款方」或「原因」的那个。** 给钱用 `GiveGoldAction.cs:46` 的 `ApplyBetweenCharacters`；杀人按原因选 `KillCharacterAction.cs:180`（老死）/ `KillCharacterAction.cs:192`（战死）/ `KillCharacterAction.cs:198`（谋杀）/ `KillCharacterAction.cs:210`（处刑）/ `KillCharacterAction.cs:222`（静默移除）。
3. **需要通知就保持 `disableNotification=false` / `showNotification=true`。** 默认值因重载而异：`KillCharacterAction.cs:222` 默认 `showNotification=false`，别想当然。
4. **不要在事件回调里再调同一个 Action。** 会沿同一条链级联触发（见心智模型 ④）。
5. **需要监听结果就在 Behavior 里订阅 `CampaignEvents`。** 样例见 `CharacterRelationCampaignBehavior.cs:31`：`AddNonSerializedListener` 把方法挂到 `CampaignEvents.HeroRelationChanged`。

## 关键成员

家族规模：**62 文件 / 58 static class / 172 个 `ApplyXxx` / 54 个 `ApplyInternal`**（命令见概述）。

| 符号 | file:行号 | 它做什么 |
| --- | --- | --- |
| `GiveGoldAction` | `GiveGoldAction.cs:9` | 金币转移家族入口：`public static class`，公开面只有 `ApplyBetweenCharacters` 一个重载 |
| `GiveGoldAction.ApplyInternal` | `GiveGoldAction.cs:12` | 真正干活处：先 `MathF.Min(giverHero.Gold, goldAmount)` 防超支，再按付款方/收款方类型写余额，最后发 `OnHeroOrPartyTradedGold` |
| `GiveGoldAction.ApplyBetweenCharacters` | `GiveGoldAction.cs:46` | 46 行体只有一行，转发给 `ApplyInternal`；`disableNotification=false` 时显示快速提示 |
| `ChangeRelationAction` | `ChangeRelationAction.cs:8` | 关系改变家族入口：`public static class`，三个公开重载分别对应「对玩家 / 两英雄之间 / 使节」 |
| `ChangeRelationAction.ApplyInternal` | `ChangeRelationAction.cs:11` | 取当前关系 → 加 change → `MBMath.ClampInt(num, -100, 100)` → 发 `OnHeroRelationChanged` |
| `ChangeRelationAction.ApplyPlayerRelation` | `ChangeRelationAction.cs:30` | 改「玩家 vs 某英雄」的关系，`affectRelatives` 可连带影响亲属 |
| `ChangeRelationAction.ApplyRelationChangeBetweenHeroes` | `ChangeRelationAction.cs:36` | 改两个任意英雄之间的关系，mod 最常用的重载 |
| `ChangeRelationAction.ApplyEmissaryRelation` | `ChangeRelationAction.cs:42` | 改使节与目标英雄的关系，供外交/谈判流程使用 |
| `KillCharacterAction` | `KillCharacterAction.cs:19` | 死亡家族入口：`public static class`，11 个 `ApplyByXxx` 共用一个 `ApplyInternal` |
| `KillCharacterAction.ApplyInternal` | `KillCharacterAction.cs:22` | 守门 `victim.CanDie(actionDetail)`（除非 `isForced`），再依次发 `OnBeforeMainCharacterDied`（`KillCharacterAction.cs:58`）/ `OnBeforeHeroKilled`（`KillCharacterAction.cs:61`）/ `OnHeroKilled`（`KillCharacterAction.cs:149`） |
| `KillCharacterAction.ApplyByOldAge` | `KillCharacterAction.cs:180` | 自然老死：无 killer |
| `KillCharacterAction.ApplyByBattle` | `KillCharacterAction.cs:192` | 战死：killer 为击杀方英雄 |
| `KillCharacterAction.ApplyByMurder` | `KillCharacterAction.cs:198` | 谋杀：killer 可空 |
| `KillCharacterAction.ApplyByExecution` | `KillCharacterAction.cs:210` | 处刑：`isForced` 可绕过 `CanDie` 守门 |
| `KillCharacterAction.ApplyByRemove` | `KillCharacterAction.cs:222` | 静默移除：默认 `showNotification=false`、`isForced=true` |
| `KillCharacterAction.KillCharacterActionDetail` | `KillCharacterAction.cs:22` | 死亡原因枚举：11 个 `ApplyByXxx` 的唯一差别就是传哪个值——同一动作、不同原因 |
| `Hero.Gold` | `Hero.cs:1597` | 有 public setter，但行体只做 `MathF.Max(0, value)`，不发事件——不能直接改 |
| `Hero.SetPersonalRelation` | 见上（`Hero.cs`） | 同型：直接改关系值不发事件，关系变化必须走 `ChangeRelationAction` |
| `CampaignEventDispatcher.OnHeroOrPartyTradedGold` | `CampaignEventDispatcher.cs:299` | 金币事件派发点，`GiveGoldAction` 内部调它 |
| `CampaignEventDispatcher.OnHeroKilled` | `CampaignEventDispatcher.cs:689` | 死亡事件派发点 |
| `CampaignEventDispatcher.OnBeforeHeroKilled` | `CampaignEventDispatcher.cs:699` | 死亡前派发点，给「阻止/改写死亡」的 Behavior 用 |
| `CampaignEvents.HeroRelationChanged` | `CampaignEvents.cs:501` | 关系事件声明，Behavior 订阅它 |
| `CampaignEvents.HeroKilledEvent` | `CampaignEvents.cs:1285` | 死亡事件声明 |
| `CampaignEvents.OnHeroKilled` | `CampaignEvents.cs:1294` | 事件订阅端转发实现 |
| `CharacterRelationCampaignBehavior` 订阅 | `CharacterRelationCampaignBehavior.cs:31` | 真实订阅样例：`AddNonSerializedListener` 把 `OnHeroRelationChanged` 挂到 `CampaignEvents.HeroRelationChanged` |
| `BeHostileAction` 内的级联 | `BeHostileAction.cs:194` | Action 调 Action：宣战时顺带 `ChangeRelationAction.ApplyPlayerRelation(..., -10, ...)` |
| `KillCharacterAction` 内的级联 | `KillCharacterAction.cs:91` | 国王死亡后调 `ChangeRulingClanAction.Apply` 换统治者 |
| `KillCharacterAction` 内的级联 | `KillCharacterAction.cs:125` | 调 `DestroyPartyAction.Apply` 毁掉无主部队 |
| `KillCharacterAction` 内的级联 | `KillCharacterAction.cs:146` | 调 `DestroyClanAction.Apply` 灭族 |

## 真实示例

```csharp
using System;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

/// <summary>
/// 演示：所有「改变战役状态」的调用都走 *Action.ApplyXxx 统一入口，
/// 事件由 Action 内部广播，Behavior 只负责订阅与观察。
/// </summary>
public class ActionFamilyDemoBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        // 订阅死亡事件：KillCharacterAction 内部会广播它
        CampaignEvents.HeroKilledEvent.AddNonSerializedListener(this,
            new Action<Hero, Hero, KillCharacterAction.KillCharacterActionDetail, bool>(this.OnHeroKilled));
    }

    public override void SyncData(IDataStore dataStore) { }

    public void RunDemo()
    {
        Hero giver = Hero.FindFirst(h => h.IsHumanPlayerCharacter);
        Hero recipient = Hero.FindFirst(h => h.IsAlive && h != giver);
        Hero victim = Hero.FindFirst(h => h.IsAlive && h != giver && h != recipient);

        // 1) 金币：ApplyBetweenCharacters → ApplyInternal → clamp + OnHeroOrPartyTradedGold
        GiveGoldAction.ApplyBetweenCharacters(giver, recipient, 500);

        // 2) 关系：ApplyRelationChangeBetweenHeroes → ApplyInternal → ClampInt(-100,100) + OnHeroRelationChanged
        ChangeRelationAction.ApplyRelationChangeBetweenHeroes(giver, recipient, -20);

        // 3) 死亡：ApplyByExecution → ApplyInternal → CanDie 守门 + OnBeforeHeroKilled / OnHeroKilled
        KillCharacterAction.ApplyByExecution(victim, giver);
    }

    private void OnHeroKilled(Hero victim, Hero killer,
        KillCharacterAction.KillCharacterActionDetail detail, bool showNotification)
    {
        // 只观察，不再调 KillCharacterAction —— 否则会沿同一条链级联触发同一事件
    }
}
```

## 参见
- [战役事件系统](../campaign-event-system)
- [campaign-events](../campaign-events)
- [GiveGoldAction 类页](../../api/campaign-ext/GiveGoldAction)
- [ChangeRelationAction 类页](../../api/campaign-ext/ChangeRelationAction)
- [KillCharacterAction 类页](../../api/campaign-ext/KillCharacterAction)
- [Hero 类页](../../api/campaign/Hero)

## 导航
- ↑ Parent: [..](../)
- ↔ Sibling: [GameModel 装饰模式](../gamemodel-decorator) | [UI 三层架构](../ui-three-layers) | [存档对象图](../save-object-graph) | [战役事件系统](../campaign-event-system)
- 相关类页: [CampaignEvents](../../api/campaign-ext/CampaignEvents) | [CampaignEventDispatcher](../../api/campaign-ext/CampaignEventDispatcher)
