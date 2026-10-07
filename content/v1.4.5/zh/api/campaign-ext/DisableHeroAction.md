---
title: "DisableHeroAction"
description: "让一名英雄从世界舞台上退场的静态战役动作：依次脱离 party、据点与囚禁状态，最后把英雄状态置为 Disabled。"
---

# DisableHeroAction

**命名空间：** `TaleWorlds.CampaignSystem.Actions`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public static class`  
**源码：** `TaleWorlds.CampaignSystem/Actions/DisableHeroAction.cs`

## 概述

`DisableHeroAction` 是"让英雄退场"的引擎侧入口。它接收一个 `Hero` 对象，把这名英雄从所有当前社会关系中摘除——离开所属 party、离开驻扎或所在的据点、按逃脱结束囚禁——最后把英雄状态置为 `Disabled`。它不杀死英雄：`IsAlive` 仍然为 `true`，只是 `IsActive` 变为 `false`，英雄不再参与世界运转。vanilla 用它处理玩家退休（`ApplyHeirSelectionAction.cs:30`）和问题替代方案中送走英雄（`IssueBase.cs:621`）。

## 心智模型

把英雄在世界上的存在想成一组并行的社会关系：属于某支 party、驻扎在某个据点、身处某个定居点、以及可能处于囚禁状态。`DisableHeroAction` 就是按固定顺序把这些关系逐一剪断，最后贴上一个统一的"已退场"标记。顺序是：

1. **早退检查**（`DisableHeroAction.cs:7`）：`if (!hero.IsAlive) return;`——已死的英雄直接返回，什么都不做。这是唯一的前置条件。
2. **party 关系**（`DisableHeroAction.cs:11`）：若 `hero.PartyBelongedTo != null`——英雄是这支 party 的领袖，就调用 `DestroyPartyAction.Apply(null, hero.PartyBelongedTo)` 把整支 party 销毁（`DisableHeroAction.cs:15`）；不是领袖就从 `MemberRoster` 里移除该角色（`DisableHeroAction.cs:19`）。
3. **驻扎关系**（`DisableHeroAction.cs:22`）：若 `hero.StayingInSettlement != null`，先 `ChangeState(Disabled)` 再清空 `StayingInSettlement`（`DisableHeroAction.cs:24-25`）。
4. **所在据点**（`DisableHeroAction.cs:27`）：若 `hero.CurrentSettlement != null`，调用 `LeaveSettlementAction.ApplyForCharacterOnly(hero)`（`DisableHeroAction.cs:29`）。
5. **囚禁关系**（`DisableHeroAction.cs:31`）：若 `hero.IsPrisoner`，调用 `EndCaptivityAction.ApplyByEscape(hero)` 按"逃脱"结束囚禁（`DisableHeroAction.cs:33`）。
6. **最终状态**（`DisableHeroAction.cs:35`）：无条件 `hero.ChangeState(Hero.CharacterStates.Disabled)`。

关键认知：**`Disabled` 是状态标记，不是死亡。** 退场后的英雄 `IsAlive` 仍为 `true`，但 `IsActive`（`Hero.cs:308`，即 `HeroState == Active`）变为 `false`。另外注意第 3 步和第 6 步都会写 `Disabled`——驻扎中的英雄会被写两次状态，第一次是为了让据点位置逻辑在解绑时看到正确的状态，第二次是无条件的最终确认。

## 怎么用

### 怎么拿到

- 源树路径：`TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/DisableHeroAction.cs`（共 42 行）
- 入口：`DisableHeroAction.cs:38` 的 `public static void Apply(Hero hero)`，它是唯一的公开方法；`ApplyInternal`（`DisableHeroAction.cs:5`）是私有实现
- 英雄从哪来：`Hero` 的静态属性（如 `Hero.MainHero`）、`MobileParty.LeaderHero`、`PartyBase.MemberRoster` 中的 `CharacterObject` 等

### 典型用法

调用前应确认英雄当前的社会关系，因为动作会按顺序剪断它们：

```csharp
// 玩家退休场景（ApplyHeirSelectionAction.cs:28-33 的真实代码）
if (isRetirement)
{
    DisableHeroAction.Apply(Hero.MainHero);
    if (heir.PartyBelongedTo != MobileParty.MainParty)
    {
        MobileParty.MainParty.MemberRoster.RemoveTroop(CharacterObject.PlayerCharacter);
    }
}
```

mod 侧的典型调用：

```csharp
// 让一名英雄退场：先脱离 party/据点/囚禁，再置为 Disabled
DisableHeroAction.Apply(hero);
// 此后 hero.IsActive == false，hero.HeroState == Hero.CharacterStates.Disabled
```

前置不变量：

- 英雄必须 `IsAlive`，否则动作静默返回。
- 动作会销毁领袖英雄所在的整支 party——如果这支 party 上还挂着其他系统（军队、商队、任务），它们会一起消失。
- 动作不触发 `OnHeroKilled` 类事件，因为英雄没有死。

### 坑

- **对已死英雄调用是空操作。** `DisableHeroAction.cs:7` 的早退意味着死后调用没有任何效果，也不会报错。
- **领袖英雄会带走整支 party。** `DestroyPartyAction.Apply(null, hero.PartyBelongedTo)` 销毁的是 party 本身，不是只移除英雄。
- **囚犯英雄会"逃脱"。** `EndCaptivityAction.ApplyByEscape` 走的是逃脱路径，可能带通知文本，且囚禁方会记录一次逃脱。
- **退场不可逆。** 没有对应的 `EnableHeroAction`；要让英雄回到世界需要手动 `ChangeState(Active)` 并重建社会关系。
- **不要对 `Hero.MainHero` 随意调用。** vanilla 只在退休流程里对主角使用它。

## 关键成员

- `Apply(Hero hero)` — `DisableHeroAction.cs:38` — 唯一公开入口，直接委托给 `ApplyInternal`。
- `ApplyInternal(Hero hero)` — `DisableHeroAction.cs:5` — 私有实现：早退检查 → 剪断 party 关系 → 剪断驻扎关系 → 离开所在据点 → 结束囚禁 → 无条件 `ChangeState(Disabled)`。

## 真实示例

玩家退休时禁用主角（`ApplyHeirSelectionAction.cs:28-33`）：

```csharp
if (isRetirement)
{
    DisableHeroAction.Apply(Hero.MainHero);
    if (heir.PartyBelongedTo != MobileParty.MainParty)
    {
        MobileParty.MainParty.MemberRoster.RemoveTroop(CharacterObject.PlayerCharacter);
    }
}
```

问题替代方案中送走英雄（`IssueBase.cs:621`）：

```csharp
DisableHeroAction.Apply(AlternativeSolutionHero);
```

mod 侧检查退场结果：

```csharp
DisableHeroAction.Apply(hero);
if (hero.HeroState == Hero.CharacterStates.Disabled && hero.IsAlive)
{
    // 英雄已退场但存活：可以安全地移动、囚禁或重新启用
}
```

## 参见

- [ApplyHeirSelectionAction](../ApplyHeirSelectionAction) — 玩家退休时禁用主角的调用方（`ApplyHeirSelectionAction.cs:30`）。
- [IssueBase](../IssueBase) — 问题替代方案送走英雄的调用方（`IssueBase.cs:621`）。
- [Hero](../../campaign/Hero) — `ChangeState`（`Hero.cs:1762`）与 `CharacterStates` 枚举（`Hero.cs:28`）的定义处。
- [DestroyPartyAction](../DestroyPartyAction) — 领袖英雄退场时销毁整个 party（`DestroyPartyAction.cs:29`）。
- [LeaveSettlementAction](../LeaveSettlementAction) — 英雄离开所在据点（`LeaveSettlementAction.cs:36`）。
- [EndCaptivityAction](../EndCaptivityAction) — 囚犯英雄按逃脱结束囚禁（`EndCaptivityAction.cs:81`）。

## 导航

- [本区域目录](../)
- [战役 API 根索引](../../campaign/)
