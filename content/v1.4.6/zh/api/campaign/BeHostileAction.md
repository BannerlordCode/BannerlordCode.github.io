---
title: "BeHostileAction"
description: "施加敌对行为的统一入口：按强度分四档（通用 / 轻微胁迫 / 重大胁迫 / 遭遇战），内部都走同一个 ApplyInternal。"
---
# BeHostileAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class BeHostileAction`
**Source:** `TaleWorlds.CampaignSystem/Actions/BeHostileAction.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`BeHostileAction` 是「让两个阵营结仇」的统一入口。它把「敌对」量化成一个 `float value`，然后交给私有的 `ApplyInternal` 去落地（态度、关系、贵族指数等）。

对外它提供**四档**预置强度，而不是让调用方自己编数值：

| 方法 | 内部值 | 语义 |
| --- | --- | --- |
| `ApplyHostileAction(a, d, value)` | 调用方给 | 通用档，自带零值守卫 |
| `ApplyMinorCoercionHostileAction(a, d)` | `1f` | 轻微胁迫 |
| `ApplyMajorCoercionHostileAction(a, d)` | `2f` | 重大胁迫 |
| `ApplyEncounterHostileAction(a, d)` | `6f` | 遭遇战（最强，且会触发宣战） |

## 心智模型

**它是一个「强度 → 后果」的薄封装**，真正的逻辑全在 `ApplyInternal` 里。

- 三个 `Apply*Coercion*` / `ApplyEncounter*` 只是把常量 `1f` / `2f` / `6f` 填进去。
- 只有 `ApplyEncounterHostileAction` 有**额外行为**：它在造成伤害后，如果动手的是玩家、双方阵营不同且尚未开战，会**自动宣战**（`ChangeRelationAction.ApplyPlayerRelation(..., -10, ...)` + `DeclareWarAction.ApplyByPlayerHostility`）。
- 三个 `private const float`（`MinorCoercionValue` / `MajorCoercionValue` / `EncounterValue`）是强度的唯一真值来源 —— 改数值只改这三行。

**为什么分档**：游戏里的「敌对」不是一件事。偷东西、战场上见面、胁迫，后果的严重程度差好几倍。分档让调用方说「我要轻微胁迫」而不用记住 `1f` 代表什么。

## 怎么用

### 怎么拿到

静态类，直接调：

```csharp
BeHostileAction.ApplyMinorCoercionHostileAction(attackerParty, defenderParty);
```

### 典型用法

```csharp
// 遭遇战：伤害最高，且玩家动手时会自动宣战
BeHostileAction.ApplyEncounterHostileAction(partyA, partyB);

// 轻微胁迫：只掉一点关系，不开战
BeHostileAction.ApplyMinorCoercionHostileAction(partyA, partyB);

// 自定义强度
BeHostileAction.ApplyHostileAction(partyA, partyB, 3.5f);
```

### 坑

- **`ApplyHostileAction` 对 `value ≈ 0` 直接 return**（带 `Debug.FailedAssert`）。传 0 不会报错也不会生效，只会留一条断言日志。
- **`ApplyEncounterHostileAction` 有豁免判定**：`EncounterModel.IsEncounterExemptFromHostileActions` 为真时整段跳过 —— 某些剧情/场景下敌对是不生效的。
- **只有遭遇战档会自动宣战**。胁迫两档只掉关系，不会进入战争状态。

## 关键成员

- `ApplyHostileAction(PartyBase attackerParty, PartyBase defenderParty, float value)`（`BeHostileAction.cs:152`）—— 通用入口；`null` 或 `value≈0` 时断言并 return。
- `ApplyMinorCoercionHostileAction(PartyBase, PartyBase)`（`BeHostileAction.cs:163`）—— 固定 `1f`。
- `ApplyMajorCoercionHostileAction(PartyBase, PartyBase)`（`BeHostileAction.cs:174`）—— 固定 `2f`。
- `ApplyEncounterHostileAction(PartyBase, PartyBase)`（`BeHostileAction.cs:185`）—— 固定 `6f`；含豁免判定与自动宣战（`:192`-`:196`）。
- `MinorCoercionValue = 1f` / `MajorCoercionValue = 2f` / `EncounterValue = 6f`（`BeHostileAction.cs:205`-`:207`）—— 三档强度的常量定义。

## 真实示例

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

public static void Ambush(PartyBase ambusher, PartyBase victim)
{
    // 遭遇战档：6f 伤害，玩家动手且未开战时会自动宣战
    BeHostileAction.ApplyEncounterHostileAction(ambusher, victim);
}

public static void Threaten(PartyBase from, PartyBase to)
{
    // 轻微胁迫：1f，只掉关系不开战
    BeHostileAction.ApplyMinorCoercionHostileAction(from, to);
}
```

## 参见

- [`ChangeKingdomAction`](../ChangeKingdomAction) —— 同样属于「改变阵营间状态」的 Action 家族，但目标是王国归属而非关系值。
- [`AddHeroToPartyAction`](../AddHeroToPartyAction) —— 把英雄移出敌方队伍的入口，常与敌对行为配合使用。
- [`_index`](../_index) —— `campaign` 桶全类型索引。

## 导航

- 同桶：[`../AIBehaviorData`](../AIBehaviorData) · [`../ActionNotes`](../ActionNotes) · [`../AddCompanionAction`](../AddCompanionAction) · [`../AddHeroToPartyAction`](../AddHeroToPartyAction)
- 父索引：[`../_index`](../_index)
