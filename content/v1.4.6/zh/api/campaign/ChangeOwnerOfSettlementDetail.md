---
title: "ChangeOwnerOfSettlementDetail"
description: "ChangeOwnerOfSettlementAction 的嵌套枚举，用 8 个取值标记定居点易主的途径，驱动易主流程内部的分支。"
---
# ChangeOwnerOfSettlementDetail

**Namespace:** `TaleWorlds.CampaignSystem.Actions`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public enum ChangeOwnerOfSettlementDetail`（嵌套于 `ChangeOwnerOfSettlementAction`）
**Source:** `TaleWorlds.CampaignSystem/Actions/ChangeOwnerOfSettlementAction.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`ChangeOwnerOfSettlementDetail` 是 `ChangeOwnerOfSettlementAction`（宿主类型声明于 `ChangeOwnerOfSettlementAction.cs:9`）内部的**嵌套枚举**，声明于 `:148`，共 8 个取值（`:151`–`:165`）。

它不是「一个独立的游戏概念」，而是**易主流程的途径标签**。宿主类的私有方法 `ApplyInternal(Settlement, Hero, Hero, ChangeOwnerOfSettlementDetail)`（`:12`）以它为形参，并按它分叉：只有 `BySiege` 会销毁旧驻军（`:26`）；`BySiege` / `ByClanDestruction` / `ByLeaveFaction` 三者会让要塞走 `flag = true` 的派发分支（`:51`）；这个 `flag` 最终原样出现在 `CampaignEventDispatcher.Instance.OnSettlementOwnerChanged(settlement, flag, newOwner, hero, capturerHero, detail)`（`:78`）里，交给所有订阅者。

换句话说：**它是「易主是怎么发生的」这一事实在系统内部的载体**，从入口一路传到事件回调。

## 心智模型

把它理解成一次迁移的**因由（cause）字段**，而不是一个可选项菜单。

- **它没有默认值语义。** `Default`（`:151`）不是「C# 的 0 值占位」，而是「调用方没有更具体因由」这一条真实业务途径，对应公开方法 `ApplyByDefault`。
- **它决定副作用的分支。** 同一次「A 家族的城变成 B 家族的城」，因由不同，副作用就不同：走 `BySiege` 会销毁旧驻军并补建；走 `ByKingDecision` 会把 `IsOwnerUnassigned` 置回 `false`；走 `ByLeaveFaction` 会对要塞触发 `flag` 分支。
- **它对 mod 作者是只读的。** 宿主类的 8 个公开 `ApplyBy*` 方法**都不接收**这个枚举——你无法「指定 detail」，只能通过选哪个 `ApplyBy*` 来间接决定它。想在事件回调里**读**它，是唯一正当的用法。
- **声明顺序即数值顺序。** 枚举没有显式赋值，取值按声明顺序从 0 递增。

## 怎么用

### 怎么拿到

它是嵌套类型，必须带宿主类型全名：

```csharp
using TaleWorlds.CampaignSystem.Actions;

// 完整限定名
var d = ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail.BySiege;
```

因为 `ChangeKingdomAction` 是同一命名空间下的另一个宿主，二者都有名为 `...Detail` 的嵌套枚举，**`using static` 或别名要格外小心**，否则容易把两个 `Detail` 弄混。

### 典型用法

**用法 A：在事件回调里读它，判断这次易主是怎么发生的。**

```csharp
CampaignEvents.SettlementOwnerChangedEvent.AddNonSerializedListener(
    this, (settlement, wasFortification, newOwner, oldOwner, capturer, detail) =>
    {
        switch (detail)
        {
            case ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail.BySiege:
                // 攻城得来：capturer 有值
                break;
            case ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail.ByBarter:
                // 交易割让
                break;
            case ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail.ByRebellion:
                // 叛乱：newOwner == capturer
                break;
        }
    });
```

**用法 B：写一个「因由 → 公开入口」的适配层（决定 detail 的唯一正道）。**

```csharp
public static void Transfer(Settlement s, Hero newOwner, Cause cause)
{
    switch (cause)
    {
        case Cause.KingDecision:
            ChangeOwnerOfSettlementAction.ApplyByKingDecision(newOwner, s); // detail = ByKingDecision
            break;
        case Cause.Siege:
            ChangeOwnerOfSettlementAction.ApplyBySiege(newOwner, newOwner, s); // detail = BySiege
            break;
        case Cause.Gift:
            ChangeOwnerOfSettlementAction.ApplyByGift(s, newOwner); // detail = ByGift
            break;
        default:
            ChangeOwnerOfSettlementAction.ApplyByDefault(newOwner, s); // detail = Default
            break;
    }
}
```

### 坑

- **枚举名与 `ApplyBy*` 名并非一一对应。** `ApplyByDestroyClan` 传的是 `ByClanDestruction`（`:138`），不是 `ByDestroyClan`；`ApplyByRebellion` 传的是 `ByRebellion`。按 `ApplyBy*` 的后缀去猜枚举名会找不到成员。
- **`Default` 排在第一个、数值为 0。** 如果你把枚举值当整数持久化到存档或配置里，插值/移位会破坏兼容性；这个枚举**没有显式赋值**，顺序就是语义。
- **它不能用来触发迁移。** 没有 `Apply(settlement, hero, detail)` 这样的公开重载——`ApplyInternal` 是 `private`。想用某条途径，必须调对应的 `ApplyBy*`。
- **不要用它当「模式开关」做业务分支。** 它描述的是**已经发生的因由**，不是「你希望发生什么」。在事件回调里读它是正确的；在调用前拿它当参数是错的。
- **同桶存在同名相似的枚举。** `ChangeKingdomAction.ChangeKingdomActionDetail` 也有 `JoinKingdom` / `LeaveKingdom` 这类取值，别跨宿主套用。

## 关键成员

| 取值 | 位置 | 说明 | 对应公开入口 |
| --- | --- | --- | --- |
| `Default` | `ChangeOwnerOfSettlementAction.cs:151` | 系统默认途径，无更具体因由。 | `ApplyByDefault` (`:92`) |
| `BySiege` | `:153` | 攻城得手。唯一会销毁旧驻军的途径（`:26`）。 | `ApplyBySiege` (`:108`) |
| `ByBarter` | `:155` | 交易/外交割让。 | `ApplyByBarter` (`:124`) |
| `ByLeaveFaction` | `:157` | 家族退出阵营时的领地处置。 | `ApplyByLeaveFaction` (`:118`) |
| `ByKingDecision` | `:159` | 国王裁决封地。 | `ApplyByKingDecision` (`:98`) |
| `ByGift` | `:161` | 馈赠。 | `ApplyByGift` (`:142`) |
| `ByRebellion` | `:163` | 叛乱接管；此时 `newOwner` 与 `capturerHero` 是同一个 Hero（`:132`）。 | `ApplyByRebellion` (`:130`) |
| `ByClanDestruction` | `:165` | 家族毁灭后的接管。**注意名字与 `ApplyByDestroyClan` 不一致。** | `ApplyByDestroyClan` (`:136`) |

枚举本身声明于 `:148`；宿主类型 `ChangeOwnerOfSettlementAction` 声明于 `:9`；唯一消费者 `ApplyInternal` 声明于 `:12`，并在 `:78` 把该值派发给 `OnSettlementOwnerChanged`。

## 真实示例

**1) 只关心「攻城」这一种因由的监听器**

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

public sealed class SiegeCaptureLogger : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.OnSettlementOwnerChangedEvent.AddNonSerializedListener(
            this, OnOwnerChanged);
    }

    private void OnOwnerChanged(Settlement settlement, bool wasFortification,
        Hero newOwner, Hero oldOwner, Hero capturer,
        ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail detail)
    {
        if (detail != ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail.BySiege)
            return;

        InformationManager.DisplayMessage(new InformationMessage(
            $"[攻城] {settlement.Name} 由 {capturer?.Name} 攻取，归属 {newOwner?.Name}"));
    }

    public override void SyncData(IDataStore dataStore) { }
}
```

**2) 把 detail 映射成可读文本（注意 `ByClanDestruction` 这个名字）**

```csharp
static string Describe(ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail d) => d switch
{
    ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail.BySiege            => "攻城",
    ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail.ByBarter           => "交易",
    ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail.ByLeaveFaction     => "退出阵营",
    ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail.ByKingDecision     => "国王裁决",
    ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail.ByGift             => "馈赠",
    ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail.ByRebellion        => "叛乱",
    ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail.ByClanDestruction  => "家族毁灭",
    _                                                                              => "默认",
};
```

**3) 证明 detail 是「因由」而非「参数」**

```csharp
// ❌ 不存在这样的 API：ChangeOwnerOfSettlementAction.Apply(s, hero, detail);
// ✅ 只能通过选择入口来决定 detail：
ChangeOwnerOfSettlementAction.ApplyByBarter(hero, s); // → ByBarter
```

## 参见

- [ChangeOwnerOfSettlementAction](../ChangeOwnerOfSettlementAction) —— 宿主类型，8 个 `ApplyBy*` 公开入口都在这里。
- [ChangeKingdomActionDetail](../ChangeKingdomActionDetail) —— 姊妹枚举：`ChangeKingdomAction` 的嵌套枚举，同样由「因由」驱动内部分支。
- [ChangeKingdomAction](../ChangeKingdomAction) —— 另一个宿主，可与本页对照阅读「薄壳入口 + 集中 ApplyInternal」的模式。
- [ActionNotes](../ActionNotes) —— `Actions` 命名空间的整体约定与调用时机说明。
- 相关类型（尚未建页，暂以纯文本记录）：`Settlement`、`Hero`、`CampaignEvents.OnSettlementOwnerChangedEvent`（`CampaignEvents.cs:2087`）、`CampaignEventDispatcher`。

## 导航

- 上级桶：[`campaign` API 索引](../_index)
- 宿主页：[ChangeOwnerOfSettlementAction](../ChangeOwnerOfSettlementAction)
- 姊妹页：[ChangeKingdomActionDetail](../ChangeKingdomActionDetail) · [ChangeKingdomAction](../ChangeKingdomAction)
- 本页源码：`TaleWorlds.CampaignSystem/Actions/ChangeOwnerOfSettlementAction.cs`
