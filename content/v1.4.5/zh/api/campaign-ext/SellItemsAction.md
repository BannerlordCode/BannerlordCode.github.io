---
title: "SellItemsAction"
description: "SellItemsAction 的自动生成战役动作参考。"
---
# SellItemsAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/SellItemsAction.cs`

SellItemsAction 是一组静态方法，用于在战役中以特定原因触发"SellItems"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### Apply

```csharp
public static void Apply(PartyBase receiverParty, PartyBase payerParty, ItemRosterElement subject, int number, Settlement currentSettlement = null)
```

**用途 / Purpose:** 将当前对象的效果应用到目标。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
SellItemsAction.Apply(receiverParty, payerParty, subject, 100, null);
```

## 概述

`SellItemsAction` 是「一方把物品逐件卖给另一方」的交易结算入口。它不处理库存界面，只负责：定据点 → 定税 → 循环逐件移动物品并累计金额 → 把钱按三种不同的转账路径付出去。全文 110 行、零字段零常量、只有一个公开方法。

## 心智模型

**它是一个「分支路由器」而不是一个定价函数。** 真正的定价在 `town.GetItemPrice(...)`（`:49`），而本类只决定**钱往哪条路走**。三条主分支（`:54` / `:68` / `:93`）分别对应「买家是据点」「卖家是据点」「卖家在据点里但不是据点本身」。

**两条必须先记住的规则：**

1. **两个 `PartyBase` 参数的名字在公开层和实现层是反的。** 公开签名是 `Apply(PartyBase receiverParty, PartyBase payerParty, ...)`（`:106`），但 `:108` 把它们转发给 `ApplyInternal(PartyBase sellerParty, PartyBase buyerParty, ...)`（`:9`）——**`receiverParty` 实为卖方，`payerParty` 实为买方。** 看参数名会完全搞反付款方向。
2. **价格是逐件重算的。** `:47` 的循环体里 `:49` 每件都调一次 `GetItemPrice`，然后 `:51` 扣 1 件、`:52` 加 1 件。**所以同一笔交易里不同件的单价可能不同**，而 `:50` 把它们累加成 `num`。

**而本类是本批里少数会抛异常的 Action：** `:21` 的 `throw new MBInvalidParameterException("currentSettlement")` 与 `:31` 的 `throw new MBException()`。

## 怎么用

### 怎么拿到它

**源文件：** `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/SellItemsAction.cs`（全文 110 行）。
**调用点：** `CaravansCampaignBehavior.cs:1202`（商队卖）、`CaravansCampaignBehavior.cs:1336`（据点买商队货）、`PartiesBuyFoodCampaignBehavior.cs:69`、`PartiesBuyHorseCampaignBehavior.cs:103`。

`public static class SellItemsAction`（`SellItemsAction.cs:7`），唯一成员 `public static void Apply(PartyBase receiverParty, PartyBase payerParty, ItemRosterElement subject, int number, Settlement currentSettlement = null)`（`:106`），一行转调（`:108`）。

### 典型用法

**据点定位有两级回退，两级都可能抛异常。** `currentSettlement` 为 null 时先试 `sellerParty.Settlement`（`:13`），再试 `buyerParty.Settlement`（`:19`）；两者皆 null 抛 `MBInvalidParameterException`（`:21`）。定位到之后 `:26` 取 `currentSettlement.Town`，**若为 null 则要求 `IsVillage`（`:29`），否则抛 `MBException`（`:31`）**；村庄再靠 `TradeBound` 或 `Bound` 反查镇（`:33`）——**这两条都可能给 null，后面 `town.GetItemPrice` 就会 NRE。**

**而 `:35`-`:41` 决定谁是「移动中的那一方」**：优先取 `buyerParty?.MobileParty`（`:35`），取不到就退回 `sellerParty?.MobileParty` 并置 `isSelling = true`（`:39`-`:40`）。两者皆 null 直接 return（`:44`）——**不抛异常、不交易、钱货不动。**

**税是随机的，且只在「卖家是据点」这一支里收。** `:70` 的 `MBRandom.RoundRandomized(num × 税率)` 算出 `num2`，但它只在 `:86` 被 `ChangeGold(-num2)` 真正扣除。**另外两条分支没有这行**——所以玩家与玩家之间直接交易不收据点税。

**而 `:58` 与 `:73` 都有 `Campaign.Current.GameStarted` 守卫**——游戏未开始时商队路径**静默跳过转账**（物品已在 `:51`-`:52` 移走了）。

```csharp
public static void SafeSell(Settlement shop, PartyBase seller, PartyBase buyer, ItemRosterElement item, int count)
{
    if (shop == null || shop.Town == null)
    {
        Debug.Print("no town -> SellItemsAction.cs:29/:33 may throw or NRE; pass an explicit settlement", 0);
        return;
    }
    if (seller == null || seller.MobileParty == null)
    {
        Debug.Print("both parties immobile -> ApplyInternal returns silently at SellItemsAction.cs:44", 0);
        return;
    }
    int before = buyer != null ? buyer.ItemRoster.GetElementCount(item.EquipmentElement) : 0;
    SellItemsAction.Apply(seller, buyer, item, count, shop);
    int after = buyer != null ? buyer.ItemRoster.GetElementCount(item.EquipmentElement) : 0;
    Debug.Print("moved " + (after - before) + " units (receiverParty=seller, payerParty=buyer)", 0);
}
```

**上例第一段那个 `shop.Town == null` 检查是必须的**——村庄的 `Town` 要靠 `:33` 反查，而那条路有两个 null 分支。**上例第二段把参数顺序写在注释里**，因为 `receiverParty` 实为卖方这件事从签名上看不出来。

## 依赖

| 类型/流程 | 关系 |
| --- | --- |
| `Town.GetItemPrice(EquipmentElement, MobileParty, bool)` | `:49` 逐件定价，**本类不算价** |
| `GiveGoldAction` 四个重载 | `:60` / `:65` / `:75` / `:80` / `:97` / `:101` 五条转账路径 |
| `SettlementTaxModel` | `:70` 的税率、`:89` 的治安佣金 |
| `SettlementComponent.ChangeGold` | `:84` 直接加钱、`:86` 扣税 |
| `Town.TradeTaxAccumulated` | `:90` 佣金累计（写进城镇，不走事件） |

## 风险

- **本类两个 `PartyBase` 参数名与实现层相反。** 公开签名 `Apply(receiverParty, payerParty, ...)`（`:106`）在 `:108` 被转发为 `ApplyInternal(sellerParty, buyerParty, ...)`（`:9`），**即 `receiverParty` 是卖方、`payerParty` 是买方**。本页上方「使用示例」那行 `SellItemsAction.Apply(receiverParty, payerParty, subject, 100, null)` 按字面理解会把交易方向做反。

- **`:70` 的税是 `MBRandom.RoundRandomized(...)`，且只在「卖家是据点」分支（`:68`）内生效。** 同一笔交易两次调用的税额可能相差 1；玩家↔玩家的第三条分支（`:93`）根本不扣税——**这意味着税率改动在三条分支上的影响面完全不同。**

## 参见

- [本区域目录](../)
- [战役系统](../../campaign/)