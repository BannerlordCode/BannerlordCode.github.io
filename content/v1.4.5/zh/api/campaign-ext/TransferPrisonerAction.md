---
title: "TransferPrisonerAction"
description: "在已注册的 PartyBase 之间安全转移一个 CharacterObject 俘虏，并保留主角囚禁的特殊状态。"
---
# TransferPrisonerAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class TransferPrisonerAction`  
**Base:** none (static class)  
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/TransferPrisonerAction.cs`  
**版本说明：** 本页以 v1.4.5 的 PartyBase roster 与 PlayerCaptivity 实现为准。

## 一句话职责

把一个真实 `CharacterObject` 从来源 `PartyBase.PrisonRoster` 转移到目标 party，或在目标是主角时只更新 `PlayerCaptivity.CaptorParty`，避免把英雄囚禁关系当成普通数量字段处理。

## 心智模型

这是一个**囚禁所有权转移 Action**，不是通用的 roster 复制工具。普通囚犯路径从来源 `PrisonRoster` 减一，再调用目标 `PartyBase.AddPrisoner` 加一；这让 PartyBase 的囚犯回调和 Hero 的 `PartyBelongedToAsPrisoner` 关系沿用系统入口。

主角是刻意的例外：当 `prisonerTroop.HeroObject == Hero.MainHero` 时，Action 只把 `PlayerCaptivity.CaptorParty` 改为目标 party，然后立即返回。它不会把主角从来源 roster 减掉，也不会通过普通的 `AddPrisoner` 路径增加目标数量。这个分支与 [PlayerCaptivity](../../campaign/PlayerCaptivity) 的主角状态一起工作，不能按普通 Hero 囚犯的行为推断。

## 何时使用，何时不要使用

- 当 owner 流程已经选定来源和目标、并确认 `CharacterObject` 是来源 roster 中的一个囚犯时，使用 `Apply`。
- [SellPrisonersAction](../SellPrisonersAction)、disband settlement 合并、囚犯 barter 和任务流程都通过它转移具体囚犯；应把这些流程的资格判断留在上游。
- 不要直接调用 `source.PrisonRoster.AddToCounts(prisonerTroop, -1)` 再加目标 roster，除非你正在实现与 Action 完全等价的引擎级流程；直接编辑会漏掉主角囚禁分支和 PartyBase/英雄关系回调。
- 不要把 `Hero.MainHero` 当成普通可移动的 Hero prisoner。转移主角时，先确保你确实在管理 PlayerCaptivity 的 captor 变化。

## 依赖与状态级联

```text
捕获/交易/解散 owner
  -> CharacterObject prisoner + source PartyBase + target PartyBase
      -> TransferPrisonerAction.Apply
          -> 普通 Hero: source PrisonRoster -1 -> target AddPrisoner(+1)
          -> MainHero: PlayerCaptivity.CaptorParty = target
```

- [PartyBase](../../campaign/PartyBase) 提供来源/目标的 `PrisonRoster`、`AddPrisoner`、settlement party 和移动 party 宿主；[MobileParty](../../campaign/MobileParty) 只是其中一种真实 party 来源。
- [CharacterObject](../../campaign/CharacterObject) 的 `HeroObject` 决定当前对象是否是主角 Hero；普通 troop prisoner 没有该 Hero 身份。
- [PlayerCaptivity](../../campaign/PlayerCaptivity) 保存主角囚禁关系；[TakePrisonerAction](../TakePrisonerAction) 建立囚禁状态，[SellPrisonersAction](../SellPrisonersAction) 和 [DisbandPartyAction](../DisbandPartyAction) 的上层流程可能调用本 Action。
- roster 的最终数据会进入 [ItemRoster](../../campaign/ItemRoster)/[TroopRoster](../../campaign/TroopRoster) 所代表的存档对象图；不要把临时副本当成真实 owner 的 roster。

## 唯一公开入口

### `Apply`

```csharp
public static void Apply(
    CharacterObject prisonerTroop,
    PartyBase prisonerOwnerParty,
    PartyBase newParty)
```

`Apply` 没有返回值，也不为调用方做“是否允许转移”的结果报告。普通分支要求传入的来源 roster 实际包含该 `CharacterObject`，并将数量减一；目标使用 `AddPrisoner(prisonerTroop, 1)`，而不是由调用方自己拼接 roster 项。主角分支在任何 roster 改动前检查 `Hero.MainHero`，只更新 `PlayerCaptivity.CaptorParty`。

来源和目标可以是移动 party 或 settlement party，但必须是当前 Campaign 中真正注册、仍可用的 `PartyBase`。`CharacterObject` 也必须是已注册对象；Action 不会为无效输入创建对象、补足来源数量或检查任务/战争资格。

## 真实的当前 Campaign 示例

以下示例从玩家 party 的真实囚犯集合选出一个非主角 Hero prisoner，再从当前 Campaign 的 active mobile parties 中取得接收方。`PrisonerHeroes` 来自真实 `PartyBase` roster；示例不构造假的 party 或 `CharacterObject`。

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Party;

if (Campaign.Current != null)
{
    PartyBase source = MobileParty.MainParty.Party;
    MobileParty recipient = MobileParty.All.FirstOrDefault(party =>
        party != MobileParty.MainParty && party.IsActive);
    CharacterObject prisoner = source.PrisonerHeroes.FirstOrDefault(
        character => character.HeroObject != Hero.MainHero);

    if (recipient != null && prisoner != null &&
        source.PrisonRoster.GetTroopRoster().Any(entry =>
            entry.Character == prisoner && entry.Number > 0))
    {
        TransferPrisonerAction.Apply(prisoner, source, recipient.Party);
    }
}
```

如果 prisoner 是 `Hero.MainHero`，不要用上面的普通 roster 假设；由 PlayerCaptivity owner 流程确认新 captor 后再调用 Action，并预期它只改变 `CaptorParty`。

## 存档与崩溃边界

- 传入一个已经被 `DestroyPartyAction` 移除、正在读档重建或只存在于临时 roster 副本中的 party，会让来源/目标关系与 Campaign 集合脱节。
- 普通分支对来源数量、目标容量和玩法资格不做全面保护；调用方必须在同一 Campaign 状态下验证来源 prisoner 仍存在，避免负数或把同一个对象重复转移。
- 主角分支不移动两边 roster。若 mod 看到 `CaptorParty` 已变化便再次手动改 roster，会制造主角状态与数量状态的双重、互相矛盾记录。
- 事件、任务和 disband 流程可能在转移后继续读取英雄的 prison owner。不要在 callback 中把已转移对象当作仍属于来源 party 的引用写回自定义存档。
- 读档后应按 party 的稳定身份重新解析 source/target，再读取当前 `PrisonRoster`；不要保存 `PartyBase` 或 `CharacterObject` 的临时运行时引用。

## 导航

- **↑ 父级：** [Campaign extension API](../) · [Campaign system](../../campaign/)
- **↔ 同级：** [TakePrisonerAction](../TakePrisonerAction) · [SellPrisonersAction](../SellPrisonersAction) · [DisbandPartyAction](../DisbandPartyAction)
- **相关：** [PartyBase](../../campaign/PartyBase) · [MobileParty](../../campaign/MobileParty) · [CharacterObject](../../campaign/CharacterObject) · [Hero](../../campaign/Hero) · [PlayerCaptivity](../../campaign/PlayerCaptivity) · [TroopRoster](../../campaign/TroopRoster) · [CampaignEvents](../../campaign/CampaignEvents)
