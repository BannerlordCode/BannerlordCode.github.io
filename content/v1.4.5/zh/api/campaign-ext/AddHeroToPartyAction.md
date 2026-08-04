---
title: "AddHeroToPartyAction"
description: "把一个已满足生命周期条件的 Hero 转移到真实 MobileParty，并完成 roster、驻留、领主职务和加入事件同步。"
---
# AddHeroToPartyAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class AddHeroToPartyAction`  
**Base:** none (static class)  
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/AddHeroToPartyAction.cs`  
**版本说明：** 本页描述随 v1.4.5 发布的实现。

## 一句话职责

把一个当前可加入队伍的 `Hero` 从原所属 party 的 hero roster 转移到目标 `MobileParty`，清除其 settlement stay、移除 governor 职务，并在转移完成后派发 `OnHeroJoinedParty`。

## 心智模型

这个 Action 是**队伍归属转移的末端**，不是招募、释放俘虏、复活或创建 party 的总入口。调用方必须先拿到当前 Campaign 中已经存在的 [Hero](../../campaign/Hero) 与 [MobileParty](../../campaign/MobileParty)，并负责判断 hero 当前是否为 `Active`、是否仍是俘虏、是否已死亡/禁用、是否还是另一支 party 的 leader，以及目标 party 是否允许接收。

v1.4.5 只有一个公开入口：`Apply(Hero, MobileParty, bool)`。不存在 `AddHeroToPartyActionDetail`，也不存在按“原因”区分的公开重载。最后一个布尔参数只控制玩家 companion 加入 `MobileParty.MainParty` 时是否显示 quick notification；它不是状态修复标志，也不会改变 roster 转移流程。

如果 hero 是 prisoner，先用拥有释放语义的 [EndCaptivityAction](../EndCaptivityAction) 完成释放，并在自己的流程中恢复合法的 `HeroState`；之后才考虑加入 party。若 hero 是 disabled、dead 或仍由其他高层流程持有，不能把 `Apply` 当作强制恢复 API。

## 依赖与事件级联

```text
当前 Campaign Hero + 已存在的 MobileParty
  -> AddHeroToPartyAction.Apply(hero, party, showNotification)
      -> 原 party.MemberRoster 移除 hero
      -> 清除 Hero.StayingInSettlement
      -> ChangeGovernorAction.RemoveGovernorOf(hero)（如有 governor）
      -> 目标 party roster 加入 hero
      -> CampaignEventDispatcher.OnHeroJoinedParty
      -> CampaignEvents.OnHeroJoinedPartyEvent 监听者
          -> 任务、统计、UI 与 mod behavior
```

- `Hero.PartyBelongedTo` 是归属结果的可读视图；真正的 roster 回调由 [TroopRoster](../../campaign/TroopRoster) 和 [PartyBase](../../campaign/PartyBase) 处理。
- 目标必须是已经初始化的 [MobileParty](../../campaign/MobileParty)。这个 Action 不创建 `MobileParty`、`PartyComponent` 或新的 `Hero`。
- `CampaignEventDispatcher` 在 roster 已加入目标 party 后才通知 [CampaignEvents](../../campaign/CampaignEvents) 的订阅者，因此监听器可以读取新的归属。
- 如果 hero 当前在 settlement 的 stay 状态，Action 会先清除 `StayingInSettlement`；它不会替代 [EnterSettlementAction](../EnterSettlementAction) 的角色/俘虏驻留流程。

## 公开入口与通知语义

```csharp
public static void Apply(
    Hero hero,
    MobileParty party,
    bool showNotification = true)
```

实现只提供这一入口。转移的固定顺序不因 `showNotification` 改变：先从 `hero.PartyBelongedTo` 的 roster 移除一个 hero，再清除 settlement stay；如 `hero.GovernorOf` 不为空，则通过 [ChangeGovernorAction](../ChangeGovernorAction) 移除 governor 职务；然后把 hero 加入目标 party，并派发 `OnHeroJoinedParty`。

通知只在三个条件同时满足时出现：`showNotification` 为 `true`、目标是 `MobileParty.MainParty`、hero 是 player companion。设置为 `false` 只抑制这条 UI quick information，不抑制事件，也不抑制转移副作用。实现没有 `Detail` 参数；不要为调用方编造“加入原因”枚举。

## 调用方前置条件

`Apply` 返回 `void`，并且没有参数验证或失败结果。拥有招募、救援、传送或任务流程的代码应在调用前确认：

1. `Campaign.Current`、hero、目标 party 与事件系统已经初始化；引用不是旧存档对象或正在销毁的对象。
2. `hero.IsActive` 为真；`hero.IsDead`、`hero.IsDisabled` 和 `hero.IsPrisoner` 等状态已经由所属流程正确处理。俘虏应先结束 captivity，不能仅靠加入普通 roster 来释放。
3. hero 尚未属于目标 party。若 `hero.PartyBelongedTo` 是另一支 active party，调用者明确拥有这次转移；若他是原 party leader，应先处理该 party 的 leader/AI/创建流程。
4. 目标 party 是当前 Campaign 中有所有权和 roster 的真实对象，不是新建的替身；目标 party 的容量、任务占用、map event 和存档生命周期由调用方负责。
5. 当前对话、战斗、party screen 或救援流程已经完成它们自己的中间状态。Action 只完成归属转移，不替调用方关闭 UI 或结束 encounter。

## 状态变更顺序

v1.4.5 的 `ApplyInternal` 顺序决定其他系统能观察到的状态：

1. 若 `hero.PartyBelongedTo` 不为空，从原 party 的 `MemberRoster` 移除一个 `hero.CharacterObject`。
2. 将 `hero.StayingInSettlement` 设为 `null`，避免 hero 同时表现为驻留者和 party 成员。
3. 读取 `hero.IsNotable` 这个只读 getter；它只根据 hero 的 notable 属性返回结果，不写入状态。若 `hero.GovernorOf` 不为空，再通过 `ChangeGovernorAction.RemoveGovernorOf` 清除 governor 关系。
4. 调用目标 `MobileParty.AddElementToMemberRoster(hero.CharacterObject, 1)`，让 roster 与 hero 归属回调一起更新。
5. 调用 `CampaignEventDispatcher.Instance.OnHeroJoinedParty(hero, newParty)`。
6. 只有满足通知条件时，才在事件之后追加 companion quick information。

因此 `CampaignEvents.OnHeroJoinedPartyEvent` 的监听器应把回调视为“目标 roster 已经加入 hero”，但不能假设释放、复活、重新创建 party 或队伍领导权调整会自动发生。

## 安全的当前 Campaign 示例

下面示例只展示一个自定义流程在**已经完成释放/状态判定之后**，如何从当前 Campaign 取得真实对象。它不会手写 `PartyBelongedTo`，也不会把 hero 直接塞入 roster；实际 mod 应把更严格的任务、地图事件和 ownership 检查放在同一个 owner 流程中。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

public static void EnsureMainHeroInMainParty()
{
    if (Campaign.Current == null)
    {
        return;
    }

    Hero hero = Hero.MainHero;
    MobileParty destination = MobileParty.MainParty;
    if (hero == null || destination == null ||
        !hero.IsActive || hero.IsDead || hero.IsDisabled || hero.IsPrisoner ||
        hero.PartyBelongedTo == destination)
    {
        return;
    }

    AddHeroToPartyAction.Apply(hero, destination, showNotification: false);
}
```

这个示例的 `Hero.MainHero` 与 `MobileParty.MainParty` 都来自当前 Campaign。故事模式的救援流程也是同一边界：先检查 hero 状态与已有 party，必要时结束 captivity/恢复 active，再调用 `Apply`。若目标是从俘虏 roster 中转移 hero，先看 [TakePrisonerAction](../TakePrisonerAction) 与 `EndCaptivityAction` 的对应生命周期，不要复制本示例绕过它们。

## 不负责的工作

- 不创建或选择 `MobileParty`，不创建 hero 的 party component，也不把 hero 重新分配给 clan。
- 不判断招募是否被允许，不处理 companion、governor、leader、AI 或任务规则之外的 ownership 决策。
- 不结束 captivity，不把 `HeroState.Prisoner` 变成 `Active`，也不移除 settlement dungeon 的 prisoner roster。
- 不结束 map event、对话、party screen 或传送流程；例如传送流程应由 [TeleportHeroAction](../TeleportHeroAction) 先处理其自己的位置和 party 修复。

## 直接修改与存档风险

不要给 `Hero.PartyBelongedTo` 赋值，也不要用 `MemberRoster.SetElementNumber` 或其他裸 setter 伪造转移。`PartyBelongedTo` 不是这个 Action 的替代写入口；裸 roster 写入可能跳过 `PartyBase`/`TroopRoster` 的 hero 回调、旧 party 清理、`StayingInSettlement` 清除、governor 移除和 `HeroJoinedParty` 事件。结果可能是 UI、AI、prisoner 归属和存档在读写后互相矛盾。

不要在 hero 已经死亡、禁用、仍被俘、旧 party 正在销毁，或目标 party 正在离开/进入 map event 时调用。事件监听器会在目标 roster 写入后运行；监听器再次移动同一个 hero 时必须有明确的重入保护，否则会重复触发加入事件或把刚完成的 transfer 反转。跨存档保存时也不要保留已经离开 Campaign 的 hero/party 引用；behavior 应在新 Campaign 或读档生命周期中重新取得对象并注册事件。

## 导航

- **↑ Parent：** [Campaign extension API index](../) · [Campaign system](../../campaign/)
- **↔ Siblings：** [EndCaptivityAction](../EndCaptivityAction) · [TakePrisonerAction](../TakePrisonerAction) · [TeleportHeroAction](../TeleportHeroAction) · [DisableHeroAction](../DisableHeroAction)
- **Related：** [Hero](../../campaign/Hero) · [MobileParty](../../campaign/MobileParty) · [PartyBase](../../campaign/PartyBase) · [TroopRoster](../../campaign/TroopRoster) · [CampaignEvents](../../campaign/CampaignEvents) · [CampaignEventDispatcher](../../campaign/CampaignEventDispatcher) · [ChangeGovernorAction](../ChangeGovernorAction)
