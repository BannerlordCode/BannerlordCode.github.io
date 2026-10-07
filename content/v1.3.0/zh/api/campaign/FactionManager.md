---
title: "FactionManager"
description: "IFaction 的外交状态机：立场链接、宣战、中立、恒定战争与加权氏族关系。"
---

# FactionManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class FactionManager`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/FactionManager.cs`

## 概述

`FactionManager` 拥有整场战役的外交图。它是一个很小的类——九个公开成员——因为真正的工作被委派出去了：立场**规则**在已注册的 `DiplomacyModel` 中，而派系**状态**位于 [Clan](../Clan) 与 [Kingdom](../Kingdom) 上。

它实际存储的内容只有一个可存档字段：

```
private FactionManagerStancesData _stances;   // [SaveableField(20)]
```

那份数据为每一对“有过非常规外交关系”的派系保存一条 `StanceLink`。其余全部是推导出来的。

任何问题的处理流水线始终是同一条：

```
IsAtWarAgainstFaction(a, b)
    ├─ 为 null / 同一派系 / 已消灭？            → false
    ├─ DiplomacyModel.IsAtConstantWar?         → true
    ├─ DiplomacyModel.GetShallowDiplomaticStance?
    │     非 null  → 由该浅层立场决定（文化、强盗、……）
    │     为 null  → 落到存储的 StanceLink
    └─ 存储的 StanceLink.IsAtWar
```

“浅层（shallow）”这个概念是 mod 最容易搞错的部分。浅层外交立场是由**特征**而非**历史**决定的——文化匹配、强盗 / 法外之徒标志——因此它会直接短路掉存储的立场链接，而 `DeclareWar` 在存在浅层立场时会拒绝写入。

## 心智模型

`FactionManager` 位于 `Campaign` 之下、每个 `IFaction` 之上：

```
Campaign.Current.FactionManager
        │
        └── _stances : FactionManagerStancesData   [SaveableField(20)]
                 └── StanceLink(faction1, faction2, StanceType)
                          StanceType: Hostile | Wary | Neutral | Friendly | War
        ▲
        │  被查询
DiplomacyModel  ──►  GetDefaultDiplomaticStance / GetShallowDiplomaticStance / IsAtConstantWar
```

典型调用顺序：

```
MBSubModuleBase.OnCampaignStart
    Campaign.Current.FactionManager 已可用
CampaignBehaviorBase.RegisterEvents()
    （没有外交 tick 事件；改为响应 OnClanChangedKingdomEvent / 缔约与宣战动作）
Hourly / DailyTick
    FactionManager.IsAtWarAgainstFaction(a, b)  读取
    FactionManager.DeclareWar(a, b) / SetNeutral(a, b)  修改
    SetStance 内部会调用 faction1.UpdateFactionsAtWarWith() 与 faction2.UpdateFactionsAtWarWith()
```

实际开发中最容易踩的坑：

- **没有战役时 `Instance` 会抛异常。** getter 就是 `Campaign.Current.FactionManager`，没有判空，因此在主菜单上访问 `FactionManager.Instance` 会抛 `NullReferenceException`。请先判 `Campaign.Current`。
- **立场是对称且惰性创建的。** `GetStanceLinkInternal` 会在首次查询某对派系时创建默认链接。也就是说一次“只读”的 `IsAtWarAgainstFaction` 调用其实会修改内部状态。这本身是设计使然，但也意味着在加载钩子里做一次查询，就可能为本不该互动的派系创建链接。
- **`DeclareWar` 对浅层立场是静默空操作。** 若 `DiplomacyModel.GetShallowDiplomaticStance` 返回非 null（例如强盗对平民），调用什么也不做，也没有返回值可查。之后必须用 `IsAtWarAgainstFaction` 验证。
- **自我宣战与已消灭派系返回 `false`。** 传入同一个派系两次，或传入 `IsEliminated` 的派系，永远得到“非战争”的答案。若需要它们产生影响，请自行过滤。
- **`IsNeutralWithFaction` 不等于“不是战争”。** 恒定战争对返回 `false`，而强盗对强盗的特殊分支意味着两个强盗氏族可以“非中立”却并未交战。
- **`GetRelationBetweenClans` 不是对称的。** 它对领袖、配偶与领主配对施加不对称的权重（氏族 1 的领袖对氏族 2 的配偶，与反向的权重不同），并且当一方是无领主的强盗氏族面对非强盗氏族时返回 `-10`。

## 依赖关系

| 方向 | 类型 | 关系 |
|-----------|------|--------------|
| 归属 | [Campaign](../Campaign) | `Campaign.Current.FactionManager`；`Instance` 转发到它 |
| 派系 | [Clan](../Clan)、[Kingdom](../Kingdom) | 两者都实现 `IFaction`，也是仅有的输入 |
| 状态 | `StanceLink`、`StanceType`、`FactionManagerStancesData` | 唯一的可存档字段 |
| 模型 | `DiplomacyModel` | 默认立场、浅层立场、恒定战争 |
| 模型 | `AgeModel` | `GetRelationBetweenClans` 内部的 `HeroComesOfAge` 阈值 |
| 缓存刷新 | `IFaction.UpdateFactionsAtWarWith` | 战争状态变化时由 `SetStance` 调用 |

## 主要成员

### 访问

#### `public static FactionManager Instance`

`Campaign.Current.FactionManager` 的便捷访问器。**没有判空保护**——这是本管理器在战役之外最常见的崩溃点。

#### `public FactionManager()`

公开构造函数，供存档系统使用。不供 mod 使用：手动构建的实例不是战役的实例，因此它的立场对其他所有系统都不可见。

### 战争与和平

#### `public static void DeclareWar(IFaction faction1, IFaction faction2)`

把立场链接设为 `StanceType.War`，并刷新双方 `FactionsAtWarWith` 缓存。当两者是同一派系或存在浅层立场时静默无效。

#### `public static void SetNeutral(IFaction faction1, IFaction faction2)`

把立场链接强制回 `StanceType.Neutral`，若原立场为 `War` 则刷新缓存。它不经过和谈动作，因此会跳过战争疲劳、贡赋与和约条款效果。

#### `public static bool IsAtWarAgainstFaction(IFaction faction1, IFaction faction2)`

主查询。对恒定战争、浅层战争或存储的 `War` 立场返回 `true`；对 null、同一派系或已消灭派系返回 `false`。

#### `public static bool IsAtConstantWarAgainstFaction(IFaction faction1, IFaction faction2)`

只有当外交模型判定该配对永久敌对时才为 `true`。想判断“外交是否有可能改变这一点”时应该用这个。

#### `public static bool IsNeutralWithFaction(IFaction faction1, IFaction faction2)`

当存储或浅层立场为 `Neutral` 时为 `true`。对恒定战争以及同一 / 已消灭派系返回 `false`，因此它并不是 `IsAtWarAgainstFaction` 的逻辑取反。

### 关系

#### `public static int GetRelationBetweenClans(Clan clan1, Clan clan2)`

对每一对成年领主的 `Hero.GetBaseHeroRelation` 做加权平均，权重包含领袖（+0.2）、配偶（+0.05）与领袖对领袖（×20）。当一方是无领主的强盗氏族面对非强盗氏族时返回 `-10`。

有两点必须记住：它**不对称**（权重随参数顺序变化），并且只统计年龄超过 `Campaign.Current.Models.AgeModel.HeroComesOfAge` 的英雄——未成年角色完全不参与计算。

## 使用示例

### 示例 1：安全的战争查询

```csharp
using TaleWorlds.Core;
using TaleWorlds.CampaignSystem;

public static string WarReport(IFaction a, IFaction b)
{
    Campaign campaign = Campaign.Current;
    if (campaign == null || a == null || b == null || a == b)
    {
        return "无战役";
    }

    bool atWar = FactionManager.IsAtWarAgainstFaction(a, b);
    bool constantWar = FactionManager.IsAtConstantWarAgainstFaction(a, b);
    return $"{a.MapFaction.Name.Name} 对 {b.MapFaction.Name.Name}：" +
           $"交战={atWar}，恒定战争={constantWar}";
}
```

### 示例 2：宣战并验证是否生效

```csharp
using TaleWorlds.Core;
using TaleWorlds.CampaignSystem;

public static bool TryDeclareWar(IFaction a, IFaction b)
{
    if (a == null || b == null || a == b || a.IsEliminated || b.IsEliminated)
    {
        return false;
    }

    FactionManager.DeclareWar(a, b);

    // DeclareWar 返回 void，且对浅层立场可能静默无效，因此必须验证。
    bool atWar = FactionManager.IsAtWarAgainstFaction(a, b);
    InformationManager.DisplayMessage(new InformationMessage($"已宣战：{atWar}"));
    return atWar;
}
```

### 示例 3：用对称视角比较两个氏族

```csharp
using TaleWorlds.CampaignSystem;

public static string ClanRelation(Clan a, Clan b)
{
    if (a == null || b == null || a == b)
    {
        return "不适用";
    }

    int forward = FactionManager.GetRelationBetweenClans(a, b);
    int reverse = FactionManager.GetRelationBetweenClans(b, a);
    return $"{a.Name.Name}→{b.Name.Name} {forward}（反向 {reverse}）";
}
```

### 示例 4：脚本改动后刷新缓存战争列表

```csharp
using TaleWorlds.Core;
using TaleWorlds.CampaignSystem;

public static void ForceNeutralAndRefresh(IFaction a, IFaction b)
{
    if (a == null || b == null || a == b)
    {
        return;
    }

    FactionManager.SetNeutral(a, b);

    // SetNeutral 本身已刷新双方；这是任何直接改立场之后的双保险版本。
    a.UpdateFactionsAtWarWith();
    b.UpdateFactionsAtWarWith();
}
```

## 风险与崩溃边界

1. **`Instance` 没有判空。** `FactionManager.Instance` 会解引用 `Campaign.Current` 且不做检查。从 `OnGameStart`、`OnSubModuleLoad`、静态构造函数或主菜单调用都会抛异常。
2. **查询会修改状态。** `IsAtWarAgainstFaction` 与 `IsNeutralWithFaction` 都会调用 `GetStanceLinkInternal`，首次接触时会**创建并存储**一条默认 `StanceLink`。对所有派系对做只读循环，会永久往存档里塞入链接。
3. **`DeclareWar` 会静默失败。** 同一派系，或存在浅层外交立场（文化匹配、强盗 / 法外之徒标志）的配对，是无返回值的空操作。请始终用 `IsAtWarAgainstFaction` 验证。
4. **`SetNeutral` 不是和谈动作。** 它绕过和约、战争疲劳、贡赋转移与 `MakePeace` 日志条目。玩家能看到的任何流程都请走以物易物 / 和谈流程。
5. **与存档耦合。** `_stances` 是 `[SaveableField(20)]`——一个字段承载整张外交图。任何对 `FactionManagerStancesData` 或 `StanceLink` 布局的改动都会让已有存档的外交失效。参见 [存档系统](../../../architecture/save-system)。
6. **按版本门控的修复。** `AfterLoad` 会用 `DiplomacyModel.GetShallowDiplomaticStance` 清理 v1.3.0 之前的存档、剔除涉及已消灭派系的立场，并为 v1.2.9 之前的存档补写战争状态。若你的 mod 改变了浅层立场规则，这些修复在旧存档上的行为会随之改变。
7. **已消灭派系会悄悄“失去意义”。** 一旦 `IsEliminated` 被置位，所有查询返回否定答案，`RemoveFactionsFromCampaignWars` 也会丢掉该派系的链接。恢复一个王国却不重建立场，它在外交上就是孤立的。
8. **`GetRelationBetweenClans` 的不对称与年龄门槛。** 结果取决于参数顺序，且年龄低于 `AgeModel.HeroComesOfAge` 的英雄被完全排除。把它当作权重启发式使用，而不是稳定的存储值。

## 怎么用

### 怎么拿到它

不用拿。**你要用的方法全是 `static`**，直接 `FactionManager.DeclareWar(...)` 就行；类型在 `TaleWorlds.CampaignSystem`，源码 `TaleWorlds.CampaignSystem/FactionManager.cs`。

`FactionManager` 类本身（`:12`）只有一个公开实例属性 `Instance`（`:34`），它的 getter 就是 `return Campaign.Current.FactionManager;`（`:38`）——**这就是 `Instance` 会 NPE 的原因**。而 `DeclareWar`（`:131`）、`SetNeutral`（`:141`）、`IsAtWarAgainstFaction`（`:158`）、`IsNeutralWithFaction`（`:185`）、`GetRelationBetweenClans`（`:223`）全都不经过 `Instance` 这个入口（内部该用的时候自己取），**所以查询和写入都不要求你先拿到实例，但全都要求 `Campaign.Current` 已经存在**。

一条要记住的分界：**这个类里没有同盟关系。** `AcceptCallToWarAgreementDecision.IsAllowed` 判的是 `CallingKingdom.IsAllyWith(base.Kingdom)`，那个 `IsAllyWith` 在 `TaleWorlds.CampaignSystem/Kingdom.cs:931`，底层走 `IAllianceCampaignBehavior`，跟 `FactionManager` 的战争/中立图是两套东西。

### 典型用法

宣战，并且**立刻验证**：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements;

public static class Diplomacy
{
    public static bool TryDeclareWar(IFaction aggressor, IFaction target)
    {
        // 前置条件由 DiplomacyModel 决定；不满足时 DeclareWar 是空操作。
        FactionManager.DeclareWar(aggressor, target);

        // 必须回读确认。DeclareWar 返回 void，失败时没有任何提示。
        return FactionManager.IsAtWarAgainstFaction(aggressor, target);
    }

    public static bool AreAtPeace(IFaction a, IFaction b)
    {
        // IsAtWarAgainstFaction 已经涵盖了中立判断，
        // 别自己再叠加 !IsNeutralWithFaction —— 那会把两者都排除的情况算成和平。
        return !FactionManager.IsAtWarAgainstFaction(a, b);
    }
}
```

参数核对：`DeclareWar(IFaction faction1, IFaction faction2)`、`IsAtWarAgainstFaction(IFaction faction1, IFaction faction2)`，**两个参数，都接受 `IFaction`**——所以 `Clan` 与 `Kingdom` 可以混着传，这一点很容易写错成 `Kingdom`。

### 最容易踩的坑

**以为 `DeclareWar` 没能生效时，原因是外交前置条件没满足。有时不是——它写了一整个对象，然后把它扔了。**

顺着调用链看：`DeclareWar`（`:131`）在 `:136` 调 `SetStance`，`SetStance`（`:118`）在 `:120` 调 `GetStanceLinkInternal(IFaction, IFaction)`。而 `GetStanceLinkInternal`（`:86`）是这么写的：

```csharp
FactionManager.cs:88    StanceLink stanceLink = this._stances.GetStance(faction1, faction2);
FactionManager.cs:89    if (stanceLink == null)
FactionManager.cs:91        stanceLink = new StanceLink(..., faction1, faction2);
FactionManager.cs:92        this.AddStance(faction1, faction2, stanceLink);
FactionManager.cs:94    return stanceLink;          // 不管有没有存进去，都把这个对象返回出去
```

关键在 `AddStance`（`:98`）的第一句 `:100`：

```csharp
if (!faction1.IsEliminated && !faction2.IsEliminated
    && Campaign.Current.Models.DiplomacyModel.GetShallowDiplomaticStance(faction1, faction2) == null)
```

**只要有一方已被消灭，这个新建的 `StanceLink` 就不会被存进 `_stances`。** 但 `GetStanceLinkInternal` 在 `:94` 照样把它返回了，于是 `SetStance` 的 `:122` 把 `StanceType` 写在了这个**临时对象**上，然后 `:123` 判出涉及 War、`:125` 与 `:126` 对两个派系各调一次 `UpdateFactionsAtWarWith()`（声明在 `TaleWorlds.CampaignSystem/IFaction.cs:155`）。

后果：外部看起来「宣战生效了」——更新事件派发了、依赖 `FactionsAtWarWith` 的 UI 可能重画了一次——但**存档里什么都没记**。退出重进游戏，战争就消失了，因为 `_stances` 里那条链接从来没被写进去。这就是为什么**宣战之后必须立刻 `IsAtWarAgainstFaction` 回读**：它是唯一能分辨"真的开战了"和"只派发了事件"的办法，而这个差别从返回值上看不出来。

## 跨版本提示

- 这九个公开成员、`DiplomacyModel` 的查询顺序以及 `[SaveableField(20)]` 的立场存储在 1.3.x 与 1.4.x 中完全一致。
- `AfterLoad` 的版本门控针对 v1.3.0 之前与 v1.2.9 之前的存档。新存档会跳过这两个分支，因此你在这里新增的任何行为都不会回溯应用到旧文件——需要迁移请自行实现。

## 参见

- [Clan](../Clan) — 两个 `IFaction` 实现之一
- [Kingdom](../Kingdom) — 另一个 `IFaction` 实现
- [Campaign](../Campaign) — 持有活动的 `FactionManager` 实例
- [Hero](../Hero) — 其关系喂给 `GetRelationBetweenClans` 的领主
- [Settlement](../Settlement) — 会改变外交图的易主事件
- [存档系统](../../../architecture/save-system) — Saveable 字段纪律
- [SDK 总览](../../../architecture/sdk-overview) — 模块生命周期顺序
- [战役基础](../../../guide/campaign-basics) — 以任务为导向的上手指南