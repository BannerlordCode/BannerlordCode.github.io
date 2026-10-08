---
title: "DeclareWarAction"
description: "这个静态 Action 类用 9 个语义化入口宣布开战，每个入口对应一种真实触发原因，最终收敛到同一个内部实现"
---

# DeclareWarAction

**命名空间：** `TaleWorlds.CampaignSystem.Actions`
**Type:** `public static class DeclareWarAction`
**Source:** `TaleWorlds.CampaignSystem/Actions/DeclareWarAction.cs`

## 概述

`DeclareWarAction` 是战役层宣布两个派系进入战争状态的**唯一合法入口**。它不保存任何状态——所有方法都是静态的，调用即生效，没有队列、没有确认步骤。9 个 `ApplyBy*` 入口分别对应王国决议、默认、玩家敌对、叛乱、犯罪度变化、王国创建、王位宣称、呼吁战争协议、任务这九种真实触发原因，全部收敛到私有的 `ApplyInternal`。后者先调用 `FactionManager.DeclareWar` 真正改写派系关系，再处理三件收尾工作：当一方是王国且领地数明显多于另一方时，按公式削减其 `PoliticalStagnation`（政治停滞）；若玩家所属派系参战，把敌方所有可见聚落与在途部队标记为视觉脏数据以强制刷新地图显示；最后通过 `CampaignEventDispatcher.Instance.OnWarDeclared` 把开战原因一并派发出去。直接改派系关系会绕过事件派发与外交缓存，导致 mod 与游戏本体的行为不一致。

## 心智模型

本页的核心是 **9 个语义化入口 + 1 个 `DeclareWarDetail` 枚举**。每个 `ApplyBy*` 对应一种**真实触发原因**（王国决议 / 默认 / 玩家敌对 / 叛乱 / 犯罪度变化 / 王国创建 / 王位宣称 / 呼吁战争协议 / 任务），它们全部收敛到 `ApplyInternal`(13)，由后者把对应的 `DeclareWarDetail` 值写入 `OnWarDeclared` 事件。

为什么 mod 必须选**语义正确**的那个入口：9 个入口的签名完全相同（两个 `IFaction`），编译器无法阻止你选错，但 `detail` 会随事件派发给所有监听者——游戏本体的外交结算、任务系统以及其他 mod 都会按 `detail` 分支处理。选错入口的后果是连锁的：把玩家寻衅宣战错写成 `CausedByKingdomDecision`，外交惩罚与声望变化会记到王国头上而不是玩家；把任务宣战错写成 `Default`，依赖 `CausedByQuest` 分支的监听逻辑会静默失效；日志与存档记录里的开战原因也会失真，排查问题时极难定位。

另一个要知道的隐藏副作用：`ApplyInternal` 在领地差距悬殊时会自动削减强势王国的 `PoliticalStagnation`（乘以 0.85 再减 3，下限 0）。这是游戏本体的平衡机制，mod 设计战争触发时机时应把它算进去。

## 怎么用

### 怎么拿到它

静态类，无需实例化，直接 `DeclareWarAction.ApplyBy...(faction1, faction2)` 调用。两个参数都是 `IFaction`，顺序在语义上代表「宣战方 / 被宣战方」，传参时保持与触发原因一致的方向。

### 典型用法

1. **王国决议通过宣战**：玩家或 AI 的王国在决议中投票通过了对某阵营的开战决定 → `ApplyByKingdomDecision`，detail 记为 `CausedByKingdomDecision`。
2. **玩家主动寻衅**：玩家袭击商队、烧村累积敌对度，对方阵营正式宣战 → `ApplyByPlayerHostility`，detail 记为 `CausedByPlayerHostility`，惩罚记在玩家头上。
3. **叛乱独立**：叛乱派系与原王国决裂 → `ApplyByRebellion`，detail 记为 `CausedByRebellion`。
4. **任务要求宣战**：主线或支线任务的目标是向某阵营宣战 → `ApplyByQuest`，detail 记为 `CausedByQuest`。
5. **无特殊原因的直接宣战**：剧情事件或 mod 自定义逻辑里没有更精确的语义 → `ApplyByDefault`，detail 记为 `Default`。

### 最容易踩的坑

1. **`ApplyInternal` 是 private**：不要试图用反射或直接调用它绕过入口——它只是收敛点，入口才是契约，游戏本体升级时私有方法随时可能改签名。
2. **9 个入口参数完全相同但语义不同**：选错入口编译器一声不响，但 `detail` 错了，后续外交惩罚、任务分支、日志全部跟着错。
3. **detail 枚举决定后续外交后果**：`OnWarDeclared` 的监听者按 `detail` 分支，选错等于把后果挂到错误的承担者身上。
4. **宣战不可撤销**：静态调用立即生效，没有撤回机制；想反悔要走 `MakePeaceAction` 单独求和。
5. **隐藏的政治停滞修正**：领地差距大时 `ApplyInternal` 会自动削减强势王国的 `PoliticalStagnation`，做平衡设计时别漏掉这条。

## 关键成员

- **ApplyInternal**（`DeclareWarAction.cs:13`）— 私有收敛点：9 个入口的唯一下游。先调 `FactionManager.DeclareWar` 改写派系关系，再按领地差削减王国 `PoliticalStagnation`、把敌方可见聚落与部队标记为视觉脏，最后派发 `OnWarDeclared`。mod 不应直接调用它。
- **ApplyByKingdomDecision**（`DeclareWarAction.cs:64`）— 王国决议通过后的宣战入口，detail 为 `CausedByKingdomDecision`；用于投票决定开战的游戏内正式流程。
- **ApplyByDefault**（`DeclareWarAction.cs:70`）— 默认入口，detail 为 `Default`；没有更精确语义时使用，不要拿它当「偷懒入口」掩盖真实原因。
- **ApplyByPlayerHostility**（`DeclareWarAction.cs:76`）— 玩家主动寻衅引发的宣战，detail 为 `CausedByPlayerHostility`；外交惩罚会记到玩家头上。
- **ApplyByRebellion**（`DeclareWarAction.cs:82`）— 叛乱派系决裂时的宣战入口，detail 为 `CausedByRebellion`；用于叛军与原王国开战的场景。
- **ApplyByCrimeRatingChange**（`DeclareWarAction.cs:88`）— 犯罪度变化触发的宣战，detail 为 `CausedByCrimeRatingChange`；用于阵营因犯罪度累积而翻脸的流程。
- **ApplyByKingdomCreation**（`DeclareWarAction.cs:94`）— 新王国创建时对旧主宣战，detail 为 `CausedByKingdomCreation`；用于王国建立即开战的场景。
- **ApplyByClaimOnThrone**（`DeclareWarAction.cs:100`）— 王位宣称触发的宣战，detail 为 `CausedByClaimOnThrone`；用于宣称头衔后开战的流程。
- **ApplyByCallToWarAgreement**（`DeclareWarAction.cs:106`）— 呼吁战争协议生效时的宣战入口，detail 为 `CausedByCallToWarAgreement`；用于协议条款被触发后自动开战。
- **ApplyByQuest**（`DeclareWarAction.cs:112`）— 任务目标要求的宣战，detail 为 `CausedByQuest`；用于任务系统驱动的开战。
- **DeclareWarDetail**（`DeclareWarAction.cs:118`）— 9 值枚举，与 9 个入口一一对应；随 `OnWarDeclared` 派发，是监听者判断开战原因的唯一依据。

## 真实示例

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

// 确保在 Campaign.Current 初始化完成后再调用这些静态入口
public static class MyWarLogic
{
    // 场景 1：王国决议通过，向目标阵营宣战（detail = CausedByKingdomDecision）
    public static void WarByKingdomDecision(IFaction playerFaction, IFaction targetFaction)
    {
        DeclareWarAction.ApplyByKingdomDecision(playerFaction, targetFaction);
    }

    // 场景 2：玩家主动寻衅引发的战争（detail = CausedByPlayerHostility）
    public static void WarByPlayerHostility(IFaction playerFaction, IFaction targetFaction)
    {
        DeclareWarAction.ApplyByPlayerHostility(playerFaction, targetFaction);
    }

    // 场景 3：没有特殊外交原因的直接宣战（detail = Default）
    public static void WarByDefault(IFaction playerFaction, IFaction targetFaction)
    {
        DeclareWarAction.ApplyByDefault(playerFaction, targetFaction);
    }

    // 场景 4：任务要求宣战；玩家方用 Hero.MainHero.MapFaction 取
    public static void WarByQuest(IFaction targetFaction)
    {
        IFaction playerFaction = Hero.MainHero.MapFaction;
        DeclareWarAction.ApplyByQuest(playerFaction, targetFaction);
    }
}
```

## 参见

- ↔ [MakePeaceAction](../MakePeaceAction) — 反向操作（本批，先放着）
- ↔ [Campaign](../Campaign) — 战役世界根对象
- ↔ [CampaignEventDispatcher](../CampaignEventDispatcher) — 开战会派发战役事件
- ↔ [FactionHelper](../../core-extra/FactionHelper) — 派系侧工具页（敌国判定等）

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
