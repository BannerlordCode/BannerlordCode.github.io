---
title: "EndCaptivityAction"
description: "基于源码的英雄结束囚禁、名册、状态、事件与通知语义。"
---

# EndCaptivityAction

**Namespace：** `TaleWorlds.CampaignSystem.Actions`  
**Module：** `TaleWorlds.CampaignSystem`  
**Type：** `public static class EndCaptivityAction`  
**源码：** `TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/EndCaptivityAction.cs`

## 概述

`EndCaptivityAction` 是战役层让英雄结束囚禁的状态转换边界。公开方法选择一个 `EndCaptivityDetail`，共享实现随后先记录英雄当前所属的囚禁部队及其派系，再按主角或普通英雄分支执行，并在该分支到达相应位置时派发释放通知。这个动作是同步的：下面描述的名册、状态和事件工作都发生在本次调用期间。

它不是赎金计算器、交易引擎、战斗结算器，也不是通用的囚犯名册编辑器。调用者先确定赎金、和平、逃脱、战后释放、玩家选择或补偿已经发生，再调用对应的公开入口。

## 心智模型

可以把它看成一个有两个分支的状态机：

1. 它在任何修改之前读取 `prisoner.PartyBelongedToAsPrisoner` 及该部队的 `MapFaction`。这两个原始值会作为后续 `OnHeroPrisonerReleased` 事件的参数。
2. 如果目标是 `Hero.MainHero`，它结束 `PlayerCaptivity`，修复主队在据点/海上的位置，可选地显示 facilitator 的赎金消息，派发英雄释放事件，然后返回。它不会把主角从普通 `PrisonRoster` 中移除，也不会执行普通英雄分支。
3. 对其他英雄，它在捕获部队仍存在且名册包含该 `CharacterObject` 时移除囚犯；所有非死亡原因都会把英雄设为 `Released`；非赎金释放的玩家同伴会变成逃亡者；适用时把英雄以无部队状态加入当前据点；最后派发英雄释放事件。

源码中的私有协调器 `ApplyInternal` 只用于实现上述流程，不是 mod 入口。mod 应调用下面的公开 `ApplyBy...` 方法，或调用拥有具体场景规则的更高层 Action。

## 公开入口与时机

v1.4.5 源码准确暴露八个 public 方法：七个不同的方法名，加上 `ApplyByReleasedByChoice` 的两个重载。

| 公开入口 | detail 与调用时机 | 关键行为 |
|---|---|---|
| `ApplyByReleasedAfterBattle(Hero character)` | `ReleasedAfterBattle`；地图战斗流程已经判定该英雄不再被俘后调用。 | 走普通释放分支；本动作不负责结算战斗。 |
| `ApplyByRansom(Hero character, Hero facilitator)` | `Ransom`；赎金/交易或出售决定成功后调用。 | 释放英雄；主角分支在 facilitator 非空时显示赎金消息。本方法不转移金币。 |
| `ApplyByPeace(Hero character, Hero facilitator = null)` | `ReleasedAfterPeace`；和平流程决定释放该囚犯后调用。 | 释放英雄；facilitator 只参与主角的消息路径。 |
| `ApplyByEscape(Hero character, Hero facilitator = null, bool showNotification = true)` | `ReleasedAfterEscape`；逃脱决定完成后调用。 | 释放英雄；`showNotification` 传给普通英雄事件。此源码中的主角事件固定按 `true` 派发。 |
| `ApplyByDeath(Hero character)` | `Death`；英雄已经由死亡流程变为死亡后调用。 | 清空 `StayingInSettlement`，必要时移除囚犯名册项，然后返回；本动作不设 `Released`、不重新加入据点，也不派发英雄释放事件。 |
| `ApplyByReleasedByChoice(FlattenedTroopRoster troopRoster)` | `ReleasedByChoice`；党派界面完成释放名册后调用。 | 对其中每个英雄元素执行普通英雄路径，然后针对完整 flattened roster 派发一次 `OnPrisonerReleased(troopRoster)`。 |
| `ApplyByReleasedByChoice(Hero character, Hero facilitator = null)` | `ReleasedByChoice`；单个英雄通过选择/交易流程释放时调用。 | 执行单英雄释放分支；facilitator 只影响主角的快速消息。 |
| `ApplyByReleasedByCompensation(Hero character)` | `ReleasedByCompensation`；更高层的补偿/出售流程决定释放英雄后调用。 | 释放英雄，但不负责支付补偿。 |

`EndCaptivityDetail` 的成员是 `Ransom`、`ReleasedAfterPeace`、`ReleasedAfterBattle`、`ReleasedAfterEscape`、`ReleasedByChoice`、`Death` 和 `ReleasedByCompensation`。这个枚举不是给 mod 直接触发的第二套 API；应使用对应的 `ApplyBy...` 方法。

## 副作用与顺序

### 主角分支

当 `character == Hero.MainHero` 时，动作依次：

1. 调用 `PlayerCaptivity.EndCaptivity()`；
2. 如果捕获方是据点，调用 `MobileParty.MainParty.DisembarkToPosition(captorSettlement.GatePosition)`；
3. 否则如果捕获方是移动部队，把它的 `IsCurrentlyAtSea` 复制给 `MobileParty.MainParty.IsCurrentlyAtSea`；
4. 如果 `facilitator` 非空且 detail 不是 `Death`，设置 `FACILITATOR` 本地化属性，并添加“facilitator 支付赎金并释放了你”的快速消息；
5. 使用原始囚禁部队、捕获方派系和 detail 派发 `OnHeroPrisonerReleased`，然后返回。

主角分支不会调用 `ChangeState(Hero.CharacterStates.Released)`，不会从普通囚犯名册移除主角，不会调用 `MakeHeroFugitiveAction`，也不会调用 `CurrentSettlement.AddHeroWithoutParty`。主角专用的转换由 `PlayerCaptivity.EndCaptivity()` 完成。

### 普通英雄分支

对非主角英雄，顺序是可观察的：

1. 如果原因是死亡，先清空 `StayingInSettlement`。
2. 如果捕获部队的 `PrisonRoster` 包含英雄的 `CharacterObject`，移除该囚犯。
3. 赎金、和平、战后、逃脱、选择和补偿都会把英雄状态改为 `Hero.CharacterStates.Released`。
4. `IsPlayerCompanion` 的英雄只要不是赎金释放，就会调用 `MakeHeroFugitiveAction.Apply`；赎金是唯一排除该逃亡者规则的释放原因。
5. 非死亡释放会执行 `CurrentSettlement?.AddHeroWithoutParty(prisoner)`。
6. 派发 `OnHeroPrisonerReleased(prisoner, originalParty, originalCapturerFaction, detail, showNotification)`。

死亡是有意的终止分支：switch 会在重新加入据点和派发事件之前返回。在真实死亡路径中，[`KillCharacterAction`](../KillCharacterAction/) 先把英雄改为 `Dead` 并设置死亡日期，再调用 `ApplyByDeath`；所以 `ApplyByDeath` 只负责囚禁清理，不负责杀死英雄。

## 事件、名册与通知

单英雄路径会调用 [`CampaignEventDispatcher`](../CampaignEventDispatcher/) 的 `OnHeroPrisonerReleased`，并由它传递到 [`CampaignEvents`](../CampaignEvents/) 的 `HeroPrisonerReleased` 事件。普通英雄的事件发生在名册移除、状态变更、可能的逃亡者转换和据点重新加入之后。事件参数中的捕获部队和派系仍然是动作开始时记录的原始对象，即使名册此时已经改变。

主角事件发生在 `PlayerCaptivity.EndCaptivity()` 和位置修复之后。源码中的主角调用没有传入 `showNotification`，因此 `ApplyByEscape(..., showNotification: false)` 只会把普通英雄事件的通知标志设为 false；它不会把 false 传入主角分支。

名册重载有两层通知：

- `troopRoster` 中的每个英雄都会以默认 `showNotification: true` 收到普通的 `OnHeroPrisonerReleased`；
- 循环结束后，动作针对完整 flattened roster 派发一次 `OnPrisonerReleased(troopRoster)`，其中也可能包括循环没有逐个释放的非英雄囚犯。

本动作不会计算赎金价值、支付金币、报告囚犯出售，也不会转移普通囚犯。这些责任属于 [`SellPrisonersAction`](../SellPrisonersAction/)、[`TransferPrisonerAction`](../TransferPrisonerAction/) 和拥有具体流程的行为/UI。

## 真实调用路径

源码调用点清楚地表明：资格检查、金币、副作用和名册批处理分别由更高层拥有。

### 交易释放

[`SetPrisonerFreeBarterable`](../SetPrisonerFreeBarterable/) 把 prisoner 和 ransom payer 作为可保存字段保存。其 `Apply()` 先检查 `_prisonerCharacter.IsPrisoner`，再调用：

```csharp
EndCaptivityAction.ApplyByRansom(_prisonerCharacter, _ransompayer);
```

交易对象负责计算单位价值；`EndCaptivityAction` 只执行释放转换，并在主角分支显示 facilitator 消息。交易真正接受之前不要调用释放动作。

### 党派界面中的选择释放

[`PartyScreenHelper`](../PartyScreenHelper/) 的默认完成处理器在计算出 released 和 taken prisoner roster 后调用名册重载：

```csharp
if (!releasedPrisonerRoster.IsEmpty())
{
    EndCaptivityAction.ApplyByReleasedByChoice(releasedPrisonerRoster);
}
if (!takenPrisonerRoster.IsEmpty())
{
    TakePrisonerAction.ApplyByTakenFromPartyScreen(takenPrisonerRoster);
}
```

顺序有意义：先处理释放批次，再由独立的 `TakePrisonerAction` 处理新抓获批次。`EndCaptivityAction` 接收的是界面产生的 flattened 结果，而不是从可变字段重新构造名册。

### 出售、赎金、补偿与转移

[`SellPrisonersAction`](../SellPrisonersAction/) 负责更高层的出售流程。对非主角英雄，当买方与英雄派系处于和平时，玩家家族英雄走 `ApplyByReleasedByCompensation`，其他英雄走 `ApplyByRansom(..., null)`；没有买方时也走带 null facilitator 的赎金入口。若仍处于战争状态，则改为调用 `TransferPrisonerAction`，所以出售和转移不可互换。

出售动作另外负责移除普通囚犯、计算赎金、给卖方付款、派发据点/出售事件以及处理捐献。直接调用 `EndCaptivityAction` 不会执行这些经济或普通囚犯操作。

### 死亡与战后释放

[`KillCharacterAction`](../KillCharacterAction/) 在 `MakeDead` 中执行 `ChangeState(Dead)` 与 `SetDeathDay` 后调用 `ApplyByDeath`。相反，地图事件代码会在战后释放决定完成后调用 `ApplyByReleasedAfterBattle`。两种调用者都拥有之前的死亡/战斗规则；本动作只处理囚禁后果，并且只有战后释放路径会从本动作派发英雄释放事件。

## 安全获取与调用

这是静态 Action，不需要创建实例，也不需要从服务容器解析。应从当前战役对象图获取仍然有效的 `Hero`，确认更高层原因已经成立后调用对应公开入口：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

Hero prisoner = Hero.MainHero; // 或从战役名册元素取得仍有效的 HeroObject
if (prisoner != null && prisoner.IsPrisoner)
{
    EndCaptivityAction.ApplyByEscape(prisoner, showNotification: true);
}
```

对党派界面或行为持有的释放名册，应从该流程取得真实的 `FlattenedTroopRoster`，在决定最终确定后才调用名册重载。对交易释放，应使用现有 [`SetPrisonerFreeBarterable`](../SetPrisonerFreeBarterable/) 或其他更高层 owner，让付款和资格规则先运行。不要伪造 `Hero`、传入过期名册快照，也不要从 mod 调用 `ApplyInternal`。

## 依赖关系

- 上游战役状态：[`Hero`](../../campaign/Hero/)、[`PlayerCaptivity`](../PlayerCaptivity/)、[`MobileParty`](../../campaign/MobileParty/) 以及捕获方 `PartyBase` 提供当前囚犯、玩家囚禁、位置和派系上下文。
- 名册与批量输入：[`FlattenedTroopRoster`](../FlattenedTroopRoster/) 提供党派界面释放批次；其中的英雄元素通过 `CharacterObject.HeroObject` 取得英雄。
- 事件输出：[`CampaignEventDispatcher`](../CampaignEventDispatcher/) 转发 `OnHeroPrisonerReleased` 和 `OnPrisonerReleased`；[`CampaignEvents`](../CampaignEvents/) 是 mod 面向的订阅中心。
- 状态协作者：[`MakeHeroFugitiveAction`](../MakeHeroFugitiveAction/) 处理非赎金玩家同伴的逃亡者后果；[`KillCharacterAction`](../KillCharacterAction/) 拥有死亡前置转换。
- 更高层 owner：[`SetPrisonerFreeBarterable`](../SetPrisonerFreeBarterable/)、[`SellPrisonersAction`](../SellPrisonersAction/)、[`TransferPrisonerAction`](../TransferPrisonerAction/) 和 [`TakePrisonerAction`](../TakePrisonerAction/) 分别决定交易、出售、转移和党派界面抓捕语义。

## 存档与生命周期风险

1. 本动作没有待处理任务或自己的存档负载，而是立即修改当前战役对象图。不要在战役构造、对象恢复、`SyncData`、保存回调、Mission/MapEvent 拆除期间，或正在遍历将被本动作移除的同一个名册时调用。
2. 读档后应重新从当前战役解析英雄、囚禁部队和名册。不要跨存档边界保存对象引用，也不要假定缓存的 `PartyBelongedToAsPrisoner` 仍然有效。
3. 事件监听器运行在派发链中。应由长生命周期的 [`CampaignBehaviorBase`](../CampaignBehaviorBase/) 订阅，并通过 [`IDataStore`](../IDataStore/) 只保存自己的稳定 ID/标志；不要把临时 UI 对象作为 listener owner，也不要期待事件委托本身被存档。
4. 调用后重新读取 `IsPrisoner`、`HeroState`、`PartyBelongedToAsPrisoner` 以及据点/部队归属。普通英雄会在事件通知前移除名册成员，因此调用前缓存的 roster element 和计数已经过期。
5. `ApplyByDeath` 假定调用者已经拥有死亡决定。对活着的英雄调用它不会设置 `Hero.CharacterStates.Dead`；对同一对象重复调用释放入口可能重复派发事件，或对已经转换的状态再次执行流程。
6. 不要通过直接赋值 Hero 状态、`StayingInSettlement`、玩家囚禁或名册字段来模拟本动作。字段和事件参数必须由公开 Action 及其拥有流程保持一致。

## 版本说明

本 v1.3.15 页面以 `bannerlord-1.4.5/Bannerlord.Source` 的 `EndCaptivityAction.cs` 为语义权威，并核对 `SetPrisonerFreeBarterable`、`PartyScreenHelper`、`SellPrisonersAction`、`KillCharacterAction` 及地图事件的战后释放调用。这里记录的是 1.4.5 源码中的公开签名和核心分支；针对其他游戏版本发布 mod 前，应重新核对 `EndCaptivityDetail`、事件参数顺序、主角位置修复以及调用者前置条件。

## 导航

- 父级：[campaign-ext 目录](../)
- 同级：[TakePrisonerAction](../TakePrisonerAction/) · [SellPrisonersAction](../SellPrisonersAction/) · [TransferPrisonerAction](../TransferPrisonerAction/) · [MakeHeroFugitiveAction](../MakeHeroFugitiveAction/)
- 相关：[Hero](../../campaign/Hero/) · [MobileParty](../../campaign/MobileParty/) · [FlattenedTroopRoster](../FlattenedTroopRoster/) · [CampaignEvents](../CampaignEvents/) · [SetPrisonerFreeBarterable](../SetPrisonerFreeBarterable/) · [KillCharacterAction](../KillCharacterAction/) · [EndCaptivityDetail](../EndCaptivityDetail/)
