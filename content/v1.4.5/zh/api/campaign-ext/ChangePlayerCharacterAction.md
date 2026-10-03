---
title: "ChangePlayerCharacterAction"
description: "换主角的唯一官方入口：改写 PlayerTroop、重挂主队所有权、按规则移交船只，并广播前后两个战役事件。"
---

# ChangePlayerCharacterAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class ChangePlayerCharacterAction`
**Base:** 无（纯静态动作类）
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/ChangePlayerCharacterAction.cs`

## 概述

这是把「玩家控制哪个英雄」这件事做成一次**原子动作**的唯一官方入口。整个类只有一个 `public static void Apply(Hero hero)`，没有状态、没有字段、没有生命周期——但这一个方法内部串了十二个步骤，从改 `Game.Current.PlayerTroop` 到重挂 `LordPartyComponent` 的所有权、从按血量挑船到转移、从打断航海过渡到把队伍放回原锚点，是战役系统里少数「一个方法改掉半个战役上下文」的地方。

它承担的是战役层的**身份切换**环节：谁在当玩家、玩家队伍归谁、玩家脚下的船归谁、玩家是不是俘虏、地图上谁的形象要重画。这些散落的状态在 `Apply` 里被收成一次调用，所以 mod 只需要知道一个入口。相应地，**它没有取消、没有回滚、没有校验**——参数是一个 `Hero`，传谁就换谁。

## 心智模型

把 `Apply` 读成一段**有严格先后依赖的脚本**，而不是一堆可以拆开单独调的操作。真实顺序是这样的：

1. 先把旧主角 `Hero.MainHero`、旧主队 `MobileParty.MainParty`、锚点位置、最后使用的下船点、`IsCurrentlyAtSea` 全部抓成局部变量——**它们是「换之前的世界」快照**。
2. `Game.Current.PlayerTroop = hero.CharacterObject`，玩家的兵种模型换掉。
3. 主队正在移动到某个点就 `Anchor.ResetMoveTarget()`。
4. `CampaignEventDispatcher.Instance.OnBeforePlayerCharacterChanged(mainHero, hero)`——**换之前**的通知。
5. `Campaign.Current.OnPlayerCharacterChanged(out bool isMainPartyChanged)`——这一步可能让 `MobileParty.MainParty` **指向另一个队伍对象**，所以 `isMainPartyChanged` 是后面所有判断的开关。
6. 船的移交只在「旧主队有船 && `isMainPartyChanged`」时发生：用 `Ships.MinBy(x => x.HitPoints)` 挑出**血量最低的那一条作为保留船**（如果队伍只剩 1 人或本来就不在海上，则保留 `null`），其余全部 `ChangeShipOwnerAction.ApplyByTransferring(PartyBase.MainParty, ...)` 移交出去。
7. 航海过渡中就 `CancelNavigationTransition()` 打断。
8. 位置回填条件很窄：`MobileParty.MainParty.Ships.Count > 0 && position.IsValid() && !Anchor.IsValid && !IsCurrentlyAtSea` 三个条件同时成立才 `SetPosition` + `SetLastUsedDisembarkPosition`。
9. 如果旧主队对象已经不是 `MobileParty.MainParty` 了：`MemberRoster.TotalManCount == 0` 就 `DestroyPartyAction.Apply(null, mainParty)`，否则 `LordPartyComponent.ChangePartyOwner(Hero.MainHero)`。
10. 新主角是俘虏就 `PlayerCaptivity.OnPlayerCharacterChanged()`。
11. `CampaignEventDispatcher.Instance.OnPlayerCharacterChanged(mainHero, hero, MobileParty.MainParty, isMainPartyChanged)`——**换之后**的通知，参数是新主队。
12. `PartyBase.MainParty.SetVisualAsDirty()` + `mainParty.Party.SetVisualAsDirty()` 重画地图形象，`Campaign.Current.MainHeroIllDays = -1` 清掉生病计数，最后遍历所有船调 `Ship.OnPlayerCharacterChanged()`。

由此推出三个必须记住的结论。第一，**事件处理器里读到的 `MobileParty.MainParty` 可能已经不是方法入口时那个了**——`Campaign.OnPlayerCharacterChanged` 之后 `MainParty` 会被重指向，所以第 11 步传的是 `MobileParty.MainParty`（新的），而第 1 步抓的 `mainParty` 是旧的。第二，**第 9 步里 `mainParty.LordPartyComponent.ChangePartyOwner` 是 `internal`**（`LordPartyComponent.cs:152`），mod 复制不了这条，只能自己调 `ChangePlayerCharacterAction.Apply` 走完整流程。第三，源码里有一行 `_ = Hero.MainHero.IsPrisoner;`——**结果被直接丢弃，是一段无副作用的空读**（大概是调试残留），不要以为它在检查什么。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Apply` | `public static void Apply(Hero hero)` | 唯一的公开成员，一次性完成换主角的全部十二步。**不校验 `hero` 是否合法、不检查是否与 `Hero.MainHero` 相同、不检查是否在战役可用状态**——传 `null` 会在 `hero.CharacterObject` 上直接 NRE。这个类没有其他方法，`Apply` 就是全部。 |

## 真实示例

在剧情事件里把主角换成交接人。注意调用点必须在**战役状态稳定**时（不是读档过程中、不是 mission 还在跑的时候）：

```csharp
// 老主角阵亡 → 由指定英雄接任玩家身份
private void HandleOldPlayerDeath(Hero successor)
{
    if (successor == null)
    {
        Debug.Print("no successor, keeping the current player hero", 0);
        return;
    }

    ChangePlayerCharacterAction.Apply(successor);

    // Apply 之后 MainHero 已经是新主角；MainParty 可能已被重指向
    Debug.Print("player hero is now " + Hero.MainHero.Name, 0);
    Debug.Print("main party has " + MobileParty.MainParty.MemberRoster.TotalManCount + " men", 0);
}
```

监听切换前后的两个事件——这是 mod 判断「该把任务状态转交给谁」的正确挂点：

```csharp
public class MySuccessionWatcher : CampaignEventReceiver
{
    public override void OnBeforePlayerCharacterChanged(Hero oldPlayer, Hero newPlayer)
    {
        // 此时 Game.Current.PlayerTroop 还没换，MobileParty.MainParty 还是旧主队
        Debug.Print("about to switch from " + oldPlayer.Name + " to " + newPlayer.Name, 0);
    }

    public override void OnPlayerCharacterChanged(
        Hero oldPlayer, Hero newPlayer, MobileParty newPlayerParty, bool isMainPartyChanged)
    {
        // 此时 PlayerTroop 已换；newPlayerParty 是切换后的主队，
        // isMainPartyChanged 告诉你主队对象本身有没有被换掉
        if (isMainPartyChanged)
        {
            Debug.Print("main party object was replaced", 0);
        }
    }
}
```

自己复刻「选一条船保留、其余移交」的判定，方便在调用 `Apply` 之前先算一遍预览：

```csharp
MobileParty mainParty = MobileParty.MainParty;
if (mainParty.Ships.Count > 0)
{
    Ship keep = null;
    if (mainParty.MemberRoster.TotalManCount > 1 && mainParty.IsCurrentlyAtSea)
    {
        keep = mainParty.Ships.MinBy(x => x.HitPoints);
    }

    foreach (Ship ship in mainParty.Ships)
    {
        // Ship 是 sealed 且不是 MBObjectBase，没有 StringId；
        // 可用的身份信息是 Name(TextObject) 与 RandomValue(int)
        Debug.Print(ship.Name + " hp=" + ship.HitPoints + (ship == keep ? " kept" : " will transfer"), 0);
    }
}
```

## 风险与边界

- **没有校验，没有回滚。** `hero` 为 null 直接 NRE；传入与当前相同的主角会白跑一遍十二步（含两个事件广播）。
- **事件顺序不可调换。** `OnBeforePlayerCharacterChanged` 在 `Game.Current.PlayerTroop` 赋值之后、`Campaign.OnPlayerCharacterChanged` 之前；`OnPlayerCharacterChanged` 在一切改写完成之后。想在「主角已换但主队还没重指」的窗口里做事，只能挂 `OnBeforePlayerCharacterChanged` 并自己小心。
- **`MainParty` 会被重指向。** 不要缓存 `MobileParty.MainParty` 跨越 `Apply` 调用；这也是第 9 步要判断 `mainParty != MobileParty.MainParty` 的原因。
- **船只移交是有条件的。** 只有「旧主队有船 **且** `isMainPartyChanged`」才移交；保留哪条船由血量最低决定，且队伍只剩 1 人或不在海上时保留 `null`（即一条都不留）。自己预判结果很容易判错，务必以 `Apply` 的实际行为为准。
- **位置回填条件极窄。** 三个条件（船数 > 0、快照位置有效、锚点无效、不在海上）必须同时成立，否则队伍会被留在 `Campaign.OnPlayerCharacterChanged` 放置的新位置。
- **`LordPartyComponent.ChangePartyOwner` 是 `internal`。** 别指望在 mod 里复刻第 9 步的所有权转移。
- **`DestroyPartyAction.Apply(null, mainParty)` 会销毁一个队伍。** 触发条件是旧主队已不是主队且人数为 0；被 mod 挂在主队上的自定义数据会随之消失。
- **会重置 `Campaign.Current.MainHeroIllDays = -1`。** 新主角的生病天数被清零，这是个容易被忽略的副作用。
- **无存档标记。** 这个动作本身不写任何 `[SaveableField]`；状态是通过 `CampaignEventDispatcher` 派发给各 `CampaignEventReceiver` 由它们自己持久化的。mod 若新增了「跟主角绑定的数据」，需要自己在事件里处理迁移。
- **事件处理器必须先注册。** `CampaignEventDispatcher` 只向已注册的 receiver 广播；`Campaign.OnPlayerCharacterChanged` 内部做的事不归你管。

## 依赖关系

- 事件广播中心：[CampaignEventDispatcher](../CampaignEventDispatcher) 的 `OnBeforePlayerCharacterChanged` / `OnPlayerCharacterChanged` 是本动作对外的全部契约
- 战役上下文：[Campaign](../../campaign/Campaign) 的 `OnPlayerCharacterChanged(out bool)` 决定了 `MobileParty.MainParty` 是否会被重指向，`MainHeroIllDays` 也由本动作清零
- 全局存档态：`Game.Current.PlayerTroop` 是玩家兵种模型的唯一落点，写入发生在事件广播之前
- 连带动作：[ChangeShipOwnerAction](../ChangeShipOwnerAction) 的 `ApplyByTransferring` 负责移交船只、[DestroyPartyAction](../DestroyPartyAction) 负责销毁空队
- 俘虏流程：[PlayerCaptivity](../PlayerCaptivity) 的 `OnPlayerCharacterChanged()` 在新主角是俘虏时补做俘虏态同步
- 队伍与船：[MobileParty](../../campaign/MobileParty) / [Ship](../Ship) 的 `Ships` / `MemberRoster` / `IsCurrentlyAtSea` / `OnPlayerCharacterChanged()` 是本动作读写的具体数据
- 所有权组件：`LordPartyComponent.ChangePartyOwner(Hero)`（`internal`）是旧主队移交所有权的唯一途径
- 同族动作：[BreakInOutBesiegedSettlementAction](BreakInOutBesiegedSettlementAction) 是同一命名空间下另一条「一次性做完整段战役变更」的静态动作类，可作为写法对照
- 桶首页：[campaign-ext API 分区](../)
