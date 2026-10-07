---
title: "ChangeKingdomActionDetail"
description: "ChangeKingdomAction 的嵌套枚举，用 9 个取值标记家族加入/离开王国的途径，驱动换王国流程内部的分支。"
---
# ChangeKingdomActionDetail

**Namespace:** `TaleWorlds.CampaignSystem.Actions`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public enum ChangeKingdomActionDetail`（嵌套于 `ChangeKingdomAction`）
**Source:** `TaleWorlds.CampaignSystem/Actions/ChangeKingdomAction.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`ChangeKingdomActionDetail` 是 `ChangeKingdomAction`（宿主类型声明于 `ChangeKingdomAction.cs:12`）内部的**嵌套枚举**，声明于 `:250`，共 9 个取值（`:253`–`:269`）。

它是**换王国流程的途径标签**：宿主类的私有方法 `ApplyInternal(Clan, Kingdom, ChangeKingdomActionDetail, CampaignTime, int, bool, bool)`（`:15`）以它为第三个形参，并按它决定整条流程走哪个分支——9 个取值实际上分成两大族、三小类：

| 族 | 取值 | 内部走向 |
| --- | --- | --- |
| **加入类** | `JoinKingdom`、`JoinKingdomByDefection`、`CreateKingdom` | `:28` 分支：先结束雇佣兵役、让家族离开旧王国，`CreateKingdom` 额外调 `ChangeRulingClanAction.Apply`，最后写 `clan.Kingdom = newKingdom`。 |
| **雇佣兵加入** | `JoinAsMercenary` | `:44` 分支：`StartMercenaryServiceAction.ApplyByDefault(clan, newKingdom, awardMultiplier)`。 |
| **离开类** | `LeaveKingdom`、`LeaveWithRebellion`、`LeaveAsMercenary`、`LeaveByClanDestruction`、`LeaveByKingdomDestruction` | `:48` 分支：`clan.Kingdom = null`，必要时结束雇佣兵役。其中 `LeaveKingdom` 会把家族所有定居点通过 `ChangeOwnerOfSettlementAction.ApplyByLeaveFaction` 交回王国领袖（`:80`），`LeaveWithRebellion` 会立刻 `DeclareWarAction.ApplyByRebellion`（`:57`）。 |

另有 `:19` 的公共前置：只有三个「加入类」取值会写 `clan.ShouldStayInKingdomUntil` 并调 `FactionHelper.AdjustFactionStancesForClanJoiningKingdom`；其余取值一律把 `ShouldStayInKingdomUntil` 归零。

## 心智模型

把它理解成一次「家族与王国的关系变更」的**因由字段**。

- **它不是给调用者用的参数。** 宿主类的 9 个公开 `ApplyBy*` 方法**都不接收**这个枚举；每个方法在内部固定传入一个取值。你只能通过「选哪个 `ApplyBy*`」来间接决定它——就像 `ChangeOwnerOfSettlementAction` 的设计一样。
- **加入与离开是两个完全不同的世界。** 加入类会先清理旧关系（结束雇佣兵役、离开旧王国），离开类则先切断王国引用再补办善后（定居点交回、宣战、结束雇佣兵役）。同一个枚举里同时承载这两个方向，是这张表最容易看错的地方。
- **`CreateKingdom` 与 `JoinKingdom` 走同一条代码路径。** 区别仅在 `:38` 的一句 `if (newKingdom != null && detail == CreateKingdom) ChangeRulingClanAction.Apply(newKingdom, clan)`——即「建国」= 「加入」+ 「成为统治家族」。
- **它是「已经发生的因由」，不是「你希望发生什么」。** 想触发变更必须调 `ApplyBy*`；想在事件/日志里读出因由才是读它。
- **声明顺序即数值顺序**，无显式赋值：`JoinAsMercenary` 是 0，`LeaveByKingdomDestruction` 是 8。

## 怎么用

### 怎么拿到

嵌套类型，必须带宿主类型全名：

```csharp
using TaleWorlds.CampaignSystem.Actions;

var d = ChangeKingdomAction.ChangeKingdomActionDetail.JoinKingdomByDefection;
```

⚠️ 同命名空间下 `ChangeOwnerOfSettlementAction` 也有一个名为 `ChangeOwnerOfSettlementDetail` 的嵌套枚举，二者都在 `TaleWorlds.CampaignSystem.Actions` 里；写 `using static` 或类型别名时务必用完整限定名。

### 典型用法

**用法 A：选择入口（这是唯一能「决定 detail」的方式）。**

```csharp
// 家族投靠另一个王国 → JoinKingdom
ChangeKingdomAction.ApplyByJoinToKingdom(clan, newKingdom);

// 家族叛逃（记录旧王国）→ JoinKingdomByDefection
ChangeKingdomAction.ApplyByJoinToKingdomByDefection(clan, oldKingdom, newKingdom);

// 建国并成为统治家族 → CreateKingdom
ChangeKingdomAction.ApplyByCreateKingdom(clan, newKingdom);

// 雇佣兵服役 → JoinAsMercenary
ChangeKingdomAction.ApplyByJoinFactionAsMercenary(clan, newKingdom, awardMultiplier: 50);

// 和平离开 → LeaveKingdom（定居点交回王国领袖）
ChangeKingdomAction.ApplyByLeaveKingdom(clan);

// 叛乱独立 → LeaveWithRebellion（立即对旧王国宣战）
ChangeKingdomAction.ApplyByLeaveWithRebellionAgainstKingdom(clan);
```

**用法 B：把 detail 与 `ApplyBy*` 的对应关系固化成一张分发表。**

```csharp
public static void Change(Clan clan, Kingdom newKingdom, ChangeKingdomAction.ChangeKingdomActionDetail detail)
{
    switch (detail)
    {
        case ChangeKingdomAction.ChangeKingdomActionDetail.JoinKingdom:
            ChangeKingdomAction.ApplyByJoinToKingdom(clan, newKingdom);
            break;
        case ChangeKingdomAction.ChangeKingdomActionDetail.JoinKingdomByDefection:
            ChangeKingdomAction.ApplyByJoinToKingdomByDefection(clan, clan.Kingdom, newKingdom);
            break;
        case ChangeKingdomAction.ChangeKingdomActionDetail.CreateKingdom:
            ChangeKingdomAction.ApplyByCreateKingdom(clan, newKingdom);
            break;
        case ChangeKingdomAction.ChangeKingdomActionDetail.JoinAsMercenary:
            ChangeKingdomAction.ApplyByJoinFactionAsMercenary(clan, newKingdom);
            break;
        case ChangeKingdomAction.ChangeKingdomActionDetail.LeaveKingdom:
            ChangeKingdomAction.ApplyByLeaveKingdom(clan);
            break;
        case ChangeKingdomAction.ChangeKingdomActionDetail.LeaveWithRebellion:
            ChangeKingdomAction.ApplyByLeaveWithRebellionAgainstKingdom(clan);
            break;
        case ChangeKingdomAction.ChangeKingdomActionDetail.LeaveAsMercenary:
            ChangeKingdomAction.ApplyByLeaveKingdomAsMercenary(clan);
            break;
        case ChangeKingdomAction.ChangeKingdomActionDetail.LeaveByClanDestruction:
            ChangeKingdomAction.ApplyByLeaveKingdomByClanDestruction(clan);
            break;
        case ChangeKingdomAction.ChangeKingdomActionDetail.LeaveByKingdomDestruction:
            ChangeKingdomAction.ApplyByLeaveByKingdomDestruction(clan);
            break;
    }
}
```

### 坑

- **枚举名 ≠ `ApplyBy*` 后缀。** 这 9 个取值里只有一部分与入口名对得上：

  | 枚举取值 | 对应公开入口 | 名字是否一致 |
  | --- | --- | --- |
  | `JoinKingdom` | `ApplyByJoinToKingdom` (`:152`) | ✗（多了 `To`） |
  | `JoinKingdomByDefection` | `ApplyByJoinToKingdomByDefection` (`:158`) | ✗ |
  | `CreateKingdom` | `ApplyByCreateKingdom` (`:165`) | ✓ |
  | `JoinAsMercenary` | `ApplyByJoinFactionAsMercenary` (`:189`) | ✗（`Faction` 出现） |
  | `LeaveKingdom` | `ApplyByLeaveKingdom` (`:177`) | ✓ |
  | `LeaveWithRebellion` | `ApplyByLeaveWithRebellionAgainstKingdom` (`:183`) | ✗ |
  | `LeaveAsMercenary` | `ApplyByLeaveKingdomAsMercenary` (`:195`) | ✗ |
  | `LeaveByClanDestruction` | `ApplyByLeaveKingdomByClanDestruction` (`:201`) | ✗ |
  | `LeaveByKingdomDestruction` | `ApplyByLeaveByKingdomDestruction` (`:171`) | ✗ |

  按后缀猜方法名基本都会猜错，务必查表。
- **`CreateKingdom` 不能只当成「加入」。** 它会额外把该家族设为统治家族（`:38`），复用 `JoinKingdom` 的路径会漏掉这一步。
- **`JoinKingdomByDefection` 与 `JoinKingdom` 走同一段 `ApplyInternal` 代码**，但公开入口 `ApplyByJoinToKingdomByDefection` 在返回后会**额外派发** `CampaignEventDispatcher.Instance.OnClanDefected(clan, oldKingdom, newKingdom)`（`:161`）。想监听叛逃只能用这个入口。
- **`LeaveKingdom` 会动定居点。** 它遍历家族所有 `Settlements`，用 `ChangeOwnerOfSettlementAction.ApplyByLeaveFaction(kingdom.Leader, settlement)` 把地交回王国领袖（`:80`）。如果 mod 想自己保留领地，就不能走这条入口。
- **`LeaveWithRebellion` 会立即宣战。** `:57` 的 `DeclareWarAction.ApplyByRebellion(kingdom, clan)`，随后还会对旧王国的所有交战方宣战。这不是「安静地离开」。
- **它不能用来触发变更。** 没有公开的 `Apply(clan, kingdom, detail)` 重载，`ApplyInternal` 是 `private`。
- **别跨宿主套用。** `ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail` 也有 `Default` / `BySiege` 之类的取值，与本枚举完全不同。

## 关键成员

| 取值 | 位置 | 说明 | 对应公开入口（位置） |
| --- | --- | --- | --- |
| `JoinAsMercenary` | `ChangeKingdomAction.cs:253` | 以雇佣兵身份服役；数值为 0（声明序第一）。走 `:44` 分支 → `StartMercenaryServiceAction`。 | `ApplyByJoinFactionAsMercenary` (`:189`) |
| `JoinKingdom` | `:255` | 普通加入王国。走 `:28` 分支，写 `clan.Kingdom = newKingdom`。 | `ApplyByJoinToKingdom` (`:152`) |
| `JoinKingdomByDefection` | `:257` | 从旧王国叛逃到新王国；入口额外派发 `OnClanDefected`（`:161`）。 | `ApplyByJoinToKingdomByDefection` (`:158`) |
| `LeaveKingdom` | `:259` | 和平离开；定居点交回王国领袖（`:80`）。 | `ApplyByLeaveKingdom` (`:177`) |
| `LeaveWithRebellion` | `:261` | 叛乱独立；立即 `DeclareWarAction.ApplyByRebellion`（`:57`）。 | `ApplyByLeaveWithRebellionAgainstKingdom` (`:183`) |
| `LeaveAsMercenary` | `:263` | 结束雇佣兵服役并离开。 | `ApplyByLeaveKingdomAsMercenary` (`:195`) |
| `LeaveByClanDestruction` | `:265` | 家族被毁灭导致离开。 | `ApplyByLeaveKingdomByClanDestruction` (`:201`) |
| `CreateKingdom` | `:267` | 建国；额外 `ChangeRulingClanAction.Apply(newKingdom, clan)`（`:38`）。 | `ApplyByCreateKingdom` (`:165`) |
| `LeaveByKingdomDestruction` | `:269` | 王国被毁灭导致离开；数值为 8（声明序最后）。 | `ApplyByLeaveByKingdomDestruction` (`:171`) |

上下文：宿主类型 `ChangeKingdomAction` 声明于 `:12`；唯一实现体 `ApplyInternal` 声明于 `:15`；宿主类还带一个常量 `MinimumNeededGoldForRecruitingMercenaries = 20000f`（`:247`）。

## 真实示例

**1) 建国（`CreateKingdom`）——注意它同时做了「加入」和「成为统治家族」**

```csharp
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem;

// newKingdom 是刚创建出来的 Kingdom 实例
ChangeKingdomAction.ApplyByCreateKingdom(clan, newKingdom);
// 结果：clan.Kingdom == newKingdom，且 newKingdom.RulingClan == clan
```

**2) 监听叛逃（只有 `JoinKingdomByDefection` 入口会派发这个事件）**

```csharp
CampaignEvents.OnClanDefectedEvent.AddNonSerializedListener(
    this, (clan, oldKingdom, newKingdom) =>
    {
        InformationManager.DisplayMessage(new InformationMessage(
            $"{clan.Name} 从 {oldKingdom?.Name ?? "无"} 叛逃至 {newKingdom?.Name}"));
    });
```

**3) 用 `detail` 做日志/存档迁移的分发（读，而不是写）**

```csharp
static bool IsJoining(ChangeKingdomAction.ChangeKingdomActionDetail d) => d switch
{
    ChangeKingdomAction.ChangeKingdomActionDetail.JoinKingdom           => true,
    ChangeKingdomAction.ChangeKingdomActionDetail.JoinKingdomByDefection => true,
    ChangeKingdomAction.ChangeKingdomActionDetail.CreateKingdom         => true,
    ChangeKingdomAction.ChangeKingdomActionDetail.JoinAsMercenary       => true,
    _                                                                    => false,
};
```

**4) 叛乱独立 vs 和平离开的副作用差异**

```csharp
// 和平离开：领地交回王国领袖，不宣战
ChangeKingdomAction.ApplyByLeaveKingdom(clan);

// 叛乱独立：立刻对旧王国宣战，并对其所有交战方宣战
ChangeKingdomAction.ApplyByLeaveWithRebellionAgainstKingdom(clan);
```

## 参见

- [ChangeKingdomAction](../ChangeKingdomAction) —— 宿主类型，9 个 `ApplyBy*` 公开入口都在这里。
- [ChangeOwnerOfSettlementDetail](../ChangeOwnerOfSettlementDetail) —— 姊妹枚举：`ChangeOwnerOfSettlementAction` 的嵌套枚举，同样由「因由」驱动内部分支。
- [ChangeOwnerOfSettlementAction](../ChangeOwnerOfSettlementAction) —— `LeaveKingdom` 分支实际调用的领地处置入口（`:80`）。
- [ActionNotes](../ActionNotes) —— `Actions` 命名空间的整体约定与调用时机说明。
- 相关类型（尚未建页，暂以纯文本记录）：`Clan`、`Kingdom`、`StartMercenaryServiceAction`、`EndMercenaryServiceAction`、`ChangeRulingClanAction`、`DeclareWarAction`、`CampaignEvents.OnClanDefectedEvent`（`CampaignEvents.cs:599`）。

## 导航

- 上级桶：[`campaign` API 索引](../_index)
- 宿主页：[ChangeKingdomAction](../ChangeKingdomAction)
- 姊妹页：[ChangeOwnerOfSettlementDetail](../ChangeOwnerOfSettlementDetail) · [ChangeOwnerOfSettlementAction](../ChangeOwnerOfSettlementAction)
- 本页源码：`TaleWorlds.CampaignSystem/Actions/ChangeKingdomAction.cs`
