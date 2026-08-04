---
title: "TakePrisonerAction"
description: "把存活的 Hero 转入捕获方的囚犯 roster，并发布战役系统依赖的 Hero 与 party-screen 囚犯事件。"
---
# TakePrisonerAction

**命名空间:** `TaleWorlds.CampaignSystem.Actions`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public static class TakePrisonerAction`  
**基类:** 无（静态类）  
**源文件:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/TakePrisonerAction.cs`

## 一句话职责

把一个当前 Campaign 中真实且仍存活的 `Hero` 从原 party 或据点状态转入捕获方的囚犯 roster，更新囚禁状态、囚禁开始时间和相关 party 关系，并发出战斗、对话、party-screen 与任务流程都依赖的战役通知；它只执行已经被 owner 接受的捕获迁移，不决定目标是否有资格成为囚犯。

## 心智模型

这是战役层的**状态迁移**，不是决定“战斗、对话或任务是否允许抓人”的规则入口。上游流程先确认目标可以成为囚犯；这个 Action 再把必须同时发生的状态变化一次完成。

`Apply(PartyBase, Hero)` 是单个 Hero 的通用入口。它会从原 party 的 roster 移除 Hero，必要时移除其 party leader 身份，写入 `CaptivityStartTime`，把 Hero 状态改为 `Prisoner`，将 Hero 的 `CharacterObject` 加入捕获 party 的囚犯 roster，清除 `StayingInSettlement`，最后通过 dispatcher 发出 `CampaignEvents.HeroPrisonerTaken`。如果目标是 `Hero.MainHero`，还会结束主 party 的 disorganized 状态、开始玩家囚禁，并在主 party 正在海上时销毁其船只。

`ApplyByTakenFromPartyScreen(FlattenedTroopRoster)` 是另一条 owner 路径。它扫描 roster，以 `PartyBase.MainParty` 为捕获方，对其中每个 Hero 执行上面的迁移，扫描结束后再发布整个扁平 roster 对应的 `CampaignEvents.OnPrisonerTakenEvent`。这是 party-screen 转移流程的边界，不是任意列表的便捷重载。

应在上游已经取得有效的 `PartyBase` 和 `Hero` 后调用。不要用它决定战斗结果、移动普通兵种，或通过直接设置 `Hero.CharacterStates.Prisoner` 来模拟 party-screen 转移。

## 依赖图

```text
战斗 / 对话 / 任务 owner
  -> TakePrisonerAction.Apply(capturerParty, prisoner)
      -> 清理旧 PartyBase 的 roster 与 leader
      -> 写入 Hero 囚禁状态并加入捕获方囚犯 roster
      -> CampaignEventDispatcher.OnHeroPrisonerTaken
          -> CampaignEvents.HeroPrisonerTaken

PartyScreenHelper
  -> ApplyByTakenFromPartyScreen(flattenedRoster)
      -> 为主 party 逐个执行 Hero 迁移
      -> CampaignEvents.OnPrisonerTakenEvent
```

**上游:** [MapEvent](../../campaign/MapEvent) 结算、[PartyBase](../../campaign/PartyBase)、对话流程和 issue 任务 owner 提供实际的捕获方与目标。  
**下游:** [CampaignEvents](../../campaign/CampaignEvents)、[CampaignEventDispatcher](../../campaign/CampaignEventDispatcher)、囚禁 UI 和战役 Behavior 监听 `HeroPrisonerTaken` 或 `OnPrisonerTakenEvent`。  
**相关迁移:** [EndCaptivityAction](../EndCaptivityAction)、[EnterSettlementAction](../EnterSettlementAction)、[Hero](../../campaign/Hero) 和 [MobileParty](../../campaign/MobileParty)。

## 关键入口与调用时机

### `Apply`

```csharp
public static void Apply(PartyBase capturerParty, Hero prisonerCharacter)
```

当捕获 owner 已经接受某个 Hero 成为囚犯时调用。源码不返回成功值，也不验证调用者是否选对了目标；事件会在 roster 和 Hero 状态写入之后发出，因此监听器应读取迁移后的对象。

### `ApplyByTakenFromPartyScreen`

```csharp
public static void ApplyByTakenFromPartyScreen(FlattenedTroopRoster roster)
```

只在 party-screen 转移流程仍拥有一个真实 `FlattenedTroopRoster` 时调用。每个 Hero 的内部迁移会发出自己的 Hero 事件，整个扫描结束后再发出 `OnPrisonerTakenEvent`。该入口始终使用 `PartyBase.MainParty` 作为捕获方。

## 真实当前 Campaign 示例

### 在 owner 已验证对话目标后捕获它

原版对话 Behavior 使用 `Hero.OneToOneConversationHero` 和 `PartyBase.MainParty` 作为真实获取路径。mod 还应在调用即时迁移前做自己的资格检查：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Party;

public static void CaptureConversationTarget()
{
    if (Campaign.Current == null)
        return;

    Hero target = Hero.OneToOneConversationHero;
    PartyBase capturer = PartyBase.MainParty;
    if (target == null || capturer == null || !target.IsAlive ||
        target == Hero.MainHero || target.PartyBelongedTo == capturer)
        return;

    TakePrisonerAction.Apply(capturer, target);
}
```

这段代码没有构造假的 party 或 Hero，但仍应位于已经检查遭遇、阵营和任务规则的战役对话/任务 owner 中；Action 本身不做这些检查。

### 在持久 Behavior 中观察结果

在 Campaign 启动阶段从 [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase) 注册监听器，并在回调里复制稳定 ID 或需要的值：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;

private void RegisterEvents()
{
    CampaignEvents.HeroPrisonerTaken.AddNonSerializedListener(this, OnHeroPrisonerTaken);
}

private void OnHeroPrisonerTaken(PartyBase capturer, Hero prisoner)
{
    if (prisoner != null && capturer != null)
        RecordCapture(prisoner.StringId, capturer.StringId);
}
```

## 风险与存档边界

- **输入必须是活对象。** 实现没有 null 或阶段保护，直接解引用 Hero 与捕获方。只能在 `Campaign.Current` 已建立对象图之后调用，不能从模块加载、主菜单或 Campaign 销毁阶段调用。
- **Action 不会去重囚犯。** 对已经是囚犯的 Hero 重复调用时，旧 party 移除路径已经不再发生，但囚犯 roster 仍可能再次增加数量。应由捕获 owner 先证明迁移尚未完成。
- **不能跳过旧 party 清理。** 只设置 `CharacterStates.Prisoner` 或直接把 `CharacterObject` 加进 roster，会留下旧 leader、旧 roster、`CaptivityStartTime` 和事件消费者不一致的问题。
- **主角有额外副作用。** 捕获 `Hero.MainHero` 会启动玩家囚禁；主 party 在海上时还会销毁所有船只。不要把通用入口当作无害的状态开关。
- **事件属于契约。** 监听器可能同时改变 UI、任务和囚禁状态。不要在 `HeroPrisonerTaken` 中对同一个 Hero 递归调用这个 Action，也不要在真实调用后再发布一份伪造事件。
- **party-screen 是聚合语义。** 只有 party-screen owner 仍拥有转移流程时才用扁平 roster 入口；之后重放旧 roster 可能重复下游反应或作用于已经变化的 Hero。
- **存档边界:** 在回调中持久化自己的稳定 ID 或任务状态，不要持久化一次性的 `PartyBase`/`Hero` 引用。读档后重新从当前 Campaign 获取活对象，再执行下一次迁移。

## 导航

- **父级:** [Campaign extension API](../) · [Campaign system](../../campaign/)
- **同级:** [EndCaptivityAction](../EndCaptivityAction) · [EnterSettlementAction](../EnterSettlementAction) · [DestroyPartyAction](../DestroyPartyAction)
- **相关实体:** [Hero](../../campaign/Hero) · [PartyBase](../../campaign/PartyBase) · [MobileParty](../../campaign/MobileParty) · [MapEvent](../../campaign/MapEvent)
- **事件与 owner:** [CampaignEvents](../../campaign/CampaignEvents) · [CampaignEventDispatcher](../../campaign/CampaignEventDispatcher) · [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase)
